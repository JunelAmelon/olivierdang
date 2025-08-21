'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo CLIQUABLE */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4 cursor-pointer group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-xl tracking-tight">O</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">D</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight tracking-tight font-architecture group-hover:text-[#fd733f] transition-colors duration-200">
                  Olivier <span className="text-[#fd733f]">DANG</span>
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium font-architecture group-hover:text-slate-600 transition-colors duration-200">
                  Expert Immobilier & Travaux
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-[#fd733f] font-semibold transition-colors duration-200 font-architecture">
              Accueil
            </Link>
            <Link href="/a-propos" className="text-slate-700 hover:text-[#fd733f] font-semibold transition-colors duration-200 font-architecture">
              À propos
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-[#fd733f] font-semibold transition-colors duration-200 font-architecture">
              Services
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-[#fd733f] font-semibold transition-colors duration-200 font-architecture">
              Contact
            </Link>
          </div>

          {/* Container pour bouton burger et estimation */}
          <div className="flex items-center space-x-4">
            {/* Menu Burger - Visible sur mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group"
              >
                <div className={`w-8 h-0.5 bg-slate-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-slate-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-4 h-0.5 bg-slate-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 w-8' : ''}`}></div>
              </button>
            </div>

            {/* Bouton Estimation - UNIQUEMENT sur desktop */}
            <Link
              href="/contact"
              className="hidden lg:block px-6 py-3 bg-gradient-to-r from-[#fd733f] to-[#e5652e] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 font-architecture"
            >
              Estimation gratuite
            </Link>
          </div>
        </div>

        {/* Menu Mobile - SANS bouton estimation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4 border-t border-slate-100">
            <Link
              href="/"
              className="block text-slate-700 hover:text-[#fd733f] font-semibold py-2 transition-colors duration-200 font-architecture"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className="block text-slate-700 hover:text-[#fd733f] font-semibold py-2 transition-colors duration-200 font-architecture"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/services"
              className="block text-slate-700 hover:text-[#fd733f] font-semibold py-2 transition-colors duration-200 font-architecture"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-slate-700 hover:text-[#fd733f] font-semibold py-2 transition-colors duration-200 font-architecture"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}