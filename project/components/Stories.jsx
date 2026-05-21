const STORIES_STATIC = [
  { name:"Julius", city:"Nairobi", role:"Boda rider · since 2024", quote:"I got my Boxer in 2 hours. 14 months later I owned it. My daily take-home is now 3× what it was.", product:"New Boda Loan", theme:"sunset" },
  { name:"Mary", city:"Nakuru", role:"Salon owner · since 2025", quote:"The buyoff saved me KES 8,400 every month. Same car, same logbook — just lower payments.", product:"Buyoff Logbook", theme:"lilac" },
  { name:"Elijah", city:"Thika", role:"Tuk-Tuk operator · since 2023", quote:"My tuk-tuk logbook funds my parts inventory. Next week I'm financing my second vehicle.", product:"Tuk-Tuk Logbook", theme:"peach" },
];

const Stories = () => {
  const [stories, setStories] = React.useState(STORIES_STATIC);

  React.useEffect(() => {
    const base = window.__MOGO_SUBPAGE ? '../' : '';
    fetch(base + 'content/stories.json')
      .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function (data) {
        const arr = Array.isArray(data) ? data : (data.stories || []);
        if (arr.length) setStories(arr);
      })
      .catch(function () {});
  }, []);

  return (
    <section id="stories" style={{padding:'100px 0', background:'var(--m-cream)'}}>
      <div className="shell">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom: 48, flexWrap:'wrap', gap:24}}>
          <div>
            <div className="h-eyebrow"><span className="dot"/>Customer stories</div>
            <h2 className="mega-head">Real Kenyans.<br/><em>Real</em> businesses.</h2>
          </div>
          <a href="#" className="btn btn-ghost">Read more stories <ArrowRight/></a>
        </div>

        <div data-stories-grid style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20}}>
          {stories.map(s => (
            <article key={s.name} style={{background:'#fff', borderRadius:'var(--r-xl)', overflow:'hidden', border:'1px solid var(--m-line-2)', display:'flex', flexDirection:'column'}}>
              <div style={{padding: 10, paddingBottom: 0}}>
                <div style={{position:'relative', aspectRatio:'4/3', borderRadius:'var(--r-lg)', overflow:'hidden'}}>
                  <ProductImage theme={s.theme}/>
                  <div className="ph-tag">{s.name.toUpperCase()} · {s.city.toUpperCase()}</div>
                </div>
              </div>
              <div style={{padding:'24px 28px 28px', display:'flex', flexDirection:'column', flex:1}}>
                <p style={{fontFamily:'"Instrument Serif", serif', fontSize: 22, lineHeight:1.35, letterSpacing:'-.005em', margin:'0 0 24px', flex:1}}>"{s.quote}"</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:18, borderTop:'1px solid var(--m-line)'}}>
                  <div>
                    <div style={{fontWeight:600, fontSize:15}}>{s.name}</div>
                    <div style={{fontSize:12.5, color:'var(--m-muted)', marginTop:2}}>{s.role}</div>
                  </div>
                  <div style={{fontSize:10.5, fontFamily:'var(--font-mono)', letterSpacing:'.1em', textTransform:'uppercase', padding:'5px 10px', borderRadius: 6, background:'var(--m-green-soft)', color:'var(--m-green-deep)'}}>{s.product}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Stories });
