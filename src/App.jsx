import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupForm from './SignupForm'

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-4">PF-MAP2</h1>
      <p className="text-lg mb-6">프로젝트 파이낸싱 통합 콘솔 데모</p>
      <a href="/signup" className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700">계정 생성</a>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  )
}