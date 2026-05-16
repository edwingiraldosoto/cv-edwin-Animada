'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Badge } from 'lucide-react';
import { cv } from '@/data/cv';

const iconMap = {
  'GraduationCap': GraduationCap,
  'BookOpen': BookOpen,
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

// Función para ordenar cursos por año descendente
const getSortedCourses = () => {
  return [...cv.courses].sort((a, b) => (b.year || 0) - (a.year || 0));
};

const sortedCourses = getSortedCourses();

export function Education() {
  return (
    <section id="education" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Educación y Certificaciones
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Formación académica y certificaciones profesionales en tecnología y gestión.
          </p>
        </motion.div>

        {/* Grados Academicos Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-10"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 hidden md:block" />

          <div className="space-y-8">
            {cv.degrees.map((edu, i) => {
              const IconComponent = iconMap[edu.icon];
              return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-2 w-16 h-16 ${edu.bgColor} rounded-full flex items-center justify-center shadow-lg hidden md:flex`}>
                  <IconComponent size={24} className="text-white" />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="md:ml-32 bg-gradient-to-br from-slate-50 to-transparent p-6 rounded-xl border border-slate-200/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">{edu.title}</h3>
                      <p className="text-base text-blue-600 font-medium mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="inline-block text-sm text-white bg-slate-400 px-3 py-1 rounded-full mb-3">
                    {edu.period}
                  </span>
                  <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                </motion.div>
              </motion.div>
            );
            })}
          </div>
        </motion.div>

        {/* Certificaciones Profesionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6 flex items-center gap-3">
            <Badge size={28} className="text-emerald-600" />
            Certificaciones Profesionales
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {cv.certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -2, boxShadow: "0 10px 20px -10px rgba(16, 185, 129, 0.2)" }}
                className="bg-gradient-to-br from-emerald-50 to-transparent p-5 rounded-lg border border-emerald-200/50 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <Badge size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900">{cert.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-3 gap-2">
                      <span className="text-xs text-slate-500">{cert.date}</span>
                      <span className="inline-block text-xs bg-white border border-emerald-300 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Estudios y Cursos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6 flex items-center gap-3">
            <BookOpen size={28} className="text-purple-600" />
            Estudios y Cursos
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {sortedCourses.map((course, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -2, boxShadow: "0 10px 20px -10px rgba(147, 51, 234, 0.2)" }}
                className="bg-gradient-to-br from-purple-50 to-transparent p-4 rounded-lg border border-purple-200/50 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <BookOpen size={18} className="text-purple-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-zinc-900 text-sm leading-tight">{course.title}</h4>
                    <p className="text-xs text-slate-600 mt-2">{course.issuer}</p>
                    <div className="flex items-center justify-between mt-3 gap-2 flex-wrap">
                      <span className="text-xs text-slate-500">{course.date}</span>
                      <span className="inline-block text-xs bg-white border border-purple-300 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                        {course.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
