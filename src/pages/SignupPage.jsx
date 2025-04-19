import React from "react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">PF-MAP 계정 생성</h2>
        <form>
          <input placeholder="사용자 이메일 (사내/구글/담당자 이름)" className="mb-2 w-full border p-2" />
          <input placeholder="직책" className="mb-2 w-full border p-2" />
          <input placeholder="회사명" className="mb-2 w-full border p-2" />
          <input placeholder="대표이사명" className="mb-2 w-full border p-2" />
          <input placeholder="대표이사명 2 (선택)" className="mb-2 w-full border p-2" />
          <select className="mb-2 w-full border p-2">
            <option>시행사</option>
            <option>신탁사</option>
            <option>대주</option>
          </select>
          <input type="file" className="mb-2 w-full" />
          <input type="file" className="mb-2 w-full" />
          <input type="file" className="mb-2 w-full" />
          <input type="file" className="mb-2 w-full" />
          <input placeholder="비밀번호" type="password" className="mb-2 w-full border p-2" />
          <input placeholder="이메일 인증번호 입력" className="mb-2 w-full border p-2" />
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">계정 생성 요청</button>
            <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">인증번호 전송</button>
          </div>
        </form>
      </div>
    </div>
  );
}
