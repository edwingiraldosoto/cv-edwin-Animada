'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Share2, MapPin, Download } from 'lucide-react';
import { cv } from '@/data/cv';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
} as const;

export function Hero() {
  return (
    <section className="bg-white pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Azul Pastel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 bg-gradient-to-b from-blue-100 to-blue-50 rounded-2xl p-6 h-fit lg:sticky lg:top-24"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Foto */}
              <div className="w-40 h-48 rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
                <img
                  src={cv.personal.profileImage}
                  alt={cv.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nombre y Título */}
              <div>
                <h1 className="text-2xl font-bold text-zinc-900">{cv.personal.name}</h1>
                <p className="text-sm text-slate-600 font-medium mt-1">{cv.personal.title}</p>
                <p className="text-xs text-slate-500">{cv.personal.specialization}</p>
              </div>

              {/* Ubicación */}
              <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                <span>{cv.personal.location}</span>
              </div>

              {/* Botones */}
              <div className="w-full space-y-2 pt-4 border-t border-blue-200">
                <a
                  href={cv.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-sm"
                >
                  <Share2 size={16} />
                  LinkedIn
                </a>
                <a
                  href={`https://wa.me/${cv.personal.phone.replace(/\D/g, '')}?text=Hola%20Edwin`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm"
                >
                  <Phone size={16} />
                  WhatsApp
                </a>
                <a
                  href="/CV_Edwin_Giraldo_Soto_ATS_Harvard.pdf"
                  download="CV_Edwin_Giraldo_Soto.pdf"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300 font-semibold text-sm"
                >
                  <Download size={16} />
                  Descargar CV
                </a>
              </div>

              {/* Contacto */}
              <div className="w-full pt-4 border-t border-blue-200 space-y-3 text-base">
                <div className="flex items-center gap-3 text-slate-900 font-medium">
                  <Phone size={18} className="text-blue-600 flex-shrink-0" />
                  <a href={`https://wa.me/${cv.personal.phone.replace(/\D/g, '')}`} className="hover:text-blue-600 transition font-semibold">
                    {cv.personal.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-slate-900 font-medium">
                  <Mail size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${cv.personal.email}`} className="hover:text-blue-600 transition font-semibold text-sm break-words">
                    {cv.personal.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contenido Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Presentación */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl font-bold text-zinc-900">Sobre mí</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {cv.about}
              </p>

              {/* Sectores */}
              <div className="flex flex-wrap gap-4 pt-4">
                {cv.sectors.map((sector) => (
                  <motion.div
                    key={sector.name}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-3 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-all duration-300 cursor-pointer text-center"
                  >
                    <div className="font-semibold text-sm">{sector.name}</div>
                    <div className="text-xs text-blue-600 mt-1">{sector.companies}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Disponibilidades */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-zinc-900">Disponibilidad</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cv.availability.map((tipo) => (
                  <div
                    key={tipo}
                    className="p-4 bg-gradient-to-br from-blue-50 to-transparent rounded-lg border border-blue-200 text-center font-semibold text-slate-700 hover:shadow-md transition-all"
                  >
                    {tipo}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contacto CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="mailto:edwingiraldosoto@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg font-semibold"
              >
                <Mail size={20} />
                Contactar por Email
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
