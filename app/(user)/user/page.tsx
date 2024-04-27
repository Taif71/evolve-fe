import React from "react";
import NavBar from "./components/Navbar";
import Contents from "./components/Contents";
import AutoLogout from "./components/AutoLogout";


const UserPage = () => {
  return (
    <div>
      <div>
        <div className="">
          <AutoLogout />
          <NavBar />
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
