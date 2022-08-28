import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../redux/features/message/messageSlice";
import { register } from "../redux/features/auth/authSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [successful, setSuccessful] = useState(false);
  // const { message } = useSelector((state) => state.message);

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
  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;
    setSuccessful(false);
    dispatch(register({ username, email, password }))
      .unwrap()
      .then((res) => {
        setSuccessful(true);
        history("/login");
      })
      .catch((err) => {
        setSuccessful(false);
        console.log(err.response)
      });
  };

  return (
    <>
      <div className="p-4 mb-20">
        <div className="shadow-2xl border md:w-4/12 w-full mx-auto p-4 mt-20 rounded">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form className="flex flex-col items-center justify-center w-full">
              {!successful && (
                <>
                  <Field
                    name="username"
                    className="block my-4 p-2 w-11/12 mx-auto border rounded focus:border-none"
                    type="text"
                    placeholder="username..."
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                  <Field
                    name="email"
                    className="block my-4 p-2 w-11/12 mx-auto border rounded"
                    type="email"
                    placeholder="email..."
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                  <Field
                    name="password"
                    className="block my-4 p-2 w-11/12 mx-auto border rounded"
                    type="password"
                    placeholder="password..."
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                  <button type='submit' className="bg-black text-white p-2 rounded w-11/12 mx-auto">
                    Sign Up
                  </button>
                </>
              )}
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
