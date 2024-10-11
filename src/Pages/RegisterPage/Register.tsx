import React, { useState } from 'react';
import Logo from '../../assets/images/logo_black.png';
import { Input, Button } from "@material-tailwind/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type formDataType = {
    fullName: string,
    email: string,
    password: string,
}

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    // Validation schema using Yup
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Your Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const initialValues = {
        fullName: '',
        email: '',
        password: '',
    };

    const onSubmit = (values: formDataType) => {
        console.log('Form data', values);
        // Handle registration logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-center mb-4">
                    <img src={Logo} alt="Logo" className="h-16" />
                </div>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-4">
                                <Field
                                    name="fullName"
                                    as={Input}
                                    type="text"
                                    label="Your Full Name"
                                    size="lg"
                                    className="w-full"
                                />
                                <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    name="email"
                                    as={Input}
                                    type="email"
                                    label="Email"
                                    size="lg"
                                    className="w-full"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="relative mb-4">
                                <Field
                                    name="password"
                                    as={Input}
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
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
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
                                type="submit"
                                className="w-full rounded-full"
                            >
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
