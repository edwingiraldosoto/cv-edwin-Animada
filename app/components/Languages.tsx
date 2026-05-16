'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { cv } from '@/data/cv';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
} as const;


export function Languages() {
  return (
    <section id="languages" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe size={28} className="text-blue-600" />
            <h2 className="text-3xl font-bold text-zinc-900">Idiomas</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {cv.languages.map((lang, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{lang.name}</h3>
                  <p className="text-sm text-slate-600">{lang.level}</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
