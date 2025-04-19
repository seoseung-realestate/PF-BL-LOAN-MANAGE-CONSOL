
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl p-6 bg-white rounded shadow-md space-y-4">
        <h2 className="text-2xl font-bold mb-4">PF-MAP 계정 생성</h2>
        <input name="email" placeholder="사용자 이메일 (사내/구글/네이버)" value={formData.email} onChange={handleChange} className="input" />
        <input name="name" placeholder="담당자 이름" value={formData.name} onChange={handleChange} className="input" />
        <input name="position" placeholder="직책" value={formData.position} onChange={handleChange} className="input" />
        <input name="company" placeholder="회사명" value={formData.company} onChange={handleChange} className="input" />
        <input name="ceo1" placeholder="대표이사명" value={formData.ceo1} onChange={handleChange} className="input" />
        <input name="ceo2" placeholder="대표이사명 2 (선택)" value={formData.ceo2} onChange={handleChange} className="input" />

        <select name="role" value={formData.role} onChange={handleChange} className="input">
          <option value="시행사">시행사</option>
          <option value="시공사">시공사</option>
          <option value="대리금융기관">대리금융기관</option>
          <option value="신탁사">신탁사</option>
        </select>

        <div className="flex flex-col space-y-2">
          <label className="block">법인인감 파일 업로드</label>
          <input type="file" className="input" />

          <label className="block">법인인감증명서 파일 업로드</label>
          <input type="file" className="input" />

          <label className="block">사용인감계 파일 업로드 (선택)</label>
          <input type="file" className="input" />

          <label className="block">사업자등록증 파일 업로드</label>
          <input type="file" className="input" />
        </div>

        <input name="password" placeholder="비밀번호" type="password" value={formData.password} onChange={handleChange} className="input" />

        <div className="flex gap-2 items-center">
          <input name="code" placeholder="이메일 인증번호 입력" value={formData.code} onChange={handleChange} className="input flex-1" />
          <button type="button" className="bg-gray-300 px-3 py-2 rounded">인증번호 발송</button>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded">계정 생성 요청</button>
      </form>
    </div>
  );
}
