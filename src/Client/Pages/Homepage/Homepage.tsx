import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@client/Components";
import { logout } from "@shared/Redux/Auth";
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
