import React from "react";
import WebsiteRouter from "routers/website";
import { Navbar } from "components";

export default () => {
  return (
    <div>
      <Navbar />
      <WebsiteRouter />
    </div>
  );
};
