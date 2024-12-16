import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Validate the token from the incoming request
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (token) {
      return res.status(200).json({ authenticated: true, user: token });
    } else {
      return res.status(401).json({ authenticated: false, message: 'Unauthorized' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
