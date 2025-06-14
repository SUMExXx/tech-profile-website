import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    type: process.env.EMAIL_AUTH_TYPE,
    user: process.env.EMAIL_USER,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
  },
} as SMTPTransport.Options);

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message } = body;
  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `${email} contacted through Profile Website`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error: unknown) {
    console.log(error)
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}