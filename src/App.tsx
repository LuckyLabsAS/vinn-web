import "./index.css";

const features = [
    {
        title: "Alt samlet på ett sted",
        description: "Fang inn tips, konkurranser og belønninger i ett kontrollpanel slik at teamet slipper spredte lister og dokumenter.",
        tag: "Struktur",
    },
    {
        title: "Trygt for både arrangør og deltaker",
        description: "Verifier partnerne dine, se logg for endringer og få varsler når noe krever oppfølging.",
        tag: "Tillitt",
    },
    {
        title: "Klar for neste kampanje",
        description: "Bygg opp nye konkurranser på minutter med maler, ferdige regler og ferdig merkevarefarger fra Vinn.",
        tag: "Tempo",
    },
];

const competitions = [
    {
        name: "Sommerlotteriet",
        pot: "1,5 MNOK",
        deadline: "Frist: 12. august",
        status: "Live",
        verified: true,
        badge: "Vinn-partner",
    },
    {
        name: "Gaveløftet",
        pot: "750 000 kr",
        deadline: "Frist: 5. juni",
        status: "Planlagt",
        verified: false,
        badge: "Ny",
    },
    {
        name: "Miljøfondet",
        pot: "500 000 kr",
        deadline: "Frist: 28. april",
        status: "Avsluttet",
        verified: true,
        badge: "Revidert",
    },
];

const steps = [
    {
        title: "1. Start med Vinn",
        body: "Opprett konto, velg mal og sett merkefargene dine. Vi matcher automatisk Vinn-paletten.",
    },
    {
        title: "2. Lag din kampanje",
        body: "Legg inn premiene, regler og tidsplan. Du får et klart oppsett som er lett å dele.",
    },
    {
        title: "3. Inviter og følg med",
        body: "Del landingssiden, se påmeldinger i sanntid og få varsler når noe må godkjennes.",
    },
    {
        title: "4. Utbetal og lær",
        body: "Utbetal vinnerne trygt, og hent innsikt om hva som skapte mest engasjement.",
    },
];

const promises = [
    {
        title: "For deg",
        desc: "Du finner raskt de rette menneskene — enten det er kunder, kandidater eller givere.",
    },
    {
        title: "For deltakerne",
        desc: "De får utnyttet det bedriftene tilbyr, uten friksjon og uten å lure på om alt er trygt.",
    },
    {
        title: "For virksomheten",
        desc: "Du får kontroll, dokumentasjon og en trygg plattform som er klar for neste kampanje.",
    },
];

function App() {
    return (
        <div className="page">
            <div className="bg-ornament" />
            <header className="hero card">
                <div className="eyebrow pill">Nyhet fra Vinn</div>
                <h1>Vinn Vinn for deg og meg!</h1>
                <p className="lede">
                    Vi bygger nettsiden som speiler appen: tydelig, trygg og med et løfte om færre friksjoner for både arrangør og
                    deltaker. Vi bygger markedets ledende plattform for annonsering samtidig som vi gir muligheten til dem som ønsker
                    å delta. Vi kaller det Vinn Vinn!
                </p>
                <div className="hero-actions">
                    <button className="btn primary">Start gratis</button>
                    <button className="btn ghost">Book en demo</button>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span>Aktive konkurranser</span>
                        <strong>1 200+</strong>
                    </div>
                    <div className="stat accent">
                        <span>Utbetalt premieverdi</span>
                        <strong>38 MNOK</strong>
                    </div>
                    <div className="stat">
                        <span>Kundetilfredshet</span>
                        <strong>4,9/5</strong>
                    </div>
                </div>
                <div className="scroll-hint">
                    <span>Scroll for å se mer</span>
                    <div className="scroll-dot" />
                </div>
            </header>

            <section className="section">
                <div className="section-header">
                    <div className="eyebrow pill">Hvorfor Vinn?</div>
                    <h2>Bygget med samme fargetema som appen.</h2>
                    <p className="muted">Lettvekts React-front som matcher mint, mørk grønn og den lyse bakgrunnen du allerede bruker.</p>
                </div>
                <div className="feature-grid">
                    {features.map((feature) => (
                        <article key={feature.title} className="feature card">
                            <div className="pill subtle">{feature.tag}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="accent-bar" />
                        </article>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-header">
                    <div className="eyebrow pill">Neste utrulling</div>
                    <h2>Føles som appen – bare i nettleseren.</h2>
                    <p className="muted">Et par eksempel-kort i mintpaletten, klare for å kobles på API-et ditt.</p>
                </div>
                <div className="competition-grid">
                    {competitions.map((competition) => (
                        <article key={competition.name} className="competition card">
                            <div className="competition-top">
                                <div className="badge">{competition.badge}</div>
                                {competition.verified && <div className="verified">Verifisert</div>}
                            </div>
                            <h3>{competition.name}</h3>
                            <p className="muted">{competition.deadline}</p>
                            <div className="meta">
                                <span className="pot">Premiepotten</span>
                                <strong>{competition.pot}</strong>
                            </div>
                            <div className="status-row">
                                <span className={`status ${competition.status.toLowerCase()}`}>{competition.status}</span>
                                <button className="link">Se mer</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section stretch">
                <div className="section-header">
                    <div className="eyebrow pill">Slik ruller vi ut</div>
                    <h2>En lang, tydelig reise du scroller deg gjennom.</h2>
                    <p className="muted">Fire steg fra idé til utbetaling, så du alltid vet hva som kommer neste gang du scroller.</p>
                </div>
                <div className="timeline">
                    {steps.map((step) => (
                        <article key={step.title} className="timeline-item card">
                            <h3>{step.title}</h3>
                            <p className="muted">{step.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-header">
                    <div className="eyebrow pill">Vinn-Vinn i praksis</div>
                    <h2>For deg, for deltakerne, for virksomheten.</h2>
                    <p className="muted">Én side, flere perspektiver – og du scroller deg gjennom alt.</p>
                </div>
                <div className="promise-grid">
                    {promises.map((promise) => (
                        <article key={promise.title} className="promise card">
                            <h3>{promise.title}</h3>
                            <p className="muted">{promise.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section cta">
                <div className="cta-card card">
                    <div>
                        <div className="eyebrow pill">Klar når du er</div>
                        <h2>La oss lansere nettsiden sammen.</h2>
                        <p className="muted">Vi bruker Vinn-fargene, slår på hosting og kobler til dataene dine. Du slipper alt styr.</p>
                    </div>
                    <div className="cta-actions">
                        <button className="btn primary">Sett opp Vinn-web</button>
                        <button className="btn ghost">Snakk med oss</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
