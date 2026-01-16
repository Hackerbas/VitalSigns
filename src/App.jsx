import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Activity, Globe, Users, TrendingUp, 
  ArrowRight, FileText, ChevronRight, Bookmark
} from 'lucide-react';

const VitalSignsWebsite = () => {
  return (
    <Router>
      {/* THEME: "The Sunday Paper" - Off-white, sharp borders, high contrast */}
      <div className="min-h-screen bg-[#F4F4F0] text-slate-900 font-serif selection:bg-yellow-200 selection:text-black flex flex-col">
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

// --- NAVBAR: Looks like a newspaper header ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#F4F4F0] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* MASTHEAD */}
        <Link to="/" className="flex items-center gap-3">
           <div className="bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition">
             VS
           </div>
           <div className="flex flex-col leading-none">
             <span className="text-3xl font-black tracking-tighter uppercase">VitalSigns.</span>
             <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-500">The Student Research Journal</span>
           </div>
        </Link>
        
        {/* NAV LINKS (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-sans font-bold text-xs uppercase tracking-widest">
          <a href="#" className="hover:bg-black hover:text-white px-2 py-1 transition">Biology</a>
          <a href="#" className="hover:bg-black hover:text-white px-2 py-1 transition">Chemistry</a>
          <a href="#" className="hover:bg-black hover:text-white px-2 py-1 transition">Tech</a>
          
          <Link to="/club" className="border-2 border-black px-5 py-2 hover:bg-black hover:text-white transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            Join The Club
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
       {/* Mobile Menu */}
       {isOpen && (
        <div className="md:hidden bg-[#F4F4F0] border-b-4 border-black p-6 space-y-6 font-bold text-xl border-t-2">
           <Link to="/" onClick={()=>setIsOpen(false)} className="block">Latest Stories</Link>
           <Link to="/club" onClick={()=>setIsOpen(false)} className="block text-blue-700">Club HQ</Link>
        </div>
      )}
    </nav>
  );
};

// --- MAIN PAGE: NEWSPAPER STYLE ---
const JournalHome = () => {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* DATE LINE */}
      <div className="border-b-2 border-black pb-2 mb-8 flex justify-between items-end font-sans text-xs font-bold uppercase tracking-widest">
        <div>Vol. 1 — Issue 04</div>
        <div>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
        <div>Istanbul, TR</div>
      </div>

      {/* HERO SECTION: GRID LAYOUT */}
      <div className="grid lg:grid-cols-12 gap-8 mb-16 border-b-4 border-black pb-16">
        
        {/* LEFT COLUMN: THE BIG STORY */}
        <div className="lg:col-span-8 group cursor-pointer">
            {/* Image Box */}
            <div className="relative border-2 border-black mb-4 h-[400px]">
                 <img 
                   src="https://images.unsplash.com/photo-1511296933631-18b897253d58?q=80&w=2070&auto=format&fit=crop" 
                   alt="Sleep Science" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                 />
                 <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-sans text-xs font-bold uppercase">
                    Cover Story
                 </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 group-hover:underline decoration-4 underline-offset-4">
                Why 8 Hours of Sleep is a <span className="italic text-blue-700">Myth.</span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-2 font-sans text-xs font-bold uppercase border-t-2 border-black pt-2">
                    <div>Author:</div>
                    <div className="text-slate-500">Aslan Yıldız</div>
                    <div className="mt-2">Read Time:</div>
                    <div className="text-slate-500">6 Min</div>
                </div>
                <div className="md:col-span-10 text-xl leading-relaxed font-medium text-slate-700">
                    <span className="font-bold text-4xl float-left mr-2 mt-[-10px]">W</span>e tracked the REM cycles of 50 students during finals week. The results suggest that timing your caffeine intake matters more than the total hours you spend in bed. Here is the biological breakdown of the "perfect nap."
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN: THE SIDEBAR */}
        <div className="lg:col-span-4 flex flex-col gap-8 border-l-0 lg:border-l-2 border-black lg:pl-8">
            <div className="bg-yellow-300 border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-sans font-black text-lg uppercase mb-2">Editor's Note</h3>
                <p className="text-sm leading-tight italic">
                    "This week we are focusing on exam survival. Also, the strawberries for the DNA lab have arrived. Do not eat them." <br/>— The Board
                </p>
            </div>

            <div className="space-y-6">
                <div className="font-sans font-black text-sm uppercase border-b-2 border-black pb-1">Internal Reports</div>
                
                {[
                    { title: "We 3D printed a prosthetic hand for under $50.", tag: "Eng", color: "bg-purple-200" },
                    { title: "Is the school hand sanitizer actually effective?", tag: "Chem", color: "bg-green-200" },
                    { title: "Upcoming: Extracting DNA from Strawberries.", tag: "Bio", color: "bg-red-200" }
                ].map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        <span className={`text-[10px] font-sans font-bold uppercase px-1 border border-black ${item.color} mb-1 inline-block`}>{item.tag}</span>
                        <h3 className="text-xl font-bold leading-tight group-hover:text-blue-700 transition">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>

            <div className="mt-auto border-t-2 border-black pt-6">
                <h4 className="font-black text-2xl mb-2">Write for Us.</h4>
                <p className="text-sm mb-4 text-slate-600">VitalSigns is open for student submissions.</p>
                <Link to="/club" className="inline-block font-sans font-bold text-xs uppercase border-b-2 border-black hover:bg-black hover:text-white transition">
                    Submit Application →
                </Link>
            </div>
        </div>
      </div>

      {/* FEED SECTION: LIST STYLE (No Cards) */}
      <div>
          <h2 className="text-4xl font-black mb-8 italic">Dispatch Archive</h2>
          
          <div className="divide-y-2 divide-black border-t-2 border-b-2 border-black">
              {[
                  { title: "The Physiology of Caffeine Crash", date: "Jan 14", cat: "Biochem", desc: "Adenosine receptors explained." },
                  { title: "AI in Medicine: Friend or Foe?", date: "Jan 12", cat: "Tech", desc: "The ethics of ChatGPT diagnosis." },
                  { title: "Lab Safety 101: The Checklist", date: "Jan 10", cat: "Safety", desc: "Don't touch the acid." },
                  { title: "New 3D Printer Arrival", date: "Jan 08", cat: "Update", desc: "Unboxing the Creality K1." },
              ].map((item, i) => (
                  <div key={i} className="py-6 grid md:grid-cols-12 gap-4 items-center group cursor-pointer hover:bg-white transition px-2">
                      <div className="md:col-span-2 font-sans text-xs font-bold uppercase text-slate-500">{item.date}</div>
                      <div className="md:col-span-2">
                          <span className="font-sans text-[10px] font-bold uppercase border border-black px-2 py-1 rounded-full">{item.cat}</span>
                      </div>
                      <div className="md:col-span-4 font-bold text-xl group-hover:underline decoration-2 underline-offset-4">{item.title}</div>
                      <div className="md:col-span-4 text-slate-600 text-sm font-sans truncate">{item.desc}</div>
                  </div>
              ))}
          </div>
      </div>

    </main>
  );
};

