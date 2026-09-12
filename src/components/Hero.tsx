import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, ChevronRight, Building2 } from 'lucide-react';
import bannerImg from '../assets/banner.png';
import logoImg from '../assets/logo.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-900/5 via-slate-50 to-white">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-emerald-200/30 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold w-fit shadow-xs">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>Entidad Sin Ánimo de Lucro • Medellín, Colombia</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Promovemos entornos de trabajo{' '}
              <span className="text-emerald-800 bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                más seguros y saludables
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              COISO es una corporación sin ánimo de lucro enfocada en la promoción de la salud ocupacional, el bienestar y el desarrollo de los trabajadores y las organizaciones.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Conócenos</span>
                <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all duration-200"
              >
                <span>Contáctanos</span>
              </a>
            </div>

            {/* Key Verification Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100/60 text-emerald-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Salud Ocupacional</div>
                  <div className="text-sm font-bold text-slate-800">Prevención integral</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100/60 text-emerald-800">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Bienestar Social</div>
                  <div className="text-sm font-bold text-slate-800">Trabajo Digno</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-emerald-100/60 text-emerald-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Sede Principal</div>
                  <div className="text-sm font-bold text-slate-800">Medellín, Antioquia</div>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Graphic Banner Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Framing */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={bannerImg}
                  alt="COISO - Corporación Colectivo Intersindical de Salud Ocupacional"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/20">
                  <div className="flex items-center gap-3">
                    <img src={logoImg} alt="COISO Emblem" className="w-10 h-10 rounded-full border border-white/80 bg-white" />
                    <div>
                      <h3 className="text-sm font-bold leading-tight">CORPORACION COLECTIVO INTERSINDICAL DE SALUD OCUPACIONAL</h3>
                      <p className="text-xs text-emerald-200">NIT 900977417-5 • Medellín, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
