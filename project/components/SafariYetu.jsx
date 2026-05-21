// "Safari Yetu" — Mogo Kenya company timeline
// Horizontal scrollable on desktop with alternating above/below nodes.
// Stacks vertically on mobile (handled in mobile.css).

const SAFARI_YETU = [
  { year:'2019', title:'A Bold Entry into Africa', body:'We began with a vision to make vehicle ownership accessible. Entered Kenya & Uganda markets. Focused on car financing & car logbook loans. Enabled mobility for ride-hailing drivers.', issuance:'KES 349M', customers:'737' },
  { year:'2020', title:'Unlocking Everyday Income', body:'We expanded access to products that generate livelihoods. Launched boda boda financing. Opened financing to a wider customer base. Empowered informal sector entrepreneurs.', issuance:'KES 1.4B', customers:'12,051' },
  { year:'2021', title:'Building the Foundation',     body:'We strengthened our base to support long-term growth. Expanded into new regions. Grew team and operational capacity. Strengthened internal processes.', issuance:'KES 4.7B', customers:'50,001' },
  { year:'2022', title:'Strengthening the Core',     body:'We refined how we work to serve better. Improved operational efficiency. Optimised product structure. Focused on sustainable growth.', issuance:'KES 4.5B', customers:'86,552' },
  { year:'2023', title:'Choosing Resilience',         body:'In a tough economy, we chose sustainability over scale. Navigated rising cost of living & currency depreciation. Tightened credit policies. Reduced costs and optimised operations.', issuance:'KES 3.7B', customers:'116,774' },
  { year:'2024', title:'Building Trust & Expanding Horizons', body:'We strengthened credibility and introduced new opportunities. Achieved CBK approval as a digital lender. Launched boda boda & tuk tuk logbook loans. Reached 1,000+ new product issuances.', issuance:'KES 5.3B', customers:'143,063' },
  { year:'2025', title:'Accelerating Impact',         body:'We scaled our reach, our team, and our solutions. Presence in 32 counties with 88 branches. Team growth: 600 → 1,500+ employees. Launched Check-Off Loans, Smartphone Loans and the MyMOGO App.', issuance:'KES 10.7B', customers:'302,496' },
];

