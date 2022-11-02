import { Helmet } from "react-helmet-async";
import { LoginForm } from "../components/auth/LoginForm";

export function Login() {
  return (
    <>
      <Helmet>
        <title> Login | Graphql Training </title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
