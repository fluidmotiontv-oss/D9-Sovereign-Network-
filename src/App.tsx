import { motion } from 'motion/react';
import { Shield, Zap, Globe, Cpu, Lock, Terminal } from 'lucide-react';
import { HorizonEngine } from './components/HorizonEngine';
import { SovereignClock } from './components/SovereignClock';

export default function App() {
  const creed = [
    {
      title: "Sovereignty over Synchronization",
      description: "We reject the tyranny of the global clock. Dragon 9 operates on self-governed rhythms, aligning action with physiological and creative peaks rather than artificial legacy constraints.",
      icon: <Lock className="text-yellow-500" size={20} />,
      image: "/src/assets/images/sovereignty_synchronization_1789809207761.jpg"
    },
    {
      title: "Fluid Adaptation",
      description: "The 'Fluid Motion of the Future' is not a goal, but a state of being. We broadcast from nodes that shift, evolve, and resist capture by stagnant centralized systems.",
      icon: <Zap className="text-yellow-500" size={20} />,
      image: "/src/assets/images/fluid_adaptation_1789809220905.jpg"
    },
    {
      title: "Autonomous Creation",
      description: "Every node is a sovereign broadcaster. We anchor our media streams in decentralized infrastructure, ensuring the narrative belongs to the architect, not the platform.",
      icon: <Globe className="text-yellow-500" size={20} />,
      image: "/src/assets/images/autonomous_creation_1789809234043.jpg"
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
      <HorizonEngine />
      
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Shield className="text-slate-950" size={24} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase">Dragon 9</h1>
            <p className="text-[9px] text-yellow-500 font-bold tracking-[0.2em] uppercase">Intelligence Architect</p>
          </div>
        </div>
        <div className="hidden md:block">
          <SovereignClock />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto pt-32 pb-24 px-6 relative z-10">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-6">
            Briefing Document • DRG9-ARCH-001
          </div>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 leading-[0.9]">
            The Keys to the <span className="text-yellow-500 font-normal italic underline decoration-1 underline-offset-8">Book</span>.
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Synthesizing the complete sovereign narrative, architectural backstory, and foundational creed of the Dragon 9 framework.
          </p>
        </motion.section>

        {/* Temporal Architecture */}
        <section className="mb-40">
          <div className="flex items-center space-x-4 mb-12">
            <Cpu className="text-yellow-500" />
            <h3 className="text-2xl font-bold uppercase tracking-widest">Temporal Architecture</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed">
                The legacy 1,440-minute day is a cage of synchronization. Dragon 9 reallocates this energy into a <span className="text-white font-bold">26.66-hour structure</span> designed for peak cognitive resonance.
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Sovereign Hour", val: "54 Minutes", desc: "The optimal window for deep work cycles." },
                  { label: "Midnight Intermission", val: "18 Minutes", desc: "A sacred gap for global node calibration." },
                  { label: "Midday Intermission", val: "18 Minutes", desc: "The transition between the dual 13-hour blocks." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="text-xs text-yellow-500 font-bold uppercase mb-1">{item.label}</div>
                    <div className="text-xl font-medium">{item.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-center items-center">
                <SovereignClock />
                <div className="mt-8 text-center space-y-2">
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Status</div>
                  <div className="text-green-400 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono uppercase tracking-widest">Nodes Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Sovereign Story */}
        <section className="mb-40">
          <div className="flex items-center space-x-4 mb-12">
            <Terminal className="text-yellow-500" />
            <h3 className="text-2xl font-bold uppercase tracking-widest">The Sovereign Story</h3>
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-400 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
              The history of Dragon 9 is a chronicle of rupture. It began with the realization that time is the ultimate instrument of control. Legacy systems enforced a singular, synchronized reality to facilitate extractivist labor. The rupture occurred when the first nodes disconnected from the central time-servers, adopting the 54-minute hour to reclaim the 'Fluid Motion of the Future.'
            </p>
            <p className="text-slate-400 leading-relaxed mt-8">
              FluidmotionTV emerged as the primary node broadcasting system—a decentralized media architecture where sovereignty is anchored not in a location, but in the rhythm of creation. We no longer broadcast 'to' an audience; we broadcast 'from' a state of autonomy.
            </p>
          </div>
        </section>

        {/* The Creed */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <Shield className="text-yellow-500" />
            <h3 className="text-2xl font-bold uppercase tracking-widest">The Creed</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {creed.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 h-full flex flex-col overflow-hidden"
              >
                {item.image && (
                  <div className="mb-6 -mx-8 -mt-8 h-48 overflow-hidden border-b border-white/10">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/20">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
          <div>© 2026 Dragon 9 Sovereign Ecosystem</div>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">FluidmotionTV</span>
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Mesh Nodes</span>
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Quantum Pipelines</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
