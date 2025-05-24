import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const BusinessSignupForm = (props) => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    website: "",
    country: "",
  });
  const { setIsLoggedIn } = props;
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Signup successful");
    navigate("/dashboard");
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <label>
        <input
          type="text"
          placeholder="Business Name"
          required
          value={formData.businessName}
          onChange={(e) =>
            setFormData({ ...formData, businessName: e.target.value })
          }
          className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
        />
      </label>
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
      <div className="flex flex-col md:flex-row md:gap-4">
        <label className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
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
        </label>
        <label className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <label>
          <input
            type="text"
            placeholder="Phone Number"
            required
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
          />
        </label>
        <label>
          <input
            type="url"
            placeholder="Website"
            required
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
          />
        </label>
      </div>
      <label>
        <input
          type="text"
          placeholder="Country"
          required
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          className="w-full border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 transition duration-200"
        />
      </label>
      <button
        type="submit"
        className="mt-5 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900"
      >
        Sign Up
      </button>
    </form>
  );
};

export default BusinessSignupForm;
