// Page content for all About / Impact sub-pages

// ---------- Customer story videos — fetched from content/videos.json ----------
const STORIES_FALLBACK = [
  { youtubeId:'IQYAWWWnR44', name:'Julius Mwangi',  city:'Nairobi',  role:'Boda rider',    product:'New Boda Loan',  tagline:"Got my Boxer in 2 hours. 14 months later I owned it." },
  { youtubeId:'IQYAWWWnR44', name:'Mary Wanjiku',   city:'Nakuru',   role:'Salon owner',   product:'Buyoff Logbook', tagline:'Saved KES 8,400 a month — same car, lower payments.' },
  { youtubeId:'IQYAWWWnR44', name:'Peter Otieno',   city:'Kisumu',   role:'Tuk-tuk owner', product:'Tuk-Tuk Loan',   tagline:'Two tuk-tuks, two riders. The numbers finally work.' },
  { youtubeId:'IQYAWWWnR44', name:'Grace Achieng',  city:'Mombasa',  role:'Shop owner',    product:'MSME Loan',      tagline:'Stocked the shop for the whole season in one go.' },
  { youtubeId:'IQYAWWWnR44', name:'Samuel Kiprop',  city:'Eldoret',  role:'Driver',        product:'Car Loan',       tagline:"My first car. My family's first holiday." },
  { youtubeId:'IQYAWWWnR44', name:'Rose Njeri',     city:'Thika',    role:'Teacher',       product:'Check-Off Loan', tagline:'Paid school fees on time. No drama. No stress.' },
  { youtubeId:'IQYAWWWnR44', name:'David Kamau',    city:'Nyeri',    role:'Boda rider',    product:'Boda Logbook',   tagline:"Topped up against my boda. Bought a second one." },
  { youtubeId:'IQYAWWWnR44', name:'Esther Wambui',  city:'Machakos', role:'Hawker',        product:'Smartphone Loan',tagline:'KES 50 a day. M-Pesa changed my whole business.' },
  { youtubeId:'IQYAWWWnR44', name:'Anthony Mutua',  city:'Kitui',    role:'Mechanic',      product:'MSME Loan',      tagline:'Bought tools. Hired two apprentices. Got busier.' },
];
window.MOGO_STORIES = STORIES_FALLBACK;
Object.assign(window, { MOGO_STORIES });

// ─── OurStoriesPage — fetches videos.json so CMS edits appear live ───────────
const OurStoriesPage = () => {
  const [videos, setVideos] = React.useState(window.MOGO_STORIES || STORIES_FALLBACK);

  React.useEffect(() => {
    const base = window.__MOGO_SUBPAGE ? '../' : '';
    fetch(base + 'content/videos.json')
      .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function(data) {
        const v = data.stories || data.videos || data;
        if (Array.isArray(v) && v.length) { window.MOGO_STORIES = v; setVideos(v); }
      })
      .catch(function() {});
  }, []);

  return (
    <>
      <section style={{padding:'72px 0 48px', background:'#fff'}}>
        <div className="shell" style={{maxWidth: 1180}}>
          {videos[0] && <StoryVideo {...videos[0]} featured/>}
        </div>
      </section>
      <section style={{padding:'24px 0 96px', background:'#fff'}}>
        <div className="shell" style={{maxWidth: 1180}}>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', borderBottom:'1px solid var(--m-line)', paddingBottom:20, marginBottom:32, fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-ink-2)'}}>
            <span>{videos.length} stories</span>
            <span>More coming soon</span>
          </div>
          <div className="our-stories-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 28}}>
            {videos.slice(1).map((v, i) => <StoryVideo key={i} {...v}/>)}
          </div>
        </div>
      </section>
      <CTAFooter
        title="Got a story to share? We'd love to hear it."
        subtitle="If Mogo helped you grow your hustle, we want to put you on camera. Drop us a line and we'll come to you."
        cta="Email our team"
        href="mailto:stories@mogo.co.ke"
      />
    </>
  );
};

