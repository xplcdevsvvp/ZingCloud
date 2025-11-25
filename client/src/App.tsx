import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Features from './pages/Features'
import HighPerformance from './pages/HighPerformance'
import Pricing from './pages/Pricing'
import CreateServer from './pages/CreateServer'

function App() {
  return (
    <div className="bg-[#0f1419] text-white min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HighPerformance />
      <Pricing />
      <CreateServer />
      <Footer />
    </div>
  )
}

export default App
