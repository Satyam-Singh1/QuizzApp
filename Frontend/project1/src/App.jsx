import { useState } from 'react'

import './App.css'
import Welcome from "./Components/Welcome";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from "./Components/Quiz";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
