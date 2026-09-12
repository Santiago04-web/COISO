import React from 'react';
import { Shield, Heart, Scale, Users, ThumbsUp, Compass } from 'lucide-react';

export const Values: React.FC = () => {
  const valuesList = [
    {
      name: 'Responsabilidad',
      description: 'Actuación ética, transparente y rigurosa en el cumplimiento de los fines institucionales.',
      icon: Shield,
    },
    {
      name: 'Prevención',
      description: 'Cultura proactiva orientada a la anticipación y mitigación de riesgos en los entornos de trabajo.',
      icon: Compass,
    },
    {
      name: 'Bienestar',
      description: 'Priorización del ser humano y la calidad de vida en todas las iniciativas de la corporación.',
      icon: Heart,
    },
    {
      name: 'Respeto',
      description: 'Reconocimiento incondicional de la dignidad humana y los derechos fundamentales del trabajador.',
      icon: Scale,
    },
    {
      name: 'Compromiso',
      description: 'Dedicación continua a la mejora constante de la salud ocupacional y el desarrollo social.',
      icon: ThumbsUp,
    },
    {
      name: 'Participación',
      description: 'Construcción colectiva e incluyente mediante el diálogo social y el trabajo participativo.',
      icon: Users,
    },
  ];

  return (
    <section id="valores" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Principios Guía
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Valores Institucionales
          </p>
          <p className="text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Nuestra labor institucional se fundamenta en principios orientados al bienestar de los trabajadores y el desarrollo de las organizaciones.
          </p>
          <div className="w-16 h-1 bg-emerald-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesList.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.name}
                className="p-6 rounded-xl bg-emerald-50/40 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-md transition-all duration-200 group flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-emerald-800 text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {val.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
