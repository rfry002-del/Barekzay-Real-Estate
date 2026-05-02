import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

// Contact form data interface
interface ContactFormData {
  name: string
  phone: string
  email?: string
  service: string
  contactMethod?: string
  message?: string
}

// Validation helper
function validateFormData(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters')
  }

  if (!data.phone || data.phone.trim().length < 6) {
    errors.push('Please provide a valid phone number')
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email address')
  }

  if (!data.service) {
    errors.push('Please select a service')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

// Service labels for email formatting
const serviceLabels: Record<string, string> = {
  buying: 'Buying',
  selling: 'Selling',
  renting: 'Renting',
  investment: 'Investment Consulting',
  land: 'Land Deal',
  vehicle: 'Vehicle Deal',
  other: 'Other'
}

// Contact method labels
const contactMethodLabels: Record<string, string> = {
  phone: 'Phone',
  email: 'Email',
  whatsapp: 'WhatsApp'
}

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Parse request body
    const body = await request.json()
    const formData: ContactFormData = {
      name: body.name,
      phone: body.phone,
      email: body.email,
      service: body.service,
      contactMethod: body.contactMethod,
      message: body.message
    }

    // Validate form data
    const validation = validateFormData(formData)
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }

    // Format the email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #d4a54a, #b8872e); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #000; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #000; margin: 10px 0 0 0; opacity: 0.8;">Barekzay Real Estate</p>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1a1a1a; font-size: 18px; margin-top: 0; border-bottom: 2px solid #d4a54a; padding-bottom: 10px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; width: 140px; color: #666;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="tel:${formData.phone}" style="color: #d4a54a; text-decoration: none;">${formData.phone}</a>
                </td>
              </tr>
              ${formData.email ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${formData.email}" style="color: #d4a54a; text-decoration: none;">${formData.email}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666;">Service Needed:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="background: #fff8e6; color: #b8872e; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${serviceLabels[formData.service] || formData.service}</span>
                </td>
              </tr>
              ${formData.contactMethod ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666;">Preferred Contact:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">${contactMethodLabels[formData.contactMethod] || formData.contactMethod}</td>
              </tr>
              ` : ''}
            </table>
            
            ${formData.message ? `
            <h3 style="color: #1a1a1a; font-size: 16px; margin-top: 24px; border-bottom: 2px solid #d4a54a; padding-bottom: 10px;">Message</h3>
            <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${formData.message}</div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 13px; color: #666;">
              <p style="margin: 0;">This message was sent from the Barekzay Real Estate website contact form.</p>
              <p style="margin: 8px 0 0 0;">Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kabul' })} (Kabul Time)</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version for email clients that don't support HTML
    const emailText = `
New Contact Form Submission - Barekzay Real Estate

CONTACT DETAILS:
Name: ${formData.name}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ''}
Service Needed: ${serviceLabels[formData.service] || formData.service}
${formData.contactMethod ? `Preferred Contact: ${contactMethodLabels[formData.contactMethod] || formData.contactMethod}` : ''}

${formData.message ? `MESSAGE:\n${formData.message}` : ''}

---
This message was sent from the Barekzay Real Estate website contact form.
Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kabul' })} (Kabul Time)
    `.trim()

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Barekzay Real Estate <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'barekzayrealestate@gmail.com',
      replyTo: formData.email || undefined,
      subject: `New Inquiry: ${serviceLabels[formData.service] || formData.service} - ${formData.name}`,
      html: emailHtml,
      text: emailText
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      id: data?.id
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
