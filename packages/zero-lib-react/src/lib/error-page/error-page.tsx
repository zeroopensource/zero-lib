'use client'
import Link from 'next/link'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Page,
} from '@/lib'

export const ErrorPage = () => {
  return (
    <Page layout='center'>
      <Card className=' max-w-xs m-auto'>
        <CardHeader>
          <CardTitle className='text-xl'>[---] Unknown</CardTitle>
          <CardDescription>Unknown Error occurred.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-center text-sm'>
            <Link href='/' className='underline'>
              Return Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </Page>
  )
}
