// Photo-led product grid (M-KOPA style)
// Clean line-icon system + accent tints per product theme.
const PRODUCT_TINTS = {
  sunset: { bg: 'var(--m-peach)',      ink: '#B2532E' },
  green:  { bg: 'var(--m-green-soft)', ink: 'var(--m-green-deep)' },
  peach:  { bg: 'var(--m-peach)',      ink: '#B2532E' },
  cool:   { bg: 'var(--m-sky)',        ink: 'var(--m-navy)' },
  lilac:  { bg: 'var(--m-lilac)',      ink: '#5B3E86' },
  warm:   { bg: '#F1E6D4',             ink: '#9A6B2E' },
  navy:   { bg: 'var(--m-sky)',        ink: 'var(--m-navy)' },
};
const tintFor = (theme) => PRODUCT_TINTS[theme] || PRODUCT_TINTS.warm;

const ProductIcon = ({ slug, size = 26 }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  if (slug.includes('tuk')) return (
    <svg {...p}><path d="M3 16V10l4-3h6l3 6v3"/><path d="M3 16h13"/><circle cx="6" cy="18" r="2"/><circle cx="16.5" cy="18" r="2"/><path d="M9 7v9"/></svg>
  );
  if (slug.includes('car')) return (
    <svg {...p}><path d="M4 15l1.6-4.6A2 2 0 0 1 7.5 9h9a2 2 0 0 1 1.9 1.4L20 15"/><path d="M3 15h18v3a1 1 0 0 1-1 1h-1.5"/><path d="M6.5 19H5a1 1 0 0 1-1-1v-3"/><circle cx="7.5" cy="18.5" r="1.6"/><circle cx="16.5" cy="18.5" r="1.6"/></svg>
  );
  if (slug.includes('logbook')) return (
    <svg {...p}><path d="M6 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M4 17.5A2 2 0 0 1 6 16h12"/><path d="M9 8h5M9 11h5"/></svg>
  );
  if (slug.includes('boda')) return (
    <svg {...p}><circle cx="5" cy="16.5" r="3"/><circle cx="19" cy="16.5" r="3"/><path d="M8 16.5h6l-3-4.5h4.5"/><path d="M7 12l-1.5 4.5"/><path d="M6 12h3.5"/><path d="M15.5 12h2.5l1.5 4.5"/><path d="M14.5 9.5h3"/></svg>
  );
  if (slug.includes('check') || slug.includes('cash')) return (
    <svg {...p}><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6.5 9.5h.01M17.5 14.5h.01"/></svg>
  );
  if (slug.includes('smart') || slug.includes('phone')) return (
    <svg {...p}><rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M10.5 18h3"/></svg>
  );
  return ( // msme / business — storefront
    <svg {...p}><path d="M4 9.5V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.5"/><path d="M3 9l1.6-4.5h14.8L21 9a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z"/><path d="M9.5 20v-5h5v5"/></svg>
  );
};

