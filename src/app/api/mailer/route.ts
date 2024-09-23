import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST, // e.g., 'smtp.gmail.com'
    port: 465, // For SSL
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email address
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your email password or app-specific password
    },
    tls: {
      rejectUnauthorized: false, // Set to true in production
    },
});

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message } = body;

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
    subject: `${email} contacted through Profile Website`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}