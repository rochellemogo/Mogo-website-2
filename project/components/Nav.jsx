const Nav = () => {
  const [open, setOpen] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSection, setMobileSection] = React.useState(null);
  // Detect which subfolder we live in so cross-folder links work (pages ↔ products).
  const _here = typeof window !== 'undefined' ? window.location.pathname : '';
  const inPages = _here.includes('/pages/');
  const inProducts = _here.includes('/products/');
  const isSubpage = inPages || inProducts || (typeof window !== 'undefined' && window.__MOGO_SUBPAGE === true);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', mobileOpen);
    return () => document.body.classList.remove('mobile-nav-open');
  }, [mobileOpen]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on outside click / Escape
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(null);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const lightMode = scrolled || isSubpage;

  const aboutItems = [
    {slug:'about-us',   name:'About us',       desc:'Who we are and why we exist'},
    {slug:'contact-us', name:'Contact us',     desc:'Call centre, WhatsApp, emergencies'},
    {slug:'payments',   name:'Payments',       desc:'M-Pesa, USSD, bank transfer'},
    {slug:'faq',        name:'FAQ',            desc:'Quick answers to common questions'},
    {slug:'careers',    name:'Careers',        desc:'Work at Mogo Kenya'},
  ];
  const impactItems = [
    {slug:'mogo-impact', name:'Mogo Impact',             desc:"Our contribution to Kenya's communities"},
    {slug:'news',        name:'News',                    desc:'Press coverage and updates'},
    {slug:'literacy',    name:'Financial literacy tool', desc:'Powered by Eleving SMART', external:'https://smart.eleving.com/en-ke/'},
  ];
  const pageHref = (slug) => {
    if (inPages)    return `${slug}.html`;
    if (inProducts) return `../pages/${slug}.html`;
    return `pages/${slug}.html`;
  };
  const productHref = (slug) => {
    if (inProducts) return `${slug}.html`;
    if (inPages)    return `../products/${slug}.html`;
    return `products/${slug}.html`;
  };

  const triggerStyle = (key) => ({
    padding:'8px 14px', fontSize:13, fontWeight:500, letterSpacing:'.08em', textTransform:'uppercase',
    color:'inherit', borderRadius:8, whiteSpace:'nowrap', display:'inline-flex', alignItems:'center', gap: 4,
    border:'none', background: open === key ? (lightMode ? 'rgba(11,18,32,.06)' : 'rgba(255,255,255,.1)') : 'transparent',
    cursor:'pointer', fontFamily:'inherit',
  });

  const Chevron = ({active}) => (
    <svg width="10" height="10" viewBox="0 0 10 10" style={{transform: active ? 'rotate(180deg)' : 'none', transition:'transform .2s'}}>
      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );

  const Panel = ({eyebrow, title, blurb, items, hrefFn, showBadges}) => (
    <div style={{
      position:'absolute', top: '100%', left: 0, right: 0,
      background:'#fff', color:'var(--m-ink)',
      borderBottom:'1px solid var(--m-line)',
      boxShadow:'0 24px 48px rgba(0,0,0,.08)',
      padding: '32px 40px 40px', zIndex: 100,
    }}>
      <div style={{maxWidth: 1280, margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'220px 1fr', gap: 48}}>
          <div>
            <div className="h-eyebrow"><span className="dot"/>{eyebrow}</div>
            {title && <p style={{marginTop: 14, fontSize:15, fontWeight:600, color:'var(--m-ink)'}}>{title}</p>}
            <p style={{marginTop: title ? 6 : 14, fontSize: 13, color:'var(--m-muted)', lineHeight:1.5, maxWidth: 200}}>{blurb}</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 4}}>
            {items.map(it => {
              const href = it.external ? it.external : hrefFn(it.slug);
              const target = it.external ? '_blank' : undefined;
              const rel = it.external ? 'noopener noreferrer' : undefined;
              return (
                <a key={it.slug} href={href} target={target} rel={rel} onClick={()=>setOpen(null)} style={{
                  padding:'14px 16px', borderRadius: 10, transition:'background .15s', textDecoration:'none', color:'inherit',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background='var(--m-cream)'}
                onMouseLeave={(e) => e.currentTarget.style.background='transparent'}
                >
                  <div style={{display:'flex', alignItems:'center', gap:8}}>
                    <strong style={{fontWeight:600, fontSize: 15}}>{it.name}</strong>
                    {showBadges && it.tag === 'Most popular' && <span style={{fontSize:10, fontFamily:'var(--font-mono)', letterSpacing:'.08em', textTransform:'uppercase', padding:'2px 6px', borderRadius:4, background:'var(--m-green-soft)', color:'var(--m-green-deep)'}}>Popular</span>}
                    {showBadges && it.isNew && <span style={{fontSize:10, fontFamily:'var(--font-mono)', letterSpacing:'.08em', textTransform:'uppercase', padding:'2px 6px', borderRadius:4, background:'var(--m-ink)', color:'#fff'}}>New</span>}
                    {it.external && <ArrowUpRight size={12}/>}
                  </div>
                  <div style={{fontSize: 13, color:'var(--m-muted)', marginTop: 2, lineHeight:1.4}}>{it.desc || it.tagline}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header
      data-mogo-nav
      ref={wrapRef}
      onMouseLeave={() => setOpen(null)}
      style={{
        position:'sticky', top: 0, zIndex: 50,
        background: lightMode ? 'rgba(255,255,255,.96)' : 'transparent',
        // Note: no backdrop-filter here — it creates a containing block for
        // position:fixed children, which would trap the mobile nav drawer
        // inside the header bar.
        borderBottom: lightMode ? '1px solid var(--m-line)' : '1px solid transparent',
        transition: 'background .2s, border-color .2s',
        color: lightMode ? 'var(--m-ink)' : '#fff',
      }}
    >
      <div className="shell" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 28px', gap: 24, position:'relative'}}>
        <a href={isSubpage ? '../index-v2.html' : 'index-v2.html'} style={{display:'flex', alignItems:'center', gap: 10}} aria-label="Mogo Kenya">
          <div style={{height: 28, display:'flex', alignItems:'center'}}>
            <img src={(window.__resources && window.__resources.mogoLogo) || (isSubpage ? '../assets/mogo-logo.svg' : 'assets/mogo-logo.svg')} alt="mogo" style={{height: 26, width:'auto'}}/>
          </div>
        </a>

        <nav style={{display:'flex', alignItems:'center', gap:4}}>
          <button onMouseEnter={() => setOpen('prod')} onClick={() => setOpen(open === 'prod' ? null : 'prod')} style={triggerStyle('prod')}>
            Products <Chevron active={open==='prod'}/>
          </button>
          {[['Branches','branches']].map(([l, anchor]) => {
            const href = isSubpage ? `../index-v2.html#${anchor}` : `#${anchor}`;
            return (
              <a key={l} href={href} onMouseEnter={()=>setOpen(null)} style={{padding:'8px 14px', fontSize:13, fontWeight:500, letterSpacing:'.08em', textTransform:'uppercase', color:'inherit', borderRadius:8, whiteSpace:'nowrap', textDecoration:'none'}}>{l}</a>
            );
          })}
          <button onMouseEnter={() => setOpen('about')}  onClick={() => setOpen(open === 'about'  ? null : 'about')}  style={triggerStyle('about')}>About us <Chevron active={open==='about'}/></button>
          <button onMouseEnter={() => setOpen('impact')} onClick={() => setOpen(open === 'impact' ? null : 'impact')} style={triggerStyle('impact')}>Our Impact <Chevron active={open==='impact'}/></button>
          {(() => { const href = pageHref('our-stories'); return (
            <a href={href} onMouseEnter={()=>setOpen(null)} style={{padding:'8px 14px', fontSize:13, fontWeight:500, letterSpacing:'.08em', textTransform:'uppercase', color:'inherit', borderRadius:8, whiteSpace:'nowrap', textDecoration:'none'}}>Our Stories</a>
          ); })()}
          {(() => { const href = pageHref('saka'); return (
            <a href={href} onMouseEnter={()=>setOpen(null)} style={{padding:'8px 14px', fontSize:13, fontWeight:500, letterSpacing:'.08em', textTransform:'uppercase', color:'inherit', borderRadius:8, whiteSpace:'nowrap', textDecoration:'none'}}>SAKA</a>
          ); })()}
        </nav>

        <div className="nav-cta" style={{display:'flex', alignItems:'center', gap:10}}>
          <a href={isSubpage ? '../index-v2.html#apply' : '#apply'} className="btn btn-primary">
            <span className="nav-cta-full">Apply now</span><span className="nav-cta-short">Apply</span> <span className="arrow-pill"><ArrowRight/></span>
          </a>
        </div>

        {/* Inline mobile hamburger — visibility controlled entirely by mobile.css */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMobileOpen(true); }}
          style={{
            width: 44, height: 44, borderRadius: 999,
            background: lightMode ? 'rgba(11,18,32,.06)' : 'rgba(255,255,255,.14)',
            border: lightMode ? '1px solid var(--m-line)' : '1px solid rgba(255,255,255,.2)',
            color: 'inherit', cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
            position: 'relative', zIndex: 60,
          }}
          className="mogo-mobile-burger"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {mobileOpen && (
          <div className="mobile-nav-drawer open" role="dialog" aria-modal="true">
            <div className="mobile-nav-drawer__head">
              <a href={isSubpage ? '../index-v2.html' : 'index-v2.html'} onClick={() => setMobileOpen(false)} style={{display:'flex', alignItems:'center', gap:10}}>
                <img src={(window.__resources && window.__resources.mogoLogo) || (isSubpage ? '../assets/mogo-logo.svg' : 'assets/mogo-logo.svg')} alt="mogo" style={{height:24}}/>
              </a>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{width:40, height:40, borderRadius:999, background:'var(--m-cream)', border:'none', cursor:'pointer', display:'grid', placeItems:'center'}}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="mobile-nav-drawer__body">
              <div className="mobile-nav-drawer__group">
                <button type="button" className="mobile-nav-drawer__row" aria-expanded={mobileSection==='prod'} onClick={() => setMobileSection(mobileSection==='prod' ? null : 'prod')}>
                  Products
                  <svg className="mobile-nav-drawer__chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </button>
                {mobileSection==='prod' && (
                  <div className="mobile-nav-drawer__sub">
                    {window.MOGO_PRODUCTS?.map(p => (
                      <a key={p.slug} href={productHref(p.slug)} onClick={() => setMobileOpen(false)}>
                        {p.name}<small>{p.tagline}</small>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {[['Branches','branches']].map(([l, anchor]) => {
                const href = isSubpage ? `../index-v2.html#${anchor}` : `#${anchor}`;
                return (
                  <div className="mobile-nav-drawer__group" key={l}>
                    <a href={href} onClick={() => setMobileOpen(false)} style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'18px 16px', fontSize:17, fontWeight:500, color:'var(--m-ink)', textDecoration:'none', textTransform:'uppercase', letterSpacing:'.08em'}}>{l}</a>
                  </div>
                );
              })}

              <div className="mobile-nav-drawer__group">
                <button type="button" className="mobile-nav-drawer__row" aria-expanded={mobileSection==='about'} onClick={() => setMobileSection(mobileSection==='about' ? null : 'about')}>
                  About
                  <svg className="mobile-nav-drawer__chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </button>
                {mobileSection==='about' && (
                  <div className="mobile-nav-drawer__sub">
                    {aboutItems.map(it => (
                      <a key={it.slug} href={pageHref(it.slug)} onClick={() => setMobileOpen(false)}>
                        {it.name}<small>{it.desc}</small>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mobile-nav-drawer__group">
                <button type="button" className="mobile-nav-drawer__row" aria-expanded={mobileSection==='impact'} onClick={() => setMobileSection(mobileSection==='impact' ? null : 'impact')}>
                  Our Impact
                  <svg className="mobile-nav-drawer__chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </button>
                {mobileSection==='impact' && (
                  <div className="mobile-nav-drawer__sub">
                    {impactItems.map(it => {
                      const href = it.external ? it.external : pageHref(it.slug);
                      return (
                        <a key={it.slug} href={href} target={it.external ? '_blank' : undefined} rel={it.external ? 'noopener noreferrer' : undefined} onClick={() => setMobileOpen(false)}>
                          {it.name}<small>{it.desc}</small>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {(() => {
                const storiesHref = pageHref('our-stories');
                const sakaHref = pageHref('saka');
                return (
                  <>
                    <div className="mobile-nav-drawer__group">
                      <a href={storiesHref} onClick={() => setMobileOpen(false)} style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'18px 16px', fontSize:17, fontWeight:500, color:'var(--m-ink)', textDecoration:'none', textTransform:'uppercase', letterSpacing:'.08em'}}>Our Stories</a>
                    </div>
                    <div className="mobile-nav-drawer__group">
                      <a href={sakaHref} onClick={() => setMobileOpen(false)} style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'18px 16px', fontSize:17, fontWeight:500, color:'var(--m-ink)', textDecoration:'none', textTransform:'uppercase', letterSpacing:'.08em'}}>SAKA</a>
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="mobile-nav-drawer__cta">
              <a href={isSubpage ? '../index-v2.html#apply' : '#apply'} className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                Apply now <span className="arrow-pill"><ArrowRight/></span>
              </a>
            </div>
          </div>
        )}

        {open === 'prod' && (
          <Panel
            eyebrow="7 ways we finance"
            blurb="From KES 50/day phone plans to KES 5M business loans — built for Kenyan earners."
            items={window.MOGO_PRODUCTS}
            hrefFn={productHref}
            showBadges
          />
        )}
        {open === 'about' && (
          <Panel
            eyebrow="Company"
            title="About Mogo"
            blurb="Reach our team, pay your loan, find answers, or explore a career with us."
            items={aboutItems}
            hrefFn={pageHref}
          />
        )}
        {open === 'impact' && (
          <Panel
            eyebrow="Impact & news"
            title="Our Impact"
            blurb="Our footprint in Kenya, the latest news, and tools to help you grow."
            items={impactItems}
            hrefFn={pageHref}
          />
        )}
      </div>
    </header>
  );
};

const ArrowRight = ({size=12}) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowUpRight = ({size=14}) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Object.assign(window, { Nav, ArrowRight, ArrowUpRight });

const MobileNavToggle = ({ isSubpage, aboutItems, impactItems, pageHref, productHref, lightMode }) => {
  const [open, setOpen] = React.useState(false);
  const [section, setSection] = React.useState(null);

  React.useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', open);
    return () => document.body.classList.remove('mobile-nav-open');
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => { setOpen(false); setSection(null); };
  const toggle = (k) => setSection(section === k ? null : k);

  const linkStyle = { display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'18px 16px', fontSize:17, fontWeight:500, color:'var(--m-ink)', textDecoration:'none', border:'none', background:'transparent', textAlign:'left', fontFamily:'inherit' };

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(true); }}
        style={{
          width:42, height:42, borderRadius:999,
          background: lightMode ? 'rgba(11,18,32,.06)' : 'rgba(255,255,255,.12)',
          border: lightMode ? '1px solid var(--m-line)' : '1px solid rgba(255,255,255,.18)',
          color:'inherit', cursor:'pointer', placeItems:'center',
        }}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
          <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="mobile-nav-drawer open" role="dialog" aria-modal="true">
          <div className="mobile-nav-drawer__head">
            <a href={isSubpage ? '../index-v2.html' : 'index-v2.html'} onClick={close} style={{display:'flex', alignItems:'center', gap:10}}>
              <img src={(window.__resources && window.__resources.mogoLogo) || (isSubpage ? '../assets/mogo-logo.svg' : 'assets/mogo-logo.svg')} alt="mogo" style={{height:24}}/>
            </a>
            <button onClick={close} aria-label="Close menu" style={{width:40, height:40, borderRadius:999, background:'var(--m-cream)', border:'none', cursor:'pointer', display:'grid', placeItems:'center'}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="mobile-nav-drawer__body">
            <div className="mobile-nav-drawer__group">
              <button className="mobile-nav-drawer__row" aria-expanded={section==='prod'} onClick={() => toggle('prod')}>
                Products
                <svg className="mobile-nav-drawer__chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              {section==='prod' && (
                <div className="mobile-nav-drawer__sub">
                  {window.MOGO_PRODUCTS?.map(p => (
                    <a key={p.slug} href={productHref(p.slug)} onClick={close}>
                      {p.name}<small>{p.tagline}</small>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {['How it works','Branches','Stories'].map(l => {
              const href = isSubpage
                ? `../index-v2.html#${l.toLowerCase().replace(/ /g,'')}`
                : `#${l.toLowerCase().replace(/ /g,'')}`;
              return (
                <div className="mobile-nav-drawer__group" key={l}>
                  <a href={href} onClick={close} style={linkStyle}>{l}</a>
                </div>
              );
            })}

            <div className="mobile-nav-drawer__group">
              <button className="mobile-nav-drawer__row" aria-expanded={section==='about'} onClick={() => toggle('about')}>
                About
                <svg className="mobile-nav-drawer__chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              {section==='about' && (
                <div className="mobile-nav-drawer__sub">
                  {aboutItems.map(it => (
                    <a key={it.slug} href={pageHref(it.slug)} onClick={close}>
                      {it.name}<small>{it.desc}</small>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="mobile-nav-drawer__group">
              <button className="mobile-nav-drawer__row" aria-expanded={section==='impact'} onClick={() => toggle('impact')}>
                Our Impact
                <svg className="mobile-nav-drawer__chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              {section==='impact' && (
                <div className="mobile-nav-drawer__sub">
                  {impactItems.map(it => {
                    const href = it.external ? it.external : pageHref(it.slug);
                    return (
                      <a key={it.slug} href={href} target={it.external ? '_blank' : undefined} rel={it.external ? 'noopener noreferrer' : undefined} onClick={close}>
                        {it.name}<small>{it.desc}</small>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="mobile-nav-drawer__cta">
            <a href={isSubpage ? '../index-v2.html#apply' : '#apply'} className="btn btn-primary" onClick={close}>
              Apply now <span className="arrow-pill"><ArrowRight/></span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

Object.assign(window, { MobileNavToggle });
