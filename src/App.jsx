import './App.css'

import React from 'react'
import TelaPrincipal from './pages/Home/TelaPrincipal'

import { ThemeProvider } from '@mui/material/styles';

// Routes
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import appTheme from "./Theme/Theme"
import DashBoard from './pages/DashBoard/DashBoard';

// components
//import Navbar from "./components/Navbar";

function App() {


  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<TelaPrincipal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
