import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { InputGroup, Form, FloatingLabel, Spinner } from "react-bootstrap";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
//
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Register_mutation } from "../../graphql/mutations/Login";
import { toast, ToastContainer } from "react-toastify";

const registerSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
  })
  .required();

const ToastMessage = ({ name }) => {
  const { errors } = useFormContext();
  Object.entries(errors).map(([key, value]) =>
    toast.error(errors[key].message)
  );

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
export function RegisterForm() {
  const [createUser, { loading, error, data }] = useMutation(Register_mutation);
  const nevigate = useNavigate();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    ...rest
  } = useForm({ resolver: yupResolver(registerSchema) });

  if (error) {
    toast.error(error.message);
  }
  if (data) {
    // localStorage.setItem("token", data.login.token);
    // result.setToken(data.login.token);
    nevigate("/login");
  }
  const registerResponse = (user) => {
    createUser({
      variables: {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        password: user?.password,
      },
    });
  };
  return (
    <FormProvider {...{ rest, errors }}>
      <div className="login-form card border-0 shadow rounded-3 my-5">
        <ToastMessage />
        <div className="card-body p-4 p-sm-5">
          <h1 className="card-title text-center mb-5">Hi, Welcome Back</h1>
          <h4 className="subtitle text-center mb-5">
            Sign up with Email address
          </h4>
          <form onSubmit={handleSubmit(registerResponse)}>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control
                placeholder="First Name"
                {...register("firstName")}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control placeholder="Last Name" {...register("lastName")} />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control
                placeholder="Email Address"
                {...register("email")}
              />
            </FloatingLabel>
            <InputGroup className="mb-3">
              <FloatingLabel controlId="floatingPassword" label="password">
                <Form.Control
                  type={show ? "text" : "password"}
                  placeholder="password"
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>
              </FloatingLabel>
              <InputGroup.Text onClick={() => setShow((pre) => !pre)}>
                {show ? <BsEyeFill /> : <BsEyeSlashFill />}
              </InputGroup.Text>
            </InputGroup>
            <div className="d-grid">
              {loading ? (
                <Spinner animation="border" variant="success" />
              ) : (
                <button
                  className="btn login-btn text-uppercase fw-bold"
                  type="submit"
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>
          <hr className="my-4" />
          <div className="register mb-3">
            <Link to="/login" className="">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
