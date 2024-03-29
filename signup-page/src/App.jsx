import Template5Signup from './Template5Signup.jsx'
import Template5Login from "../../login2/src/Template5Login.jsx"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Template5Login />} />
            <Route path="/signup" element={<Template5Signup />} />
        </Routes>
    </Router>
  )
}

export default App
