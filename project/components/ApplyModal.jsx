// ApplyModal — global "Apply now" form. Mounted once at the page root and
// opened by setting window.__openApply = true via the helper window.openApplyModal().

// --- Consent copy ------------------------------------------------------------
const CONSENTS = [
  {
    id: 'crb1',
    required: true,
    label: 'Credit reference bureau (CRB) consent',
    text: `By entering into this agreement, I authorize Mogo Auto Ltd (and other companies in Mogo Finance group) to access and query my credit information from any of the licensed CRBs and to receive credit reports/scores from any of the licensed CRBs on behalf of myself in order to assess my credit worthiness, wherever and whenever I apply for a new facility and during the persistence of such facilities in order to assist Mogo Auto Ltd (and other companies in Mogo Finance group) to accomplish its objectives and to enforce its rights under this agreement. I further consent to my credit information being shared with the licensed credit reference bureaus. This consent shall not be withdrawn during the period in which my application is pending to or I have an outstanding balance with Mogo Auto Ltd. This consent shall automatically terminate upon clearance of all existing loans by myself to Mogo Auto Ltd and as long as I have no outstanding facilities with Mogo Auto Ltd.`,
  },
  {
    id: 'crb2',
    required: true,
    label: 'Sharing of credit information',
    text: `By entering into this agreement, I authorize Mogo Auto Ltd (and other companies in Mogo Finance group) to access and query my credit information from any of the licensed CRBs and to receive credit reports/scores from any of the licensed CRBs on behalf of myself in order to assess my credit worthiness, wherever and whenever I apply for a new facility and during the persistence of such facilities in order to assist Mogo Auto Ltd (and other companies in Mogo Finance group) to accomplish its objectives and to enforce its rights under this agreement. I further consent to my credit information being shared with the licensed credit reference bureaus. This consent shall not be withdrawn during the period in which my application is pending to or I have an outstanding balance with Mogo Auto Ltd. This consent shall automatically terminate upon clearance of all existing loans by myself to Mogo Auto Ltd and as long as I have no outstanding facilities with Mogo Auto Ltd.`,
  },
  {
    id: 'marketing',
    required: false,
    label: 'Marketing communications (optional)',
    text: `I hereby consent to receiving marketing communications from Mogo Auto Ltd and contact me via various channels, including but not limited to SMS, email, phone calls, and other electronic means, to provide information about offers, promotions, and other relevant updates from Mogo Auto Ltd and its affiliate companies. See more on our privacy policy page.`,
  },
];

