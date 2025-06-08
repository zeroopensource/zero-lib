'use client'
import Link from 'next/link'
import {
  CardV2,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Page,
  Button,
} from '@/lib'

type Props = {
  homeUrl: string
}

export const VerifiedEmailPage = ({ homeUrl }: Props) => {
  return (
    <Page layout='center' innerClassName='max-w-sm w-full'>
      <CardV2>
        <CardHeader>
          <CardTitle className='text-xl'>Verified Email</CardTitle>
          <CardDescription>
            You have completed the verification process
          </CardDescription>
        </CardHeader>
        <CardContent className='!pt-0'>
          <div className='grid gap-4'>
            <Link href={homeUrl}>
              <Button className='w-full'>Return Home</Button>
            </Link>
          </div>
        </CardContent>
      </CardV2>
    </Page>
  )
}
