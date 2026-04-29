import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

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
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Sterling Oak Advisory <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@sterling-oakadvisory.com',
      subject: `Resource Download: ${resourceName} — ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C1C1C; border-bottom: 2px solid #8B6914; padding-bottom: 12px;">
            Resource Download Request
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #9A9A9A; width: 140px;">Name</td><td style="padding: 8px 0; color: #1C1C1C;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #8B6914;">${email}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #9A9A9A;">Company</td><td style="padding: 8px 0; color: #1C1C1C;">${company}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Resource</td><td style="padding: 8px 0; color: #1C1C1C; font-weight: 500;">${resourceName}</td></tr>
          </table>
          <p style="color: #9A9A9A; font-size: 12px; margin-top: 24px;">
            Submitted via sterling-oakadvisory.com resources page
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
