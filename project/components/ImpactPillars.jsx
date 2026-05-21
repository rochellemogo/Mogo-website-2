// Mogo Impact — four pillar sections.
// Each pillar gets its own alternating two-column section so the categories
// read as distinct chapters rather than a flat grid of cards.

const IMPACT_PILLARS = [
  {
    n: '01',
    eyebrow: 'Financial Literacy',
    title: 'Equipping <em>chairmen</em> to lead.',
    body: "We run dedicated training programmes for boda boda chairmen — the trusted leaders of every stage in Kenya. They learn financial management, savings discipline, basic bookkeeping and how to coach their riders through loan decisions. When the chairman gets it, the whole stage gets it.",
    accent: '#7AB800',
    badge: 'For boda chairmen',
    photoTag: 'Chairman training · Nairobi',
    photoId: 'impact01',
    photoPath: '../uploads/women photo-c433c1c0.jpg',
    bullets: [
      'Quarterly chairman workshops across 32 counties',
      'Financial-management curriculum co-built with Eleving SMART',
      'Cascade model: trained chairmen brief their stages',
    ],
    stat: { n: '420+', label: 'Chairmen trained in 2024' },
  },
  {
    n: '02',
    eyebrow: 'Community Activations',
    title: 'Service clinics &<br/><em>on-stage</em> outreach.',
    body: "Working with our manufacturer and trade partners, we bring services directly to the stages — free bike health checks, oil changes, brake inspections, flour donations for stage members, financial-literacy drives and on-the-spot product training. No queue, no charge, no catch.",
    accent: '#003478',
    badge: 'With our partners',
    photoTag: 'Service clinic · Mombasa Road',
    photoId: 'impact05',
    photoPath: '../uploads/boda stage-a0c0b0d0.jpg',
    bullets: [
      'Free service clinics & bike health checks',
      'Flour donations and family-support drives',
      'Financial-literacy drives & product training',
    ],
    partners: ['Bajaj', 'TVS', 'Abson', 'Boda Association of Kenya'],
    stat: { n: '60+', label: 'Activations run last year' },
  },
  {
    n: '03',
    eyebrow: 'Community Building',
    title: 'Real <em>structures.</em><br/>Real shelter.',
    body: "We build what stages actually need: boda boda shades that keep riders out of the sun and rain between trips, and chairman offices that double as a meeting room, a charging station and a place to handle stage paperwork. Local builders, local materials, local maintenance.",
    accent: '#86BE07',
    badge: 'Long-term investment',
    photoTag: 'Boda shade · under construction',
    photoId: 'impact02',
    photoPath: '../uploads/csr-2f61378b.jpg',
    bullets: [
      'Boda boda shades for stages in high-density routes',
      'Chairman offices with secure storage & meeting space',
      'Built with local artisans and stage-led maintenance',
    ],
    stat: { n: '18', label: 'Shades & offices completed' },
  },
  {
    n: '04',
    eyebrow: 'CSR Activities',
    title: 'Tree planting,<br/><em>donations</em> & more.',
    body: "From planting tens of thousands of trees alongside KFS and county partners to school donations, hospital drives and disaster response — we show up where Kenyan communities need a hand. Every Mogo branch picks at least one CSR cause each year, and our staff turn up to do the work.",
    accent: '#B9D626',
    badge: 'Staff-led',
    photoTag: 'Tree planting · Aberdares',
    photoId: 'impact03',
    photoPath: '../uploads/tree planting-8ba64093.jpg',
    bullets: [
      'Tree-planting drives with Kenya Forest Service',
      'School supplies, hospital and emergency donations',
      'Branch-led causes in every county we operate in',
    ],
    stat: { n: '50K+', label: 'Trees planted to date' },
  },
];

