import React from "react";
import WorkoutCard from "../Components/WorkoutCard";
import chestimg from "../../src/assets/chestimg.jpg";
import triimg from "../../src/assets/triimg.jpg";
import backimg from "../../src/assets/backimg.jpg";
import absimg from "../../src/assets/absimg.jpg";
import shoulderimg from "../../src/assets/shoulderimg.jpg";
import legimg from "../../src/assets/legimg.jpg";
const Gym = () => {
  return (
    <div className="bg-zinc-900 mt-0 mb-0">
      <h1 className="pt-7 text-2xl font-bold text-center text-white hover:text-gray-200"> ULTIMATE WORKOUT PLAN FOR EACH MUSCLE</h1>

      {/*chest workout component*/}
      <WorkoutCard
        title="ULTIMATE CHEST WORKOUT  "
        description={[
          "1.Incline Dumbbell Press:- Targets the clavicular head (upper chest) ",
          "2.Flat Bench Press:- Works the sternal head (middle chest) ",
          "3.Cable Flys:- Isolates the chest muscles and can be adjusted to target different parts.",
          "4.Chest Dips:- Focuses on the lower chest.",
          "5.Push-Ups:- A versatile bodyweight exercise that can be modified to target various parts.",
        ]}
        image={chestimg}
      />
      
      {/*BACK workout component*/}
      <WorkoutCard
        title="ULTIMATE BACK WORKOUT  "
        description={[
          " 1.Deadlifts: Engage the entire back",
          "2.Lat Pulldowns: Isolate the lats",
          "3.Seated Cable Rows: Focus on the middle bac",
          "4.Face Pulls: Target the rear deltoids and upper traps",
          "5.Pull-Ups/Chin-Ups: Excellent for targeting the latissimus dorsi.",
        ]}
        image={backimg}
      />
      
      {/*TRICEPS workout component*/}
      <WorkoutCard
        title="ULTIMATE TRICEPS WORKOUT  "
        description={[
          "1.Triceps Pushdowns: This exercise allows for constant tension on the triceps,",
          "2.Overhead Triceps Extensions:  you can target the long head of the triceps",
          "3.Triceps Dips: Dips are excellent for targeting the lower fibers of the triceps.",
          "4.Skull Crushers: Especially for the long head.",
          "5.Triceps Kickbacks: kickbacks can effectively target the long head .",
        ]}
        image={triimg}
      />
      
      {/*ABS workout component*/}
      <WorkoutCard
        title="ULTIMATE ABS WORKOUT  "
        description={[
          "1.LOADING...........?,",
          "2.Overhead Triceps Extensions:  you can target the long head of the triceps",
          "3.Triceps Dips: Dips are excellent for targeting the lower fibers of the triceps.",
          "4.Skull Crushers: Especially for the long head.",
          "5.Triceps Kickbacks: kickbacks can effectively target the long head .",
        ]}
        image={absimg}
      />

      {/*BICEPS workout component*/}
      <WorkoutCard
        title="ULTIMATE BICEPS WORKOUT  "
        description={[
          "1.Barbell Curl: A classic exercise that targets both heads of the biceps",
          "2.Hammer Curl: Works the brachialis and the outer portion of the biceps",
          "3.Chin-Ups: A compound movement that heavily engages the biceps.",
          "4.Preacher Curl: Stabilizes the arms and helps to focus the tension on the biceps.",
          "5.Concentration Curl:  .",
        ]}
        image={triimg}
      />

      {/*SHOULDER workout component*/}
      <WorkoutCard
        title="ULTIMATE SHOULDER WORKOUT  "
        description={[
          "1.Lateral Raises: Isolate the lateral deltoid and help to develop shoulder width",
          "2.Front Raises: Specifically target the anterior deltoid ",
          "3.Reverse Flies: Target the posterior deltoid, which is often neglected.",
          "4.Barbell Overhead Press: A compound movement that targets all three heads of the deltoid.",
          "5.Arnold Presses: A variation of the dumbbell press that combines a press with a rotation.",
        ]}
        image={shoulderimg}
      />

      {/*FULLBODY workout component*/}
<WorkoutCard
        title="ULTIMATE FLLBODY WORKOUT  "
        description={[
          "1.Deadlifts: Engage the entire back",
          "2.Cable Flys:- Isolates the chest muscles and can be adjusted to target different parts",
          "3.Arnold Presses: A variation of the dumbbell press that combines a press with a rotation.",
          "4.Squats: A fundamental compound movement that targets the quads, glutes, and hamstrings",
          "5.Barbell Curl: A classic exercise that targets both heads of the biceps .",
        ]}
        image={absimg}
      />

      {/*LEG workout component*/}
      <WorkoutCard
        title="ULTIMATE LEG WORKOUT  "
        description={[
          "1.Squats: A fundamental compound movement that targets the quads, glutes, and hamstrings.",
          "2.Leg Press: Allows you to focus on the quads and glutes",
          "3.Leg Curls: Isolate the hamstrings, which are crucial for leg development.",
          "4.Calf Raises: Target the often-neglected calf muscles for complete lower leg development.",
          "5.Lunges: Great for targeting the quads and glutes.",
        ]}
        image={legimg}
      />
    </div>
  );
};

export default Gym;
