import React from "react";
import Card from "./Card";
import gymcard from "../../src/assets/gymcard.jpg"
import armcard from "../../src/assets/armcard.jpg"
import yogacard from "../../src/assets/yogacard.jpg"
const CardTab = () => {
  return (
    <div className="flex ml-20 mr-20 mt-14 mb-16   items-center">
      <div className="ml-12 mt-12 mb-12">
        <Card
          className="ml-6 flex "
          title="Classic Gym Workout"
          description="Join our classic gym workout sessions to stay fit and healthy."
          image={gymcard}
          type="Gym"
        />
      </div>
      <div className="ml-12 mt-12 mb-12">
        <Card
          title="Classic yoga Workout"
          description="Join our classic gym workout sessions to stay fit and healthy."
          image={yogacard}
          type="Yoga"
        />
      </div>
      <div className="ml-12 mt-12 mb-12">
        <Card
          title="Classic armwrestling Workout"
          description="Join our classic gym workout sessions to stay fit and healthy."
          image={armcard} 
          type="Armwrestling"
        />
      </div>
    </div>
  );
};

export default CardTab;
