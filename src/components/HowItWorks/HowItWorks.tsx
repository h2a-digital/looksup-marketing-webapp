'use client';

import { motion } from 'framer-motion';
import { how } from '@/content/how';

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-[#09090F] to-[#05050A] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-5xl">🎯</div>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">Four Simple Steps</h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-400">
            From selfie upload to a real improvement plan in less than a minute.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {how.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full rounded-3xl border border-white/8 bg-[#11111A] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="leading-relaxed text-zinc-400">{step.description}</p>
              </div>

              {/* Connection line (desktop only) */}
              {index < how.length - 1 && (
                <div className="absolute top-14 left-full -z-10 hidden h-0.5 w-full bg-white/10 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
