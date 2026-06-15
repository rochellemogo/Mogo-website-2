const Branches = () => {
  // Organised by region. Coordinates are approximate lat/lng for a simple KE-shaped map.
  const regions = [
  { name: "Nairobi Metro", colour: "#7AB800", branches: [
    { n: "Nairobi CBD", x: .53, y: .55, addr: "Kimathi Street, CBD" }, { n: "Industrial Area", x: .54, y: .57, addr: "Enterprise Road" },
    { n: "Westlands", x: .52, y: .54, addr: "Waiyaki Way" }, { n: "Ngara", x: .53, y: .54, addr: "Ngara Road" },
    { n: "Kasarani", x: .54, y: .52, addr: "Thika Superhighway" }, { n: "Embakasi", x: .55, y: .57, addr: "Airport North Road" },
    { n: "Kitengela", x: .55, y: .60, addr: "Namanga Road" }, { n: "Rongai", x: .52, y: .58, addr: "Magadi Road" },
    { n: "Kiambu", x: .52, y: .52, addr: "Kiambu Road" }, { n: "Kikuyu", x: .51, y: .55, addr: "Kikuyu–Limuru Road" },
    { n: "Thika", x: .56, y: .50, addr: "Kenyatta Highway" }, { n: "Ruiru", x: .55, y: .53, addr: "Ruiru Bypass" },
    { n: "Limuru", x: .50, y: .53, addr: "Limuru Town" }, { n: "Juja", x: .56, y: .52, addr: "Thika Superhighway" },
    { n: "Machakos", x: .58, y: .60, addr: "Mombasa Road" }, { n: "Athi River", x: .56, y: .59, addr: "Mombasa Road" }]
  },
  { name: "Coast", colour: "#E96A3B", branches: [
    { n: "Mombasa", x: .76, y: .78, addr: "Moi Avenue, Mombasa" }, { n: "Nyali", x: .77, y: .77, addr: "Links Road, Nyali" },
    { n: "Likoni", x: .76, y: .79, addr: "Likoni Ferry Road" }, { n: "Kilifi", x: .78, y: .74, addr: "Mombasa–Malindi Road" },
    { n: "Malindi", x: .80, y: .72, addr: "Lamu Road" }, { n: "Mtwapa", x: .77, y: .77, addr: "Mombasa–Malindi Road" },
    { n: "Ukunda", x: .75, y: .82, addr: "Diani Beach Road" }, { n: "Voi", x: .68, y: .72, addr: "Mombasa–Nairobi Highway" },
    { n: "Mariakani", x: .74, y: .77, addr: "Mombasa–Nairobi Highway" }]
  },
  { name: "Central", colour: "#F4B93A", branches: [
    { n: "Nyeri", x: .52, y: .45, addr: "Kenyatta Road" }, { n: "Karatina", x: .53, y: .46, addr: "Karatina Town" },
    { n: "Muranga", x: .54, y: .48, addr: "Murang'a Town" }, { n: "Kerugoya", x: .55, y: .47, addr: "Kutus Road" },
    { n: "Embu", x: .57, y: .48, addr: "Embu–Meru Road" }, { n: "Meru", x: .58, y: .44, addr: "Meru–Maua Road" },
    { n: "Chuka", x: .57, y: .46, addr: "Embu–Meru Road" }, { n: "Maua", x: .60, y: .43, addr: "Maua Town" },
    { n: "Nanyuki", x: .54, y: .42, addr: "Nanyuki–Nyeri Road" }]
  },
  { name: "Rift Valley", colour: "#3B7CC9", branches: [
    { n: "Nakuru", x: .42, y: .52, addr: "Kenyatta Avenue" }, { n: "Naivasha", x: .47, y: .54, addr: "Moi South Lake Road" },
    { n: "Eldoret", x: .34, y: .42, addr: "Uganda Road" }, { n: "Kitale", x: .32, y: .38, addr: "Kitale–Eldoret Road" },
    { n: "Kericho", x: .36, y: .54, addr: "Kericho–Nakuru Road" }, { n: "Bomet", x: .37, y: .56, addr: "Sotik–Bomet Road" },
    { n: "Narok", x: .42, y: .58, addr: "Maasai Mara Road" }, { n: "Kapsabet", x: .34, y: .46, addr: "Kapsabet–Eldoret Road" },
    { n: "Iten", x: .36, y: .40, addr: "Iten–Kabarnet Road" }, { n: "Nyahururu", x: .48, y: .46, addr: "Nyahururu–Nakuru Road" },
    { n: "Molo", x: .40, y: .53, addr: "Molo–Elburgon Road" }]
  },
  { name: "Western & Nyanza", colour: "#8B5CF6", branches: [
    { n: "Kisumu", x: .30, y: .52, addr: "Oginga Odinga Street" }, { n: "Kakamega", x: .29, y: .46, addr: "Kakamega–Kisumu Road" },
    { n: "Bungoma", x: .28, y: .42, addr: "Bungoma–Webuye Road" }, { n: "Busia", x: .24, y: .44, addr: "Busia–Malaba Road" },
    { n: "Webuye", x: .30, y: .44, addr: "Webuye–Bungoma Road" }, { n: "Mumias", x: .27, y: .46, addr: "Mumias–Bungoma Road" },
    { n: "Kisii", x: .32, y: .58, addr: "Kisii–Migori Road" }, { n: "Migori", x: .30, y: .62, addr: "Migori–Isebania Road" },
    { n: "Homa Bay", x: .30, y: .58, addr: "Homa Bay–Kisumu Road" }, { n: "Siaya", x: .27, y: .50, addr: "Siaya–Bondo Road" },
    { n: "Awendo", x: .31, y: .60, addr: "Awendo–Migori Road" }]
  },
  { name: "Eastern & North", colour: "#D946A3", branches: [
    { n: "Kitui", x: .62, y: .58, addr: "Kitui–Mwingi Road" }, { n: "Mwingi", x: .63, y: .54, addr: "Mwingi–Garissa Road" },
    { n: "Garissa", x: .72, y: .54, addr: "Garissa Town" }, { n: "Isiolo", x: .60, y: .40, addr: "Isiolo–Meru Road" }]
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
    <section id="branches" style={{ padding: '60px 0', background: '#fff' }}>
      <div className="shell">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <h2 className="mega-head" style={{ fontSize: 'clamp(34px, 4.5vw, 60px)' }}>
              <span style={{ color: '#7ab800' }}>84+ branches</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--m-ink-2)', maxWidth: 520, margin: '16px 0 0' }}>Find us in person at one of the locations below.</p>
          </div>
        </div>

        <div data-branches-grid style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 24, alignItems: 'stretch' }}>
          {/* MAP */}
          <div data-branches-map style={{ background: 'var(--m-cream)', borderRadius: 'var(--r-xl)', padding: 16, border: '1px solid var(--m-line-2)', position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--m-line-2)' }}>
              {/* Google Maps embed — Kenya overview. For custom per-branch
                  pins clustered by region, swap this iframe for the JS Maps
                  API and provide a Google Maps key. */}
              <iframe
                title="Mogo Kenya branch network"
                src="https://www.google.com/maps?q=Mogo+Kenya&hl=en&z=6&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', filter: 'saturate(.9) contrast(.95)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* LIST */}
          <div data-branches-list style={{ background: '#fff', borderRadius: 'var(--r-xl)', border: '1px solid var(--m-line-2)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '13px 18px', borderBottom: '1px solid var(--m-line-2)', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--m-cream)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--m-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a town or neighbourhood…"
                style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 14, fontFamily: 'inherit', outline: 'none', color: 'var(--m-ink)' }} />
              {q && <button onClick={() => setQ("")} style={{ border: 'none', background: 'transparent', fontSize: 12, color: 'var(--m-ink-2)', cursor: 'pointer' }}>Clear</button>}
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0', minHeight: 0 }}>
              {filtered.length === 0 &&
                <div style={{ padding: '48px 20px', textAlign: 'center', color: 'var(--m-ink-2)', fontSize: 14 }}>
                  No branches match "{q}". Try Mombasa, Kisii or Meru.
                </div>
              }
              {filtered.map((r) =>
                <div key={r.name}>
                  <div style={{ padding: '9px 18px 6px', display: 'flex', alignItems: 'center', gap: 8, position: 'sticky', top: 0, background: '#fff', zIndex: 1, borderBottom: '1px solid var(--m-line-2)' }}>
                    <span style={{ width: 7, height: 7, borderRadius: 999, background: r.colour, flexShrink: 0 }} />
                    <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--m-ink-2)' }}>{r.name}</span>
                  </div>
                  <div>
                    {r.branches.map((b) =>
                      <a key={b.n} href="#apply" style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid var(--m-line-2)', color: 'var(--m-ink)', textDecoration: 'none' }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: r.colour, flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.25 }}>{b.n}</div>
                          <div style={{ fontSize: 12, color: 'var(--m-muted)', marginTop: 1 }}>{b.addr || '—'}</div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

const CTA = () =>
<section id="apply" style={{ padding: '80px 0', background: 'var(--m-cream)' }}>
    <div className="shell">
      <div data-cta-card style={{ background: 'var(--m-ink)', borderRadius: 'var(--r-xl)', padding: '96px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: -100, width: 360, height: 360, borderRadius: 999, background: 'var(--m-green)', opacity: .22, filter: 'blur(80px)' }} />
        <div data-cta-spinner style={{ position: 'absolute', right: 48, top: 48, width: 160, height: 160, animation: 'spin 20s linear infinite' }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            <defs><path id="cp2" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" /></defs>
            <text fontFamily="JetBrains Mono" fontSize="6.5" letterSpacing="1.6" fill="#7AB800">
              <textPath href="#cp2" startOffset="0">APPLY · GET APPROVED · RIDE HOME · OWN IT ·  </textPath>
            </text>
          </svg>
        </div>
        <div style={{ position: 'relative', maxWidth: 700 }}>
          <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6.5vw, 96px)', color: '#fff', margin: '0 0 24px', fontWeight: 600, letterSpacing: '-.035em', lineHeight: .98 }}>
            Your wheels<br />are <em style={{ fontStyle: 'italic', color: 'var(--m-green)', fontWeight: 400 }}>waiting.</em>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.72)', lineHeight: 1.55, marginBottom: 40, maxWidth: 520 }}>
            Three-minute form. Real call from a MOGO officer same day. Get your loan today.
          </p>
          <div data-cta-buttons style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary btn-lg">Apply online <span className="arrow-pill"><ArrowRight /></span></a>
            <a href="tel:0709719000" className="btn btn-ghost-light btn-lg">Call · 0709 719 000</a>
          </div>
        </div>
      </div>
    </div>
  </section>;


const Footer = () =>
<>
<footer data-mogo-footer style={{ background: 'var(--m-ink)', color: 'rgba(255,255,255,.7)', padding: '80px 0 32px' }}>
    <div className="shell">
      <div data-footer-cols style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        <div>
          <img src={(window.__resources && window.__resources.mogoLogo) || (window.__MOGO_SUBPAGE ? "../assets/mogo-logo.svg" : "assets/mogo-logo.svg")} alt="mogo" style={{ height: 28, marginBottom: 20 }} />
          <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 340 }}>
            Mogo Auto Kenya Ltd. Part of Eleving Group — a fintech operating in 15 countries across three continents. Building a Kenya where every hustle has the wheels it needs.
          </p>

          {/* Contact details */}
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13.5, lineHeight: 1.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 3.5a1.5 1.5 0 011.5-1.5h1.7a1 1 0 011 .76l.5 2a1 1 0 01-.27.95l-.9.9a8 8 0 003.86 3.86l.9-.9a1 1 0 01.95-.27l2 .5a1 1 0 01.76 1V12a1.5 1.5 0 01-1.5 1.5A11.5 11.5 0 012 3.5z" stroke="rgba(255,255,255,.7)" strokeWidth="1.4"/></svg>
              <a href="tel:+254709997000" style={{ color: '#fff', textDecoration: 'none' }}>+254 709 997 000</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 7.5l5.5-3.5M1.5 4l5.5 3.5L12.5 4M1.5 4v6a1 1 0 001 1h9a1 1 0 001-1V4a1 1 0 00-1-1h-9a1 1 0 00-1 1z" stroke="rgba(255,255,255,.7)" strokeWidth="1.3"/></svg>
              <a href="mailto:info@mogo.co.ke" style={{ color: '#fff', textDecoration: 'none' }}>info@mogo.co.ke</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{marginTop:3}}><path d="M7 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.4 4.5 6.5 4.5 6.5s4.5-3.1 4.5-6.5c0-2.5-2-4.5-4.5-4.5z" stroke="rgba(255,255,255,.7)" strokeWidth="1.3"/><circle cx="7" cy="6" r="1.5" stroke="rgba(255,255,255,.7)" strokeWidth="1.3"/></svg>
              <div>Pinetree Plaza, 4th, 5th &amp;<br/>6th Floor, Nairobi, Kenya</div>
            </div>
          </div>

          {/* Play Store badge */}
          <a href="https://play.google.com/store/apps/details?id=com.mogo.kenya" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 24, padding: '10px 16px', background: '#000', border: '1px solid rgba(255,255,255,.2)', borderRadius: 8, textDecoration: 'none', color: '#fff' }}>
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden="true">
              <path d="M1.4.5l11.2 11.5L1.4 23.5a1.5 1.5 0 01-.9-1.4V1.9a1.5 1.5 0 01.9-1.4z" fill="#00d2ff"/>
              <path d="M16.4 8.4l-3.8 3.6 3.8 3.6 4.2-2.4a1.5 1.5 0 000-2.4l-4.2-2.4z" fill="#ffce00"/>
              <path d="M1.4.5l11.2 11.5 3.8-3.6L3.3.4a1.5 1.5 0 00-1.9.1z" fill="#00f076"/>
              <path d="M1.4 23.5l11.2-11.5 3.8 3.6L3.3 23.6a1.5 1.5 0 01-1.9-.1z" fill="#ff3a44"/>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>Get it on</span>
              <span style={{ fontSize: 16, fontWeight: 600 }}>Google Play</span>
            </div>
          </a>

          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
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
      <div data-footer-bottom style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, flexWrap: 'wrap', gap: 16 }}>
        <div>© 2026 Mogo Auto Kenya Ltd. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <span>Licensed by the Central Bank of Kenya</span>
        </div>
      </div>
    </div>
  </footer>
