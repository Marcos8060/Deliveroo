import React, { useState, useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import axios from "axios";
import { products } from "../axios";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";


const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(products)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  }, [data]);

  return (
    <div className="">
      <h3 className="text-center text-yellow font-bold mt-20 ">Quick Pick</h3>
      <h1 className="text-center text-black font-bold md:text-6xl text-4xl mb-20">
        Popular Goods
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-2">
        {data.map((item) => (
          <div>
            <div className="bg-white hover:shadow-2xl">
              <img className="md:h-40v h-20v w-full rounded" src={item.image} alt="" />
              <div className="info flex items-center justify-between">
                <small>{item.name}</small>
                <BsPlusCircle />
                <GiShoppingBag />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
