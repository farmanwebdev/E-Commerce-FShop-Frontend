import React from 'react';

import ProductItem from './ProductItem';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const TheProducts = () => {
    const products = useSelector((state) => state.products.products);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    // Redirect if not admin
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <div className="flex items-center mx-4 my-8 p-8 bg-white shadow-2xl drop-shadow-md">
                <span className="text-4xl text-primary mr-6">
                    <AiOutlineUnorderedList />
                </span>
                <h2 className="uppercase text-4xl tracking-widest font-semibold">
                    The Products
                </h2>
            </div>
            <div className='bg-white mx-4 p-8 shadow-lg space-y-12'>
                {products.map((product) => {
                    return <ProductItem key={product.id} product={product} update={false} />
                })}
                
            </div>
        </div>
    );
};


export default TheProducts;