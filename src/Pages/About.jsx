import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p>
          Hi, I’m ATAL PRATAP SINGH , a passionate personal trainer and fitness
          coach dedicated to helping you achieve your health and fitness goals.
          With over 3 years of experience in the fitness industry, I specialize
          in gym training, arm wrestling.
          <br /> <br />
          My fitness journey began 3 years ago when I discovered the
          transformative power of exercise. Since then, I’ve been committed to
          sharing my knowledge and helping others lead healthier, more active
          lives.
          <br /> <br />
          Ready to start your fitness journey? Contact me today to learn more
          about our programs and how we can help you achieve your goals. Follow
          us on social media links for tips, updates, and inspiration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add team member cards here */}
           still searching for a good team..........!
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Programs and Services</h2>
        <p>
          We offer a variety of programs including personal training, group
          classes...<br/> <br/>
           Services Offered<br/> <br/>
            Gym Training: Customized workout plans
          tailored to your fitness level and goals.<br/>
           Arm Wrestling: Specialized
          training to enhance your strength and technique.<br/>
           Yoga Classes:
          Sessions designed to improve flexibility, reduce stress, and promote
          overall wellness.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Join Us</h2>
        <p>
          Ready to start your fitness journey?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up now
          </Link>{" "}
          or{" "}
          <Link to="/contact us" className="text-indigo-600 hover:underline">
            contact us
          </Link>{" "}
          for more information.
        </p>
      </section>
    </div>
  );
};

export default About;
