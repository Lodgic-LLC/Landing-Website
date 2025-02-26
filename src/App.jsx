import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import Appointment from './pages/Appointment'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <Router>
      <div className="font-inter min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rendez-vous" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
