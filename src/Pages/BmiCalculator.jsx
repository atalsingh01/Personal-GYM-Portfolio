import React from "react";
import BmiCalc from "../Components/BmiCalc";

const BmiCalculator = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <BmiCalc/>
      </div>
    </div>
  );
};

export default BmiCalculator;
