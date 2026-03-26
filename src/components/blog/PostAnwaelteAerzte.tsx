import InlineCTA from "./InlineCTA";

export default function PostAnwaelteAerzte() {
  const title = "KI für Anwälte und Ärzte — ohne Cloud";

  return (
    <>
      <p>
        Stellen Sie sich vor: Ein Anwalt in Charlottenburg kopiert einen Mandantenbrief in ChatGPT, um
        eine schnelle Zusammenfassung zu erhalten. In 30 Sekunden hat er sein Ergebnis. Was er nicht weiß:
        Er hat möglicherweise gerade <strong>§ 203 StGB verletzt</strong> — die Verletzung von Privatgeheimnissen.
      </p>

      <p>
        Das gleiche gilt für Ärzte, die Patientendaten in Cloud-KI eingeben. Für Notare, die
        Vertragsentwürfe analysieren lassen. Für HR-Manager, die Bewerbungsunterlagen zusammenfassen.
      </p>

      <p>
        <strong>Ihre Kollegen nutzen bereits KI. Aber die meisten tun es auf eine Weise, die rechtlich
        problematisch ist.</strong>
      </p>

      <h2>Das rechtliche Problem: § 203 StGB und Berufsgeheimnis</h2>

      <p>
        Für Berufsgeheimnisträger — Anwälte, Ärzte, Steuerberater, Notare — gelten besonders strenge
        Regeln beim Umgang mit vertraulichen Informationen:
      </p>

      <ul>
        <li><strong>§ 203 StGB</strong> — Wer unbefugt ein fremdes Geheimnis offenbart, das ihm als Anwalt,
        Arzt oder in ähnlicher Funktion anvertraut wurde, wird mit Freiheitsstrafe oder Geldstrafe bestraft</li>
        <li><strong>Ärztliche Schweigepflicht</strong> — Patientendaten dürfen unter keinen Umständen an
        Dritte weitergegeben werden, auch nicht an KI-Anbieter</li>
        <li><strong>Anwaltliche Verschwiegenheitspflicht (§ 43a BRAO)</strong> — Mandanteninformationen sind
        ausnahmslos vertraulich</li>
      </ul>

      <p>
        Wenn Sie vertrauliche Daten in ChatGPT, Claude.ai oder Gemini eingeben, werden diese an Server
        in den USA übermittelt. Sie verlassen damit den Schutzbereich Ihres Berufsgeheimnisses.
        Selbst wenn der Anbieter DSGVO-Compliance verspricht — <strong>das Berufsgeheimnis geht über die
        DSGVO hinaus</strong>.
      </p>

      <h2>Die Lösung: KI, die nie online geht</h2>

      <p>
        Unser <a href="/#pricing" className="text-primary-600 underline hover:text-primary-800">Paket C — Datenschutz Special</a> wurde
        speziell für Berufsgeheimnisträger entwickelt. Es bietet:
      </p>

      <ul>
        <li><strong>100% Offline-Betrieb</strong> — Das Gerät benötigt keine Internetverbindung. Null API-Aufrufe, null Datenverkehr nach außen</li>
        <li><strong>Lokales LLM</strong> — Llama 3 oder Mistral läuft vollständig auf Ihrem Mac mini mit 64 GB+ RAM</li>
        <li><strong>WhatsApp/Telegram Bridge</strong> — Fragen Sie Ihre KI wie einen Kollegen per Nachricht</li>
        <li><strong>Schriftliche Datenschutz-Erklärung</strong> — Für Ihre Compliance-Unterlagen und Ihren Datenschutzbeauftragten</li>
      </ul>

      <InlineCTA
        headline="Compliance-sichere KI für Ihre Kanzlei oder Praxis"
        text="Wir liefern eine schriftliche Datenschutz-Erklärung für Ihre Compliance-Unterlagen. 100% offline, 100% rechtskonform."
        packageInfo="Paket C — Datenschutz Special: €4.000–€5.000"
        urgency="Nur 3 Installationen pro Monat möglich — Kapazitäten sind begrenzt."
        postTitle={title}
      />

      <h2>Praxisbeispiel: Eine Kanzlei in Charlottenburg</h2>

      <p>
        Ein Anwalt für Wirtschaftsrecht wollte KI für die Analyse umfangreicher Vertragsdokumente nutzen.
        Cloud-basierte Lösungen kamen aufgrund der Mandantenvertraulichkeit nicht infrage. Innerhalb
        eines Nachmittags haben wir installiert:
      </p>

      <ol>
        <li>Mac mini M4 Pro mit 64 GB RAM als dediziertes KI-Gerät</li>
        <li>Llama 3.2 als lokales Sprachmodell — keine Internetverbindung erforderlich</li>
        <li>Telegram-Bot für schnelle Abfragen vom Handy</li>
        <li>Dokumenten-Analyse: PDFs hochladen, Zusammenfassungen erhalten — alles lokal</li>
      </ol>

      <p>
        Das Ergebnis: Der Anwalt spart 5–8 Stunden pro Woche bei der Dokumentenanalyse.
        Kein einziges Mandantengeheimnis hat das Büro verlassen. Seine Berufshaftpflichtversicherung
        hat keine Einwände.
      </p>

      <h2>Warum Ärzte besonders profitieren</h2>

      <p>
        Ärzte in Berlin stehen unter einem doppelten Druck: Mehr Patienten in weniger Zeit, aber keine
        Kompromisse bei der Schweigepflicht. Eine lokale KI kann:
      </p>

      <ul>
        <li>Arztbriefe und Befunde schneller formulieren</li>
        <li>Medizinische Fachliteratur zusammenfassen</li>
        <li>Abrechnungsformulare vorausfüllen</li>
        <li>Patientenanfragen per Vorlage beantworten</li>
      </ul>

      <p>
        All das geschieht auf einem Gerät in Ihrer Praxis. Die Daten sind zu keinem Zeitpunkt online.
      </p>

      <h2>Der EU AI Act und was er für Sie bedeutet</h2>

      <p>
        Seit 2025 ist der <strong>EU AI Act</strong> in Kraft. Für den Einsatz von KI in
        Arztpraxen und Kanzleien gelten besondere Transparenz- und Dokumentationspflichten.
        Mit einer lokalen Installation und unserer schriftlichen Datenschutz-Erklärung sind Sie
        auf der sicheren Seite.
      </p>

      <p>
        <strong>Warten Sie nicht, bis die Aufsichtsbehörde nachfragt.</strong> Handeln Sie jetzt — und
        nutzen Sie KI so, wie es Ihr Berufsrecht verlangt: <a href="/blog/warum-ki-in-berlin-selbst-hosten" className="text-primary-600 underline hover:text-primary-800">vollständig lokal, vollständig unter Ihrer Kontrolle</a>.
      </p>
    </>
  );
}
