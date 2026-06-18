// Simple line icons for each step — stroke-based, inherit colour via currentColor.
const StepIcon = ({ kind, size = 56 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === 'apply') return (
    <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>
  );
  if (kind === 'call') return (
    <svg {...common}><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4.5 6a2 2 0 0 1 2-2Z"/></svg>
  );
  if (kind === 'sign') return (
    <svg {...common}><path d="M3 19h18"/><path d="M5 15.5 14.5 6a1.8 1.8 0 0 1 2.5 2.5L7.5 18 4 19l1-3.5Z"/></svg>
  );
  return ( // repay — phone with cycle arrows
    <svg {...common}><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M9.5 8.5a3 3 0 0 1 5-1.2M9.5 8.5V6.5M9.5 8.5h2"/><path d="M14.5 13.5a3 3 0 0 1-5 1.2M14.5 13.5v2M14.5 13.5h-2"/></svg>
  );
};

const HowItWorks = () => {
  const steps = [
  { n: "01", t: "Apply in 3 minutes", d: "Online or at any of our 84 branches. Just your ID and M-Pesa number.", icon: 'apply', bg: 'var(--m-peach)', ink: '#B2532E' },
  { n: "02", t: "Get a call same day", d: "A real MOGO officer confirms your exact terms. No hidden fees.", icon: 'call', bg: 'var(--m-green-soft)', ink: 'var(--m-green-deep)' },
  { n: "03", t: "Sign & collect", d: "Face-to-face at your branch. Ride home in as little as 2 hours.", icon: 'sign', bg: 'var(--m-sky)', ink: 'var(--m-navy)' },
  { n: "04", t: "Repay via M-Pesa", d: "Weekly or monthly. Pay early, save interest. Own it outright.", icon: 'repay', bg: 'var(--m-lilac)', ink: '#5B3E86' }];

  return (
    <section id="howitworks" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="shell">
        <div className="section-intro">
          <div>
            <h2 className="mega-head">Four steps from<br />application to <em style={{fontFamily:'inherit', fontStyle:'italic', fontWeight:400, color:'var(--m-green-ink)'}}>ownership.</em></h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--m-ink-2)', lineHeight: 1.55, maxWidth: 440, margin: 0 }}>
            No unnecessary paperwork and no hidden fees. A clear, straightforward process from application to ownership.
          </p>
        </div>

        <div data-steps-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {steps.map((s) =>
          <div key={s.n} style={{ background: 'var(--m-cream)', borderRadius: 'var(--r-lg)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ display: 'grid', placeItems: 'center', width: 48, height: 48, borderRadius: 12, background: s.bg, color: s.ink }}>
                  <StepIcon kind={s.icon} size={26} />
                </span>
                <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, lineHeight: 1, letterSpacing: '-.04em', color: s.ink, opacity: .2, userSelect: 'none' }}>{s.n}</span>
              </div>
              <div>
                <h3 className="h-display" style={{ fontSize: 18, letterSpacing: '-.02em', margin: '0 0 6px', fontWeight: 600 }}>{s.t}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--m-ink-2)', lineHeight: 1.5, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const Impact = () =>
<section data-mogo-impact style={{ padding: '100px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
    <div className="shell" style={{ position: 'relative' }}>
      <div className="section-intro" data-impact-head style={{ marginBottom: 52, alignItems: 'end' }}>
        <div>
          <h2 className="h-display" style={{ fontSize: 'clamp(28px, 4vw, 60px)', lineHeight: .98, letterSpacing: '-.035em', margin: '0', fontWeight: 500 }}>
            Fueling <em style={{ fontStyle: 'italic', color: 'var(--m-green)', fontWeight: 400 }}>200,000+</em><br />Kenyan livelihoods.
          </h2>
        </div>
        <p style={{ fontSize: 16, color: 'var(--m-ink-2)', lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
          Seven years of financing the tools Kenyans earn with — from bodas and cars to phones and shop stock.
        </p>
      </div>

      <div data-impact-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <ImpactNum icon="cash" kicker="Lending" n="KES 12B+" l="Disbursed to Kenyans since 2018" />
        <ImpactNum icon="vehicle" kicker="Assets financed" n="100,000+" l="Bodas, tuk-tuks and cars on the road" />
        <ImpactNum icon="people" kicker="Customer impact" n="63%" l="of customers report using their loans for income generation" />
        <ImpactNum icon="phone" kicker="Devices financed" n="500,000+" l="Phones financed across East Africa" />
      </div>
    </div>
    <style>{`
      .impact-stat { transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
      .impact-stat:hover { transform: translateY(-3px); border-color: rgba(122,184,0,.5); box-shadow: 0 8px 28px rgba(0,0,0,.07); }
    `}</style>
  </section>;


const IMPACT_ICONS = {
  cash: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2.6" /><path d="M5 9.5h.01M19 14.5h.01" /></svg>,
  vehicle: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13l1.6-4.6A2 2 0 0 1 7.5 7h9a2 2 0 0 1 1.9 1.4L20 13" /><path d="M3 13h18v4h-1.5" /><path d="M6.5 17H4v-4" /><circle cx="7.5" cy="17" r="1.7" /><circle cx="16.5" cy="17" r="1.7" /></svg>,
  pin: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  people: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  phone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18.5h2" /></svg>,
};

const ImpactNum = ({ icon, kicker, n, l }) =>
<div className="impact-stat" style={{ position: 'relative', padding: '28px 28px 26px', borderRadius: 'var(--r-lg)', background: 'var(--m-cream)', border: '1px solid var(--m-line-2)', display: 'flex', flexDirection: 'column', minHeight: 230 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ display: 'grid', placeItems: 'center', width: 46, height: 46, borderRadius: 12, background: 'rgba(122,184,0,.14)', color: 'var(--m-green)' }}>{IMPACT_ICONS[icon]}</span>
    </div>
    <div className="h-display" data-impact-n style={{ fontSize: 'clamp(32px, 3.2vw, 50px)', lineHeight: 1, letterSpacing: '-.03em', fontWeight: 500, color: 'var(--m-ink)', marginTop: 'auto' }}>{n}</div>
    <div style={{ width: 36, height: 2, background: 'var(--m-green)', margin: '18px 0 14px', borderRadius: 2 }} />
    <div style={{ fontSize: 13.5, color: 'var(--m-ink-2)', lineHeight: 1.5, maxWidth: 230 }}>{l}</div>
  </div>;


Object.assign(window, { HowItWorks, Impact });