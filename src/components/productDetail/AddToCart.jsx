import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { cartActions } from '../../store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';


const AddToCart = ({ product }) => {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const increase = () => {
        setAmount((prevAmount) => {
            return prevAmount + 1;
        })
    };

    const decrease = () => {
        setAmount((prevAmount) => {
            if (prevAmount === 1) {
                return 1;
            }
            return prevAmount - 1;
        })
    };

    const addItemsToCart = () => {
        if (!isAuthenticated) {
            dispatch(uiActions.showNotification({
                type: 'error',
                message: 'Please login first to add items to cart'
            }));
            navigate('/login');
            return;
        }

        const quantity = amount;
        const totalPrice = product.price * quantity;
        const payload = {
            ...product,
            quantity,
            totalPrice
        };
        dispatch(cartActions.addItemsToCart(payload));
        
        dispatch(uiActions.showNotification({
            type: 'success',
            message: `${product.name} added to cart!`
        }));
    };

    return (
        <div className='flex flex-col space-y-6'>
            {/* <div className='w-[140px] grid grid-cols-3 justify-center items-center'>
                <button type='button' onClick={decrease} className='py-4 w-8 h-4 flex justify-center items-center'>
                    <FaMinus />
                </button>
                <h2 className='text-6xl font-bold text-gray-700'>{amount}</h2>
                <button type='button' onClick={increase} className='py-4 w-8 h-4 flex justify-center items-center'>
                    <FaPlus />
                </button>
            </div> */}
            <div className='w-[140px] flex justify-between items-center'>
                <button type='button' onClick={decrease} className='py-4 w-8 h-4 flex justify-center items-center hover:text-red-500 transition-colors'>
                    <FaMinus />
                </button>
                <h2 className='text-6xl font-bold text-gray-700'>{amount}</h2>
                <button type='button' onClick={increase} className='py-4 w-8 h-4 flex justify-center items-center hover:text-green-500 transition-colors'>
                    <FaPlus />
                </button>
            </div>
            <button 
                type='button'
                className='w-[140px] uppercase text-primary bg-secondary-100 rounded-md px-4 py-3 shadow-md flex justify-center items-center hover:bg-secondary-200 transition-colors font-semibold' 
                onClick={addItemsToCart}
            >
                add to cart
            </button>
            {!isAuthenticated && (
                <p className='text-xs text-red-600 font-semibold'>* Login required to add to cart</p>
            )}
        </div>
    );
};


export default AddToCart;