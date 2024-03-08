import Template5Login from './Template5Login.jsx'
import Template5Signup from "../../signup-page/src/Template5Signup.jsx"
import DashboardApp from "../../dashboard/src/DashboardApp.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Template5Login />} />
            <Route path="/signup" element={<Template5Signup />} />
            <Route path="/dashboard" element={<DashboardApp />} />
        </Routes>
    </Router>
  )
}

export default App
