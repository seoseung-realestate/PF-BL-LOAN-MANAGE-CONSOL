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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">PF-MAP 계정 생성</h2>
        {[
          { label: "사용자 이메일", name: "email", type: "email" },
          { label: "담당자 이름", name: "name", type: "text" },
          { label: "직책", name: "position", type: "text" },
          { label: "회사명", name: "company", type: "text" },
          { label: "대표이사명", name: "ceo1", type: "text" },
          { label: "대표이사명 2 (선택)", name: "ceo2", type: "text" },
          { label: "비밀번호", name: "password", type: "password" },
          { label: "이메일 인증번호 입력", name: "code", type: "text" }
        ].map(({ label, name, type }) => (
          <div key={name} className="mb-4">
            <label className="block text-gray-700 mb-1">{label}</label>
            <input type={type} name={name} value={formData[name]} onChange={handleChange}
              className="w-full border rounded px-3 py-2" required={name !== 'ceo2'} />
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-4">계정 생성 요청</button>
      </form>
    </div>
  );
}
