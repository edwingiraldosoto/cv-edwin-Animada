'use client';

import { motion } from 'framer-motion';
import { Mail, Share2 } from 'lucide-react';
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

export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              {cv.contact.heading}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {cv.contact.description}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              variants={itemVariants}
              href="mailto:edwingiraldosoto@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg font-semibold"
            >
              <Mail size={20} />
              Email
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.linkedin.com/in/edwingiraldosoto/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg font-semibold"
            >
              <Share2 size={20} />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-slate-200"
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Ubicación</h3>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4572949693803!2d-75.51013!3d6.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682d8e5b0e3b1%3A0x1234567890abcdef!2sEnvigado%2C%20Medell%C3%ADn!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <p className="text-sm text-slate-500 pt-6 border-t border-slate-200 mt-8">
            © {currentYear} Edwin Giraldo Soto. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
