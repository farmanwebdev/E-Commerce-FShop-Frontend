import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import { formatPrice } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { createOrder } from '../../store/actions/order-actions';
import PaymentMethodHelp from './PaymentMethodHelp';

const CheckoutContent = ({ cart, totalPrice, name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [paymentProof, setPaymentProof] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
        if (method === 'cod') {
            setPaymentProof(null);
        }
    };

    const placeOrder = async () => {
        if (!cart || cart.length === 0) {
            swal({ title: 'Cart is empty', text: 'Add products before checkout.', icon: 'warning' });
            return;
        }

        if ((paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') && !paymentProof) {
            swal({ title: 'Payment proof required', text: 'Please upload payment proof for Easypaisa/JazzCash orders.', icon: 'warning' });
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append('shippingAddress', JSON.stringify({}));
            formData.append('billingAddress', JSON.stringify({}));
            formData.append('paymentMethod', paymentMethod);
            formData.append('totalPrice', totalPrice);
            formData.append('orderItems', JSON.stringify(cart));

            if (paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') {
                formData.append('paymentProof', paymentProof);
            }

            console.log('Sending Order FormData:', {
                shippingAddress: {},
                billingAddress: {},
                paymentMethod,
                totalPrice,
                orderItems: cart,
                paymentProof: paymentProof ? paymentProof.name : null
            });

            await dispatch(createOrder(formData));

            dispatch(cartActions.clearCart());
            swal({
                title: 'Order placed',
                text: `Your order is placed with ${paymentMethod.toUpperCase()}. Payment status: pending.`,
                icon: 'success'
            });

            navigate('/checkout-confirmation');
        } catch (error) {
            console.error('Order creation failed:', error);
            const message = error.response?.data?.message || error.message || 'Please try again.';
            swal({ title: 'Order failed', text: message, icon: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className="w-[95%] sm:w-[80%] lg:w-[50%] mx-auto px-8 py-12 shadow-lg rounded-xl">
                <h2 className="capitalize text-3xl font-bold tracking-wider mb-10 leading-relaxed">Hello, {name}</h2>
                <div className='flex justify-between items-center'>
                    <p className="text-lg capitalize mb-4">Subtotal : </p>
                    <span className="italic font-semibold">{formatPrice(totalPrice)}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-lg capitalize mb-4">estimated shipping : </p>
                    <span className="italic font-semibold">{formatPrice(5.99)}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-lg capitalize mb-4">shipping discount : </p>
                    <span className="italic font-semibold">{formatPrice(-5.99)}</span>
                </div>
                <hr className='my-6' />
                <div className='flex justify-between items-center'>
                    <p className="text-xl capitalize mb-4 font-bold">Total : </p>
                    <span className="italic font-bold">{formatPrice(totalPrice)}</span>
                </div>
            </div>
            <div className="w-[95%] sm:w-[80%] lg:w-[50%] mx-auto mt-12 px-8 py-12 shadow-lg rounded-xl">
                <div className="mb-6">
                    <label className='block mb-2 font-semibold'>Payment Method</label>
                    <div className='space-y-2'>
                        <label className='flex items-center gap-2'>
                            <input type='radio' name='paymentMethod' value='cod' checked={paymentMethod === 'cod'} onChange={() => handlePaymentMethodChange('cod')} />
                            Cash on Delivery
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type='radio' name='paymentMethod' value='easypaisa' checked={paymentMethod === 'easypaisa'} onChange={() => handlePaymentMethodChange('easypaisa')} />
                            Easypaisa
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type='radio' name='paymentMethod' value='jazzcash' checked={paymentMethod === 'jazzcash'} onChange={() => handlePaymentMethodChange('jazzcash')} />
                            JazzCash
                        </label>
                    </div>
                </div>

                <PaymentMethodHelp method={paymentMethod} />

                {(paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') && (
                    <div className='mb-6'>
                        <label className='block mb-2 font-semibold'>Payment Proof (Upload Screenshot)</label>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={(e) => setPaymentProof(e.target.files[0])}
                            className='w-full p-2 border rounded'
                        />
                        {paymentProof && (
                            <p className='text-sm text-gray-600 mt-1'>Selected: {paymentProof.name}</p>
                        )}
                    </div>
                )}

                <button
                    className='capitalize py-3 text-xl font-bold tracking-widest text-white bg-secondary-100 w-full drop-shadow-2xl rounded'
                    onClick={placeOrder}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Placing Order...' : 'Place Order'}
                </button>
            </div>
        </div>
    );
};


export default CheckoutContent;