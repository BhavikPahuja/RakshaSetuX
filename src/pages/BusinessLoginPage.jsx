import React from "react";
import Template from "../components/Template";
import { Link } from "react-router-dom";

const BusinessLoginPage = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 h-auto bg-white shadow-lg rounded-lg p-10">
      <Template
        title="Business Login"
        formType="businessLogin"
        desc="Securly manage your permissions"
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
      />
      <div className="flex flex-col items-center justify-center mt-4">
        <p>
          Don't have an account?{" "}
          <Link to="/business-signup" className="text-blue-700 hover:underline">
            Sign up
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

export default BusinessLoginPage;
