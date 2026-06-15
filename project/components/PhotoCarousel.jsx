// PhotoBand — a calm editorial brand moment. Replaces the old scrolling
// marquee with a single full-width feature photo and a headline overlaid on
// a gradient scrim. Component keeps the name PhotoCarousel so the page mount
// in index-v2.html stays unchanged.
const PhotoCarousel = () => {
  const s = window.MOGO_SETTINGS || {};
  const feature = s.feature_image || (window.__resources && window.__resources.homeFeature) || '/uploads/mogo-outdoor-shoot-28.jpg';

  return (
    <section style={{ padding: '100px 0', background: '#fff' }}>
      <div className="shell">
        <div style={{ position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden', background: '#0B1220', height: 'clamp(460px, 64vh, 700px)' }}>
          <img src={feature} alt="Mogo boda riders in their branded vests, Nairobi"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 62%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,32,.88) 0%, rgba(11,18,32,.5) 38%, rgba(11,18,32,0) 72%)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: 'clamp(28px, 4.5vw, 64px)', display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right', maxWidth: 760 }}>
              <h2 className="h-display" style={{ color: '#fff', fontSize: 'clamp(32px, 4.4vw, 64px)', lineHeight: 1.03, letterSpacing: '-.03em', fontWeight: 600, margin: 0, textWrap: 'balance' }}>
                Backing the people who <em style={{ fontFamily: 'inherit', fontStyle: 'italic', color: 'var(--m-green)', fontWeight: 600 }}>move Kenya.</em>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { PhotoCarousel });
