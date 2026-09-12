import React from 'react';
import { Building, CheckCircle2, FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Identidad Institucional
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quiénes somos
          </p>
          <div className="w-16 h-1 bg-emerald-700 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Description Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-100 shadow-sm relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-emerald-800 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                Reseña Oficial
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2">
                <strong className="font-semibold text-emerald-950">COISO</strong>, Corporación Colectivo Intersindical de Salud Ocupacional, es una entidad sin ánimo de lucro con sede en Medellín, orientada a la promoción de la salud ocupacional, el bienestar y el desarrollo de los trabajadores y las organizaciones.
              </p>
            </div>

            {/* Institutional Integrity Bullet Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700">
                  Entidad legalmente constituida en Colombia como organización sin ánimo de lucro.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700">
                  Enfocada en el fomento de la prevención y la seguridad integral en los entornos laborales.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700">
                  Comprometida con el trabajo digno, el desarrollo humano y el diálogo social constructivo.
                </span>
              </div>
            </div>
          </div>

          {/* Official Camera of Commerce Card Column */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-slate-900 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-800/40">
              
              {/* Decorative Watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <img src={logoImg} alt="COISO Watermark" className="w-64 h-64 rounded-full" />
              </div>

              <div className="flex items-center justify-between pb-6 border-b border-emerald-800/60 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-800/80 rounded-xl text-emerald-300">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">Ficha Registro Oficial</h3>
                    <p className="text-lg font-bold text-white">Datos Institucionales</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/30">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Verificable</span>
                </div>
              </div>

              {/* Grid of Verified Data */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Razón Social Legal</span>
                  <p className="text-sm sm:text-base font-bold text-white tracking-wide mt-0.5">
                    CORPORACION COLECTIVO INTERSINDICAL DE SALUD OCUPACIONAL
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Sigla</span>
                    <p className="text-base font-bold text-white mt-0.5">COISO</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">NIT Oficial</span>
                    <p className="text-base font-bold text-emerald-400 font-mono mt-0.5">900977417-5</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Tipo de Entidad</span>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">Entidad Sin Ánimo de Lucro</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Ciudad / Sede</span>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">Medellín, Antioquia, Colombia</p>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="mt-6 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-300/80">
                <span>Cámara de Comercio de Medellín</span>
                <span>Dominio: coiso.online</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
