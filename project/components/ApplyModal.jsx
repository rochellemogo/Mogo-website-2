// ApplyModal — global "Apply now" form. Mounted once at the page root and
// opened by setting window.__openApply = true via the helper window.openApplyModal().
// Text is editable via the CMS (Site Settings → Apply Form).
// Submits to an ERP API endpoint if one is configured in settings.
const ApplyModal = () => {
  const [open, setOpen]           = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError]   = React.useState('');
  const [form, setForm]           = React.useState({ name:'', phone:'', email:'', address:'', product:'' });
  const [touched, setTouched]     = React.useState({});
  const [settings, setSettings]   = React.useState(window.MOGO_SETTINGS || {});
  const [products, setProducts]   = React.useState(window.MOGO_PRODUCTS || []);

  React.useEffect(() => {
    window.openApplyModal = () => { setSubmitted(false); setApiError(''); setOpen(true); };

    const onSettings = () => setSettings(window.MOGO_SETTINGS || {});
    const onProducts = () => setProducts((window.MOGO_PRODUCTS || []).slice());
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href === '#apply' || href.endsWith('#apply')) {
        e.preventDefault();
        setSubmitted(false);
        setApiError('');
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mogo-settings-updated', onSettings);
    window.addEventListener('mogo-products-updated', onProducts);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mogo-settings-updated', onSettings);
      window.removeEventListener('mogo-products-updated', onProducts);
      document.removeEventListener('click', onClick);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const s = settings;
  const headline       = s.form_headline || 'Get a call back same day.';
  const subtext        = s.form_subtext  || 'Fill in your details and a Mogo loan officer will reach out within one business hour.';
  const successHead    = s.form_success_headline || 'Karibu!';
  const successBodyTpl = s.form_success_body || 'A Mogo officer will call you on {phone} within one business hour to confirm your details.';
  const successBody    = successBodyTpl.replace('{name}', form.name.split(' ')[0] || 'rafiki').replace('{phone}', form.phone);
  const supportPhone   = s.cta_phone || '0709 719 000';

  const fl = {
    nameLbl:        s.form_field_name_label        || 'Full name',
    namePh:         s.form_field_name_placeholder  || 'e.g. Jane Wanjiru',
    phoneLbl:       s.form_field_phone_label       || 'Phone number',
    phonePh:        s.form_field_phone_placeholder || '+254 7XX XXX XXX',
    emailLbl:       s.form_field_email_label       || 'Email',
    emailPh:        s.form_field_email_placeholder || 'you@example.com',
    addressLbl:     s.form_field_address_label     || 'Address',
    addressPh:      s.form_field_address_placeholder || 'Estate, town and county',
    productLbl:     s.form_field_product_label     || 'Product of interest',
    productPh:      s.form_field_product_placeholder || '— Select a product —',
    submitTxt:      s.form_submit_text             || 'Submit application',
    privacyTxt:     s.form_privacy_text            || 'By submitting you agree to be contacted by Mogo Auto Ltd. We never share your details.',
  };

  const set  = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const blur = (k) => () => setTouched({ ...touched, [k]: true });
  const isValid = form.name.trim() && /^\+?[\d\s-]{7,}$/.test(form.phone) && /\S+@\S+\.\S+/.test(form.email) && form.address.trim();

  const submit = (e) => {
    e.preventDefault();
    if (!isValid) { setTouched({ name:true, phone:true, email:true, address:true }); return; }

    var endpoint = s.form_api_endpoint;
    if (endpoint && endpoint.trim()) {
      setSubmitting(true);
      setApiError('');
      var headers = { 'Content-Type': 'application/json' };
      if (s.form_api_key && s.form_api_key.trim()) {
        headers['Authorization'] = s.form_api_key.trim();
      }
      var payload = {
        name:         form.name,
        phone:        form.phone,
        email:        form.email,
        address:      form.address,
        product:      form.product || null,
        source:       'mogo-kenya-website',
        submitted_at: new Date().toISOString(),
      };
      fetch(endpoint.trim(), { method: 'POST', headers: headers, body: JSON.stringify(payload) })
        .then(function(res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          setSubmitting(false);
          setSubmitted(true);
        })
        .catch(function() {
          setSubmitting(false);
          setApiError('Something went wrong — please call us on ' + supportPhone + ' and we\'ll help you directly.');
        });
    } else {
      // No API endpoint configured: show success immediately.
      setSubmitted(true);
    }
  };

  const fieldStyle = (key, extraCheck) => ({
    width:'100%', padding:'14px 16px', fontSize:15,
    border:`1px solid ${touched[key] && (extraCheck !== undefined ? extraCheck : !form[key].trim()) ? 'var(--m-warm)' : 'var(--m-line-2)'}`,
    borderRadius:'var(--r-md)', background:'#fff', fontFamily:'inherit', color:'var(--m-ink)',
    outline:'none', transition:'border-color .15s', boxSizing:'border-box',
  });
  const labelStyle = { display:'block', fontSize:12, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--m-ink-2)', marginBottom:8 };

  return (
    <div role="dialog" aria-modal="true"
      onClick={() => setOpen(false)}
      style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(11,18,32,.55)', backdropFilter:'blur(6px)', display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'48px 24px', overflowY:'auto', animation:'apply-fade .2s ease' }}
    >
      <div onClick={(e)=>e.stopPropagation()} style={{ background:'#fff', borderRadius:'var(--r-xl)', maxWidth:520, width:'100%', padding:'40px', boxShadow:'0 30px 80px rgba(11,18,32,.35)', position:'relative', margin:'auto', animation:'apply-pop .25s ease' }}>
        <button onClick={() => setOpen(false)} aria-label="Close"
          style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:999, border:'none', background:'var(--m-cream)', color:'var(--m-ink)', cursor:'pointer', display:'grid', placeItems:'center', fontSize:18 }}>
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign:'center', padding:'24px 0' }}>
            <div style={{ width:64, height:64, borderRadius:999, background:'var(--m-green)', margin:'0 auto 24px', display:'grid', placeItems:'center' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#0B1220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="h-display" style={{ fontSize:32, lineHeight:1.05, letterSpacing:'-.02em', margin:'0 0 12px', fontWeight:500 }}>
              {successHead.replace('{name}', form.name.split(' ')[0] || 'rafiki')}
            </h3>
            <p style={{ fontSize:16, color:'var(--m-ink-2)', lineHeight:1.55, margin:'0 0 28px' }}
               dangerouslySetInnerHTML={{ __html: successBody.replace(form.phone, '<strong style="color:var(--m-ink)">' + form.phone + '</strong>') }} />
            <button onClick={() => setOpen(false)} className="btn btn-primary">Got it</button>
          </div>
        ) : (
          <>
            <div className="h-eyebrow" style={{ marginBottom:12 }}><span className="dot"/>Start your application</div>
            <h3 className="h-display" style={{ fontSize:30, lineHeight:1.05, letterSpacing:'-.02em', margin:'0 0 8px', fontWeight:500 }}>
              <em style={{ fontStyle:'italic', color:'var(--m-green-ink)', fontFamily:'var(--font-accent)', fontWeight:400 }}>{headline}</em>
            </h3>
            <p style={{ fontSize:14.5, color:'var(--m-ink-2)', lineHeight:1.55, margin:'0 0 24px' }}>{subtext}</p>

            {apiError && (
              <div style={{ padding:'12px 16px', borderRadius:'var(--r-md)', background:'#FFF3F3', border:'1px solid #FFCCCC', color:'#B00', fontSize:14, marginBottom:20 }}>
                {apiError}
              </div>
            )}

            <form onSubmit={submit} style={{ display:'grid', gap:18 }}>
              <div>
                <label style={labelStyle} htmlFor="apply-name">{fl.nameLbl}</label>
                <input id="apply-name" type="text" autoComplete="name" placeholder={fl.namePh}
                  value={form.name} onChange={set('name')} onBlur={blur('name')} style={fieldStyle('name')}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-phone">{fl.phoneLbl}</label>
                <input id="apply-phone" type="tel" autoComplete="tel" placeholder={fl.phonePh}
                  value={form.phone} onChange={set('phone')} onBlur={blur('phone')}
                  style={fieldStyle('phone', touched.phone && !/^\+?[\d\s-]{7,}$/.test(form.phone))}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-email">{fl.emailLbl}</label>
                <input id="apply-email" type="email" autoComplete="email" placeholder={fl.emailPh}
                  value={form.email} onChange={set('email')} onBlur={blur('email')}
                  style={fieldStyle('email', touched.email && !/\S+@\S+\.\S+/.test(form.email))}/>
              </div>
              <div>
                <label style={labelStyle} htmlFor="apply-address">{fl.addressLbl}</label>
                <input id="apply-address" type="text" autoComplete="street-address" placeholder={fl.addressPh}
                  value={form.address} onChange={set('address')} onBlur={blur('address')} style={fieldStyle('address')}/>
              </div>

              {products.length > 0 && (
                <div>
                  <label style={labelStyle} htmlFor="apply-product">
                    {fl.productLbl} <span style={{fontWeight:400, opacity:.6}}>(optional)</span>
                  </label>
                  <select id="apply-product" value={form.product} onChange={set('product')}
                    style={{ ...fieldStyle('product', false), appearance:'none', backgroundImage:'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23666\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat:'no-repeat', backgroundPosition:'right 14px center', paddingRight:40 }}>
                    <option value="">{fl.productPh}</option>
                    {products.map(function(p) {
                      return <option key={p.slug} value={p.slug}>{p.name}</option>;
                    })}
                  </select>
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={submitting}
                style={{ marginTop:8, justifyContent:'center', width:'100%', opacity: submitting ? .7 : 1 }}>
                {submitting
                  ? 'Sending…'
                  : <><span>{fl.submitTxt}</span> <span className="arrow-pill"><ArrowRight/></span></>
                }
              </button>
              <p style={{ fontSize:12, color:'var(--m-ink-2)', textAlign:'center', margin:0, lineHeight:1.5 }}>
                {fl.privacyTxt}
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes apply-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes apply-pop  { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }
        input:focus, select:focus { border-color: var(--m-green) !important; }
      `}</style>
    </div>
  );
};

Object.assign(window, { ApplyModal });
