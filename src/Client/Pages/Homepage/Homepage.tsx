import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../Common/Redux/Auth";
import { Button } from "../../Components";
import "./Homepage.scss";

const Homepage = () => {
  const today = new Date().toLocaleDateString();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="Homepage">
      <h1> {today} </h1>
      <Button content="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Homepage;
