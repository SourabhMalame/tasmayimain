import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Login from './pages/login/Login'
import Register from "./pages/registration/Registration"
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
