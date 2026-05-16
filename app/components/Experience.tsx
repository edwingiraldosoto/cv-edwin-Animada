'use client';

import { motion } from 'framer-motion';
import { Zap, Code, Briefcase, Users, TrendingUp, ShieldCheck } from 'lucide-react'
import { cv } from '@/data/cv';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Code: Code,
  Briefcase: Briefcase,
  Users: Users,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
} as const;


export function Experience() {
  return (
    <section id="experience" className="py-8 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Trayectoria en soluciones empresariales para sectores críticos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-orange-500 hidden md:block" />

          <div className="space-y-8">
            {cv.experience.map((exp, i) => {
              const IconComponent = iconMap[exp.icon];
              return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-2 w-16 h-16 ${exp.bgColor} rounded-full flex items-center justify-center shadow-lg hidden md:flex`}>
                  <IconComponent size={24} className="text-white" />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="md:ml-32 bg-white p-6 rounded-xl border border-slate-200/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">{exp.title}</h3>
                      <p className="text-base text-blue-600 font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-block text-sm text-white bg-slate-400 px-3 py-1 rounded-full mb-3">
                    {exp.period}
                  </span>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
