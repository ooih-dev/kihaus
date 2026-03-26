import InlineCTA from "./InlineCTA";

export default function PostMacMiniSetup() {
  const title = "Mac mini als private KI-Zentrale einrichten";

  return (
    <>
      <p>
        Der Apple Mac mini mit M4 Pro Chip ist ein kleines Kraftpaket. Kompakt genug für jedes Büro,
        leistungsstark genug für lokale KI-Modelle mit Milliarden von Parametern. Aber zwischen
        &ldquo;Gerät auspacken&rdquo; und &ldquo;KI per WhatsApp befragen&rdquo; liegt ein Weg, den die meisten unterschätzen.
      </p>

      <p>
        In diesem Artikel zeige ich Ihnen, was Sie brauchen, wie der Prozess aussieht — und wo
        die meisten DIY-Versuche scheitern.
      </p>

      <h2>Die richtige Hardware wählen</h2>

      <p>
        Nicht jeder Mac mini ist für lokale KI geeignet. Die entscheidende Ressource ist der
        <strong> Arbeitsspeicher (RAM)</strong>, da Apple Silicon den RAM als Unified Memory für
        CPU und GPU nutzt. KI-Modelle werden komplett im RAM gehalten.
      </p>

      <table className="w-full my-6 text-sm border border-slate-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-50">
          <tr>
            <th className="text-left p-3 font-semibold text-slate-700">Konfiguration</th>
            <th className="text-left p-3 font-semibold text-slate-700">Geeignet für</th>
            <th className="text-left p-3 font-semibold text-slate-700">Modellgröße</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="p-3 text-slate-600">M4, 16 GB RAM</td>
            <td className="p-3 text-slate-600">Einfache Aufgaben, kleine Modelle</td>
            <td className="p-3 text-slate-600">bis 7B Parameter</td>
          </tr>
          <tr>
            <td className="p-3 text-slate-600">M4 Pro, 24 GB RAM</td>
            <td className="p-3 text-slate-600">Solide Allround-KI</td>
            <td className="p-3 text-slate-600">bis 13B Parameter</td>
          </tr>
          <tr className="bg-primary-50/50">
            <td className="p-3 text-slate-900 font-medium">M4 Pro, 48 GB RAM *</td>
            <td className="p-3 text-slate-900">Professionelle Nutzung</td>
            <td className="p-3 text-slate-900">bis 34B Parameter</td>
          </tr>
          <tr>
            <td className="p-3 text-slate-600">M4 Max, 64 GB+ RAM</td>
            <td className="p-3 text-slate-600">Maximale Leistung, große Modelle</td>
            <td className="p-3 text-slate-600">bis 70B+ Parameter</td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm text-slate-500 italic">
        * Unsere Empfehlung für die meisten Anwendungsfälle. Bestes Preis-Leistungs-Verhältnis.
      </p>

      <h2>Software-Stack: Was wird installiert?</h2>

      <p>
        Ein komplettes lokales KI-System besteht aus mehreren Komponenten:
      </p>

      <ul>
        <li><strong>Ollama</strong> — Der KI-Runtime, der Modelle effizient auf Apple Silicon ausführt</li>
        <li><strong>Sprachmodell</strong> — Llama 3.2, Mistral, Qwen 2.5 oder ähnliche Open-Source-Modelle</li>
        <li><strong>Gateway/API</strong> — Verbindet die KI mit Ihren Messaging-Apps</li>
        <li><strong>WhatsApp/Telegram Bridge</strong> — Damit Sie per Nachricht mit Ihrer KI kommunizieren</li>
        <li><strong>Tailscale</strong> — Sicherer Fernzugriff von überall, ohne Ports zu öffnen</li>
        <li><strong>Skills & Automatisierungen</strong> — Web-Suche, Kalender, E-Mail-Entwurf, etc.</li>
      </ul>

      <h2>Der einfache Teil: Ollama installieren</h2>

      <p>
        Ollama selbst ist schnell installiert. Terminal öffnen, einen Befehl eingeben, Modell
        herunterladen — fertig. In 15 Minuten haben Sie eine KI, die auf Ihrem Mac läuft und im
        Terminal antwortet.
      </p>

      <p>
        Wenn das alles wäre, bräuchten Sie uns nicht.
      </p>

      <h2>Der schwierige Teil: Alles andere</h2>

      <p>
        Hier beginnt die eigentliche Arbeit — und hier scheitern die meisten DIY-Versuche:
      </p>

      <ul>
        <li><strong>Modell-Auswahl & Feinabstimmung</strong> — Welches Modell für welchen Zweck?
        Ein Coding-Modell antwortet schlecht auf Alltagsfragen. Ein Chat-Modell kann keinen Code.</li>
        <li><strong>WhatsApp Bridge</strong> — Die Verbindung zwischen WhatsApp Business und Ihrem
        lokalen Modell ist technisch anspruchsvoll und schlecht dokumentiert</li>
        <li><strong>Persistenz</strong> — Ihre KI muss nach einem Neustart automatisch starten,
        Gespräche speichern und den Kontext behalten</li>
        <li><strong>Sicherheit</strong> — Port-Konfiguration, Firewall-Regeln, sicherer Fernzugriff
        ohne Ihr Gerät dem Internet auszusetzen</li>
        <li><strong>Performance-Optimierung</strong> — Kontextlänge, Quantisierung, GPU-Layer-Konfiguration
        für maximale Geschwindigkeit</li>
        <li><strong>Updates & Wartung</strong> — Modelle aktualisieren, Sicherheitspatches, Backup-Strategien</li>
      </ul>

      <InlineCTA
        headline="Keine Lust auf Konfiguration?"
        text="Wir machen das für Sie — in 3 Stunden, vor Ort in Berlin. Sie bekommen ein fertig konfiguriertes System und eine persönliche Einweisung."
        packageInfo="Paket A — Berlin Basics: ab €1.500"
        postTitle={title}
      />

      <h2>Zeit vs. Geld: Die ehrliche Rechnung</h2>

      <p>
        Seien wir ehrlich: Wenn Sie technisch versiert sind, <em>können</em> Sie das alles selbst machen.
        Die Frage ist, ob Sie es <em>sollten</em>.
      </p>

      <table className="w-full my-6 text-sm border border-slate-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-50">
          <tr>
            <th className="text-left p-3 font-semibold text-slate-700">Ansatz</th>
            <th className="text-left p-3 font-semibold text-slate-700">Zeitaufwand</th>
            <th className="text-left p-3 font-semibold text-slate-700">Ergebnis</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="p-3 text-slate-600">DIY (alles selbst)</td>
            <td className="p-3 text-slate-600">15–25 Stunden</td>
            <td className="p-3 text-slate-600">Funktioniert, aber fragil</td>
          </tr>
          <tr className="bg-primary-50/50">
            <td className="p-3 text-slate-900 font-medium">KIHause Installation</td>
            <td className="p-3 text-slate-900 font-medium">3–4 Stunden (für Sie: 1h Einweisung)</td>
            <td className="p-3 text-slate-900 font-medium">Produktionsreif, dokumentiert, gewartet</td>
          </tr>
        </tbody>
      </table>

      <p>
        Wenn Ihre Zeit mehr als €60/Stunde wert ist, spart Ihnen eine professionelle Installation Geld.
        Und Sie haben die Gewissheit, dass alles korrekt konfiguriert ist — Sicherheit, Datenschutz
        und Performance inklusive.
      </p>

      <h2>Welches Paket passt zu Ihnen?</h2>

      <ul>
        <li><strong><a href="/#pricing" className="text-primary-600 underline">Paket D — Bring Your Own Device (ab €300)</a></strong> — Sie haben bereits einen Mac mit genug RAM und wollen nur die Basis-Installation</li>
        <li><strong><a href="/#pricing" className="text-primary-600 underline">Paket A — Berlin Basics (€1.500–€2.000)</a></strong> — Komplett-Setup mit Hardware-Beratung, WhatsApp-Bot und Einweisung</li>
        <li><strong><a href="/#pricing" className="text-primary-600 underline">Paket B — Business Brains (€3.500–€4.000)</a></strong> — Für Teams mit Slack-Integration und Workflow-Automatisierung</li>
        <li>Für <a href="/blog/ki-fuer-anwaelte-und-aerzte" className="text-primary-600 underline">Anwälte, Ärzte und andere Berufsgeheimnisträger</a>: <strong><a href="/#pricing" className="text-primary-600 underline">Paket C — Datenschutz Special</a></strong></li>
      </ul>

      <p>
        Egal für welchen Weg Sie sich entscheiden: Ein Mac mini mit dem richtigen Setup ist die
        beste <a href="/blog/warum-ki-in-berlin-selbst-hosten" className="text-primary-600 underline">lokale KI-Lösung</a>,
        die es derzeit gibt. Kompakt, leise, leistungsstark — und Ihre Daten bleiben genau da, wo sie hingehören: bei Ihnen.
      </p>
    </>
  );
}
