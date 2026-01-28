import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import DashboardNavbar from '../../components/dashboard/DashboardNavbar';
import TheSidebar from '../../components/dashboard/TheSidebar';
import DashboardContent from '../../components/dashboard/DashboardContent';


const Dashboard = () => {
    const { pathname } = useLocation();
    
    return (
        <div className='w-full flex h-screen bg-gray-200'>
            <div className='w-[300px] h-screen top-0 left-0 sticky bg-gradient-to-tr from-green-200 to-primary overflow-y-auto'>
                <TheSidebar />
            </div>
            <div className='flex-1 flex flex-col overflow-hidden'>
                <DashboardNavbar />
                <div className='flex-1 overflow-y-auto'>
                    {pathname === '/admin/dashboard' && <DashboardContent />}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};


export default Dashboard;