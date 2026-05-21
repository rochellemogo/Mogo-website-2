// Shared shell for About / Impact sub-pages.
// Expects a `page` object with: eyebrow, title (string w/ optional <em>), kicker, blocks[]
// Each block: { kind: 'prose'|'cards'|'list'|'cta'|'split'|'grid-stats'|'contacts'|'payments'|'faq'|'news'|'partners', ... }

const PageHero = ({eyebrow, title, kicker, accent="var(--m-green)"}) => (
  <section style={{background:'var(--m-cream)', padding:'64px 0 88px', borderBottom:'1px solid var(--m-line-2)'}}>
    <div className="shell">
      <div style={{display:'flex', gap:8, alignItems:'center', fontSize:12, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:28}}>
        <a href="../index.html" style={{color:'inherit', textDecoration:'none'}}>Home</a>
        <span>/</span>
        <span style={{color:'var(--m-ink)'}}>{eyebrow}</span>
      </div>
      <div className="h-eyebrow" style={{color: accent}}><span className="dot" style={{background: accent}}/>{eyebrow}</div>
      <h1 className="mega-head" style={{fontSize:'clamp(52px, 7vw, 104px)', lineHeight:.97, margin:'16px 0 24px'}}
        dangerouslySetInnerHTML={{__html: title}}/>
      {kicker && <p style={{fontSize:20, lineHeight:1.5, color:'var(--m-ink-2)', maxWidth: 720}}>{kicker}</p>}
    </div>
  </section>
);

const Prose = ({children, title, tight}) => (
  <section style={{padding: tight ? '56px 0' : '88px 0', background:'#fff'}}>
    <div className="shell" style={{maxWidth: 880}}>
      {title && <h2 className="mega-head" style={{fontSize:'clamp(32px, 4vw, 52px)', marginBottom: 28}} dangerouslySetInnerHTML={{__html:title}}/>}
      <div style={{fontSize:17, lineHeight:1.65, color:'var(--m-ink-2)'}}>{children}</div>
    </div>
  </section>
);

const StatsBand = ({stats, bg='var(--m-ink)', fg='#fff', accent='var(--m-green)'}) => (
  <section style={{background: bg, color: fg, padding:'88px 0'}}>
    <div className="shell">
      <div style={{display:'grid', gridTemplateColumns:`repeat(${stats.length}, 1fr)`, gap: 40}}>
        {stats.map((s,i) => (
          <div key={i} style={{borderLeft:'1px solid rgba(255,255,255,.15)', paddingLeft: 24}}>
            <div style={{fontSize:'clamp(52px, 6vw, 88px)', fontFamily:'var(--font-display)', fontWeight:600, letterSpacing:'-.03em', lineHeight:1, color: accent}}>{s.n}</div>
            <div style={{fontSize:14, lineHeight:1.5, color:'rgba(255,255,255,.7)', marginTop:16, maxWidth: 220}}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TwoCol = ({left, right, bg='#fff'}) => (
  <section style={{padding:'96px 0', background: bg}}>
    <div className="shell" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'start'}}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  </section>
);

const Cards = ({title, eyebrow, cards, cols=3, bg='#fff'}) => (
  <section style={{padding:'96px 0', background: bg}}>
    <div className="shell">
      {eyebrow && <div className="h-eyebrow"><span className="dot"/>{eyebrow}</div>}
      {title && <h2 className="mega-head" style={{fontSize:'clamp(36px, 4.5vw, 64px)', marginTop: 12, marginBottom: 48}} dangerouslySetInnerHTML={{__html:title}}/>}
      <div style={{display:'grid', gridTemplateColumns:`repeat(${cols}, 1fr)`, gap: 20}}>
        {cards.map((c,i) => (
          <div key={i} style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', padding: 32, border:'1px solid var(--m-line-2)'}}>
            {c.label && <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:12}}>{c.label}</div>}
            <h3 style={{fontSize:22, fontWeight:600, letterSpacing:'-.01em', marginBottom: 12}}>{c.title}</h3>
            <p style={{fontSize:14.5, lineHeight:1.55, color:'var(--m-ink-2)'}}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTAFooter = ({title, subtitle, cta='Apply now', href='../index.html#apply', secondary}) => (
  <section style={{padding:'80px 0', background:'var(--m-cream)'}}>
    <div className="shell">
      <div style={{background:'var(--m-ink)', borderRadius:'var(--r-xl)', padding:'72px 56px', color:'#fff', display:'flex', alignItems:'center', justifyContent:'space-between', gap: 40, flexWrap:'wrap'}}>
        <div style={{maxWidth: 640}}>
          <h2 className="h-display" style={{fontSize:'clamp(36px, 4vw, 56px)', lineHeight:1, fontWeight:600, letterSpacing:'-.02em', margin:0}} dangerouslySetInnerHTML={{__html:title}}/>
          {subtitle && <p style={{fontSize:17, color:'rgba(255,255,255,.7)', marginTop:16}}>{subtitle}</p>}
        </div>
        <div style={{display:'flex', gap:10}}>
          <a href={href} className="btn btn-primary">{cta} <span className="arrow-pill"><ArrowRight/></span></a>
          {secondary && <a href={secondary.href} className="btn btn-ghost" style={{background:'rgba(255,255,255,.08)', color:'#fff', borderColor:'rgba(255,255,255,.2)'}}>{secondary.label}</a>}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { PageHero, Prose, StatsBand, TwoCol, Cards, CTAFooter, StoryVideo });

const StoryVideo = ({youtubeId, name, city, role, product, tagline, featured}) => {
  const [playing, setPlaying] = React.useState(false);
  const thumb = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  return (
    <article style={{display:'flex', flexDirection:'column', gap: featured ? 24 : 14}}>
      <div style={{position:'relative', aspectRatio: featured ? '16/9' : '4/3', borderRadius: featured ? 'var(--r-xl)' : 16, overflow:'hidden', background:'var(--m-ink)', cursor:'pointer'}} onClick={()=>setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={`${name} — Mogo customer story`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{position:'absolute', inset:0, width:'100%', height:'100%', border:'none'}}
          />
        ) : (
          <>
            <img src={thumb} alt={`${name} story`} style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}} onError={(e)=>{e.currentTarget.style.display='none';}}/>
            <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.55) 100%)'}}/>
            {/* Play button */}
            <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width: featured ? 88 : 56, height: featured ? 88 : 56, borderRadius:999, background:'rgba(255,255,255,.95)', display:'grid', placeItems:'center', boxShadow:'0 12px 36px rgba(0,0,0,.3)'}}>
              <svg width={featured?28:18} height={featured?28:18} viewBox="0 0 18 18" fill="var(--m-ink)"><path d="M3 1l13 8-13 8z"/></svg>
            </div>
            {/* Bottom-left meta over thumb */}
            <div style={{position:'absolute', left: featured?28:16, right: featured?28:16, bottom: featured?24:14, color:'#fff'}}>
              <div style={{fontSize:11, fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', opacity:.85}}>{product}</div>
              <div style={{fontSize: featured ? 30 : 18, fontWeight:700, marginTop:4, letterSpacing:'-.01em', lineHeight:1.2}}>“{tagline}”</div>
            </div>
          </>
        )}
      </div>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap: 12}}>
        <div>
          <div style={{fontSize: featured?20:15, fontWeight:600, color:'var(--m-ink)'}}>{name}</div>
          <div style={{fontSize:13, color:'var(--m-ink-2)', marginTop:2}}>{role} · {city}</div>
        </div>
      </div>
    </article>
  );
};
