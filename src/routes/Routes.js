import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// layouts
import { FrontendLayout } from "../layouts/FrontendLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

// pages
import { DashboardApp } from "../pages/DashboardApp";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { userContext } from "../context/context";

export function AppRoutes() {
  // const navigate = useNavigate();
  const { token, setToken } = useContext(userContext);

  // useEffect(() => {
  //   if (!token) {
  //     setToken(localStorage.getItem("token"));
  //   }
  // }, []);

  if (!token) {
    setToken(localStorage.getItem("token"));
    return;
  }
  console.log(token);
  return (
    <Routes>
      <Route path="/admin" element={<FrontendLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        {token ? (
          <Route index element={<DashboardApp />} />
        ) : (
          <Route index element={<Navigate to="/" replace />} />
        )}
      </Route>
    </Routes>
  );
}
