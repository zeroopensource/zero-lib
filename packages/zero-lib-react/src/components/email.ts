import nodemailer from 'nodemailer'

export const MailEmail = process.env.SMTP_EMAIL || ''
export const TestEmail =
  process.env.SMTP_TEST_EMAIL || process.env.SMTP_EMAIL || ''

export const MailTransporter = nodemailer.createTransport({
  // host: process.env.SMTP_HOST || 'smtp.gmail.com',
  // port: process.env.SMTP_PORT || 465,
  secure: true,
  service: process.env.SMTP_SERVICE || 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL || '',
    pass: process.env.ZERO_INDEX_SKYBLUE_APP_PASSWORD_GOOGLE || '',
  },
})
