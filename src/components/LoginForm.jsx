import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { isLoggedIn, setIsLoggedIn } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login successful");
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full md:w-1/2 gap-y-4">
      <div className="flex flex-col gap-4">
        <label className="relative flex flex-col">
          <input
            type="email"
            placeholder="Email address"
            required
            value={formData.email}
            name="email"
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
      </div>
      <div className="flex flex-col gap-4">
        <label className="relative flex flex-col">
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
        className="mt-5 p-3 bg-blue-700 text-white rounded-lg hover:scale-110 hover:shadow-lg transition duration-200"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