// --- Single collapsible consent row -----------------------------------------
const ConsentItem = ({ item, checked, onToggle, error }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div style={{
      border: `1px solid ${error ? 'var(--m-coral)' : 'var(--m-line-2)'}`,
      borderRadius: 'var(--r)', background: '#fff', overflow: 'hidden',
      transition: 'border-color .15s',
    }}>
      <label style={{ display: 'flex', gap: 12, padding: '14px 16px', cursor: 'pointer', alignItems: 'flex-start' }}>
        <input type="checkbox" checked={checked} onChange={onToggle}
          style={{
            appearance: 'none', WebkitAppearance: 'none', flexShrink: 0,
            width: 20, height: 20, marginTop: 1, borderRadius: 6,
            border: `1.5px solid ${checked ? 'var(--m-green-ink)' : 'var(--m-line)'}`,
            backgroundColor: checked ? 'var(--m-green)' : '#fff', cursor: 'pointer',
            display: 'grid', placeItems: 'center', transition: 'all .15s',
            backgroundImage: checked
              ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M5 12l5 5L20 7' stroke='%230B1220' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")"
              : 'none',
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
          }}/>
        <span style={{ fontSize: 14, lineHeight: 1.45, color: 'var(--m-ink)', fontWeight: 500 }}>
          {item.label}
          {item.required && <span style={{ color: 'var(--m-coral)', marginLeft: 4 }}>*</span>}
        </span>
      </label>

      <div style={{
        maxHeight: expanded ? 600 : 0, overflow: 'hidden',
        transition: 'max-height .3s ease',
      }}>
        <p style={{
          margin: 0, padding: '0 16px 14px 48px', fontSize: 12.5, lineHeight: 1.6,
          color: 'var(--m-ink-2)',
        }}>
          {item.text}
        </p>
      </div>

      <button type="button" onClick={() => setExpanded(e => !e)}
        style={{
          display: 'flex', alignItems: 'center', gap: 5, padding: '0 16px 12px 48px',
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.1em',
          textTransform: 'uppercase', color: 'var(--m-green-ink)', fontWeight: 500,
        }}>
        {expanded ? 'Read less' : 'Read more'}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

const ApplyModal = () => {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ firstName:'', lastName:'', nationalId:'', phone:'', employed:'' });
  const [consents, setConsents] = React.useState({ crb1:false, crb2:false, marketing:false });
  const [touched, setTouched] = React.useState({});
  const [showErrors, setShowErrors] = React.useState(false);

  React.useEffect(() => {
    window.openApplyModal = () => { setSubmitted(false); setOpen(true); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
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
  const toggleConsent = (k) => () => setConsents({ ...consents, [k]: !consents[k] });

  const fieldErr = (k) => (touched[k] || showErrors) && !String(form[k]).trim();
  const phoneOk = /^\+?[\d\s-]{7,}$/.test(form.phone);
  const consentsOk = consents.crb1 && consents.crb2;
  const isValid = form.firstName.trim() && form.lastName.trim() && form.nationalId.trim()
    && phoneOk && form.employed && consentsOk;

  const submit = (e) => {
    e.preventDefault();
    setShowErrors(true);
    if (!isValid) return;
    setSubmitted(true);
    // Fire ERP API if configured in CMS settings
    var s = window.MOGO_SETTINGS || {};
    if (s.form_api_endpoint && s.form_api_endpoint.trim()) {
      var headers = { 'Content-Type': 'application/json' };
      if (s.form_api_key && s.form_api_key.trim()) headers['Authorization'] = s.form_api_key.trim();
      var payload = {
        firstName: form.firstName, lastName: form.lastName,
        nationalId: form.nationalId, phone: form.phone, employed: form.employed,
        source: 'mogo-kenya-website', submitted_at: new Date().toISOString()
      };
      fetch(s.form_api_endpoint.trim(), { method: 'POST', headers: headers, body: JSON.stringify(payload) })
        .catch(function() {});
    }
  };

  const fieldStyle = (key) => ({
    width:'100%', padding:'13px 15px', fontSize:15,
    border:`1px solid ${fieldErr(key) ? 'var(--m-coral)' : 'var(--m-line-2)'}`,
    borderRadius: 'var(--r)', background:'#fff', fontFamily:'inherit', color:'var(--m-ink)',
    outline:'none', transition:'border-color .15s',
  });
  const labelStyle = { display:'block', fontSize:12, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:7 };

  return (
    <div role="dialog" aria-modal="true"
      onClick={() => setOpen(false)}
      style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(11,18,32,.55)', backdropFilter:'blur(6px)', display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'48px 24px', overflowY:'auto', animation:'apply-fade .2s ease' }}
    >
      <div onClick={(e)=>e.stopPropagation()} style={{ background:'#fff', borderRadius:'var(--r-xl)', maxWidth: 560, width:'100%', padding:'40px', boxShadow:'0 30px 80px rgba(11,18,32,.35)', position:'relative', margin:'auto', animation:'apply-pop .25s ease' }}>
        <button onClick={() => setOpen(false)} aria-label="Close"
          style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:999, border:'none', background:'var(--m-cream)', color:'var(--m-ink)', cursor:'pointer', display:'grid', placeItems:'center', fontSize:18, zIndex: 2 }}>
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign:'center', padding:'24px 0' }}>
            <div style={{ width:64, height:64, borderRadius:999, background:'var(--m-green)', margin:'0 auto 24px', display:'grid', placeItems:'center' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#0B1220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="h-display" style={{ fontSize: 32, lineHeight:1.05, letterSpacing:'-.02em', margin:'0 0 12px', fontWeight:500 }}>
              Karibu, {form.firstName || 'rafiki'}.
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
              Get a call back <em style={{ fontStyle:'italic', color:'var(--m-green-ink)', fontWeight:400 }}>same day.</em>
            </h3>
            <p style={{ fontSize: 14.5, color:'var(--m-ink-2)', lineHeight:1.55, margin:'0 0 28px' }}>
              Fill in your details and a Mogo loan officer will reach out within one business hour to confirm terms and book your nearest branch.
            </p>

            <form onSubmit={submit} style={{ display:'grid', gap: 18 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 18 }}>
                <div>
                  <label style={labelStyle} htmlFor="apply-first">First name</label>
                  <input id="apply-first" type="text" autoComplete="given-name" placeholder="Jane"
                    value={form.firstName} onChange={set('firstName')} onBlur={blur('firstName')} style={fieldStyle('firstName')}/>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="apply-last">Last name</label>
                  <input id="apply-last" type="text" autoComplete="family-name" placeholder="Wanjiru"
                    value={form.lastName} onChange={set('lastName')} onBlur={blur('lastName')} style={fieldStyle('lastName')}/>
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-id">National ID number</label>
                <input id="apply-id" type="text" inputMode="numeric" autoComplete="off" placeholder="e.g. 12345678"
                  value={form.nationalId} onChange={set('nationalId')} onBlur={blur('nationalId')} style={fieldStyle('nationalId')}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-phone">Phone number</label>
                <input id="apply-phone" type="tel" autoComplete="tel" placeholder="+254 7XX XXX XXX"
                  value={form.phone} onChange={set('phone')} onBlur={blur('phone')}
                  style={{ ...fieldStyle('phone'), border:`1px solid ${(touched.phone || showErrors) && !phoneOk ? 'var(--m-coral)' : 'var(--m-line-2)'}` }}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-employed">Are you employed?</label>
                <div style={{ position:'relative' }}>
                  <select id="apply-employed" value={form.employed} onChange={set('employed')} onBlur={blur('employed')}
                    style={{ ...fieldStyle('employed'), appearance:'none', WebkitAppearance:'none', cursor:'pointer', color: form.employed ? 'var(--m-ink)' : 'var(--m-muted)', paddingRight: 40 }}>
                    <option value="" disabled>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', pointerEvents:'none' }}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="var(--m-ink-2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div style={{ display:'grid', gap: 10, marginTop: 4 }}>
                <div style={{ fontSize:12, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--m-ink-2)' }}>
                  Consents &amp; authorisations
                </div>
                {CONSENTS.map(c => (
                  <ConsentItem key={c.id} item={c}
                    checked={consents[c.id]}
                    onToggle={toggleConsent(c.id)}
                    error={showErrors && c.required && !consents[c.id]}/>
                ))}
              </div>

              {showErrors && !isValid && (
                <p style={{ fontSize:12.5, color:'var(--m-coral)', margin:0, fontWeight:600 }}>
                  Please complete all required fields and tick the required consents (*) above.
                </p>
              )}

              <button type="submit" className="btn btn-primary" style={{ marginTop: 4, justifyContent:'center', width:'100%' }}>
                Submit application <span className="arrow-pill"><ArrowRight/></span>
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes apply-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes apply-pop  { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }
        #root input:focus, #root select:focus { border-color: var(--m-green) !important; }
      `}</style>
    </div>
  );
};

Object.assign(window, { ApplyModal });
