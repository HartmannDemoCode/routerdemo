import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import About from './pages/About/About'
import Students from './pages/Students/Students'
import Student from './pages/Student/Student'
import NotFound from './pages/NotFound'
import ProtectedRoute from './pages/ProtectedRoute'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} >
      <Route path="/about" element={<About/>} />
      <Route path="/students" element={<Students />} />
      <Route path="/student/:id" element={<Student />} />
      <Route path="/*" element={<NotFound/>} />
      <Route path="/secret" element={
        <ProtectedRoute>
          <h1>This is the secret content</h1>
        </ProtectedRoute>
      } />
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
