// Shared shell for About / Impact sub-pages.
// Expects a `page` object with: eyebrow, title (string w/ optional <em>), kicker, blocks[]
// Each block: { kind: 'prose'|'cards'|'list'|'cta'|'split'|'grid-stats'|'contacts'|'payments'|'faq'|'news'|'partners', ... }

const PageHero = ({eyebrow, title, kicker, accent="var(--m-green)"}) => (
  <section data-page-hero style={{background:'var(--m-cream)', padding:'64px 0 88px', borderBottom:'1px solid var(--m-line-2)'}}>
    <div className="shell">
      <div style={{display:'flex', gap:8, alignItems:'center', fontSize:12, fontFamily: 'inherit', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:28}}>
        <a href="../index-v2.html" style={{color:'inherit', textDecoration:'none'}}>Home</a>
        <span>/</span>
        <span style={{color:'var(--m-ink)'}}>{eyebrow}</span>
      </div>
      <h1 className="mega-head" style={{fontSize:'clamp(52px, 7vw, 104px)', lineHeight:.97, margin:'16px 0 24px'}}
        dangerouslySetInnerHTML={{__html: title}}/>
      {kicker && <p style={{fontSize:20, lineHeight:1.5, color:'var(--m-ink-2)', maxWidth: 720}}>{kicker}</p>}
    </div>
  </section>
);

const Prose = ({children, title, tight}) => (
  <section data-prose style={{padding: tight ? '56px 0' : '88px 0', background:'#fff'}}>
    <div className="shell" style={{maxWidth: 880}}>
      {title && <h2 className="mega-head" style={{fontSize:'clamp(32px, 4vw, 52px)', marginBottom: 28}} dangerouslySetInnerHTML={{__html:title}}/>}
      <div style={{fontSize:17, lineHeight:1.65, color:'var(--m-ink-2)'}}>{children}</div>
    </div>
  </section>
);

