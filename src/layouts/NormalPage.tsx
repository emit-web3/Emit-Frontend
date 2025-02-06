import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const NormalPage = () => {
  return (
    <div className="min-h-full flex flex-col px-2 md:px-10 lg:px-20">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default NormalPage;
