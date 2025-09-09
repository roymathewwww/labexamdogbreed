import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-extrabold text-gray-900">Dogooo</div>
            <div className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/favorites" className="text-gray-700 hover:text-gray-900">Favorites</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600">
          {new Date().getFullYear()} Dogooo
        </footer>
      </div>
    </BrowserRouter>
  )
}
