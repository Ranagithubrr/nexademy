import React from 'react';
import Logo from '../../assets/images/logo_black.png';

const Footer = () => {
    return (
        <footer className="py-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <img src={Logo} alt="nexademy" className='h-16' />
                {/* Navigation Links */}
                <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    <a href="#" className="hover:text-blue-400">Home</a>
                    <a href="#" className="hover:text-blue-400">About</a>
                    <a href="#" className="hover:text-blue-400">Services</a>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                </nav>

                {/* Copyright */}
                <div className="text-sm mt-4 md:mt-0">
                    &copy; {new Date().getFullYear()} neXademy 2024. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
