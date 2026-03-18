export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                SK
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SpreeKI
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              Ihre eigene KI — auf Ihrem Gerät, in Berlin. Keine Cloud. Keine
              Kompromisse. Premium Private AI Installation & Consulting.
            </p>
            <p className="text-sm">
              <a href="mailto:hallo@spreeki.de" className="text-primary-400 hover:text-primary-300 transition">
                hallo@spreeki.de
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition">Leistungen</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pakete & Preise</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">So funktioniert&apos;s</a></li>
              <li><a href="#privacy" className="hover:text-white transition">Datenschutz</a></li>
              <li><a href="#contact" className="hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="hover:text-white transition">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition">Datenschutzerklärung</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} SpreeKI. Berlin, Deutschland.</p>
          <p className="text-slate-500">
            Ihre Daten. Ihre Hardware. Ihre KI.
          </p>
        </div>
      </div>
    </footer>
  );
}
