import { Star, MapPin, Calendar, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Plane,
    title: 'Seamless Journey',
    desc: 'From flights to ryokan stays, every detail is tailored and taken care of.'
  },
  {
    icon: MapPin,
    title: 'Local Secrets',
    desc: 'Private access to quiet temples, tea ceremonies, and artisan workshops.'
  },
  {
    icon: Calendar,
    title: 'Perfect Timing',
    desc: 'Cherry blossoms, autumn koyo, winter onsen—curated by season for peak beauty.'
  },
  {
    icon: Star,
    title: 'Trusted Excellence',
    desc: 'Five-star reviews from travelers seeking culture, calm, and craftsmanship.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-rose-900 sm:text-4xl">Travel, Thoughtfully</h2>
        <p className="mt-3 text-rose-800/80">We design unhurried experiences that honor tradition and indulge the senses.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="rounded-2xl border border-rose-200/60 bg-white/70 p-6 shadow-sm backdrop-blur hover:shadow-md"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
              <Icon className="size-6" />
            </div>
            <h3 className="mt-4 font-semibold text-rose-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-rose-800/80">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
