'use client';

import { motion } from 'framer-motion';
import { User, Phone, Briefcase, Building2 } from 'lucide-react';
import { cv } from '@/data/cv';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function References() {
  return (
    <section id="references" className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              Referencias Profesionales
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">
            Profesionales que pueden avalar mi experiencia y competencias técnicas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {cv.references.map((ref, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl border border-slate-200/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900">{ref.name}</h3>

                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase size={16} className="text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{ref.role}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Building2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{ref.company}</span>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Phone size={16} className="text-blue-600 flex-shrink-0" />
                      <a
                        href={`https://wa.me/${ref.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {ref.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
