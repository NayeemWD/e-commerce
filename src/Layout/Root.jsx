import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/SharedComponents/Header/Header";
import Footer from "../Components/SharedComponents/Footer/Footer";
import { ToastProvider } from "../Components/SharedComponents/ToastContext";

const Root = () => {
  return (
    <ToastProvider>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </ToastProvider>
  );
};

export default Root;
