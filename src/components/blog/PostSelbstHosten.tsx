import InlineCTA from "./InlineCTA";

export default function PostSelbstHosten() {
  const title = "Warum ich meine KI in Berlin selbst hoste";

  return (
    <>
      <p>
        Ich habe es monatelang getan, ohne darüber nachzudenken: Mandanteninformationen, Geschäftsideen,
        persönliche Notizen — alles in ChatGPT getippt. Erst als ein Kollege mir die
        <strong> Nutzungsbedingungen</strong> zeigte, wurde mir klar: Jede Eingabe wird auf Servern in den USA
        gespeichert und kann für Trainingszwecke verwendet werden.
      </p>

      <p>
        Für mich als Berliner Professional war das ein Wendepunkt. In einer Stadt, in der Datenschutz nicht
        nur ein Gesetz ist, sondern eine Haltung, konnte ich das nicht mehr ignorieren.
      </p>

      <h2>Das Problem mit Cloud-KI</h2>

      <p>
        Wenn Sie ChatGPT, Claude.ai oder Google Gemini nutzen, passiert Folgendes mit Ihren Daten:
      </p>

      <ul>
        <li>Ihre Eingaben werden auf Servern in den USA verarbeitet und gespeichert</li>
        <li>Die Anbieter behalten sich vor, Ihre Daten für Modelltraining zu verwenden</li>
        <li>Sie haben <strong>keine Kontrolle</strong> darüber, wer Zugriff hat</li>
        <li>DSGVO-Compliance ist bestenfalls eine Grauzone</li>
      </ul>

      <p>
        Der <strong>Berliner Beauftragte für Datenschutz</strong> hat bereits mehrfach vor der unkontrollierten
        Nutzung US-amerikanischer KI-Dienste in Unternehmen gewarnt. Die Realität: Viele Berliner
        Professionals nutzen diese Tools trotzdem — weil die Alternativen bisher zu kompliziert waren.
      </p>

      <h2>Die Alternative: KI auf dem eigenen Gerät</h2>

      <p>
        Was viele nicht wissen: Aktuelle KI-Modelle wie <strong>Llama 3, Mistral und Qwen</strong> sind
        leistungsfähig genug, um auf einem Mac mini oder MacBook Pro lokal zu laufen. Kein Internet nötig.
        Kein Cloud-Server. Ihre Daten verlassen nie Ihr Büro.
      </p>

      <p>
        Das bedeutet konkret:
      </p>

      <ul>
        <li><strong>Zero Data Egress</strong> — Nichts geht nach außen</li>
        <li><strong>DSGVO-konform by Design</strong> — Keine Auftragsverarbeitungsverträge nötig</li>
        <li><strong>Keine Abo-Kosten</strong> — Einmalige Einrichtung, dann gehört die KI Ihnen</li>
        <li><strong>Volle Kontrolle</strong> — Sie entscheiden, welches Modell, welche Funktionen</li>
      </ul>

      <InlineCTA
        headline="Ihre eigene KI — in einer Woche einsatzbereit"
        text="Wir kommen zu Ihnen nach Berlin und installieren Ihr komplettes privates KI-System. Inklusive WhatsApp-Integration und persönlicher Einweisung."
        packageInfo="Paket B — Business Brains: €3.500–€4.000"
        postTitle={title}
      />

      <h2>Warum Berlin der perfekte Ort dafür ist</h2>

      <p>
        Berlin hat etwas, das kaum eine andere Stadt in dieser Kombination bietet: eine tiefe
        Datenschutzkultur, eine dichte Tech-Szene und die wirtschaftliche Bereitschaft, für Qualität zu zahlen.
      </p>

      <p>
        Hier verstehen Menschen intuitiv, warum es einen Unterschied macht, ob Ihre KI auf einem Server
        in Virginia läuft oder auf einem Mac mini in Ihrem Büro in Mitte. Das Wort <em>&ldquo;Datenschutz&rdquo;</em> ist hier
        kein Marketing-Buzzword — es ist eine Erwartung.
      </p>

      <h2>Wie läuft die Installation ab?</h2>

      <p>
        Der Prozess ist überraschend einfach — wenn man weiß, was man tut:
      </p>

      <ol>
        <li><strong>Erstgespräch</strong> — Wir besprechen Ihre Anforderungen und empfehlen die passende Hardware</li>
        <li><strong>Vor-Ort-Installation</strong> — Wir kommen zu Ihnen, installieren alles, richten WhatsApp/Telegram ein</li>
        <li><strong>Einweisung</strong> — Sie lernen, Ihre KI zu nutzen, und bekommen einen persönlichen Guide</li>
        <li><strong>Support</strong> — 7 Tage Post-Setup Support, danach optionale Wartung</li>
      </ol>

      <p>
        Das Ergebnis: Sie haben eine leistungsfähige KI, die Sie per WhatsApp-Nachricht befragen können —
        und Ihre Daten haben zu keinem Zeitpunkt Ihr Gebäude verlassen.
      </p>

      <h2>Für wen ist das gedacht?</h2>

      <p>
        Wenn Sie in Berlin arbeiten und eines dieser Szenarien kennen, ist eine lokale KI die richtige Wahl:
      </p>

      <ul>
        <li>Sie nutzen ChatGPT für die Arbeit, haben aber ein ungutes Gefühl dabei</li>
        <li>Ihr Unternehmen hat KI-Nutzung aus Datenschutzgründen eingeschränkt oder verboten</li>
        <li>Sie arbeiten mit <a href="/blog/ki-fuer-anwaelte-und-aerzte" className="text-primary-600 underline hover:text-primary-800">vertraulichen Mandanten- oder Patientendaten</a></li>
        <li>Sie möchten KI nutzen, ohne monatliche Abo-Kosten von €20–€200</li>
        <li>Sie wollen <a href="/blog/mac-mini-private-ki-zentrale" className="text-primary-600 underline hover:text-primary-800">Ihren Mac mini als KI-Zentrale</a> einrichten, aber nicht selbst konfigurieren</li>
      </ul>

      <p>
        Die Zukunft der KI ist nicht die Cloud. Die Zukunft ist lokal, privat und unter Ihrer Kontrolle.
        Berlin hat das als eine der ersten Städte verstanden.
      </p>
    </>
  );
}
