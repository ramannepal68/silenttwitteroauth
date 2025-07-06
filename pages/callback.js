import { useRouter } from 'next/router';

export default function Callback() {
  const router = useRouter();
  const { refresh_token, access_token } = router.query;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Authentication Successful</h1>
      <p><strong>Refresh Token:</strong> {refresh_token}</p>
      <p><strong>Access Token:</strong> {access_token}</p>
    </div>
  );
}