import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import DashboardPage from "../pages/DashboardPage";

const PrivateRoute = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  if (!isLoggedIn) {
    toast.error("You need to be logged in to access this page");
    return <Navigate to="/login" />;
  } else {
    return (
      <DashboardPage
        isLoggedIn = {isLoggedIn}
        setIsLoggedIn = {setIsLoggedIn}
      />
    );
  }
};

export default PrivateRoute;
