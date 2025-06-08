'use client'
import { Suspense } from 'react'
import { ResetPasswordPage, SplashPage } from '@/lib'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  return (
    <>
      <Suspense fallback={<SplashPage />}>
        <InnerPage />
      </Suspense>
    </>
  )
}

const InnerPage = () => {
  const searchParams = useSearchParams()
  const resetPasswordToken = searchParams.get('resetPasswordToken')

  return (
    <ResetPasswordPage
      resetPasswordToken={resetPasswordToken || undefined}
      signupUrl='/app/signup'
      signinUrl='/app/signin'
      onSubmit={values => console.log(values)}
    />
  )
}
