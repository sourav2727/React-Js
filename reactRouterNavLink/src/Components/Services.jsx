import React from "react";
import img from '../assets/sit.jpg'


export const Services = () => {
  return (
    <div className="text-black mt-20">
      <h2 className="text-4xl font-bold">
        Discover Our <span className="text-4xl">Studio</span>
      </h2>
      <span className="flex ">
        <p>
          At our design studio, we are a collective of talented individuals
          ignited by our unwavering passion for transforming ideas into reality.
          With a harmonious blend of diverse backgrounds and a vast array of
          skill sets, we join forces to create compelling solutions for our
          esteemed clients. Collaboration is at the heart of what we do. Our
          team thrives on the synergy that arises when unique perspectives
          converge, fostering an environment of boundless creativity. By
          harnessing our collective expertise, we produce extraordinary results
          that consistently surpass expectations.
        </p>
       <img src={img} alt="" className="max-w-96 max-h-80" />
      </span>
    </div>
  );
};
