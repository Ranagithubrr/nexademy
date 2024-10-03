import React from 'react';
import FeatureWomen from "../../assets/images/banner.svg";
import { Button } from "@material-tailwind/react";

const Herosection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-20 lg:grid-cols-2 lg:px-0">
      <div className="py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 md:text-left">
          Master Your Skills with ne<span className="text-customBlue">X</span>ademy Courses
        </h1>
        <h2 className="mt-4 text-2xl text-gray-600">
          Learn from the best, at your own pace
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          Explore thousands of expert-led courses and take the next step in your
          career.
        </p>

        <div className="flex mt-6 space-x-4 justify-left">
          <Button color="indigo" variant="gradient" className="rounded-full">
            Get Started
          </Button>
          <Button variant="outlined" className="rounded-full">
            Browse Courses
          </Button>
        </div>
      </div>

      <div className="">
        <img src={FeatureWomen} alt="featured women" className="" />
      </div>
    </div>
  );
};

export default Herosection;