<WhatsAppFab/>
</>;


const FooterCol = ({ title, links }) =>
<div>
    <div style={{ fontSize: 12, fontFamily: 'inherit', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 16 }}>{title}</div>
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
    <div data-tweaks-panel style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100, background: '#fff', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,.2)', border: '1px solid var(--m-line)', width: open ? 280 : 'auto' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600, fontSize: 14 }}>
        Tweaks <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▾</span>
      </button>
      {open &&
      <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid var(--m-line)', paddingTop: 14 }}>
          <div>
            <label style={{ fontSize: 11, fontFamily: 'inherit', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--m-muted)', display: 'block', marginBottom: 8 }}>Primary green</label>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#7AB800', '#5C8A00', '#8FD600', '#4CAF50'].map((c) =>
            <button key={c} onClick={() => set('--m-green', c)} style={{ width: 28, height: 28, borderRadius: 8, background: c, border: '2px solid #fff', outline: '1px solid var(--m-line)' }} />
            )}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 11, fontFamily: 'inherit', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--m-muted)', display: 'block', marginBottom: 8 }}>Cream warmth</label>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#F4EFE3', '#FFFFFF', '#ECE5D2', '#FBF7EC', '#EDE7F2'].map((c) =>
            <button key={c} onClick={() => set('--m-cream', c)} style={{ width: 28, height: 28, borderRadius: 8, background: c, border: '2px solid #fff', outline: '1px solid var(--m-line)' }} />
            )}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 11, fontFamily: 'inherit', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--m-muted)', display: 'block', marginBottom: 8 }}>Display font</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
            { l: 'Poppins (modern fintech)', v: '"Poppins", sans-serif' },
            { l: 'Inter Tight', v: '"Inter Tight", sans-serif' },
            { l: 'Space Grotesk', v: '"Space Grotesk", sans-serif' },
            { l: 'Instrument Serif', v: 'var(--font-accent)' }].
            map((f) =>
            <button key={f.l} onClick={() => set('--font-display', f.v)} style={{ padding: '8px 10px', textAlign: 'left', fontSize: 13, border: '1px solid var(--m-line)', borderRadius: 8, background: '#fff' }}>{f.l}</button>
            )}
            </div>
          </div>
        </div>
      }
    </div>);

};

const WhatsAppFab = () => (
  <a
    href="https://wa.me/254709997000"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Mogo on WhatsApp"
    style={{
      position: 'fixed', right: 22, bottom: 22, zIndex: 90,
      width: 60, height: 60, borderRadius: 999,
      background: '#25D366',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 14px 32px rgba(37,211,102,.45), 0 4px 10px rgba(0,0,0,.2)',
      textDecoration: 'none', color: '#fff',
      transition: 'transform .15s',
    }}
    onMouseEnter={(e)=>e.currentTarget.style.transform='scale(1.06)'}
    onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}
  >
    <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.7 2 6.7L4 29l7.5-2c1.9 1 4.1 1.6 6.5 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-2.1 0-4-.6-5.7-1.6l-.4-.2-4.4 1.2 1.2-4.3-.3-.4A9.95 9.95 0 016 15c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/>
    </svg>
  </a>
);

Object.assign(window, { Branches, CTA, Footer, FooterCol, TweaksPanel, WhatsAppFab });