import React from "react";
import FeatureWomen from "../../assets/images/banner.svg";
import { Button } from "@material-tailwind/react";

const Herosection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 px-6 lg:px-0">
      <div className="py-10">
        <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left">
          Master Your Skills with neXademy Courses
        </h1>
        <h2 className="text-2xl text-gray-600 mt-4">
          Learn from the best, at your own pace
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Explore thousands of expert-led courses and take the next step in your
          career.
        </p>

        <div className="mt-6 flex justify-left space-x-4">
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
