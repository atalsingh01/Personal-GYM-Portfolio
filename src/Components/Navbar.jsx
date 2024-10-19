import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-16">
         
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 ">
              <h1 className="text-white text-2xl font-bold">Fit With Atal</h1>
            </div>
            <div className="hidden sm:block sm:ml-16">
              <div className="flex space-x-5">
                <Link
                  to="/Home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/Services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  services
                </Link>
                <Link
                  to="/BmiCalculator"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  BmiCalculator
                </Link>
                <Link
                  to="/caloriesCalculator"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  caloriesCalculator
                </Link>

                <Link
                  to="/About"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>

                <Link
                  to="/contact us"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  contact us
                </Link>
              </div>
            </div>
            <div className="flex space-x-5 ml-48">
              <Link
                to="/login"
                className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium "
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
