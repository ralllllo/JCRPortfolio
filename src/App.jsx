import { Outlet, Link } from 'react-router-dom';
import { Menu, ArrowUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Neo-Brutalist Header */}
      <header className="sticky top-0 z-50 bg-[#1e293b] brutal-border border-l-0 border-r-0 border-t-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-black tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="bg-[#f8fafc] text-[#020617] px-3 py-1 -rotate-3 brutal-border brutal-shadow-sm">JCR</div>
            <span className="uppercase tracking-widest text-lg hidden sm:inline text-[#f8fafc]">Portfolio</span>
          </Link>
          
          <nav className="hidden md:flex gap-8 font-bold text-[#f8fafc]">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:bg-[#bef264] hover:text-[#020617] px-2 transition-colors cursor-pointer">ABOUT</a>
            <a href="#skills" className="hover:bg-[#38bdf8] hover:text-[#020617] px-2 transition-colors">SKILLS</a>
            <a href="#projects" className="hover:bg-[#f472b6] hover:text-[#020617] px-2 transition-colors">PROJECTS</a>
          </nav>
        
          
          <button className="md:hidden text-[#f8fafc]">
             <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f472b6] text-[#020617] brutal-border border-l-0 border-r-0 border-b-0 mt-16 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-bold tracking-wide">
            &copy; 2026. Jeong Chae Rim.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ralllllo" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] text-[#020617] p-3 brutal-border brutal-shadow hover-brutal transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a href="#top" className="fixed bottom-8 right-8 bg-[#bef264] text-[#020617] p-3 rounded-full brutal-border brutal-shadow hover-brutal transition-transform z-50 flex items-center justify-center">
        <ArrowUp size={24} strokeWidth={3} />
      </a>
    </div>
  );
}

export default App;
