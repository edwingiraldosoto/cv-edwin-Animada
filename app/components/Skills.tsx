'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Zap, Brain, GitBranch, Server, Workflow, BarChart3 } from 'lucide-react';
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

const iconMap = {
  'Lenguajes': Code2,
  'Backend': Code2,
  'Frontend': Database,
  'Bases de Datos': Database,
  'Integración y Datos': Workflow,
  'Automatización-IA': Brain,
  'Reportes': BarChart3,
  'Infraestructura': Server,
  'Metodologías': Workflow,
  'Dev/Procesos': GitBranch,
};

export function Skills() {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Stack tecnológico completo para desarrollo empresarial de alta performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {Object.entries(cv.skills).map(([category, data], i) => {
            const Icon = iconMap[category];
            const colorClass = {
              'blue': 'from-blue-50 to-transparent border-blue-200/50',
              'cyan': 'from-cyan-50 to-transparent border-cyan-200/50',
              'purple': 'from-purple-50 to-transparent border-purple-200/50',
              'amber': 'from-amber-50 to-transparent border-amber-200/50',
              'emerald': 'from-emerald-50 to-transparent border-emerald-200/50',
              'orange': 'from-orange-50 to-transparent border-orange-200/50',
              'green': 'from-green-50 to-transparent border-green-200/50',
            }[data.color] || 'from-blue-50 to-transparent border-blue-200/50';

            const iconColorClass = {
              'blue': 'text-blue-600',
              'cyan': 'text-cyan-600',
              'purple': 'text-purple-600',
              'amber': 'text-amber-600',
              'emerald': 'text-emerald-600',
              'orange': 'text-orange-600',
              'green': 'text-green-600',
            }[data.color] || 'text-blue-600';

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className={`bg-gradient-to-br ${colorClass} p-6 rounded-2xl border cursor-pointer transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} className={iconColorClass} />
                  <h3 className="text-lg font-semibold text-zinc-900">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill, j) => (
                    <motion.span
                      key={j}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
