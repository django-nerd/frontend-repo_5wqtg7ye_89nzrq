export default function Footer() {
  return (
    <footer className="relative text-white/70 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} AI Career Planner. Dibuat dengan rasa ingin tahu dan imajinasi.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#komunitas" className="hover:text-white">Komunitas</a>
            <a href="#" className="hover:text-white">Kebijakan</a>
            <a href="#" className="hover:text-white">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
