import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./SignupForm";

const HomePage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 via-blue-100 to-white px-4">
    <h1 className="text-4xl font-bold mb-2 text-blue-900">PF-MAP2</h1>
    <p className="text-lg text-blue-700 mb-6">프로젝트 파이낸싱 통합 콘솔 데모</p>
    <div className="flex gap-4 mb-10">
      <button onClick={() => window.location.href='/signup'} className="bg-blue-600 text-white px-6 py-3 rounded shadow">계정 생성</button>
      <button onClick={() => window.location.href='/admin'} className="bg-gray-800 text-white px-6 py-3 rounded shadow">관리자 페이지</button>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  </BrowserRouter>
);
