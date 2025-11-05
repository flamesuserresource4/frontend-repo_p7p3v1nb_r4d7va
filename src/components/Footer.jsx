export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-rose-100 to-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-display text-xl font-semibold text-rose-900">Yūgen Travel</p>
            <p className="text-sm text-rose-800/80">Curators of quiet, beautiful journeys across Japan.</p>
          </div>
          <div className="text-sm text-rose-800/70">
            © {new Date().getFullYear()} Yūgen Travel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
