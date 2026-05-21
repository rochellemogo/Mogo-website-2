// PhotoBanner — continuous left-scrolling photo strip of Mogo Kenya in the field.
// No captions, no controls — just photos rotating along like the partner marquee.
const PhotoCarousel = () => {
  // [resource-id, fallback path]. The standalone bundler declares each id
  // as <meta ext-resource-dependency> and replaces window.__resources[id]
  // with a blob URL at runtime; live preview falls through to the path.
  const slides = [
    ['photo01', 'uploads/Boda crowd.jpg'],
    ['photo02', 'uploads/women photo.jpg'],
    ['photo03', 'uploads/Boda riders.jpg'],
    ['photo04', 'uploads/csr.jpg'],
    ['photo05', 'uploads/boda front.jpg'],
    ['photo06', 'uploads/tree planting.jpg'],
    ['photo07', 'uploads/oppo launch.jpg'],
    ['photo08', 'uploads/women backs.jpg'],
    ['photo09', 'uploads/meeting.jpg'],
    ['photo10', 'uploads/boda stage.jpg'],
    ['photo11', 'uploads/stage.jpg'],
  ];
  const resolve = ([id, path]) => (window.__resources && window.__resources[id]) || path;

  return (
    <section style={{ padding: '0', background: '#fff' }}>
      <div style={{ overflow: 'hidden' }}>
        <div className="photo-marquee">
          {[...slides, ...slides].map((entry, i) => (
            <div key={i} style={{
              flex: '0 0 auto',
              width: 'clamp(280px, 26vw, 420px)',
              aspectRatio: '4 / 3',
              overflow: 'hidden',
              background: '#0B1220',
            }}>
              <img src={resolve(entry)} alt=""
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
