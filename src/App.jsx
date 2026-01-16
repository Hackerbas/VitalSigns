import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Menu, X, Microscope, FlaskConical, BookOpen, 
  Calendar, Users, AlertCircle, CheckCircle, ChevronRight
} from 'lucide-react';

const VitalSignsWebsite = () => {
  return (
    <Router>
      {/* THEME: "Natural Institutional" - Clean, text-focused, professional blue */}
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 flex flex-col">
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

// --- NAVBAR ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO AREA */}
        <Link to="/" className="flex items-center gap-3">
           {/* Assuming logo.png is in your public folder */}
           <img src="/logo.png" alt="VitalSigns Logo" className="w-12 h-12 object-contain" />
           <div className="flex flex-col">
             <span className="font-bold text-lg text-blue-900 leading-tight uppercase tracking-tight">VitalSigns</span>
             <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Medical & Health Sciences Society</span>
           </div>
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-blue-700 transition">About</Link>
          <Link to="/programs" className="hover:text-blue-700 transition">Programs & Fair</Link>
          <Link to="/membership" className="px-5 py-2.5 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
            Join Club
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
       {/* MOBILE MENU */}
       {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-6 space-y-4">
           <Link to="/" onClick={()=>setIsOpen(false)} className="block font-semibold">About</Link>
           <Link to="/programs" onClick={()=>setIsOpen(false)} className="block font-semibold">Programs</Link>
           <Link to="/membership" onClick={()=>setIsOpen(false)} className="block font-semibold text-blue-700">Join Club</Link>
        </div>
      )}
    </nav>
  );
};

