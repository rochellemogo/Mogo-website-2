// FT / Statista award badge — rendered inline to match the official badge design
const FTBadge = ({ title }) => (
  <div style={{
    display:'inline-flex', alignItems:'stretch',
    border:'2px solid #F2BFA0', borderRadius:8,
    background:'#fff', overflow:'hidden',
    fontSize:0, // reset
  }}>
    {/* Left: FT + Statista logos */}
    <div style={{
      display:'flex', flexDirection:'column', justifyContent:'center', gap:8,
      padding:'10px 14px', borderRight:'1.5px solid #e8cbb8',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:7}}>
        <div style={{
          background:'#F2BFA0', width:28, height:28, display:'grid', placeItems:'center',
          fontFamily:'Georgia, serif', fontWeight:900, fontSize:15, color:'#1a1a1a', flexShrink:0,
        }}>FT</div>
        <div style={{fontSize:8.5, fontWeight:700, letterSpacing:'.05em', lineHeight:1.3, color:'#1a1a1a'}}>
          FINANCIAL<br/>TIMES
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:4}}>
        <span style={{fontSize:11, fontWeight:700, color:'#003478', letterSpacing:'-.01em'}}>statista</span>
        <svg width="13" height="13" viewBox="0 0 20 20" fill="#003478"><path d="M2 14h4v4H2zM8 9h4v9H8zM14 4h4v14h-4z"/></svg>
      </div>
    </div>
    {/* Divider + title */}
    <div style={{
      display:'flex', alignItems:'center',
      padding:'10px 14px',
    }}>
      <div style={{
        fontSize:10, fontWeight:900, lineHeight:1.25, color:'#1a1a1a',
        letterSpacing:'.02em', whiteSpace:'pre-line', textTransform:'uppercase',
      }}>{title}</div>
    </div>
  </div>
);

// "Safari Yetu" — Mogo Kenya company timeline
// Horizontal scrollable on desktop with alternating above/below nodes.
// Stacks vertically on mobile (handled in mobile.css).

const SAFARI_YETU = [
  { year:'2019', title:'A Bold Entry into Africa', body:'Entered Kenya and Uganda markets with car financing and car logbook loans. Built for ride-hailing drivers and daily commuters.', issuance:'KES 349M', customers:'737' },
  { year:'2020', title:'Unlocking Everyday Income', body:'Launched boda boda financing and opened to a wider customer base beyond ride-hailing. 12,000+ customers by year end.', issuance:'KES 1.4B', customers:'12,051' },
  { year:'2021', title:'Building the Foundation',     body:'Expanded into new regions. Grew team and operational capacity across the country.', issuance:'KES 4.7B', customers:'50,001' },
  { year:'2022', title:'Strengthening the Core',     body:'Improved operational efficiency and optimised product structure. Focused on reaching sustainable scale.', issuance:'KES 4.5B', customers:'86,552' },
  { year:'2023', title:'Choosing Resilience',         body:'A difficult year — rising cost of living and currency depreciation. Tightened credit policies, reduced costs, and kept the business stable.', issuance:'KES 3.7B', customers:'116,774' },
  { year:'2024', title:'Building Trust & Expanding Horizons', body:'Achieved CBK approval as a digital lender. Launched boda boda and tuk-tuk logbook loans. Over 1,000 new product issuances in the year.', issuance:'KES 5.3B', customers:'143,063' },
  { year:'2025', title:'Accelerating Impact',         body:'Presence in 32 counties with 88 branches. Team grew from 600 to 1,500+ employees. Launched Check-Off Loans, Smartphone Loans and the MyMOGO App.', issuance:'KES 10.7B', customers:'302,496' },
];

