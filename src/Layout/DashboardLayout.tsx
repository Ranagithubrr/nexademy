import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import NavbarWithMegaMenu from '../Components/Navbar/Navbar';

const DashboardLayout = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(prev => !prev);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full transition-all duration-300 overflow-hidden ${showSidebar ? 'w-80' : 'w-0'}`}
            >
                {/* Sidebar Content */}
                {showSidebar && <Sidebar />}
            </div>

            {/* Main Content */}
            <div className={`flex-grow p-6 transition-all duration-300 ${showSidebar ? 'ml-80' : 'ml-0'}`}>
                <div className='flex items-center'>
                    <button
                        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        {showSidebar ? <FaBarsStaggered /> : <FaBars />}
                    </button>
                    <NavbarWithMegaMenu Dashboard={false}/>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