// --- HOME PAGE ---
const Home = () => {
  return (
    <main>
      {/* HERO BANNER */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-slate-100 flex items-center justify-center overflow-hidden">
         {/* Using your banner.jpg */}
         <img src="/banner.jpg" alt="Club Banner" className="absolute inset-0 w-full h-full object-cover" />
         <div className="absolute inset-0 bg-blue-900/60"></div> {/* Blue Overlay for text readability */}
         
         <div className="relative z-10 text-center text-white px-6 max-w-3xl">
             <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Science & Innovation Lab</h1>
             <p className="text-lg md:text-xl text-blue-100 font-medium">
               Biomedical & Health Sciences Society
             </p>
         </div>
      </div>

      {/* MISSION SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-16">
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">About the Club</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Science & Innovation Lab is a student-led club where students learn science through hands-on experiments, creative projects, and teamwork. Members explore topics from biology, health sciences, chemistry, and physics while developing scientific thinking and practicing proper lab safety.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
               <div className="bg-slate-50 p-6 rounded border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                     <FlaskConical className="w-5 h-5 text-blue-600" /> Key Focus Areas
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                     <li>Fun, safe, and engaging scientific experiments</li>
                     <li>Biology, hygiene, nutrition, and water filtration activities</li>
                     <li>Real-world science connected to daily life</li>
                     <li>Preparation for the School Science Fair</li>
                  </ul>
               </div>
               <div className="bg-slate-50 p-6 rounded border border-slate-200">
                   <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                     <Users className="w-5 h-5 text-blue-600" /> Member Activities
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                     <li>Participate in hands-on research</li>
                     <li>Work individually and in teams on collaborative projects</li>
                     <li>Follow all lab safety rules responsibly</li>
                     <li>Build actual projects, not just theory</li>
                  </ul>
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
    <div className="max-w-5xl mx-auto px-6 py-16">
       
       {/* INTRO */}
       <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Our Curriculum</h1>
          <p className="text-slate-600">
             We offer three structured, lab-based programs focused on hands-on learning. Two are required for all members, and one is optional for advanced students.
          </p>
       </div>

       {/* PROGRAM CARDS - Clean & Simple */}
       <div className="space-y-8">
          
          {/* Program 1 */}
          <div className="flex flex-col md:flex-row gap-6 bg-white border border-slate-200 p-8 rounded shadow-sm hover:border-blue-300 transition">
             <div className="shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 flex items-center justify-center rounded font-bold text-xl">1</div>
             </div>
             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bio & Health Foundations <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2 uppercase">Required</span></h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                   Introduces basic human biology, public health, and health ethics through discussions and labs. A key project is a water filtration lab exploring clean water and disease prevention.
                </p>
                <div className="text-sm font-semibold text-slate-500 bg-slate-50 px-4 py-2 rounded inline-block">
                   Outcome: Filtration project + Presentation
                </div>
             </div>
          </div>

          {/* Program 2 */}
          <div className="flex flex-col md:flex-row gap-6 bg-white border border-slate-200 p-8 rounded shadow-sm hover:border-blue-300 transition">
             <div className="shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 flex items-center justify-center rounded font-bold text-xl">2</div>
             </div>
             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Biomedical Lab & Human Health <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2 uppercase">Required</span></h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                   Builds on Program 1 with investigations on how biological processes and daily habits affect health. Activities include heart rate, reaction time, and exercise-related experiments.
                </p>
                <div className="text-sm font-semibold text-slate-500 bg-slate-50 px-4 py-2 rounded inline-block">
                   Outcome: Guided lab investigation + Report
                </div>
             </div>
          </div>

          {/* Program 3 */}
          <div className="flex flex-col md:flex-row gap-6 bg-slate-900 text-white p-8 rounded shadow-md relative overflow-hidden">
             {/* Subtle decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
             
             <div className="shrink-0 relative z-10">
                <div className="w-12 h-12 bg-white/20 text-white flex items-center justify-center rounded font-bold text-xl">3</div>
             </div>
             <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Research & Science Fair <span className="text-xs bg-white/20 text-white px-2 py-1 rounded ml-2 uppercase">Optional</span></h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                   Prepares members to design and present a health-related research project for the club’s Science Fair. Offers additional experience and leadership opportunities.
                </p>
                <div className="text-sm font-semibold text-slate-300 bg-white/10 px-4 py-2 rounded inline-block">
                   Outcome: End-of-Year Science Fair Presentation
                </div>
             </div>
          </div>

       </div>

       {/* SCIENCE FAIR SECTION */}
       <div className="mt-16 bg-blue-50 border border-blue-100 p-8 rounded text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">End-of-Year Science Fair</h2>
          <p className="text-slate-700 max-w-2xl mx-auto mb-6">
             At the end of the school year, we host a Science Fair where members present selected lab and research projects. Participation is encouraged for all members and required for those in the Research Program.
          </p>
          <div className="flex justify-center gap-4 text-sm font-bold text-blue-700">
             <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Showcase Projects</span>
             <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Biomedical Topics</span>
          </div>
       </div>
    </div>
  );
};

// --- MEMBERSHIP PAGE ---
const Membership = () => {
   return (
      <div className="max-w-3xl mx-auto px-6 py-16">
         <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Join the Club</h1>
            <p className="text-lg text-slate-600">
               We are looking for students ready to commit to scientific discovery and teamwork.
            </p>
         </div>

         <div className="bg-white border border-slate-200 rounded p-8 shadow-sm mb-8">
            <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
               <Calendar className="w-5 h-5 text-blue-600" /> Commitment & Meetings
            </h3>
            <ul className="space-y-4 text-slate-600">
               <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Meetings take place 1–3 times per week during lunch or break times.</span>
               </li>
               <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Active participation is required. Repeated lack of performance or unsafe behavior may result in removal.</span>
               </li>
               <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>To recognize effort, certificates will be awarded to members who complete projects and follow safety guidelines.</span>
               </li>
            </ul>
         </div>

         <div className="bg-slate-50 p-6 rounded text-center border border-slate-200">
            <p className="text-slate-700 mb-6 font-medium">
               Ready to conduct real experiments and learn biomedical science?
            </p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition w-full md:w-auto">
               Open Application Form
            </button>
            <p className="text-xs text-slate-400 mt-4">
               *This form helps us understand your interest and readiness to join the lab.
            </p>
         </div>
      </div>
   );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           {/* Footer Logo */}
           <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
           <div>
              <div className="font-bold uppercase tracking-wider text-sm">VitalSigns</div>
              <div className="text-[10px] text-slate-400 uppercase">Medical & Health Sciences Society</div>
           </div>
        </div>
        <div className="text-sm text-slate-400">
             © 2026 Science & Innovation Lab.
        </div>
    </div>
  </footer>
);

export default VitalSignsWebsite;