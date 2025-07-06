export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Microsoft OAuth Demo</h1>
      <a href="/api/auth">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Login with Microsoft</button>
      </a>
    </div>
  );
}