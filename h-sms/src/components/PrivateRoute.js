import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"
import Layout from "./Layout"


export default function PrivateRoute() {
  const { token, user } = useAuth()
  return token ? (user ? <Layout><Outlet /></Layout> : <span>loading</span>) : <Navigate to="/singin" />
}