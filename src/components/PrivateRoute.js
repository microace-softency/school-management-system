import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import Layout from "./Layout";
import { CircularProgress } from "@mui/joy";

export default function PrivateRoute() {
  const { token, user } = useAuth();
  return token ? (
    user ? (
      <Layout>
        <Outlet />
      </Layout>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress variant="outlined" size="lg"/>
      </div>
    )
  ) : (
    <Navigate to="/singin" /> 
  );
}