const StatsBand = ({stats, bg='var(--m-ink)', fg='#fff', accent='var(--m-green)'}) => (
  <section data-stats-band style={{background: bg, color: fg, padding:'88px 0'}}>
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
  <section data-two-col style={{padding:'96px 0', background: bg}}>
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
      <div data-cards-grid={cols} style={{display:'grid', gridTemplateColumns:`repeat(${cols}, 1fr)`, gap: 20}}>
        {cards.map((c,i) => (
          <div key={i} style={{background:'var(--m-cream)', borderRadius:'var(--r-xl)', padding: 32, border:'1px solid var(--m-line-2)'}}>
            {c.label && <div style={{fontSize:11, fontFamily: 'inherit', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:12}}>{c.label}</div>}
            <h3 style={{fontSize:22, fontWeight:600, letterSpacing:'-.01em', marginBottom: 12}}>{c.title}</h3>
            <p style={{fontSize:14.5, lineHeight:1.55, color:'var(--m-ink-2)'}}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTAFooter = ({title, subtitle, cta='Apply now', href='../index-v2.html#apply', secondary}) => (
  <section data-cta-footer style={{padding:'80px 0', background:'var(--m-cream)'}}>
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

Object.assign(window, { PageHero, Prose, StatsBand, TwoCol, Cards, CTAFooter, StoryVideo, FeaturedStory });

// useMogoVideos — pulls the channel's most recent uploads at runtime:
// loads the uploads playlist via the YouTube IFrame API to read the real
// video IDs, then fetches each video's actual title via oEmbed. Returns
// null while loading; the UI falls back to thematic titles until then.
function useMogoVideos(count = 7) {
  const [items, setItems] = React.useState(null);
  React.useEffect(() => {
    let cancelled = false;
    const list = window.MOGO_UPLOADS;
    if (!list) return;

    function fetchTitles(ids) {
      const wanted = ids.slice(0, count);
      Promise.all(wanted.map((id) =>
        fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) => ({ id, title: d && d.title ? d.title : null }))
          .catch(() => ({ id, title: null }))
      )).then((res) => { if (!cancelled) setItems(res); });
    }

    function buildHarvester() {
      const holder = document.createElement('div');
      holder.style.cssText = 'position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden';
      const inner = document.createElement('div');
      holder.appendChild(inner);
      document.body.appendChild(holder);
      try {
        const player = new window.YT.Player(inner, {
          height: '1', width: '1',
          playerVars: { listType: 'playlist', list, fs: 0 },
          events: {
            onReady: (e) => {
              let tries = 0;
              const poll = () => {
                if (cancelled) { holder.remove(); return; }
                const ids = e.target.getPlaylist && e.target.getPlaylist();
                if (ids && ids.length) { fetchTitles(ids); holder.remove(); }
                else if (tries++ < 25) setTimeout(poll, 200);
                else holder.remove();
              };
              poll();
            },
          },
        });
      } catch (err) { holder.remove(); }
    }

    function ensureApi(cb) {
      if (window.YT && window.YT.Player) return cb();
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (prev) prev(); cb(); };
      if (!document.querySelector('script[src*="iframe_api"]')) {
        const s = document.createElement('script');
        s.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(s);
      }
    }

    ensureApi(buildHarvester);
    return () => { cancelled = true; };
  }, [count]);
  return items;
}

// StoriesLive — the "More stories" section. Merges live YouTube titles/IDs
// onto the curated story metadata so each card carries its real video title.
const StoriesLive = () => {
  const live = useMogoVideos(7);
  const base = window.MOGO_STORIES || [];
  const channel = window.MOGO_CHANNEL_URL || 'https://www.youtube.com/@MOGOKenya/videos';
  const items = base.map((s, i) => {
    const l = live && live[i];
    return { ...s, videoId: l ? l.id : null, title: l && l.title ? l.title : s.tagline };
  });
  const grid = items.slice(1);
  return (
    <>
      <section style={{background:'#0B1220', padding:'clamp(28px,4vw,56px) 0'}}>
        <div className="shell" style={{maxWidth: 1500}}>
          <FeaturedStory/>
        </div>
      </section>
      <section style={{padding:'clamp(56px,7vw,96px) 0', background:'#fff'}}>
        <div className="shell" style={{maxWidth: 1180}}>
          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, flexWrap:'wrap', marginBottom:40}}>
            <div>
              <div className="h-eyebrow"><span className="dot"/>More stories</div>
              <h2 className="mega-head" style={{fontSize:'clamp(30px,3.6vw,52px)', lineHeight:1.02, marginTop:12}}>Straight from the <em>stages</em>.</h2>
            </div>
            <a href={channel} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Watch all on YouTube <span className="arrow-pill"><ArrowRight/></span>
            </a>
          </div>
          <div className="our-stories-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 28}}>
            {grid.map((v, i) => <StoryVideo key={v.id || i} {...v}/>)}
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { useMogoVideos, StoriesLive });

// FeaturedStory — full-bleed cinematic headline player. Click loads the MOGO
// Kenya uploads playlist so the whole channel is browsable right here.
const FeaturedStory = () => {
  const [playing, setPlaying] = React.useState(false);
  const list = window.MOGO_UPLOADS;
  const embed = `https://www.youtube.com/embed/videoseries?list=${list}&rel=0&modestbranding=1&playsinline=1`;
  return (
    <div
      onClick={()=>!playing && setPlaying(true)}
      style={{
        position:'relative', width:'100%',
        height: playing ? '82vh' : 'min(82vh, 56.25vw)',
        minHeight: 420, borderRadius:'var(--r-xl)', overflow:'hidden',
        cursor: playing ? 'default' : 'pointer',
        background:'radial-gradient(120% 120% at 78% 18%, rgba(122,184,0,.22), transparent 55%), linear-gradient(150deg, #0B1220 0%, #11203a 60%, #0B1220 100%)',
      }}>
      {playing ? (
        <iframe
          src={embed}
          title="MOGO Kenya — featured stories"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{position:'absolute', inset:0, width:'100%', height:'100%', border:'none'}}
        />
      ) : (
        <>
          <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'clamp(28px,4vw,64px)'}}>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <span style={{width:9, height:9, borderRadius:999, background:'var(--m-green)', boxShadow:'0 0 0 4px rgba(122,184,0,.22)'}}/>
              <span style={{fontSize:12, fontFamily: 'inherit', letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.85)'}}>Featured · From our channel</span>
            </div>
            <div style={{maxWidth: 760}}>
              <h2 className="h-display" style={{fontSize:'clamp(34px,5vw,72px)', lineHeight:1, letterSpacing:'-.03em', color:'#fff', margin:0, fontWeight:700}}>
                Watch the people Mogo <em style={{fontFamily:'inherit', fontStyle:'italic', color:'var(--m-green)', fontWeight:700}}>moved forward.</em>
              </h2>
              <p style={{fontSize:'clamp(15px,1.3vw,18px)', color:'rgba(255,255,255,.75)', marginTop:18, maxWidth:520, lineHeight:1.5}}>
                Real customer stories, straight from the MOGO Kenya channel. Press play to browse them all.
              </p>
            </div>
          </div>
          <div style={{position:'absolute', top:'38%', left:'50%', transform:'translate(-50%,-50%)', width:96, height:96, borderRadius:999, background:'rgba(255,255,255,.96)', display:'grid', placeItems:'center', boxShadow:'0 16px 50px rgba(0,0,0,.45)'}}>
            <svg width="30" height="30" viewBox="0 0 18 18" fill="var(--m-ink)"><path d="M3 1l13 8-13 8z"/></svg>
          </div>
        </>
      )}
    </div>
  );
};

