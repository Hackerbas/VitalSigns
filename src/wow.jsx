old red 

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  HeartPulse, Activity, Users, Shield, Megaphone, Smartphone, 
  UserPlus, Menu, X, ChevronRight, Stethoscope, Dna, Globe, 
  FlaskConical, Calculator, RefreshCw, Droplets, GraduationCap, 
  Search, AlertCircle, CheckCircle, Brain, Loader2, Calendar,
  MessageSquare, Send, Camera, ArrowRight, ThumbsUp, ThumbsDown, 
  Zap, Lightbulb, PenTool, Flame
} from 'lucide-react';

const VitalSignsWebsite = () => {
  // ⚠️ PASTE GROQ KEY HERE (Optional) ⚠️
  // Leave blank for "Simulation Mode"
  const GROQ_API_KEY = "gsk_YOUR_ACTUAL_KEY_GOES_HERE"; 

  return (
    <Router>
      {/* BACKGROUND: Changed to Neutral-950 (Almost Black) for that "Darker" feel */}
      <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-red-600 selection:text-white flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/lab" element={<Lab apiKey={GROQ_API_KEY} />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/community" element={<Community />} />
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
  const isActive = (path) => location.pathname === path ? "text-white bg-red-600/20 border border-red-500/50" : "text-neutral-400 hover:text-red-400";

  return (
    <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-red-600 p-2 rounded-xl shadow-lg shadow-red-900/50 group-hover:scale-110 transition">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">Vital<span className="text-red-500">Signs</span></span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-bold transition ${isActive('/')}`}>Home</Link>
            <Link to="/projects" className={`px-4 py-2 rounded-lg text-sm font-bold transition ${isActive('/projects')}`}>Projects</Link>
            <Link to="/lab" className={`px-4 py-2 rounded-lg text-sm font-bold transition ${isActive('/lab')}`}>Lab & AI</Link>
            <Link to="/leadership" className={`px-4 py-2 rounded-lg text-sm font-bold transition ${isActive('/leadership')}`}>Leadership</Link>
            <Link to="/community" className={`px-4 py-2 rounded-lg text-sm font-bold transition ${isActive('/community')}`}>Community</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-red-900/30 p-4 space-y-2">
          {['/', '/projects', '/lab', '/leadership', '/community'].map(path => (
            <Link key={path} to={path} onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-red-900/20 text-red-200 capitalize">
              {path === '/' ? 'Home' : path.replace('/', '')}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- PAGES ---

const Home = () => (
  <header className="relative pt-40 pb-40 overflow-hidden">
    {/* CRAZY GLOW EFFECTS */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-900/10 blur-[100px] rounded-full pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/30 border border-red-500/30 text-red-400 text-sm font-bold mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.3)]">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
        Accepting New Members for 2026
      </div>
      <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-tight text-white drop-shadow-2xl">
        The Future of <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-white">Biomedical Science</span>
      </h1>
      <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        VitalSigns is the premier student organization bridging the gap between classroom theory and real-world medical innovation.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/community" className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-500 transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 hover:scale-105">
          <UserPlus className="w-5 h-5" /> Join VitalSigns
        </Link>
        <Link to="/projects" className="px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-white hover:border-red-500/50">
          <Globe className="w-5 h-5" /> View Projects
        </Link>
      </div>
    </div>
  </header>
);

const Projects = () => (
  <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
    <div className="flex items-center gap-4 mb-16">
      <div className="h-px bg-red-900/30 flex-1"></div>
      <h2 className="text-3xl font-bold text-white tracking-wide">Current Projects</h2>
      <div className="h-px bg-red-900/30 flex-1"></div>
    </div>

    {/* EXISTING PROJECTS */}
    <div className="max-w-5xl mx-auto mb-24">
      <div className="bg-neutral-900/50 border border-red-900/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition duration-300 group shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-auto relative overflow-hidden bg-neutral-950 flex items-center justify-center group-hover:bg-red-950/10 transition">
            <FlaskConical className="w-20 h-20 text-red-600" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none"></div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block w-fit bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Completed</div>
            <h3 className="text-3xl font-bold text-white mb-4">Hand-made Hand Sanitizer</h3>
            <p className="text-neutral-400 mb-6">A student-led initiative to formulate and produce a high-efficacy hand sanitizer exploring chemical formulation and quality control.</p>
            <div className="flex items-center gap-4 text-sm text-red-400">
              <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Safety Protocol</span>
              <span className="flex items-center gap-1"><FlaskConical className="w-4 h-4" /> Formulation</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* TIMELINE */}
    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2"><Calendar className="w-6 h-6 text-red-500" /> Upcoming Roadmap</h2>
    <div className="max-w-3xl mx-auto border-l-2 border-red-900/30 pl-8 space-y-12">
      {[
        { title: "DNA Extraction Lab", date: "February 2026", desc: "Extracting DNA from strawberries using household items." },
        { title: "Prosthetic Workshop", date: "March 2026", desc: "Designing simple 3D-printed prosthetic hands." },
        { title: "Vital Signs Clinic", date: "April 2026", desc: "Training members to measure BP and Heart Rate for staff." }
      ].map((item, i) => (
        <div key={i} className="relative group">
          <span className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 bg-black border-2 border-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
          <div className="bg-neutral-900/40 border border-white/5 p-6 rounded-xl hover:bg-neutral-900 hover:border-red-500/30 transition">
             <div className="flex justify-between mb-2">
               <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition">{item.title}</h3>
               <span className="text-xs bg-red-900/20 text-red-300 px-2 py-1 rounded font-mono border border-red-900/30">{item.date}</span>
             </div>
             <p className="text-neutral-400">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Lab = ({ apiKey }) => {
  const [symptomInput, setSymptomInput] = useState('');
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Calculator States
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [waterWeight, setWaterWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('low'); 
  const [waterResult, setWaterResult] = useState(null);

  const handleDiagnosis = async (e) => {
    e.preventDefault();
    if (!symptomInput) return;
    setIsLoading(true);
    setDiagnosisResult(null);

    try {
      if (!apiKey || apiKey === "gsk_YOUR_ACTUAL_KEY_GOES_HERE") {
        throw new Error("No Key"); // Trigger simulation mode
      }
      // ... Real API Call would go here ...
      throw new Error("Simulate");
    } catch (error) {
      // --- DEMO MODE ---
      setTimeout(() => {
        setDiagnosisResult({ 
            condition: "Simulation: Common Cold", 
            severity: "Low Risk", 
            color: "green", 
            desc: "Based on the simulation, this appears to be a mild viral infection.", 
            tips: "Rest, drink water, and monitor temperature.", 
            action: "Visit the school nurse if fever persists." 
        });
        setIsLoading(false);
      }, 1500); 
    }
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) setBmi((weight / ((height/100)**2)).toFixed(1));
  };

  const calculateWater = (e) => {
    e.preventDefault();
    let base = waterWeight * 35;
    if (activityLevel === 'medium') base += 500;
    if (activityLevel === 'high') base += 1000;
    setWaterResult((base / 1000).toFixed(2));
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">AI Lab & Tools</h1>
        <p className="text-red-400">Interactive health analysis powered by Groq AI.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* AI NURSE */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-red-900/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
           {/* Decorative bg element */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
           
           <div className="flex items-center gap-3 mb-6 relative z-10">
             <div className="bg-red-600 p-2 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.5)]"><Brain className="w-6 h-6 text-white" /></div>
             <h3 className="text-2xl font-bold text-white">AI Nurse Agent</h3>
           </div>
           <form onSubmit={handleDiagnosis} className="flex gap-4 mb-6 relative z-10">
             <input type="text" value={symptomInput} onChange={e=>setSymptomInput(e.target.value)} placeholder="Describe symptoms (e.g., headache, fever)..." className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition" />
             <button disabled={isLoading} className="bg-red-600 px-6 rounded-xl font-bold text-white hover:bg-red-500 transition flex items-center shadow-lg shadow-red-900/20">{isLoading ? <Loader2 className="animate-spin" /> : "Scan"}</button>
           </form>
           {diagnosisResult && (
             <div className="bg-neutral-800/50 border border-white/10 rounded-xl p-6 animate-fade-in relative z-10">
               <div className="flex justify-between mb-2">
                 <h4 className="text-xl font-bold text-white">{diagnosisResult.condition}</h4>
                 <span className={`text-${diagnosisResult.color === 'red' ? 'red' : diagnosisResult.color === 'orange' ? 'orange' : 'green'}-400 font-bold uppercase text-sm`}>{diagnosisResult.severity}</span>
               </div>
               <p className="text-neutral-300 text-sm mb-4">{diagnosisResult.desc}</p>
               <div className="bg-black/50 p-3 rounded-lg text-sm text-neutral-300 mb-2 border border-white/5"><strong>Tips:</strong> {diagnosisResult.tips}</div>
               <div className="bg-black/50 p-3 rounded-lg text-sm text-white border border-white/5"><strong>Action:</strong> {diagnosisResult.action}</div>
             </div>
           )}
        </div>

        {/* CALCULATORS */}
        <div className="space-y-6">
           {/* BMI */}
           <div className="bg-neutral-100 rounded-3xl p-6 text-neutral-950 shadow-xl">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-red-600" /> BMI Calculator</h3>
             <div className="flex gap-2 mb-4">
               <input type="number" placeholder="Weight (kg)" onChange={e=>setWeight(e.target.value)} className="w-full bg-neutral-200 p-3 rounded-xl outline-none focus:ring-2 ring-red-500/20" />
               <input type="number" placeholder="Height (cm)" onChange={e=>setHeight(e.target.value)} className="w-full bg-neutral-200 p-3 rounded-xl outline-none focus:ring-2 ring-red-500/20" />
             </div>
             <button onClick={calculateBMI} className="w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition">Calculate</button>
             {bmi && <div className="mt-4 text-center text-4xl font-black text-neutral-900">{bmi}</div>}
           </div>

           {/* Water */}
           <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl">
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Droplets className="w-5 h-5 text-blue-400" /> Hydration</h3>
             <div className="flex gap-2 mb-4">
               <input type="number" placeholder="Weight (kg)" onChange={e=>setWaterWeight(e.target.value)} className="w-full bg-neutral-950 p-3 rounded-xl text-white border border-neutral-700 outline-none focus:border-blue-500" />
               <div className="flex gap-1">
                  {['low','medium','high'].map(l=><button key={l} onClick={()=>setActivityLevel(l)} className={`px-2 rounded-lg text-xs capitalize transition ${activityLevel===l?'bg-blue-500 text-white':'bg-neutral-950 text-neutral-400 border border-neutral-800'}`}>{l}</button>)}
               </div>
             </div>
             <button onClick={calculateWater} className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-neutral-200 transition">Calculate</button>
             {waterResult && <div className="mt-4 text-center text-4xl font-black text-white">{waterResult}L</div>}
           </div>
        </div>
      </div>
    </div>
  );
};

const Leadership = () => (
  <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-white">Executive Board</h1>
      <p className="text-red-400">The team powering VitalSigns.</p>
    </div>

    {/* PRESIDENT */}
    <div className="max-w-3xl mx-auto mb-16">
      <div className="bg-gradient-to-r from-red-900/20 to-neutral-900/50 border border-red-500/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
        <div className="bg-black p-4 rounded-full border-4 border-red-800 shrink-0 shadow-lg"><Stethoscope className="w-12 h-12 text-red-500" /></div>
        <div className="text-center md:text-left w-full">
          <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1">Club President</div>
          <h3 className="text-3xl font-bold text-white">Aslan Yıldız</h3>
          <p className="text-neutral-400 mt-2 text-sm">Leading the vision of VitalSigns.</p>
        </div>
      </div>
    </div>

    {/* FACULTY */}
    <div className="grid md:grid-cols-3 gap-6 mb-16">
       {[
         { name: "Maymouna Taha", role: "Faculty Advisor" },
         { name: "Ayse Nur", role: "Head of Laboratory" },
         { name: "Marwa Al Khatib", role: "Faculty Advisor" }
       ].map((p, i) => (
         <div key={i} className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-red-500/30 transition hover:bg-neutral-900/60">
            <div className="bg-neutral-950 p-3 rounded-lg border border-white/10"><GraduationCap className="text-red-400" /></div>
            <div><h4 className="text-lg font-bold text-white">{p.name}</h4><p className="text-red-400/60 text-sm">{p.role}</p></div>
         </div>
       ))}
    </div>

    {/* OFFICERS */}
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {[
        { name: "Shiekh Daiyan", role: "Vice President", grade: "G9B" },
        { name: "Kaiyaan Akbar", role: "Club Manager", grade: "G10B" },
        { name: "Abdelrahman Kurdi", role: "Safety Officer", grade: "G10B" },
        { name: "Abdulrahman", role: "Media & Comms", grade: "Manager" },
        { name: "Hussien", role: "Social Media", grade: "Outreach" },
      ].map((m, i) => (
        <div key={i} className="bg-neutral-900/40 border border-white/5 p-6 rounded-xl hover:border-red-500/40 transition hover:translate-y-[-2px]">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-white">{m.name}</h4>
            <span className="text-xs font-mono text-red-400 bg-red-950/20 border border-red-900/30 px-2 py-1 rounded">{m.grade}</span>
          </div>
          <p className="text-neutral-400 text-sm">{m.role}</p>
        </div>
      ))}
    </div>

    {/* MEMBERS LIST */}
    <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-5 h-5 text-red-500" />
        <h3 className="text-xl font-bold text-white">Active Members</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[{n:"Yassine",g:"G10B"}, {n:"Talib Alnakeeb",g:"G10B"}, {n:"Bilal El Kassar",g:"G10D"}, {n:"Mohammed Abdulkoddous",g:"G9B"}, {n:"Faysal Olabi",g:"G9D"}, {n:"Malik Sanfaz",g:"Member"}].map((m, i) => (
          <div key={i} className="flex justify-between p-3 bg-neutral-950 rounded-lg border border-white/5 text-neutral-300 text-sm hover:border-red-900/30 transition">
            <span>{m.n}</span><span className="text-red-600 font-mono text-xs">{m.g}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, type: 'suggestion', content: 'We should hold a science fair in the courtyard next month.', votes: 5, time: '2h ago' },
    { id: 2, type: 'project', content: 'Working on a prosthetic hand prototype using the new 3D printer! 🖨️', votes: 12, time: '4h ago' },
    { id: 3, type: 'suggestion', content: 'Can we get more Arduino kits for the lab?', votes: 3, time: '1d ago' },
  ]);
  
  const [inputText, setInputText] = useState('');
  const [postType, setPostType] = useState('suggestion'); 

  const handlePost = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newPost = { id: Date.now(), type: postType, content: inputText, votes: 0, time: 'Just now' };
    setPosts([newPost, ...posts]);
    setInputText('');
  };

  const handleVote = (id, change) => {
    setPosts(posts.map(post => post.id === id ? { ...post, votes: post.votes + change } : post).sort((a,b) => b.votes - a.votes)); 
  };

  const handleComment = () => { alert("Comments will be enabled in V2!"); }

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-2">Community Hub</h1>
        <p className="text-red-400">Share suggestions or show off your projects.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* SUBMIT PANEL */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-b from-neutral-900 to-black p-8 rounded-3xl border border-red-900/30 sticky top-32 shadow-xl">
            <div className="flex items-center gap-2 mb-6 text-white">
              <MessageSquare className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold">New Post</h3>
            </div>
            
            <form onSubmit={handlePost}>
              <div className="flex gap-2 mb-4 p-1 bg-black rounded-xl border border-white/5">
                <button type="button" onClick={() => setPostType('suggestion')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition flex items-center justify-center gap-2 ${postType === 'suggestion' ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'text-neutral-400 hover:text-white'}`}>
                  <Lightbulb className="w-4 h-4" /> Suggestion
                </button>
                <button type="button" onClick={() => setPostType('project')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition flex items-center justify-center gap-2 ${postType === 'project' ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/50' : 'text-neutral-400 hover:text-white'}`}>
                  <Zap className="w-4 h-4" /> Project
                </button>
              </div>

              <textarea value={inputText} onChange={e=>setInputText(e.target.value)} className="w-full h-32 bg-black border border-neutral-800 rounded-xl p-4 text-white placeholder-neutral-600 mb-4 focus:outline-none focus:border-red-500 transition" placeholder={postType === 'suggestion' ? "I think we should..." : "Today I worked on..."} required />
              <button className="w-full bg-white text-black font-bold py-3 rounded-xl transition hover:bg-neutral-200 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Post to Board
              </button>
            </form>
          </div>
        </div>

        {/* FEED */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between text-white mb-2">
             <h3 className="text-xl font-bold flex items-center gap-2">
               <Activity className="w-5 h-5 text-red-500" /> Live Board
             </h3>
             <span className="text-xs text-red-400 bg-red-950/30 px-3 py-1 rounded-full border border-red-900/30">Auto-sorted by Bumps</span>
           </div>

           {posts.map((post) => (
             <div key={post.id} className="bg-neutral-900/40 border border-white/5 p-6 rounded-2xl hover:border-red-500/30 transition group flex gap-4">
               {/* No Side Bar */}
               <div className="flex-1">
                 <div className="flex items-center gap-2 mb-2">
                   {post.type === 'suggestion' ? (
                     <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><Lightbulb className="w-3 h-3" /> Suggestion</span>
                   ) : (
                     <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><Zap className="w-3 h-3" /> Project Update</span>
                   )}
                   <span className="text-neutral-500 text-xs">{post.time}</span>
                   <span className="ml-auto text-xs font-bold text-red-500 flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> {post.votes}</span>
                 </div>
                 <p className="text-neutral-200 leading-relaxed text-lg">{post.content}</p>
                 
                 <div className="flex gap-4 mt-4 pt-4 border-t border-white/5 opacity-50 group-hover:opacity-100 transition">
                    <button onClick={() => handleVote(post.id, 1)} className="text-xs font-bold text-neutral-400 hover:text-white flex items-center gap-1 hover:bg-white/5 px-2 py-1 rounded transition">
                        <ThumbsUp className="w-3 h-3" /> Bump
                    </button>
                    <button onClick={handleComment} className="text-xs font-bold text-neutral-400 hover:text-white flex items-center gap-1 hover:bg-white/5 px-2 py-1 rounded transition">
                        <MessageSquare className="w-3 h-3" /> Comment
                    </button>
                 </div>
               </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-white/5 bg-black py-12 text-center text-neutral-500 mt-auto">
    <div className="flex justify-center items-center gap-2 mb-4"><Dna className="w-6 h-6 text-red-600" /><span className="text-white font-bold text-xl tracking-tight">VitalSigns</span></div>
    <p className="text-sm">© 2026 VitalSigns Biomedical. Innovation in Health.</p>
  </footer>
);

export default VitalSignsWebsite;