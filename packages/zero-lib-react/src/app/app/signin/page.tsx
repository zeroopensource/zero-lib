'use client'
import { SigninPage } from '@/lib'

export default function Page() {
  return (
    <>
      <SigninPage
        signupUrl='/app/signup'
        forgotPasswordUrl='/app/forgotpassword'
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
