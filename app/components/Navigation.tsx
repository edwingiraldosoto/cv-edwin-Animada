'use client';

import { motion } from 'framer-motion';
import { cv } from '@/data/cv';

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-base sm:text-xl font-bold text-zinc-900 whitespace-nowrap flex-shrink-0"
          >
            {cv.personal.name}
          </motion.div>
          <motion.div className="flex flex-wrap gap-2 justify-start lg:justify-end">
            {cv.navigation.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 hover:shadow-md"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
