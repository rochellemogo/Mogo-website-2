// v2 Mission — productivity financing positioning
const MissionV2 = () =>
<section data-mission-v2 style={{ padding: '120px 0', background: '#fff' }}>
    <div className="shell">
      <div style={{ maxWidth: 1180 }}>
        <h2 className="h-display" style={{ fontSize: 'clamp(44px, 6.5vw, 108px)', lineHeight: .98, letterSpacing: '-.035em', margin: '24px 0 0', fontWeight: 600 }}>
          Productivity financing.
        </h2>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--m-ink-2)', maxWidth: 680, margin: '32px 0 0' }}>Mogo finances the tools Kenyans earn with - bikes, cars, devices, shop stock -  and unlocks cash against assets they already own.

      </p>
      </div>

      <div data-mission-points style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, paddingTop: 48, borderTop: '1px solid var(--m-line)' }}>
        <MissionPointV2 n="01" t="Access" d="Available to every working Kenyan with an ID and an M-Pesa number." />
        <MissionPointV2 n="02" t="Earn" d="We finance the asset, not the lifestyle. Over 70% of our customers are self-employed — the bike, tuk-tuk, car or phone pays for itself." />
        <MissionPointV2 n="03" t="Grow" d="From first boda to second branch. Customers graduate from asset finance to logbook unlocks to working capital." />
      </div>
    </div>
  </section>;


