// PhotoBanner — continuous left-scrolling photo strip.
// Photos are editable in the CMS under 📷 Photos & Media → Homepage photo strip.
const CAROUSEL_FALLBACK = [
  { src: '/uploads/Boda crowd.jpg',   alt: 'Boda riders' },
  { src: '/uploads/women photo.jpg',  alt: 'MOGO customers' },
  { src: '/uploads/Boda riders.jpg',  alt: 'Boda riders on the road' },
  { src: '/uploads/csr.jpg',          alt: 'Community activity' },
  { src: '/uploads/boda front.jpg',   alt: 'Boda financing' },
  { src: '/uploads/tree planting.jpg',alt: 'Tree planting' },
  { src: '/uploads/oppo launch.jpg',  alt: 'Product launch event' },
  { src: '/uploads/women backs.jpg',  alt: 'MOGO event' },
  { src: '/uploads/meeting.jpg',      alt: 'Team meeting' },
  { src: '/uploads/boda stage.jpg',   alt: 'Boda stage' },
  { src: '/uploads/stage.jpg',        alt: 'MOGO stage event' },
];

const PhotoCarousel = () => {
  const [slides, setSlides] = React.useState(
    (window.MOGO_MEDIA && window.MOGO_MEDIA.carousel) || CAROUSEL_FALLBACK
  );

  React.useEffect(() => {
    const onUpdate = () => {
      const m = window.MOGO_MEDIA;
      if (m && Array.isArray(m.carousel) && m.carousel.length) {
        setSlides(m.carousel);
      }
    };
    window.addEventListener('mogo-media-updated', onUpdate);
    return () => window.removeEventListener('mogo-media-updated', onUpdate);
  }, []);

  return (
    <section style={{ padding: '0', background: '#fff' }}>
      <div style={{ overflow: 'hidden' }}>
        <div className="photo-marquee">
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
        .photo-marquee {
          display: flex;
          gap: 4px;
          width: max-content;
          animation: photo-scroll 80s linear infinite;
        }
        .photo-marquee:hover { animation-play-state: paused; }
        @keyframes photo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { PhotoCarousel });
