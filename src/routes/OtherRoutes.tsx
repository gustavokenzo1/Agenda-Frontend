import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const OtherRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
