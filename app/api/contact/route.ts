import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const { name, email, phone, message } = body

        const data = await resend.emails.send({
            from: "Barekzay <onboarding@resend.dev>",
            to: ["barekzayrealestate@gmail.com"],
            subject: "New Contact Form Submission",
            html: `
  <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 5px 20px rgba(0,0,0,0.1);">
      
      <!-- HEADER -->
      <div style="background:#0b0b0b; color:white; padding:20px;">
        <h2 style="margin:0; font-size:20px;">Barekzay Real Estate</h2>
        <p style="margin:5px 0 0; color:#d4af37;">New Lead Received</p>
      </div>

      <!-- CONTENT -->
      <div style="padding:20px; color:#333;">
        
        <h3 style="margin-top:0;">📩 New Contact Form Submission</h3>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0; font-weight:bold;">Name:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-weight:bold;">Email:</td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-weight:bold;">Phone:</td>
            <td><a href="tel:${phone}">${phone}</a></td>
          </tr>
        </table>

        <div style="margin-top:20px;">
          <p style="font-weight:bold;">Message:</p>
          <div style="background:#f9f9f9; padding:15px; border-radius:8px; border:1px solid #eee;">
            ${message}
          </div>
        </div>

        <!-- CTA -->
        <div style="margin-top:25px; text-align:center;">
          <a href="tel:${phone}" 
             style="display:inline-block; background:#d4af37; color:black; padding:12px 20px; border-radius:6px; text-decoration:none; font-weight:bold;">
             📞 Call Lead
          </a>
        </div>

      </div>

      <!-- FOOTER -->
      <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        This message was sent from your website contact form.
      </div>

    </div>
  </div>
`
        })

        return Response.json({ success: true })
    } catch (error) {
        return Response.json({ success: false, error })
    }
}