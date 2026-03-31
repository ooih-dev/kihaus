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
          IPO: {price} · Day-1: <span className="text-green-600 font-medium">{pop}</span> · 12 months
          later: <span className="font-medium">{afterYear}</span>
        </p>
      </div>
    </div>
  );
}

/* ── article ── */
export default function PostAnthropicIPO() {
  return (
    <>
      <p className="text-lg italic text-slate-500 border-l-4 border-amber-400 pl-4 mb-8">
        ⚠️ <strong>Disclaimer:</strong> This is not financial advice. This article is for
        informational and educational purposes only. Always consult a licensed financial advisor
        before making investment decisions.
      </p>

      <p>
        Every tech outlet is running the same story:{" "}
        <em>&quot;Anthropic Plans IPO in October 2026.&quot;</em> Cool. But what does that actually
        mean for your money?
      </p>

      <p>
        Anthropic — the company behind Claude AI — is preparing to go public in what could be the
        largest tech IPO in years. They&apos;re in talks with Goldman Sachs, JPMorgan, and Morgan
        Stanley. The target: raise over $60 billion at a valuation that makes most unicorns look
        like ponies.
      </p>

      <p>
        But here&apos;s the thing nobody&apos;s saying out loud:{" "}
        <strong>the private valuation is $380 billion, and the IPO target is $60 billion.</strong>{" "}
        That gap tells a story.
      </p>

      {/* ══════ REVENUE CHART ══════ */}
      <h2>The Rocket Fuel: Revenue Growth That Breaks Excel</h2>

      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-1">
          Anthropic Annualized Revenue
        </h3>
        <p className="text-sm text-slate-500 mb-4">Dec 2024 → Mar 2026 (in billions USD)</p>
        <Bar label="Dec 2024" value={1} max={25} color="#6366f1" suffix="B" />
        <Bar label="Jun 2025" value={4} max={25} color="#6366f1" suffix="B" />
        <Bar label="Dec 2025" value={9} max={25} color="#6366f1" suffix="B" />
        <Bar label="Feb 2026" value={14} max={25} color="#818cf8" suffix="B" />
        <Bar label="Mar 2026" value={19} max={25} color="#4f46e5" suffix="B" />
        <div className="mt-2 pt-2 border-t border-slate-200">
          <Bar label="OpenAI (Mar 2026)" value={25} max={25} color="#94a3b8" suffix="B" />
        </div>
        <p className="text-xs text-slate-400 mt-2">
          19× growth in 15 months. The gap with OpenAI was $24B — now $6B and closing.
        </p>
      </div>

      <p>
        At current trajectory,{" "}
        <strong>Anthropic could overtake OpenAI in revenue by mid-2026.</strong>
      </p>

      {/* ══════ MARKET SHARE CHART ══════ */}
      <h2>Enterprise Market: The Silent Takeover</h2>

      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-1">
          Enterprise LLM API Market Share
        </h3>
        <p className="text-sm text-slate-500 mb-4">2023 vs. mid-2025</p>

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
            <p className="text-sm font-bold text-slate-600 mb-3 text-center">Mid-2025</p>
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
          Anthropic flipped the script: from 12% to market leader in enterprise APIs.
        </p>
      </div>

      <p>
        <strong>Claude Code alone</strong> — just one product — generates $2.5B in annualized
        revenue. Business subscriptions have quadrupled since January 2026.
      </p>

      <h2>The Profitability Card</h2>
      <p>
        Unlike OpenAI (projected to lose $14B in 2026), Anthropic projects{" "}
        <strong>positive free cash flow by 2027</strong> and potential $17B cash flow by 2028.
        That&apos;s not a &quot;we&apos;ll figure it out later&quot; story — that&apos;s a business
        model.
      </p>

      {/* ══════ PROFITABILITY COMPARISON ══════ */}
      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-1">Path to Profitability</h3>
        <p className="text-sm text-slate-500 mb-4">Projected free cash flow (billions USD)</p>
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
              <span className="text-xs text-red-500 w-16 text-right">-$3B (2026)</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-5 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "25%" }} />
              </div>
              <span className="text-xs text-green-600 w-16 text-right">+$5B (2027)</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-5 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-600 rounded-full" style={{ width: "60%" }} />
              </div>
              <span className="text-xs text-green-700 w-16 text-right">+$17B (2028)</span>
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
              <span className="text-xs text-red-600 w-16 text-right">-$14B (2026)</span>
            </div>
          </div>
        </div>
      </div>

      <InlineCTA
        headline="AI that stays in your office"
        text="KIHause deploys private, local AI solutions — GDPR-compliant, no cloud dependency. The same enterprise-grade models, running on your hardware."
        postTitle="Anthropic IPO Analysis"
      />

      {/* ══════ GRAVITY SECTION ══════ */}
      <h2>The Gravity: Why Smart Money Is Nervous</h2>

      <p>Now the cold water.</p>

      <p>
        <strong>The valuation math is brutal:</strong> $380B private valuation on $19B revenue ={" "}
        <strong>27× revenue multiple.</strong> For a company still burning cash (~$12B training +
        $7B inference in 2026 alone), that&apos;s pricing in near-perfection.
      </p>

      <p>
        <strong>Platform dependency:</strong> Amazon (AWS) invested $8B — Claude runs on Bedrock,
        trains on Trainium chips. Google invested $3B — Claude is on Vertex AI. Incredible
        distribution… but also incredible dependency. What happens when your biggest investors are
        also your biggest competitors?
      </p>

      <p>
        <strong>The AI bubble question:</strong> We&apos;ve seen this movie. Dot-com. Clean tech.
        Crypto. Every generation gets its &quot;this time it&apos;s different&quot; moment. AI might
        genuinely be different — but public markets stress-test hype with ruthless efficiency.
      </p>

      {/* ══════ HISTORICAL IPO TIMELINE ══════ */}
      <h2>Historical Playbook: What Happens to AI-Adjacent IPOs?</h2>

      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Tech IPO Day-1 vs. 12-Month Performance</h3>
        <TimelineItem
          company="Snowflake"
          date="Sep 2020"
          price="$120/share"
          pop="+112%"
          afterYear="-40% from peak (Buffett bought at IPO)"
          color="#38bdf8"
        />
        <TimelineItem
          company="Palantir"
          date="Sep 2020"
          price="$7.25 ref."
          pop="+31%"
          afterYear="18 months of pain, then +1,874% by late 2025"
          color="#a78bfa"
        />
        <TimelineItem
          company="ARM Holdings"
          date="Sep 2023"
          price="$51/share"
          pop="+25%"
          afterYear="Sideways for months, then $180+ on AI mania"
          color="#34d399"
        />
        <p className="text-sm text-slate-600 mt-4 font-medium italic">
          The pattern: nearly every major tech IPO pops on day one, then bleeds for months before
          finding its real price.
        </p>
      </div>

      {/* ══════ SCENARIO MATRIX ══════ */}
      <h2>The Scenario Matrix: What Could Actually Happen</h2>

      <div className="my-8">
        <ScenarioCard emoji="🚀" title='Bull Case: "The Next NVIDIA"' probability={20} color="#22c55e">
          <ul className="list-disc ml-5 space-y-1">
            <li>IPO prices conservatively at $60B (vs. $380B private)</li>
            <li>Day-one surge: +150-300% as retail investors flood in</li>
            <li>Revenue keeps growing 10×/year, profitability arrives on schedule</li>
            <li>Price target by end of 2027: $500B+</li>
          </ul>
          <p className="mt-2 text-sm italic">Requires perfect execution AND a favorable market.</p>
        </ScenarioCard>

        <ScenarioCard emoji="📊" title='Base Case: "The Snowflake Pattern"' probability={50} color="#3b82f6">
          <ul className="list-disc ml-5 space-y-1">
            <li>Day-one pop: +50-100%</li>
            <li>Week two: reality check — profit-taking, short sellers, analyst downgrades</li>
            <li>Months 2-6: stock drifts 30-50% below day-one highs</li>
            <li>Stabilizes around $100-150B market cap</li>
            <li>12-18 months later: gradual climb if earnings deliver</li>
          </ul>
          <p className="mt-2 text-sm italic">This is the most common tech IPO trajectory.</p>
        </ScenarioCard>

        <ScenarioCard emoji="🐻" title='Bear Case: "The WeWork Warning"' probability={25} color="#ef4444">
          <ul className="list-disc ml-5 space-y-1">
            <li>Market conditions deteriorate (recession, rate hikes, AI regulation)</li>
            <li>IPO delayed or priced below expectations</li>
            <li>Within 3 months: below IPO price</li>
            <li>AWS/Google dependency becomes a liability</li>
            <li>Stock settles at $40-60B — a fraction of private valuation</li>
          </ul>
          <p className="mt-2 text-sm italic">Private valuations ≠ public valuations.</p>
        </ScenarioCard>

        <ScenarioCard emoji="💀" title='Black Swan: "The IPO That Never Was"' probability={5} color="#1e293b">
          <ul className="list-disc ml-5 space-y-1">
            <li>OpenAI IPOs first and absorbs all retail AI demand</li>
            <li>Regulatory crackdown or major security incident</li>
            <li>Anthropic pulls the IPO and stays private</li>
          </ul>
          <p className="mt-2 text-sm italic">Unlikely, but 2026 has been a weird year.</p>
        </ScenarioCard>
      </div>

      {/* ══════ PROBABILITY CHART ══════ */}
      <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Scenario Probability Overview</h3>
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
      <h2>The OpenAI Elephant in the Room</h2>

      <p>
        Both companies are racing to public markets before year-end. OpenAI closed a $120B round at
        $850B valuation in March 2026. Their board reportedly called a <em>&quot;code red&quot;</em>{" "}
        — worried that if Anthropic lists first, it&apos;ll absorb the pent-up retail demand for
        &quot;AI stock.&quot;
      </p>

      <p>
        This isn&apos;t just a listing — it&apos;s a land grab for the title of{" "}
        <strong>&quot;the AI stock&quot;</strong> in retail portfolios. Whoever goes first has a
        structural advantage. This race could lead to both companies rushing to market — which
        historically is not great for IPO pricing discipline.
      </p>

      {/* ══════ WHAT MAKES ANTHROPIC DIFFERENT ══════ */}
      <h2>What Makes Anthropic Different</h2>

      <ol>
        <li>
          <strong>Safety-first branding</strong> in an era where AI regulation is accelerating
          globally. EU AI Act, executive orders, growing public concern — Anthropic&apos;s
          positioning could be a competitive moat, not a handicap.
        </li>
        <li>
          <strong>Profit timeline.</strong> Positive cash flow by 2027 isn&apos;t a dream —
          it&apos;s backed by unit economics analysts can model. OpenAI&apos;s $14B projected loss
          makes Anthropic look like the responsible grown-up.
        </li>
        <li>
          <strong>Enterprise traction.</strong> 32% API market share and growing. Not consumer hype —
          actual B2B revenue that enterprises won&apos;t cut overnight.
        </li>
      </ol>

      <InlineCTA
        headline="Run AI locally — no IPO risk required"
        text="While the market debates valuations, your business can run AI models privately on-premise. Zero cloud dependency, full GDPR compliance."
        postTitle="Anthropic IPO Analysis"
      />

      {/* ══════ THE BOTTOM LINE ══════ */}
      <h2>The Bottom Line</h2>

      <div className="my-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
        <h3 className="text-lg font-bold text-amber-900 mb-3">Key Takeaways for Investors</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">1</span>
            <div>
              <p className="font-medium text-slate-800">Don&apos;t buy on day one.</p>
              <p className="text-sm text-slate-600">
                Nearly every hyped tech IPO pops, then drops. Best entry: 3-6 months after listing.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">2</span>
            <div>
              <p className="font-medium text-slate-800">Watch the OpenAI race.</p>
              <p className="text-sm text-slate-600">
                Whoever IPOs first sets market appetite. If OpenAI goes first and disappoints,
                Anthropic benefits — or suffers by association.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">3</span>
            <div>
              <p className="font-medium text-slate-800">Focus on revenue trajectory.</p>
              <p className="text-sm text-slate-600">
                If Anthropic hits $30B+ by IPO time, the valuation starts to make sense. If growth
                slows, run.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold text-lg mt-0.5">4</span>
            <div>
              <p className="font-medium text-slate-800">
                Private vs. public gap is your friend.
              </p>
              <p className="text-sm text-slate-600">
                $380B private → $60B raise means early IPO investors could get in at a meaningful
                discount. That&apos;s rare and intentional.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <p>
        The Anthropic IPO won&apos;t be boring. Whether it&apos;s the investment of the decade or
        the most expensive lesson since WeWork depends on one question:{" "}
        <strong>can they keep growing 10×/year while turning profitable?</strong>
      </p>

      <p>The data says maybe. The market will decide.</p>

      {/* ══════ DISCLAIMER & SOURCES ══════ */}
      <p className="text-lg italic text-slate-500 border-l-4 border-amber-400 pl-4 mt-12">
        ⚠️ Not financial advice. Past performance of similar companies does not guarantee future
        results. Invest responsibly.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://www.cnbc.com/2026/02/12/anthropic-closes-30-billion-funding-round-at-380-billion-valuation.html" target="_blank" rel="noopener noreferrer">
            CNBC: Anthropic closes $30B round at $380B valuation
          </a>
        </li>
        <li>
          <a href="https://www.bloomberg.com/news/articles/2026-03-27/claude-ai-maker-anthropic-said-to-weigh-ipo-as-soon-as-october" target="_blank" rel="noopener noreferrer">
            Bloomberg: Anthropic Prepares for IPO in October
          </a>
        </li>
        <li>
          <a href="https://www.ainvest.com/news/anthropic-60b-ipo-looms-high-risk-entry-ai-valuation-showdown-openai-2603/" target="_blank" rel="noopener noreferrer">
            AInvest: Anthropic&apos;s $60B+ IPO — High-Risk Entry
          </a>
        </li>
        <li>
          <a href="https://www.axios.com/2026/02/05/openai-ipo-anthropic-xai-elon-musk" target="_blank" rel="noopener noreferrer">
            Axios: OpenAI, Anthropic and xAI approach IPO reckoning
          </a>
        </li>
        <li>
          <a href="https://www.ebc.com/forex/anthropic-ipo-2026-latest-timeline-valuation-and-risks" target="_blank" rel="noopener noreferrer">
            EBC Financial: Anthropic IPO 2026 — Timeline, Valuation, Risks
          </a>
        </li>
        <li>
          <a href="https://forgeglobal.com/insights/anthropic-upcoming-ipo-news/" target="_blank" rel="noopener noreferrer">
            Forge Global: Anthropic IPO & Private Stock Price
          </a>
        </li>
        <li>
          <a href="https://winbuzzer.com/2026/03/30/anthropic-ipo-q4-2026-60-billion-target-xcxwbn/" target="_blank" rel="noopener noreferrer">
            WinBuzzer: Anthropic Eyes $60B IPO Q4 2026
          </a>
        </li>
        <li>
          <a href="https://kraneshares.com/will-anthropic-or-xai-ipo-in-2026/" target="_blank" rel="noopener noreferrer">
            KraneShares: Will Anthropic or xAI IPO in 2026?
          </a>
        </li>
        <li>
          <a href="https://sacra.com/c/anthropic/" target="_blank" rel="noopener noreferrer">
            Sacra: Anthropic Revenue & Valuation
          </a>
        </li>
        <li>
          <a href="https://news.crunchbase.com/ai/anthropic-raises-30b-second-largest-deal-all-time/" target="_blank" rel="noopener noreferrer">
            Crunchbase: Anthropic Raises $30B
          </a>
        </li>
      </ul>
    </>
  );
}
