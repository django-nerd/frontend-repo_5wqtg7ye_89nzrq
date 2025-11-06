import { useState } from 'react';
import { Rocket, User, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/60 to-indigo-500/60 ring-1 ring-white/20 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-wide">AI Career Planner</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#fitur" className="hover:text-white transition">Fitur</a>
            <a href="#rencana" className="hover:text-white transition">Rencana</a>
            <a href="#komunitas" className="hover:text-white transition">Komunitas</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20 transition">
              <MessageCircle className="w-4 h-4" /> AI Mentor
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30">
              <User className="w-4 h-4" /> Masuk
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
            <span className="sr-only">Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-black/30 border-t border-white/10">
          <a href="#fitur" className="block px-3 py-2 rounded-lg hover:bg-white/10 text-white/80">Fitur</a>
          <a href="#rencana" className="block px-3 py-2 rounded-lg hover:bg-white/10 text-white/80">Rencana</a>
          <a href="#komunitas" className="block px-3 py-2 rounded-lg hover:bg-white/10 text-white/80">Komunitas</a>
        </div>
      )}
    </header>
  );
}
