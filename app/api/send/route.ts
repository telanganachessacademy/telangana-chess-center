import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, inquiryType, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Telangana Chess Centre <onboarding@resend.dev>',
      to: ['telanganachesscentre@gmail.com'],
      subject: `New Inquiry: ${inquiryType} - ${name}`,
      html: `
        <h1>New Telangana Chess Centre Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}