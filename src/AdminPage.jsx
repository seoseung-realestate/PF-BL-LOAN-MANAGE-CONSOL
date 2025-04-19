import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex flex-col items-center justify-center text-center">
      <p className="text-lg">관리자 페이지 (추후 구현)</p>
      <button onClick={() => navigate("/")} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">뒤로가기</button>
    </div>
  );
}
