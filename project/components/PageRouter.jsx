// Page content for all About / Impact sub-pages

// ---------- Customer story videos ----------
// Pulled from the official MOGO Kenya channel (youtube.com/@MOGOKenya).
// The channel uploads playlist (UU…) lets the featured player and each card
// surface real videos straight from the channel.
const MOGO_CHANNEL_ID = 'UCUYcMWl3g2CQ7WPfanZstWg';
const MOGO_UPLOADS = 'UUUYcMWl3g2CQ7WPfanZstWg';
const MOGO_CHANNEL_URL = 'https://www.youtube.com/@MOGOKenya/videos';

const MOGO_STORIES = [
  { index:0, product:'Logbook Loan',     name:'Evans',              role:'Father of three',  city:'Nairobi',  tagline:"A logbook loan that put three kids through school" },
  { index:1, product:'Electric Bike',    name:'Oscar',              role:'E-bike rider',     city:'Nairobi',  tagline:"The e-bike that rides like a Range Rover" },
  { index:2, product:'Boda Financing',   name:'Japheth Karengeka',  role:'Boda rider',       city:'Nairobi',  tagline:"Construction by day, boda by evening" },
  { index:3, product:'Best Price',       name:'MOGO Kenya',         role:'Product',          city:'Nationwide', tagline:"The most affordable, transparent car logbook loan" },
  { index:4, product:'SheRides Green',   name:'Malindi Stages',     role:'Community',        city:'Malindi',  tagline:"Empowering women riders, greening the stages" },
  { index:5, product:'Handset Loans',    name:'100,000+ Phones',    role:'Milestone',        city:'Kenya',    tagline:"100,000 phones financed in four months" },
  { index:6, product:'Customer Story',   name:'MOGO Riders',        role:'Testimonials',     city:'Kenya',    tagline:"What ownership really changed for them" },
];
Object.assign(window, { MOGO_STORIES, MOGO_CHANNEL_ID, MOGO_UPLOADS, MOGO_CHANNEL_URL });

// ---------- Interactive SAKA stolen-vehicle check ----------
// Demo lookup: a small set of "flagged" identifiers. Anything not on the list
// returns a clean result. Matching is case-insensitive and ignores spaces.
const SAKA_FLAGGED = {
  plate:   ['KDA123A', 'KMCG456B', 'KCY789J'],
  chassis: ['KMFG41BP000123', 'NZE1419002233', 'JF1GH7'],
};
const SAKA_CONTACT = '0719 089 999';

