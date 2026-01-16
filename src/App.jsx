import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

const VitalSignsWebsite = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* GOOGLE/UBER STYLE FONT: Inter (Clean, Invisible) */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap');
            body { font-family: 'Inter', sans-serif; }
          `}
        </style>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>
    </Router>
  );
};

// --- NAVBAR: Almost Invisible ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md">
      {/* Small Logo Top Left (Like Uber) */}
      <Link to="/" className="flex items-center gap-2 group">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
        <span className="font-bold tracking-tight">VitalSigns</span>
      </Link>

      {/* Desktop Links (Simple Text) */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
        <Link to="/programs" className="hover:text-black transition">Programs</Link>
        <Link to="/membership" className="hover:text-black transition">Join</Link>
      </div>

      {/* Mobile Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          <Link to="/programs" onClick={()=>setIsOpen(false)} className="text-xl font-bold">Programs</Link>
          <Link to="/membership" onClick={()=>setIsOpen(false)} className="text-xl font-bold text-blue-600">Join</Link>
        </div>
      )}
    </nav>
  );
};

// --- HOME: The "Google" Vibe ---
const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Banner (Subtle, Blurred, Uber-style) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="/banner.jpg" className="w-full h-full object-cover" />
      </div>

      {/* Center Content: Logo + Search Bar feel */}
      <div className="relative z-10 text-center max-w-2xl">
        <img src="/logo.png" className="w-24 h-24 mx-auto mb-8" />
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Science is practice.
        </h1>
        
        <p className="text-xl text-gray-500 mb-10 font-medium leading-relaxed">
          The Student Innovation Lab.<br/>
          Real experiments. Real research. No textbooks.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/membership" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
            Join the Lab <ArrowRight size={18} />
          </Link>
          <Link to="/programs" className="bg-gray-100 text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition duration-300">
            View Programs
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

// --- PROGRAMS: Clean Cards, No Fluff ---
const Programs = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-black mb-16 tracking-tight">Curriculum.</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group cursor-pointer">
          <div className="text-6xl font-black text-gray-100 mb-4 group-hover:text-blue-600 transition duration-500">01</div>
          <h3 className="text-xl font-bold mb-2">Foundations</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Biology basics. Public health. Water filtration systems.
          </p>
          <span className="text-xs font-bold bg-black text-white px-3 py-1 rounded-full">Required</span>
        </div>

        {/* Card 2 */}
        <div className="group cursor-pointer">
          <div className="text-6xl font-black text-gray-100 mb-4 group-hover:text-blue-600 transition duration-500">02</div>
          <h3 className="text-xl font-bold mb-2">The Lab</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Heart rate analysis. Reaction times. Daily health metrics.
          </p>
          <span className="text-xs font-bold bg-black text-white px-3 py-1 rounded-full">Required</span>
        </div>

        {/* Card 3 */}
        <div className="group cursor-pointer">
          <div className="text-6xl font-black text-gray-100 mb-4 group-hover:text-blue-600 transition duration-500">03</div>
          <h3 className="text-xl font-bold mb-2">Science Fair</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Independent research. Final presentation. Leadership.
          </p>
          <span className="text-xs font-bold border border-gray-200 text-gray-500 px-3 py-1 rounded-full">Optional</span>
        </div>
      </div>
    </div>
  );
};

// --- MEMBERSHIP: Just the Essentials ---
const Membership = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-black mb-6">Ready?</h1>
      <p className="text-xl text-gray-500 max-w-md mb-10">
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