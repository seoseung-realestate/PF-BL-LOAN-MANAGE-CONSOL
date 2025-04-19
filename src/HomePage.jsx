import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
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

  const goToSignup = () => {
    navigate("/signup");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 via-blue-200 to-white px-4">
      <h1 className="text-4xl font-bold mb-2 text-blue-900">PF-MAP2</h1>
      <p className="text-lg text-blue-700 mb-6">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <div className="flex gap-4 mb-10">
        <button onClick={goToSignup} className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded shadow">계정 생성</button>
        <button onClick={goToAdmin} className="bg-gray-800 hover:bg-gray-900 transition text-white px-6 py-3 rounded shadow">관리자 페이지</button>
        <button onClick={goBack} className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded shadow">뒤로가기</button>
      </div>
    </div>
  );
}
