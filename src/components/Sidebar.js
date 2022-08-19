import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import burger from "../assets/Images/burger8.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const cartItems = useSelector((store) => store);

  return (
    <>
      <>
        {showSidebar ? (
          <button
            className="flex text-2xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <GiShoppingBag className="cursor-pointer" />
          </button>
        ) : (
          <>
            <GiShoppingBag
              className="cursor-pointer w-32 text-2xl"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </>
        )}

        <div
          className={`top-0 right-0 md:w-[24vw] w-[70vw] bg-white p-4 pl-20 mt-16 text-white fixed h-full z-40 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="text-black">
            <div className="flex items-center justify-between uppercase">
                <small>Product</small>
                <small>Quantity</small>
                <small>Price</small>
            </div>
            <hr />
            {cartItems.cartItems.map((item) => (
             <>
                <div className="flex items-center justify-between">
                    <div>
                    <img className="rounded w-16" src={item.image} alt="" />
                    <small>{item.name}</small>
                    </div>
                    <div>
                    <small>x3</small>
                    </div>
                    <div>
                    <p>ksh {item.price}</p>
                    </div>
                </div>
                <hr />
             </>
            ))}
            <div className="flex items-center justify-between">
              <p>Total</p>
              <p>ksh 400</p>
            </div>
            <div className="w-full">
              <button className="bg-black p-1 rounded w-full">
                <Link
                  to="/cart"
                  className="text-white no-underline text-2sm"
                >
                  go to cart
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Sidebar;
