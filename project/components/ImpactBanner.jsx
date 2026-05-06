// ImpactBanner — continuous left-scrolling photo strip for the Mogo Impact page.
const ImpactBanner = () => {
  const slides = [
    '../uploads/women photo-c433c1c0.jpg',
    '../uploads/csr-2f61378b.jpg',
    '../uploads/tree planting-8ba64093.jpg',
    '../uploads/women backs-be370c94.jpg',
    '../uploads/boda stage-a0c0b0d0.jpg',
  ];

  return (
    <section style={{ padding: 0, background: '#fff' }}>
      <div style={{ overflow: 'hidden' }}>
        <div className="impact-marquee">
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
