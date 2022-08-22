import React, { useState, useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import axios from "axios";
import { products } from "../axios";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FiEye } from 'react-icons/fi'


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

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-2">
        {data.map((item) =>(
          <div className="item p-2 shadow-md" key={item.id}>
            <img src={item.image} alt="" />
            <div className="text-center">
              <p className="font-bold uppercase">{item.name}</p>
              <small className="text-xs">{item.description.substring(0, 70)}{item.description.length >= 70 && '...'}</small>
              <div className="flex items-center justify-around">
                <span className="font-bold">${item.price}</span>
                <FiEye className="text-green bg-unknown p-2 rounded text-4xl"/>
                <GiShoppingBag className="text-green bg-unknown p-2 rounded text-4xl"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
