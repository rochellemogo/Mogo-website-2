// ApplyModal — global "Apply now" form. Mounted once at the page root and
// opened by setting window.__openApply = true via the helper window.openApplyModal().
const ApplyModal = () => {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name:'', phone:'', email:'', address:'' });
  const [touched, setTouched] = React.useState({});

  React.useEffect(() => {
    window.openApplyModal = () => { setSubmitted(false); setOpen(true); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      // Match any "#apply" or "<path>#apply" link.
      if (href === '#apply' || href.endsWith('#apply')) {
        e.preventDefault();
        setSubmitted(false);
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const blur = (k) => () => setTouched({ ...touched, [k]: true });
  const isValid = form.name.trim() && /^\+?[\d\s-]{7,}$/.test(form.phone) && /\S+@\S+\.\S+/.test(form.email) && form.address.trim();

  const submit = (e) => {
    e.preventDefault();
    if (!isValid) { setTouched({ name:true, phone:true, email:true, address:true }); return; }
    setSubmitted(true);
  };

  const fieldStyle = (key) => ({
    width:'100%', padding:'14px 16px', fontSize:15, border:`1px solid ${touched[key] && !form[key].trim() ? 'var(--m-warm)' : 'var(--m-line-2)'}`,
    borderRadius: 'var(--r-md)', background:'#fff', fontFamily:'inherit', color:'var(--m-ink)', outline:'none', transition:'border-color .15s',
  });
  const labelStyle = { display:'block', fontSize:12, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:8 };

  return (
    <div role="dialog" aria-modal="true"
      onClick={() => setOpen(false)}
      style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(11,18,32,.55)', backdropFilter:'blur(6px)', display:'grid', placeItems:'center', padding:24, animation:'apply-fade .2s ease' }}
    >
      <div onClick={(e)=>e.stopPropagation()} style={{ background:'#fff', borderRadius:'var(--r-xl)', maxWidth: 520, width:'100%', padding:'40px', boxShadow:'0 30px 80px rgba(11,18,32,.35)', position:'relative', animation:'apply-pop .25s ease' }}>
        <button onClick={() => setOpen(false)} aria-label="Close"
          style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:999, border:'none', background:'var(--m-cream)', color:'var(--m-ink)', cursor:'pointer', display:'grid', placeItems:'center', fontSize:18 }}>
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign:'center', padding:'24px 0' }}>
            <div style={{ width:64, height:64, borderRadius:999, background:'var(--m-green)', margin:'0 auto 24px', display:'grid', placeItems:'center' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#0B1220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="h-display" style={{ fontSize: 32, lineHeight:1.05, letterSpacing:'-.02em', margin:'0 0 12px', fontWeight:500 }}>
              Karibu, {form.name.split(' ')[0] || 'rafiki'}.
            </h3>
            <p style={{ fontSize: 16, color:'var(--m-ink-2)', lineHeight:1.55, margin: '0 0 28px' }}>
              A Mogo officer will call you on <strong style={{ color:'var(--m-ink)' }}>{form.phone}</strong> within one business hour to confirm your details.
            </p>
            <button onClick={() => setOpen(false)} className="btn btn-primary">Got it</button>
          </div>
        ) : (
          <>
            <div className="h-eyebrow" style={{ marginBottom: 12 }}><span className="dot"/>Start your application</div>
            <h3 className="h-display" style={{ fontSize: 32, lineHeight:1.05, letterSpacing:'-.02em', margin:'0 0 8px', fontWeight:500 }}>
              Get a call back <em style={{ fontStyle:'italic', color:'var(--m-green-ink)', fontFamily:'"Instrument Serif", serif', fontWeight:400 }}>same day.</em>
            </h3>
            <p style={{ fontSize: 14.5, color:'var(--m-ink-2)', lineHeight:1.55, margin:'0 0 28px' }}>
              Fill in your details and a Mogo loan officer will reach out within one business hour to confirm terms and book your nearest branch.
            </p>

            <form onSubmit={submit} style={{ display:'grid', gap: 18 }}>
              <div>
                <label style={labelStyle} htmlFor="apply-name">Full name</label>
                <input id="apply-name" type="text" autoComplete="name" placeholder="e.g. Jane Wanjiru"
                  value={form.name} onChange={set('name')} onBlur={blur('name')} style={fieldStyle('name')}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-phone">Phone number</label>
                <input id="apply-phone" type="tel" autoComplete="tel" placeholder="+254 7XX XXX XXX"
                  value={form.phone} onChange={set('phone')} onBlur={blur('phone')} style={fieldStyle('phone')}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-email">Email</label>
                <input id="apply-email" type="email" autoComplete="email" placeholder="you@example.com"
                  value={form.email} onChange={set('email')} onBlur={blur('email')} style={fieldStyle('email')}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-address">Address</label>
                <input id="apply-address" type="text" autoComplete="street-address" placeholder="Estate, town and county"
                  value={form.address} onChange={set('address')} onBlur={blur('address')} style={fieldStyle('address')}/>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: 8, justifyContent:'center', width:'100%' }}>
                Submit application <span className="arrow-pill"><ArrowRight/></span>
              </button>
              <p style={{ fontSize:12, color:'var(--m-ink-2)', textAlign:'center', margin: 0, lineHeight:1.5 }}>
                By submitting you agree to be contacted by Mogo Auto Ltd. We never share your details.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes apply-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes apply-pop  { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }
        input:focus { border-color: var(--m-green) !important; }
      `}</style>
    </div>
  );
};

Object.assign(window, { ApplyModal });
