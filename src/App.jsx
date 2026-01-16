import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const VitalSignsWebsite = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* GOOGLE/UBER STYLE FONT: Inter */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap');
            body { font-family: 'Inter', sans-serif; }
          `}
        </style>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>
    </Router>
  );
};

// --- NAVBAR: Ultra Clean ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-white/90 backdrop-blur-md">
      {/* Small Logo Top Left */}
      <Link to="/" className="flex items-center gap-2 group">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
        <span className="font-bold tracking-tight">VitalSigns</span>
      </Link>

      {/* Desktop Link (Only One) */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-black">
        <Link to="/membership" className="hover:opacity-60 transition">Join the Lab</Link>
      </div>

      {/* Mobile Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          <Link to="/membership" onClick={()=>setIsOpen(false)} className="text-xl font-bold text-blue-600">Join the Lab</Link>
        </div>
      )}
    </nav>
  );
};

// --- HOME: Single Focus ---
const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Banner (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="/banner.jpg" className="w-full h-full object-cover" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <img src="/logo.png" className="w-24 h-24 mx-auto mb-8" />
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Science is practice.
        </h1>
        
        <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
          The Student Innovation Lab.<br/>
          Real experiments. Real research. No textbooks.
        </p>

        {/* Single Call to Action */}
        <div className="flex justify-center">
          <Link to="/membership" className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-gray-200">
            Join the Lab <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Simple Footer Note */}
      <div className="absolute bottom-8 text-xs text-gray-400 font-medium">
        Est. 2026 • Istanbul
      </div>
    </main>
  );
};

// --- MEMBERSHIP: The Destination ---
const Membership = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-black mb-6">Ready?</h1>
      <p className="text-xl text-gray-500 max-w-md mb-10 leading-relaxed">
        1–3 meetings per week.<br/>
        Active participation required.<br/>
        Safety is mandatory.
      </p>
      <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-xl shadow-blue-200">
        Open Application
      </button>
      <Link to="/" className="mt-8 text-sm text-gray-400 hover:text-black transition">
        Go Back
      </Link>
    </div>
  );
};

export default VitalSignsWebsite;