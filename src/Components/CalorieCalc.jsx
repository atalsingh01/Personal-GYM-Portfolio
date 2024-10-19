import React, { useState } from "react";

const CalorieCalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("maintain");
  const [calories, setCalories] = useState(null);
  const [protein, setProtein] = useState(null);

  const calculateCaloriesAndProtein = (e) => {
    e.preventDefault();
    if (weight && height && age) {
      const heightInMeters = height / 100;
      const weightInKg = weight;
      const ageInYears = age;

      // Calculate BMR using Mifflin-St Jeor Equation
      const bmr =
        10 * weightInKg + 6.25 * heightInMeters * 100 - 5 * ageInYears + 5;

      // Adjust BMR based on activity level
      let activityMultiplier;
      switch (activityLevel) {
        case "light":
          activityMultiplier = 1.375;
          break;
        case "moderate":
          activityMultiplier = 1.55;
          break;
        case "active":
          activityMultiplier = 1.725;
          break;
        case "very-active":
          activityMultiplier = 1.9;
          break;
        default:
          activityMultiplier = 1.2;
      }

      let dailyCalories = bmr * activityMultiplier;

      // Adjust calories based on goal
      if (goal === "lose") {
        dailyCalories -= dailyCalories * 0.2;
      } else if (goal === "gain") {
        dailyCalories += 500;
      }

      // Calculate protein intake
      const dailyProtein = weightInKg * 1.6; // 1.6 grams of protein per kg of body weight

      setCalories(dailyCalories.toFixed(2));
      setProtein(dailyProtein.toFixed(2));
    } else {
      alert("Please enter valid weight, height, and age");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Calories and Protein Intake Calculator
        </h1>
        <form onSubmit={calculateCaloriesAndProtein} className="space-y-6">
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
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-700"
            >
              Activity Level
            </label>
            <select
              name="activityLevel"
              id="activityLevel"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            >
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="light">Light (exercise 1-3 times/week)</option>
              <option value="moderate">
                Moderate (exercise 4-5 times/week)
              </option>
              <option value="active">
                Active (daily exercise or intense exercise 3-4 times/week)
              </option>
              <option value="very-active">
                Very Active (intense exercise 6-7 times/week)
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="goal"
              className="block text-sm font-medium text-gray-700"
            >
              Goal
            </label>
            <select
              name="goal"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            >
              <option value="maintain">Maintain Current Weight</option>
              <option value="lose">Lose Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Calculate
          </button>
        </form>
        {calories && protein && (
          <div className="mt-4 text-center">
            <p className="text-xl">Daily Calories: {calories} kcal</p>
            <p className="text-xl">Daily Protein: {protein} grams</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCalc;
