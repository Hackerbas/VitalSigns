import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Activity, Globe, Users, TrendingUp, 
  Clock, Share2, ChevronRight, ArrowRight, Bookmark,
  Microscope, FlaskConical, Cpu
} from 'lucide-react';

const VitalSignsWebsite = () => {
  return (
    <Router>
      {/* THEME: High-End Journalism (Clean White, Stark Black, Royal Blue Accents) */}
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<JournalHome />} />
          <Route path="/club" element={<ClubHQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* MASTHEAD LOGO */}
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center gap-2">
             <div className="bg-black text-white px-2 py-0.5 font-black text-lg italic tracking-tighter">VS.</div>
             <span className="font-serif text-2xl font-black tracking-tight group-hover:text-blue-700 transition">VitalSigns<span className="text-slate-400 font-normal italic">Review</span></span>
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mt-0.5 ml-1">Est. 2026 • Science Journalism</span>
        </Link>
        
        {/* CATEGORIES + CLUB BUTTON */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600">
          <a href="#" className="hover:text-black hover:underline decoration-2 underline-offset-4">Biology</a>
          <a href="#" className="hover:text-black hover:underline decoration-2 underline-offset-4">Tech</a>
          <a href="#" className="hover:text-black hover:underline decoration-2 underline-offset-4">Student Life</a>
          
          <div className="h-6 w-px bg-slate-200"></div>

          {/* THE CLUB HQ BUTTON */}
          <Link to="/club" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
            <Users className="w-4 h-4" />
            <span className="font-bold tracking-tight">Club HQ</span>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
       {/* Mobile Menu */}
       {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-6 space-y-6 font-bold text-lg">
           <Link to="/" onClick={()=>setIsOpen(false)} className="block">Latest Stories</Link>
           <div className="h-px bg-slate-100 w-full"></div>
           <Link to="/club" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 text-blue-600">
             <Users className="w-5 h-5" /> Visit Club HQ
           </Link>
        </div>
      )}
    </nav>
  );
};

// --- MAIN PAGE: THE JOURNAL ---
const JournalHome = () => {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* TICKER / DATE BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-black pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-slate-500">
        <div className="font-bold text-slate-900">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
        <div className="flex items-center gap-3 mt-2 md:mt-0">
             <span className="flex items-center gap-1 text-red-600 font-bold animate-pulse"><TrendingUp className="w-3 h-3" /> LIVE:</span>
             <span>Lab Results</span>
             <span>•</span>
             <span>Exam Schedules</span>
             <span>•</span>
             <span>New Prosthetic Proto</span>
        </div>
      </div>

      {/* SECTION 1: THE COVER STORY (Big, Bold) */}
      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/9] border border-slate-200">
                 {/* --- HERO IMAGE (You can swap this for /sleep.jpg later) --- */}
                 <img 
                   src="/sleep.jpg" 
                   alt="Science of Sleep" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                 />
                 
                 {/* Dark Overlay so text is readable */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                 
                 {/* Content Overlay */}
                 <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                     <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3 inline-block">Deep Dive</span>
                     <h1 className="text-3xl md:text-5xl font-black font-serif leading-none mb-4 group-hover:text-blue-300 transition">
                         The Science of Sleep:<br/>Why 8 Hours Isn't Enough.
                     </h1>
                     <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white font-bold">AY</div>
                        <span>By Aslan Yıldız</span>
                        <span>•</span>
                        <span>6 min read</span>
                     </div>
                 </div>
            </div>
        </div>

        {/* SECTION 2: TOP STORIES (Sidebar) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-black text-sm uppercase tracking-widest">Editors' Picks</span>
            </div>

            {[
                { 
                  cat: "Engineering", 
                  title: "We 3D printed a prosthetic hand for under $50.", 
                  author: "Lab Team", 
                  color: "text-purple-600" 
                },
                { 
                  cat: "Chemistry", 
                  title: "Investigation: Is the school hand sanitizer actually effective?", 
                  author: "Safety Unit", 
                  color: "text-emerald-600" 
                },
                { 
                  cat: "Op-Ed", 
                  title: "Why every student needs to understand basic First Aid.", 
                  author: "A. Kurdi", 
                  color: "text-orange-600" 
                }
            ].map((story, i) => (
                <div key={i} className="group cursor-pointer">
                    <div className={`text-xs font-bold uppercase mb-2 ${story.color} flex items-center gap-2`}>
                        <div className={`w-2 h-2 rounded-full bg-current`}></div>
                        {story.cat}
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-blue-700 transition mb-2">
                        {story.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">By {story.author}</p>
                </div>
            ))}

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-auto">
                <h4 className="font-bold text-slate-900 mb-2">Join the Editorial Board</h4>
                <p className="text-sm text-slate-600 mb-4">We are looking for writers, researchers, and photographers.</p>
                <Link to="/club" className="text-sm font-black text-blue-600 hover:underline">Apply Now →</Link>
            </div>
        </div>
      </div>

      {/* SECTION 3: RECENT DISPATCHES (Updated with Photos) */}
      <div className="border-t border-black pt-12">
          <div className="flex items-center gap-2 mb-12">
              <Activity className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-black font-serif">Recent Dispatches</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
              {[
                  { 
                    title: "DNA Extraction: A Strawberry Experiment", 
                    desc: "A step-by-step breakdown of cell lysis using household items.", 
                    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
                    tag: "Lab Report"
                  },
                  { 
                    title: "The Physiology of Caffeine Crash", 
                    desc: "What happens to your adenosine receptors when the coffee wears off?", 
                    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
                    tag: "Biochemistry"
                  },
                  { 
                    title: "AI in Medicine: Friend or Foe?", 
                    desc: "Analyzing the role of Large Language Models in patient triage.", 
                    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                    tag: "Technology"
                  },
                  { 
                    title: "Lab Safety 101: The Checklist", 
                    desc: "Essential protocols before you touch a single beaker.", 
                    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
                    tag: "Protocol"
                  },
                  { 
                    title: "Student Stress & Cortisol Levels", 
                    desc: "A proposed study for the upcoming Spring term.", 
                    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
                    tag: "Hypothesis"
                  },
                  { 
                    title: "Club Update: New 3D Printer Arrival", 
                    desc: "Unboxing and calibration of the new engineering unit.", 
                    image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=800",
                    tag: "Engineering"
                  },
              ].map((item, i) => (
                  <div key={i} className="group cursor-pointer flex flex-col h-full">
                      <div className="overflow-hidden rounded-lg mb-4 aspect-[4/3] relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                          <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                            {item.tag}
                          </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-snug group-hover:text-blue-700 transition">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm mb-4 flex-grow">{item.desc}</p>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mt-auto group-hover:text-blue-600 transition">
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3 h-3" />
                      </div>
                  </div>
              ))}
          </div>
      </div>

    </main>
  );
};

