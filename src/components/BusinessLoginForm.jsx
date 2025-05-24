import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BusinessLoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { isLoggedIn, setIsLoggedIn } = props;
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    toast.success("Login successful");
    navigate("/dashboard");
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full md:w-1/2 gap-y-4">
      <div className="flex flex-col">
        <label>
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
        />
      </label>
      </div>
      <div className="flex flex-col">
        <label className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={formData.password}
            name="password"
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="#">
            <p className="absolute right-1 top-11 text-xs text-blue-700 hover:underline">
              Forgot Password
            </p>
          </Link>
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900"
      >
        Login
      </button>
    </form>
  );
};

export default BusinessLoginForm;
