import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaShoppingCart, FaBox, FaUsers, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import BarChart from '../../charts/BarChart';
import LineChart from '../../charts/LineChart';
import DoughnutChart from '../../charts/DoughnutChart';
import RadarChart from '../../charts/RadarChart';



const DashboardContent = () => {
    return (
        <div className='w-full bg-gray-200 p-7'>
            {/* start banner */}
            <div className='bg-indigo-200 p-6 rounded-lg shadow-md mb-7'>
                <div className='text-4xl text-gray-800 font-medium'>Good Morning, Administrator.😃</div>
                <div className='mt-4 text-gray-700'>These are the stats for today, have a good day.</div>
            </div>

            {/* Quick Actions */}
            <div className='bg-white p-6 rounded-lg shadow-md mb-7'>
                <h2 className='text-2xl font-bold mb-4'>Quick Actions</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <Link to='/admin/dashboard/orders' className='bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors'>
                        <FaShoppingCart className='text-2xl mb-2' />
                        <h3 className='font-semibold'>Manage Orders</h3>
                        <p className='text-sm'>Accept/Reject orders</p>
                    </Link>
                    <Link to='/admin/dashboard/products' className='bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors'>
                        <FaBox className='text-2xl mb-2' />
                        <h3 className='font-semibold'>View Products</h3>
                        <p className='text-sm'>List all products</p>
                    </Link>
                    <Link to='/admin/dashboard/addproduct' className='bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition-colors'>
                        <FaCheckCircle className='text-2xl mb-2' />
                        <h3 className='font-semibold'>Add Product</h3>
                        <p className='text-sm'>Create new product</p>
                    </Link>
                    <Link to='/admin/dashboard/updateproducts' className='bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition-colors'>
                        <FaTimesCircle className='text-2xl mb-2' />
                        <h3 className='font-semibold'>Update Products</h3>
                        <p className='text-sm'>Edit existing products</p>
                    </Link>
                </div>
            </div>

            <div className='flex gap-6 mb-7'>
                <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>
                    <h2 className="font-bold text-xl text-gray-700">F-Shop</h2>
                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">products</h3>
                    <div className='flex items-center mb-4'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-green-500 rounded-full p-1 text-white text-sm font-bold align-text-top">+49%</span>
                    </div>
                    <div className='w-full' style={{ height: '300px' }}>
                        <BarChart />
                    </div>
                </div>
                <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>
                    <h2 className="font-bold text-xl text-gray-700">F-Shop</h2>
                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">products</h3>
                    <div className='flex items-center mb-4'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-red-500 rounded-full p-1 text-white text-sm font-bold align-text-top">-9%</span>
                    </div>
                    <div className='w-full' style={{ height: '300px' }}>
                        <LineChart />
                    </div>
                </div>
            </div>


            <div className='flex gap-6 pb-7'>
                <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>
                    <h2 className="font-bold text-xl text-gray-700">F-Shop</h2>
                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">products</h3>
                    <div className='flex items-center mb-4'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-green-500 rounded-full p-1 text-white text-sm font-bold align-text-top">+49%</span>
                    </div>
                    <div className='w-full' style={{ height: '300px' }}>
                        <DoughnutChart />
                    </div>
                </div>
                <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>
                    <h2 className="font-bold text-xl text-gray-700">F-Shop</h2>
                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">products</h3>
                    <div className='flex items-center mb-4'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-red-500 rounded-full p-1 text-white text-sm font-bold align-text-top">-9%</span>
                    </div>
                    <div className='w-full' style={{ height: '300px' }}>
                        <RadarChart />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DashboardContent;