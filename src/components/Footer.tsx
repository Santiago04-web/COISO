import React from 'react';
import { MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-4 border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Legal Brand & Description (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="COISO Logo"
                className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-white object-cover"
              />
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight">COISO</span>
                <p className="text-[10px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-wider leading-tight">
                  CORPORACION COLECTIVO INTERSINDICAL DE SALUD OCUPACIONAL
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              Entidad sin ánimo de lucro orientada a la promoción de la salud ocupacional, el bienestar y el desarrollo de los trabajadores y las organizaciones.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NIT: 900977417-5</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-emerald-400 transition-colors">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#enfoque" className="hover:text-emerald-400 transition-colors">
                  Nuestro Enfoque
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-emerald-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-emerald-400 transition-colors text-left font-medium cursor-pointer"
                >
                  Política de privacidad
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Prominent Camera of Commerce Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Datos de Registro Legal
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-slate-200">Carrera 48 59 52</span>
                  <p className="text-slate-400 text-xs">Medellín, Antioquia, Colombia</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:3044077818" className="hover:text-emerald-400 transition-colors font-medium">
                  3044077818
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:soporte@coiso.online" className="hover:text-emerald-400 transition-colors font-medium">
                  soporte@coiso.online
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://coiso.online" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-mono">
                  coiso.online
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Credit Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 COISO. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Razón Social: CORPORACION COLECTIVO INTERSINDICAL DE SALUD OCUPACIONAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
