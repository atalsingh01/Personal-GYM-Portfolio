import React from "react";
import greetLogo from "../../src/assets/greetLogo.jpg";
import { Link } from "react-router-dom";

const Greet = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center pt-8 pb-8 mt-0.5 mb-4"
      style={{ backgroundImage: `url(${greetLogo})` }}
    >

      <div className="text-center mt-40"> 
      <h2 className="text-3xl font-semibold text-custom-blue font-poppins uppercase mt-2 text-white">
          FITNESS FOR LIFE ,
        </h2>
        <h2 className="text-3xl font-semibold text-custom-blue font-poppins uppercase mt-2 text-white">
        STRENGTH FOR ARMWRESTLING
        </h2>
        
      </div>
      <div className="text-center mt-44">
        <h1 className="text-4xl font-bold text-custom-blue font-poppins uppercase text-white">
           Atal Pratap Singh
        </h1>
        <h2 className="text-2xl font-semibold text-custom-blue font-poppins uppercase mt-2 text-white">
          Personal Trainer
        </h2>
        <div className="mt-10 ">
          <Link to="/courses" className=" text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4">courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Greet;
