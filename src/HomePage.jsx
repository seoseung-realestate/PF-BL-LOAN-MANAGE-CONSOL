import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-4xl font-bold">PF-MAP2</h1>
      <p className="text-sm text-gray-700">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <div className="flex gap-4">
        <button onClick={() => navigate("/signup")} className="bg-blue-600 text-white px-4 py-2 rounded">계정 생성</button>
        <button onClick={() => navigate("/admin")} className="bg-black text-white px-4 py-2 rounded">관리자 페이지</button>
      </div>
    </div>
  );
}