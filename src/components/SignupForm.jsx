import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setIsLoggedIn } = props;
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (formData.firstName && formData.lastName && formData.email && formData.password) {
      toast.success("Signup successful");
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  }
  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <div className="flex flex-col md:flex-row md:gap-4">
        <label>
          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
            value={formData.firstName}
            name="firstName"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Last Name"
            required
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
            value={formData.lastName}
            name="lastName"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
            value={formData.email}
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <label className="relative flex flex-col">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
            value={formData.password}
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 cursor-pointer">
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        <label className="relative flex flex-col">
          <input
            type={showConfirmPassword ? "text" : "password"}    
            placeholder="Confirm Password"
            required
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3 cursor-pointer">
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>
      <button className="mt-5 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
