'use client'
import { SignupPage } from '@/lib'

export default function Page() {
  return (
    <>
      <SignupPage signinUrl='/app/signin' onSubmit={(values)=> console.log(values)}/>
    </>
  )
}
