import React from 'react';
import { ShieldCheck, Heart, Sparkles, Activity, Users2 } from 'lucide-react';

export const Focus: React.FC = () => {
  const focusAreas = [
    {
      icon: ShieldCheck,
      title: 'Prevención',
      description:
        'Promoción activa de la cultura de prevención de riesgos y la adopción de prácticas de seguridad laboral continuas.',
    },
    {
      icon: Heart,
      title: 'Bienestar',
      description:
        'Fomento del bienestar integral y la salud laboral como pilares fundamentales para el desempeño y la calidad de vida.',
    },
    {
      icon: Sparkles,
      title: 'Trabajo digno',
      description:
        'Impulso de condiciones laborales justas, equitativas y orientadas al respeto constante de los derechos de las personas.',
    },
    {
      icon: Activity,
      title: 'Salud ocupacional',
      description:
        'Sensibilización y articulación técnica para la preservación física y mental de los trabajadores en sus entornos de trabajo.',
    },
    {
      icon: Users2,
      title: 'Diálogo social',
      description:
        'Facilitación de espacios de concertación, comunicación participativa y desarrollo colectivo entre organizaciones y trabajadores.',
    },
  ];

  return (
    <section id="enfoque" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Líneas de Acción
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestro Enfoque Institucional
          </p>
          <p className="text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Trabajamos con un compromiso integral alrededor de cinco ejes orientados al fortalecimiento de los espacios laborales.
          </p>
          <div className="w-16 h-1 bg-emerald-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* 5 Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-800">
                  <span>Pilar Institucional {index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
