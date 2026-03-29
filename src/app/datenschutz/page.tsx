import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Datenschutzerklärung — KIHause",
  description:
    "Datenschutzerklärung der KIHause. Informationen zum Datenschutz nach DSGVO.",
  path: "/datenschutz",
});

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-slate-500 mb-10">Stand: März 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                1. Verantwortlicher
              </h2>
              <p className="text-slate-600 leading-relaxed">
                KIHause<br />
                Inhaber: Emad Almashhadani<br />
                Berlin, Deutschland<br />
                E-Mail:{" "}
                <a
                  href="mailto:hallo@kihause.de"
                  className="text-emerald-600 hover:text-emerald-500"
                >
                  hallo@kihause.de
                </a>
                <br />
                Telefon: +49 177 6525804
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                2. Übersicht der Verarbeitungen
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten
                Daten und die Zwecke ihrer Verarbeitung zusammen und verweist
                auf die betroffenen Personen.
              </p>
              <ul className="list-disc pl-6 text-slate-600 mt-3 space-y-1">
                <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                <li>Inhaltsdaten (z.B. Eingaben in Kontaktformularen)</li>
                <li>
                  Nutzungsdaten (z.B. besuchte Webseiten, Zugriffszeit)
                </li>
                <li>
                  Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                  IP-Adressen)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                3. Rechtsgrundlagen
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen
                der DSGVO, auf deren Basis wir personenbezogene Daten
                verarbeiten:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mt-3 space-y-1">
                <li>
                  <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong>{" "}
                  — Die betroffene Person hat ihre Einwilligung in die
                  Verarbeitung der sie betreffenden personenbezogenen Daten
                  gegeben.
                </li>
                <li>
                  <strong>
                    Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)
                  </strong>{" "}
                  — Die Verarbeitung ist für die Erfüllung eines Vertrags
                  erforderlich.
                </li>
                <li>
                  <strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)
                  </strong>{" "}
                  — Die Verarbeitung ist zur Wahrung unserer berechtigten
                  Interessen erforderlich.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                4. Hosting
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Unser Hosting-Anbieter erhebt in sog. Logfiles folgende Daten,
                die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der
                Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der
                Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website,
                von der die Anforderung kommt, und Informationen zu Browser und
                Betriebssystem.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Das ist erforderlich, um unsere Website anzuzeigen und die
                Stabilität und Sicherheit zu gewährleisten. Dies entspricht
                unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1
                lit. f DSGVO.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Wir setzen für die Zurverfügungstellung unserer Website
                folgenden Hoster ein:
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789, USA
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Es besteht ein Vertrag über Auftragsverarbeitung mit Vercel.
                Vercel ist unter dem EU-US Data Privacy Framework zertifiziert,
                was ein angemessenes Datenschutzniveau gewährleistet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                5. Kontaktaufnahme
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular,
                E-Mail, WhatsApp oder Telefon) werden die Angaben des Nutzers
                zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem.
                Art. 6 Abs. 1 lit. b DSGVO verarbeitet.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Ihre Angaben können in einem Customer-Relationship-Management
                System gespeichert werden. Die Daten werden gelöscht, sobald sie
                für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                erforderlich sind.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                6. Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Unsere Website verwendet ausschließlich technisch notwendige
                Cookies, die für den Betrieb der Seite erforderlich sind (z.B.
                Spracheinstellungen). Diese Cookies werden automatisch nach Ende
                der Browser-Sitzung gelöscht.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Wir verwenden keine Tracking-Cookies, Analytics-Dienste oder
                Werbe-Cookies. Es findet kein Profiling statt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                7. Ihre Rechte
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mt-3 space-y-1">
                <li>
                  <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)
                </li>
                <li>
                  <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)
                </li>
                <li>
                  <strong>Recht auf Löschung</strong> (Art. 17 DSGVO)
                </li>
                <li>
                  <strong>Recht auf Einschränkung der Verarbeitung</strong>{" "}
                  (Art. 18 DSGVO)
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20
                  DSGVO)
                </li>
                <li>
                  <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)
                </li>
                <li>
                  <strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7
                  Abs. 3 DSGVO)
                </li>
                <li>
                  <strong>Beschwerderecht bei einer Aufsichtsbehörde</strong>{" "}
                  (Art. 77 DSGVO) — Die zuständige Aufsichtsbehörde ist die
                  Berliner Beauftragte für Datenschutz und Informationsfreiheit.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                8. Externe Dienste
              </h2>
              <p className="text-slate-600 leading-relaxed">
                <strong>Google Fonts:</strong> Wir binden die Schriftarten von
                Google Fonts lokal ein. Es findet keine Verbindung zu
                Google-Servern statt.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                <strong>WhatsApp:</strong> Wenn Sie uns über WhatsApp
                kontaktieren, gelten die Datenschutzbestimmungen von WhatsApp
                (Meta Platforms Ireland Ltd.). Wir empfehlen, keine sensiblen
                Daten über WhatsApp zu senden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                9. Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                damit sie stets den aktuellen rechtlichen Anforderungen
                entspricht oder um Änderungen unserer Leistungen umzusetzen.
                Für Ihren erneuten Besuch gilt dann die neue
                Datenschutzerklärung.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
