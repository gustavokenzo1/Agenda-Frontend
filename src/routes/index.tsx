import React from "react";
import { useAuth } from "../context/User";
import { AuthRoutes } from "./AuthRoutes";
import { OtherRoutes } from "./OtherRoutes";

export const Routes = () => {
  const { signed } = useAuth();

  return signed ? <AuthRoutes /> : <OtherRoutes />;
}