import InlineCTA from "./InlineCTA";

export default function PostChatGPTKanzlei() {
  const title = "Warum ChatGPT für Ihre Kanzlei ein Datenschutz-Risiko ist";

  return (
    <>
      <p>
        ChatGPT ist beeindruckend. Es fasst Urteile zusammen, formuliert Schriftsätze vor und beantwortet
        juristische Fragen in Sekunden. Kein Wunder, dass immer mehr Anwälte damit experimentieren.
      </p>

      <p>
        Aber hier ist das Problem: Jede Eingabe, die Sie in ChatGPT machen, verlässt Ihr Büro.
        Mandantennamen, Aktenzeichen, vertrauliche Sachverhalte — alles landet auf Servern in den USA.
      </p>

      <p>
        Für eine Kanzlei ist das nicht nur unklug. Es kann berufsrechtlich und datenschutzrechtlich
        problematisch sein.
      </p>

      <h2>Was passiert mit Ihren Daten bei ChatGPT?</h2>

      <p>Wenn Sie ChatGPT über die Weboberfläche oder App nutzen, werden Ihre Eingaben:</p>

      <ul>
        <li>An Server von OpenAI in den USA übermittelt</li>
        <li>Dort verarbeitet und gespeichert</li>
        <li>
          Potenziell für das Training zukünftiger Modelle verwendet (sofern nicht explizit
          deaktiviert)
        </li>
      </ul>

      <p>
        Selbst mit der Enterprise-Version bleiben Ihre Daten auf fremder Infrastruktur. Sie geben die
        Kontrolle ab — und als Anwalt tragen Sie die Verantwortung.
      </p>

      <h2>Das DSGVO-Problem</h2>

      <p>Die Datenschutz-Grundverordnung ist hier eindeutig:</p>

      <p>
        Artikel 28 DSGVO verlangt einen Auftragsverarbeitungsvertrag (AVV), wenn personenbezogene Daten
        von Dritten verarbeitet werden. OpenAI bietet zwar einen Data Processing Addendum an — aber die
        praktische Umsetzung wirft Fragen auf:
      </p>

      <ul>
        <li>
          <strong>Datenübertragung in Drittländer:</strong> Seit dem Schrems-II-Urteil ist der
          Datentransfer in die USA heikel. Das EU-US Data Privacy Framework hilft, deckt aber nicht alle
          Szenarien ab.
        </li>
        <li>
          <strong>Zweckbindung:</strong> Werden Ihre Eingaben wirklich nur für Ihre Anfrage genutzt?
        </li>
        <li>
          <strong>Löschpflichten:</strong> Können Sie sicherstellen, dass Mandantendaten auf Anfrage
          vollständig gelöscht werden?
        </li>
      </ul>

      <h2>Das berufsrechtliche Problem</h2>

      <p>
        Für Rechtsanwälte kommt noch <strong>§ 43a BRAO (Verschwiegenheitspflicht)</strong> hinzu. Die
        anwaltliche Schweigepflicht ist eines der höchsten Güter im Rechtsstaat. Wenn Mandantendaten an
        einen US-Cloud-Dienst übermittelt werden, ist fraglich, ob diese Pflicht gewahrt bleibt.
      </p>

      <p>
        Die Rechtsanwaltskammern haben sich hierzu klar positioniert: Besondere Vorsicht ist geboten.
      </p>

      <InlineCTA
        headline="Datenschutz-Risiko eliminieren"
        text="KIHause bietet KI-Lösungen, die Ihr Büro nie verlassen. Keine Cloud, keine DSGVO-Fragen."
        packageInfo="Paket C — Datenschutz Special: €4.000–€5.000"
        postTitle={title}
      />

      <h2>Die Alternative: KI, die Ihr Büro nie verlässt</h2>

      <p>
        Stellen Sie sich vor, Sie hätten die gleiche KI-Power wie ChatGPT — aber alles läuft lokal auf
        einem Gerät in Ihrem Büro.
      </p>

      <p>
        Das ist keine Zukunftsmusik. Moderne lokale KI-Modelle bieten:
      </p>

      <ul>
        <li>Zusammenfassungen von Schriftsätzen — in Sekunden, ohne Cloud</li>
        <li>Vertragsprüfung — Klauseln analysieren, Risiken markieren</li>
        <li>Recherche-Unterstützung — juristische Fragen beantworten</li>
        <li>Textformulierung — Entwürfe für Schreiben, E-Mails, Gutachten</li>
      </ul>

      <p>
        Der Unterschied: Ihre Daten bleiben auf Ihrer Hardware. Kein Internet, kein Cloud-Server, kein
        Datentransfer. Die DSGVO-Frage stellt sich gar nicht erst.
      </p>

      <h2>Vergleich auf einen Blick</h2>

      <div className="my-8 overflow-hidden rounded-2xl border border-slate-200">
        <div className="grid grid-cols-3 bg-slate-800 text-white text-sm font-semibold">
          <div className="p-4 border-r border-slate-700">Kriterium</div>
          <div className="p-4 border-r border-slate-700">ChatGPT (Cloud)</div>
          <div className="p-4 text-primary-300">Lokale KI (KIHause)</div>
        </div>
        {[
          ["Datenverarbeitung", "USA / Cloud", "Ihr Büro"],
          ["DSGVO-konform", "Aufwändig, Restrisiko", "Ja, by Design"],
          ["Schweigepflicht", "Fraglich", "Gewahrt"],
          ["Internetverbindung", "Erforderlich", "Nicht nötig"],
          ["Kosten", "Monatliches Abo", "Einmalig + optionaler Service"],
        ].map(([criterion, cloud, local], i) => (
          <div
            key={i}
            className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="p-4 border-r border-slate-100 font-medium text-slate-700">{criterion}</div>
            <div className="p-4 border-r border-slate-100 text-slate-500">{cloud}</div>
            <div className="p-4 text-primary-700 font-medium">{local}</div>
          </div>
        ))}
      </div>

      <h2>Was sollten Sie jetzt tun?</h2>

      <ol>
        <li>Prüfen Sie, ob in Ihrer Kanzlei bereits Cloud-KI-Dienste genutzt werden</li>
        <li>
          Sensibilisieren Sie Ihre Mitarbeiter — oft wird ChatGPT &ldquo;nebenbei&rdquo; genutzt, ohne
          dass die Kanzleileitung davon weiß
        </li>
        <li>
          Informieren Sie sich über lokale Alternativen, die den gleichen Nutzen bieten — ohne das
          Risiko
        </li>
      </ol>
    </>
  );
}
