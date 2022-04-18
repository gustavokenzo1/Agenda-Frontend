import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contacts } from "../pages/Contacts";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
