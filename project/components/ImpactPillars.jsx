// Mogo Impact — four pillar sections.
// Each pillar gets its own alternating two-column section so the categories
// read as distinct chapters rather than a flat grid of cards.

const IMPACT_PILLARS = [
  {
    n: '01',
    eyebrow: 'Financial Literacy',
    title: 'Understanding your loan,<br/>not just <em>paying it.</em>',
    body: "Many riders take a loan and simply pay it each week, without ever seeing the full picture. In 2025 Mogo ran financial education sessions across Western, Nyanza and Coastal Kenya to change that — helping people understand how their loan actually works, plan for the difficult weeks, and use credit with confidence. As one participant put it, it is not just about taking a loan but knowing how to use it.",
    accent: '#7AB800',
    badge: 'Rider education',
    photoTag: 'A participant at a financial education session, Voi',
    photoId: 'impact01',
    photoPath: '../uploads/mogo-impact-training.jpg',
    bullets: [
      'Understanding how the loan works, beyond the repayment',
      'Planning ahead and saving for the difficult weeks',
      'Using credit with confidence',
    ],
    stat: { n: '1,000+', label: 'Participants reached in 2025' },
  },
  {
    n: '02',
    eyebrow: 'Community Activations',
    title: 'Working with <em>partners,</em><br/>close to riders.',
    body: "Working with our manufacturer and trade partners, we bring services directly to the stages — free bike health checks, oil changes, brake inspections, food donations for stage members and on-the-spot product training. All services are offered free of charge.",
    accent: '#003478',
    badge: 'With our partners',
    photoTag: 'Service clinic on stage',
    photoId: 'impact05',
    photoPath: '../uploads/mogo-impact-activation.jpg',
    bullets: [
      'Free service clinics and bike health checks',
      'Road safety drives & product training',
      'Food donations and family-support drives',
    ],
    partners: ['Bajaj', 'TVS', 'Abson', 'Boda Association of Kenya'],
    stat: { n: '60+', label: 'Activations run' },
  },
  {
    n: '03',
    eyebrow: 'Community Building',
    title: 'Building what <em>riders</em> need.',
    body: "We build the infrastructure stages depend on: boda boda shades that keep riders out of the sun and rain between trips, and chairman offices that double as a meeting room, a charging station and a place to handle stage paperwork. We use local builders and local materials, and stages take over ongoing maintenance.",
    accent: '#86BE07',
    badge: 'Long-term investment',
    photoTag: 'Boda shade under construction',
    photoId: 'impact02',
    photoPath: '../uploads/mogo-impact-boda-stage.jpg',
    bullets: [
      'Boda boda shades for stages in high-density routes',
      'Chairman offices with secure storage and meeting space',
      'Built with local artisans and stage-led maintenance',
    ],
    stat: { n: '18', label: 'Shades and offices completed' },
  },
  {
    n: '04',
    eyebrow: 'CSR Activities',
    title: 'More than financing,<br/><em>closer</em> to communities.',
    body: "Beyond financing and the stages, Mogo supports the wider communities it works in. A standout partnership is with TechFix Training Institute, a Nairobi institute offering inclusive, hands-on training in mobile phone and computer repair, including for people with disabilities — Mogo donates equipment and raises funds for trainee scholarships. Alongside this, branches run local causes each year, from tree planting to school and emergency donations.",
    accent: '#B9D626',
    badge: 'Staff-led',
    photoTag: 'Donation to TechFix Training Institute',
    photoId: 'impact03',
    photoPath: '../uploads/mogo-impact-csr-community.jpg',
    bullets: [
      'Supporting TechFix Training Institute with equipment donations and scholarship fundraising, building practical repair skills',
      'Tree-planting drives with Kenya Forest Service',
      'School supplies, hospital and emergency donations, branch-led in the counties we operate in',
    ],
    stat: { n: '100+', label: 'IT devices donated in 2026' },
  },
];

const IMPACT_PHOTOS_FALLBACK = IMPACT_PILLARS.map(function(p) {
  return { src: p.photoPath, alt: p.photoTag, tag: p.photoTag };
});

