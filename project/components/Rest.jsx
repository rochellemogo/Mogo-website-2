const Branches = () => {
  // Organised by region. Coordinates are approximate lat/lng for a simple KE-shaped map.
  const regions = [
  { name: "Nairobi Metro", colour: "#7AB800", branches: [
    { n: "Nairobi CBD", x: .53, y: .55 }, { n: "Industrial Area", x: .54, y: .57 },
    { n: "Westlands", x: .52, y: .54 }, { n: "Ngara", x: .53, y: .54 },
    { n: "Kasarani", x: .54, y: .52 }, { n: "Embakasi", x: .55, y: .57 },
    { n: "Kitengela", x: .55, y: .60 }, { n: "Rongai", x: .52, y: .58 },
    { n: "Kiambu", x: .52, y: .52 }, { n: "Kikuyu", x: .51, y: .55 },
    { n: "Thika", x: .56, y: .50 }, { n: "Ruiru", x: .55, y: .53 },
    { n: "Limuru", x: .50, y: .53 }, { n: "Juja", x: .56, y: .52 },
    { n: "Machakos", x: .58, y: .60 }, { n: "Athi River", x: .56, y: .59 }]
  },
  { name: "Coast", colour: "#E96A3B", branches: [
    { n: "Mombasa", x: .76, y: .78 }, { n: "Nyali", x: .77, y: .77 },
    { n: "Likoni", x: .76, y: .79 }, { n: "Kilifi", x: .78, y: .74 },
    { n: "Malindi", x: .80, y: .72 }, { n: "Mtwapa", x: .77, y: .77 },
    { n: "Ukunda", x: .75, y: .82 }, { n: "Voi", x: .68, y: .72 },
    { n: "Mariakani", x: .74, y: .77 }]
  },
  { name: "Central", colour: "#F4B93A", branches: [
    { n: "Nyeri", x: .52, y: .45 }, { n: "Karatina", x: .53, y: .46 },
    { n: "Muranga", x: .54, y: .48 }, { n: "Kerugoya", x: .55, y: .47 },
    { n: "Embu", x: .57, y: .48 }, { n: "Meru", x: .58, y: .44 },
    { n: "Chuka", x: .57, y: .46 }, { n: "Maua", x: .60, y: .43 },
    { n: "Nanyuki", x: .54, y: .42 }]
  },
  { name: "Rift Valley", colour: "#3B7CC9", branches: [
    { n: "Nakuru", x: .42, y: .52 }, { n: "Naivasha", x: .47, y: .54 },
    { n: "Eldoret", x: .34, y: .42 }, { n: "Kitale", x: .32, y: .38 },
    { n: "Kericho", x: .36, y: .54 }, { n: "Bomet", x: .37, y: .56 },
    { n: "Narok", x: .42, y: .58 }, { n: "Kapsabet", x: .34, y: .46 },
    { n: "Iten", x: .36, y: .40 }, { n: "Nyahururu", x: .48, y: .46 },
    { n: "Molo", x: .40, y: .53 }]
  },
  { name: "Western & Nyanza", colour: "#8B5CF6", branches: [
    { n: "Kisumu", x: .30, y: .52 }, { n: "Kakamega", x: .29, y: .46 },
    { n: "Bungoma", x: .28, y: .42 }, { n: "Busia", x: .24, y: .44 },
    { n: "Webuye", x: .30, y: .44 }, { n: "Mumias", x: .27, y: .46 },
    { n: "Kisii", x: .32, y: .58 }, { n: "Migori", x: .30, y: .62 },
    { n: "Homa Bay", x: .30, y: .58 }, { n: "Siaya", x: .27, y: .50 },
    { n: "Awendo", x: .31, y: .60 }]
  },
  { name: "Eastern & North", colour: "#D946A3", branches: [
    { n: "Kitui", x: .62, y: .58 }, { n: "Mwingi", x: .63, y: .54 },
    { n: "Garissa", x: .72, y: .54 }, { n: "Isiolo", x: .60, y: .40 }]
  }];


  const total = regions.reduce((a, r) => a + r.branches.length, 0);
  const [active, setActive] = React.useState("All");
  const [q, setQ] = React.useState("");

  const filtered = regions.
  filter((r) => active === "All" || r.name === active).
  map((r) => ({ ...r, branches: r.branches.filter((b) => b.n.toLowerCase().includes(q.toLowerCase())) })).
  filter((r) => r.branches.length);

  const activeColour = active === "All" ? "#7AB800" : regions.find((r) => r.name === active)?.colour || "#7AB800";

  return (
    <section id="branches" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="shell">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <div className="h-eyebrow"><span className="dot" />Find us</div>
            <h2 className="mega-head" style={{ fontSize: 'clamp(42px, 5.5vw, 80px)' }}>
              84+ branches,<br />one <em>handshake</em> away.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--m-ink-2)', maxWidth: 520, margin: '28px 0 0' }}>Find us in person at one of the locations below.

            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#apply" className="btn btn-dark">Find your nearest branch <span className="arrow-pill"><ArrowRight /></span></a>
            <a href="tel:0768469112" className="btn btn-ghost">Call 0768 469 112</a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, alignItems: 'stretch' }}>
          {/* MAP */}
          <div style={{ background: 'var(--m-cream)', borderRadius: 'var(--r-xl)', padding: 32, border: '1px solid var(--m-line-2)', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--m-ink-2)' }}>Mogo Kenya · branch network</div>
              <div style={{ fontSize: 12, fontFamily: 'JetBrains Mono', color: 'var(--m-ink-2)' }}>84 locations</div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/5' }}>
              <svg viewBox="0 0 400 500" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="kgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00000008" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="500" fill="url(#kgrid)" />
                {/* Stylised Kenya outline (approximate) */}
                <path d="M 60 180
                         L 110 140 L 150 130 L 200 120 L 260 130
                         L 310 150 L 340 210 L 330 260
                         L 320 300 L 310 340 L 300 380 L 280 410
                         L 250 430 L 220 425 L 180 410 L 140 380
                         L 110 340 L 90 300 L 75 260 L 60 220 Z"





                fill="#ffffff" stroke="var(--m-navy)" strokeWidth="1.5" strokeDasharray="3 3" opacity=".5" />
                {/* Lake Victoria */}
                <ellipse cx="105" cy="265" rx="28" ry="22" fill="#3B7CC9" opacity=".15" />
                <text x="105" y="268" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fill="var(--m-ink-2)" opacity=".6">L. VICTORIA</text>
                {/* Indian Ocean label */}
                <text x="340" y="400" fontSize="8" fontFamily="JetBrains Mono" fill="var(--m-ink-2)" opacity=".5">INDIAN OCEAN</text>

                {filtered.flatMap((r) => r.branches.map((b) =>
                <g key={r.name + b.n}>
                    <circle cx={b.x * 400} cy={b.y * 500} r={8} fill={r.colour} opacity=".18" />
                    <circle cx={b.x * 400} cy={b.y * 500} r={3.5} fill={r.colour} />
                  </g>
                ))}
                {/* Highlight major cities with labels */}
                {[
                { n: "NAIROBI", x: .53, y: .55 }, { n: "MOMBASA", x: .76, y: .78 },
                { n: "KISUMU", x: .30, y: .52 }, { n: "ELDORET", x: .34, y: .42 },
                { n: "NAKURU", x: .42, y: .52 }, { n: "MERU", x: .58, y: .44 }].
                map((c) =>
                <text key={c.n} x={c.x * 400 + 10} y={c.y * 500 + 3} fontSize="9" fontFamily="Inter Tight" fontWeight="700" fill="var(--m-ink)" letterSpacing=".05em">{c.n}</text>
                )}
              </svg>
            </div>

            {/* Region legend */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
              <button onClick={() => setActive("All")} style={{ padding: '7px 13px', background: active === "All" ? 'var(--m-ink)' : '#fff', color: active === "All" ? '#fff' : 'var(--m-ink)', border: '1px solid var(--m-line-2)', borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>All · {total}</button>
              {regions.map((r) =>
              <button key={r.name} onClick={() => setActive(r.name)} style={{ padding: '7px 13px', background: active === r.name ? r.colour : '#fff', color: active === r.name ? '#fff' : 'var(--m-ink)', border: '1px solid var(--m-line-2)', borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: active === r.name ? '#fff' : r.colour }} />
                  {r.name} · {r.branches.length}
                </button>
              )}
            </div>
          </div>

          {/* LIST */}
          <div style={{ background: '#fff', borderRadius: 'var(--r-xl)', border: '1px solid var(--m-line-2)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--m-line-2)', display: 'flex', alignItems: 'center', gap: 12, background: 'var(--m-cream)' }}>
              <span style={{ fontSize: 14 }}>🔍</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a town or neighbourhood…"
                style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 15, fontFamily: 'Inter Tight', outline: 'none', color: 'var(--m-ink)' }} />
              
              {q && <button onClick={() => setQ("")} style={{ border: 'none', background: 'transparent', fontSize: 13, color: 'var(--m-ink-2)', cursor: 'pointer' }}>Clear</button>}
            </div>
            <div style={{ flex: 1, maxHeight: 560, overflowY: 'auto', padding: '8px 0' }}>
              {filtered.length === 0 &&
              <div style={{ padding: '60px 24px', textAlign: 'center', color: 'var(--m-ink-2)' }}>
                  No branches match "{q}". Try Mombasa, Kisii or Meru.
                </div>
              }
              {filtered.map((r) =>
              <div key={r.name}>
                  <div style={{ padding: '14px 24px 8px', display: 'flex', alignItems: 'center', gap: 8, position: 'sticky', top: 0, background: '#fff', zIndex: 1, borderBottom: '1px solid var(--m-line-2)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: r.colour }} />
                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--m-ink)' }}>{r.name}</span>
                    <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: 'var(--m-ink-2)', marginLeft: 'auto' }}>{r.branches.length}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                    {r.branches.map((b) =>
                  <a key={b.n} href="#apply" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid var(--m-line-2)', color: 'var(--m-ink)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: r.colour, opacity: .6 }} />
                        {b.n}
                      </a>
                  )}
                  </div>
                </div>
              )}
            </div>
            <div style={{ padding: '14px 24px', borderTop: '1px solid var(--m-line-2)', background: 'var(--m-cream)', fontSize: 12, color: 'var(--m-ink-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Open Mon–Sat · Call centre 24/7</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, color: activeColour }}>
                {filtered.reduce((a, r) => a + r.branches.length, 0)} shown
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

const CTA = () =>
<section id="apply" style={{ padding: '80px 0', background: 'var(--m-cream)' }}>
    <div className="shell">
      <div style={{ background: 'var(--m-ink)', borderRadius: 'var(--r-xl)', padding: '96px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: -100, width: 360, height: 360, borderRadius: 999, background: 'var(--m-green)', opacity: .22, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', right: 48, top: 48, width: 160, height: 160, animation: 'spin 20s linear infinite' }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            <defs><path id="cp2" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" /></defs>
            <text fontFamily="JetBrains Mono" fontSize="7" letterSpacing="2.5" fill="#7AB800">
              <textPath href="#cp2">APPLY · GET APPROVED · RIDE HOME · OWN IT · </textPath>
            </text>
          </svg>
        </div>
        <div style={{ position: 'relative', maxWidth: 700 }}>
          <div className="h-eyebrow" style={{ color: 'var(--m-green)' }}><span className="dot" />Start today</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6.5vw, 96px)', color: '#fff', margin: '24px 0 24px', fontWeight: 600, letterSpacing: '-.035em', lineHeight: .98 }}>
            Your wheels<br />are <em style={{ fontStyle: 'italic', color: 'var(--m-green)', fontFamily: '"Instrument Serif", serif', fontWeight: 400 }}>waiting.</em>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.72)', lineHeight: 1.55, marginBottom: 40, maxWidth: 520 }}>
            Three-minute form. Real call from a MOGO officer same day. Get your loan today.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary btn-lg">Apply online <span className="arrow-pill"><ArrowRight /></span></a>
            <a href="tel:0709719000" className="btn btn-ghost-light btn-lg">Call · 0709 719 000</a>
          </div>
        </div>
      </div>
    </div>
  </section>;


const Footer = () =>
<footer style={{ background: 'var(--m-ink)', color: 'rgba(255,255,255,.7)', padding: '80px 0 32px' }}>
    <div className="shell">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        <div>
          <img src="assets/mogo-logo.svg" alt="mogo" style={{ height: 28, marginBottom: 20 }} />
          <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 340 }}>
            Mogo Auto Kenya Ltd. Part of Eleving Group — a fintech operating in 15 countries across three continents. Building a Kenya where every hustle has the wheels it needs.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            {['F', 'X', 'IG', 'in', 'YT'].map((s) =>
          <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: 999, background: 'rgba(255,255,255,.06)', display: 'grid', placeItems: 'center', fontSize: 12, color: '#fff', fontWeight: 500 }}>{s}</a>
          )}
          </div>
        </div>
        <FooterCol title="Products" links={["Boda Loan", "Boda Logbook", "Tuk-Tuk Logbook", "Car Logbook", "Car Loan", "Buyoff Logbook"]} />
        <FooterCol title="Company" links={["About MOGO", "Branches", "Careers", "Press", "Partners", "Eleving Group"]} />
        <FooterCol title="Support" links={["Help center", "Contact us", "FAQ", "Complaints", "Whistleblower"]} />
        <FooterCol title="Legal" links={["Terms", "Privacy", "Best Price T&Cs", "CBK licence", "Data protection"]} />
      </div>
      <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, flexWrap: 'wrap', gap: 16 }}>
        <div>© 2026 Mogo Auto Kenya Ltd. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <span>Licensed by the Central Bank of Kenya</span>
          <span>Max APR 270.24% (Boda Logbook)</span>
        </div>
      </div>
    </div>
  </footer>;