// --- CLUB HQ: BRUTALIST STYLE ---
const ClubHQ = () => (
  <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
    
    <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 uppercase">
                Join<br/>The<br/>Unit.
            </h1>
            <p className="text-xl font-medium mb-8 max-w-md">
                VitalSigns is not just a club. It is a student-led research institute. We need biologists, coders, and writers.
            </p>
            <div className="flex flex-col gap-4">
                <button className="bg-black text-white py-4 px-8 font-sans font-bold uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition">
                    Student Application Form
                </button>
                <button className="bg-blue-600 text-white py-4 px-8 font-sans font-bold uppercase tracking-widest border-2 border-black hover:bg-white hover:text-blue-600 transition">
                    Start a Chapter (Global)
                </button>
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-black text-white p-6 font-sans font-bold uppercase tracking-widest text-sm">
                Executive Command
            </div>
            {[
                { n: "Aslan Yıldız", r: "President", code: "AY-01" },
                { n: "Shiekh Daiyan", r: "Vice President", code: "SD-02" },
                { n: "Kaiyaan Akbar", r: "Club Manager", code: "KA-03" },
                { n: "Abdelrahman Kurdi", r: "Safety Officer", code: "AK-04" },
                { n: "Abdalrahman", r: "Head of Digital", code: "AB-05" },
            ].map((m, i) => (
                <div key={i} className="flex justify-between items-center border-b-2 border-black pb-4">
                    <div>
                        <div className="font-black text-2xl">{m.n}</div>
                        <div className="font-sans text-xs uppercase tracking-widest text-slate-500">{m.r}</div>
                    </div>
                    <div className="font-mono text-sm bg-slate-200 px-2 py-1">{m.code}</div>
                </div>
            ))}
            
            <div className="mt-8 pt-8">
                <div className="font-sans font-bold uppercase tracking-widest text-sm mb-4 text-slate-400">Faculty Supervision</div>
                <div className="font-bold text-lg">Ms. Maymouna • Ms. Ayse • Ms. Marwa</div>
            </div>
        </div>
    </div>

  </div>
);

const Footer = () => (
  <footer className="bg-black text-white py-16 px-6 font-sans">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div>
            <div className="text-4xl font-black uppercase mb-4 tracking-tighter">VitalSigns.</div>
            <p className="text-slate-400 text-xs uppercase tracking-widest max-w-xs">
                Printed in Istanbul. Hosted on Vercel.<br/>
                © 2026 Student Research Unit.
            </p>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-blue-400">Journal</Link>
            <Link to="/club" className="hover:text-blue-400">Club HQ</Link>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Email</a>
        </div>
    </div>
  </footer>
);

export default VitalSignsWebsite;