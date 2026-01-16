import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Microscope, Brain, FlaskConical, 
  ChevronRight, Calendar, Award, Droplets, 
  Activity, ClipboardCheck, Users
} from 'lucide-react';

const VitalSignsWebsite = () => {
  return (
    <Router>
      {/* THEME: "The Medical Society" - Royal Blue, Academic, Clean */}
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-700 selection:text-white flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO MATCHING YOUR IMAGE */}
        <Link to="/" className="flex items-center gap-3 group">
           <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center text-blue-700">
             <Microscope className="w-5 h-5" />
           </div>
           <div className="flex flex-col leading-tight">
             <span className="font-bold text-lg text-blue-900 tracking-tight uppercase">VitalSigns</span>
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Medical & Health Sciences Society</span>
           </div>
        </Link>
        
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-700 transition">Home</Link>
          <Link to="/programs" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-700 transition">Programs</Link>
          <Link to="/membership" className="ml-2 bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition hover:shadow-none hover:translate-y-[1px]">
            Join Society
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-blue-900">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
       {/* MOBILE NAV */}
       {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-6 space-y-4">
           <Link to="/" onClick={()=>setIsOpen(false)} className="block font-bold text-slate-700">Home</Link>
           <Link to="/programs" onClick={()=>setIsOpen(false)} className="block font-bold text-slate-700">Programs</Link>
           <Link to="/membership" onClick={()=>setIsOpen(false)} className="block font-bold text-blue-700">Join Society</Link>
        </div>
      )}
    </nav>
  );
};

// --- HOME PAGE ---
const Home = () => {
  return (
    <main>
      {/* HERO SECTION - MATCHING YOUR BANNER */}
      <div className="bg-blue-700 text-white py-24 px-6 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Brain className="w-96 h-96 -translate-y-1/2 translate-x-1/2" />
         </div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-blue-600 border border-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
               Science & Innovation Lab
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
               Advancing the Science of <br/>Medicine & Health
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
               A student-led society where members explore biology, chemistry, and health sciences through hands-on experiments and real-world research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/programs" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
                  Explore Programs
               </Link>
               <Link to="/membership" className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
                  Membership Info
               </Link>
            </div>
         </div>
      </div>

      {/* THE THREE PILLARS - MATCHING BANNER ICONS */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
         <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border-b-4 border-blue-500">
               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <Microscope className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Medical Research</h3>
               <p className="text-slate-500 text-sm">Investigating biological processes and disease prevention strategies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border-b-4 border-indigo-500">
               <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                  <Brain className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Health Sciences</h3>
               <p className="text-slate-500 text-sm">Understanding hygiene, nutrition, and human anatomy.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border-b-4 border-cyan-500">
               <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-6">
                  <FlaskConical className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Laboratory Experiments</h3>
               <p className="text-slate-500 text-sm">Hands-on activities like water filtration and reaction time testing.</p>
            </div>
         </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Science is not just a subject. It's a practice.</h2>
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                     The <strong className="text-blue-700">Science & Innovation Lab</strong> is where students move beyond textbooks. We focus on fun, safe, and engaging experiments that connect to daily life.
                  </p>
                  <ul className="space-y-3">
                     {[
                        "Real-world science connected to health & environment",
                        "Teamwork, responsibility, and problem-solving",
                        "Preparing projects for the School Science Fair"
                     ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-base">
                           <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="bg-slate-100 rounded-3xl p-8 relative">
               <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-sm font-bold text-blue-700 text-sm">
                  Est. 2026
               </div>
               {/* Placeholder for Club Photo */}
               <div className="aspect-[4/3] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 mb-6">
                  <Users className="w-16 h-16" />
               </div>
               <div className="text-center">
                  <p className="font-bold text-slate-900">Meetings: 1–3 times per week</p>
                  <p className="text-slate-500 text-sm">Lunch or Break Times</p>
               </div>
            </div>
         </div>
      </div>
    </main>
  );
};

// --- PROGRAMS PAGE ---
const Programs = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
       <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Curriculum</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">Our Core Programs</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             All members complete two required foundation programs, with an optional third program for advanced research.
          </p>
       </div>

       <div className="space-y-8">
          {/* PROGRAM 1: FOUNDATIONS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
             <div className="bg-blue-100 p-6 rounded-xl shrink-0">
                <Droplets className="w-10 h-10 text-blue-600" />
             </div>
             <div>
                <div className="flex items-center gap-3 mb-3">
                   <h3 className="text-2xl font-bold text-slate-900">Bio & Health Foundations</h3>
                   <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Required</span>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                   Introduces basic human biology, public health, and health ethics. A key project is the <strong>Water Filtration Lab</strong>, exploring clean water and disease prevention.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 inline-block">
                   <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Outcome</span>
                   <span className="font-bold text-slate-800">Filtration Project + Presentation</span>
                </div>
             </div>
          </div>

          {/* PROGRAM 2: BIOMEDICAL LAB */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
             <div className="bg-indigo-100 p-6 rounded-xl shrink-0">
                <Activity className="w-10 h-10 text-indigo-600" />
             </div>
             <div>
                <div className="flex items-center gap-3 mb-3">
                   <h3 className="text-2xl font-bold text-slate-900">Biomedical Lab & Human Health</h3>
                   <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Required</span>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                   Builds on Program 1 with lab investigations on how daily habits affect health. Activities include <strong>Heart Rate Analysis</strong> and <strong>Reaction Time Experiments</strong>.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 inline-block">
                   <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Outcome</span>
                   <span className="font-bold text-slate-800">Guided Lab Investigation Report</span>
                </div>
             </div>
          </div>

          {/* PROGRAM 3: SCIENCE FAIR */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
             
             <div className="bg-white/10 p-6 rounded-xl shrink-0 backdrop-blur-sm border border-white/10">
                <Award className="w-10 h-10 text-yellow-400" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                   <h3 className="text-2xl font-bold">Research & Science Fair</h3>
                   <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded uppercase border border-white/10">Optional / Advanced</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                   Prepares members to design and present a health-related research project for the club’s End-of-Year Science Fair. This program offers additional leadership opportunities.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/10 inline-block">
                   <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Outcome</span>
                   <span className="font-bold text-white">Science Fair Presentation</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

// --- MEMBERSHIP PAGE ---
const Membership = () => {
   return (
      <div className="py-20 px-6 max-w-3xl mx-auto">
         <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-blue-100">
            <ClipboardCheck className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Join the Society</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               We are looking for students who demonstrate interest, commitment, and responsibility. Active participation is required for all members.
            </p>
            
            <div className="bg-slate-50 rounded-xl p-6 text-left mb-8 space-y-4">
               <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-900">1–3 Meetings Per Week</span>
               </div>
               <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-900">Team & Individual Projects</span>
               </div>
               <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-900">Certificates Awarded for Completion</span>
               </div>
            </div>

            <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition shadow-lg">
               Open Application Form
            </button>
            <p className="text-xs text-slate-400 mt-4">
               *Repeated lack of performance or unsafe behavior may result in removal.
            </p>
         </div>
      </div>
   );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
             <Microscope className="w-4 h-4 text-white" />
           </div>
           <div>
              <div className="font-bold uppercase tracking-wider">VitalSigns</div>
              <div className="text-[10px] text-slate-400 uppercase">Medical & Health Sciences Society</div>
           </div>
        </div>
        <div className="text-sm text-slate-400">
             © 2026 Science & Innovation Lab. All Rights Reserved.
        </div>
    </div>
  </footer>
);

export default VitalSignsWebsite;