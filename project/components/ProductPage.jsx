const ProductPage = ({product}) => {
  const others = window.MOGO_PRODUCTS.filter(p => p.slug !== product.slug).slice(0, 3);

  const faqs = {
    "boda-financing": [
      ["What bikes can I choose from?", "Boxer, TVS, Honda, Captain and other approved partner brands. Both 125cc commuter bikes and 150cc workhorses."],
      ["How much is the down payment?", "Typically KES 20,000 — sometimes less during promotions. No hidden fees on top."],
      ["Can I pay early?", "Yes. Early repayment saves you interest and you own the logbook outright the moment you finish."],
    ],
    "boda-logbook-loans": [
      ["Do you take my bike?", "No. Your bike stays with you. We hold the logbook as collateral and release it when you're done."],
      ["How fast is the cash?", "Same day for most customers. Walk into any branch with your logbook and ID."],
      ["What if I can't pay?", "Talk to us. We restructure payments far more often than we repossess."],
    ],
    "tuk-tuk-loans": [
      ["New or used tuk-tuk?", "Both. We finance new purchases from approved dealers and logbook loans on existing tuk-tuks."],
      ["Cargo or passenger?", "Either. We have specific products for both."],
      ["What brands?", "Bajaj, Piaggio, TVS, Atul and more."],
    ],
    "car-loans": [
      ["What cars qualify?", "Saloons, SUVs, pickups — local and imported, under 8 years old at purchase."],
      ["How much down?", "As little as 20%. We finance up to 80% of the car's value."],
      ["Can I use an existing car as part-exchange?", "Yes — talk to us about trade-ins."],
    ],
    "check-off-loans": [
      ["What is a check-off loan?", "Your employer agrees to deduct repayments directly from your salary. Lower risk for us = lower rate for you."],
      ["Which employers qualify?", "We have agreements with government departments, NGOs and larger private employers across Kenya. Ask us."],
      ["How long can the loan be?", "Up to 60 months. Borrow more, spread it further."],
    ],
    "smartphone-loans": [
      ["Which phones?", "Samsung, Xiaomi, Tecno, Infinix and iPhone — from entry-level to flagship."],
      ["How does daily payment work?", "Pay via M-Pesa every day, every week, or monthly. Miss a day? The phone locks until you pay; no permanent damage."],
      ["When do I own it?", "Full ownership the moment you finish paying — typically in 6 to 12 months."],
    ],
    "msme-loans": [
      ["What counts as MSME?", "Any micro, small or medium business — duka, salon, farm, matatu, workshop, cyber. Registered or informal."],
      ["What can I use it for?", "Stock, equipment, expansion, bridging cashflow. We don't dictate what you do with it."],
      ["Do I need collateral?", "Sometimes — depends on the amount. Smaller loans are often unsecured."],
    ],
  }[product.slug] || [];

  return (
    <>
      {/* Hero */}
      <section style={{padding:'80px 0 100px', background:'var(--m-cream)', borderBottom:'1px solid var(--m-line)'}}>
        <div className="shell">
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom: 32, fontSize:13, color:'var(--m-muted)', fontFamily:'var(--font-mono)', letterSpacing:'.08em', textTransform:'uppercase'}}>
            <a href="../index.html" style={{color:'var(--m-muted)'}}>Home</a>
            <span>›</span>
            <a href="../index.html#products" style={{color:'var(--m-muted)'}}>Products</a>
            <span>›</span>
            <span style={{color:'var(--m-ink)'}}>{product.name}</span>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 60, alignItems:'center'}}>
            <div>
              <div style={{display:'inline-flex', alignItems:'center', gap:8, padding:'6px 12px', borderRadius:999, background:'var(--m-green-soft)', color:'var(--m-green-deep)', fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', fontWeight:600, marginBottom: 24}}>
                {product.category} · {product.tag}
              </div>
              <h1 className="h-display" style={{fontSize:'clamp(44px, 6.5vw, 92px)', lineHeight:.95, letterSpacing:'-.035em', margin:'0 0 28px', fontWeight:600}}>
                {product.headline}
              </h1>
              <p style={{fontSize:19, color:'var(--m-ink-2)', lineHeight:1.5, maxWidth: 540, margin:'0 0 36px'}}>
                {product.desc}
              </p>
              <div style={{display:'grid', gridTemplateColumns:'repeat(3, auto)', gap:32, paddingTop: 28, borderTop:'1px solid var(--m-line)', marginBottom: 36}}>
                {[['Amount', product.price],['Term', product.term],['Turnaround', product.turnaround]].map(([l,v]) => (
                  <div key={l}>
                    <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:6}}>{l}</div>
                    <div style={{fontFamily:'var(--font-display)', fontSize:22, letterSpacing:'-.02em', fontWeight:600}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
                <a href="../index.html#apply" className="btn btn-primary btn-lg">Apply now <span className="arrow-pill"><ArrowRight/></span></a>
                <a href="tel:0709719000" className="btn btn-ghost btn-lg">Call 0709 719 000</a>
              </div>
            </div>

            <div style={{position:'relative', aspectRatio:'4/5', borderRadius:'var(--r-xl)', overflow:'hidden'}}>
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
            <div className="h-eyebrow"><span className="dot"/>How it works</div>
            <h2 className="mega-head" style={{fontSize:'clamp(38px, 4.5vw, 64px)'}}>Four steps. <em>No surprises.</em></h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 20}}>
            {[
              ['01', 'Apply', 'Online or at any of 84 branches. Just ID + M-Pesa number.'],
              ['02', 'Get approved', 'A MOGO officer confirms your exact terms the same day.'],
              ['03', 'Sign & collect', 'Face-to-face at your branch. Ride / pick up / receive cash.'],
              ['04', 'Repay', 'Weekly or monthly via M-Pesa. Pay early, save interest.'],
            ].map(([n,t,d]) => (
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
          <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'start'}}>
            <div>
              <div className="h-eyebrow"><span className="dot"/>What you'll need</div>
              <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>Simple<br/>requirements.</h2>
            </div>
            <div>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap: 0}}>
                {[
                  'Kenyan national ID or valid passport',
                  'Active M-Pesa number in your name',
                  'Proof of income (payslip, M-Pesa statement, or business records)',
                  product.slug.includes('logbook') ? 'Original logbook for the vehicle you own' : null,
                  product.slug === 'check-off-loans' ? 'Employer enrolled in our check-off programme' : null,
                  product.slug === 'msme-loans' ? 'At least 6 months in business (registered or informal)' : null,
                  product.slug === 'smartphone-loans' ? 'Any Android 8.0+ or iPhone compatible with our payment lock' : null,
                  'No existing defaults on other MOGO products',
                ].filter(Boolean).map((req, i, arr) => (
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

      {/* FAQ */}
      {faqs.length > 0 && (
        <section style={{padding:'100px 0', background:'#fff'}}>
          <div className="shell">
            <div style={{display:'grid', gridTemplateColumns:'1fr 1.5fr', gap: 80, alignItems:'start'}}>
              <div>
                <div className="h-eyebrow"><span className="dot"/>Questions</div>
                <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)'}}>Straight<br/><em>answers.</em></h2>
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
            <a href="../index.html#products" className="btn btn-ghost">See all 7 products <ArrowRight/></a>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20}}>
            {others.map(p => <ProductTile key={p.slug} p={p} isSubpage={true}/>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0', background:'#fff'}}>
        <div className="shell">
          <div style={{background:'var(--m-ink)', color:'#fff', borderRadius:'var(--r-xl)', padding:'72px 56px', position:'relative', overflow:'hidden'}}>
            <div style={{position:'absolute', right:-80, top:-80, width: 320, height: 320, borderRadius: 999, background:'var(--m-green)', opacity:.22, filter:'blur(80px)'}}/>
            <div style={{position:'relative', maxWidth: 680}}>
              <h2 className="h-display" style={{fontSize:'clamp(40px, 5vw, 72px)', margin:'0 0 20px', letterSpacing:'-.03em', fontWeight:600}}>
                Ready to apply for<br/><em style={{fontStyle:'italic', color:'var(--m-green)', fontFamily:'"Instrument Serif", serif', fontWeight:400}}>{product.name}?</em>
              </h2>
              <p style={{fontSize:17, color:'rgba(255,255,255,.72)', lineHeight:1.55, marginBottom: 32, maxWidth: 500}}>
                Three-minute form. Real call from a MOGO officer same day. Get answers, not runarounds.
              </p>
              <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
                <a href="../index.html#apply" className="btn btn-primary btn-lg">Apply online <span className="arrow-pill"><ArrowRight/></span></a>
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
