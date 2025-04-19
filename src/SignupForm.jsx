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
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-200 to-white flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold mb-4">PF-MAP 계정 생성</h2>
        <input name="email" type="email" placeholder="사용자 이메일 (사내/구글/네이버)" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input name="name" placeholder="담당자 이름" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input name="position" placeholder="직책" value={formData.position} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input name="company" placeholder="회사명" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input name="ceo1" placeholder="대표이사명" value={formData.ceo1} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input name="ceo2" placeholder="대표이사명 2 (선택)" value={formData.ceo2} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
        <select name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border rounded">
          <option value="시행사">시행사</option>
          <option value="신탁사">신탁사</option>
          <option value="대주">대주</option>
          <option value="기타">기타</option>
        </select>
        <input type="file" className="w-full" />
        <input type="file" className="w-full" />
        <input type="file" className="w-full" />
        <input type="file" className="w-full" />
        <input name="password" type="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <div className="flex gap-2">
          <input name="code" placeholder="이메일 인증번호 입력" value={formData.code} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <button type="button" className="px-4 py-2 bg-gray-300 rounded">인증번호 발송</button>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">계정 생성 요청</button>
        <button type="button" onClick={() => navigate("/")} className="w-full mt-2 bg-gray-400 text-white py-2 rounded">뒤로가기</button>
      </form>
    </div>
  );
}