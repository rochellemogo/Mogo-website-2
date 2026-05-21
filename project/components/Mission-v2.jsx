// v2 Mission — productivity financing positioning
const MissionV2 = () =>
<section style={{ padding: '120px 0', background: '#fff' }}>
    <div className="shell">
      <div style={{ maxWidth: 1180 }}>
        <h2 className="h-display" style={{ fontSize: 'clamp(44px, 6.5vw, 108px)', lineHeight: .98, letterSpacing: '-.035em', margin: '24px 0 0', fontWeight: 500 }}>
          <em style={{ fontStyle: 'italic', color: 'var(--m-green-ink)', fontFamily: 'var(--font-accent)', fontWeight: 400, letterSpacing: '-.01em' }}>Productivity financing.</em>
        </h2>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--m-ink-2)', maxWidth: 680, margin: '32px 0 0' }}>Mogo finances the tools Kenyans earn with - bikes, cars, devices, shop stock - and unlocks cash against assets they already own.</p>
      </div>

      <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, paddingTop: 48, borderTop: '1px solid var(--m-line)' }}>
        <MissionPointV2 n="01" t="Access" d="Available to every working Kenyan with an ID and an M-Pesa number." />
        <MissionPointV2 n="02" t="Earn" d="We finance the asset, not the lifestyle. Over 70% of our customers are self-employed — the bike, tuk-tuk, car or phone pays for itself." />
        <MissionPointV2 n="03" t="Grow" d="From first boda to second branch. Customers graduate from asset finance to logbook unlocks to working capital." />
      </div>
    </div>
  </section>;

const MissionPointV2 = ({ n, t, d }) =>
<div>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', color: 'var(--m-green-ink)', marginBottom: 20 }}>{n}</div>
    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-.02em', margin: '0 0 12px' }}>{t}</h3>
    <p style={{ fontSize: 15.5, color: 'var(--m-ink-2)', lineHeight: 1.55, margin: 0 }}>{d}</p>
  </div>;

Object.assign(window, { MissionV2, MissionPointV2 });
