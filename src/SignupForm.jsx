import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    position: "",
    company: "",
    ceo1: "",
    ceo2: "",
    role: "시행사",
    password: "",
    code: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("계정 생성 요청됨: " + JSON.stringify(formData, null, 2));
  };

  const goToAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 via-blue-100 to-white px-4">
      <h1 className="text-4xl font-bold mb-2 text-blue-900">PF-MAP2</h1>
      <p className="text-lg text-blue-700 mb-6">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <div className="flex gap-4 mb-10">
        <button onClick={() => navigate("/signup")} className="bg-blue-600 text-white px-6 py-3 rounded shadow">계정 생성</button>
        <button onClick={goToAdmin} className="bg-gray-800 text-white px-6 py-3 rounded shadow">관리자 페이지</button>
      </div>
    </div>
  );
}
