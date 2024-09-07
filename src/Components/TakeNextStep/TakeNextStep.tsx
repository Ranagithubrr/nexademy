import React from 'react';
import FeatureWomen from "../../assets/images/nextStep.svg";
import { Button } from "@material-tailwind/react";

const TakeNextStep = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 px-6 lg:px-0 items-center">
            <div className="">
                <img src={FeatureWomen} alt="featured women" className="transform -scale-x-100" />
            </div>
            <div className="py-10">
                <h1 className="text-4xl font-bold text-gray-800 ">
                    Advance toward your personal and career aspirations with ne<span className="text-customBlue">X</span>ademy
                </h1>
                <div className="mt-6 flex justify-left space-x-4">
                    <Button color="indigo" variant="gradient" className="rounded-full">
                        Get Started
                    </Button>             
                </div>
            </div>
        </div>
    )
}

export default TakeNextStep