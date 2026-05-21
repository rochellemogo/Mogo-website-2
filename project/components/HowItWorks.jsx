const HowItWorks = () => {
  const [s, setS] = React.useState(window.MOGO_SETTINGS || {});
  React.useEffect(() => {
    const h = () => setS(window.MOGO_SETTINGS || {});
    window.addEventListener('mogo-settings-updated', h);
    return () => window.removeEventListener('mogo-settings-updated', h);
  }, []);

  const steps = [
    { n: "01", t: s.how_step1_title || "Apply in 3 minutes",   d: s.how_step1_desc || "Online or at any of our 84 branches. Just your ID and M-Pesa number.", theme: 'warm' },
    { n: "02", t: s.how_step2_title || "Get a call same day",  d: s.how_step2_desc || "A real MOGO officer confirms your exact terms. No hidden fees.", theme: 'green' },
    { n: "03", t: s.how_step3_title || "Sign & collect",       d: s.how_step3_desc || "Face-to-face at your branch. Ride home in as little as 2 hours.", theme: 'cool' },
    { n: "04", t: s.how_step4_title || "Repay via M-Pesa",     d: s.how_step4_desc || "Weekly or monthly. Pay early, save interest. Own it outright.", theme: 'peach' },
  ];

  return (
    <section id="howitworks" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="shell">
        <div className="section-intro">
          <div>
            <div className="h-eyebrow"><span className="dot" />How it works</div>
            <h2 className="mega-head">{s.how_headline || 'Four steps from'}<br />{s.how_headline ? '' : 'application to '}<em>{s.how_headline ? '' : 'ownership.'}</em></h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--m-ink-2)', lineHeight: 1.55, maxWidth: 440, margin: 0 }}>
            {s.how_subtitle || 'No paperwork mountain. No surprises. Just an honest process built around the fastest path to your wheels.'}
          </p>
        </div>

        <div data-steps-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {steps.map((step) =>
          <div key={step.n} style={{ background: 'var(--m-cream)', borderRadius: 'var(--r-xl)', padding: 14, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
                <ProductImage theme={step.theme} />
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '8px 14px', borderRadius: 999, background: '#fff', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--m-green-ink)' }}>{step.n}</div>
              </div>
              <div style={{ padding: '22px 14px 14px' }}>
                <h3 className="h-display" style={{ fontSize: 22, letterSpacing: '-.02em', margin: '0 0 8px', fontWeight: 600 }}>{step.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--m-ink-2)', lineHeight: 1.5, margin: 0 }}>{step.d}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const [s, setS] = React.useState(window.MOGO_SETTINGS || {});
  React.useEffect(() => {
    const h = () => setS(window.MOGO_SETTINGS || {});
    window.addEventListener('mogo-settings-updated', h);
    return () => window.removeEventListener('mogo-settings-updated', h);
  }, []);

  return (
    <section data-mogo-impact style={{ padding: '100px 0', background: 'var(--m-ink)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, right: -120, width: 400, height: 400, borderRadius: 999, background: 'var(--m-green)', opacity: .15, filter: 'blur(100px)' }} />
      <div className="shell" style={{ position: 'relative' }}>
        <div style={{ maxWidth: 900, marginBottom: 72 }}>
          <div className="h-eyebrow" style={{ color: 'rgba(255,255,255,.6)' }}><span className="dot" />Our impact</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(44px, 6.5vw, 100px)', lineHeight: .98, letterSpacing: '-.035em', margin: '24px 0 0', fontWeight: 500 }}>
            {s.impact_headline || 'Fueling 200,000+ Kenyan livelihoods.'}
          </h2>
        </div>

        <div data-impact-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,.12)' }}>
          <ImpactNum n={s.impact_stat1_num || 'KES 12B+'}   l={s.impact_stat1_label || 'Disbursed to Kenyans since 2018'} />
          <ImpactNum n={s.impact_stat2_num || '100,000+'}    l={s.impact_stat2_label || 'Bodas, tuk-tuks and cars financed'} />
          <ImpactNum n={s.impact_stat3_num || '84+'}         l={s.impact_stat3_label || 'Branches from Mombasa to Eldoret'} />
        </div>
      </div>
    </section>
  );
};

const ImpactNum = ({ n, l }) =>
<div style={{ padding: '48px 24px 0', borderRight: '1px solid rgba(255,255,255,.1)', minHeight: 200 }}>
    <div className="h-display" style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-.035em', fontWeight: 500, marginBottom: 24, color: '#fff' }}>{n}</div>
    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.5, maxWidth: 200 }}>{l}</div>
  </div>;


Object.assign(window, { HowItWorks, Impact });
