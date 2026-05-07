import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Navbar } from "../../components/shared/Navbar";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/") {
      navigate("/");
    }
  });

  return (
    <div className="min-h-screen bg-neutral-900 dark:bg-black text-white">
      {location.pathname != "/" && <Navbar />}
      <Outlet />
    </div>
  );
};