const FooterCol = ({ title, links }) =>
<div>
    <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 16 }}>{title}</div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {links.map((l) => <li key={l}><a href="#" style={{ fontSize: 14 }}>{l}</a></li>)}
    </ul>
  </div>;


const TweaksPanel = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setActive(true);
      if (e.data?.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);
  const set = (key, val) => {
    document.documentElement.style.setProperty(key, val);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };
  if (!active) return null;
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100, background: '#fff', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,.2)', border: '1px solid var(--m-line)', width: open ? 280 : 'auto' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600, fontSize: 14 }}>
        Tweaks <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▾</span>
      </button>
      {open &&
      <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid var(--m-line)', paddingTop: 14 }}>
          <div>
            <label style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--m-muted)', display: 'block', marginBottom: 8 }}>Primary green</label>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#7AB800', '#5C8A00', '#8FD600', '#4CAF50'].map((c) =>
            <button key={c} onClick={() => set('--m-green', c)} style={{ width: 28, height: 28, borderRadius: 8, background: c, border: '2px solid #fff', outline: '1px solid var(--m-line)' }} />
            )}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--m-muted)', display: 'block', marginBottom: 8 }}>Cream warmth</label>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#F4EFE3', '#FFFFFF', '#ECE5D2', '#FBF7EC', '#EDE7F2'].map((c) =>
            <button key={c} onClick={() => set('--m-cream', c)} style={{ width: 28, height: 28, borderRadius: 8, background: c, border: '2px solid #fff', outline: '1px solid var(--m-line)' }} />
            )}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--m-muted)', display: 'block', marginBottom: 8 }}>Display font</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
            { l: 'Poppins (modern fintech)', v: '"Poppins", sans-serif' },
            { l: 'Inter Tight', v: '"Inter Tight", sans-serif' },
            { l: 'Space Grotesk', v: '"Space Grotesk", sans-serif' },
            { l: 'Instrument Serif', v: '"Instrument Serif", serif' }].
            map((f) =>
            <button key={f.l} onClick={() => set('--font-display', f.v)} style={{ padding: '8px 10px', textAlign: 'left', fontSize: 13, border: '1px solid var(--m-line)', borderRadius: 8, background: '#fff' }}>{f.l}</button>
            )}
            </div>
          </div>
        </div>
      }
    </div>);

};

Object.assign(window, { Branches, CTA, Footer, FooterCol, TweaksPanel });