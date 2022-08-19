import React from "react";
// import Navigation from '../components/Navigation'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from "../components/Footer";
// import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
// import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store);
  // console.log(cartItems.cartItems);

  const getTotals = () => {
    let totalPrice = 0;
    cartItems.cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice };
  };

  if (cartItems.cartItems.length < 1) {
    return (
      <>
        <div className="bg-black w-12/12 h-32 flex justify-center items-center">
          <h1 className="text-center uppercase text-white font-semibold">
            Shopping Cart
          </h1>
        </div>
        <section className="text-center my-20">
          <h1 className="text-4xl font-semibold">Your Bag</h1>
          <p>Is currently empty</p>
        </section>
      </>
    );
  }
  return (
    <>
      <div className="bg-black w-12/12 h-20v flex justify-center items-center">
        <h1 className="text-center text-xl uppercase text-white font-semibold">
          Shopping Cart
        </h1>
      </div>
      <div className="hidden md:block md:flex items-center justify-between w-10/12 mx-auto mt-24 uppercase font-semibold">
        <h1 className="text-xl">Product</h1>
        <h1 className="ml-48 text-xl">Price </h1>
        <h1 className="text-xl">Quantity</h1>
        <h1 className="text-xl">Total</h1>
      </div>
      <hr className="hidden md:block w-10/12 mx-auto mt-2 mb-4 text-gray" />

      {cartItems.cartItems.map((item) => (
        <>
          <div
            key={item.id}
            className="md:flex grid md:items-center mt-20 md:justify-between w-10/12 mx-auto"
          >
            <div className="flex items-center">
              <img
                className="w-32 md:mr-3 mx-4 md:cartImg rounded"
                src={item.image}
                alt=""
              />
              <div>
                <p className="font-thin">{item.name}</p>
                <p className="font-semibold">Price: {item.price}</p>
                <RiDeleteBinLine
                  onClick={() => dispatch(removeItem(item.id))}
                  className="mt-2 hover:text-red-400 cursor-pointer"
                />
              </div>
            </div>
            <div className="md:price text-center">
              <p>ksh {item.price}</p>
            </div>
            <div className="flex items-center justify-center md:border md:quantity">
              <AiOutlineMinus
                onClick={() => {
                  if (item.amount === 1) {
                    dispatch(removeItem(item.id));
                    return;
                  }
                  dispatch(decreaseQuantity(item));
                }}
                className="font-semibold mx-2 cursor-pointer"
              />
              <p className="font-bold mt-3">{item.quantity}</p>
              <AiOutlinePlus
                onClick={() => dispatch(increaseQuantity(item))}
                className="mx-2 cursor-pointer"
              />
            </div>
            <div>
              <p className="text-center">ksh {item.price * item.quantity}</p>
            </div>
          </div>

          <hr className="w-10/12 mx-auto mt-4 mb-4 text-gray" />
        </>
      ))}
      <div className="w-4/12 mx-auto">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-black py-2 px-4 uppercase text-white"
        >
          Clear Cart
        </button>
      </div>

      <div className="md:flex grid items-center justify-between w-10/12 mx-auto mt-10">
        <div>
          <p>Add Order Note</p>
          <form>
            <textarea
              className="p-2 border w-12/12 md:mb-10"
              name=""
              id=""
              cols="40"
              rows="4"
              placeholder="how can we help you?"
            ></textarea>
          </form>
        </div>
        <div className="text-center">
          <h1 className="uppercase font-bold text-xl">
            subtotal: ksh {getTotals().totalPrice.toFixed(2)}
          </h1>
          <p>Taxes, shipping and discounts codes calculated at checkout</p>
          <button className="uppercase bg-black text-white py-2 px-8 mt-2 font-semibold mb-10">
            Check out
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
