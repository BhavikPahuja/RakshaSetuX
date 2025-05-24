import React from "react";
import SideBar from "../components/SideBar";
import DashboardTemplate from "../components/DashboardTemplate";
import { useState } from "react";

const DashboardPage = (props) => {
  const [tab, setTab] = useState("Dashboard");
  return (
    <div className="flex flex-col justify-between w-screen h-screen lg:flex-row">
      <SideBar
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
        tab={tab}
        setTab={setTab}
      />
      <DashboardTemplate
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
        tab={tab}
        setTab={setTab}
      />
    </div>
  );
};

export default DashboardPage;
