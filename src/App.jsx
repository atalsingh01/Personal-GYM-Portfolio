import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Greet from "./Components/Greet";
import CardTab from "./Components/CardTab";
import About from "./Pages/About";
import WorkoutCard from "./Components/WorkoutCard";
import Gym from "./Pages/Gym";
import Yoga from "./Pages/Yoga";
import Armwrestling from "./Pages/Armwrestling";
import BmiCalculator from "./Pages/BmiCalculator";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BmiCalc from "./Components/BmiCalc";
import CalorieCalculator from "./Pages/CalorieCalculator";
import ContactUs from "./Components/ContactUs";
import WorkoutDetails from "./Pages/WorkoutDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Home" element={<HomePage />} />
          <Route exact path="/BmiCalculator" element={<BmiCalculator />} />
          <Route
            exact
            path="/caloriesCalculator"
            element={<CalorieCalculator />}
          />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/Services" element={<CardTab />} />
          <Route exact path="/Services/:type" element={<WorkoutDetails />} />
          <Route exact path="/contact us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
