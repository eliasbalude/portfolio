import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the incoming request JSON
    const { name, email, message, to } = await req.json();

    // Create a Nodemailer transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your App Password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to, // Recipient's email address
      subject: `Portfolio website: New Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>Message from portfolio website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Log the sent mail options for debugging
    console.log('Mail sent successfully:', mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}