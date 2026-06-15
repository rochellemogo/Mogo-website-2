const ProductPage = ({product}) => {
  const others = window.MOGO_PRODUCTS.filter(p => p.slug !== product.slug).slice(0, 3);

  const faqs = {
    "boda-financing": [
      ["What bikes can I choose from?", "Boxer, TVS, Honda, Captain and other approved partner brands. Both 125cc commuter bikes and 150cc workhorses."],
      ["How much is the down payment?", "Typically KES 20,000."],
      ["Can I pay early?", "Yes. Early repayment saves you interest and you own the logbook outright the moment you finish."],
    ],
    "boda-logbook-loans": [
      ["Do you take my bike?", "No. Your bike stays with you. We hold the logbook as collateral and release it when you're done."],
      ["How fast is the cash?", "Same day for most customers. Walk into any branch with your logbook and ID."],
      ["What if I can't pay?", "Talk to us. We restructure payments far more often than we repossess."],
    ],
    "tuk-tuk-loans": [
      ["Which tuk-tuks qualify?", "Cargo tuk-tuks from Atul, Bajaj, Bomba, Dayun, Haojin, Skygo, Sonlink, TVS and Piaggio, model years 2018–2025. Got a different one? Let us know — we might update the product."],
      ["How much can I get?", "From KES 50,000 to KES 250,000 depending on your needs, repaid over 52, 65 or 78 weeks — from as little as KES 349 a day."],
      ["How fast is approval?", "Swift. Most customers are approved in just 2 hours."],
    ],
    "car-loans": [
      ["What cars qualify?", "Any age, make or model — saloons, SUVs, pickups, local or imported. Buy from a car ad, the market, a yard, a dealership or directly from another individual."],
      ["How much can I borrow?", "Up to KES 2,500,000 — financing up to 80% of the car's value — with a down payment from just 20%."],
      ["How fast is approval?", "As little as 1 hour. Repay monthly over up to 24 months — from as little as KES 20,000 a month."],
    ],
    "check-off-loans": [
      ["Who qualifies?", "GoK, TSC and County employees aged 23–60 with a steady salary. Repayments are deducted directly from your payslip."],
      ["How much can I borrow?", "From KES 5,000 to KES 2,000,000 at the best rates in the market, repaid over 3 to 120 months."],
      ["How fast are funds disbursed?", "Instant approval with funds in your bank or M-Pesa within 24 hours."],
    ],
    "smartphone-loans": [
      ["Which phones?", "Samsung, Xiaomi, Tecno, Infinix and iPhone — from entry-level to flagship."],
      ["How does daily payment work?", "Pay via M-Pesa every day, every week, or monthly. Miss a day? The phone locks until you pay; no permanent damage."],
      ["When do I own it?", "Full ownership the moment you finish paying — typically in 6 to 12 months."],
    ],
    "msme-loans": [
      ["What counts as MSME?", "Any micro, small or medium business — duka, salon, farm, matatu, workshop, cyber. Registered or informal."],
      ["What can I use it for?", "Stock, equipment, expansion, bridging cashflow. We don't dictate what you do with it."],
      ["Do I need collateral?", "No!"],
    ],
    "car-logbook-loans": [
      ["How much can I borrow?", "From KES 70,000 to KES 3,250,000 — up to 80% of your car's value, regardless of age, make or model."],
      ["Do I keep my car?", "Yes. You keep driving throughout. We hold the logbook as collateral and release it once you finish repaying."],
      ["Are there hidden fees?", "None. Zero upfront costs, zero valuation fees and zero deductions to your loan amount — what you see is what you get."],
    ],
  }[product.slug] || [];

  const isPhone = product.slug === "smartphone-loans";
  const isBodaLogbook = product.slug === "boda-logbook-loans";
  const showBranchCta = isBodaLogbook || product.slug === "tuk-tuk-loans" || product.slug === "check-off-loans" || product.slug === "car-logbook-loans";

  // Smartphone loans are applied for in person at a participating phone shop,
  // so the primary CTA points to the dealer map instead of the online form.
  const primaryCtaHref = isPhone ? "#dealers" : "../index-v2.html#apply";
  const primaryCtaLabel = isPhone ? "See eligible dealers" : "Apply now";

  // Models we currently finance, with product-specific wording.
  const modelsBlock = {
    "boda-logbook-loans": {
      heading: ['Bikes we', 'back.'],
      note: 'We currently finance these brands, model years 2018 – 2025. Ride a different motorbike? Let us know — we might finance it too.',
      items: ['Boxer', 'Captain', 'Haojin', 'Haojue', 'Honda', 'Ranger', 'Skygo', 'TVS', 'Hero', 'Sonlink', 'Dayun', 'Tiger', 'Shineray'],
    },
    "tuk-tuk-loans": {
      heading: ['Tuk-tuks we', 'back.'],
      note: 'We currently offer logbook loans on these cargo tuk-tuks, model years 2018 – 2025. Got a different tuk-tuk? Let us know — we might update the product.',
      items: ['Atul', 'Bajaj', 'Bomba', 'Dayun', 'Haojin', 'Skygo', 'Sonlink', 'TVS', 'Piaggio'],
    },
  }[product.slug];

  // Best Price Guarantee callout (car loans).
  const bestPrice = {
    "car-loans": {
      lead: 'Why pay more when you can pay less? Bring any active car-financing or logbook-loan contract — or a valid offer — and we\u2019ll beat it with a lower monthly payment. Best price guaranteed at Mogo.',
      bullets: [
        ['Any car, any age', 'Make or model, local or imported — financed with a down payment from just 20%.'],
        ['Up to KES 2.5M', 'Borrow up to KES 2,500,000 over up to 24 months. Approved in as little as 1 hour.'],
        ['Up to 80% financed', 'Drive your dream car from as little as KES 20,000 a month.'],
      ],
    },
    "check-off-loans": {
      eyebrow: 'Why choose Mogo',
      lead: 'For GoK, TSC and County employees — instant approval, flexible limits and repayment terms up to 120 months, all deducted straight from your salary.',
      bullets: [
        ['KES 5k – 2M', 'Access from KES 5,000 to KES 2,000,000 at the best rates in the market.'],
        ['Funds in 24 hrs', 'Get instant approval with funds disbursed within 24 hours.'],
        ['3 – 120 months', 'Flexible repayment from 3 months up to 120 months.'],
      ],
    },
    "car-logbook-loans": {
      eyebrow: 'Best Price Guarantee',
      lead: 'We don\u2019t just say it — we show it. Others bury application fees, processing fees and hidden deductions that shrink your cash or grow your repayment. With Mogo, what you see is what you get. Others charge more; Mogo charges less.',
      bullets: [
        ['Zero upfront costs', 'No application fees, no valuation fees, no hidden charges.'],
        ['No deductions', 'Your full loan amount reaches you — nothing skimmed off the top.'],
        ['Lowest monthly payments', 'Guaranteed lowest installments versus any licensed digital credit provider, like-for-like.'],
      ],
    },
  }[product.slug];

  // Special loan variants shown as upsell cards (boda financing).
  const loanOptions = {
    "boda-financing": [
      {
        name: 'Boda VIP Loan',
        tagline: 'Higher down payment, lower daily payment.',
        badge: 'Best Price Guarantee',
        bullets: [
          'Add KES 20,000 to your down payment and pay from as little as KES 236 per day.',
          'Enjoy a lower interest rate — instant savings on your motorbike.',
          'Special offers available only at Mogo Boda branches.',
        ],
      },
      {
        name: 'Second-Hand Boda Loan',
        tagline: 'The lowest down payment — ride sooner.',
        badge: 'Best Price Guarantee',
        bullets: [
          'Start paying from as little as KES 240 per day.',
          'Down payment from just KES 22,000.',
          'Choose any available model and start riding within 2 hours.',
        ],
        cta: { label: 'View warehouses', href: '#warehouse-map' },
      },
    ],
  }[product.slug];

  // Per-product "how it works" steps. Falls back to the generic flow.
  const steps = {
    "smartphone-loans": [
      ['01', 'Visit a phone shop', 'Go to any phone shop where Mogo is available. Bring your National ID and M-Pesa number.'],
      ['02', 'Choose your device', 'Pick the phone you want from the in-store range — entry-level to flagship.'],
      ['03', 'Apply with the agent', 'Present your ID and go through the application with the sales agent on the spot.'],
      ['04', 'Pay your deposit', 'Pay the required deposit for your device and walk out with your phone.'],
    ],
    "boda-financing": [
      ['01', 'Select a boda boda', 'Choose your model — Bajaj Boxer, TVS, Honda, Captain, Haojin, Haojue and electric bikes like Ampersand, Spiro, Fika, Arc Ride and Spark.'],
      ['02', 'Visit a branch or dealer', 'Every model under one roof at any Mogo Boda branch countrywide, or an authorised partner dealer. Pick your term — 52 to 104 weeks — and a weekly installment that fits.'],
      ['03', 'Sign the contract', 'After a simple identity check, sign and pay a down payment from just 22% of the bike\u2019s value. Ready to ride in 2 hours.'],
      ['04', 'Ride your new boda', 'Repay weekly on a schedule that suits you. Once the loan is cleared, the motorbike is fully yours.'],
    ],
    "car-loans": [
      ['01', 'Choose your car', 'Pick any vehicle — from a car ad, the market, a yard, a dealership or directly from another individual.'],
      ['02', 'Apply online', 'Choose your terms — loan amount, repayment period and down payment — and fill in your contact details.'],
      ['03', 'Get an offer & sign', 'A Mogo associate calls you shortly. Visit your nearest branch to sign — Nairobi, Mombasa, Nakuru, Eldoret, Kisumu, Thika, Meru and more.'],
      ['04', 'Enjoy your new ride', 'Drive away and repay monthly. Once the loan is cleared, you become the legal owner of the vehicle.'],
    ],
    "check-off-loans": [
      ['01', 'Apply easily', 'Submit your application online or at any of our branches.'],
      ['02', 'Quick evaluation', 'Our team verifies your documents and affordability.'],
      ['03', 'Hassle-free disbursement', 'Receive funds directly to your bank account or via M-Pesa.'],
      ['04', 'Seamless repayment', 'Payments are deducted directly from your salary.'],
    ],
    "car-logbook-loans": [
      ['01', 'Own a car with a valid logbook', 'You must be the registered owner with a valid NTSA logbook in your name.'],
      ['02', 'Apply online', 'Complete a quick form with your contact details. No paperwork, no hassle.'],
      ['03', 'Get an offer & sign', 'A Mogo representative guides you through your personalised offer. Review and sign your agreement.'],
      ['04', 'Get your cash — keep your car', 'Once approved, your cash comes fast while you keep driving. Repay in affordable monthly installments.'],
    ],
  }[product.slug] || [
    ['01', 'Visit', 'Your nearest branch to express your interest. Just ID + M-Pesa number.'],
    ['02', 'Get approved', 'An officer will visit your shop front to complete your application and explain your terms.'],
    ['03', 'Sign', 'Face-to-face with an officer.'],
    ['04', 'Repay', 'Daily via M-Pesa. Pay early, save interest.'],
  ];

  // Per-product eligibility. Falls back to the generic requirements list.
  const requirements = {
    "smartphone-loans": [
      'Aged 21 – 65 years old',
      'Kenyan National ID',
      'An active Safaricom line and M-Pesa account',
      'Deposit amount for the selected device',
    ],
    "boda-logbook-loans": [
      'Own your boda boda logbook',
      'Provide a 6-month M-Pesa statement',
      'Provide your National ID',
      'Own a KRA PIN',
      'Be 20 – 65 years old',
    ],
    "boda-financing": [
      'Down payment from only 22%',
      'Provide a 6-month M-Pesa statement',
      'Provide your National ID',
      'Own a KRA PIN',
      'Be 20 – 65 years old',
      'Have 1 guarantor',
    ],
    "tuk-tuk-loans": [
      'Own your cargo tuk-tuk logbook',
      'Provide a 6-month M-Pesa statement',
      'Provide your National ID',
      'Own a KRA PIN',
      'Be 20 – 65 years old',
    ],
    "car-loans": [
      'Provide your National ID',
      'Own a KRA PIN',
      'Be 23 – 70 years old',
      'Provide a 6-month M-Pesa and/or bank statement',
      'Down payment from only 20%',
    ],
    "check-off-loans": [
      'Be 23 – 60 years old',
      'A copy of your National ID card',
      'Your latest 2 months\u2019 pay slips',
      'Your latest 3 months M-Pesa / bank statement',
    ],
    "car-logbook-loans": [
      'A car logbook in your name',
      'Provide your National ID',
      'Own a KRA PIN',
      'Be 23 – 70 years old',
      'Bank & M-Pesa statement and payslip',
    ],
  }[product.slug] || [
    'Kenyan national ID',
    'Active M-Pesa number in your name',
    'Proof of income (payslip, M-Pesa statement, or business records)',
    product.slug.includes('logbook') ? 'Original logbook for the vehicle you own' : null,
    product.slug === 'check-off-loans' ? 'Employer enrolled in our check-off programme' : null,
    product.slug === 'msme-loans' ? 'At least 6 months in business (registered or informal)' : null,
    'No existing defaults on other MOGO products',
  ].filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section style={{padding:'80px 0 100px', background:'var(--m-cream)', borderBottom:'1px solid var(--m-line)'}}>
        <div className="shell">
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom: 32, fontSize:13, color:'var(--m-muted)', fontFamily:'var(--font-mono)', letterSpacing:'.08em', textTransform:'uppercase'}}>
            <a href="../index-v2.html" style={{color:'var(--m-muted)'}}>Home</a>
            <span>›</span>
            <a href="../index-v2.html#products" style={{color:'var(--m-muted)'}}>Products</a>
            <span>›</span>
            <span style={{color:'var(--m-ink)'}}>{product.name}</span>
          </div>

          <div className="pp-hero-grid" style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 60, alignItems:'center'}}>
            <div>
              <h1 className="h-display" style={{fontSize:'clamp(44px, 6.5vw, 92px)', lineHeight:.95, letterSpacing:'-.035em', margin:'0 0 28px', fontWeight:600}}>
                {product.headline}
              </h1>
              <p style={{fontSize:19, color:'var(--m-ink-2)', lineHeight:1.5, maxWidth: 540, margin:'0 0 36px'}}>
                {product.desc}
              </p>
              <div className="pp-hero-stats" style={{display:'grid', gridTemplateColumns:'repeat(3, auto)', gap:32, paddingTop: 28, borderTop:'1px solid var(--m-line)', marginBottom: 36}}>
                {[['Amount', product.price],['Term', product.term],['Turnaround', product.turnaround]].map(([l,v]) => (
                  <div key={l}>
                    <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:6}}>{l}</div>
                    <div style={{fontFamily:'var(--font-display)', fontSize:22, letterSpacing:'-.02em', fontWeight:600}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
                <a href={primaryCtaHref} className="btn btn-primary btn-lg">{primaryCtaLabel} <span className="arrow-pill"><ArrowRight/></span></a>
                {showBranchCta && <a href="#branch-map" className="btn btn-ghost btn-lg">Visit a branch</a>}                <a href="tel:0709719000" className="btn btn-ghost btn-lg">Call 0709 719 000</a>
              </div>
            </div>

            <div className="pp-hero-media" style={{position:'relative', aspectRatio:'4/5', borderRadius:'var(--r-xl)', overflow:'hidden'}}>
              <ProductImage theme={product.theme} slug={product.slug}/>
              <div className="ph-tag">{product.name.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{padding:'100px 0', background:'#fff'}}>
        <div className="shell">
          <div style={{maxWidth: 900, marginBottom: 48}}>
            <h2 className="mega-head" style={{fontSize:'clamp(38px, 4.5vw, 64px)'}}>How it <em style={{fontStyle:'italic', color:'var(--m-green-ink)', fontFamily:'var(--font-accent)', fontWeight:400}}>works.</em></h2>
            {isPhone && (
              <p style={{fontSize:17, color:'var(--m-ink-2)', lineHeight:1.55, marginTop: 18, maxWidth: 560}}>
                The whole process takes <strong style={{color:'var(--m-ink)'}}>30 minutes or less</strong> — done in person at a participating phone shop.
              </p>
            )}
          </div>
          <div className="pp-steps" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 20}}>
            {steps.map(([n,t,d]) => (
              <div key={n} style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', padding:'32px 28px', minHeight: 220}}>
                <div style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--m-green-ink)', letterSpacing:'.12em', marginBottom: 20}}>{n}</div>
                <h3 className="h-display" style={{fontSize:22, fontWeight:600, letterSpacing:'-.02em', margin:'0 0 8px'}}>{t}</h3>
                <p style={{fontSize:14, color:'var(--m-ink-2)', lineHeight:1.5, margin:0}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section style={{padding:'80px 0', background:'var(--m-cream)'}}>
        <div className="shell">
          <div className="pp-split" style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'start'}}>
            <div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>What you'll <em style={{fontStyle:'italic', color:'var(--m-green-ink)', fontFamily:'var(--font-accent)', fontWeight:400}}>need.</em></h2>
            </div>
            <div>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: 0}}>
                {requirements.map((req, i, arr) => (
                  <li key={i} style={{display:'flex', alignItems:'flex-start', gap:16, padding:'20px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--m-line)' : 'none'}}>
                    <div style={{flexShrink:0, width: 28, height: 28, borderRadius:999, background:'var(--m-green)', display:'grid', placeItems:'center'}}>
                      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7l3 3 5-6" stroke="#0b1a00" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{fontSize:17, color:'var(--m-ink)', fontWeight:500}}>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Price Guarantee */}
      {bestPrice && (
        <section style={{padding:'80px 0', background:'var(--m-cream)'}}>
          <div className="shell">
            <div style={{background:'var(--m-ink)', color:'#fff', borderRadius:'var(--r-xl)', padding:'64px 56px', position:'relative', overflow:'hidden'}} className="pp-darkcard">
              <div style={{position:'absolute', right:-90, top:-90, width: 320, height: 320, borderRadius: 999, background:'var(--m-green)', opacity:.22, filter:'blur(80px)'}}/>
              <div style={{position:'relative'}}>
                <div className="h-eyebrow" style={{color:'var(--m-green)'}}><span className="dot"/>{bestPrice.eyebrow || 'Best Price Guarantee'}</div>
                <p style={{fontSize:'clamp(22px, 2.6vw, 32px)', lineHeight:1.3, letterSpacing:'-.02em', fontWeight:500, margin:'20px 0 44px', maxWidth: 860, color:'#fff'}}>
                  {bestPrice.lead}
                </p>
                <div className="pp-bp-bullets" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 28, borderTop:'1px solid rgba(255,255,255,.14)', paddingTop: 40}}>
                  {bestPrice.bullets.map(([t, d]) => (
                    <div key={t}>
                      <h3 className="h-display" style={{fontSize:22, fontWeight:600, letterSpacing:'-.02em', margin:'0 0 8px', color:'var(--m-green)'}}>{t}</h3>
                      <p style={{fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.55, margin:0}}>{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Special loan options */}
      {loanOptions && (
        <section style={{padding:'100px 0', background:'#fff'}}>
          <div className="shell">
            <div style={{maxWidth: 760, marginBottom: 48}}>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>Two more <em>ways</em> to ride.</h2>
              <p style={{marginTop: 18, fontSize:16, color:'var(--m-ink-2)', lineHeight:1.55}}>
                Beyond our standard boda loan, pick the option that fits your budget — pay less daily, or get on the road for less up front.
              </p>
            </div>
            <div className="pp-cards-2" style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 24}}>
              {loanOptions.map((opt) => (
                <div key={opt.name} style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', border:'1px solid var(--m-line-2)', padding:'36px 34px', display:'flex', flexDirection:'column'}}>
                  <div style={{display:'inline-flex', alignSelf:'flex-start', alignItems:'center', gap:8, padding:'6px 12px', borderRadius:999, background:'var(--m-green-soft)', color:'var(--m-green-deep)', fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', fontWeight:600, marginBottom: 22}}>
                    {opt.badge}
                  </div>
                  <h3 className="h-display" style={{fontSize:28, fontWeight:600, letterSpacing:'-.025em', margin:'0 0 8px'}}>{opt.name}</h3>
                  <p style={{fontSize:16, color:'var(--m-ink-2)', lineHeight:1.5, margin:'0 0 26px'}}>{opt.tagline}</p>
                  <ul style={{listStyle:'none', padding:0, margin:'0 0 28px', display:'flex', flexDirection:'column', gap: 14, flex:1}}>
                    {opt.bullets.map((b, i) => (
                      <li key={i} style={{display:'flex', alignItems:'flex-start', gap:12}}>
                        <span style={{flexShrink:0, width: 24, height: 24, borderRadius:999, background:'var(--m-green)', display:'grid', placeItems:'center', marginTop:1}}>
                          <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 7l3 3 5-6" stroke="#0b1a00" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        <span style={{fontSize:15.5, color:'var(--m-ink)', lineHeight:1.5, fontWeight:500}}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
                    <a href="../index-v2.html#apply" className="btn btn-primary">Apply now <span className="arrow-pill"><ArrowRight/></span></a>
                    {opt.cta && <a href={opt.cta.href} className="btn btn-ghost">{opt.cta.label}</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Models we finance */}
      {modelsBlock && (
        <section style={{padding:'100px 0', background:'#fff'}}>
          <div className="shell">
            <div className="pp-split" style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'start'}}>
              <div>
                <div className="h-eyebrow"><span className="dot"/>Models we finance</div>
                <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>{modelsBlock.heading[0]}<br/><em>{modelsBlock.heading[1]}</em></h2>
                <p style={{marginTop: 24, fontSize:15.5, color:'var(--m-ink-2)', lineHeight:1.6, maxWidth: 420}}>
                  {modelsBlock.note}
                </p>
              </div>
              <div>
                <div style={{display:'flex', flexWrap:'wrap', gap: 10}}>
                  {modelsBlock.items.map(m => (
                    <span key={m} style={{display:'inline-flex', alignItems:'center', gap:10, padding:'12px 18px', borderRadius:999, background:'var(--m-cream)', border:'1px solid var(--m-line-2)', fontSize:16, fontWeight:600, color:'var(--m-ink)', letterSpacing:'-.01em'}}>
                      <span style={{width:7, height:7, borderRadius:999, background:'var(--m-green)', flexShrink:0}}/>
                      {m}
                    </span>
                  ))}
                </div>
                <div style={{marginTop: 28, display:'flex', gap:10, flexWrap:'wrap'}}>
                  <a href="../index-v2.html#apply" className="btn btn-primary">Apply now <span className="arrow-pill"><ArrowRight/></span></a>
                  <a href="#branch-map" className="btn btn-ghost">Visit a branch</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catalogue */}
      {product.catalogue && (
        <section style={{padding:'100px 0', background:'#fff'}}>
          <div className="shell">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom: 40, flexWrap:'wrap', gap:24}}>
              <div style={{maxWidth: 640}}>
                <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>{product.catalogue.title}</h2>
                <p style={{marginTop: 16, fontSize:15.5, color:'var(--m-ink-2)', lineHeight:1.55}}>{product.catalogue.subtitle}</p>
              </div>
              <a href={primaryCtaHref} className="btn btn-primary">{isPhone ? 'See eligible dealers' : 'Apply for one'} <span className="arrow-pill"><ArrowRight/></span></a>
            </div>

            <div className="catalogue-table-wrap" style={{border:'1px solid var(--m-line)', borderRadius:'var(--r-xl)', overflow:'hidden', background:'var(--m-cream)'}}>
              <div className="catalogue-row catalogue-head" style={{display:'grid', gridTemplateColumns:'1.4fr 1.1fr 1fr 1fr .9fr', padding:'18px 28px', background:'var(--m-ink)', color:'#fff', fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'.12em', textTransform:'uppercase'}}>
                {product.catalogue.cols.map((c,i) => <div key={i}>{c}</div>)}
              </div>
              {product.catalogue.items.map((item, i) => (
                <div key={i} className="catalogue-row" style={{display:'grid', gridTemplateColumns:'1.4fr 1.1fr 1fr 1fr .9fr', padding:'22px 28px', borderTop: i === 0 ? 'none' : '1px solid var(--m-line)', background: i % 2 === 0 ? '#fff' : 'var(--m-cream)', alignItems:'center'}}>
                  <div style={{display:'flex', alignItems:'center', gap:14, flexWrap:'wrap'}}>
                    <div style={{fontFamily:'var(--font-display)', fontSize:18, fontWeight:600, letterSpacing:'-.015em'}}>{item.brand}</div>
                    {item.tag && <span style={{padding:'3px 8px', borderRadius:999, background:'var(--m-green-soft)', color:'var(--m-green-deep)', fontSize:10, fontFamily:'var(--font-mono)', letterSpacing:'.08em', textTransform:'uppercase', fontWeight:600}}>{item.tag}</span>}
                  </div>
                  <div style={{fontSize:14.5, color:'var(--m-ink-2)'}}>{item.spec}</div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:14, fontWeight:600, color:'var(--m-ink)'}}>{item.down}</div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:14, fontWeight:600, color:'var(--m-green-ink)'}}>{item.daily}</div>
                  <div style={{fontSize:14, color:'var(--m-ink-2)'}}>{item.term}</div>
                </div>
              ))}
            </div>
            <p style={{marginTop:18, fontSize:12.5, color:'var(--m-muted)', fontFamily:'var(--font-mono)', letterSpacing:'.04em'}}>* Indicative pricing. Final terms confirmed at branch based on your profile and current promotions.</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section style={{padding:'100px 0', background:'#fff'}}>
          <div className="shell">
            <div className="pp-split pp-split-faq" style={{display:'grid', gridTemplateColumns:'1fr 1.5fr', gap: 80, alignItems:'start'}}>
              <div>
                <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>FAQ</h2>
                <p style={{marginTop: 24, fontSize:15, color:'var(--m-ink-2)', lineHeight:1.55}}>Can't find what you're looking for? Call us on <a href="tel:0709719000" style={{color:'var(--m-green-ink)', fontWeight:600, textDecoration:'underline'}}>0709 719 000</a>.</p>
              </div>
              <div>
                {faqs.map((f,i) => <FAQItem key={i} q={f[0]} a={f[1]}/>)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other products */}
      <section style={{padding:'100px 0', background:'var(--m-cream)'}}>
        <div className="shell">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom: 48, flexWrap:'wrap', gap:24}}>
            <div>
              <div className="h-eyebrow"><span className="dot"/>More from MOGO</div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>Other ways we <em>finance.</em></h2>
            </div>
            <a href="../index-v2.html#products" className="btn btn-ghost">See all 8 products <ArrowRight/></a>
          </div>
          <div className="pp-cards-3" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20}}>
            {others.map(p => <ProductTile key={p.slug} p={p} isSubpage={true}/>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0', background:'#fff'}}>
        <div className="shell">
          <div style={{background:'var(--m-ink)', color:'#fff', borderRadius:'var(--r-xl)', padding:'72px 56px', position:'relative', overflow:'hidden'}} className="pp-darkcard">
            <div style={{position:'absolute', right:-80, top:-80, width: 320, height: 320, borderRadius: 999, background:'var(--m-green)', opacity:.22, filter:'blur(80px)'}}/>
            <div style={{position:'relative', maxWidth: 680}}>
              <h2 className="h-display" style={{fontSize:'clamp(40px, 5vw, 72px)', margin:'0 0 20px', letterSpacing:'-.03em', fontWeight:600}}>
                Ready to apply for<br/><em style={{fontStyle:'italic', color:'var(--m-green)', fontFamily:'var(--font-accent)', fontWeight:400}}>{product.name}?</em>
              </h2>
              <p style={{fontSize:17, color:'rgba(255,255,255,.72)', lineHeight:1.55, marginBottom: 32, maxWidth: 500}}>
                {isPhone ? 'Done in person at a participating phone shop. Bring your ID and M-Pesa — in 30 minutes or less.' : 'Three-minute form. Real call from a MOGO officer.'}
              </p>
              <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
                <a href={primaryCtaHref} className="btn btn-primary btn-lg">{isPhone ? 'See eligible dealers' : 'Apply online'} <span className="arrow-pill"><ArrowRight/></span></a>
                <a href="tel:0709719000" className="btn btn-ghost-light btn-lg">Call 0709 719 000</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FAQItem = ({q, a}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{borderBottom:'1px solid var(--m-line)'}}>
      <button onClick={() => setOpen(!open)} style={{width:'100%', textAlign:'left', padding:'24px 0', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24}}>
        <span style={{fontFamily:'var(--font-display)', fontSize:19, fontWeight:600, letterSpacing:'-.015em', color:'var(--m-ink)'}}>{q}</span>
        <span style={{flexShrink:0, width:36, height:36, borderRadius:999, background: open ? 'var(--m-green)' : 'var(--m-cream)', border:'1px solid var(--m-line)', display:'grid', placeItems:'center', fontSize:18, transition:'all .2s'}}>{open ? '–' : '+'}</span>
      </button>
      {open && <div style={{paddingBottom: 24, fontSize:15.5, color:'var(--m-ink-2)', lineHeight:1.6, maxWidth: 700}}>{a}</div>}
    </div>
  );
};

Object.assign(window, { ProductPage, FAQItem });
