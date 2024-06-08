import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/organisms/Sidebar'
import Dashboard from './components/templates/Dashboard'
import Features from './components/pages/Features';

const App: React.FC = () => {
  
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-12 md:ml-64 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard-gecko-demo" element={<Dashboard />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
