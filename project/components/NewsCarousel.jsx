const NewsCarousel = () => {
  const [news, setNews] = React.useState(window.MOGO_NEWS || []);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (!window.MOGO_NEWS) return;
    setNews(window.MOGO_NEWS);
  }, []);

  const shown = news.slice(0, 6);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('article');
    const gap = 20;
    const w = card ? card.offsetWidth + gap : 0;
    scrollRef.current.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  const isSubpage = typeof window !== 'undefined' && (window.__MOGO_SUBPAGE || window.location.pathname.includes('/pages/') || window.location.pathname.includes('/products/'));
  const base = isSubpage ? '../' : '';

  const arrowStyle = { width:40, height:40, borderRadius:999, border:'1px solid var(--m-line-2)', background:'#fff', cursor:'pointer', display:'grid', placeItems:'center', color:'var(--m-ink)', flexShrink:0 };

  if (shown.length === 0) return null;

  return (
    <section id="news" style={{padding:'100px 0', background:'var(--m-cream)'}}>
      <div className="shell">
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, marginBottom:36, flexWrap:'wrap'}}>
          <div>
            <div className="h-eyebrow"><span className="dot"/>Latest news</div>
            <h2 className="mega-head" style={{marginTop:12}}>Mogo in the <em>news.</em></h2>
          </div>
          <a href={`${base}pages/news.html`} style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'var(--m-green-ink)', textDecoration:'none', marginBottom:4}}>
            All stories <ArrowRight size={13}/>
          </a>
        </div>

        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <button onClick={()=>scroll(-1)} style={arrowStyle} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div ref={scrollRef} data-news-carousel style={{flex:1, display:'flex', gap:20, overflowX:'auto', scrollSnapType:'x mandatory', scrollbarWidth:'none', WebkitOverflowScrolling:'touch'}}>
            <style>{`[data-news-carousel]::-webkit-scrollbar{display:none}`}</style>
            {shown.map((n, idx) => (
              <article key={n.slug} style={{flex:'0 0 calc(33.333% - 14px)', scrollSnapAlign:'start', background:'#fff', borderRadius:'var(--r-xl)', overflow:'hidden', border:'1px solid var(--m-line-2)', display:'flex', flexDirection:'column', minWidth:0}}>
                <div style={{aspectRatio:'16/9', background:`linear-gradient(135deg, hsl(${idx*47} 28% 62%), hsl(${(idx*47+80)%360} 22% 48%))`, position:'relative', flexShrink:0}}>
                  <div style={{position:'absolute', top:12, left:12, padding:'4px 10px', borderRadius:999, background:'rgba(11,18,32,.55)', backdropFilter:'blur(10px)', fontSize:10, fontFamily:'inherit', letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.9)', fontWeight:600}}>{n.tag}</div>
                </div>
                <div style={{padding:'20px 24px 24px', flex:1, display:'flex', flexDirection:'column'}}>
                  <div style={{fontSize:11, color:'var(--m-muted)', marginBottom:10, fontFamily:'inherit', letterSpacing:'.04em'}}>{n.dateLong}</div>
                  <h3 style={{fontSize:16, fontWeight:600, lineHeight:1.3, letterSpacing:'-.01em', margin:'0 0 10px', fontFamily:'var(--font-display)', flex:1}}>{n.title}</h3>
                  <p style={{fontSize:13.5, color:'var(--m-ink-2)', lineHeight:1.5, margin:'0 0 16px'}}>{n.dek}</p>
                  <a href={`${base}pages/news-article.html?slug=${n.slug}`} style={{display:'inline-flex', alignItems:'center', gap:6, fontSize:12, fontWeight:600, color:'var(--m-green-ink)', textDecoration:'none', textTransform:'uppercase', letterSpacing:'.06em'}}>
                    Read story <ArrowRight size={11}/>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button onClick={()=>scroll(1)} style={arrowStyle} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { NewsCarousel });
