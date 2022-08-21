import React from "react";
import burger1 from "../assets/Images/hero.png";
import Navigation from "./Navigation";
import burger from "../assets/Images/burger7.png";
import smoke from "../assets/Images/pizza-smoke.png";
import rider from "../assets/Images/rider.png";

const Hero = () => {
  return (
    <>
      <div className="bg-white h-100v">
        <Navigation />
        <div className="md:flex items-center justify-between">
          <div className="hidden md:block md:w-1/2 w-full mx-auto p-2 mt-20">
            <h1 className="mt-40v">
              We make the double <br /> Cheesy Burger
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae nihil delectus odio voluptatum magni provident
              dignissimos fuga maiores veritatis architecto.
            </p>
          </div>
          <div className="md:w-1/2 w-full p-2 bg-yellow flex items-center overflow-hidden">
            <img className="h-90v mt-12" src={burger} alt="burger" />
            <img className="h-40v my-40" src={burger1} alt="burger" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
