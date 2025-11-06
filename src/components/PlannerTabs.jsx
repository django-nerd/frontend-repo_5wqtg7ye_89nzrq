import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Zap } from 'lucide-react';

const tabs = [
  { key: 'career', label: 'Career Plan', icon: Briefcase },
  { key: 'college', label: 'College Plan', icon: GraduationCap },
  { key: 'life', label: 'Life Path', icon: Zap },
];

function Field({ label, placeholder, type = 'text' }) {
  return (
    <label className="block">
      <span className="text-sm text-white/80">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/15 placeholder:text-white/40 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
      />
    </label>
  );
}

export default function PlannerTabs() {
  const [active, setActive] = useState('career');

  return (
    <section id="rencana" className="relative py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Buat Rencana Pintar</h2>
          <p className="mt-2 text-white/70">Jawab beberapa pertanyaan singkat, lalu AI akan menyusun roadmap, rekomendasi kampus/jurusan, atau rencana pengembangan skill yang menyatu dengan jadwal harianmu.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ring-1 ring-white/15 backdrop-blur text-left transition ${
                  active === key ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="p-2 rounded-lg bg-white/10 ring-1 ring-white/20"><Icon className="w-4 h-4" /></div>
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="relative rounded-2xl p-6 bg-white/5 ring-1 ring-white/15 backdrop-blur overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
              <AnimatePresence mode="wait">
                {active === 'career' && (
                  <motion.div key="career" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Minat utama" placeholder="Contoh: desain, data, menulis" />
                      <Field label="Kepribadian" placeholder="Contoh: introvert, kolaboratif" />
                      <Field label="Skill yang dikuasai" placeholder="Contoh: Figma, Python, public speaking" />
                      <Field label="Skill yang ingin dipelajari" placeholder="Contoh: AI, analitik, leadership" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm text-white/80 mb-1">Kuis mini (pilih yang paling kamu suka)</label>
                      <div className="flex flex-wrap gap-2">
                        {['Memecahkan masalah', 'Mendesain tampilan', 'Menganalisis data', 'Berinteraksi dengan orang'].map(x => (
                          <button key={x} className="px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 text-sm">{x}</button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30">Dapatkan Roadmap</button>
                      <button className="px-5 py-2.5 rounded-xl bg-white/10 ring-1 ring-white/20">Lihat Contoh</button>
                    </div>
                  </motion.div>
                )}
                {active === 'college' && (
                  <motion.div key="college" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Jurusan diminati" placeholder="Contoh: Informatika, Desain Komunikasi Visual" />
                      <Field label="Lokasi/kampus impian" placeholder="Contoh: UI, ITB, ITS, UGM" />
                      <Field label="Nilai rapor/IPK" type="number" placeholder="Contoh: 87 atau 3.6" />
                      <Field label="Prestasi/portofolio" placeholder="Contoh: lomba, karya, proyek" />
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30">Rekomendasi Kampus & Jurusan</button>
                      <button className="px-5 py-2.5 rounded-xl bg-white/10 ring-1 ring-white/20">AI Essay Helper</button>
                    </div>
                  </motion.div>
                )}
                {active === 'life' && (
                  <motion.div key="life" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Tujuan 6-12 bulan" placeholder="Contoh: dapet kerja remote, jago AI" />
                      <Field label="Waktu belajar per hari" placeholder="Contoh: 1-2 jam" />
                      <Field label="Keterbatasan/jadwal" placeholder="Contoh: kuliah, kerja paruh waktu" />
                      <Field label="Gaya belajar" placeholder="Contoh: video, baca, praktik" />
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30">Buat Jadwal Pintar</button>
                      <button className="px-5 py-2.5 rounded-xl bg-white/10 ring-1 ring-white/20">Lihat Template</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