// --- CLUB HQ PAGE (The "Behind the Scenes" Portal) ---
const ClubHQ = () => (
  <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
    
    {/* HERO */}
    <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Official Club Portal</span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-slate-900">More than a Website.<br/>We are a Movement.</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The <strong>VitalSigns Review</strong> is the public face of the <strong>VitalSigns Biomedical Club</strong>. We are a student-led organization dedicated to practical science, medical innovation, and clinical skills.
        </p>
    </div>

    {/* THE TWO PATHS */}
    <div className="grid md:grid-cols-2 gap-8 mb-20">
        
        {/* PATH 1: LOCAL JOIN */}
        <div className="bg-slate-900 text-white p-10 rounded-2xl relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                    <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">Join Our Chapter</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    Are you a student at our school? Apply to become a core member, researcher, or media lead.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition w-full md:w-auto shadow-lg">
                    Open Application Form
                </button>
            </div>
            {/* Decorative */}
            <Activity className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:scale-110 transition duration-500" />
        </div>

        {/* PATH 2: EXPANSION */}
        <div className="bg-blue-600 text-white p-10 rounded-2xl relative overflow-hidden group shadow-2xl shadow-blue-200">
            <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                    <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">Start a Chapter</h3>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                    Want to bring VitalSigns to your school? We provide the branding, the research kits, and the website template.
                </p>
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition w-full md:w-auto shadow-lg">
                    Request Founder Kit
                </button>
            </div>
             {/* Decorative */}
             <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10 group-hover:rotate-12 transition duration-500" />
        </div>
    </div>

    {/* THE BOARD */}
    <div className="border-t-2 border-slate-100 pt-16">
        <h2 className="text-3xl font-black mb-12 text-center">Meet the Executive Board</h2>
        <div className="grid md:grid-cols-3 gap-6">
             {[
                { n: "Aslan Yıldız", r: "President", desc: "Leading the vision and research direction." },
                { n: "Shiekh Daiyan", r: "Vice President", desc: "Managing daily operations and logistics." },
                { n: "Kaiyaan Akbar", r: "Club Manager", desc: "Ensuring smooth execution of all projects." },
                { n: "Abdelrahman Kurdi", r: "Safety Officer", desc: "Maintains lab safety protocols." },
                { n: "Abdalrahman", r: "Head of Digital", desc: "Manages the VitalSigns Review Platform." },
                { n: "Faculty Advisors", r: "Supervision", desc: "Ms. Maymouna, Ms. Ayse, Ms. Marwa" },
             ].map((m, i) => (
                 <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition group">
                     <div className="text-xs font-bold text-blue-600 uppercase mb-3 tracking-widest">{m.r}</div>
                     <h3 className="text-2xl font-black font-serif mb-2 group-hover:text-blue-700 transition">{m.n}</h3>
                     <p className="text-slate-500 text-sm">{m.desc}</p>
                 </div>
             ))}
        </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 py-16">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
                 <div className="bg-black text-white px-1.5 py-0.5 font-black text-sm italic transform -skew-x-12">VS.</div>
                 <span className="font-serif font-black text-lg">VitalSigns<span className="text-slate-400 italic font-normal">Review</span></span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
                A student-led publication dedicated to the advancement of biomedical sciences and clinical application. Produced by the VitalSigns Club.
            </p>
        </div>
        <div className="flex gap-12 text-sm font-bold text-slate-600">
            <div className="flex flex-col gap-3">
                <span className="text-black uppercase tracking-widest text-xs font-black">Journal</span>
                <Link to="/" className="hover:text-blue-600">Top Stories</Link>
                <a href="#" className="hover:text-blue-600">Archives</a>
                <a href="#" className="hover:text-blue-600">Authors</a>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-black uppercase tracking-widest text-xs font-black">Club</span>
                <Link to="/club" className="hover:text-blue-600">Membership</Link>
                <a href="#" className="hover:text-blue-600">Contact Faculty</a>
                <a href="#" className="hover:text-blue-600">Instagram</a>
            </div>
        </div>
    </div>
    <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 text-[10px] text-slate-400 uppercase tracking-widest flex justify-between">
        <span>© 2026 VitalSigns Biomedical Unit</span>
        <span>Science for Everyone</span>
    </div>
  </footer>
);

export default VitalSignsWebsite;