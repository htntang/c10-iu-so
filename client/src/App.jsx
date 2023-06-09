import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import Blog from './pages/Blog'
import Team from './pages/Team'
import Mentorship from './pages/Mentorship'
import ScholarshipDatabase from './pages/ScholarshipDatabase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route index="/login" element={<LoginPage />} />
          <Route index="/register" element={<RegistrationPage />} />
          <Route index="/blog" element={<Blog />} />
          <Route index="/team" element={<Team />}/>
          <Route index="/mentorship" element={<Mentorship />} />
          <Route index="/database" element={<ScholarshipDatabase />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
