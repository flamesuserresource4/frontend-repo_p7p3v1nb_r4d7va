import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-rose-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-xl font-semibold tracking-tight">Yūgen Travel</a>
          <nav className="hidden gap-6 text-sm text-rose-800/80 sm:flex">
            <a href="#destinations" className="hover:text-rose-900">Destinations</a>
            <a href="#highlights" className="hover:text-rose-900">Highlights</a>
            <a href="#contact" className="hover:text-rose-900">Contact</a>
          </nav>
          <a
            href="#destinations"
            className="rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-rose-600/30 transition hover:bg-rose-700"
          >
            Start Planning
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Highlights />
        <Destinations />

        {/* Simple contact strip */}
        <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-20">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 p-8 text-center shadow-sm">
            <h3 className="font-display text-2xl font-semibold">Ready to discover Old Japan?</h3>
            <p className="mt-2 text-rose-800/80">Tell us your dates and dreams. We will craft something quietly unforgettable.</p>
            <form className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-rose-300/70 bg-white px-4 py-3 text-sm text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
                aria-label="Name"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-rose-300/70 bg-white px-4 py-3 text-sm text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
                aria-label="Email"
              />
              <button
                type="button"
                className="rounded-lg bg-rose-600 px-4 py-3 text-sm font-medium text-white shadow-sm shadow-rose-600/30 transition hover:bg-rose-700"
              >
                Request Itinerary
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
