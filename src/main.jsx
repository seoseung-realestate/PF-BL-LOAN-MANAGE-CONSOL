import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<div className='min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex items-center justify-center text-xl'>회원가입 페이지 (추후 구현)</div>} />
        <Route path="/admin" element={<div className='min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex items-center justify-center text-xl'>관리자 페이지 (추후 구현)</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
