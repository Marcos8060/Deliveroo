import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import burger from "../assets/Images/burger8.jpeg";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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
          className={`top-0 right-0 w-[24vw] bg-white p-10 pl-20 mt-16 text-white fixed h-full z-40 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="text-black">
            {/* <p>3 Items</p> */}
            <div className="flex items-center justify-between">
              <div>
                <img className="rounded w-16" src={burger} alt="" />
                <small>Pepperoni</small>
              </div>
              <div>
                <p>ksh 300</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Sidebar;
