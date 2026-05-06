// News article detail page component. Reads ?slug= from URL, renders article.
// Also listens for 'mogo-news-updated' so CMS edits appear without a page reload.
const NewsArticle = () => {
  const slug = new URLSearchParams(window.location.search).get('slug');

  const findArticle = () => {
    const items = window.MOGO_NEWS || [];
    return items.find(a => a.slug === slug) || items[0] || null;
  };

  const [article, setArticle] = React.useState(findArticle);

  React.useEffect(() => {
    const handler = () => setArticle(findArticle());
    window.addEventListener('mogo-news-updated', handler);
    return () => window.removeEventListener('mogo-news-updated', handler);
  }, []);

  const items = window.MOGO_NEWS || [];
  const idx = article ? items.findIndex(a => a.slug === article.slug) : -1;
  const prev = idx > 0 ? items[idx - 1] : null;
  const next = idx < items.length - 1 ? items[idx + 1] : null;

  React.useEffect(() => {
    if (article) document.title = article.title + ' · MOGO Kenya';
  }, [article]);

  if (!article) {
    return (
      <section style={{padding:'120px 0', background:'#fff'}}>
        <div className="shell"><p>Article not found. <a href="./news.html">Back to News</a></p></div>
      </section>
    );
  }

  return (
    <>
      {/* Article header */}
      <section style={{background:'var(--m-cream)', padding:'56px 0 72px', borderBottom:'1px solid var(--m-line-2)'}}>
        <div className="shell" style={{maxWidth: 880}}>
          <div style={{display:'flex', gap:8, alignItems:'center', fontSize:12, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:40}}>
            <a href="../index.html" style={{color:'inherit', textDecoration:'none'}}>Home</a>
            <span>/</span>
            <a href="./news.html" style={{color:'inherit', textDecoration:'none'}}>News</a>
            <span>/</span>
            <span style={{color:'var(--m-ink)'}}>{article.tag}</span>
          </div>
          <div style={{display:'flex', gap:16, alignItems:'center', marginBottom:28, fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)'}}>
            <span style={{padding:'5px 10px', border:'1px solid var(--m-line)', borderRadius:999, color:'var(--m-green-ink)'}}>{article.tag}</span>
            <span>{article.dateLong}</span>
          </div>
          <h1 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 64px)', lineHeight:1.02, margin:'0 0 24px', letterSpacing:'-.03em'}}>{article.title}</h1>
          <p style={{fontSize:20, lineHeight:1.5, color:'var(--m-ink-2)', margin:0, maxWidth:740}}>{article.dek}</p>
        </div>
      </section>

      {/* Lead photo — real image if CMS has one, otherwise colour placeholder */}
      <section style={{padding:'48px 0 0', background:'#fff'}}>
        <div className="shell" style={{maxWidth: 1040}}>
          <div style={{aspectRatio:'16/8', borderRadius:'var(--r-xl)', position:'relative', overflow:'hidden',
            background: article.photo ? 'var(--m-cream)' : `linear-gradient(135deg, hsl(${(idx*37)%360} 24% 78%), hsl(${(idx*37+60)%360} 20% 58%))`}}>
            {article.photo
              ? <img src={article.photo} alt={article.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              : <>
                  <div className="grain"/>
                  <div style={{position:'absolute', bottom:20, left:24, right:24, display:'flex', justifyContent:'space-between', alignItems:'flex-end', color:'rgba(255,255,255,.88)', fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase'}}>
                    <span>Photo · {article.photoLabel}</span>
                    <span>Drop image here · 16:8</span>
                  </div>
                </>
            }
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{padding:'72px 0 96px', background:'#fff'}}>
        <div className="shell" style={{maxWidth: 740}}>
          {article.body.map((para, i) => (
            <p key={i} style={{
              fontSize: i === 0 ? 20 : 17.5,
              lineHeight: i === 0 ? 1.55 : 1.7,
              color: i === 0 ? 'var(--m-ink)' : 'var(--m-ink-2)',
              margin: i === 0 ? '0 0 28px' : '0 0 24px',
              fontWeight: i === 0 ? 500 : 400,
            }}>{para}</p>
          ))}
          <div style={{marginTop:48, paddingTop:28, borderTop:'1px solid var(--m-line-2)', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)'}}>
            <span>End · Mogo Kenya Newsroom</span>
            <span>{article.dateLong}</span>
          </div>
        </div>
      </section>

      {/* Prev / Next nav */}
      <section style={{padding:'0 0 96px', background:'#fff'}}>
        <div className="shell" style={{maxWidth: 1040}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, borderTop:'1px solid var(--m-line)', paddingTop: 32}}>
            {prev ? (
              <a href={`./news-article.html?slug=${prev.slug}`} style={{display:'block', padding:'28px 32px', background:'var(--m-cream)', borderRadius:'var(--r-lg)', textDecoration:'none', color:'var(--m-ink)', border:'1px solid var(--m-line-2)'}}>
                <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:10}}>← Newer · {prev.date}</div>
                <div style={{fontSize:18, fontWeight:600, letterSpacing:'-.01em', lineHeight:1.25}}>{prev.title}</div>
              </a>
            ) : <div/>}
            {next ? (
              <a href={`./news-article.html?slug=${next.slug}`} style={{display:'block', padding:'28px 32px', background:'var(--m-cream)', borderRadius:'var(--r-lg)', textDecoration:'none', color:'var(--m-ink)', border:'1px solid var(--m-line-2)', textAlign:'right'}}>
                <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:10}}>Older · {next.date} →</div>
                <div style={{fontSize:18, fontWeight:600, letterSpacing:'-.01em', lineHeight:1.25}}>{next.title}</div>
              </a>
            ) : <div/>}
          </div>
          <div style={{marginTop: 24, textAlign:'center'}}>
            <a href="./news.html" style={{display:'inline-flex', alignItems:'center', gap:8, fontSize:13, fontWeight:600, color:'var(--m-ink)', textDecoration:'none', padding:'12px 20px', border:'1px solid var(--m-line)', borderRadius:999}}>← All stories</a>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { NewsArticle });
