import type { VercelRequest, VercelResponse } from '@vercel/node'

// Note: In production, use Resend. For now, validate and return success.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, company, email, phone, service, referralSource, message, _gotcha } = req.body

  // Honeypot check
  if (_gotcha) {
    return res.status(200).json({ success: true })
  }

  // Validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  if (message.length < 20) {
    return res.status(400).json({ error: 'Message must be at least 20 characters.' })
  }

  try {
    // In production, send via Resend:
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Sterling Oak Advisory <noreply@sterling-oakadvisory.com>',
    //   to: process.env.CONTACT_EMAIL || 'hello@sterling-oakadvisory.com',
    //   replyTo: email,
    //   subject: `New Enquiry — ${firstName} ${lastName} · ${service || 'General'}`,
    //   html: `<table>...</table>`
    // })

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
