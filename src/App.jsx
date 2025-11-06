import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import PlannerTabs from './components/PlannerTabs';
import Footer from './components/Footer';

function Background() {
  return (
    <div className="fixed inset-0 -z-0 bg-[#0B1020]">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage:
          'radial-gradient(1000px 400px at top left, rgba(59,130,246,0.25), transparent), radial-gradient(600px 300px at bottom right, rgba(234,179,8,0.15), transparent)'
      }} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3CradialGradient id=\'g\' cx=\'50%25\' cy=\'50%25\' r=\'0.5\'%3E%3Cstop stop-color=\'%23ffffff\' stop-opacity=\'0.08\'/%3E%3Cstop offset=\'1\' stop-color=\'%23000000\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g)\'/%3E%3C/svg%3E')]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans text-white antialiased relative">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <FeatureGrid />
        <PlannerTabs />
        <section id="komunitas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/15 backdrop-blur">
            <h3 className="text-2xl font-semibold">Community Showcase</h3>
            <p className="mt-2 text-white/70">Segera hadir: pamer karya, portofolio, dan pencapaianmu. Dapatkan badge dan naik level saat progresmu bertambah!</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="aspect-video rounded-xl bg-white/5 ring-1 ring-white/10" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
