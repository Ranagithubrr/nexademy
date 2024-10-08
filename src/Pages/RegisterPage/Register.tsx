import React, { useState } from 'react';
import Logo from '../../assets/images/logo_black.png';
import { Input, Button } from "@material-tailwind/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-center mb-4">
                    <img src={Logo} alt="Logo" className="h-16" />
                </div>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
                <form>
                    <div className="mb-4">
                        <Input
                            type="text"
                            label="Your Full Name"
                            size="lg"
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="email"
                            label="Email"
                            size="lg"
                            className="w-full"
                        />
                    </div>
                    <div className="relative">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            size="lg"
                            className="w-full"
                        />
                        <button
                            type="button"
                            onClick={handleTogglePassword}
                            className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                        >
                            {showPassword ? (
                                <IoMdEyeOff className="h-5 w-5 text-gray-700" />
                            ) : (
                                <IoMdEye className="h-5 w-5 text-gray-700" />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center justify-between my-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className="mr-2 cursor-pointer"
                            />
                            <label htmlFor="rememberMe" className="text-gray-700 cursor-pointer">Remember Me</label>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </div>
                    </div>
                    <Button
                        color="blue"
                        size="lg"
                        className="w-full rounded-full"
                    >
                        Register
                    </Button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
