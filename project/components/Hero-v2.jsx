// v2 Hero — applies "Finance Your Future / Jenga Kesho" brand strategy
const HeroV2 = () =>
<section data-mogo-hero data-screen-label="Hero" style={{ position: 'relative', overflow: 'hidden', marginTop: -80, paddingTop: 80, background: 'var(--m-ink)', color: '#fff' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <img src="/uploads/mogo-outdoor-shoot-28.jpg" alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,32,.72) 0%, rgba(11,18,32,.42) 45%, rgba(11,18,32,.78) 100%)' }} />
    </div>

    <div className="shell" style={{ position: 'relative', zIndex: 2, padding: '120px 28px 180px' }}>
      <h1 className="h-display" style={{ fontSize: 'clamp(72px, 10vw, 190px)', lineHeight: .9, letterSpacing: '-.045em', margin: '0 0 8px', maxWidth: 1240, textTransform: 'uppercase', fontWeight: 700 }}>
        Finance
        <span style={{ color: 'var(--m-green)' }}> your future.</span>
      </h1>
      <div data-hero-jenga style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(26px, 3vw, 46px)', color: 'rgba(255,255,255,.8)', margin: '18px 0 0', letterSpacing: '-.02em' }}>
        Jenga kesho.
      </div>

      <p data-hero-blurb style={{ fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,.78)', maxWidth: 620, margin: '36px 0 40px' }}>We finance the bike, the car, the phone and the shop — the assets Kenyans use to earn.
    </p>

      <div data-hero-cta style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href="#apply" className="btn btn-primary btn-lg">Start here. Go further. <span className="arrow-pill"><ArrowRight /></span></a>
        <a href="#products" className="btn btn-ghost-light btn-lg">What we finance</a>
      </div>
    </div>

    <div data-hero-corner style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 3, display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,.6)', fontSize: 12, fontFamily: 'inherit', letterSpacing: '.14em', textTransform: 'uppercase' }}>
      <span>Access · Earn · Grow</span>
      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 4v16M6 14l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  </section>;


const InvestorStripV2 = () => {
  const logos = ['Boxer Motors', 'TVS Kenya', 'Bajaj', 'Honda', 'Tecno', 'Infinix', 'Itel', 'Samsung'];
  return (
    <section data-mogo-strip style={{ padding: '36px 0', background: '#fff', borderBottom: '1px solid var(--m-line)' }}>
      <div className="shell" style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--m-muted)', whiteSpace: 'nowrap' }}>BRANDS WE WORK WITH</span>
        <div style={{ overflow: 'hidden', flex: 1, maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' }}>
          <div className="marquee">
            {[...logos, ...logos].map((l, i) =>
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--m-ink-2)', letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>{l}</span>
            )}
          </div>
        </div>
      </div>
    </section>);

};

Object.assign(window, { HeroV2, InvestorStripV2 });