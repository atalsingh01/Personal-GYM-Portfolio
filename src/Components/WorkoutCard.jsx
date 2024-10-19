import React from "react";
const WorkoutCard = ({ title, description, image }) => {
  
  return (
    <div className=" h-96 mr-12 mt-10 mb-8 ml-8  overflow-y-auto">
      <div
        className="h-full w-full bg-cover  bg-center "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-4">
          <h1 className="top-14 left-10 text-center text-white font-bold">
            {title}
          </h1>

          <div className=" mt-5 mx-3 italic top-14 left-10 text-center text-red-600 space-y-6 ">
            {description.map((des, index) => (
              <p key={index} className="leading-relaxed">
                {des}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
