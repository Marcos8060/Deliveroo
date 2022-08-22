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

      <div className="grid grid-cols-4 gap-3">
        {data.map((item) =>(
          <div className="item" key={item.id}>
            <img src={item.image} alt="" />
            <div className="text-center">
              <p>{item.name}</p>
              <small>{item.description}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
