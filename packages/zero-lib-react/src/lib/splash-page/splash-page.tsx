'use client'
import { ZeroLogo } from '../zero/zero-logo'
import { Page } from '@/lib'

type Props = {}

export const SplashPage = ({}: Props) => {
  return (
    <Page layout='center'>
      <ZeroLogo className='size-24 text-white mb-4 m-auto' />
    </Page>
  )
}
