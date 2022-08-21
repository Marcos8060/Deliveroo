import React from "react";
import burger1 from "../assets/Images/hero.png";
import Navigation from "./Navigation";
import burger from "../assets/Images/burger7.png";
import smoke from "../assets/Images/pizza-smoke.png";
import rider from '../assets/Images/rider.png'


const Hero = () => {
  return (
    <>
      <div className="bg-white h-100v">
        <Navigation />
        <div className="flex items-center justify-between">
          <div className="w-1/2 p-2">
            {/* <h1>We make the double Cheesy Burger</h1> */}
          </div>
          <div className="w-1/2 p-2 bg-yellow rounded flex overflow-hidden">
                <img className="h-90v mt-12" src={burger} alt="burger" />
                <img className="h-40v my-40" src={burger1} alt="burger" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
