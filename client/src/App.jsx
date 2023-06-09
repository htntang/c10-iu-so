import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'
import Blog from './Pages/Blog'
import Team from './Pages/Team'
import Mentorship from './Pages/Mentorship'
import ScholarshipDatabase from './Pages/ScholarshipDatabase'

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
