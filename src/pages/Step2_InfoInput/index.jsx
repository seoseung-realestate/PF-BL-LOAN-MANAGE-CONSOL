
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Step2_InfoInput() {
  const [form, setForm] = useState({ name: "", password: "", confirm: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    navigate("/Step3_Complete");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">정보 입력</h1>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirm"
          placeholder="비밀번호 확인"
          value={form.confirm}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">가입 완료</button>
      </form>
    </div>
  );
}
