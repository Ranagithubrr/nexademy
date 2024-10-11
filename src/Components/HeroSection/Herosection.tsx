import React, { useRef } from 'react';
import FeatureWomen from "../../assets/images/banner.svg";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Herosection = () => {
  const constraintsRef = useRef(null);
  return (
    <div ref={constraintsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 px-6 lg:px-0">
      <motion.div className="py-10"
        initial={{ x: '0', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left">
          Master Your Skills with ne<span className="text-customBlue">X</span>ademy Courses
        </h1>
        <h2 className="text-2xl text-gray-600 mt-4">
          Learn from the best, at your own pace
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Explore thousands of expert-led courses and take the next step in your
          career.
        </p>

        <div className="mt-6 flex justify-left space-x-4">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{
              scale: [1, 1.1, 1.2, 1.1, 1.2, 1],
              transition: { duration: 1, delay: 0 },
            }}
            drag
            dragConstraints={constraintsRef}
          >
            <Button color="indigo" variant="gradient" className="rounded-full">
              Get Started
            </Button>
          </motion.div>
          <Button variant="outlined" className="rounded-full">
            Browse Courses
          </Button>
        </div>
      </motion.div>

      <motion.div className="overflow-hidden"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <img src={FeatureWomen} alt="featured women" className="" />
      </motion.div>
    </div>
  );
};

export default Herosection;
