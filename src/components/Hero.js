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
          <div className="hidden md:block md:w-1/2 w-full mx-auto pl-10 mt-10">
            <h1 className="mt-40v text-6xl font-black">
              <span className="text-4xl">Try Our new</span> <br /> Double Decker
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae nihil delectus odio voluptatum magni provident
              dignissimos fuga maiores veritatis architecto.
            </p>
            <button className="bg-yellow text-white p-2 uppercase">Order Now</button>
          </div>
          <div className="md:w-1/2 w-full p-2 bg-yellow md:rounded-bl-3xl flex items-center overflow-hidden">
            <img className="h-90v mt-12" src={burger} alt="burger" />
            <img className="h-40v my-40" src={burger1} alt="burger" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
