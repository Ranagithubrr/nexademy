import { Rating } from '@mui/material'
import React from 'react'

const CourseCard = () => {
    return (
        <div>
            <a href="javascript:void(0)">
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                    <div className="absolute top-5 right-5 bg-[#4454B2] text-white text-xs font-semibold rounded-full px-3 py-1 shadow-lg z-10">
                        10% OFF
                    </div>

                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="card-image" />
                    </div>
                    <div className="p-4">
                        <div className="mb-4 rounded-full bg-green-500 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                            POPULAR
                        </div>
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            Website Review Check
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to "Naviglio" where you can enjoy the main night life in
                            Barcelona.
                        </p>
                    </div>
                    <div className="flex items-center justify-between px-4">
                        <div className="flex items-center">
                            <img
                                alt="Tania Andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                className="relative inline-block h-8 w-8 rounded-full"
                            />
                            <div className="flex flex-col ml-3 text-sm">
                                <span className="text-slate-800 font-semibold">Lewis Daniel</span>
                                <span className="text-slate-600">
                                    January 10, 2024
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center px-4 py-2'>
                        <span>4.4</span><Rating readOnly name="half-rating" defaultValue={4.4} precision={0.1} />(102)
                    </div>
                    <div className="flex flex-col items-start space-y-2 p-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold ">
                                $50
                            </span>
                            <span className="text-sm text-red-500 line-through">$65</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    )
}

export default CourseCard