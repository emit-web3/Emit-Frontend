import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const NormalPage = () => {
  return (
    <div className="min-h-full flex flex-col px-2 md:px-10 lg:px-20" dir="rtl">
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default NormalPage;
