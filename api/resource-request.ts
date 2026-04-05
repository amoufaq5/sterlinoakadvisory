import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, resourceName } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  try {
    // In production, send via Resend
    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