const SafariYetu = () => {
  const scrollerRef = React.useRef(null);
  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({left: dir * 480, behavior:'smooth'});
  };

  return (
    <section data-safari-yetu style={{padding:'104px 0 88px', background:'var(--m-cream)', overflow:'hidden'}}>
      <div className="shell" style={{marginBottom: 48}}>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:24}}>
          <div>
            <div className="h-eyebrow"><span className="dot" style={{background:'#7AB800'}}/>mogo SAFARI YETU</div>
            <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)', marginTop:14}}>Our <em>journey</em><br/>so far.</h2>
            <p style={{fontSize:17, color:'var(--m-ink-2)', lineHeight:1.6, marginTop:18, maxWidth:600}}>
              From a single product in 2019 to 88 branches and 300,000+ customers — here's how Mogo Kenya grew alongside the people we finance.
            </p>
            <div style={{display:'flex', gap:12, marginTop:24, flexWrap:'wrap'}}>
              <FTBadge title={'EUROPE\'S\nLONG-TERM GROWTH\nCHAMPIONS 2025'} />
              <FTBadge title={'1000 EUROPE\'S\nFASTEST GROWING\nCOMPANIES'} />
            </div>
          </div>
          <div className="safari-arrows" style={{display:'flex', gap:8}}>
            <button onClick={()=>scrollBy(-1)} aria-label="Previous milestone" style={arrowBtnStyle}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <button onClick={()=>scrollBy(1)}  aria-label="Next milestone"     style={arrowBtnStyle}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </div>
        </div>
      </div>

      <div className="safari-scroll" ref={scrollerRef} style={{
        position:'relative',
        overflowX:'auto', overflowY:'hidden',
        scrollSnapType:'x mandatory',
        WebkitOverflowScrolling:'touch',
        scrollbarWidth:'none',
        paddingBottom: 24,
      }}>
        <div className="safari-track" style={{
          position:'relative',
          display:'flex',
          minHeight: 700,
          paddingLeft: 'max(120px, 10vw)',
          paddingRight: 'max(40px, 6vw)',
          width:'max-content',
        }}>
          {/* Horizontal spine */}
          <div className="safari-spine" style={{
            position:'absolute',
            top: 340,
            left: 0, right: 0,
            height: 3,
            background:'var(--m-ink)',
            borderRadius: 2,
            zIndex: 0,
          }}/>

          {SAFARI_YETU.map((m, i) => {
            const above = i % 2 === 0;
            // Card geometry: card height ~300, spine at y=340
            const CARD_H = 300;
            const SPINE_Y = 340;
            const GAP = 28;            // gap between card and spine
            const cardTop = above ? (SPINE_Y - GAP - CARD_H) : (SPINE_Y + GAP);

            return (
              <div key={m.year} className="safari-node" style={{
                position:'relative',
                width: 320, flex:'0 0 320px',
                marginRight: 28,
                scrollSnapAlign:'start',
                height: 680,
              }}>
                {/* Card */}
                <div className={`safari-card ${above ? 'is-above' : 'is-below'}`} style={{
                  position:'absolute',
                  left: 0, right: 0,
                  top: cardTop,
                  height: CARD_H,
                  background:'#fff',
                  border:'1px solid var(--m-line-2)',
                  borderRadius: 'var(--r-xl)',
                  padding: 22,
                  boxShadow:'0 8px 28px rgba(11,18,32,.06)',
                  zIndex: 2,
                  display:'flex', flexDirection:'column',
                }}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
                    <div style={{
                      fontFamily:'var(--font-display)',
                      fontSize: 36, fontWeight: 900,
                      color:'#7AB800',
                      letterSpacing:'-.02em',
                      lineHeight: 1,
                    }}>{m.year}</div>
                  </div>
                  <h3 style={{fontSize: 18, fontWeight: 700, letterSpacing:'-.01em', margin:'0 0 8px', color:'var(--m-ink)'}}>{m.title}</h3>
                  <p style={{fontSize: 13, lineHeight: 1.5, color:'var(--m-ink-2)', margin:0, flex:1}}>{m.body}</p>

                  {/* Metrics */}
                  <div style={{display:'flex', gap: 10, marginTop: 14, paddingTop: 12, borderTop:'1px dashed var(--m-line-2)'}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:9.5, fontFamily: 'inherit', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:3}}>Issuances</div>
                      <div style={{fontSize: 16, fontWeight: 700, color:'#7AB800', fontFamily:'var(--font-display)', letterSpacing:'-.01em'}}>{m.issuance}</div>
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:9.5, fontFamily: 'inherit', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:3}}>Customers</div>
                      <div style={{fontSize: 16, fontWeight: 700, color:'#003478', fontFamily:'var(--font-display)', letterSpacing:'-.01em'}}>{m.customers}</div>
                    </div>
                  </div>
                </div>

                {/* Connector line from card edge to spine */}
                <div className="safari-connector" style={{
                  position:'absolute',
                  left: 159, /* center of node (320/2 - 1px) */
                  top: above ? (SPINE_Y - GAP) : SPINE_Y,
                  width: 2,
                  height: GAP,
                  background:'var(--m-ink)',
                  zIndex: 1,
                }}/>

                {/* Node circle on the spine */}
                <div className="safari-dot" style={{
                  position:'absolute',
                  left: 144, /* (320-32)/2 */
                  top: SPINE_Y - 16,
                  width: 32, height: 32,
                  borderRadius: 999,
                  background:'#fff',
                  border:'3px solid #7AB800',
                  zIndex: 3,
                  display:'grid', placeItems:'center',
                }}>
                  <span style={{width:10, height:10, borderRadius:999, background:'#7AB800', display:'block'}}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const arrowBtnStyle = {
  width: 42, height: 42, borderRadius: 999,
  background:'#fff', border:'1px solid var(--m-line-2)',
  cursor:'pointer', display:'grid', placeItems:'center',
  color:'var(--m-ink)',
};

Object.assign(window, { SafariYetu, SAFARI_YETU });

// ─── DealersModal ─────────────────────────────────────────────────────────────
const DEALER_REGIONS = [
  { name: "Nairobi Metro", colour: "#7AB800", branches: [
    { n: "Nairobi CBD", addr: "Kimathi Street, CBD" }, { n: "Industrial Area", addr: "Enterprise Road" },
    { n: "Westlands", addr: "Waiyaki Way" }, { n: "Ngara", addr: "Ngara Road" },
    { n: "Kasarani", addr: "Thika Superhighway" }, { n: "Embakasi", addr: "Airport North Road" },
    { n: "Kitengela", addr: "Namanga Road" }, { n: "Rongai", addr: "Magadi Road" },
    { n: "Kiambu", addr: "Kiambu Road" }, { n: "Kikuyu", addr: "Kikuyu–Limuru Road" },
    { n: "Thika", addr: "Kenyatta Highway" }, { n: "Ruiru", addr: "Ruiru Bypass" },
    { n: "Limuru", addr: "Limuru Town" }, { n: "Juja", addr: "Thika Superhighway" },
    { n: "Machakos", addr: "Mombasa Road" }, { n: "Athi River", addr: "Mombasa Road" }] },
  { name: "Coast", colour: "#E96A3B", branches: [
    { n: "Mombasa", addr: "Moi Avenue, Mombasa" }, { n: "Nyali", addr: "Links Road, Nyali" },
    { n: "Likoni", addr: "Likoni Ferry Road" }, { n: "Kilifi", addr: "Mombasa–Malindi Road" },
    { n: "Malindi", addr: "Lamu Road" }, { n: "Mtwapa", addr: "Mombasa–Malindi Road" },
    { n: "Ukunda", addr: "Diani Beach Road" }, { n: "Voi", addr: "Mombasa–Nairobi Highway" },
    { n: "Mariakani", addr: "Mombasa–Nairobi Highway" }] },
  { name: "Central", colour: "#F4B93A", branches: [
    { n: "Nyeri", addr: "Kenyatta Road" }, { n: "Karatina", addr: "Karatina Town" },
    { n: "Muranga", addr: "Murang'a Town" }, { n: "Kerugoya", addr: "Kutus Road" },
    { n: "Embu", addr: "Embu–Meru Road" }, { n: "Meru", addr: "Meru–Maua Road" },
    { n: "Chuka", addr: "Embu–Meru Road" }, { n: "Maua", addr: "Maua Town" },
    { n: "Nanyuki", addr: "Nanyuki–Nyeri Road" }] },
  { name: "Rift Valley", colour: "#3B7CC9", branches: [
    { n: "Nakuru", addr: "Kenyatta Avenue" }, { n: "Naivasha", addr: "Moi South Lake Road" },
    { n: "Eldoret", addr: "Uganda Road" }, { n: "Kitale", addr: "Kitale–Eldoret Road" },
    { n: "Kericho", addr: "Kericho–Nakuru Road" }, { n: "Bomet", addr: "Sotik–Bomet Road" },
    { n: "Narok", addr: "Maasai Mara Road" }, { n: "Kapsabet", addr: "Kapsabet–Eldoret Road" },
    { n: "Iten", addr: "Iten–Kabarnet Road" }, { n: "Nyahururu", addr: "Nyahururu–Nakuru Road" },
    { n: "Molo", addr: "Molo–Elburgon Road" }] },
  { name: "Western & Nyanza", colour: "#8B5CF6", branches: [
    { n: "Kisumu", addr: "Oginga Odinga Street" }, { n: "Kakamega", addr: "Kakamega–Kisumu Road" },
    { n: "Bungoma", addr: "Bungoma–Webuye Road" }, { n: "Busia", addr: "Busia–Malaba Road" },
    { n: "Webuye", addr: "Webuye–Bungoma Road" }, { n: "Mumias", addr: "Mumias–Bungoma Road" },
    { n: "Kisii", addr: "Kisii–Migori Road" }, { n: "Migori", addr: "Migori–Isebania Road" },
    { n: "Homa Bay", addr: "Homa Bay–Kisumu Road" }, { n: "Siaya", addr: "Siaya–Bondo Road" },
    { n: "Awendo", addr: "Awendo–Migori Road" }] },
  { name: "Eastern & North", colour: "#D946A3", branches: [
    { n: "Kitui", addr: "Kitui–Mwingi Road" }, { n: "Mwingi", addr: "Mwingi–Garissa Road" },
    { n: "Garissa", addr: "Garissa Town" }, { n: "Isiolo", addr: "Isiolo–Meru Road" }] },
];

const DEALER_COPY = {
  dealers: {
    eyebrow: 'Where to apply',
    em: 'dealers', before: 'Eligible ', after: ' near you.',
    sub: 'Smartphone loans are completed in person. Walk into any participating phone shop below, pick your device, and apply with the sales agent — the whole process takes 30 minutes or less.',
    mapLabel: 'Mogo Kenya · dealer network',
    noMatch: 'No dealers match',
  },
  branches: {
    eyebrow: 'Find us',
    em: 'branch', before: 'Find a ', after: ' near you.',
    sub: 'Fill in the application form, then walk into your nearest Mogo boda branch or partner dealership with your logbook and ID. Search or filter the network below.',
    mapLabel: 'Mogo Kenya · branch network',
    noMatch: 'No branches match',
  },
  warehouses: {
    eyebrow: 'Used stock',
    em: 'warehouses', before: 'Mogo ', after: ' near you.',
    sub: 'Browse second-hand boda bodas at Mogo warehouses. Pick any available model, pay a down payment from KES 22,000, and start riding within 2 hours.',
    mapLabel: 'Mogo Kenya · warehouse network',
    noMatch: 'No warehouses match',
  },
};

const DealersModal = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("All");
  const [q, setQ] = React.useState("");
  const [variant, setVariant] = React.useState('dealers');

  React.useEffect(() => {
    window.openDealersModal = (v) => { setVariant(v || 'dealers'); setActive("All"); setQ(""); setOpen(true); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href === '#dealers' || href.endsWith('#dealers')) {
        e.preventDefault();
        setVariant('dealers'); setActive("All"); setQ(""); setOpen(true);
      } else if (href === '#branch-map' || href.endsWith('#branch-map')) {
        e.preventDefault();
        setVariant('branches'); setActive("All"); setQ(""); setOpen(true);
      } else if (href === '#warehouse-map' || href.endsWith('#warehouse-map')) {
        e.preventDefault();
        setVariant('warehouses'); setActive("All"); setQ(""); setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const total = DEALER_REGIONS.reduce((a, r) => a + r.branches.length, 0);
  const filtered = DEALER_REGIONS
    .filter((r) => active === "All" || r.name === active)
    .map((r) => ({ ...r, branches: r.branches.filter((b) => b.n.toLowerCase().includes(q.toLowerCase())) }))
    .filter((r) => r.branches.length);
  const shown = filtered.reduce((a, r) => a + r.branches.length, 0);
  const activeColour = active === "All" ? "var(--m-green-ink)" : DEALER_REGIONS.find((r) => r.name === active)?.colour || "var(--m-green-ink)";
  const copy = DEALER_COPY[variant] || DEALER_COPY.dealers;

  return (
    <div role="dialog" aria-modal="true" aria-label="Eligible Mogo dealers"
      onClick={() => setOpen(false)}
      style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(11,18,32,.55)', backdropFilter:'blur(6px)', display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'48px 24px', overflowY:'auto', animation:'apply-fade .2s ease' }}>
      <div onClick={(e) => e.stopPropagation()} data-dealers-card
        style={{ background:'#fff', borderRadius:'var(--r-xl)', maxWidth: 960, width:'100%', boxShadow:'0 30px 80px rgba(11,18,32,.35)', position:'relative', margin:'auto', animation:'apply-pop .25s ease', overflow:'hidden' }}>
        <button onClick={() => setOpen(false)} aria-label="Close"
          style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:999, border:'none', background:'var(--m-cream)', color:'var(--m-ink)', cursor:'pointer', display:'grid', placeItems:'center', fontSize:18, zIndex: 3 }}>
          ×
        </button>
        <div style={{ padding:'32px 36px 24px', borderBottom:'1px solid var(--m-line-2)' }}>
          <div className="h-eyebrow" style={{ marginBottom: 10 }}><span className="dot"/>{copy.eyebrow}</div>
          <h3 className="h-display" style={{ fontSize:'clamp(26px, 3.5vw, 38px)', lineHeight:1.02, letterSpacing:'-.025em', margin:'0 0 10px', fontWeight:500 }}>
            {copy.before}<em style={{ fontStyle:'italic', color:'var(--m-green-ink)', fontWeight:400, paddingRight:'.4em' }}>{copy.em}</em>{copy.after}
          </h3>
          <p style={{ fontSize:14.5, color:'var(--m-ink-2)', lineHeight:1.55, margin:0, maxWidth: 620 }}>
            {copy.sub}
          </p>
        </div>
        <div data-dealers-grid style={{ display:'grid', gridTemplateColumns:'1.05fr 1fr', gap: 0 }}>
          <div style={{ padding:'24px 28px', borderRight:'1px solid var(--m-line-2)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform:'uppercase', letterSpacing:'.12em', color:'var(--m-ink-2)' }}>{copy.mapLabel}</div>
              <div style={{ fontSize: 11, fontFamily:'JetBrains Mono', color:'var(--m-ink-2)' }}>{total} locations</div>
            </div>
            <div style={{ position:'relative', aspectRatio:'1/1', borderRadius:'var(--r-lg)', overflow:'hidden', border:'1px solid var(--m-line-2)' }}>
              <iframe
                title="Mogo Kenya dealer network"
                src="https://www.google.com/maps?q=Mogo+Kenya&hl=en&z=6&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display:'block', filter:'saturate(.9) contrast(.95)' }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap: 6, marginTop: 16 }}>
              <button onClick={() => setActive("All")} style={{ padding:'6px 11px', background: active === "All" ? 'var(--m-ink)' : '#fff', color: active === "All" ? '#fff' : 'var(--m-ink)', border:'1px solid var(--m-line-2)', borderRadius: 999, fontSize: 11.5, fontWeight: 600, cursor:'pointer' }}>All · {total}</button>
              {DEALER_REGIONS.map((r) => (
                <button key={r.name} onClick={() => setActive(r.name)} style={{ padding:'6px 11px', background: active === r.name ? r.colour : '#fff', color: active === r.name ? '#fff' : 'var(--m-ink)', border:'1px solid var(--m-line-2)', borderRadius: 999, fontSize: 11.5, fontWeight: 600, cursor:'pointer', display:'inline-flex', alignItems:'center', gap: 6 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: active === r.name ? '#fff' : r.colour }}/>
                  {r.name} · {r.branches.length}
                </button>
              ))}
            </div>
          </div>
          <div data-dealers-list style={{ display:'flex', flexDirection:'column', overflow:'hidden' }}>
            <div style={{ padding:'16px 24px', borderBottom:'1px solid var(--m-line-2)', display:'flex', alignItems:'center', gap: 12, background:'var(--m-cream)' }}>
              <span style={{ fontSize: 14 }}>🔍</span>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a town or neighbourhood…"
                style={{ flex: 1, border:'none', background:'transparent', fontSize: 14.5, fontFamily:'inherit', outline:'none', color:'var(--m-ink)' }}/>
              {q && <button onClick={() => setQ("")} style={{ border:'none', background:'transparent', fontSize: 12.5, color:'var(--m-ink-2)', cursor:'pointer' }}>Clear</button>}
            </div>
            <div style={{ flex: 1, maxHeight: 420, minHeight: 280, overflowY:'auto', padding:'4px 0' }}>
              {filtered.length === 0 && (
                <div style={{ padding:'60px 24px', textAlign:'center', color:'var(--m-ink-2)', fontSize: 14 }}>
                  {copy.noMatch} "{q}". Try Mombasa, Kisii or Meru.
                </div>
              )}
              {filtered.map((r) => (
                <div key={r.name}>
                  <div style={{ padding:'12px 24px 7px', display:'flex', alignItems:'center', gap: 8, position:'sticky', top: 0, background:'#fff', zIndex: 1, borderBottom:'1px solid var(--m-line-2)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: r.colour }}/>
                    <span style={{ fontSize: 10.5, fontWeight: 700, textTransform:'uppercase', letterSpacing:'.14em', color:'var(--m-ink)' }}>{r.name}</span>
                    <span style={{ fontSize: 10.5, fontFamily:'JetBrains Mono', color:'var(--m-ink-2)', marginLeft:'auto' }}>{r.branches.length}</span>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column' }}>
                    {r.branches.map((b) => (
                      <div key={b.n} style={{ padding:'13px 24px', display:'flex', alignItems:'flex-start', gap: 12, borderBottom:'1px solid var(--m-line-2)', color:'var(--m-ink)' }}>
                        <span style={{ width: 8, height: 8, borderRadius: 999, background: r.colour, marginTop: 6, flexShrink: 0 }}/>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{b.n}</div>
                          <div style={{ fontSize: 12, color:'var(--m-muted)', lineHeight: 1.4, marginTop: 2 }}>{b.addr || '—'}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding:'13px 24px', borderTop:'1px solid var(--m-line-2)', background:'var(--m-cream)', fontSize: 12, color:'var(--m-ink-2)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span>Open Mon–Sat · Call centre 24/7</span>
              <span style={{ fontFamily:'JetBrains Mono', fontWeight: 600, color: activeColour }}>{shown} shown</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          [data-dealers-grid] { grid-template-columns: 1fr !important; }
          [data-dealers-grid] > div:first-child { border-right: none !important; border-bottom: 1px solid var(--m-line-2) !important; }
        }
      `}</style>
    </div>
  );
};

Object.assign(window, { DealersModal });
