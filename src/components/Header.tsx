import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Enfoque', href: '#enfoque' },
    { name: 'Valores', href: '#valores' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-emerald-900/10'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-700 rounded-lg p-1">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-800 shadow-sm transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <img
                src={logoImg}
                alt="COISO Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-emerald-950 leading-none">
                COISO
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 tracking-wider uppercase leading-tight max-w-[210px] sm:max-w-[280px] truncate">
                CORPORACION COLECTIVO INTERSINDICAL DE SALUD OCUPACIONAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-800 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-700 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm hover:shadow transition-all duration-200 group gap-2"
            >
              <span>Contáctanos</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            aria-label="Alternar menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:3044077818"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-emerald-800"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>3044077818</span>
              </a>
              <a
                href="mailto:soporte@coiso.online"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-emerald-800"
              >
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>soporte@coiso.online</span>
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
