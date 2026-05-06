const Hero = () =>
<section style={{ position: 'relative', overflow: 'hidden', marginTop: -80, paddingTop: 80, background: 'var(--m-ink)', color: '#fff' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="dusk" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFB37A" />
            <stop offset="30%" stopColor="#E8814A" />
            <stop offset="65%" stopColor="#5A2E44" />
            <stop offset="100%" stopColor="#0B1220" />
          </linearGradient>
          <radialGradient id="sun" cx="78%" cy="38%" r="28%">
            <stop offset="0%" stopColor="#FFE1B3" />
            <stop offset="100%" stopColor="#FFE1B3" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#dusk)" />
        <rect width="1440" height="900" fill="url(#sun)" />
        {/* horizon city silhouette */}
        <path d="M0 700 L0 900 L1440 900 L1440 680 L1380 680 L1380 640 L1340 640 L1340 670 L1280 670 L1280 620 L1220 620 L1220 650 L1160 650 L1160 600 L1100 600 L1100 660 L1040 660 L1040 630 L960 630 L960 670 L880 670 L880 640 L800 640 L800 680 L720 680 L720 650 L640 650 L640 690 L560 690 L560 660 L480 660 L480 700 L400 700 L400 670 L320 670 L320 700 L240 700 L240 680 L160 680 L160 700 L80 700 L80 690 Z" fill="#0B1220" opacity=".75" />
        {/* riders */}
        <g transform="translate(480, 620)" fill="#0B1220" opacity=".9">
          <circle cx="30" cy="60" r="22" /><circle cx="30" cy="60" r="12" fill="#E8814A" />
          <circle cx="160" cy="60" r="22" /><circle cx="160" cy="60" r="12" fill="#E8814A" />
          <path d="M20 52 L70 14 L130 14 L170 52 L140 52 L120 28 L80 28 L55 52 Z" />
          <rect x="88" y="6" width="24" height="14" rx="3" />
          <rect x="92" y="-10" width="16" height="16" rx="8" />
        </g>
        <g transform="translate(780, 640) scale(.7)" fill="#0B1220" opacity=".7">
          <circle cx="30" cy="60" r="22" /><circle cx="160" cy="60" r="22" />
          <path d="M20 52 L70 14 L130 14 L170 52 L140 52 L120 28 L80 28 L55 52 Z" />
          <rect x="92" y="-10" width="16" height="16" rx="8" />
        </g>
      </svg>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,32,.2) 0%, transparent 30%, rgba(11,18,32,.5) 85%, var(--m-ink) 100%)' }} />
    </div>

    <div className="shell" style={{ position: 'relative', zIndex: 2, padding: '120px 28px 180px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', backdropFilter: 'blur(10px)', marginBottom: 32, fontSize: 13 }}>
        <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--m-green)', boxShadow: '0 0 0 3px rgba(122,184,0,.25)' }} />
        60,000+ Kenyans financed with MOGO · Bodas, phones, cash & more
      </div>

      <h1 className="h-display" style={{ fontSize: 'clamp(60px, 8vw, 148px)', lineHeight: .92, letterSpacing: '-.04em', margin: '0 0 8px', maxWidth: 1180, textTransform: 'uppercase', fontWeight: 700 }}>
        Financing the
        <span style={{ color: 'var(--m-green)' }}> hustle </span>
        of everyday Kenya.
      </h1>

      <p style={{ fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,.75)', maxWidth: 580, margin: '32px 0 40px' }}>
        From your first boda to your next smartphone to the working capital your shop needs — seven financing products built for riders, drivers, earners and small businesses.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href="#apply" className="btn btn-primary btn-lg">Apply now <span className="arrow-pill"><ArrowRight /></span></a>
        <a href="#products" className="btn btn-ghost-light btn-lg">Explore our products</a>
      </div>
    </div>

    {/* scroll hint */}
    <div style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 3, display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,.6)', fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '.14em', textTransform: 'uppercase' }}>
      <span>Scroll</span>
      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 4v16M6 14l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  </section>;


const InvestorStrip = () => {
  const logos = ['\n', '\n', 'NTSA', 'Boxer Motors', 'TVS Kenya', 'Bajaj', 'Honda', 'Tecno'];
  return (
    <section style={{ padding: '36px 0', background: '#fff', borderBottom: '1px solid var(--m-line)' }}>
      <div className="shell" style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--m-muted)', whiteSpace: 'nowrap' }}>AVAILABLE BRANDS</span>
        <div style={{ overflow: 'hidden', flex: 1, maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' }}>
          <div className="marquee">
            {[...logos, ...logos].map((l, i) =>
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--m-ink-2)', letterSpacing: '-.02em' }}>{l}</span>
            )}
          </div>
        </div>
      </div>
    </section>);

};

Object.assign(window, { Hero, InvestorStrip });