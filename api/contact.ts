import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, company, email, phone, service, referralSource, message, _gotcha } = req.body

  if (_gotcha) {
    return res.status(200).json({ success: true })
  }

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
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Sterling Oak Advisory <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@sterling-oakadvisory.com',
      replyTo: email,
      subject: `New Enquiry — ${firstName} ${lastName} · ${service || 'General'}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C1C1C; border-bottom: 2px solid #8B6914; padding-bottom: 12px;">
            New Contact Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #9A9A9A; width: 140px;">Name</td><td style="padding: 8px 0; color: #1C1C1C;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #8B6914;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #9A9A9A;">Phone</td><td style="padding: 8px 0; color: #1C1C1C;">${phone}</td></tr>` : ''}
            ${company ? `<tr><td style="padding: 8px 0; color: #9A9A9A;">Company</td><td style="padding: 8px 0; color: #1C1C1C;">${company}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 8px 0; color: #9A9A9A;">Service</td><td style="padding: 8px 0; color: #1C1C1C;">${service}</td></tr>` : ''}
            ${referralSource ? `<tr><td style="padding: 8px 0; color: #9A9A9A;">Referral</td><td style="padding: 8px 0; color: #1C1C1C;">${referralSource}</td></tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #F5F0E8; border-left: 3px solid #8B6914;">
            <p style="color: #9A9A9A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Message</p>
            <p style="color: #1C1C1C; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #9A9A9A; font-size: 12px; margin-top: 24px;">
            Sent via sterling-oakadvisory.com contact form
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