const SakaCheck = () => {
  const [mode, setMode] = React.useState('plate'); // 'plate' | 'chassis'
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState(null); // null | 'clean' | 'flagged'

  const norm = (s) => s.replace(/\s+/g, '').toUpperCase();
  const placeholder = mode === 'plate' ? 'e.g. KDA 123A' : 'e.g. KMFG41BP000123';

  const reset = (next) => { setMode(next); setValue(''); setResult(null); };

  const check = () => {
    if (!norm(value)) return;
    const hit = SAKA_FLAGGED[mode].some((f) => norm(f) === norm(value));
    setResult(hit ? 'flagged' : 'clean');
  };

  const tabStyle = (active) => ({
    flex: 1, padding: '10px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase',
    fontWeight: 600, transition: 'all .15s',
    background: active ? 'var(--m-ink)' : 'transparent',
    color: active ? '#fff' : 'var(--m-ink-2)',
  });

  return (
    <div style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', padding: 28, border:'1px solid var(--m-line-2)'}}>
      {/* Mode toggle */}
      <div style={{display:'flex', gap:4, padding:4, background:'#fff', borderRadius:12, border:'1px solid var(--m-line-2)', marginBottom:18}}>
        <button type="button" onClick={() => reset('plate')} style={tabStyle(mode === 'plate')}>Plate number</button>
        <button type="button" onClick={() => reset('chassis')} style={tabStyle(mode === 'chassis')}>Chassis number</button>
      </div>

      <label style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-ink-2)'}}>
        {mode === 'plate' ? 'Registration plate' : 'Chassis number'}
      </label>
      <div style={{display:'flex', gap:8, marginTop:12}}>
        <input value={value} placeholder={placeholder}
          onChange={(e) => { setValue(e.target.value); setResult(null); }}
          onKeyDown={(e) => { if (e.key === 'Enter') check(); }}
          style={{flex:1, minWidth:0, padding:'14px 16px', fontSize:15, fontFamily:'var(--font-mono)', border:'1px solid var(--m-line-2)', borderRadius:10, background:'#fff', outline:'none', letterSpacing:'.04em'}}/>
        <button type="button" onClick={check} className="btn btn-dark" style={{flexShrink:0}}>Check SAKA</button>
      </div>

      {result === 'clean' && (
        <div style={{marginTop:16, display:'flex', gap:12, alignItems:'flex-start', background:'var(--m-green-soft)', border:'1px solid var(--m-green)', borderRadius:14, padding:'16px 18px'}}>
          <span style={{flexShrink:0, width:24, height:24, borderRadius:999, background:'var(--m-green)', display:'grid', placeItems:'center', marginTop:1}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <div>
            <div style={{fontWeight:700, fontSize:15, color:'var(--m-green-deep)'}}>No match found</div>
            <div style={{fontSize:13.5, color:'var(--m-ink-2)', lineHeight:1.5, marginTop:3}}>
              This vehicle is not in the SAKA stolen-vehicle database. Always verify the logbook and seller details too.
            </div>
          </div>
        </div>
      )}

      {result === 'flagged' && (
        <div style={{marginTop:16, display:'flex', gap:12, alignItems:'flex-start', background:'#FDECE6', border:'1px solid var(--m-coral)', borderRadius:14, padding:'16px 18px'}}>
          <span style={{flexShrink:0, width:24, height:24, borderRadius:999, background:'var(--m-coral)', display:'grid', placeItems:'center', marginTop:1}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 7v6M12 17h.01" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <div>
            <div style={{fontWeight:700, fontSize:15, color:'#B23410'}}>Match found — do not buy</div>
            <div style={{fontSize:13.5, color:'var(--m-ink-2)', lineHeight:1.5, marginTop:3}}>
              This vehicle is flagged in the SAKA database. Please contact us immediately on{' '}
              <a href={`tel:${SAKA_CONTACT.replace(/\s/g,'')}`} style={{color:'#B23410', fontWeight:700, whiteSpace:'nowrap'}}>{SAKA_CONTACT}</a>.
            </div>
          </div>
        </div>
      )}

      <p style={{fontSize:12, color:'var(--m-ink-2)', marginTop:14, margin:'14px 0 0'}}>This is a demo lookup. For live checks visit mogo.co.ke/saka.</p>
    </div>
  );
};
Object.assign(window, { SakaCheck });

// ---------- Report a stolen vehicle ----------
const TheftReport = () => {
  const empty = { name:'', phone:'', vtype:'', plate:'', make:'', model:'', year:'', chassis:'' };
  const [form, setForm] = React.useState(empty);
  const [file, setFile] = React.useState(null);
  const [consent, setConsent] = React.useState(false);
  const [showErrors, setShowErrors] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onFile = (e) => setFile(e.target.files && e.target.files[0] ? e.target.files[0] : null);

  const phoneOk = /^\+?[\d\s-]{7,}$/.test(form.phone);
  const required = ['name','vtype','plate','make','model','year','chassis'];
  const fieldsOk = required.every((k) => String(form[k]).trim()) && phoneOk;
  const isValid = fieldsOk && consent;

  const submit = (e) => {
    e.preventDefault();
    setShowErrors(true);
    if (!isValid) return;
    setSubmitted(true);
  };

  const err = (k) => showErrors && !String(form[k]).trim();
  const fieldStyle = (k) => ({
    width:'100%', minWidth:0, padding:'12px 14px', fontSize:14.5,
    border:`1px solid ${err(k) ? 'var(--m-coral)' : 'rgba(255,255,255,.18)'}`,
    borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff',
    fontFamily:'inherit', outline:'none', transition:'border-color .15s',
  });
  const labelStyle = { display:'block', fontSize:10.5, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginBottom:6 };

  if (submitted) {
    return (
      <div style={{background:'var(--m-ink)', borderRadius:'var(--r-xl)', padding: 32, color:'#fff', textAlign:'center'}}>
        <div style={{width:60, height:60, borderRadius:999, background:'var(--m-green)', margin:'0 auto 20px', display:'grid', placeItems:'center'}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#0B1220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{fontSize:24, fontWeight:600, fontFamily:'var(--font-display)', letterSpacing:'-.02em', marginBottom:10}}>Theft report submitted</div>
        <p style={{fontSize:14.5, color:'rgba(255,255,255,.7)', lineHeight:1.55, margin:'0 auto', maxWidth:340}}>
          Thank you. The Mogo team will review your report. If verified, the vehicle will be listed as stolen on the SAKA platform.
        </p>
      </div>
    );
  }

  return (
    <div style={{background:'var(--m-ink)', borderRadius:'var(--r-xl)', padding: 28, color:'#fff'}}>
      <p style={{fontSize:14.5, color:'rgba(255,255,255,.7)', lineHeight:1.55, margin:'0 0 22px'}}>
        Fill out the following report for stolen vehicles. This information will be reviewed by the Mogo team and, if correct, will be listed as stolen.
      </p>
      <form onSubmit={submit} style={{display:'grid', gap:14}}>
        <div>
          <label style={labelStyle} htmlFor="tr-name">Full name</label>
          <input id="tr-name" type="text" autoComplete="name" placeholder="Jane Wanjiru" value={form.name} onChange={set('name')} style={fieldStyle('name')}/>
        </div>
        <div>
          <label style={labelStyle} htmlFor="tr-phone">Phone number</label>
          <input id="tr-phone" type="tel" autoComplete="tel" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={set('phone')}
            style={{...fieldStyle('phone'), border:`1px solid ${showErrors && !phoneOk ? 'var(--m-coral)' : 'rgba(255,255,255,.18)'}`}}/>
        </div>
        <div>
          <label style={labelStyle} htmlFor="tr-vtype">Vehicle type</label>
          <div style={{position:'relative'}}>
            <select id="tr-vtype" value={form.vtype} onChange={set('vtype')}
              style={{...fieldStyle('vtype'), appearance:'none', WebkitAppearance:'none', cursor:'pointer', color: form.vtype ? '#fff' : 'rgba(255,255,255,.45)', paddingRight:38}}>
              <option value="" disabled>Select vehicle type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="tuk-tuk">Tuk-tuk</option>
            </select>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', pointerEvents:'none'}}>
              <path d="M3 4.5L6 7.5L9 4.5" stroke="rgba(255,255,255,.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
          <div>
            <label style={labelStyle} htmlFor="tr-plate">Plate number</label>
            <input id="tr-plate" type="text" placeholder="KDA 123A" value={form.plate} onChange={set('plate')} style={{...fieldStyle('plate'), fontFamily:'var(--font-mono)', letterSpacing:'.04em'}}/>
          </div>
          <div>
            <label style={labelStyle} htmlFor="tr-year">Year</label>
            <input id="tr-year" type="number" inputMode="numeric" placeholder="2019" min="1950" max="2026" value={form.year} onChange={set('year')} style={fieldStyle('year')}/>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
          <div>
            <label style={labelStyle} htmlFor="tr-make">Make</label>
            <input id="tr-make" type="text" placeholder="Toyota" value={form.make} onChange={set('make')} style={fieldStyle('make')}/>
          </div>
          <div>
            <label style={labelStyle} htmlFor="tr-model">Model</label>
            <input id="tr-model" type="text" placeholder="Probox" value={form.model} onChange={set('model')} style={fieldStyle('model')}/>
          </div>
        </div>
        <div>
          <label style={labelStyle} htmlFor="tr-chassis">Chassis number</label>
          <input id="tr-chassis" type="text" placeholder="KMFG41BP000123" value={form.chassis} onChange={set('chassis')} style={{...fieldStyle('chassis'), fontFamily:'var(--font-mono)', letterSpacing:'.04em'}}/>
        </div>

        <div>
          <label style={labelStyle}>OB number document <span style={{textTransform:'none', letterSpacing:0, color:'rgba(255,255,255,.4)'}}>(PDF, JPG or PNG)</span></label>
          <label htmlFor="tr-ob" style={{
            display:'flex', alignItems:'center', gap:12, padding:'12px 14px', borderRadius:10, cursor:'pointer',
            border:'1px dashed rgba(255,255,255,.28)', background:'rgba(255,255,255,.04)', transition:'border-color .15s',
          }}>
            <span style={{flexShrink:0, width:34, height:34, borderRadius:8, background:'rgba(255,255,255,.08)', display:'grid', placeItems:'center'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 16V4M12 4L7 9M12 4l5 5M5 20h14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span style={{fontSize:13.5, color: file ? '#fff' : 'rgba(255,255,255,.6)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
              {file ? file.name : 'Click to upload your OB document'}
            </span>
          </label>
          <input id="tr-ob" type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" onChange={onFile} style={{display:'none'}}/>
        </div>

        <label style={{display:'flex', gap:11, alignItems:'flex-start', cursor:'pointer', marginTop:4}}>
          <input type="checkbox" checked={consent} onChange={() => setConsent((c) => !c)}
            style={{
              appearance:'none', WebkitAppearance:'none', flexShrink:0, width:20, height:20, marginTop:1, borderRadius:6,
              border:`1.5px solid ${showErrors && !consent ? 'var(--m-coral)' : 'rgba(255,255,255,.3)'}`,
              backgroundColor: consent ? 'var(--m-green)' : 'transparent', cursor:'pointer',
              backgroundImage: consent ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M5 12l5 5L20 7' stroke='%230B1220' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")" : 'none',
              backgroundRepeat:'no-repeat', backgroundPosition:'center', transition:'all .15s',
            }}/>
          <span style={{fontSize:12.5, lineHeight:1.55, color:'rgba(255,255,255,.72)'}}>
            I consent to the processing of my personal data for the purpose of publishing a stolen vehicle report on this Platform. I am aware that the vehicle information submitted here will be made available to any user of the Platform. Personal data is processed in accordance with the Platform's{' '}
            <a href="https://core.mogo.co.ke/storage/library/Report%20Stolen%20Vehicle%20Page%20T&C_6840401cad74a.pdf" target="_blank" rel="noopener noreferrer" style={{color:'var(--m-green-2)', textDecoration:'underline', fontWeight:600}}>Terms and Conditions</a>.
          </span>
        </label>

        {showErrors && !isValid && (
          <p style={{fontSize:12, color:'var(--m-coral)', margin:0, fontWeight:600}}>
            Please complete all fields and accept the consent above.
          </p>
        )}

        <button type="submit" className="btn btn-primary" style={{justifyContent:'center', width:'100%', marginTop:2}}>
          Submit report <span className="arrow-pill"><ArrowRight/></span>
        </button>
      </form>
    </div>
  );
};
Object.assign(window, { TheftReport });

// NewsList — paginated press feed. Shows a fixed page size with prev/next
// and numbered page controls; changing page scrolls back to the list top.
const NEWS_PER_PAGE = 8;
const NewsList = () => {
  const items = window.MOGO_NEWS || [];
  const [page, setPage] = React.useState(0);
  const pages = Math.max(1, Math.ceil(items.length / NEWS_PER_PAGE));
  const topRef = React.useRef(null);
  const start = page * NEWS_PER_PAGE;
  const shown = items.slice(start, start + NEWS_PER_PAGE);

  const go = (p) => {
    const next = Math.min(Math.max(0, p), pages - 1);
    setPage(next);
    if (topRef.current) {
      const y = topRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section style={{padding:'72px 0 120px', background:'#fff'}}>
      <div className="shell" style={{maxWidth: 1180}}>
        <div ref={topRef} style={{borderBottom:'1px solid var(--m-line)', marginBottom:8}}></div>
        <div>
          {shown.map((n, idx) => {
            const i = start + idx;
            return (
              <a key={n.slug} href={`./news-article.html?slug=${n.slug}`}
                 style={{display:'grid', gridTemplateColumns:'220px 1fr auto', gap: 40, padding:'32px 0', borderBottom:'1px solid var(--m-line-2)', textDecoration:'none', color:'var(--m-ink)', alignItems:'start'}}>
                <div style={{aspectRatio:'4/3', background:`linear-gradient(135deg, hsl(${(i*37)%360} 24% 78%), hsl(${(i*37+60)%360} 20% 58%))`, borderRadius:'var(--r-lg)', position:'relative', overflow:'hidden'}}>
                  <div className="grain"/>
                </div>
                <div style={{paddingTop:4}}>
                  <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:12, display:'flex', gap:12}}>
                    <span>{n.date}</span>
                    <span style={{color:'var(--m-line)'}}>·</span>
                    <span>{n.tag}</span>
                  </div>
                  <h3 style={{fontSize:28, fontWeight:600, letterSpacing:'-.02em', lineHeight:1.15, margin:'0 0 14px', fontFamily:'var(--font-display)', maxWidth:640}}>{n.title}</h3>
                  <p style={{fontSize:15.5, color:'var(--m-ink-2)', lineHeight:1.6, margin:0, maxWidth:640}}>{n.dek}</p>
                </div>
                <div style={{paddingTop:16, display:'flex', alignItems:'center', gap:8, fontSize:13, fontWeight:600, whiteSpace:'nowrap'}}>
                  Read story <ArrowRight/>
                </div>
              </a>
            );
          })}
        </div>

        {pages > 1 && (
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginTop:48}}>
            <button onClick={()=>go(page-1)} disabled={page===0}
              style={{display:'inline-flex', alignItems:'center', gap:8, padding:'10px 16px', borderRadius:999, border:'1px solid var(--m-line-2)', background:'#fff', color: page===0?'var(--m-line)':'var(--m-ink)', fontSize:13.5, fontWeight:600, cursor: page===0?'not-allowed':'pointer', fontFamily:'inherit'}}>
              <span style={{transform:'rotate(180deg)', display:'inline-flex'}}><ArrowRight/></span> Previous
            </button>
            <div style={{display:'flex', gap:6, margin:'0 8px'}}>
              {Array.from({length: pages}).map((_, p) => (
                <button key={p} onClick={()=>go(p)}
                  aria-current={p===page}
                  style={{width:40, height:40, borderRadius:999, border:'1px solid '+(p===page?'var(--m-ink)':'var(--m-line-2)'), background: p===page?'var(--m-ink)':'#fff', color: p===page?'#fff':'var(--m-ink)', fontSize:13.5, fontWeight:600, cursor:'pointer', fontFamily:'var(--font-mono)'}}>
                  {p+1}
                </button>
              ))}
            </div>
            <button onClick={()=>go(page+1)} disabled={page===pages-1}
              style={{display:'inline-flex', alignItems:'center', gap:8, padding:'10px 16px', borderRadius:999, border:'1px solid var(--m-line-2)', background:'#fff', color: page===pages-1?'var(--m-line)':'var(--m-ink)', fontSize:13.5, fontWeight:600, cursor: page===pages-1?'not-allowed':'pointer', fontFamily:'inherit'}}>
              Next <ArrowRight/>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
Object.assign(window, { NewsList });


// ─── AboutPageBody — driven by content/about.json ────────────────────────────
const ABOUT_FALLBACK = {
  hero_eyebrow: 'About us',
  hero_title: 'About <em>Mogo.</em>',
  hero_kicker: 'Mogo Kenya is part of Eleving Group — an international FinTech operating in 17 countries across three continents.',
  mission_headline: 'Upward <em>mobility,</em><br/>for every Kenyan.',
  mission_body: "We facilitate upward social mobility across Kenyan communities by creating access to innovative and sustainable financial solutions — from Boda bodas and tuk-tuks to used cars, logbook loans, check-off and business financing.\n\nOur customers are hustlers, civil servants, traders, teachers, boda riders and shopkeepers. Our job is to help them own their tools of trade, grow their businesses, and build a future.",
  stat1_n: '100K+', stat1_label: 'Vehicles financed on Kenyan roads',
  stat2_n: '84+',   stat2_label: 'Branches across the country',
  stat3_n: '17',    stat3_label: 'Countries in the Eleving Group',
  eleving_title: 'Part of the <em>Eleving</em> Group.',
  eleving_body1: "Eleving Group is a reliable and internationally trusted partner offering car financing and logbook loans to its customers in 17 countries across Europe, Asia, and Africa. The Group\'s historical customer base exceeds 1.8 million customers globally, while the total volume of loans issued surpasses EUR 2.4 billion.",
  eleving_body2: "We are one of the very few financial companies globally that finance vehicles of any age, brand or model, and we give our customers the privilege to choose from a vast network of trusted dealerships.",
  award_text: "Ranked #1 in Fintech, Financial Services & Insurance and 57th overall in the FT Europe\'s Long-Term Growth Champions 2025 — and among Europe\'s 1,000 fastest-growing companies two years running (2020–2021).",
  award_badge_image: '',
  countries: 'Kenya,Uganda,Tanzania,Latvia,Lithuania,Estonia,Romania,Moldova,Georgia,Armenia,Uzbekistan',
  cta_title: 'Ready to <em>move up?</em>',
  cta_subtitle: 'Find your nearest branch or start an application online.',
};

const AboutPageBody = () => {
  const [d, setD] = React.useState({...ABOUT_FALLBACK, ...(window.MOGO_ABOUT || {})});
  React.useEffect(() => {
    const onUpdate = () => setD({...ABOUT_FALLBACK, ...(window.MOGO_ABOUT || {})});
    window.addEventListener('mogo-about-updated', onUpdate);
    return () => window.removeEventListener('mogo-about-updated', onUpdate);
  }, []);
  const missionParas = (d.mission_body || '').split(/\n\n+/).filter(Boolean);
  const countries = (d.countries || '').split(',').map(c => c.trim()).filter(Boolean);
  return (
    <>
      <PageHero eyebrow={d.hero_eyebrow} title={d.hero_title} kicker={d.hero_kicker}/>
      <TwoCol
        left={<><div className="h-eyebrow"><span className="dot"/>Our mission</div><h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 64px)', marginTop:12}} dangerouslySetInnerHTML={{__html: d.mission_headline}}/></>}
        right={<div style={{fontSize:18, lineHeight:1.65, color:'var(--m-ink-2)'}}>{missionParas.map((p,i)=><p key={i} style={{margin:i>0?'18px 0 0':0}}>{p}</p>)}</div>}
      />
      <StatsBand stats={[{n:d.stat1_n,label:d.stat1_label},{n:d.stat2_n,label:d.stat2_label},{n:d.stat3_n,label:d.stat3_label}]}/>
      <SafariYetu/>
      <Prose title={d.eleving_title}>
        <p>{d.eleving_body1}</p>
        {d.eleving_body2 && <p style={{marginTop:18}}>{d.eleving_body2}</p>}
        <div style={{marginTop:36,display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:32,alignItems:'center',padding:'28px 32px',background:'var(--m-cream)',border:'1px solid var(--m-line-2)',borderRadius:'var(--r-xl)'}} className="ft-award-block">
          <div>
            <div style={{fontSize:11,fontFamily:'var(--font-mono)',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--m-green-ink)',marginBottom:12}}><span className="dot" style={{display:'inline-block',width:6,height:6,borderRadius:999,background:'var(--m-green)',marginRight:8,verticalAlign:'middle'}}/>Recognition</div>
            <p style={{fontSize:15.5,lineHeight:1.55,color:'var(--m-ink)',margin:0}}>{d.award_text}</p>
          </div>
          {d.award_badge_image ? <img src={d.award_badge_image} alt="Award badge" style={{maxWidth:200,marginLeft:'auto',borderRadius:12,display:'block'}}/> : <div style={{aspectRatio:'1/1',maxWidth:200,marginLeft:'auto',background:'repeating-linear-gradient(135deg,#fff 0 10px,#faf5ec 10px 20px)',border:'1px dashed var(--m-line-2)',borderRadius:12,display:'grid',placeItems:'center',textAlign:'center',padding:18}}><div style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--m-muted)'}}>Drop award badge here</div></div>}
        </div>
        <div style={{marginTop:36,display:'flex',flexWrap:'wrap',gap:8}}>{countries.map(c=><span key={c} style={{padding:'6px 12px',border:'1px solid var(--m-line-2)',borderRadius:999,fontSize:13,fontWeight:500}}>{c}</span>)}</div>
      </Prose>
      <CTAFooter title={d.cta_title} subtitle={d.cta_subtitle}/>
    </>
  );
};

// ─── MogoImpactBody — driven by content/impact.json ──────────────────────────
const IMPACT_FALLBACK = {
  hero_eyebrow: 'Mogo Impact',
  hero_title: "Unlocking <em>progress,</em><br/>one community at a time.",
  hero_kicker: "The money we lend doesn\'t sit still. It buys a boda. Pays school fees. Stocks a shop. Feeds a family.",
  stat1_n: '100K+',    stat1_label: 'Kenyans financed since we started',
  stat2_n: 'KES 20B+', stat2_label: 'Lent into the Kenyan economy',
  stat3_n: '84+',      stat3_label: 'Branches employing local staff',
  lending_headline: 'We only <em>lend</em><br/>what you can repay.',
  lending_body: "Every Mogo application is assessed against your real income and your real expenses. We build affordable repayment plans, disclose every fee up front, and we\'d rather restructure a loan than penalise you.\n\nThat\'s why over 100,000 Kenyans have trusted us — and why we\'re still growing.",
};

const MogoImpactBody = () => {
  const [d, setD] = React.useState({...IMPACT_FALLBACK, ...(window.MOGO_IMPACT || {})});
  React.useEffect(() => {
    const onUpdate = () => setD({...IMPACT_FALLBACK, ...(window.MOGO_IMPACT || {})});
    window.addEventListener('mogo-impact-updated', onUpdate);
    return () => window.removeEventListener('mogo-impact-updated', onUpdate);
  }, []);
  const lendingParas = (d.lending_body || '').split(/\n\n+/).filter(Boolean);
  return (
    <>
      <PageHero eyebrow={d.hero_eyebrow} title={d.hero_title} kicker={d.hero_kicker}/>
      <StatsBand accent="var(--m-green)" stats={[{n:d.stat1_n,label:d.stat1_label},{n:d.stat2_n,label:d.stat2_label},{n:d.stat3_n,label:d.stat3_label}]}/>
      <TwoCol bg="var(--m-cream)"
        left={<><div className="h-eyebrow"><span className="dot"/>Responsible lending</div><h2 className="mega-head" style={{fontSize:'clamp(32px, 4vw, 52px)', marginTop:12}} dangerouslySetInnerHTML={{__html:d.lending_headline}}/></>}
        right={<div style={{fontSize:17,lineHeight:1.65,color:'var(--m-ink-2)'}}>{lendingParas.map((p,i)=><p key={i} style={{margin:i>0?'18px 0 0':0}}>{p}</p>)}</div>}
      />
      <ImpactPillars/>
      <ImpactReport/>
    </>
  );
};

const MOGO_PAGES = {
  'about-us': {
    title: 'About <em>Mogo.</em>',
    eyebrow: 'About us',
    kicker: "Mogo Kenya is part of Eleving Group — an international FinTech operating in 17 countries across three continents.",
    render: () => <AboutPageBody/>,
  },

  'contact-us': {
    title: 'Get in <em>touch.</em>',
    eyebrow: 'Contact us',
    kicker: "Call, WhatsApp or walk into any of our 84+ branches. Our call centre is open 24 hours, every day of the week.",
    render: () => (
      <>
        <section style={{padding:'96px 0', background:'#fff'}}>
          <div className="shell" style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 20}}>
            {[
              {eyebrow:'General enquiries', title:'0768 469 112', body:'Mon to Sun · 24 hours', action:{label:'Call now', href:'tel:0768469112'}, accent:'var(--m-green)'},
              {eyebrow:'WhatsApp',         title:'+254 768 469 112', body:'Check loan balance, make payments, ask anything.', action:{label:'Open WhatsApp', href:'https://wa.me/2540768469112'}, accent:'#25D366'},
              {eyebrow:'Emergency · accident or theft', title:'0719 089 999', body:'Available 24/7 for all accident and theft reports.', action:{label:'Call emergency', href:'tel:0719089999'}, accent:'#E96A3B'},
              {eyebrow:'USSD',             title:'*695#', body:'Check loan balance and make payments from any phone.', action:{label:'Dial now', href:'tel:*695#'}, accent:'var(--m-navy)'},
              {eyebrow:'Email',            title:'info@mogo.co.ke', body:'For written enquiries, partnerships and documentation.', action:{label:'Send email', href:'mailto:info@mogo.co.ke'}, accent:'var(--m-ink)'},
              {eyebrow:'Head office',      title:'Pinetree Plaza, Kilimani, Nairobi', body:'Mogo Auto Ltd · Kenya head office. Branches in 6 regions.', action:{label:'See all branches', href:'branches.html'}, accent:'#8B5CF6'},
              {eyebrow:'Media · press enquiries', title:'Becky', body:'Press, interviews and media partnerships. Call or WhatsApp.', action:{label:'Call Becky', href:'tel:0727826832'}, accent:'#003478', subtitle:'0727 826 832'},
            ].map((c,i) => (
              <div key={i} style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', padding:32, border:'1px solid var(--m-line-2)', display:'flex', flexDirection:'column', gap:14}}>
                <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color: c.accent, fontWeight:600}}>{c.eyebrow}</div>
                <div style={{fontSize:32, fontWeight:600, letterSpacing:'-.02em', lineHeight:1.1, fontFamily:'var(--font-display)'}}>{c.title}</div>
                {c.subtitle && <div style={{fontSize:18, fontWeight:600, color:'var(--m-ink)', marginTop:-6, fontFamily:'var(--font-mono)', letterSpacing:'.02em'}}>{c.subtitle}</div>}
                <div style={{fontSize:14.5, color:'var(--m-ink-2)', lineHeight:1.55, flex:1}}>{c.body}</div>
                <a href={c.action.href} style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:14, fontWeight:600, color:'var(--m-ink)', textDecoration:'none', marginTop:8}}>
                  {c.action.label} <ArrowRight/>
                </a>
              </div>
            ))}
          </div>
        </section>
        <Branches/>
      </>
    ),
  },

  'branches': {
    title: '84+ branches.<br/><em>One</em> near you.',
    eyebrow: 'Branches',
    kicker: "From Mombasa to Eldoret, from Garissa to Migori — Mogo branches across all 6 regions. Walk in, talk to a real officer, ride home the same day.",
    render: () => <Branches/>,
  },

  'payments': {
    title: 'Paying or checking your <em>loan.</em>',
    eyebrow: 'Payments',
    kicker: "M-Pesa, USSD, WhatsApp or bank transfer. To get precise payment information, please refer to your loan agreement.",
    render: () => (
      <>
        <section style={{padding:'96px 0', background:'#fff'}}>
          <div className="shell" style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 20}}>
            {[
              {tag:'Most used', title:'M-Pesa', steps:[['Paybill Number','7034211'],['Account Number','Your agreement number']], accent:'#00A551'},
              {tag:'Fastest',   title:'USSD · *695#', steps:[['Dial','*695#'],['Options','Check balance · Make payment']], accent:'var(--m-green)'},
              {tag:'24/7',      title:'WhatsApp', steps:[['Contact','+254 768 469 112'],['Options','Check balance · Make payments']], accent:'#25D366'},
              {tag:'Bank transfer', title:'NCBA Bank', steps:[['Recipient','Mogo Auto Limited'],['Branch','Upper Hill'],['Account','8368080018'],['Reference','Your agreement number']], accent:'var(--m-navy)'},
            ].map((m,i) => (
              <div key={i} style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', padding:32, border:'1px solid var(--m-line-2)'}}>
                <h3 style={{fontSize:32, fontWeight:600, letterSpacing:'-.02em', fontFamily:'var(--font-display)', marginBottom:20}}>{m.title}</h3>
                <dl style={{display:'grid', gridTemplateColumns:'140px 1fr', rowGap:12, columnGap:16, margin:0}}>
                  {m.steps.map(([k,v],j) => (
                    <React.Fragment key={j}>
                      <dt style={{fontSize:12, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-ink-2)', paddingTop:4}}>{k}</dt>
                      <dd style={{margin:0, fontSize:16, fontWeight:500, color:'var(--m-ink)'}}>{v}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
        <section style={{padding:'64px 0 96px', background:'var(--m-cream)'}}>
          <div className="shell" style={{maxWidth: 880, textAlign:'center'}}>
            <h3 style={{fontSize:28, fontWeight:600, letterSpacing:'-.01em'}}>Need help?</h3>
            <p style={{fontSize:17, color:'var(--m-ink-2)', marginTop:12, marginBottom:24}}>
              If you need help with your loan balance or payments, call us directly.
            </p>
            <a href="tel:0768469112" className="btn btn-dark">Call 0768 469 112 <span className="arrow-pill"><ArrowRight/></span></a>
          </div>
        </section>
      </>
    ),
  },

  'faq': {
    title: 'Frequently <em>asked.</em>',
    eyebrow: 'FAQ',
    kicker: "Quick answers to the questions we hear most. Can't find yours? Call 0768 469 112 — 24 hours a day, every day.",
    render: () => {
      const groups = [
        { title:'Applying', qs:[
          ['Who can apply for a Mogo loan?', 'Any Kenyan national with a valid ID, an M-Pesa number and a clear repayment plan. Depending on the product, we may ask for additional documents like a logbook, payslip or CRB clearance.'],
          ['How long does approval take?', 'Most applications are approved within 24 hours. Boda and smartphone loans can be approved the same day if you walk into a branch with the required documents.'],
          ['Do I need a bank account?', 'No. An active M-Pesa line is enough for most of our products. Salary-based check-off loans will use your bank or payroll details.'],
        ]},
        { title:'Repayments', qs:[
          ['How do I make payments?', 'M-Pesa Paybill 7034211 (your agreement number as account), USSD *695#, WhatsApp on +254 768 469 112 or direct bank transfer to our NCBA account.'],
          ['Can I pay off my loan early?', 'Yes. Early settlement is allowed on all Mogo products. Contact us to get your settlement figure.'],
          ['What happens if I miss a payment?', "Call us on 0768 469 112 as soon as possible. We'd much rather restructure your loan than hand you a penalty. Repeated missed payments may affect your CRB record."],
        ]},
        { title:'Vehicles & Logbooks', qs:[
          ['Do I keep using my car/boda during the loan?', "Yes. You keep using your vehicle the whole time. For logbook loans, we hold the logbook as security — you ride it every day."],
          ['What vehicles do you finance?', "Any age, make or model — local and imported. For new bodas we partner with trusted dealers across Kenya."],
          ['What if my vehicle is stolen?', "Call 0719 089 999 immediately. We operate 24/7 and work with SAKA, our stolen-vehicle database, to help recover it."],
        ]},
        { title:'Emergency & Safety', qs:[
          ['Who do I call after an accident?', '0719 089 999 — available 24/7 for accidents and theft. Have your agreement number ready.'],
          ['Is my data safe with Mogo?', 'Yes. We comply with the Kenya Data Protection Act and our privacy policy is published in full on our site.'],
        ]},
      ];
      return (
        <section style={{padding:'96px 0', background:'#fff'}}>
          <div className="shell" style={{maxWidth: 960}}>
            {groups.map((g,gi) => (
              <div key={gi} style={{marginBottom: 64}}>
                <div className="h-eyebrow"><span className="dot"/>{g.title}</div>
                <div style={{marginTop: 20, borderTop:'1px solid var(--m-line-2)'}}>
                  {g.qs.map(([q,a],i) => <FAQItem key={i} q={q} a={a}/>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    },
  },

  'careers': {
    title: 'Build <em>Mogo</em><br/>with us.',
    eyebrow: 'Careers',
    kicker: "We're building Kenya's most trusted financing business — and we need teammates who take the job personally.",
    render: () => (
      <>
        <Cards
          eyebrow="Life at Mogo"
          title="Why <em>people</em> stay."
          cards={[
            {label:'01', title:'Real customers, real impact', body:'Every loan we make funds a hustle: a rider, a shopkeeper, a teacher. You see the impact on the street the same week.'},
            {label:'02', title:'Grow across the group', body:'Mogo is part of Eleving Group, operating in 17 countries. Strong performers get moved up — and sometimes moved abroad.'},
            {label:'03', title:'Own your work', body:"We're a lean, informal team. Bring the idea, bring the ownership, and we'll back it. Less politics, more shipping."},
          ]}
        />
        <section style={{padding:'96px 0', background:'var(--m-cream)'}}>
          <div className="shell">
            <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:40, marginBottom:48, flexWrap:'wrap'}}>
              <div>
                <div className="h-eyebrow"><span className="dot"/>Open roles</div>
                <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 64px)', marginTop:12}}>Teams <em>hiring</em> now.</h2>
              </div>
              <a href="mailto:careers@mogo.co.ke" className="btn btn-dark">Send your CV <span className="arrow-pill"><ArrowRight/></span></a>
            </div>
            <div style={{background:'#fff', borderRadius:'var(--r-xl)', border:'1px solid var(--m-line-2)', overflow:'hidden'}}>
              {[
                ['Branch Sales Officer',          'Retail · Multiple branches',   'Full-time'],
                ['Credit Analyst',                'Credit · Nairobi HQ',          'Full-time'],
                ['Recoveries Officer',            'Collections · Mombasa',        'Full-time'],
                ['Field Agent — Boda Loans',      'Sales · Kisumu / Nakuru / Eldoret', 'Full-time'],
                ['Software Engineer',             'Technology · Nairobi HQ',      'Full-time'],
                ['Customer Experience Agent',     'Call centre · Nairobi',        'Full-time · Shifts'],
              ].map((r,i,arr) => (
                <a key={i} href="mailto:careers@mogo.co.ke" style={{display:'grid', gridTemplateColumns:'2fr 2fr 1fr 40px', padding:'22px 28px', gap: 20, alignItems:'center', color:'var(--m-ink)', textDecoration:'none', borderBottom: i<arr.length-1 ? '1px solid var(--m-line-2)' : 'none'}}>
                  <div style={{fontSize:18, fontWeight:600}}>{r[0]}</div>
                  <div style={{fontSize:14, color:'var(--m-ink-2)'}}>{r[1]}</div>
                  <div style={{fontSize:12, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-green-ink)', fontWeight:600}}>{r[2]}</div>
                  <ArrowRight/>
                </a>
              ))}
            </div>
            <p style={{fontSize:14, color:'var(--m-ink-2)', marginTop:24}}>
              Don't see your role? Send us your CV at <a href="mailto:careers@mogo.co.ke" style={{color:'var(--m-green-ink)', fontWeight:600}}>careers@mogo.co.ke</a> — we'll keep it on file.
            </p>
          </div>
        </section>
      </>
    ),
  },

  'our-stories': {
    title: '<em>Real</em> Kenyans.<br/>Real businesses.',
    eyebrow: 'Our stories',
    kicker: "From the boda riders of Nairobi to the salon owners of Nakuru — meet the people building Kenya's hustle economy with Mogo on their side.",
    render: () => {
      return (
        <>
          <StoriesLive/>
          <CTAFooter
            title="Got a story to share? We'd love to hear it."
            subtitle="If Mogo helped you grow your hustle, we want to put you on camera. Drop us a line and we'll come to you."
            cta="Email our team"
            href="mailto:stories@mogo.co.ke"
          />
        </>
      );
    },
  },

  'saka': {
    title: 'Report or check a <em>stolen</em> vehicle.',
    eyebrow: 'SAKA Platform',
    kicker: "SAKA is Mogo Kenya's stolen-vehicle database — a free tool to check any boda, tuk-tuk or car before you buy it, and to report stolen assets if the worst happens.",
    render: () => (
      <>
        <section style={{padding:'96px 0', background:'#fff'}}>
          <div className="shell" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48, alignItems:'start'}}>
            <div>
              <div className="h-eyebrow"><span className="dot"/>Check a vehicle</div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)', marginTop:12, marginBottom:24}}>Before you <em>buy,</em><br/>check SAKA.</h2>
              <p style={{fontSize:17, color:'var(--m-ink-2)', lineHeight:1.6, marginBottom:28}}>
                Enter a registration plate or chassis number. If it's in our stolen database, SAKA will flag it — and help law enforcement get it back to its owner.
              </p>
              <SakaCheck/>
            </div>
            <div>
              <div className="h-eyebrow"><span className="dot" style={{background:'#E96A3B'}}/>Report a theft</div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)', marginTop:12, marginBottom:24}}>If it's <em>gone,</em><br/>call first.</h2>
              <p style={{fontSize:17, color:'var(--m-ink-2)', lineHeight:1.6, marginBottom:28}}>
                Our emergency line runs 24/7. Call with your agreement number and the last known location — we'll file the report with authorities and add your vehicle to SAKA.
              </p>
              <div style={{background:'var(--m-ink)', borderRadius:'var(--r-xl)', padding: 32, color:'#fff', marginBottom:20}}>
                <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'#E96A3B', fontWeight:600, marginBottom:14}}>Emergency · 24/7</div>
                <div style={{fontSize:40, fontWeight:600, letterSpacing:'-.02em', fontFamily:'var(--font-display)', marginBottom:20}}>0719 089 999</div>
                <a href="tel:0719089999" className="btn btn-primary">Call now <span className="arrow-pill"><ArrowRight/></span></a>
              </div>
              <TheftReport/>
            </div>
          </div>
        </section>
        <Cards
          bg="var(--m-cream)"
          eyebrow="How SAKA helps"
          title="One <em>database,</em> three users."
          cards={[
            {label:'Buyers',   title:'Verify before you pay', body:'Never buy a stolen boda, tuk-tuk or car. A 30-second SAKA check saves you the cost of the vehicle — and the legal trouble.'},
            {label:'Owners',   title:'Report and recover',     body:"If your vehicle is stolen, reporting it to SAKA puts it on every dealer's screen within minutes. We've recovered hundreds this way."},
            {label:'Dealers',  title:'Clean your stock',       body:'Dealers can bulk-check incoming stock against SAKA. If a vehicle is flagged, we work with police to return it to the rightful owner.'},
          ]}
        />
      </>
    ),
  },

  'mogo-impact': {
    title: "Unlocking <em>progress,</em><br/>one community at a time.",
    eyebrow: 'Mogo Impact',
    kicker: "The money we lend doesn't sit still. It buys a boda. Pays school fees. Stocks a shop. Feeds a family. And beyond the loans, we work side-by-side with boda associations, partners and local communities.",
    render: () => <MogoImpactBody/>,
  },

  'news': {
    title: 'Mogo in the <em>news.</em>',
    eyebrow: 'News',
    kicker: "Press coverage, product launches, branch openings and milestones from across Kenya.",
    render: () => <NewsList/>,
  },
};

Object.assign(window, { MOGO_PAGES });
