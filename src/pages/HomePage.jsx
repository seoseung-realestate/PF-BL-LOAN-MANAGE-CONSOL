import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-center">
      <h1 className="text-5xl font-bold mb-4">PF-MAP2</h1>
      <p className="text-lg text-gray-600 mb-6">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <button
        onClick={() => navigate("/signup")}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        계정 생성
      </button>
    </div>
  );
}