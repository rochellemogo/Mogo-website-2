const Mission = () => (
  <section style={{padding:'120px 0', background:'#fff'}}>
    <div className="shell">
      <div style={{maxWidth: 1100}}>
        <div className="h-eyebrow"><span className="dot"/>Our mission</div>
        <h2 className="h-display" style={{fontSize:'clamp(44px, 6.5vw, 108px)', lineHeight:.98, letterSpacing:'-.035em', margin:'24px 0 0', fontWeight:500}}>
          Unlocking progress<br/>
          for Kenya's <em style={{fontStyle:'italic', color:'var(--m-green-ink)', fontFamily:'var(--font-accent)', fontWeight:400, letterSpacing:'-.01em'}}>everyday earners.</em>
        </h2>
      </div>
      <div style={{marginTop: 72, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 40, paddingTop: 40, borderTop:'1px solid var(--m-line)'}}>
        <MissionPoint n="01" t="Financing for the real economy" d="We back riders, drivers and shopkeepers — not just credit scores. Over 70% of our customers are self-employed."/>
        <MissionPoint n="02" t="Honest terms. Best price." d="Zero hidden fees. Best price guarantee."/>
        <MissionPoint n="03" t="Face-to-face, in your town" d="84 branches from Mombasa to Eldoret. "/>
      </div>
    </div>
  </section>
);

const MissionPoint = ({n,t,d}) => (
  <div>
    <div style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'.14em', color:'var(--m-green-ink)', marginBottom:20}}>{n}</div>
    <h3 style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:22, letterSpacing:'-.02em', margin:'0 0 12px'}}>{t}</h3>
    <p style={{fontSize:15.5, color:'var(--m-ink-2)', lineHeight:1.55, margin:0}}>{d}</p>
  </div>
);

Object.assign(window, { Mission, MissionPoint });
