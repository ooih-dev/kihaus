import InlineCTA from "./InlineCTA";

/* ── tiny reusable chart helpers (no deps) ── */
function Bar({
  label,
  value,
  max,
  color,
  suffix = "",
}: {
  label: string;
  value: number;
  max: number;
  color: string;
  suffix?: string;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-700 font-medium">{label}</span>
        <span className="text-slate-500 font-mono">
          {value}
          {suffix}
        </span>
      </div>
      <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

function ScenarioCard({
  emoji,
  title,
  probability,
  color,
  children,
}: {
  emoji: string;
  title: string;
  probability: number;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl border-2 p-5 mb-4"
      style={{ borderColor: color }}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-bold flex items-center gap-2">
          <span>{emoji}</span> {title}
        </h4>
        <span
          className="px-3 py-1 rounded-full text-white text-sm font-bold"
          style={{ background: color }}
        >
          {probability}%
        </span>
      </div>
      <div className="text-slate-600 text-base leading-relaxed">{children}</div>
    </div>
  );
}

function TimelineItem({
  company,
  date,
  price,
  pop,
  afterYear,
  color,
}: {
  company: string;
  date: string;
  price: string;
  pop: string;
  afterYear: string;
  color: string;
}) {
  return (
    <div
      className="flex items-start gap-4 mb-4 pl-4 border-l-4"
      style={{ borderColor: color }}
    >
      <div>
        <p className="font-bold text-slate-900">{company}</p>
        <p className="text-sm text-slate-500">{date}</p>
        <p className="text-sm text-slate-600">
          IPO: {price} · Tag 1: <span className="text-green-600 font-medium">{pop}</span> · 12 Monate
          danach: <span className="font-medium">{afterYear}</span>
        </p>
      </div>
    </div>
  );
}

/* ── article ── */
export default function PostAnthropicIPODe() {
  return (
    <>
      <p className="text-lg italic text-slate-500 border-l-4 border-amber-400 pl-4 mb-8">
        ⚠️ <strong>Haftungsausschluss:</strong> Dies ist keine Anlageberatung. Dieser Artikel dient
        ausschließlich Informations- und Bildungszwecken. Konsultieren Sie immer einen zugelassenen
        Finanzberater, bevor Sie Anlageentscheidungen treffen.
      </p>

      <p>
        Jedes Tech-Medium bringt dieselbe Story:{" "}
        <em>&quot;Anthropic plant IPO im Oktober 2026.&quot;</em> Schön. Aber was bedeutet das
        konkret für Ihr Geld?
      </p>

      <p>
        Anthropic — das Unternehmen hinter Claude AI — bereitet sich auf den größten Tech-Börsengang
        seit Jahren vor. Goldman Sachs, JPMorgan und Morgan Stanley führen Gespräche. Das Ziel: über
        60 Milliarden Dollar einsammeln, bei einer Bewertung, die die meisten Unicorns wie Ponys
        aussehen lässt.
      </p>

      <p>
        Aber hier ist, was niemand laut ausspricht:{" "}
        <strong>Die private Bewertung liegt bei 380 Milliarden Dollar, das IPO-Ziel bei 60 Milliarden.</strong>{" "}
        Diese Lücke erzählt eine Geschichte.
      </p>

      {/* ══════ REVENUE CHART ══════ */}
      <h2>Der Raketentreibstoff: Umsatzwachstum, das Excel sprengt</h2>

      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-1">
          Anthropic — Annualisierter Umsatz
        </h3>
        <p className="text-sm text-slate-500 mb-4">Dez 2024 → Mär 2026 (in Milliarden USD)</p>
        <Bar label="Dez 2024" value={1} max={25} color="#6366f1" suffix="B" />
        <Bar label="Jun 2025" value={4} max={25} color="#6366f1" suffix="B" />
        <Bar label="Dez 2025" value={9} max={25} color="#6366f1" suffix="B" />
        <Bar label="Feb 2026" value={14} max={25} color="#818cf8" suffix="B" />
        <Bar label="Mär 2026" value={19} max={25} color="#4f46e5" suffix="B" />
        <div className="mt-2 pt-2 border-t border-slate-200">
          <Bar label="OpenAI (Mär 2026)" value={25} max={25} color="#94a3b8" suffix="B" />
        </div>
        <p className="text-xs text-slate-400 mt-2">
          19-faches Wachstum in 15 Monaten. Der Abstand zu OpenAI betrug 24 Mrd. $ — jetzt nur noch 6 Mrd. $ und schrumpfend.
        </p>
      </div>

      <p>
        Bei der aktuellen Entwicklung{" "}
        <strong>könnte Anthropic OpenAI beim Umsatz bis Mitte 2026 überholen.</strong>
      </p>

      {/* ══════ MARKET SHARE CHART ══════ */}
      <h2>Enterprise-Markt: Die stille Übernahme</h2>

      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-1">
          Enterprise LLM API — Marktanteile
        </h3>
        <p className="text-sm text-slate-500 mb-4">2023 vs. Mitte 2025</p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-bold text-slate-600 mb-3 text-center">2023</p>
            <div className="flex flex-col items-center">
              <div className="w-full h-8 bg-slate-100 rounded-lg overflow-hidden flex">
                <div className="h-full bg-green-500" style={{ width: "50%" }} />
                <div className="h-full bg-indigo-500" style={{ width: "12%" }} />
                <div className="h-full bg-slate-300" style={{ width: "38%" }} />
              </div>
              <div className="flex gap-3 mt-2 text-xs text-slate-500">
                <span>
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1" />
                  OpenAI 50%
                </span>
                <span>
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-1" />
                  Anthropic 12%
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-600 mb-3 text-center">Mitte 2025</p>
            <div className="flex flex-col items-center">
              <div className="w-full h-8 bg-slate-100 rounded-lg overflow-hidden flex">
                <div className="h-full bg-green-400" style={{ width: "25%" }} />
                <div className="h-full bg-indigo-500" style={{ width: "32%" }} />
                <div className="h-full bg-slate-300" style={{ width: "43%" }} />
              </div>
              <div className="flex gap-3 mt-2 text-xs text-slate-500">
                <span>
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1" />
                  OpenAI 25%
                </span>
                <span>
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-1" />
                  Anthropic 32%
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-3">
          Anthropic hat das Spiel gedreht: von 12% zum Marktführer bei Enterprise-APIs.
        </p>
      </div>

      <p>
        <strong>Allein Claude Code</strong> — ein einziges Produkt — generiert 2,5 Mrd. $ annualisierten
        Umsatz. Business-Abonnements haben sich seit Januar 2026 vervierfacht.
      </p>

      <h2>Die Profitabilitätskarte</h2>
      <p>
        Anders als OpenAI (prognostizierter Verlust von 14 Mrd. $ in 2026) plant Anthropic{" "}
        <strong>positiven Free Cash Flow ab 2027</strong> und potenziell 17 Mrd. $ Cash Flow bis 2028.
        Das ist keine &quot;wir finden das schon raus&quot;-Story — das ist ein Geschäftsmodell.
      </p>

      {/* ══════ PROFITABILITY COMPARISON ══════ */}
      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-1">Weg zur Profitabilität</h3>
        <p className="text-sm text-slate-500 mb-4">Prognostizierter Free Cash Flow (Milliarden USD)</p>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-slate-700 mb-1">Anthropic</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-5 bg-red-100 rounded-full overflow-hidden relative">
                <div
                  className="absolute right-1/2 h-full bg-red-400 rounded-l-full"
                  style={{ width: "15%" }}
                />
              </div>
              <span className="text-xs text-red-500 w-16 text-right">-3 Mrd. $ (2026)</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-5 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "25%" }} />
              </div>
              <span className="text-xs text-green-600 w-16 text-right">+5 Mrd. $ (2027)</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-5 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-600 rounded-full" style={{ width: "60%" }} />
              </div>
              <span className="text-xs text-green-700 w-16 text-right">+17 Mrd. $ (2028)</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700 mb-1">OpenAI</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-5 bg-red-100 rounded-full overflow-hidden relative">
                <div
                  className="absolute right-1/2 h-full bg-red-500 rounded-l-full"
                  style={{ width: "45%" }}
                />
              </div>
              <span className="text-xs text-red-600 w-16 text-right">-14 Mrd. $ (2026)</span>
            </div>
          </div>
        </div>
      </div>

      <InlineCTA
        headline="KI, die in Ihrem Büro bleibt"
        text="KIHause installiert private, lokale KI-Lösungen — DSGVO-konform, ohne Cloud-Abhängigkeit. Dieselben Enterprise-Modelle, auf Ihrer Hardware."
        postTitle="Anthropic IPO Analyse"
      />

      {/* ══════ GRAVITY SECTION ══════ */}
      <h2>Die Schwerkraft: Warum das Smart Money nervös ist</h2>

      <p>Jetzt die kalte Dusche.</p>

      <p>
        <strong>Die Bewertungsmathematik ist brutal:</strong> 380 Mrd. $ private Bewertung bei 19 Mrd. $ Umsatz ={" "}
        <strong>27-faches Umsatz-Multiple.</strong> Für ein Unternehmen, das noch Cash verbrennt (~12 Mrd. $ Training +
        7 Mrd. $ Inferenz allein in 2026), ist das ein Preis für nahezu Perfektion.
      </p>

      <p>
        <strong>Plattformabhängigkeit:</strong> Amazon (AWS) hat 8 Mrd. $ investiert — Claude läuft auf Bedrock,
        trainiert auf Trainium-Chips. Google hat 3 Mrd. $ investiert — Claude ist auf Vertex AI. Unglaubliche
        Distribution… aber auch unglaubliche Abhängigkeit. Was passiert, wenn Ihre größten Investoren auch Ihre
        größten Konkurrenten sind?
      </p>

      <p>
        <strong>Die KI-Blasen-Frage:</strong> Wir haben diesen Film schon gesehen. Dotcom. Clean Tech.
        Krypto. Jede Generation bekommt ihren &quot;Diesmal ist es anders&quot;-Moment. KI könnte wirklich
        anders sein — aber öffentliche Märkte testen Hype mit gnadenloser Effizienz.
      </p>

      {/* ══════ HISTORICAL IPO TIMELINE ══════ */}
      <h2>Historischer Vergleich: Was passiert bei KI-nahen IPOs?</h2>

      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Tech-IPO: Tag 1 vs. 12-Monats-Performance</h3>
        <TimelineItem
          company="Snowflake"
          date="Sep 2020"
          price="120 $/Aktie"
          pop="+112%"
          afterYear="-40% vom Höchststand (Buffett kaufte beim IPO)"
          color="#38bdf8"
        />
        <TimelineItem
          company="Palantir"
          date="Sep 2020"
          price="7,25 $ Ref."
          pop="+31%"
          afterYear="18 Monate Schmerzen, dann +1.874% bis Ende 2025"
          color="#a78bfa"
        />
        <TimelineItem
          company="ARM Holdings"
          date="Sep 2023"
          price="51 $/Aktie"
          pop="+25%"
          afterYear="Monatelang seitwärts, dann 180 $+ durch KI-Hype"
          color="#34d399"
        />
        <p className="text-sm text-slate-600 mt-4 font-medium italic">
          Das Muster: Fast jeder große Tech-IPO schießt am ersten Tag hoch, um dann monatelang zu bluten,
          bis der reale Preis gefunden ist.
        </p>
      </div>

      {/* ══════ SCENARIO MATRIX ══════ */}
      <h2>Die Szenario-Matrix: Was wirklich passieren könnte</h2>

      <div className="my-8">
        <ScenarioCard emoji="🚀" title='Bull Case: „Das nächste NVIDIA"' probability={20} color="#22c55e">
          <ul className="list-disc ml-5 space-y-1">
            <li>IPO konservativ bei 60 Mrd. $ bepreist (vs. 380 Mrd. $ privat)</li>
            <li>Tag-1-Anstieg: +150–300%, Retail-Investoren strömen rein</li>
            <li>Umsatz wächst weiter 10×/Jahr, Profitabilität kommt planmäßig</li>
            <li>Kursziel Ende 2027: 500 Mrd. $+</li>
          </ul>
          <p className="mt-2 text-sm italic">Erfordert perfekte Umsetzung UND einen günstigen Markt.</p>
        </ScenarioCard>

        <ScenarioCard emoji="📊" title='Base Case: „Das Snowflake-Muster"' probability={50} color="#3b82f6">
          <ul className="list-disc ml-5 space-y-1">
            <li>Tag-1-Anstieg: +50–100%</li>
            <li>Woche zwei: Realitätscheck — Gewinnmitnahmen, Leerverkäufer, Analysten-Abstufungen</li>
            <li>Monate 2–6: Aktie fällt 30–50% unter Tag-1-Hochs</li>
            <li>Stabilisierung bei 100–150 Mrd. $ Marktkapitalisierung</li>
            <li>12–18 Monate später: allmählicher Anstieg, wenn Ergebnisse liefern</li>
          </ul>
          <p className="mt-2 text-sm italic">Die häufigste Verlaufskurve bei Tech-IPOs.</p>
        </ScenarioCard>

        <ScenarioCard emoji="🐻" title='Bear Case: „Die WeWork-Warnung"' probability={25} color="#ef4444">
          <ul className="list-disc ml-5 space-y-1">
            <li>Marktbedingungen verschlechtern sich (Rezession, Zinserhöhungen, KI-Regulierung)</li>
            <li>IPO verzögert oder unter Erwartungen bepreist</li>
            <li>Innerhalb von 3 Monaten: unter IPO-Preis</li>
            <li>AWS/Google-Abhängigkeit wird zur Belastung</li>
            <li>Aktie pendelt sich bei 40–60 Mrd. $ ein — ein Bruchteil der privaten Bewertung</li>
          </ul>
          <p className="mt-2 text-sm italic">Private Bewertungen ≠ öffentliche Bewertungen.</p>
        </ScenarioCard>

        <ScenarioCard emoji="💀" title='Black Swan: „Das IPO, das nie stattfand"' probability={5} color="#1e293b">
          <ul className="list-disc ml-5 space-y-1">
            <li>OpenAI geht zuerst an die Börse und absorbiert die gesamte Retail-KI-Nachfrage</li>
            <li>Regulatorisches Durchgreifen oder schwerwiegender Sicherheitsvorfall</li>
            <li>Anthropic zieht das IPO zurück und bleibt privat</li>
          </ul>
          <p className="mt-2 text-sm italic">Unwahrscheinlich, aber 2026 war ein seltsames Jahr.</p>
        </ScenarioCard>
      </div>

      {/* ══════ PROBABILITY CHART ══════ */}
      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Szenario-Wahrscheinlichkeiten im Überblick</h3>
        <div className="flex h-10 rounded-xl overflow-hidden">
          <div
            className="flex items-center justify-center text-white text-xs font-bold"
            style={{ width: "20%", background: "#22c55e" }}
          >
            Bull 20%
          </div>
          <div
            className="flex items-center justify-center text-white text-xs font-bold"
            style={{ width: "50%", background: "#3b82f6" }}
          >
            Base 50%
          </div>
          <div
            className="flex items-center justify-center text-white text-xs font-bold"
            style={{ width: "25%", background: "#ef4444" }}
          >
            Bear 25%
          </div>
          <div
            className="flex items-center justify-center text-white text-xs font-bold"
            style={{ width: "5%", background: "#1e293b" }}
          >
          </div>
        </div>
      </div>

      {/* ══════ OPENAI RACE ══════ */}
      <h2>Der OpenAI-Elefant im Raum</h2>

      <p>
        Beide Unternehmen rasen vor Jahresende an die öffentlichen Märkte. OpenAI hat im März 2026 eine
        120-Mrd.-$-Runde bei einer Bewertung von 850 Mrd. $ abgeschlossen. Ihr Board hat Berichten zufolge
        <em> &quot;Code Red&quot;</em> ausgerufen — aus Sorge, dass Anthropic bei einem Erstlisting die
        aufgestaute Retail-Nachfrage nach &quot;KI-Aktien&quot; absorbieren könnte.
      </p>

      <p>
        Das ist nicht nur ein Börsengang — es ist ein Kampf um den Titel{" "}
        <strong>&quot;die KI-Aktie&quot;</strong> in Retail-Portfolios. Wer zuerst geht, hat einen
        strukturellen Vorteil. Dieses Rennen könnte dazu führen, dass beide Unternehmen überstürzt
        an den Markt gehen — was historisch gesehen nicht gut für die IPO-Preisdisziplin ist.
      </p>

      {/* ══════ WHAT MAKES ANTHROPIC DIFFERENT ══════ */}
      <h2>Was Anthropic von anderen unterscheidet</h2>

      <ol>
        <li>
          <strong>Safety-First-Positionierung</strong> in einer Ära, in der KI-Regulierung weltweit
          an Fahrt gewinnt. EU AI Act, Verordnungen, wachsende öffentliche Bedenken — Anthropics
          Positionierung könnte ein Wettbewerbsvorteil sein, kein Handicap.
        </li>
        <li>
          <strong>Gewinnzeitplan.</strong> Positiver Cash Flow ab 2027 ist kein Traum — es basiert
          auf Unit Economics, die Analysten modellieren können. OpenAIs prognostizierter Verlust
          von 14 Mrd. $ lässt Anthropic wie den verantwortungsvollen Erwachsenen aussehen.
        </li>
        <li>
          <strong>Enterprise-Traktion.</strong> 32% API-Marktanteil und steigend. Kein Consumer-Hype —
          echte B2B-Einnahmen, die Unternehmen nicht über Nacht kürzen.
        </li>
      </ol>

      <InlineCTA
        headline="KI lokal betreiben — ganz ohne IPO-Risiko"
        text="Während der Markt über Bewertungen debattiert, kann Ihr Unternehmen KI-Modelle privat vor Ort betreiben. Null Cloud-Abhängigkeit, volle DSGVO-Konformität."
        postTitle="Anthropic IPO Analyse"
      />

      {/* ══════ THE BOTTOM LINE ══════ */}
      <h2>Das Fazit</h2>

      <div className="my-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
        <h3 className="text-lg font-bold text-amber-900 mb-3">Die wichtigsten Erkenntnisse für Anleger</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">1</span>
            <div>
              <p className="font-medium text-slate-800">Nicht am ersten Tag kaufen.</p>
              <p className="text-sm text-slate-600">
                Fast jeder gehypte Tech-IPO steigt am ersten Tag, um dann zu fallen. Bester Einstieg: 3–6 Monate nach dem Listing.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">2</span>
            <div>
              <p className="font-medium text-slate-800">Das OpenAI-Rennen beobachten.</p>
              <p className="text-sm text-slate-600">
                Wer zuerst an die Börse geht, bestimmt den Marktappetit. Geht OpenAI zuerst und enttäuscht,
                profitiert Anthropic — oder leidet mit.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">3</span>
            <div>
              <p className="font-medium text-slate-800">Auf die Umsatzentwicklung achten.</p>
              <p className="text-sm text-slate-600">
                Erreicht Anthropic bis zum IPO 30+ Mrd. $, wird die Bewertung plausibel. Verlangsamt sich
                das Wachstum — Finger weg.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">4</span>
            <div>
              <p className="font-medium text-slate-800">
                Die Lücke zwischen privater und öffentlicher Bewertung ist Ihr Freund.
              </p>
              <p className="text-sm text-slate-600">
                380 Mrd. $ privat → 60 Mrd. $ Raise bedeutet, dass frühe IPO-Investoren zu einem deutlichen
                Abschlag einsteigen könnten. Das ist selten und bewusst so gestaltet.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <p>
        Das Anthropic-IPO wird nicht langweilig. Ob es die Investition des Jahrzehnts oder die teuerste
        Lektion seit WeWork wird, hängt von einer Frage ab:{" "}
        <strong>Können sie weiterhin 10×/Jahr wachsen und gleichzeitig profitabel werden?</strong>
      </p>

      <p>Die Daten sagen: vielleicht. Der Markt wird entscheiden.</p>

      {/* ══════ DISCLAIMER & SOURCES ══════ */}
      <p className="text-lg italic text-slate-500 border-l-4 border-amber-400 pl-4 mt-12">
        ⚠️ Keine Anlageberatung. Vergangene Entwicklungen ähnlicher Unternehmen garantieren keine
        zukünftigen Ergebnisse. Investieren Sie verantwortungsbewusst.
      </p>

      <h2>Quellen</h2>
      <ul>
        <li>
          <a href="https://www.cnbc.com/2026/02/12/anthropic-closes-30-billion-funding-round-at-380-billion-valuation.html" target="_blank" rel="noopener noreferrer">
            CNBC: Anthropic schließt 30-Mrd.-$-Runde bei 380 Mrd. $ Bewertung
          </a>
        </li>
        <li>
          <a href="https://www.bloomberg.com/news/articles/2026-03-27/claude-ai-maker-anthropic-said-to-weigh-ipo-as-soon-as-october" target="_blank" rel="noopener noreferrer">
            Bloomberg: Anthropic bereitet IPO im Oktober vor
          </a>
        </li>
        <li>
          <a href="https://www.ainvest.com/news/anthropic-60b-ipo-looms-high-risk-entry-ai-valuation-showdown-openai-2603/" target="_blank" rel="noopener noreferrer">
            AInvest: Anthropics 60-Mrd.-$-IPO — Hochrisiko-Einstieg
          </a>
        </li>
        <li>
          <a href="https://www.axios.com/2026/02/05/openai-ipo-anthropic-xai-elon-musk" target="_blank" rel="noopener noreferrer">
            Axios: OpenAI, Anthropic und xAI nähern sich dem IPO-Showdown
          </a>
        </li>
        <li>
          <a href="https://www.ebc.com/forex/anthropic-ipo-2026-latest-timeline-valuation-and-risks" target="_blank" rel="noopener noreferrer">
            EBC Financial: Anthropic IPO 2026 — Zeitplan, Bewertung, Risiken
          </a>
        </li>
        <li>
          <a href="https://forgeglobal.com/insights/anthropic-upcoming-ipo-news/" target="_blank" rel="noopener noreferrer">
            Forge Global: Anthropic IPO & Privatmarkt-Kurs
          </a>
        </li>
        <li>
          <a href="https://winbuzzer.com/2026/03/30/anthropic-ipo-q4-2026-60-billion-target-xcxwbn/" target="_blank" rel="noopener noreferrer">
            WinBuzzer: Anthropic visiert 60-Mrd.-$-IPO in Q4 2026 an
          </a>
        </li>
        <li>
          <a href="https://kraneshares.com/will-anthropic-or-xai-ipo-in-2026/" target="_blank" rel="noopener noreferrer">
            KraneShares: Wird Anthropic oder xAI 2026 an die Börse gehen?
          </a>
        </li>
        <li>
          <a href="https://sacra.com/c/anthropic/" target="_blank" rel="noopener noreferrer">
            Sacra: Anthropic Umsatz & Bewertung
          </a>
        </li>
        <li>
          <a href="https://news.crunchbase.com/ai/anthropic-raises-30b-second-largest-deal-all-time/" target="_blank" rel="noopener noreferrer">
            Crunchbase: Anthropic sammelt 30 Mrd. $ ein
          </a>
        </li>
      </ul>
    </>
  );
}
