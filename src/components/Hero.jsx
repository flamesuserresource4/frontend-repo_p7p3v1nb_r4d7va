import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-100">
      {/* Rising sun */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute left-1/2 top-24 -translate-x-1/2"
      >
        <div className="size-64 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 blur-[2px] shadow-inner" />
      </motion.div>

      {/* Distant mountains */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-32 left-0 right-0"
      >
        <svg viewBox="0 0 1440 320" className="w-full opacity-70 text-rose-200" aria-hidden>
          <path fill="currentColor" d="M0,224L60,186.7C120,149,240,75,360,74.7C480,75,600,149,720,165.3C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </motion.div>

      {/* Torii silhouette */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <svg width="220" height="160" viewBox="0 0 220 160" className="text-rose-700 drop-shadow-md" aria-label="Torii Gate">
          <g fill="currentColor">
            <rect x="10" y="20" width="200" height="14" rx="7"></rect>
            <rect x="30" y="34" width="160" height="8"></rect>
            <rect x="48" y="42" width="16" height="90"></rect>
            <rect x="156" y="42" width="16" height="90"></rect>
            <rect x="64" y="90" width="92" height="10"></rect>
          </g>
        </svg>
      </motion.div>

      {/* Foreground waves */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg viewBox="0 0 1440 320" className="w-full text-rose-300" aria-hidden>
          <path fill="currentColor" d="M0,64L60,90.7C120,117,240,171,360,181.3C480,192,600,160,720,165.3C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display text-4xl font-semibold tracking-tight text-rose-900 sm:text-6xl"
        >
          Old Japan, Reimagined
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-rose-800/80 sm:text-xl"
        >
          Journey through timeless shrines, tranquil gardens, and misty mountains. Hand-curated trips that blend heritage with quiet luxury.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#destinations"
            className="rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            Explore Destinations
          </a>
          <a
            href="#highlights"
            className="rounded-full border border-rose-300/80 bg-white/70 px-6 py-3 text-rose-700 backdrop-blur transition hover:bg-white"
          >
            Why Travel With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
