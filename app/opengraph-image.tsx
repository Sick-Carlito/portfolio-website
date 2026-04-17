import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Carl Bond — Full-Stack Developer & SEO Content Writer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15) 0%, transparent 50%)',
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#22c55e',
            }}
          />
          <span style={{ color: '#86efac', fontSize: '18px', fontWeight: 600 }}>
            Available for new projects
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1,
            marginBottom: '16px',
            letterSpacing: '-2px',
          }}
        >
          Carl Bond
          <span style={{ color: '#3b82f6' }}>.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            maxWidth: '700px',
            lineHeight: 1.4,
            marginBottom: '48px',
          }}
        >
          Full-Stack Developer & SEO Content Writer
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['React & Next.js', 'Node.js', 'SEO Content', 'Remote Worldwide'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: '1px solid rgba(59,130,246,0.4)',
                background: 'rgba(59,130,246,0.1)',
                color: '#93c5fd',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            color: '#475569',
            fontSize: '18px',
          }}
        >
          carlbond.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
