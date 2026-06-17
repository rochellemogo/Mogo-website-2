const AppSection = () => {
  const features = [
    { title: 'Check your balance', desc: 'Real-time loan balance and next payment date at a glance.' },
    { title: 'Repay instantly',    desc: 'M-Pesa integrated — pay in seconds, no Paybill number needed.' },
    { title: 'Restructure your loan', desc: 'Apply for a revised repayment plan without visiting a branch.' },
  ];

  return (
    <section data-app-section style={{padding:'100px 0', background:'var(--m-ink)', color:'#fff', position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', top:-120, right:-80, width:400, height:400, borderRadius:999, background:'var(--m-green)', opacity:.12, filter:'blur(100px)', pointerEvents:'none'}}/>
      <div style={{position:'absolute', bottom:-100, left:-60, width:300, height:300, borderRadius:999, background:'var(--m-green)', opacity:.06, filter:'blur(80px)', pointerEvents:'none'}}/>
      <div className="shell" style={{position:'relative'}}>
        <div data-app-grid style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center'}}>

          {/* Left: content */}
          <div>
            <div style={{display:'inline-flex', alignItems:'center', gap:8, padding:'5px 12px', borderRadius:999, background:'rgba(122,184,0,.15)', border:'1px solid rgba(122,184,0,.3)', fontSize:11, fontFamily:'inherit', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-green)', fontWeight:700, marginBottom:20}}>
              Mogo · Fintech
            </div>
            <h2 className="h-display" style={{fontSize:'clamp(36px, 4.5vw, 72px)', lineHeight:.98, letterSpacing:'-.035em', margin:'0 0 20px', fontWeight:600, color:'#fff'}}>
              Your loan,<br/><em style={{fontStyle:'italic', color:'var(--m-green)', fontWeight:400}}>fully digital.</em>
            </h2>
            <p style={{fontSize:18, color:'rgba(255,255,255,.7)', lineHeight:1.55, margin:'0 0 36px', maxWidth:460}}>
              Check your balance, repay your loan, restructure your plan — all from your phone. The full Mogo experience, without a branch visit.
            </p>
            <div style={{display:'flex', flexDirection:'column', gap:14, marginBottom:40}}>
              {features.map(f => (
                <div key={f.title} style={{display:'flex', gap:16, alignItems:'flex-start', padding:'16px 20px', borderRadius:14, background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)'}}>
                  <div style={{flexShrink:0, width:28, height:28, borderRadius:8, background:'var(--m-green)', display:'grid', placeItems:'center', marginTop:1}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#0B1220" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div style={{fontWeight:600, fontSize:16, color:'#fff', marginBottom:4}}>{f.title}</div>
                    <div style={{fontSize:13.5, color:'rgba(255,255,255,.6)', lineHeight:1.45}}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <a href="https://play.google.com/store/apps/details?id=com.mogo.kenya" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex', alignItems:'center', gap:12, padding:'12px 18px', background:'#000', border:'1px solid rgba(255,255,255,.2)', borderRadius:10, textDecoration:'none', color:'#fff'}}>
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden="true">
                  <path d="M1.4.5l11.2 11.5L1.4 23.5a1.5 1.5 0 01-.9-1.4V1.9a1.5 1.5 0 01.9-1.4z" fill="#00d2ff"/>
                  <path d="M16.4 8.4l-3.8 3.6 3.8 3.6 4.2-2.4a1.5 1.5 0 000-2.4l-4.2-2.4z" fill="#ffce00"/>
                  <path d="M1.4.5l11.2 11.5 3.8-3.6L3.3.4a1.5 1.5 0 00-1.9.1z" fill="#00f076"/>
                  <path d="M1.4 23.5l11.2-11.5 3.8 3.6L3.3 23.6a1.5 1.5 0 01-1.9-.1z" fill="#ff3a44"/>
                </svg>
                <div style={{lineHeight:1.1}}>
                  <div style={{fontSize:9, letterSpacing:'.06em', textTransform:'uppercase', color:'rgba(255,255,255,.7)'}}>Get it on</div>
                  <div style={{fontSize:15, fontWeight:600}}>Google Play</div>
                </div>
              </a>
              <a href="https://apps.apple.com/ke/app/mogo/id1234567890" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex', alignItems:'center', gap:12, padding:'12px 18px', background:'#000', border:'1px solid rgba(255,255,255,.2)', borderRadius:10, textDecoration:'none', color:'#fff'}}>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="white" aria-hidden="true"><path d="M14.97 11.5c-.02-2.45 2-3.63 2.09-3.69-1.14-1.66-2.9-1.89-3.53-1.91-1.49-.15-2.93.88-3.69.88-.77 0-1.94-.87-3.19-.84-1.63.02-3.14.95-3.98 2.4-1.7 2.95-.44 7.3 1.22 9.69.81 1.17 1.78 2.47 3.04 2.42 1.22-.05 1.68-.78 3.16-.78 1.47 0 1.9.78 3.18.75 1.32-.02 2.15-1.18 2.95-2.35.93-1.35 1.31-2.66 1.33-2.73-.03-.01-2.56-.98-2.58-3.84zm-2.41-7.07c.67-.82 1.13-1.95.99-3.09-1 .04-2.2.67-2.91 1.47-.64.74-1.2 1.91-1.05 3.04 1.1.08 2.23-.56 2.97-1.42z"/></svg>
                <div style={{lineHeight:1.1}}>
                  <div style={{fontSize:9, letterSpacing:'.06em', textTransform:'uppercase', color:'rgba(255,255,255,.7)'}}>Download on the</div>
                  <div style={{fontSize:15, fontWeight:600}}>App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: phone mockup placeholders */}
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:20, position:'relative'}}>
            {/* Back phone (slightly offset) */}
            <div style={{position:'absolute', right:'calc(50% - 80px)', top:30, width:220, aspectRatio:'9/19', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.12)', borderRadius:36, overflow:'hidden', transform:'rotate(-6deg)'}}>
              <div style={{height:2, background:'rgba(255,255,255,.1)', margin:'14px 40px 0'}}/>
              <div style={{flex:1, padding:16, display:'flex', flexDirection:'column', gap:12, marginTop:20}}>
                {[.9,.6,.75,.5,.8].map((w,i) => <div key={i} style={{height:8, background:'rgba(255,255,255,.08)', borderRadius:4, width:`${w*100}%`}}/>)}
              </div>
            </div>
            {/* Front phone */}
            <div style={{position:'relative', zIndex:1, width:240, aspectRatio:'9/19', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.18)', borderRadius:40, overflow:'hidden', display:'flex', flexDirection:'column', boxShadow:'0 40px 80px rgba(0,0,0,.5)'}}>
              {/* Status bar */}
              <div style={{height:40, background:'rgba(122,184,0,.2)', display:'flex', alignItems:'center', justifyContent:'center', gap:8}}>
                <div style={{width:60, height:6, borderRadius:3, background:'rgba(122,184,0,.6)'}}/>
              </div>
              {/* Loan balance card */}
              <div style={{margin:16, padding:'20px 18px', background:'rgba(122,184,0,.15)', borderRadius:16, border:'1px solid rgba(122,184,0,.25)'}}>
                <div style={{fontSize:9, color:'rgba(255,255,255,.5)', letterSpacing:'.1em', textTransform:'uppercase', marginBottom:6}}>Loan balance</div>
                <div style={{fontSize:22, fontWeight:700, color:'#fff', letterSpacing:'-.02em'}}>KES 48,200</div>
                <div style={{fontSize:10, color:'rgba(255,255,255,.5)', marginTop:4}}>Next payment: Mon 23 Jun</div>
              </div>
              {/* Action buttons */}
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, margin:'0 16px'}}>
                {['Repay', 'Restructure'].map(l => (
                  <div key={l} style={{padding:'10px 0', background:'rgba(255,255,255,.06)', borderRadius:10, textAlign:'center', fontSize:10, color:'rgba(255,255,255,.7)', fontWeight:600}}>{l}</div>
                ))}
              </div>
              {/* Filler */}
              <div style={{flex:1, margin:16, background:'rgba(255,255,255,.03)', borderRadius:12}}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

Object.assign(window, { AppSection });
