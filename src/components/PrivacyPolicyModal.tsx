import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <div>
              <h3 className="text-lg font-bold">Política de Tratamiento de Datos Personales</h3>
              <p className="text-xs text-emerald-300">Ley 1581 de 2012 (Habeas Data) • COISO</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-950 font-medium">
            <strong>Identificación del Responsable:</strong> CORPORACION COLECTIVO INTERSINDICAL DE SALUD OCUPACIONAL (COISO), con NIT 900977417-5, domiciliada en la Carrera 48 59 52, Medellín, Antioquia, Colombia. Correo de contacto: soporte@coiso.online.
          </div>

          <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Objetivo</h4>
          <p>
            La presente política establece las directrices para la recolección, almacenamiento, uso y protección de los datos personales suministrados por los usuarios a través del sitio web oficial <strong>coiso.online</strong>, garantizando el derecho al Habeas Data conforme a la legislación colombiana vigente.
          </p>

          <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. Finalidad del Tratamiento</h4>
          <p>
            Los datos personales recolectados mediante el formulario de contacto (Nombre, Correo Electrónico, Teléfono) se utilizarán exclusivamente para responder consultas institucionales, brindar información relativa a la entidad sin ánimo de lucro y mantener comunicación directa con los usuarios interesados.
          </p>

          <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. Derechos de los Titulares</h4>
          <p>
            De conformidad con el artículo 8 de la Ley 1581 de 2012, los titulares de los datos tienen derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento.
          </p>

          <h4 className="font-bold text-slate-900 text-sm sm:text-base">4. Canal para Ejercicio de Derechos</h4>
          <p>
            Para ejercer sus derechos de consulta, reclamo o supresión de datos, los titulares pueden remitir una solicitud formal al correo electrónico oficial: <a href="mailto:soporte@coiso.online" className="text-emerald-800 underline font-semibold">soporte@coiso.online</a> o a la dirección física Carrera 48 59 52, Medellín, Antioquia, Colombia.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