const IsIsNot_DISABLED = () => {
  const items = [
  { is: 'Accessible', not: 'Predatory', ist: 'Open to every working Kenyan, ID + M-Pesa.', nott: "Competitive rates. No hidden charges." },
  { is: 'Direct', not: 'Complicated', ist: 'Clear terms. State the product, the benefit, the price.', nott: "Fast approvals. Simple requirements." },
  { is: 'Local', not: 'Distant', ist: '84 branches across 38 counties. Loan officers who speak the language.', nott: "You sign in person, eye to eye." },
  { is: 'Enabler', not: 'A bank', ist: "Funds the hustle — the bike, the car, the phone, the shop.", nott: "No queues. No gatekeeping." },
  { is: 'Trusted', not: 'Elitist', ist: 'CBK-licensed. Delivers on what it promises.', nott: "Built for the working Kenyan, not the salaried elite." }];

  return (
    <section style={{ padding: '120px 0', background: 'var(--m-ink)', color: '#fff' }}>
      <div className="shell">
        <div className="section-intro" style={{ marginBottom: 64 }}>
          <div>
            <div className="h-eyebrow" style={{ color: 'rgba(255,255,255,.55)' }}><span className="dot" />What Mogo is</div>
            <h2 className="mega-head" style={{ color: '#fff' }}>And what Mogo<br /><em style={{ color: '#FFB37A' }}>is not.</em></h2>
          </div>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.7)', lineHeight: 1.55, maxWidth: 440, margin: 0 }}>
            The space we occupy is narrow on purpose. We are the only lender in Kenya built specifically around income-generating asset financing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
          <div style={{ padding: '40px', borderRight: '1px solid rgba(255,255,255,.12)' }}>
            <div style={{ fontSize: 11, fontFamily: 'inherit', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--m-green)', marginBottom: 32 }}>Mogo IS</div>
            {items.map((it, i) =>
            <div key={i} style={{ padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', marginBottom: 6 }}>
                  <span style={{ color: 'var(--m-green)', marginRight: 14 }}>+</span>{it.is}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.55, paddingLeft: 30 }}>{it.ist}</div>
              </div>
            )}
          </div>
          <div style={{ padding: '40px', background: 'rgba(255,255,255,.02)' }}>
            <div style={{ fontSize: 11, fontFamily: 'inherit', letterSpacing: '.18em', textTransform: 'uppercase', color: '#FFB37A', marginBottom: 32 }}>Mogo is NOT</div>
            {items.map((it, i) =>
            <div key={i} style={{ padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', marginBottom: 6, color: 'rgba(255,255,255,.55)' }}>
                  <span style={{ color: '#FFB37A', marginRight: 14 }}>−</span><span style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(255,179,122,.5)' }}>{it.not}</span>
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,.55)', lineHeight: 1.55, paddingLeft: 30 }}>{it.nott}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

const Personas = () => {
  const people = [
  { name: '"Omosh"', role: 'Boda rider', loc: 'Embakasi · Nairobi', age: '28', product: 'Boda Financing', line: 'Bike fiti, bei fiti.', quote: 'Your bike. Your route. Your income. Deposit from 32K. Own it. Start earning.', accent: 'var(--m-green)', theme: 'sunset' },
  { name: 'Krispin', role: 'Two-bike owner', loc: 'Kisumu · Nyanza', age: '34', product: 'Boda Logbook', line: 'Pata pesa kwa masaa.', quote: 'One-of-a-kind logbook loan built for riders. 200 bob a day. Up to 90K in your M-Pesa. Keep riding.', accent: 'var(--m-green)', theme: 'green' },
  { name: 'Chris Mwangi', role: 'Uber driver', loc: 'Westlands · Nairobi', age: '31', product: 'Car Financing', line: 'Your car. Your terms.', quote: 'Finance any car. Any make. Up to 25 years old. Lowest installments. Zero fees. Zero deductions.', accent: 'var(--m-navy)', theme: 'cool' },
  { name: 'Chebet Ruto', role: 'Trader · contractor', loc: 'Eldoret · Rift', age: '42', product: 'Car Logbook', line: 'Zero. Zero. Zero.', quote: 'Up to 3.25M. Any car. No valuation costs. Turn what you own into what you need.', accent: 'var(--m-navy)', theme: 'navy' },
  { name: 'Linet Wekesa', role: 'Salon owner', loc: 'Kakamega · Western', age: '27', product: 'Device Financing', line: 'Own & lipa baadaye.', quote: 'A smartphone that pays for itself. Deposit from 23%. Yours within hours. Upgrade your hustle.', accent: 'var(--m-green)', theme: 'warm' },
  { name: 'Lavender Mutheu', role: 'Public-sector clerk', loc: 'Machakos · Lower Eastern', age: '38', product: 'Check-Off', line: 'Salo just got you the loan.', quote: '3 hours to approval. No guarantors. No CRB worries. Rates as low as 2%. Up to 2 million.', accent: 'var(--m-green-ink)', theme: 'lilac' }];

  return (
    <section id="personas" style={{ padding: '120px 0', background: 'var(--m-cream)' }}>
      <div className="shell">
        <div className="section-intro" style={{ marginBottom: 48 }}>
          <div>
            <div className="h-eyebrow"><span className="dot" />Who we back</div>
            <h2 className="mega-head">Six Kenyans.<br />Six <em>different</em> hustles.</h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--m-ink-2)', lineHeight: 1.55, maxWidth: 440, margin: 0 }}>
            Each Mogo product is built around a real customer — not a credit-score bracket. Here is who we serve, and what we say to them.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {people.map((p, i) =>
          <div key={i} style={{ background: '#fff', borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--m-line-2)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', aspectRatio: '5/4', overflow: 'hidden' }}>
                <ProductImage theme={p.theme} slug={p.product.toLowerCase().includes('boda') ? 'boda' : p.product.toLowerCase().includes('car') ? 'car' : p.product.toLowerCase().includes('device') ? 'smart' : 'check'} />
                <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <div style={{ padding: '5px 10px', borderRadius: 999, background: 'rgba(11,18,32,.55)', backdropFilter: 'blur(10px)', fontSize: 10, fontFamily: 'inherit', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.9)' }}>{p.product}</div>
                  <div style={{ fontSize: 10, fontFamily: 'inherit', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.92)', textShadow: '0 1px 6px rgba(0,0,0,.4)' }}>{p.loc}</div>
                </div>
                <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, color: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.05 }}>{p.name}</div>
                  <div style={{ fontSize: 12, fontFamily: 'inherit', letterSpacing: '.1em', textTransform: 'uppercase', opacity: .85, marginTop: 4 }}>{p.age} · {p.role}</div>
                </div>
              </div>
              <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontStyle: 'italic', fontSize: 30, lineHeight: 1.05, color: p.accent, letterSpacing: '-.01em', margin: '0 0 16px' }}>"{p.line}"</div>
                <p style={{ fontSize: 14.5, color: 'var(--m-ink-2)', lineHeight: 1.55, margin: 0, flex: 1 }}>{p.quote}</p>
                <a href={`products/${p.product.toLowerCase().includes('boda log') ? 'boda-logbook-loans' : p.product.toLowerCase().includes('boda') ? 'boda-financing' : p.product.toLowerCase().includes('car log') ? 'car-loans' : p.product.toLowerCase().includes('car') ? 'car-loans' : p.product.toLowerCase().includes('device') ? 'smartphone-loans' : 'check-off-loans'}.html`} style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--m-ink)', textDecoration: 'none' }}>
                  See the product <ArrowRight />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const CompetitiveLandscape = () => {
  const rows = [
  { brand: 'Equity', line: 'Your listening, caring partner.', owns: 'Ear of the customer.' },
  { brand: 'Safaricom', line: 'Popote ulipo — wherever you are.', owns: 'Being available everywhere.' },
  { brand: 'KCB', line: 'For people. For better.', owns: 'Trust. Stability.' },
  { brand: 'M-Kopa', line: 'Power to your own.', owns: 'Smartphones. Digital cash. E-mobility.' }];

  return (
    <section data-mission-v2 style={{ padding: '120px 0', background: '#fff' }}>
      <div className="shell" style={{ maxWidth: 1180 }}>
        <div className="h-eyebrow"><span className="dot" />The space we occupy</div>
        <h2 className="mega-head" style={{ margin: '18px 0 48px' }}>Everyone owns something.<br /><em>Mogo owns the hustle.</em></h2>

        <div style={{ borderTop: '1px solid var(--m-line)' }}>
          {rows.map((r, i) =>
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr', gap: 32, padding: '24px 0', borderBottom: '1px solid var(--m-line-2)', alignItems: 'baseline' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-.02em' }}>{r.brand}</div>
              <div style={{ fontStyle: 'italic', fontSize: 22, color: 'var(--m-ink-2)' }}>"{r.line}"</div>
              <div style={{ fontSize: 14, color: 'var(--m-muted)', fontFamily: 'inherit', letterSpacing: '.04em' }}>{r.owns}</div>
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr', gap: 32, padding: '32px 0', borderBottom: '1px solid var(--m-line-2)', alignItems: 'baseline', background: 'var(--m-green-soft)', margin: '0 -24px', paddingLeft: 24, paddingRight: 24, borderRadius: 'var(--r-lg)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-.02em', color: 'var(--m-green-deep)' }}>Mogo</div>
            <div style={{ fontStyle: 'italic', fontSize: 28, color: 'var(--m-green-deep)' }}>"Finance your future. Jenga kesho."</div>
            <div style={{ fontSize: 14, color: 'var(--m-green-deep)', fontFamily: 'inherit', letterSpacing: '.04em', fontWeight: 600 }}>The income-generating asset. The bike, car, phone, shop.</div>
          </div>
        </div>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
          ['Action-led', 'Mogo enables the action — the bike bought, the car financed.'],
          ['Productive', 'Finances income-generating assets, not just consumption.'],
          ['Only one in KE', 'The only lender in Kenya offering boda logbook loans.'],
          ['Faster', 'Faster, simpler, more accessible for the working Kenyan.']].
          map(([h, b], i) =>
          <div key={i} style={{ padding: '24px 0', borderTop: '2px solid var(--m-green)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-.01em', marginBottom: 8 }}>{h}</div>
              <p style={{ fontSize: 14, color: 'var(--m-ink-2)', lineHeight: 1.55, margin: 0 }}>{b}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const MissionPointV2 = ({ n, t, d }) =>
<div>
    <div style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '.14em', color: 'var(--m-green-ink)', marginBottom: 20 }}>{n}</div>
    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-.02em', margin: '0 0 12px' }}>{t}</h3>
    <p style={{ fontSize: 15.5, color: 'var(--m-ink-2)', lineHeight: 1.55, margin: 0 }}>{d}</p>
  </div>;


Object.assign(window, { MissionV2, MissionPointV2, Personas, CompetitiveLandscape });