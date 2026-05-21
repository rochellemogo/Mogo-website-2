// Photo-led product grid (M-KOPA style)
const ProductTile = ({ p, isSubpage }) => {
  const href = isSubpage ? `${p.slug}.html` : `products/${p.slug}.html`;
  return (
    <a href={href} className="tile" style={{
      display: 'flex', flexDirection: 'column',
      background: '#fff', borderRadius: 'var(--r-xl)', overflow: 'hidden', color: 'var(--m-ink)',
      border: '1px solid var(--m-line-2)'
    }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', margin: 10, marginBottom: 0, borderRadius: 'calc(var(--r-xl) - 10px)', overflow: 'hidden' }}>
        <ProductImage theme={p.theme} slug={p.slug} />
        <div style={{ position: 'absolute', bottom: 16, right: 16, zIndex: 3 }} className="tile-arrow"><ArrowUpRight /></div>
        {p.isNew &&
        <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 3, padding: '6px 10px', borderRadius: 999, background: 'var(--m-ink)', color: '#fff', fontSize: 10, fontFamily: 'var(--font-mono)', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 600 }}>New</div>
        }
      </div>
      <div data-tile-body style={{ padding: '24px 26px 28px' }}>
        <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--m-green-ink)', marginBottom: 10 }}>{p.price}</div>
        <h3 className="h-display" style={{ fontSize: 26, letterSpacing: '-.025em', margin: '0 0 8px', fontWeight: 600 }}>{p.name}</h3>
        <p style={{ fontSize: 14.5, color: 'var(--m-ink-2)', lineHeight: 1.5, margin: 0 }}>{p.tagline}</p>
      </div>
    </a>);

};

const ProductImage = ({ theme, slug }) => {
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
    <text x="45" y="95" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="rgba(255,255,255,.65)" letterSpacing="1">MOGO</text>
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
  const featured = window.MOGO_PRODUCTS.find((p) => p.featured);
  const others = window.MOGO_PRODUCTS.filter((p) => !p.featured);
  return (
    <section id="products" style={{ padding: '100px 0', background: 'var(--m-cream)' }}>
      <div className="shell">
        <div className="section-intro">
          <div>
            <div className="h-eyebrow"><span className="dot" />What we finance</div>
            <h2 className="mega-head">Seven products.<br />One <em>honest</em> promise.</h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--m-ink-2)', lineHeight: 1.55, maxWidth: 440, margin: 0 }}>Best known for bodas — now financing phones, cash, and the working capital Kenyan businesses need to grow.

          </p>
        </div>

        {/* hero tile — boda financing */}
        <a href={`products/${featured.slug}.html`} data-featured-tile className="tile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--m-ink)', color: '#fff', borderRadius: 'var(--r-xl)', overflow: 'hidden', marginBottom: 20, minHeight: 440 }}>
          <div data-featured-text style={{ padding: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'rgba(122,184,0,.18)', color: 'var(--m-green)', fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--m-green)' }} /> {featured.tag} · 70% of customers
            </div>
            <h3 className="h-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-.03em', margin: '0 0 20px', fontWeight: 600, lineHeight: 1 }}>
              {featured.name}
            </h3>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,.75)', lineHeight: 1.55, maxWidth: 460, margin: '0 0 32px' }}>{featured.desc}</p>
            <div data-featured-stats style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.12)', marginBottom: 32 }}>
              {[['From', featured.price.replace('From ', '')], ['Term', featured.term], ['Turnaround', featured.turnaround]].map(([l, v]) =>
              <div key={l}>
                  <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 6 }}>{l}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-.02em', fontWeight: 600 }}>{v}</div>
                </div>
              )}
            </div>
            <span className="btn btn-primary">Learn more <span className="arrow-pill"><ArrowRight /></span></span>
          </div>
          <div data-featured-photo style={{ position: 'relative', padding: 10 }}>
            <div style={{ position: 'absolute', inset: 10, borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
              <ProductImage theme={featured.theme} slug={featured.slug} />
            </div>
          </div>
        </a>

        {/* 6 smaller tiles — 3 × 2 grid */}
        <div data-tile-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {others.map((p) => <ProductTile key={p.slug} p={p} isSubpage={false} />)}
        </div>
      </div>
    </section>);

};

Object.assign(window, { Products, ProductTile, ProductImage });