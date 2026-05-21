const HowItWorks = () => {
  const steps = [
  { n: "01", t: "Apply in 3 minutes", d: "Online or at any of our 84 branches. Just your ID and M-Pesa number.", theme: 'warm' },
  { n: "02", t: "Get a call same day", d: "A real MOGO officer confirms your exact terms. No hidden fees.", theme: 'green' },
  { n: "03", t: "Sign & collect", d: "Face-to-face at your branch. Ride home in as little as 2 hours.", theme: 'cool' },
  { n: "04", t: "Repay via M-Pesa", d: "Weekly or monthly. Pay early, save interest. Own it outright.", theme: 'peach' }];

  return (
    <section id="howitworks" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="shell">
        <div className="section-intro">
          <div>
            <div className="h-eyebrow"><span className="dot" />How it works</div>
            <h2 className="mega-head">Four steps from<br />application to <em>ownership.</em></h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--m-ink-2)', lineHeight: 1.55, maxWidth: 440, margin: 0 }}>
            No paperwork mountain. No surprises. Just an honest process built around the fastest path to your wheels.
          </p>
        </div>

        <div data-steps-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {steps.map((s) =>
          <div key={s.n} style={{ background: 'var(--m-cream)', borderRadius: 'var(--r-xl)', padding: 14, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
                <ProductImage theme={s.theme} />
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '8px 14px', borderRadius: 999, background: '#fff', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--m-green-ink)' }}>{s.n}</div>
              </div>
              <div style={{ padding: '22px 14px 14px' }}>
                <h3 className="h-display" style={{ fontSize: 22, letterSpacing: '-.02em', margin: '0 0 8px', fontWeight: 600 }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--m-ink-2)', lineHeight: 1.5, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const Impact = () =>
<section data-mogo-impact style={{ padding: '100px 0', background: 'var(--m-ink)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: -120, right: -120, width: 400, height: 400, borderRadius: 999, background: 'var(--m-green)', opacity: .15, filter: 'blur(100px)' }} />
    <div className="shell" style={{ position: 'relative' }}>
      <div style={{ maxWidth: 900, marginBottom: 72 }}>
        <div className="h-eyebrow" style={{ color: 'rgba(255,255,255,.6)' }}><span className="dot" />Our impact</div>
        <h2 className="h-display" style={{ fontSize: 'clamp(44px, 6.5vw, 100px)', lineHeight: .98, letterSpacing: '-.035em', margin: '24px 0 0', fontWeight: 500 }}>
          Fueling <em style={{ fontStyle: 'italic', color: 'var(--m-green)', fontFamily: 'var(--font-accent)', fontWeight: 400 }}>200,000+</em><br />Kenyan livelihoods.
        </h2>
      </div>

      <div data-impact-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,.12)' }}>
        <ImpactNum n="KES 12B+" l="Disbursed to Kenyans since 2018" />
        <ImpactNum n="100,000+" l="Bodas, tuk-tuks and cars financed" />
        <ImpactNum n="84+" l="Branches from Mombasa to Eldoret" />
      </div>
    </div>
  </section>;


const ImpactNum = ({ n, l }) =>
<div style={{ padding: '48px 24px 0', borderRight: '1px solid rgba(255,255,255,.1)', minHeight: 200 }}>
    <div className="h-display" style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-.035em', fontWeight: 500, marginBottom: 24, color: '#fff' }}>{n}</div>
    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.5, maxWidth: 200 }}>{l}</div>
  </div>;


Object.assign(window, { HowItWorks, Impact });