import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowUpRight, FlaskConical, Users, 
  Calendar, FileText, Microscope, ChevronRight, 
  Activity, ExternalLink
} from 'lucide-react';

const VitalSignsWebsite = () => {
  return (
    <Router>
      {/* THEME: "The Lab Notebook" - Graph paper, Swiss typography, Bento Grid */}
      <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] font-sans selection:bg-orange-500 selection:text-white flex flex-col relative overflow-x-hidden">
        
        {/* CSS GRAPH PAPER BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
               backgroundSize: '20px 20px' 
             }}>
        </div>

        <Navbar />
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<LabHome />} />
            <Route path="/club" element={<ClubHQ />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

// --- NAVBAR: Minimal "Folder Tab" Style ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFDFD]/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold italic border-2 border-transparent group-hover:border-black group-hover:bg-transparent group-hover:text-black transition">
             V
           </div>
           <span className="font-bold tracking-tight text-lg">VitalSigns<span className="text-slate-400 font-normal">.Unit</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-full border border-slate-200">
          <Link to="/" className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white hover:shadow-sm transition">Journal</Link>
          <Link to="/club" className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white hover:shadow-sm transition text-orange-600">Club HQ</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
       {/* Mobile Menu */}
       {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-6 space-y-4">
           <Link to="/" onClick={()=>setIsOpen(false)} className="block font-bold text-xl">Journal</Link>
           <Link to="/club" onClick={()=>setIsOpen(false)} className="block font-bold text-xl text-orange-600">Club HQ</Link>
        </div>
      )}
    </nav>
  );
};

