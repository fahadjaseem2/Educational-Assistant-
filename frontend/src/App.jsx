import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import FeeStructure from './pages/FeeStructure'
import Colleges from './pages/Colleges'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/colleges" element={<Colleges />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
