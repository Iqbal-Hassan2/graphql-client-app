import React from "react";
import { Helmet } from "react-helmet-async";
import { RegisterForm } from "../components/auth/RegisterForm";

export function Register() {
  return (
    <>
      <Helmet>
        <title> Sign Up | Graphql Training </title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
