import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../redux/features/auth/authSlice";
import { clearMessage } from "../redux/features/message/messageSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
//   const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        history("/profile");
        console.log(formValue)
      })
      .catch((err) => {
        setLoading(false);
      });
  };

//   if (isLoggedIn) {
//     return history("/profile");
//   }

  return (
    <>
      <div className="p-4 mb-20">
        <div className="shadow-2xl border md:w-4/12 w-full mx-auto p-4 mt-20 rounded">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form className="flex flex-col items-center justify-center w-full">
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
                  <button
                    type="submit"
                    className="bg-black text-white p-2 rounded w-11/12 mx-auto"
                  >
                    Sign Up
                  </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
