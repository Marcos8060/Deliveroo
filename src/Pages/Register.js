import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../redux/features/message/messageSlice";
import { register } from '../redux/features/auth/authSlice'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [successfull, setSuccessfull] = useState(false);
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // validation  schema
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });

//   HandleRegister Function
  const HandleRegister = (formValue) =>{
    const { username, email, password } = formValue;
    setSuccessfull(false);
    dispatch(register({ username, email,password}))
    .unwrap()
    .then((res) =>{
        setSuccessfull(true);
    })
    .catch((err) =>{
        setSuccessfull(false);
    })
  }

  return (
    <>
      <div className="p-4 mb-20">
        <div className="shadow-2xl md:w-4/12 w-full mx-auto p-4 mt-20 rounded">
          <form className="flex flex-col items-center justify-center w-full">
            <input
              name="username"
              className="block my-4 p-2 w-11/12 mx-auto border rounded focus:border-none"
              placeholder="username..."
            />
            <input
              name="email"
              className="block my-4 p-2 w-11/12 mx-auto border rounded"
              type="text"
              placeholder="email..."
            />
            <input
              name="password"
              className="block my-4 p-2 w-11/12 mx-auto border rounded"
              type="text"
              placeholder="password..."
            />
            <button className="bg-black text-white p-2 rounded w-11/12 mx-auto">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
