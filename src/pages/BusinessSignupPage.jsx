import React from "react";
import Template from "../components/Template";
import { Link } from "react-router-dom";

const BusinessSignupPage = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 h-auto bg-white shadow-lg rounded-lg p-10 mt-[10rem] md:mt-0">
      <Template
        title="Business Signup"
        formType="businessSignup"
        desc="Create a business account to manage your business and access exclusive features."
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
      />
      <div className="flex flex-col items-center justify-center mt-4">
        <p>
          Already have an account?{" "}
          <Link to="/business-login" className="text-blue-700 hover:underline">
            Log in
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mb-4">
        <p>
          Not a business?{" "}
          <Link to="/signup" className="text-blue-700 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BusinessSignupPage;