const ProductTile = ({ p, isSubpage }) => {
  const href = isSubpage ? `${p.slug}.html` : `products/${p.slug}.html`;
  const tint = tintFor(p.theme);
  return (
    <a href={href} className="tile product-card" style={{
      display: 'flex', flexDirection: 'column',
      background: '#fff', borderRadius: 'var(--r-xl)', overflow: 'hidden', color: 'var(--m-ink)',
      border: '1px solid var(--m-line-2)', padding: '26px 26px 22px',
    }}>
      <div data-tile-body style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <span style={{ display: 'grid', placeItems: 'center', width: 52, height: 52, borderRadius: 14, background: tint.bg, color: tint.ink }}>
            <ProductIcon slug={p.slug} size={26} />
          </span>
        </div>
        <div style={{ fontSize: 11, fontFamily: 'inherit', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--m-muted)', marginBottom: 10 }}>{p.category}</div>
        <h3 className="h-display" style={{ fontSize: 24, letterSpacing: '-.025em', margin: '0 0 8px', fontWeight: 600 }}>{p.name}</h3>
        <p style={{ fontSize: 14.5, color: 'var(--m-ink-2)', lineHeight: 1.5, margin: '0 0 20px' }}>{p.tagline}</p>
        <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: '1px solid var(--m-line-2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13.5, fontFamily: 'inherit', letterSpacing: '.02em', color: 'var(--m-green-ink)', fontWeight: 500 }}>{p.price}</span>
          <span className="product-card-arrow" style={{ width: 36, height: 36, borderRadius: 999, display: 'grid', placeItems: 'center', background: 'var(--m-cream)', color: 'var(--m-ink)', transition: 'background .2s, color .2s, transform .2s' }}><ArrowUpRight /></span>
        </div>
      </div>
    </a>);

};

const ProductImage = ({ theme, slug }) => {
  // Real photography per product. The standalone bundler swaps in a blob URL via
  // window.__resources[id]; live preview falls back to the relative file path.
  // [resource-id, root-relative path]
  const PHOTO = { 'smartphone-loans': ['smartphonePhoto', 'assets/smartphone-loans.jpg'] };
  if (PHOTO[slug]) {
    const [id, path] = PHOTO[slug];
    const isSub = /\/(products|pages)\//.test(window.location.pathname);
    const src = (window.__resources && window.__resources[id]) || (isSub ? '../' + path : path);
    return <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />;
  }

  const grads = {
    warm: ['#FFD5A8', '#E89A4E', '#8A4A1E'],
    green: ['#C8E4A0', '#7AB800', '#3F5E00'],
    cool: ['#A8C8E8', '#4A7EB8', '#0E2E5E'],
    peach: ['#FFD0B8', '#E8885F', '#8A3C1E'],
    lilac: ['#D9CCE8', '#8D7FAE', '#3E2E5E'],
    sunset: ['#FFB88C', '#D96D4E', '#5A2E44'],
    navy: ['#5A8BC8', '#2F5EA0', '#0E2E5E']
  };
  const [c1, c2, c3] = grads[theme] || grads.warm;
  const id = React.useMemo(() => `pg${Math.random().toString(36).slice(2, 8)}`, []);
  const icon = slug || 'boda';

  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={c1} /><stop offset=".6" stopColor={c2} /><stop offset="1" stopColor={c3} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <circle cx="340" cy="60" r="28" fill="#fff" opacity=".3" />

      {/* silhouette varies by product */}
      {icon.includes('boda') && <BodaSilhouette />}
      {icon.includes('tuk') && <TukSilhouette />}
      {icon.includes('car') && <CarSilhouette />}
      {icon.includes('check') && <CashSilhouette />}
      {icon.includes('smart') && <PhoneSilhouette />}
      {icon.includes('msme') && <ShopSilhouette />}
    </svg>);

};

const BodaSilhouette = () =>
<g transform="translate(80, 100)" fill="rgba(11,18,32,.55)">
    <circle cx="40" cy="140" r="36" /><circle cx="200" cy="140" r="36" />
    <path d="M30 130 L95 70 L175 70 L215 130 L180 130 L160 95 L110 95 L80 130 Z" />
    <rect x="122" y="58" width="26" height="16" rx="3" />
    <rect x="126" y="30" width="18" height="32" rx="9" />
    <circle cx="135" cy="24" r="14" />
  </g>;

const TukSilhouette = () =>
<g transform="translate(80, 100)" fill="rgba(11,18,32,.55)">
    <path d="M10 140 L30 60 L200 60 L220 140 Z" />
    <rect x="60" y="75" width="120" height="50" fill="rgba(255,255,255,.3)" />
    <circle cx="55" cy="155" r="28" /><circle cx="175" cy="155" r="28" />
    <circle cx="55" cy="155" r="12" fill="rgba(255,255,255,.4)" />
    <circle cx="175" cy="155" r="12" fill="rgba(255,255,255,.4)" />
  </g>;

const CarSilhouette = () =>
<g transform="translate(60, 120)" fill="rgba(11,18,32,.55)">
    <path d="M0 100 L40 40 L220 40 L260 100 L260 130 L0 130 Z" />
    <rect x="50" y="50" width="160" height="45" fill="rgba(255,255,255,.3)" />
    <circle cx="50" cy="130" r="22" /><circle cx="210" cy="130" r="22" />
  </g>;

