// PhotoBanner — continuous left-scrolling photo strip of Mogo Kenya in the field.
// No captions, no controls — just photos rotating along like the partner marquee.
const PhotoCarousel = () => {
  const slides = [
    'uploads/Boda crowd.jpg',
    'uploads/women photo.jpg',
    'uploads/Boda riders.jpg',
    'uploads/csr.jpg',
    'uploads/boda front.jpg',
    'uploads/tree planting.jpg',
    'uploads/oppo launch.jpg',
    'uploads/women backs.jpg',
    'uploads/meeting.jpg',
    'uploads/boda stage.jpg',
    'uploads/stage.jpg',
  ];

  return (
    <section style={{ padding: '0', background: '#fff' }}>
      <div style={{ overflow: 'hidden' }}>
        <div className="photo-marquee">
          {[...slides, ...slides].map((src, i) => (
            <div key={i} style={{
              flex: '0 0 auto',
              width: 'clamp(280px, 26vw, 420px)',
              aspectRatio: '4 / 3',
              overflow: 'hidden',
              background: '#0B1220',
            }}>
              <img src={src} alt=""
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
