import { motion } from 'framer-motion';

const spots = [
  {
    name: 'Kyoto Temples',
    blurb: 'Golden pavilions, zen gardens, and lantern-lit lanes.',
    tone: 'from-rose-200 to-rose-400'
  },
  {
    name: 'Nara Serenity',
    blurb: 'Ancient shrines and gentle deer roaming mossy paths.',
    tone: 'from-amber-200 to-rose-300'
  },
  {
    name: 'Hakone Onsen',
    blurb: 'Relax in steaming baths beneath misty mountain views.',
    tone: 'from-rose-200 to-amber-300'
  },
  {
    name: 'Kanazawa Districts',
    blurb: 'Tea houses, artisans, and preserved samurai streets.',
    tone: 'from-rose-300 to-rose-500'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-rose-900 sm:text-4xl">Timeless Places</h2>
          <p className="mt-3 text-rose-800/80">Signature routes through heritage towns and nature escapes.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spots.map((s, i) => (
            <motion.a
              key={s.name}
              href="#"
              className="group relative block overflow-hidden rounded-2xl border border-rose-200/60 bg-white shadow-sm"
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className={`h-40 w-full bg-gradient-to-br ${s.tone}`} />
              <div className="p-5">
                <h3 className="font-semibold text-rose-900">{s.name}</h3>
                <p className="mt-1 text-sm text-rose-800/80">{s.blurb}</p>
                <div className="mt-4 text-sm font-medium text-rose-700 opacity-0 transition-opacity group-hover:opacity-100">
                  View sample itinerary →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