const CashSilhouette = () =>
<g transform="translate(100, 90)" fill="rgba(11,18,32,.5)">
    <rect x="0" y="0" width="200" height="120" rx="10" />
    <circle cx="100" cy="60" r="30" fill="rgba(255,255,255,.3)" />
    <text x="100" y="68" textAnchor="middle" fontFamily="Poppins" fontSize="28" fontWeight="700" fill="rgba(11,18,32,.5)">KES</text>
    <rect x="20" y="20" width="30" height="18" rx="3" fill="rgba(255,255,255,.2)" />
    <rect x="150" y="82" width="30" height="18" rx="3" fill="rgba(255,255,255,.2)" />
  </g>;

const PhoneSilhouette = () =>
<g transform="translate(155, 60)" fill="rgba(11,18,32,.6)">
    <rect x="0" y="0" width="90" height="180" rx="14" />
    <rect x="6" y="14" width="78" height="142" rx="4" fill="rgba(255,255,255,.18)" />
    <circle cx="45" cy="170" r="4" fill="rgba(255,255,255,.3)" />
    <rect x="32" y="4" width="26" height="4" rx="2" fill="rgba(255,255,255,.25)" />
    <text x="45" y="95" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="rgba(255,255,255,.65)" letterSpacing="1">MOGO</text>
  </g>;

const ShopSilhouette = () =>
<g transform="translate(60, 80)" fill="rgba(11,18,32,.55)">
    <rect x="0" y="40" width="280" height="130" />
    <path d="M-10 40 L30 0 L250 0 L290 40 Z" />
    <rect x="40" y="70" width="60" height="80" fill="rgba(255,255,255,.25)" />
    <rect x="120" y="70" width="80" height="80" fill="rgba(255,255,255,.2)" />
    <rect x="220" y="70" width="40" height="80" fill="rgba(255,255,255,.25)" />
    <text x="140" y="30" textAnchor="middle" fontFamily="Poppins" fontSize="16" fontWeight="600" fill="rgba(255,255,255,.5)">DUKA</text>
  </g>;


