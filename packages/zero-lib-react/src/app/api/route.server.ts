'use server'
import { NextResponse, NextRequest } from 'next/server'
import { MailTransporter, MailEmail, TestEmail } from '@/components/email'

export async function POST(req: NextRequest) {
  const { header, body } = await req.json()
  try {
    await MailTransporter.sendMail({
      from: `Zero <${MailEmail}>`,
      to: TestEmail,
      subject: `${header}`,
      html: `${body}`,
    })
  } catch (error) {
    console.log('Failed to send email', error)
  }
  return NextResponse.json({ message: 'Email sent' })
}
