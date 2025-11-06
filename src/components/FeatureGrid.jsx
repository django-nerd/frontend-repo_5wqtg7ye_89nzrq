import { motion } from 'framer-motion';
import { Sparkles, Briefcase, GraduationCap, Zap } from 'lucide-react';

const features = [
  {
    title: 'Career Plan',
    icon: Briefcase,
    desc:
      'Temukan pekerjaan ideal berdasarkan minat, kepribadian, dan skill. Termasuk kuis mini dan roadmap langkah demi langkah.',
  },
  {
    title: 'College Plan',
    icon: GraduationCap,
    desc:
      'Rekomendasi jurusan, kampus, serta bantuan AI untuk menulis esai yang berkelas.',
  },
  {
    title: 'Life Path & Skill Growth',
    icon: Zap,
    desc:
      'Gabungkan rute kerja, studi, dan pembelajaran dengan jadwal pintar hasil rekomendasi AI.',
  },
  {
    title: 'AI Mentor & Portfolio',
    icon: Sparkles,
    desc:
      'Bangun profil digital otomatis, ngobrol dengan mentor AI yang imut, dan pamerkan progresmu.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="fitur" className="relative py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Fitur Utama</h2>
          <p className="mt-3 text-white/70">
            Nuansa futuristik, elegan, dan playful — terinspirasi dari UI Genshin Impact.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-5 bg-white/5 ring-1 ring-white/15 backdrop-blur hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl group-hover:blur-[64px] transition pointer-events-none" />
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/10 ring-1 ring-white/20">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
