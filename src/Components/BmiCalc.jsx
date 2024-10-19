import React, { useState } from "react";

const BmiCalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    } else {
      setMessage("Please enter valid weight and height");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">BMI Calculator</h1>
        <form onSubmit={calculateBMI} className="space-y-6">
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Calculate BMI
          </button>
        </form>
        {bmi && (
          <div className="mt-4 text-center">
            <p className="text-xl">Your BMI: {bmi}</p>
            <p className="text-lg">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalc;
