import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) return res.status(400).send('No code provided');

  try {
    const tokenResponse = await axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', null, {
      params: {
        client_id: process.env.CLIENT_ID,
        scope: 'offline_access https://graph.microsoft.com/Mail.Read',
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
        client_secret: process.env.CLIENT_SECRET,
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const { refresh_token, access_token } = tokenResponse.data;

    res.redirect(`/callback?refresh_token=${refresh_token}&access_token=${access_token}`);
  } catch (error) {
    res.status(500).send(`Token exchange failed: ${error.response?.data?.error_description || error.message}`);
  }
}