// --- HOME: BENTO GRID LAYOUT ---
const LabHome = () => {
  return (
    <main className="pt-12 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      
      {/* 1. THE MANIFESTO (Header) */}
      <div className="mb-12 max-w-4xl">
         <div className="inline-block border border-black rounded-full px-3 py-1 text-xs font-mono font-bold uppercase mb-4 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Academic Year 2025-26
         </div>
         <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
           Science is not just <br/>
           <span className="text-orange-600 italic font-serif">theory.</span> It is <span className="underline decoration-4 decoration-slate-200 underline-offset-4">practice.</span>
         </h1>
         <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
           VitalSigns is a student-led research collective. We experiment, we document, and we publish findings from our high school lab to the world.
         </p>
      </div>

      {/* 2. THE BENTO GRID (The "Not Generic" Part) */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          
          {/* A. FEATURE CARD (Big Image) */}
          <Link to="/" className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
             <img 
               src="https://images.unsplash.com/photo-1511296933631-18b897253d58?q=80&w=2070&auto=format&fit=crop" 
               alt="Sleep"
               className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
             />
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase border border-slate-200">
                Latest Study
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-3xl font-bold leading-tight mb-2">The 8-Hour Sleep Myth</h3>
                <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                   <span>Read Full Analysis</span> <ArrowUpRight className="w-4 h-4" />
                </div>
             </div>
          </Link>

          {/* B. STATUS CARD */}
          <div className="md:col-span-1 md:row-span-1 bg-[#1a1a1a] text-white rounded-2xl p-6 flex flex-col justify-between border border-black">
              <div className="flex justify-between items-start">
                  <Activity className="w-6 h-6 text-orange-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-mono border border-white/20 px-2 py-0.5 rounded-full">System</span>
              </div>
              <div>
                  <div className="text-2xl font-bold mb-1">Lab Status</div>
                  <div className="text-orange-500 font-mono text-sm">● Active / Protocol 04</div>
              </div>
          </div>

          {/* C. QUICK TOOL */}
          <div className="md:col-span-1 md:row-span-1 bg-orange-50 rounded-2xl p-6 border border-orange-100 flex flex-col justify-center items-center text-center cursor-pointer hover:border-orange-300 transition group">
              <FlaskConical className="w-8 h-8 text-orange-600 mb-3 group-hover:rotate-12 transition" />
              <h4 className="font-bold text-orange-900 leading-tight">Molarity<br/>Calculator</h4>
          </div>

          {/* D. DISPATCH LIST */}
          <div className="md:col-span-2 md:row-span-1 bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                  <FileText className="w-32 h-32" />
              </div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Recent Notes
              </h3>
              <div className="space-y-3">
                 {[
                    { title: "DNA Extraction Protocol v2", date: "Jan 14" },
                    { title: "3D Printer Calibration Logs", date: "Jan 12" },
                    { title: "Safety Inspection Report", date: "Jan 10" },
                 ].map((note, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 pb-2 last:border-0 hover:pl-2 transition-all cursor-pointer">
                        <span className="font-medium text-slate-700">{note.title}</span>
                        <span className="font-mono text-xs text-slate-400">{note.date}</span>
                    </div>
                 ))}
              </div>
          </div>

          {/* E. CLUB PROMO */}
          <Link to="/club" className="md:col-span-1 md:row-span-1 bg-orange-600 text-white rounded-2xl p-6 flex flex-col justify-between hover:bg-orange-700 transition">
             <div className="flex justify-between">
                <Users className="w-6 h-6" />
                <ArrowUpRight className="w-6 h-6" />
             </div>
             <div>
                <div className="font-mono text-xs opacity-75 mb-1">MEMBERSHIP</div>
                <div className="font-bold text-xl leading-none">Join the<br/>Unit</div>
             </div>
          </Link>

          {/* F. TECH CARD */}
           <div className="md:col-span-1 md:row-span-1 bg-slate-100 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:border-slate-400 transition cursor-pointer">
              <div className="font-mono text-xs text-slate-500">PROJECT_ARCHIVE</div>
              <div>
                  <div className="font-bold text-lg">Prosthetic Hand</div>
                  <div className="text-xs text-slate-500 mt-1">Cost: $45.00</div>
              </div>
           </div>

      </div>
    </main>
  );
};

// --- CLUB HQ: CLEAN & ACADEMIC ---
const ClubHQ = () => (
  <div className="pt-12 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
    
    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-16 mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Applications Open
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                VitalSigns<span className="text-orange-600">.Club</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                A hub for aspiring biologists, doctors, and engineers. We provide the equipment, the mentorship, and the platform. You provide the curiosity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2">
                    Apply for Membership <ChevronRight className="w-4 h-4" />
                </button>
                <button className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2">
                    Start a Chapter <ExternalLink className="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>

    {/* TEAM GRID (POLAROID STYLE) */}
    <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-slate-300"></span> Executive Board
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
                { n: "Aslan Yıldız", r: "President" },
                { n: "Shiekh Daiyan", r: "Vice President" },
                { n: "Kaiyaan Akbar", r: "Club Manager" },
                { n: "Abdelrahman K.", r: "Safety Officer" },
                { n: "Abdalrahman", r: "Digital Lead" },
                { n: "Faculty", r: "Advisors" },
            ].map((m, i) => (
                <div key={i} className="bg-white p-4 pb-8 shadow-sm border border-slate-200 rotate-1 hover:rotate-0 transition duration-300 hover:shadow-md hover:border-orange-200">
                    <div className="aspect-square bg-slate-100 mb-4 flex items-center justify-center text-slate-300">
                        {/* Placeholder for real photo */}
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{m.n}</h3>
                    <p className="text-sm text-slate-500 font-mono mt-1">{m.r}</p>
                </div>
            ))}
        </div>
    </div>

  </div>
);

const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-xs text-slate-500">
            VitalSigns Unit. Est 2026. <br/>
            Istanbul, TR.
        </div>
        <div className="flex gap-6 font-bold text-sm text-slate-800">
             <Link to="/" className="hover:text-orange-600">Journal</Link>
             <Link to="/club" className="hover:text-orange-600">Join</Link>
             <a href="#" className="hover:text-orange-600">Instagram</a>
        </div>
    </div>
  </footer>
);

export default VitalSignsWebsite;