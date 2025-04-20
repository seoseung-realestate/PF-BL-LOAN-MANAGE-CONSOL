
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Step1_EmailAuth() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("유효한 이메일 주소를 입력하세요.");
      return;
    }
    navigate("/Step2_InfoInput");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">이메일 인증</h1>
        <input
          type="email"
          placeholder="이메일 주소 입력"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">다음</button>
      </form>
    </div>
  );
}
