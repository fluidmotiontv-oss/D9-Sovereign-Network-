import { useEffect, useState } from 'react';
import { getSovereignTime } from '../utils/sovereignTime';
import { SovereignTime } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Clock } from 'lucide-react';

export function SovereignClock() {
  const [time, setTime] = useState<SovereignTime>(getSovereignTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getSovereignTime(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
      <div className="flex items-center space-x-2 text-yellow-500 mb-1">
        <Clock size={16} />
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Sovereign Rhythm</span>
      </div>
      
      <div className="text-5xl font-light tracking-tighter tabular-nums flex items-baseline">
        <span className="text-white">{time.hour.toString().padStart(2, '0')}</span>
        <span className="text-white/30 mx-1">:</span>
        <span className="text-white">{time.minute.toString().padStart(2, '0')}</span>
        <span className="text-yellow-500/50 text-xl ml-2 font-mono">
          {time.second.toString().padStart(2, '0')}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {time.isIntermission && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[10px] text-yellow-500 font-bold tracking-widest uppercase"
          >
            {time.intermissionType} INTERMISSION
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-[9px] text-white/40 font-medium tracking-wide">
        Dragon 9 Temporal Engine • 26.66 HRS
      </div>
    </div>
  );
}
