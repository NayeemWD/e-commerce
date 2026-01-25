import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../Components/SharedComponents/Header/Header";
import Footer from "../Components/SharedComponents/Footer/Footer";
import { ToastProvider } from "../Components/SharedComponents/ToastContext";

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, []);

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
