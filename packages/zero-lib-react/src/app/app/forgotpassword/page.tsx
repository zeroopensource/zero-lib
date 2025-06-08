'use client'
import { ForgotPasswordPage } from '@/lib'

export default function Page() {
  return (
    <>
      <ForgotPasswordPage
        signupUrl='/app/signup'
        signinUrl='/app/signin'
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
