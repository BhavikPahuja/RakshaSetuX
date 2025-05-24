import React from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "./SignupForm";
import logo from "../assets/logo.png";
import BusinessLoginForm from "./BusinessLoginForm";
import BusinessSignupForm from "./BusinessSignupForm";

const Template = (props) => {
  let formComponent = null;
  const title = props.title;
  const desc = props.desc;
  const formType = props.formType;
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  if (formType === "login") {
    formComponent = <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
  } else if (formType === "signup") {
    formComponent = <SignupForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
  } else if (formType === "businessLogin") {
    formComponent = <BusinessLoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
  } else if (formType === "businessSignup") {
    formComponent = <BusinessSignupForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="flex flex-col md:flex-row md:w-11/12 md:justify-evenly py-20">
      <div className="flex justify-center items-center hover:scale-110 transition duration-200 ease-in-out mb-10 md:mb-0">
        <img src={logo} alt="logo" width={400} />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <h1 className="text-center text-3xl mb-2 font-bold">{title}</h1>
        <p className="mb-6 text-center">{desc}</p>
        {formComponent}
      </div>
    </div>
  );
};

export default Template;