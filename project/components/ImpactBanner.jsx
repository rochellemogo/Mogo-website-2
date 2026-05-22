// ImpactBanner — continuous left-scrolling photo strip for the Impact page.
// Photos are editable in the CMS under 📷 Photos & Media → Impact page photo strip.
const IMPACT_BANNER_FALLBACK = [
  { src: '/uploads/women photo-c433c1c0.jpg',  alt: 'Chairman training programme' },
  { src: '/uploads/csr-2f61378b.jpg',          alt: 'Community building' },
  { src: '/uploads/tree planting-8ba64093.jpg', alt: 'Tree planting' },
  { src: '/uploads/women backs-be370c94.jpg',   alt: 'MOGO community event' },
  { src: '/uploads/boda stage-a0c0b0d0.jpg',    alt: 'Boda stage activation' },
];

const ImpactBanner = () => {
  const [slides, setSlides] = React.useState(
    (window.MOGO_MEDIA && window.MOGO_MEDIA.impact_banner) || IMPACT_BANNER_FALLBACK
  );

  React.useEffect(() => {
    const onUpdate = () => {
      const m = window.MOGO_MEDIA;
      if (m && Array.isArray(m.impact_banner) && m.impact_banner.length) {
        setSlides(m.impact_banner);
      }
    };
    window.addEventListener('mogo-media-updated', onUpdate);
    return () => window.removeEventListener('mogo-media-updated', onUpdate);
  }, []);

  return (
    <section style={{ padding: 0, background: '#fff' }}>
      <div style={{ overflow: 'hidden' }}>
        <div className="impact-marquee">
          {[...slides, ...slides].map((slide, i) => (
            <div key={i} style={{
              flex: '0 0 auto',
              width: 'clamp(280px, 26vw, 420px)',
              aspectRatio: '4 / 3',
              overflow: 'hidden',
              background: '#0B1220',
            }}>
              <img src={slide.src} alt={slide.alt || ''}
                   style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .impact-marquee {
          display: flex;
          gap: 4px;
          width: max-content;
          animation: impact-scroll 80s linear infinite;
        }
        .impact-marquee:hover { animation-play-state: paused; }
        @keyframes impact-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { ImpactBanner });
