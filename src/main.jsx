import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} >
      <Route path="/demo" element={<h1>Demo</h1>} />
      <Route path="/test" element={<h1>Test</h1>} />
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
