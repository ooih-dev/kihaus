import InlineCTA from "./InlineCTA";

export default function PostLokalesKIModell() {
  const title = "Was ist ein lokales KI-Modell? Einfach erklärt";

  return (
    <>
      <p>
        Sie haben von ChatGPT gehört. Vielleicht nutzen Sie es sogar. Aber wussten Sie, dass ähnliche
        KI-Systeme auch direkt auf einem Gerät in Ihrem Büro laufen können — ganz ohne Internet und
        ohne Cloud?
      </p>

      <p>
        Das nennt man ein lokales KI-Modell. In diesem Artikel erklären wir, was das ist, wie es
        funktioniert und warum es für viele Unternehmen die bessere Wahl ist.
      </p>

      <h2>KI in der Cloud vs. KI lokal</h2>

      <p>
        <strong>Cloud-KI (z.B. ChatGPT, Google Gemini)</strong>
      </p>

      <p>
        So funktioniert es normalerweise: Sie tippen eine Frage ein → Ihre Daten werden übers Internet
        an einen Server geschickt → der Server berechnet die Antwort → die Antwort kommt zurück zu
        Ihnen.
      </p>

      <p>
        Das ist schnell und bequem. Aber: Ihre Daten verlassen Ihren Computer. Sie wissen nicht genau,
        wo sie landen, wer Zugriff hat und wie lange sie gespeichert werden.
      </p>

      <p>
        <strong>Lokale KI (z.B. KIHause-Lösungen)</strong>
      </p>

      <p>
        Bei einem lokalen KI-Modell läuft alles auf einem Gerät bei Ihnen vor Ort. Sie stellen Ihre
        Frage → das Gerät berechnet die Antwort → fertig. Keine Internetverbindung nötig. Keine Daten,
        die Ihr Büro verlassen.
      </p>

      <h2>Wie funktioniert das technisch?</h2>

      <p>Keine Sorge — wir halten es einfach.</p>

      <p>
        Ein KI-Modell ist im Grunde ein sehr großes Rechenwerk, das Sprache versteht und Sprache
        produziert. Es wurde mit Milliarden von Texten trainiert und hat dabei gelernt, Zusammenhänge
        zu erkennen, Texte zu formulieren und Fragen zu beantworten.
      </p>

      <p>
        Dieses Rechenwerk — das &ldquo;Modell&rdquo; — ist eine Datei. Und diese Datei kann auf
        moderner Hardware lokal ausgeführt werden. Was man dafür braucht:
      </p>

      <ul>
        <li>Einen leistungsfähigen Prozessor (z.B. Apple Silicon im Mac Mini)</li>
        <li>Genügend Arbeitsspeicher (je nach Modell 16–64 GB)</li>
        <li>Die richtige Software zum Ausführen des Modells</li>
      </ul>

      <p>
        Das Ergebnis: Ein kompaktes, leises Gerät auf Ihrem Schreibtisch, das KI-Anfragen beantwortet
        — so schnell wie ChatGPT, aber komplett offline.
      </p>

      <InlineCTA
        headline="Lokale KI kennenlernen"
        text="KIHause richtet Ihnen ein schlüsselfertiges lokales KI-System ein — in Berlin, vor Ort."
        packageInfo="Paket A — Berlin Basics: ab €1.500"
        postTitle={title}
      />

      <h2>Was kann ein lokales KI-Modell?</h2>

      <p>Praktisch alles, was Sie von ChatGPT kennen:</p>

      <ul>
        <li>Texte schreiben — E-Mails, Berichte, Entwürfe</li>
        <li>Texte zusammenfassen — lange Dokumente auf den Punkt bringen</li>
        <li>Übersetzen — Deutsch ↔ Englisch und viele weitere Sprachen</li>
        <li>Fragen beantworten — basierend auf dem Wissen des Modells</li>
        <li>Daten analysieren — Tabellen auswerten, Muster erkennen</li>
        <li>Code schreiben — für technische Teams</li>
      </ul>

      <h2>Was kann es (noch) nicht?</h2>

      <p>Fairness gehört dazu, deshalb auch die Grenzen:</p>

      <ul>
        <li>
          <strong>Kein Echtzeit-Internet:</strong> Ein lokales Modell weiß nichts über Nachrichten von
          heute. Es arbeitet mit dem Wissen, das es beim Training bekommen hat.
        </li>
        <li>Bildgenerierung ist möglich, braucht aber mehr Hardware.</li>
        <li>
          Sehr große Modelle (100B+ Parameter) brauchen entsprechend leistungsfähige Hardware. Für die
          meisten Büro-Aufgaben reichen aber kompaktere Modelle völlig aus.
        </li>
      </ul>

      <h2>Warum ist das für Unternehmen interessant?</h2>

      <ol>
        <li>
          <strong>Datenschutz</strong> — Ihre Daten bleiben auf Ihrer Hardware. Punkt. Keine
          DSGVO-Fragen, keine Auftragsverarbeitung, kein Restrisiko.
        </li>
        <li>
          <strong>Keine laufenden Kosten</strong> — Cloud-KI kostet monatlich — pro Nutzer, pro
          Anfrage. Lokale KI ist eine einmalige Investition. Danach nutzen Sie es so viel Sie wollen.
        </li>
        <li>
          <strong>Unabhängigkeit</strong> — Kein Internet? Kein Problem. Serverausfall bei OpenAI?
          Betrifft Sie nicht. Sie sind unabhängig von externen Anbietern.
        </li>
        <li>
          <strong>Kontrolle</strong> — Sie entscheiden, welches Modell läuft, wer Zugriff hat und wie
          es konfiguriert wird. Volle Kontrolle, keine Blackbox.
        </li>
      </ol>

      <h2>Für wen eignet sich lokale KI?</h2>

      <ul>
        <li>Anwaltskanzleien — Mandantendaten dürfen das Büro nicht verlassen</li>
        <li>Arztpraxen — Patientendaten unter DSGVO-Schutz</li>
        <li>Agenturen — kreative Arbeit ohne Datenlecks</li>
        <li>Jedes Unternehmen, das mit vertraulichen Daten arbeitet</li>
      </ul>

      <h2>Wie fange ich an?</h2>

      <p>Sie müssen kein Technik-Experte sein. KIHause liefert Ihnen eine schlüsselfertige Lösung:</p>

      <ol>
        <li>Wir beraten Sie, welches Setup zu Ihrem Bedarf passt</li>
        <li>Wir richten alles ein — Hardware, Software, Modelle</li>
        <li>Wir schulen Ihr Team</li>
        <li>Sie arbeiten sofort produktiv — mit KI, die Ihnen gehört</li>
      </ol>
    </>
  );
}
