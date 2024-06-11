import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/login.jsx'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro.jsx'
import BlogAdm from './pages/adm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/BlogAdm" element={<BlogAdm />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
