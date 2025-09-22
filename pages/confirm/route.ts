import { type EmailOtpType } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@/utils/supabase/component';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token_hash = req.query.token_hash as string;
  const type = req.query.type as EmailOtpType;
  const next = (req.query.next as string) ?? '/';

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      return res.redirect(307, next);
    }
  }

  return res.redirect(307, '/error');
}
