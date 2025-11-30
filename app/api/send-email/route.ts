import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, phone } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to your inbox
    await resend.emails.send({
      from: 'Luminate Systems <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@luminatesystems.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 15px 0;">
              <strong style="color: #000;">Name:</strong><br>
              <span style="color: #666;">${name}</span>
            </p>
            
            <p style="margin: 0 0 15px 0;">
              <strong style="color: #000;">Email:</strong><br>
              <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
            </p>
            
            ${phone ? `
            <p style="margin: 0 0 15px 0;">
              <strong style="color: #000;">Phone:</strong><br>
              <a href="tel:${phone}" style="color: #0066cc; text-decoration: none;">${phone}</a>
            </p>
            ` : ''}
            
            <p style="margin: 0;">
              <strong style="color: #000;">Message:</strong><br>
              <span style="color: #666; white-space: pre-wrap;">${message}</span>
            </p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; font-size: 12px; color: #999;">
            <p>This email was sent from your Luminate Systems contact form.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Luminate Systems <onboarding@resend.dev>',
      to: email,
      subject: 'We received your message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; margin-bottom: 20px;">Thank You, ${name}!</h2>
          
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We've received your message and appreciate you reaching out to Luminate Systems. Our team will review your inquiry and get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #666; margin: 0;">
              <strong style="color: #000;">Your message:</strong><br>
              ${message}
            </p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-bottom: 30px;">
            In the meantime, if you have any urgent questions, feel free to call us at <a href="tel:+13312436122" style="color: #0066cc; text-decoration: none;">+1 (331) 243-6122</a>.
          </p>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Best regards,<br>
              The Luminate Systems Team
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}