const SafariYetu = () => {
  const scrollerRef = React.useRef(null);
  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({left: dir * 480, behavior:'smooth'});
  };

  return (
    <section data-safari-yetu style={{padding:'104px 0 88px', background:'var(--m-cream)', overflow:'hidden'}}>
      <div className="shell" style={{marginBottom: 48}}>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:24}}>
          <div>
            <div className="h-eyebrow"><span className="dot" style={{background:'#7AB800'}}/>mogo SAFARI YETU</div>
            <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 60px)', marginTop:14}}>Our <em>journey</em><br/>so far.</h2>
            <p style={{fontSize:17, color:'var(--m-ink-2)', lineHeight:1.6, marginTop:18, maxWidth:600}}>
              From a single product in 2019 to 88 branches and 300,000+ customers — here's how Mogo Kenya grew alongside the people we finance.
            </p>
          </div>
          <div className="safari-arrows" style={{display:'flex', gap:8}}>
            <button onClick={()=>scrollBy(-1)} aria-label="Previous milestone" style={arrowBtnStyle}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <button onClick={()=>scrollBy(1)}  aria-label="Next milestone"     style={arrowBtnStyle}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </div>
        </div>
      </div>

      <div className="safari-scroll" ref={scrollerRef} style={{
        position:'relative',
        overflowX:'auto', overflowY:'hidden',
        scrollSnapType:'x mandatory',
        WebkitOverflowScrolling:'touch',
        scrollbarWidth:'none',
        paddingBottom: 24,
      }}>
        <div className="safari-track" style={{
          position:'relative',
          display:'flex',
          minHeight: 700,
          padding:'0 max(40px, 6vw)',
          width:'max-content',
        }}>
          {/* Horizontal spine */}
          <div className="safari-spine" style={{
            position:'absolute',
            top: 340,
            left: 0, right: 0,
            height: 3,
            background:'var(--m-ink)',
            borderRadius: 2,
            zIndex: 0,
          }}/>

          {SAFARI_YETU.map((m, i) => {
            const above = i % 2 === 0;
            // Card geometry: card height ~300, spine at y=340
            const CARD_H = 300;
            const SPINE_Y = 340;
            const GAP = 28;            // gap between card and spine
            const cardTop = above ? (SPINE_Y - GAP - CARD_H) : (SPINE_Y + GAP);

            return (
              <div key={m.year} className="safari-node" style={{
                position:'relative',
                width: 320, flex:'0 0 320px',
                marginRight: 28,
                scrollSnapAlign:'start',
                height: 680,
              }}>
                {/* Card */}
                <div className={`safari-card ${above ? 'is-above' : 'is-below'}`} style={{
                  position:'absolute',
                  left: 0, right: 0,
                  top: cardTop,
                  height: CARD_H,
                  background:'#fff',
                  border:'1px solid var(--m-line-2)',
                  borderRadius: 'var(--r-xl)',
                  padding: 22,
                  boxShadow:'0 8px 28px rgba(11,18,32,.06)',
                  zIndex: 2,
                  display:'flex', flexDirection:'column',
                }}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
                    <div style={{
                      fontFamily:'var(--font-display)',
                      fontSize: 36, fontWeight: 900,
                      color:'#7AB800',
                      letterSpacing:'-.02em',
                      lineHeight: 1,
                    }}>{m.year}</div>
                    <div style={{
                      fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700,
                      letterSpacing:'.14em', textTransform:'uppercase',
                      color:'#7AB800', padding:'4px 8px',
                      background:'rgba(122,184,0,.12)', borderRadius:6,
                    }}>0{i+1} of {SAFARI_YETU.length}</div>
                  </div>
                  <h3 style={{fontSize: 18, fontWeight: 700, letterSpacing:'-.01em', margin:'0 0 8px', color:'var(--m-ink)'}}>{m.title}</h3>
                  <p style={{fontSize: 13, lineHeight: 1.5, color:'var(--m-ink-2)', margin:0, flex:1}}>{m.body}</p>

                  {/* Metrics */}
                  <div style={{display:'flex', gap: 10, marginTop: 14, paddingTop: 12, borderTop:'1px dashed var(--m-line-2)'}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:9.5, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:3}}>Issuances</div>
                      <div style={{fontSize: 16, fontWeight: 700, color:'#7AB800', fontFamily:'var(--font-display)', letterSpacing:'-.01em'}}>{m.issuance}</div>
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:9.5, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:3}}>Customers</div>
                      <div style={{fontSize: 16, fontWeight: 700, color:'#003478', fontFamily:'var(--font-display)', letterSpacing:'-.01em'}}>{m.customers}</div>
                    </div>
                  </div>
                </div>

                {/* Connector line from card edge to spine */}
                <div className="safari-connector" style={{
                  position:'absolute',
                  left: 159, /* center of node (320/2 - 1px) */
                  top: above ? (SPINE_Y - GAP) : SPINE_Y,
                  width: 2,
                  height: GAP,
                  background:'var(--m-ink)',
                  zIndex: 1,
                }}/>

                {/* Node circle on the spine */}
                <div className="safari-dot" style={{
                  position:'absolute',
                  left: 144, /* (320-32)/2 */
                  top: SPINE_Y - 16,
                  width: 32, height: 32,
                  borderRadius: 999,
                  background:'#fff',
                  border:'3px solid #7AB800',
                  zIndex: 3,
                  display:'grid', placeItems:'center',
                }}>
                  <span style={{width:10, height:10, borderRadius:999, background:'#7AB800', display:'block'}}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const arrowBtnStyle = {
  width: 42, height: 42, borderRadius: 999,
  background:'#fff', border:'1px solid var(--m-line-2)',
  cursor:'pointer', display:'grid', placeItems:'center',
  color:'var(--m-ink)',
};

Object.assign(window, { SafariYetu, SAFARI_YETU });
