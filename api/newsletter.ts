import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Sterling Oak Advisory <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@sterling-oakadvisory.com',
      subject: `Newsletter Signup: ${email}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C1C1C; border-bottom: 2px solid #8B6914; padding-bottom: 12px;">
            New Newsletter Subscription
          </h2>
          <p style="color: #1C1C1C; margin-top: 16px;">
            <strong>Email:</strong> <a href="mailto:${email}" style="color: #8B6914;">${email}</a>
          </p>
          <p style="color: #9A9A9A; font-size: 12px; margin-top: 24px;">
            Submitted via sterling-oakadvisory.com footer
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
