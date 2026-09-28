export default function Footer({ onOpenPage }) {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © 2025. Crafted with  ❣️  by{' '}
          <span className="gradient-text font-medium">Kode-Jo</span>.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
          <button
            type="button"
            onClick={() => onOpenPage?.('terms')}
            className="transition hover:text-white"
          >
            Terms
          </button>
          <button
            type="button"
            onClick={() => onOpenPage?.('privacy')}
            className="transition hover:text-white"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  )
}
