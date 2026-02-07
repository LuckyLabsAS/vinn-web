import "./index.css";

function App() {
    return (
        <main className="page">
            <section className="panel hero">
                <div className="content">
                    <p className="eyebrow">kommer snart</p>
                    <h1>Vinn</h1>
                    <p className="brand-subtle">En Lucky Labs App</p>
                    <div className="store-hint" aria-label="Nedlasting kommer snart">
                        <span className="store-badge">App Store</span>
                        <span className="store-badge">Google Play</span>
                    </div>
                </div>
            </section>

            <section className="panel teaser">
                <div className="content">
                    <h2>Kommer snart</h2>
                </div>
            </section>

            <section className="panel footer-panel">
                <footer className="content footer-content">
                    <p>Følg med. Første versjon lanseres snart.</p>
                    <small>© {new Date().getFullYear()} Lucky Labs AS</small>
                </footer>
            </section>
        </main>
    );
}

export default App;