const ImpactPillars = () => {
  const [impactPhotos, setImpactPhotos] = React.useState(
    (window.MOGO_MEDIA && window.MOGO_MEDIA.impact_photos) || IMPACT_PHOTOS_FALLBACK
  );

  React.useEffect(() => {
    const onUpdate = () => {
      const m = window.MOGO_MEDIA;
      if (m && Array.isArray(m.impact_photos) && m.impact_photos.length) {
        setImpactPhotos(m.impact_photos);
      }
    };
    window.addEventListener('mogo-media-updated', onUpdate);
    return () => window.removeEventListener('mogo-media-updated', onUpdate);
  }, []);

  return (
    <>
      {/* Jump nav — flat, no rounded cards */}
      <section style={{padding:'40px 0', background:'#fff', borderBottom:'1px solid var(--m-line-2)'}}>
        <div className="shell">
          <div className="impact-jumpnav" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)'}}>
            {IMPACT_PILLARS.map((p, i) => (
              <a key={p.n} href={`#pillar-${i+1}`} style={{
                display:'block', padding:'16px 20px',
                borderLeft: i === 0 ? `3px solid ${p.accent}` : `3px solid transparent`,
                textDecoration:'none', color:'var(--m-ink)',
                borderRight:'1px solid var(--m-line-2)',
                transition:'border-color .15s',
              }}
              onMouseEnter={(e)=>{ e.currentTarget.style.borderLeftColor = p.accent; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.borderLeftColor = i===0 ? p.accent : 'transparent'; }}
              >
                <div style={{fontSize:11, fontFamily:'inherit', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:6}}>{p.n}</div>
                <div style={{fontSize:15, fontWeight:700, lineHeight:1.25, color:'var(--m-ink)'}}>{p.eyebrow}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {IMPACT_PILLARS.map((p, i) => {
        const flip = i % 2 === 1;
        const photo = impactPhotos[i] || {};
        const photoSrc = photo.src || p.photoPath;
        const photoAlt = photo.alt || p.photoTag;
        return (
          <section
            key={p.n}
            id={`pillar-${i+1}`}
            className="impact-pillar"
            style={{
              padding:'96px 0',
              background: i % 2 === 0 ? '#fff' : 'var(--m-cream)',
              borderBottom:'1px solid var(--m-line-2)',
              scrollMarginTop: 80,
            }}>
            <div className="shell">
              <div className="impact-pillar-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 72, alignItems:'center'}}>

                {/* TEXT */}
                <div data-pillar-text style={{order: flip ? 2 : 1}}>
                  <div style={{fontSize:12, fontFamily:'inherit', letterSpacing:'.14em', textTransform:'uppercase', color: p.accent, fontWeight:700, marginBottom:16}}>{p.eyebrow}</div>
                  <h2 className="mega-head" style={{fontSize:'clamp(32px, 4vw, 56px)', lineHeight:1.02, marginBottom:20}}
                      dangerouslySetInnerHTML={{__html: p.title}}/>
                  <p style={{fontSize:17, lineHeight:1.65, color:'var(--m-ink-2)', margin:'0 0 28px'}}>{p.body}</p>

                  <ul style={{listStyle:'none', padding:0, margin:'0 0 32px', display:'flex', flexDirection:'column', gap:12}}>
                    {p.bullets.map((b, j) => (
                      <li key={j} style={{display:'flex', alignItems:'flex-start', gap:14, fontSize:15.5, lineHeight:1.5, paddingBottom:12, borderBottom:'1px solid var(--m-line-2)'}}>
                        <span style={{flexShrink:0, marginTop:8, width:4, height:4, background: p.accent}}/>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {p.partners && (
                    <div style={{marginBottom:32}}>
                      <div style={{fontSize:11, fontFamily:'inherit', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-muted)', fontWeight:700, marginBottom:10}}>Partners</div>
                      <div style={{display:'flex', flexWrap:'wrap', gap:16}}>
                        {p.partners.map(pt => (
                          <span key={pt} style={{fontSize:14, fontWeight:600, color:'var(--m-ink)'}}>{pt}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div style={{display:'flex', alignItems:'baseline', gap:14, paddingTop:24, borderTop:'2px solid var(--m-line-2)'}}>
                    <div style={{fontFamily:'var(--font-display)', fontSize:52, fontWeight:900, color: p.accent, letterSpacing:'-.02em', lineHeight:1}}>{p.stat.n}</div>
                    <div style={{fontSize:14, color:'var(--m-ink-2)', maxWidth:200, lineHeight:1.4}}>{p.stat.label}</div>
                  </div>
                </div>

                {/* IMAGE — no rounded corners, no overlays */}
                <div data-pillar-img style={{order: flip ? 1 : 2}}>
                  <div style={{position:'relative', aspectRatio:'3/2', borderRadius:'var(--r-xl)', overflow:'hidden', background:'var(--m-ink)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16}}>
                    <div aria-hidden="true" style={{position:'absolute', inset:0, background:`radial-gradient(120% 120% at 80% 15%, ${p.accent}22, transparent 55%)`, pointerEvents:'none'}}/>
                    <div style={{position:'relative', width:64, height:64, borderRadius:16, background:'rgba(255,255,255,.05)', border:`2px dashed ${p.accent}`, display:'grid', placeItems:'center'}}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.8"/><path d="M21 16l-5-5L4 20"/></svg>
                    </div>
                    <div style={{position:'relative', fontSize:10.5, fontFamily:'inherit', letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.45)'}}>Photo placeholder</div>
                  </div>
                  {photoAlt && <div style={{fontSize:12.5, color:'var(--m-muted)', marginTop:10, fontStyle:'italic', lineHeight:1.4}}>{photoAlt}</div>}
                </div>

              </div>
            </div>
          </section>
        );
      })}

      <CTAFooter
        title="Partner with us on <em>impact.</em>"
        subtitle="Stage chairmen, NGOs, county partners or manufacturers — if you've got an idea for the next collaboration, we want to hear it."
        cta="Email the team"
        href="mailto:impact@mogo.co.ke"
      />
    </>
  );
};

Object.assign(window, { ImpactPillars, IMPACT_PILLARS });

// ---------- ESG / Impact Report section ----------
// ImpactReport and ReportPreview are defined here (after ImpactPillars) and
// exported in a second Object.assign below so window.ImpactReport is valid.

const DEFAULT_REPORT_URL = 'https://www.mogo.co.ke/esg/pdf/mogo-esg-report-2026.pdf';

const ReportPreview = ({reportUrl, onTryInline}) => (
  <div style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:20, padding: 44, background:'linear-gradient(180deg, #fff, var(--m-cream))', color:'var(--m-ink)', textAlign:'center'}}>
    {/* Mock PDF cover */}
    <div style={{width: 132, height: 168, borderRadius:10, background:'#fff', border:'1px solid var(--m-line)', boxShadow:'0 16px 36px rgba(0,0,0,.12)', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column'}}>
      <div style={{height: 8, background:'var(--m-green)'}}/>
      <div style={{flex:1, padding:'14px 12px', display:'flex', flexDirection:'column', justifyContent:'space-between', textAlign:'left'}}>
        <div>
          <div style={{fontFamily: 'inherit', fontSize:8, letterSpacing:'.12em', color:'var(--m-muted)', fontWeight:700, marginBottom:8}}>MOGO · ESG 2026</div>
          <div style={{fontFamily:'var(--font-display)', fontSize:13, fontWeight:800, lineHeight:1.1, color:'var(--m-ink)'}}>Impact<br/>Report</div>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:3}}>
          {[1,.85,.6,.9,.5].map((w,i) => <div key={i} style={{height:3, width:`${w*100}%`, background:'var(--m-line)', borderRadius:2}}/>)}
        </div>
      </div>
    </div>

    <div>
      <div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:800, letterSpacing:'-.015em'}}>Mogo Kenya · ESG Report 2026</div>
      <div style={{fontSize:14, color:'var(--m-ink-2)', marginTop:6, maxWidth: 320}}>Click to preview inline, or open in a new tab.</div>
    </div>

    <div style={{display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center'}}>
      <button onClick={onTryInline} className="btn btn-dark">Preview inline</button>
      <a href={reportUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Open in new tab <span className="arrow-pill"><ArrowRight/></span>
      </a>
    </div>
  </div>
);

const ImpactReport = () => {
  const [showEmbed, setShowEmbed] = React.useState(false);
  const [reportUrl, setReportUrl] = React.useState(
    (window.MOGO_SETTINGS && window.MOGO_SETTINGS.impact_report_url) || DEFAULT_REPORT_URL
  );

  React.useEffect(() => {
    const onSettings = () => {
      const url = (window.MOGO_SETTINGS && window.MOGO_SETTINGS.impact_report_url) || DEFAULT_REPORT_URL;
      setReportUrl(url);
      setShowEmbed(false);
    };
    window.addEventListener('mogo-settings-updated', onSettings);
    return () => window.removeEventListener('mogo-settings-updated', onSettings);
  }, []);

  // Google Docs viewer works cross-origin without X-Frame-Options restrictions
  const embedUrl = 'https://docs.google.com/viewer?url=' + encodeURIComponent(reportUrl) + '&embedded=true';

  return (
    <section id="impact-report" style={{padding:'96px 0', background:'var(--m-ink)', color:'#fff', position:'relative', overflow:'hidden'}}>
      <div aria-hidden="true" style={{position:'absolute', right:-120, top:-120, width: 420, height: 420, borderRadius: 999, background:'var(--m-green)', opacity:.22, filter:'blur(100px)', pointerEvents:'none'}}/>

      <div className="shell impact-report-grid" style={{position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56, alignItems:'center'}}>
        {/* TEXT */}
        <div>
          <div className="h-eyebrow" style={{color:'var(--m-green)'}}><span className="dot" style={{background:'var(--m-green)'}}/>ESG · 2026 Report</div>
          <h2 className="mega-head" style={{fontSize:'clamp(34px, 4.2vw, 56px)', lineHeight:1.02, marginTop:12, marginBottom:20, color:'#fff'}}>
            Read our <em style={{fontStyle:'italic', color:'var(--m-green)', fontWeight:400}}>Impact<br/>Report</em> here.
          </h2>
          <p style={{fontSize:17, lineHeight:1.65, color:'rgba(255,255,255,.78)', margin:'0 0 28px', maxWidth: 520}}>
            Every year we publish a full Environmental, Social and Governance report covering our lending practices, community programmes, environmental footprint and the policies that govern how we work.
          </p>

          <div style={{display:'flex', flexWrap:'wrap', gap:12, marginBottom: 32}}>
            <a href={reportUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Read the 2026 report <span className="arrow-pill"><ArrowRight/></span>
            </a>
            <a href={reportUrl} download className="btn btn-ghost-light btn-lg">
              Download PDF
            </a>
          </div>
        </div>

        {/* PREVIEW CARD */}
        <div className="impact-report-frame" style={{position:'relative', borderRadius:'var(--r-xl)', overflow:'hidden', background:'#fff', boxShadow:'0 30px 80px rgba(0,0,0,.4)', aspectRatio:'3/4'}}>
          {showEmbed ? (
            <iframe
              src={embedUrl}
              title="Mogo Kenya ESG Report 2026"
              style={{width:'100%', height:'100%', border:'none', display:'block', background:'#fff'}}
            />
          ) : (
            <ReportPreview reportUrl={reportUrl} onTryInline={() => setShowEmbed(true)}/>
          )}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ImpactReport, ReportPreview });

// ─── BodaBoomReport ──────────────────────────────────────────────────────────
// Placeholder section for the "Boda-boda Boom" report. Once a PDF URL is set in
// CMS settings (boda_boom_report_url) it shows real Read/Download buttons;
// until then it shows a "Coming soon" state with an upload placeholder preview.
const BodaBoomReport = () => {
  const getUrl = () => (window.MOGO_SETTINGS && window.MOGO_SETTINGS.boda_boom_report_url) || '';
  const [reportUrl, setReportUrl] = React.useState(getUrl());

  React.useEffect(() => {
    const onSettings = () => setReportUrl(getUrl());
    window.addEventListener('mogo-settings-updated', onSettings);
    return () => window.removeEventListener('mogo-settings-updated', onSettings);
  }, []);

  const hasReport = !!(reportUrl && reportUrl.trim());

  return (
    <section id="boda-boom-report" style={{padding:'96px 0', background:'var(--m-cream)', position:'relative', overflow:'hidden'}}>
      <div className="shell impact-report-grid" style={{position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56, alignItems:'center'}}>
        {/* TEXT */}
        <div>
          <div className="h-eyebrow"><span className="dot"/>Report · Boda-boda Boom</div>
          <h2 className="mega-head" style={{fontSize:'clamp(34px, 4.2vw, 56px)', lineHeight:1.02, marginTop:12, marginBottom:20}}>
            The <em style={{fontStyle:'italic', color:'var(--m-green-ink)', fontWeight:400}}>Boda-boda Boom</em> report.
          </h2>
          <p style={{fontSize:17, lineHeight:1.65, color:'var(--m-ink-2)', margin:'0 0 28px', maxWidth: 520}}>
            Our deep-dive into Kenya&rsquo;s boda-boda economy &mdash; the riders, the routes, and the role asset financing plays in turning a motorbike into a livelihood.
          </p>

          <div style={{display:'flex', flexWrap:'wrap', gap:12, marginBottom: 8}}>
            {hasReport && (
              <>
                <a href={reportUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Read the report <span className="arrow-pill"><ArrowRight/></span>
                </a>
                <a href={reportUrl} download className="btn btn-ghost btn-lg">Download PDF</a>
              </>
            )}
          </div>
        </div>

        {/* PREVIEW PLACEHOLDER */}
        <div className="impact-report-frame" style={{position:'relative', borderRadius:'var(--r-xl)', overflow:'hidden', background:'#fff', border:'2px dashed var(--m-line)', aspectRatio:'3/4', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, textAlign:'center', padding:32}}>
          <div style={{width:64, height:64, borderRadius:16, background:'var(--m-cream)', display:'grid', placeItems:'center'}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--m-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg>
          </div>
          <div style={{fontSize:12.5, fontFamily:'inherit', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-muted)', lineHeight:1.6}}>
            Boda-boda Boom report<br/>placeholder
          </div>
          <div style={{fontSize:13, color:'var(--m-muted)', maxWidth:240, lineHeight:1.5}}>Add the report PDF (boda_boom_report_url) to replace this placeholder.</div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { BodaBoomReport });