const ImpactPillars = () => {
  return (
    <>
      {/* Section opener: jump nav */}
      <section style={{padding:'56px 0 24px', background:'#fff', borderBottom:'1px solid var(--m-line-2)'}}>
        <div className="shell">
          <div className="impact-jumpnav" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 14}}>
            {IMPACT_PILLARS.map((p, i) => (
              <a key={p.n} href={`#pillar-${i+1}`} className="impact-jumpnav__card" style={{
                display:'block', padding:'18px 20px', borderRadius:'var(--r-lg)',
                background:'var(--m-cream)', border:'1px solid var(--m-line-2)',
                textDecoration:'none', color:'var(--m-ink)',
                transition:'transform .15s, box-shadow .15s, border-color .15s',
              }}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, letterSpacing:'.14em', color:'var(--m-muted)'}}>{p.n}</span>
                  <span style={{width:10, height:10, borderRadius:999, background: p.accent}}/>
                </div>
                <div style={{fontSize:15, fontWeight:700, lineHeight:1.25}}>{p.eyebrow}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {IMPACT_PILLARS.map((p, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={p.n}
            id={`pillar-${i+1}`}
            className="impact-pillar"
            style={{
              padding:'104px 0',
              background: i % 2 === 0 ? '#fff' : 'var(--m-cream)',
              borderBottom:'1px solid var(--m-line-2)',
              scrollMarginTop: 80,
            }}>
            <div className="shell">
              <div className="impact-pillar-grid" style={{
                display:'grid',
                gridTemplateColumns: flip ? '1fr 1fr' : '1fr 1fr',
                gap: 72, alignItems:'center',
              }}>
                {/* TEXT */}
                <div style={{order: flip ? 2 : 1}}>
                  <div style={{display:'inline-flex', alignItems:'center', gap:10, padding:'6px 12px', borderRadius:999, background:`${p.accent}1a`, color: p.accent, fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', fontWeight:700, marginBottom: 20}}>
                    <span style={{fontWeight:900}}>{p.n}</span>
                    <span style={{opacity:.4}}>·</span>
                    <span>{p.badge}</span>
                  </div>
                  <div className="h-eyebrow" style={{marginBottom:6}}><span className="dot" style={{background: p.accent}}/>{p.eyebrow}</div>
                  <h2 className="mega-head" style={{fontSize:'clamp(32px, 4vw, 56px)', lineHeight:1.02, marginTop:12, marginBottom:20}}
                      dangerouslySetInnerHTML={{__html: p.title}}/>
                  <p style={{fontSize:17, lineHeight:1.65, color:'var(--m-ink-2)', margin:'0 0 24px'}}>{p.body}</p>

                  <ul style={{listStyle:'none', padding:0, margin:'0 0 28px', display:'flex', flexDirection:'column', gap:10}}>
                    {p.bullets.map((b, j) => (
                      <li key={j} style={{display:'flex', alignItems:'flex-start', gap:12, fontSize:15.5, lineHeight:1.5}}>
                        <span style={{flexShrink:0, marginTop:6, width:6, height:6, borderRadius:999, background: p.accent}}/>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {p.partners && (
                    <div style={{marginBottom: 28}}>
                      <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-muted)', fontWeight:700, marginBottom:10}}>Partners</div>
                      <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                        {p.partners.map(pt => (
                          <span key={pt} style={{padding:'6px 12px', borderRadius:999, background:'#fff', border:'1px solid var(--m-line-2)', fontSize:13, fontWeight:600}}>{pt}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div style={{display:'inline-flex', alignItems:'baseline', gap:14, paddingTop:24, borderTop:'1px solid var(--m-line-2)'}}>
                    <div style={{fontFamily:'var(--font-display)', fontSize:48, fontWeight:900, color: p.accent, letterSpacing:'-.02em', lineHeight:1}}>{p.stat.n}</div>
                    <div style={{fontSize:13, color:'var(--m-ink-2)', maxWidth:200, lineHeight:1.4}}>{p.stat.label}</div>
                  </div>
                </div>

                {/* IMAGE */}
                <div style={{order: flip ? 1 : 2, position:'relative'}}>
                  <div style={{
                    position:'relative', aspectRatio:'4/5',
                    borderRadius:'var(--r-xl)', overflow:'hidden',
                    background:`linear-gradient(135deg, ${p.accent}33, ${p.accent}0a)`,
                    boxShadow:'0 22px 60px rgba(11,18,32,.12)',
                  }}>
                    <img src={(window.__resources && window.__resources[p.photoId]) || p.photoPath} alt={p.photoTag}
                         style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
                         onError={(e)=>{e.currentTarget.style.display='none';}}/>
                    <div style={{position:'absolute', inset:0, background:`linear-gradient(180deg, transparent 55%, rgba(0,0,0,.45) 100%)`}}/>
                    <div style={{position:'absolute', top:16, left:16, padding:'6px 12px', borderRadius:999, background:'rgba(255,255,255,.92)', color:'var(--m-ink)', fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', fontWeight:700}}>
                      {p.n} / {String(IMPACT_PILLARS.length).padStart(2,'0')}
                    </div>
                    <div style={{position:'absolute', bottom:16, left:16, right:16, color:'#fff', fontSize:12, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase'}}>
                      Photo · {p.photoTag}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Footer CTA */}
      <CTAFooter
        title="Partner with us on <em>impact.</em>"
        subtitle="Stage chairmen, NGOs, county partners or manufacturers — if you've got an idea for the next activation, we want to hear it."
        cta="Email the team"
        href="mailto:impact@mogo.co.ke"
      />
    </>
  );
};

Object.assign(window, { ImpactPillars, IMPACT_PILLARS, ImpactReport });

// ---------- ESG / Impact Report section ----------
const REPORT_URL = 'https://www.mogo.co.ke/esg/pdf/mogo-esg-report-2026.pdf';

const ImpactReport = () => {
  const [showEmbed, setShowEmbed] = React.useState(false);

  return (
    <section id="impact-report" style={{padding:'96px 0', background:'var(--m-ink)', color:'#fff', position:'relative', overflow:'hidden'}}>
      {/* Decorative blob */}
      <div aria-hidden="true" style={{position:'absolute', right:-120, top:-120, width: 420, height: 420, borderRadius: 999, background:'var(--m-green)', opacity:.22, filter:'blur(100px)', pointerEvents:'none'}}/>

      <div className="shell impact-report-grid" style={{position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56, alignItems:'center'}}>
        {/* TEXT */}
        <div>
          <div className="h-eyebrow" style={{color:'var(--m-green)'}}><span className="dot" style={{background:'var(--m-green)'}}/>ESG · 2026 Report</div>
          <h2 className="mega-head" style={{fontSize:'clamp(34px, 4.2vw, 56px)', lineHeight:1.02, marginTop:12, marginBottom:20, color:'#fff'}}>
            Read our <em style={{fontStyle:'italic', color:'var(--m-green)', fontFamily:'var(--font-accent)', fontWeight:400}}>Impact<br/>Report</em> here.
          </h2>
          <p style={{fontSize:17, lineHeight:1.65, color:'rgba(255,255,255,.78)', margin:'0 0 28px', maxWidth: 520}}>
            Every year we publish a full Environmental, Social and Governance report covering our lending practices, community programmes, environmental footprint and the policies that govern how we work.
          </p>

          <div style={{display:'flex', flexWrap:'wrap', gap:12, marginBottom: 32}}>
            <a href={REPORT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Read the 2026 report <span className="arrow-pill"><ArrowRight/></span>
            </a>
            <a href={REPORT_URL} download className="btn btn-ghost-light btn-lg">
              Download PDF
            </a>
          </div>

          <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, fontSize:13.5, color:'rgba(255,255,255,.7)'}}>
            {[
              ['📄', 'PDF · ~3 MB'],
              ['📅', 'Published 2026'],
              ['🌍', 'Group-wide policy'],
              ['🛡️', 'CBK-licensed'],
            ].map(([icon, label]) => (
              <li key={label} style={{display:'flex', alignItems:'center', gap:10}}>
                <span style={{fontSize:16}}>{icon}</span>{label}
              </li>
            ))}
          </ul>
        </div>

        {/* PREVIEW CARD — clicking opens inline iframe; defaults to placeholder to avoid loading PDFs cross-origin on first paint */}
        <div className="impact-report-frame" style={{position:'relative', borderRadius:'var(--r-xl)', overflow:'hidden', background:'#fff', boxShadow:'0 30px 80px rgba(0,0,0,.4)', aspectRatio:'3/4'}}>
          {showEmbed ? (
            <iframe
              src={`${REPORT_URL}#view=FitH&toolbar=1`}
              title="Mogo Kenya ESG Report 2026"
              style={{width:'100%', height:'100%', border:'none', display:'block', background:'#fff'}}
            />
          ) : (
            <ReportPreview onTryInline={()=>setShowEmbed(true)}/>
          )}
        </div>
      </div>
    </section>
  );
};

const ReportPreview = ({onTryInline}) => (
  <div style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:20, padding: 44, background:'linear-gradient(180deg, #fff, var(--m-cream))', color:'var(--m-ink)', textAlign:'center'}}>
    {/* Mock PDF cover */}
    <div style={{width: 132, height: 168, borderRadius:10, background:'#fff', border:'1px solid var(--m-line)', boxShadow:'0 16px 36px rgba(0,0,0,.12)', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column'}}>
      <div style={{height: 8, background:'var(--m-green)'}}/>
      <div style={{flex:1, padding:'14px 12px', display:'flex', flexDirection:'column', justifyContent:'space-between', textAlign:'left'}}>
        <div>
          <div style={{fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'.12em', color:'var(--m-muted)', fontWeight:700, marginBottom:8}}>MOGO · ESG 2026</div>
          <div style={{fontFamily:'var(--font-display)', fontSize:13, fontWeight:800, lineHeight:1.1, color:'var(--m-ink)'}}>Impact<br/>Report</div>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:3}}>
          {[1,.85,.6,.9,.5].map((w,i) => <div key={i} style={{height:3, width:`${w*100}%`, background:'var(--m-line)', borderRadius:2}}/>)}
        </div>
      </div>
    </div>

    <div>
      <div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:800, letterSpacing:'-.015em'}}>Mogo Kenya · ESG Report 2026</div>
      <div style={{fontSize:14, color:'var(--m-ink-2)', marginTop:6, maxWidth: 320}}>Click below to preview inline, or open the full report in a new tab.</div>
    </div>

    <div style={{display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center'}}>
      <button onClick={onTryInline} className="btn btn-dark">Preview inline</button>
      <a href={REPORT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Open in new tab <span className="arrow-pill"><ArrowRight/></span>
      </a>
    </div>
  </div>
);
