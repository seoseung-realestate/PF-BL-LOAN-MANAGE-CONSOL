import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import SignupPage from "./pages/SignupPage";

const AdminStub = () => (
  <div className="h-screen flex items-center justify-center bg-gray-100 text-xl">
    관리자 페이지 (추후 구현 예정)
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminStub />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
