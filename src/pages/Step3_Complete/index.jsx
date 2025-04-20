
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Step3_Complete() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded shadow text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">가입 완료</h1>
        <p className="mb-4">회원가입이 성공적으로 완료되었습니다.</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          홈으로 가기
        </button>
      </div>
    </div>
  );
}
