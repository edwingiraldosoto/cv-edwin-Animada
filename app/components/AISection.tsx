'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Workflow } from 'lucide-react';
import { cv } from '@/data/cv';

const iconMap = {
  'Brain': Brain,
  'Workflow': Workflow,
};

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
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
} as const;


export function AISection() {
  return (
    <section id="ia" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Brain size={24} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              {cv.aiSection.title}
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mb-2">
            {cv.aiSection.description}
          </p>
          <p className="text-base text-blue-600 font-semibold">
            {cv.aiSection.studying}
          </p>
          <div className="space-y-2 text-sm text-slate-700 pt-2">
            {cv.aiSection.programs.map((program, i) => (
              <p key={i}>
                {program.emoji} {program.text} - <span className="font-semibold">{program.highlight}</span>{program.detail && ` ${program.detail}`}
              </p>
            ))}
          </div>
        </motion.div>

        {/* AI Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {cv.ai.map((cap, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-50 to-transparent p-8 rounded-2xl border border-slate-200/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="pt-1">
                  {cap.icon === 'Brain' ? (
                    <Brain size={28} className="text-purple-600" />
                  ) : (
                    <Workflow size={28} className="text-blue-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{cap.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{cap.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="inline-flex px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
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
