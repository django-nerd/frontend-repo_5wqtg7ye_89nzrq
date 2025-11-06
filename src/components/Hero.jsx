import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(147,51,234,0.2),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(234,179,8,0.12),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur text-white/80 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Dirancang oleh AI — personal dan bersahabat
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Rencanakan Karier, Kampus, dan Skill-mu dengan Sentuhan Ajaib
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            AI Career Planner membantu kamu menemukan pekerjaan ideal, jurusan kuliah, hingga jalur pengembangan diri melalui interaksi yang ramah, cerdas, dan memukau.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#rencana" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30 hover:opacity-95 transition">
              Mulai Rencana
            </a>
            <a href="#fitur" className="px-5 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 hover:bg-white/15 transition">
              Jelajahi Fitur
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
