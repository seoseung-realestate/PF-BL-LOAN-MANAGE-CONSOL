import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex flex-col justify-center items-center space-y-6">
      <h1 className="text-4xl font-bold text-white">PF-MAP2</h1>
      <p className="text-white text-lg">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <div className="space-x-4">
        <button onClick={() => navigate('/signup-form')} className="px-6 py-3 bg-blue-700 text-white rounded shadow">계정 생성</button>
        <button onClick={() => navigate('/admin')} className="px-6 py-3 bg-gray-700 text-white rounded shadow">관리자 페이지</button>
      </div>
    </div>
  );
}