// ─── CareersPage — fetches careers.json so job listings are CMS-editable ─────
const CAREERS_FALLBACK = [
  { title:'Branch Sales Officer',      dept:'Retail · Multiple branches',        type:'Full-time' },
  { title:'Credit Analyst',            dept:'Credit · Nairobi HQ',               type:'Full-time' },
  { title:'Recoveries Officer',        dept:'Collections · Mombasa',             type:'Full-time' },
  { title:'Field Agent — Boda Loans',  dept:'Sales · Kisumu / Nakuru / Eldoret', type:'Full-time' },
  { title:'Software Engineer',         dept:'Technology · Nairobi HQ',           type:'Full-time' },
  { title:'Customer Experience Agent', dept:'Call centre · Nairobi',             type:'Full-time · Shifts' },
];

const CareersPage = () => {
  const [jobs, setJobs] = React.useState(CAREERS_FALLBACK);

  React.useEffect(() => {
    const base = window.__MOGO_SUBPAGE ? '../' : '';
    fetch(base + 'content/careers.json')
      .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function(data) {
        const j = data.jobs || data;
        if (Array.isArray(j) && j.length) setJobs(j);
      })
      .catch(function() {});
  }, []);

  return (
    <div style={{background:'#fff', borderRadius:'var(--r-xl)', border:'1px solid var(--m-line-2)', overflow:'hidden'}}>
      {jobs.map((r, i) => (
        <a key={i} href="mailto:careers@mogo.co.ke" style={{display:'grid', gridTemplateColumns:'2fr 2fr 1fr 40px', padding:'22px 28px', gap: 20, alignItems:'center', color:'var(--m-ink)', textDecoration:'none', borderBottom: i < jobs.length - 1 ? '1px solid var(--m-line-2)' : 'none'}}>
          <div style={{fontSize:18, fontWeight:600}}>{r.title}</div>
          <div style={{fontSize:14, color:'var(--m-ink-2)'}}>{r.dept}</div>
          <div style={{fontSize:12, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-green-ink)', fontWeight:600}}>{r.type}</div>
          <ArrowRight/>
        </a>
      ))}
    </div>
  );
};

// ─── FAQPage — fetches faq.json so questions are CMS-editable ────────────────
const FAQ_FALLBACK = [
  { title:'Applying', questions:[
    {q:'Who can apply for a Mogo loan?',  a:'Any Kenyan national with a valid ID, an M-Pesa number and a clear repayment plan. Depending on the product, we may ask for additional documents like a logbook, payslip or CRB clearance.'},
    {q:'How long does approval take?',    a:'Most applications are approved within 24 hours. Boda and smartphone loans can be approved the same day if you walk into a branch with the required documents.'},
    {q:'Do I need a bank account?',       a:'No. An active M-Pesa line is enough for most of our products. Salary-based check-off loans will use your bank or payroll details.'},
  ]},
  { title:'Repayments', questions:[
    {q:'How do I make payments?',          a:'M-Pesa Paybill 7034211 (your agreement number as account), USSD *695#, WhatsApp on +254 768 469 112 or direct bank transfer to our NCBA account.'},
    {q:'Can I pay off my loan early?',     a:'Yes. Early settlement is allowed on all Mogo products. Contact us to get your settlement figure.'},
    {q:"What happens if I miss a payment?",a:"Call us on 0768 469 112 as soon as possible. We'd much rather restructure your loan than hand you a penalty. Repeated missed payments may affect your CRB record."},
  ]},
  { title:'Vehicles & Logbooks', questions:[
    {q:'Do I keep using my car/boda during the loan?', a:"Yes. You keep using your vehicle the whole time. For logbook loans, we hold the logbook as security — you ride it every day."},
    {q:'What vehicles do you finance?',               a:"Any age, make or model — local and imported. For new bodas we partner with trusted dealers across Kenya."},
    {q:'What if my vehicle is stolen?',               a:"Call 0719 089 999 immediately. We operate 24/7 and work with SAKA, our stolen-vehicle database, to help recover it."},
  ]},
  { title:'Emergency & Safety', questions:[
    {q:'Who do I call after an accident?', a:'0719 089 999 — available 24/7 for accidents and theft. Have your agreement number ready.'},
    {q:'Is my data safe with Mogo?',       a:'Yes. We comply with the Kenya Data Protection Act and our privacy policy is published in full on our site.'},
  ]},
];

