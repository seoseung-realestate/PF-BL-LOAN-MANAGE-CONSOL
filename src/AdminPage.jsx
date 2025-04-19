import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex items-center justify-center flex-col px-4">
      <p className="text-xl text-gray-900 mb-4">관리자 페이지 (추후 구현)</p>
      <button
        onClick={goBack}
        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded shadow"
      >
        뒤로가기
      </button>
    </div>
  );
}
