import React from "react";
import Template from "../components/Template";
import { Link } from "react-router-dom";

const SignupPage = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 h-auto bg-white shadow-lg rounded-lg p-10">
      <Template
        title="Sign Up"
        formType="signup"
        desc="Securly manage your permissions"
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
      />
      <div className="flex flex-col items-center justify-center mt-4">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mb-4">
        <p>
          Are you a business?{" "}
          <Link to="/business-signup" className="text-blue-700 hover:underline">
            Business Signup
          </Link>
        </p>
        </div>
    </div>
  );
};
export default SignupPage;
