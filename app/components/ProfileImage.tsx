'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from 'lucide-react';
import { useState } from 'react';

export function ProfileImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="flex justify-center lg:justify-end"
    >
      <div className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
        <Image
          src="/profile.jpg"
          alt="Edwin Giraldo Soto"
          fill
          sizes="(max-width: 768px) 240px, 256px"
          className="object-cover"
          priority
          onLoad={() => setImageLoaded(true)}
        />

        {/* Placeholder if image doesn't load */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-100">
            <div className="flex flex-col items-center justify-center gap-2 opacity-50">
              <User size={64} className="text-blue-400" />
              <p className="text-sm text-slate-500 text-center px-4">
                Cargando foto...
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
