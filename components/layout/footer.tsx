export function Footer() {
  return (
    <footer className="bg-ksw-blue-hover text-white/50 py-7 px-5 sm:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-4 text-xs">
        <span>© {new Date().getFullYear()} Klein & Schwarz-Wohlers Rechtsanwälte, Bremen</span>
        <div className="flex gap-4">
          <a href="/impressum" className="hover:text-white/80 transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-white/80 transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}