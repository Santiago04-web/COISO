import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, AlertCircle, Building2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      setErrorMsg('Por favor diligencie los campos obligatorios (Nombre, Correo y Mensaje).');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean frontend submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
    }, 800);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Canales de Atención
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Estamos para escucharte
          </p>
          <p className="text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Puedes comunicarte directamente con nosotros a través de nuestras líneas institucionales o dejarnos un mensaje.
          </p>
          <div className="w-16 h-1 bg-emerald-700 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200/90 relative overflow-hidden">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="p-3 bg-emerald-100/80 rounded-xl text-emerald-800">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-none">COISO</h3>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mt-1">
                    CORPORACION COLECTIVO INTERSINDICAL DE SALUD OCUPACIONAL
                  </p>
                </div>
              </div>

              {/* Exact Data Fields */}
              <div className="space-y-5 pt-6">
                
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 mt-0.5 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dirección</span>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">Carrera 48 59 52</p>
                    <p className="text-xs text-slate-600">Medellín, Antioquia, Colombia</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 mt-0.5 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Teléfono Institucional</span>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      <a href="tel:3044077818" className="hover:text-emerald-800 hover:underline">
                        3044077818
                      </a>
                    </p>
                  </div>
                </div>

                {/* Correo */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 mt-0.5 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Correo Electrónico</span>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      <a href="mailto:soporte@coiso.online" className="hover:text-emerald-800 hover:underline">
                        soporte@coiso.online
                      </a>
                    </p>
                  </div>
                </div>

                {/* Sitio Web */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 mt-0.5 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sitio Web Oficial</span>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      <a href="https://coiso.online" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 hover:underline">
                        https://coiso.online
                      </a>
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100">
                <a
                  href="tel:3044077818"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 text-white text-xs sm:text-sm font-bold hover:bg-emerald-900 transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar</span>
                </a>
                <a
                  href="mailto:soporte@coiso.online"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs sm:text-sm font-bold hover:bg-emerald-100 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Escribir</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200/90">
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Formulario de Contacto</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Envíanos tu consulta institucional y te responderemos a la brevedad posible.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center justify-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle className="w-12 h-12 text-emerald-700" />
                  <h4 className="text-lg font-bold text-emerald-950">¡Mensaje recibido con éxito!</h4>
                  <p className="text-sm text-emerald-800 max-w-md">
                    Gracias por comunicarte con COISO. Hemos recibido tus datos y nos pondremos en contacto pronto a través de soporte@coiso.online.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-lg hover:bg-emerald-900"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. María Gómez"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="correo" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Teléfono / Celular
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej. 3044077818"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe aquí tu consulta o mensaje..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all resize-y"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl shadow hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Tus datos personales están protegidos de acuerdo con la legislación colombiana de protección de datos.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