const Products = () => {
  const products = window.MOGO_PRODUCTS.filter((p) => p.slug !== 'special-offers');
  const featured = products.find((p) => p.featured) || products[0];
  const [activeSlug, setActiveSlug] = React.useState(null);
  const active = products.find((p) => p.slug === activeSlug);
  const tint = active ? tintFor(active.theme) : tintFor('warm');
  // Clicking a product opens its detail card directly below the row holding the
  // tile; clicking the already-open product collapses it. No remounting, so the
  // grid doesn't flash or jump.
  const select = (slug) => setActiveSlug((cur) => (cur === slug ? null : slug));
  // Track how many columns the grid currently renders (changes responsively)
  // so we can drop the detail card in after the *row* that holds the active
  // tile — never mid-row, which would leave empty holes.
  const gridRef = React.useRef(null);
  const [cols, setCols] = React.useState(4);
  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const measure = () => {
      const n = getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length;
      if (n) setCols(n);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const activeIndex = active ? products.findIndex((p) => p.slug === activeSlug) : -1;
  const insertAfter = activeIndex >= 0 ? Math.min((Math.floor(activeIndex / cols) + 1) * cols - 1, products.length - 1) : -1;

  return (
    <section id="products" style={{ padding: '84px 0', background: 'var(--m-cream)' }}>
      <div className="shell">
        <div className="section-intro" style={{ marginBottom: 36 }}>
          <div>
            <h2 className="mega-head">What we <em>finance.</em></h2>
          </div>
          <p style={{ fontSize: 16, color: 'var(--m-ink-2)', lineHeight: 1.55, maxWidth: 420, margin: 0 }}>
            Best known for bodas — now financing tuk-tuks, cars, phones and the working capital Kenyan businesses need to grow.<br/>
            <strong style={{color:'var(--m-green-ink)', fontWeight:700}}>Tap any product to see details.</strong>
          </p>
        </div>

        {/* Single grid: the selected product expands IN PLACE into the
            full-width black detail card; the rest stay as white minis and
            reflow around it. */}
        {/* Packed grid of white tiles. The active tile is highlighted and a
            full-width black detail card is inserted right after its ROW, so the
            card moves to wherever you click without ever leaving holes. */}
        <div ref={gridRef} data-tile-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, alignItems: 'stretch' }}>
          {products.reduce((out, p, i) => {
            const t = tintFor(p.theme);
            const isActive = p.slug === activeSlug;
            out.push(
              <button key={p.slug} type="button" onClick={() => select(p.slug)}
                className="tile product-mini" aria-label={`Show ${p.name}`} aria-expanded={isActive}
                data-active={isActive ? '' : undefined}
                style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 14, minWidth: 0, background: isActive ? 'var(--m-ink)' : '#fff', borderRadius: 'var(--r-lg)', border: isActive ? '1px solid var(--m-ink)' : '1px solid var(--m-line-2)', padding: '14px 16px', cursor: 'pointer', color: isActive ? '#fff' : 'var(--m-ink)' }}>
                <span style={{ flexShrink: 0, display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 12, background: t.bg, color: t.ink }}>
                  <ProductIcon slug={p.slug} size={22} />
                </span>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <span className="product-mini-name" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 15.5, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.15, marginBottom: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.short || p.name}</span>
                  <span style={{ display: 'block', fontSize: 13, fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0', color: isActive ? 'var(--m-green)' : 'var(--m-green-ink)' }}>{p.price}</span>
                </span>
                <span aria-hidden="true" style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <span className="product-mini-label" style={{ fontSize: 9.5, fontFamily: 'inherit', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600, color: isActive ? 'var(--m-green)' : 'var(--m-muted)', whiteSpace: 'nowrap' }}>
                    {isActive ? 'Close' : 'Details'}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ color: isActive ? 'var(--m-green)' : 'var(--m-muted)', transition: 'transform .2s', transform: isActive ? 'rotate(180deg)' : 'none' }}>
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </button>
            );
            if (active && i === insertAfter) {
              out.push(
                <div key="detail" data-featured-tile className="tile product-detail" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1.2fr 1fr', background: 'var(--m-ink)', color: '#fff', borderRadius: 'var(--r-xl)', overflow: 'hidden', minHeight: 300 }}>
                  <div data-featured-text style={{ padding: '38px 40px', display: 'flex', flexDirection: 'column' }}>
                    <h3 className="h-display" style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', letterSpacing: '-.03em', margin: '0 0 12px', fontWeight: 600, lineHeight: 1 }}>
                      {active.name}
                    </h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,.72)', lineHeight: 1.55, maxWidth: 460, margin: '0 0 22px' }}>{active.desc}</p>
                    <div data-featured-stats style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', marginBottom: 24, marginTop: 'auto' }}>
                      {[['From', active.price.replace('From ', '')], ['Term', active.term], ['Turnaround', active.turnaround]].map(([l, v]) =>
                      <div key={l}>
                          <div style={{ fontSize: 10, fontFamily: 'inherit', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 5 }}>{l}</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '-.02em', fontWeight: 600 }}>{v}</div>
                        </div>
                      )}
                    </div>
                    <a href={`products/${active.slug}.html`} className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '11px 18px', fontSize: 14 }}>Learn more <span className="arrow-pill"><ArrowRight /></span></a>
                  </div>
                  <div data-featured-photo style={{ position: 'relative', background: tint.bg, display: 'grid', placeItems: 'center', overflow: 'hidden', transition: 'background .35s ease' }}>
                    <span style={{ position: 'relative', color: tint.ink }}><ProductIcon slug={active.slug} size={108} /></span>
                    <div style={{ position: 'absolute', left: 28, bottom: 22, fontFamily: 'inherit', fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', color: tint.ink, opacity: .7, fontWeight: 600 }}>{active.category}</div>
                  </div>
                </div>
              );
            }
            return out;
          }, [])}
        </div>
      </div>

      <style>{`
        @keyframes detail-open { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .product-detail { animation: detail-open .26s ease; }
        @media (prefers-reduced-motion: reduce) { .product-detail { animation: none; } }
        .product-mini { transition: border-color .18s, box-shadow .18s, transform .18s; }
        .product-mini:hover { border-color: var(--m-green); box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .product-mini[data-active]:hover { border-color: var(--m-ink); box-shadow: none; transform: none; }
        .product-card:hover .product-card-arrow { background: var(--m-green); color: #0b1a00; transform: rotate(-45deg); }
      `}</style>
    </section>);

};

Object.assign(window, { Products, ProductTile, ProductImage });