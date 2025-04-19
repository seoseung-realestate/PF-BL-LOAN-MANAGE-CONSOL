
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center">
      <h1 className="text-4xl font-bold mb-4">PF-MAP2</h1>
      <p className="mb-6 text-gray-600">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <button
        onClick={() => navigate('/signup')}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        계정 생성
      </button>
    </div>
  );
}