// StoryVideo — plays real clips from the MOGO Kenya channel via its uploads
// playlist. No external thumbnail (those break for playlists), so each poster
// is a branded card; clicking loads the playlist inline at this story's index.
const STORY_ACCENTS = ['#7AB800', '#003478', '#86BE07', '#0EA5A0', '#E0A800', '#7AB800', '#003478'];

const StoryVideo = ({index=0, name, city, role, product, tagline, title, videoId, featured}) => {
  const [playing, setPlaying] = React.useState(false);
  const list = window.MOGO_UPLOADS;
  const accent = STORY_ACCENTS[index % STORY_ACCENTS.length];
  const embed = videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`
    : `https://www.youtube.com/embed/videoseries?list=${list}&index=${index + 1}&rel=0&modestbranding=1&playsinline=1`;
  const heading = title || tagline;

  return (
    <article style={{display:'flex', flexDirection:'column', gap: featured ? 22 : 14}}>
      <div
        onClick={()=>setPlaying(true)}
        style={{
          position:'relative',
          aspectRatio: featured ? '16/9' : '4/3',
          borderRadius: featured ? 'var(--r-xl)' : 16,
          overflow:'hidden', cursor: playing ? 'default' : 'pointer',
          background:`linear-gradient(150deg, #0B1220 0%, #11203a 55%, ${accent}22 100%)`,
        }}>
        {playing ? (
          <>
            <iframe
              src={embed}
              title={`${name} — MOGO Kenya`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{position:'absolute', inset:0, width:'100%', height:'100%', border:'none'}}
            />
            {videoId && (
              <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer"
                onClick={(e)=>e.stopPropagation()}
                style={{position:'absolute', bottom:10, right:10, zIndex:2, fontSize:11, fontWeight:600, color:'#fff', background:'rgba(11,18,32,.7)', padding:'5px 9px', borderRadius:8, textDecoration:'none', backdropFilter:'blur(4px)'}}>
                Watch on YouTube ↗
              </a>
            )}
          </>
        ) : (
          <>
            <div style={{position:'absolute', top:-40, right:-40, width: featured?340:160, height: featured?340:160, borderRadius:999, background:`radial-gradient(circle, ${accent}3a, transparent 70%)`}}/>
            <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding: featured ? 'clamp(28px,3vw,48px)' : 22}}>
              <div style={{fontSize: featured ? 'clamp(26px,3vw,42px)' : 19, fontWeight:700, color:'#fff', lineHeight:1.15, letterSpacing:'-.01em', maxWidth: featured?660:'none', textWrap:'balance', display:'-webkit-box', WebkitLineClamp: featured?4:3, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{heading}</div>
            </div>
            <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width: featured ? 84 : 54, height: featured ? 84 : 54, borderRadius:999, background:'rgba(255,255,255,.96)', display:'grid', placeItems:'center', boxShadow:'0 12px 36px rgba(0,0,0,.35)'}}>
              <svg width={featured?26:17} height={featured?26:17} viewBox="0 0 18 18" fill="var(--m-ink)"><path d="M3 1l13 8-13 8z"/></svg>
            </div>
          </>
        )}
      </div>
    </article>
  );
};
