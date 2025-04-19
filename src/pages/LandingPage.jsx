import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 via-blue-100 to-white px-4">
      <h1 className="text-4xl font-bold mb-2 text-blue-900">PF-MAP2</h1>
      <p className="text-lg text-blue-700 mb-6">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <div className="flex gap-4 mb-10">
        <button onClick={() => navigate("/signup")} className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded shadow">
          계정 생성
        </button>
        <button onClick={() => navigate("/admin")} className="bg-gray-800 hover:bg-gray-900 transition text-white px-6 py-3 rounded shadow">
          관리자 페이지
        </button>
      </div>
    </div>
  );
}