import sgMail from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, phone } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email 1: Send to YOU (Admin)
    await sgMail.send({
      to: 'founder@luminatesystems.com',
      from: 'founder@luminatesystems.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #000; color: #fff; padding: 30px; text-align: center;">
            <h1>Luminate Systems</h1>
            <p>New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px;">
            <h2>New Inquiry</h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 15px 0;">
                <strong style="color: #000;">Name:</strong><br>
                <span style="color: #666;">${name}</span>
              </p>
              
              <p style="margin: 0 0 15px 0;">
                <strong style="color: #000;">Email:</strong><br>
                <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
              </p>
              
              ${phone ? `
              <p style="margin: 0 0 15px 0;">
                <strong style="color: #000;">Phone:</strong><br>
                <a href="tel:${phone}" style="color: #0066cc;">${phone}</a>
              </p>
              ` : ''}
              
              <p style="margin: 0;">
                <strong style="color: #000;">Message:</strong><br>
                <span style="color: #666; white-space: pre-wrap;">${message}</span>
              </p>
            </div>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #e5e7eb;">
            <p>© 2025 Luminate Systems</p>
          </div>
        </div>
      `,
    });

    // Email 2: Confirmation to USER
    await sgMail.send({
      to: email,
      from: 'contact@luminatesystems.com',
      subject: 'We received your message - Luminate Systems',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #000; color: #fff; padding: 30px; text-align: center;">
            <h1>Luminate Systems</h1>
          </div>
          <div style="padding: 30px;">
            <h2>Thank You, ${name}!</h2>
            <p>We've received your message and appreciate you reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
            <p>In the meantime, feel free to call us at <a href="tel:+13312436122" style="color: #0066cc;">+1 (331) 243-6122</a></p>
          </div>
          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #999;">
            <p>© 2025 Luminate Systems</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error:', error.message);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}