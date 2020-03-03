import React from "react";
import Link from "../Components/Link";

const HomePage = () => {
  return (
    <div>
      <Link content="Go Example" to="/example" />;
      <Link content="Go Error" to="/error" />;
    </div>
  );
};

export default HomePage;
