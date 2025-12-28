export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0f172a',
        color: 'white',
        padding: '20px'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '12px' }}>
          EGYDZ
        </h1>

        <p style={{ opacity: 0.8, marginBottom: '28px' }}>
          Digital NFC & QR Profiles
        </p>

        <button
          style={{
            padding: '14px 26px',
            background: 'white',
            color: '#0f172a',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  )
}