const FAQPage = () => {
  const [groups, setGroups] = React.useState(FAQ_FALLBACK);

  React.useEffect(() => {
    const base = window.__MOGO_SUBPAGE ? '../' : '';
    fetch(base + 'content/faq.json')
      .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function(data) {
        const g = data.groups || data;
        if (Array.isArray(g) && g.length) setGroups(g);
      })
      .catch(function() {});
  }, []);

  return (
    <section style={{padding:'96px 0', background:'#fff'}}>
      <div className="shell" style={{maxWidth: 960}}>
        {groups.map((g, gi) => (
          <div key={gi} style={{marginBottom: 64}}>
            <div className="h-eyebrow"><span className="dot"/>{g.title}</div>
            <div style={{marginTop: 20, borderTop:'1px solid var(--m-line-2)'}}>
              {(g.questions || g.qs || []).map((item, i) => {
                const q = item.q || item[0];
                const a = item.a || item[1];
                return <FAQItem key={i} q={q} a={a}/>;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MOGO_PAGES = {
  'about-us': {
    title: 'About <em>Mogo.</em>',
    eyebrow: 'About us',
    kicker: "Mogo Kenya is part of Eleving Group — an international FinTech operating in 17 countries across three continents.",
    render: () => (
      <>
        <TwoCol
          left={
            <>
              <div className="h-eyebrow"><span className="dot"/>Our mission</div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 64px)', marginTop:12}}>Upward <em>mobility,</em><br/>for every Kenyan.</h2>
            </>
          }
          right={
            <p style={{fontSize:18, lineHeight:1.65, color:'var(--m-ink-2)'}}>
              We facilitate upward social mobility across Kenyan communities by creating access to innovative and sustainable financial solutions — from Boda bodas and tuk-tuks to used cars, logbook loans, check-off and business financing.
              <br/><br/>
              Our customers are hustlers, civil servants, traders, teachers, boda riders and shopkeepers. Our job is to help them own their tools of trade, grow their businesses, and build a future.
            </p>
          }
        />
        <StatsBand stats={[
          {n:'100K+', label:'Vehicles financed on Kenyan roads'},
          {n:'84+',   label:'Branches across the country'},
          {n:'17',    label:'Countries in the Eleving Group'},
        ]}/>
        <SafariYetu/>
        <Prose title="Part of the <em>Eleving</em> Group.">
          <p>Eleving Group is a reliable and internationally trusted partner offering car financing and logbook loans to its customers in 17 countries across Europe, Asia, and Africa. The Group's historical customer base exceeds 1.8 million customers globally, while the total volume of loans issued surpasses EUR 2.4 billion.</p>
          <p style={{marginTop:18}}>We are one of the very few financial companies globally that finance vehicles of any age, brand or model, and we give our customers the privilege to choose from a vast network of trusted dealerships.</p>

          <div style={{marginTop:36, display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:32, alignItems:'center', padding:'28px 32px', background:'var(--m-cream)', border:'1px solid var(--m-line-2)', borderRadius:'var(--r-xl)'}} className="ft-award-block">
            <div>
              <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-green-ink)', marginBottom:12}}><span className="dot" style={{display:'inline-block', width:6, height:6, borderRadius:999, background:'var(--m-green)', marginRight:8, verticalAlign:'middle'}}/>Recognition</div>
              <p style={{fontSize:15.5, lineHeight:1.55, color:'var(--m-ink)', margin:0}}>
                Ranked <strong>#1 in Fintech, Financial Services &amp; Insurance</strong> and <strong>57th overall</strong> in the <em style={{fontStyle:'italic'}}>FT Europe's Long-Term Growth Champions 2025</em> — and among <em style={{fontStyle:'italic'}}>Europe's 1,000 fastest-growing companies</em> two years running (2020–2021).
              </p>
            </div>
            <div aria-label="FT Statista award badge placeholder" style={{aspectRatio:'1 / 1', maxWidth:200, marginLeft:'auto', background:'repeating-linear-gradient(135deg, #fff 0 10px, #faf5ec 10px 20px)', border:'1px dashed var(--m-line-2)', borderRadius:12, display:'grid', placeItems:'center', textAlign:'center', padding:18}}>
              <div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:6}}>Drop FT × Statista<br/>award badge here</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'.1em', color:'var(--m-muted)'}}>square · png/svg</div>
              </div>
            </div>
          </div>

          <div style={{marginTop:36, display:'flex', flexWrap:'wrap', gap:8}}>
            {['Kenya','Uganda','Tanzania','Latvia','Lithuania','Estonia','Romania','Moldova','Georgia','Armenia','Uzbekistan'].map(c =>
              <span key={c} style={{padding:'6px 12px', border:'1px solid var(--m-line-2)', borderRadius:999, fontSize:13, fontWeight:500}}>{c}</span>
            )}
          </div>
        </Prose>
        <CTAFooter title="Ready to <em>move up?</em>" subtitle="Find your nearest branch or start an application online." />
      </>
    ),
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
    render: () => <FAQPage/>,
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
            <CareersPage/>
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
    render: () => <OurStoriesPage/>,
  },

  'saka': {
    title: 'SAKA.<br/><em>Stolen</em> no more.',
    eyebrow: 'SAKA platform',
    kicker: "SAKA is Mogo Kenya's stolen-vehicle database — a free tool to check any boda, tuk-tuk or car before you buy it, and to report stolen assets if the worst happens.",
    render: () => (
      <>
        <section style={{padding:'96px 0', background:'#fff'}}>
          <div className="shell" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48, alignItems:'start'}}>
            <div>
              <div className="h-eyebrow"><span className="dot"/>Check a vehicle</div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)', marginTop:12, marginBottom:24}}>Before you <em>buy,</em><br/>check SAKA.</h2>
              <p style={{fontSize:17, color:'var(--m-ink-2)', lineHeight:1.6, marginBottom:28}}>
                Enter a chassis number, engine number or registration plate. If it's in our stolen database, SAKA will flag it — and help law enforcement get it back to its owner.
              </p>
              <div style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', padding: 28, border:'1px solid var(--m-line-2)'}}>
                <label style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-ink-2)'}}>Chassis / registration / engine number</label>
                <div style={{display:'flex', gap:8, marginTop:12}}>
                  <input placeholder="e.g. KMFG41BP..." style={{flex:1, padding:'14px 16px', fontSize:15, fontFamily:'var(--font-mono)', border:'1px solid var(--m-line-2)', borderRadius:10, background:'#fff', outline:'none', letterSpacing:'.04em'}}/>
                  <button className="btn btn-dark" style={{flexShrink:0}}>Check SAKA</button>
                </div>
                <p style={{fontSize:12, color:'var(--m-ink-2)', marginTop:12, margin:'12px 0 0'}}>This is a demo form. For live lookups visit mogo.co.ke/saka.</p>
              </div>
            </div>
            <div>
              <div className="h-eyebrow"><span className="dot" style={{background:'#E96A3B'}}/>Report a theft</div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)', marginTop:12, marginBottom:24}}>If it's <em>gone,</em><br/>call first.</h2>
              <p style={{fontSize:17, color:'var(--m-ink-2)', lineHeight:1.6, marginBottom:28}}>
                Our emergency line runs 24/7. Call with your agreement number and the last known location — we'll file the report with authorities and add your vehicle to SAKA.
              </p>
              <div style={{background:'var(--m-ink)', borderRadius:'var(--r-xl)', padding: 32, color:'#fff'}}>
                <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'#E96A3B', fontWeight:600, marginBottom:14}}>Emergency · 24/7</div>
                <div style={{fontSize:40, fontWeight:600, letterSpacing:'-.02em', fontFamily:'var(--font-display)', marginBottom:20}}>0719 089 999</div>
                <a href="tel:0719089999" className="btn btn-primary">Call now <span className="arrow-pill"><ArrowRight/></span></a>
              </div>
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
    kicker: "The money we lend doesn't sit still. It buys a boda. Pays school fees. Stocks a shop. Feeds a family. And beyond the loans, we work side-by-side with boda associations, partners and local communities — building the soft infrastructure that keeps a hustle running.",
    render: () => (
      <>
        <StatsBand accent="var(--m-green)" stats={[
          {n:'100K+', label:'Kenyans financed since we started'},
          {n:'KES 20B+', label:'Lent into the Kenyan economy'},
          {n:'84+', label:'Branches employing local staff'},
        ]}/>
        <TwoCol
          bg="var(--m-cream)"
          left={
            <>
              <div className="h-eyebrow"><span className="dot"/>Responsible lending</div>
              <h2 className="mega-head" style={{fontSize:'clamp(32px, 4vw, 52px)', marginTop:12}}>We only <em>lend</em><br/>what you can repay.</h2>
            </>
          }
          right={
            <p style={{fontSize:17, lineHeight:1.65, color:'var(--m-ink-2)'}}>
              Every Mogo application is assessed against your real income and your real expenses. We build affordable repayment plans, disclose every fee up front, and we'd rather restructure a loan than penalise you.
              <br/><br/>
              That's why over 100,000 Kenyans have trusted us — and why we're still growing. We also publish our Environmental &amp; Social policy, and operate a whistleblowing channel with Eleving Group.
            </p>
          }
        />
        <ImpactPillars/>
        <ImpactReport/>
      </>
    ),
  },

  'news': {
    title: 'Mogo in the <em>news.</em>',
    eyebrow: 'News',
    kicker: "Press coverage, product launches, branch openings and milestones from across Kenya.",
    render: () => {
      const items = window.MOGO_NEWS || [];
      return (
        <section style={{padding:'72px 0 120px', background:'#fff'}}>
          <div className="shell" style={{maxWidth: 1180}}>
            <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', borderBottom:'1px solid var(--m-line)', paddingBottom:20, marginBottom:8, fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)'}}>
              <span>{items.length} stories · newest first</span>
              <span>Updated {items[0]?.dateLong || ''}</span>
            </div>
            <div>
              {items.map((n, i) => (
                <a key={n.slug} href={`./news-article.html?slug=${n.slug}`}
                   style={{display:'grid', gridTemplateColumns:'220px 1fr auto', gap: 40, padding:'32px 0', borderBottom:'1px solid var(--m-line-2)', textDecoration:'none', color:'var(--m-ink)', alignItems:'start'}}>
                  <div style={{aspectRatio:'4/3', background:`linear-gradient(135deg, hsl(${(i*37)%360} 24% 78%), hsl(${(i*37+60)%360} 20% 58%))`, borderRadius:'var(--r-lg)', position:'relative', overflow:'hidden'}}>
                    <div className="grain"/>
                    <div style={{position:'absolute', top:12, left:12, fontSize:10, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', padding:'5px 9px', background:'rgba(11,18,32,.55)', backdropFilter:'blur(10px)', color:'rgba(255,255,255,.9)', borderRadius:999}}>{n.tag}</div>
                    <div style={{position:'absolute', bottom:10, right:12, fontSize:9, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.82)'}}>Photo · {n.photoLabel}</div>
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
              ))}
            </div>
          </div>
        </section>
      );
    },
  },
};

Object.assign(window, { MOGO_PAGES });
