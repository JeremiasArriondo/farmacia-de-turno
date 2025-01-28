import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
        <div
        style={{
          fontSize: '48px',
          color: 'black',
          background: 'linear-gradient(to left, white, #d9f99d, #e7e5e4)',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        👋 Encontra que farmacia está de turno en Rojas ⚕️
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}