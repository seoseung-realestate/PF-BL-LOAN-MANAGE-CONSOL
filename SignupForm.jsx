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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-xl space-y-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">PF-MAP 계정 생성</h2>
        <input name="email" placeholder="사용자 이메일 (사내/구글/네이버)" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        <input name="name" placeholder="담당자 이름" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        <input name="position" placeholder="직책" value={formData.position} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        <input name="company" placeholder="회사명" value={formData.company} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        <input name="ceo1" placeholder="대표이사명" value={formData.ceo1} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        <input name="ceo2" placeholder="대표이사명 2 (선택)" value={formData.ceo2} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />

        <select name="role" value={formData.role} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full">
          <option value="시행사">시행사</option>
          <option value="시공사">시공사</option>
          <option value="대리금융기관">대리금융기관</option>
          <option value="신탁사">신탁사</option>
        </select>

        <div className="space-y-2">
          <label className="block">법인 인감 파일 업로드</label>
          <input type="file" className="border border-gray-300 rounded px-4 py-2 w-full" />

          <label className="block">법인 인감 증명서 파일 업로드</label>
          <input type="file" className="border border-gray-300 rounded px-4 py-2 w-full" />

          <label className="block">사용 인감계 파일 업로드 (선택)</label>
          <input type="file" className="border border-gray-300 rounded px-4 py-2 w-full" />

          <label className="block">사업자 등록증 파일 업로드</label>
          <input type="file" className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>

        <input name="password" placeholder="비밀번호" type="password" value={formData.password} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />

        <div className="flex gap-2 items-center">
          <input name="code" placeholder="이메일 인증번호 입력" value={formData.code} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 flex-1" />
          <button type="button" className="bg-gray-300 px-4 py-2 rounded">인증번호 전송</button>
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded w-full">계정 생성 요청</button>
          <button type="button" onClick={goToAdmin} className="bg-gray-700 text-white px-6 py-3 rounded w-full">관리자 페이지</button>
        </div>
      </form>
    </div>
  );
}
