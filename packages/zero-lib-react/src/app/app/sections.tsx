'use client'
import { GradientButton, CardV2, CardContent } from '@/lib'
import { useState } from 'react'
import Link from 'next/link'
import { generateZeroId, generateZeroIds, parseZeroId } from '@/components'

export const GradientButtonSection = () => (
  <div>
    <h3>Gradient Buttons</h3>
    <div className='space-x-2 space-y-2'>
      <GradientButton>Default Purple1</GradientButton>
      <GradientButton gradient='purple2'>Purple2</GradientButton>
      <GradientButton gradient='indigo1'>Indigo1</GradientButton>
      <GradientButton gradient='blue1'>Blue1</GradientButton>
      <GradientButton gradient='orange1'>Orange1</GradientButton>
      <GradientButton gradient='orange2'>Orange2</GradientButton>
      <GradientButton gradient='red1'>Red1</GradientButton>
      <GradientButton gradient='pink1'>Pink1</GradientButton>
      <GradientButton gradient='pink2'>Pink2</GradientButton>
    </div>
  </div>
)

export const PageSection = () => (
  <div>
    <h3>Pages</h3>
    <div className='space-x-2 space-y-2'>
      <Link href='./splash-page' target='_blank'>
        Splash
      </Link>
      <Link href='./notfound-page' target='_blank'>
        NotFound
      </Link>
      <Link href='./error-page' target='_blank'>
        Error
      </Link>
    </div>
  </div>
)

export const CardSection = () => (
  <div>
    <h3>Cards</h3>
    <div className='space-y-2 text-sm'>
      <CardV2>
        <CardContent>Default</CardContent>
      </CardV2>
      <CardV2 color='info'>
        <CardContent>Info</CardContent>
      </CardV2>
      <CardV2 color='success'>
        <CardContent>Success</CardContent>
      </CardV2>
      <CardV2 color='warning'>
        <CardContent>Warning</CardContent>
      </CardV2>
      <CardV2 color='error'>
        <CardContent>Error</CardContent>
      </CardV2>
    </div>
  </div>
)

export const FunctionSection = () => {
  const [zeroId, setZeroId] = useState<string>()

  return (
    <div>
      <h3>Functions</h3>
      <div className='flex gap-2'>
        <GradientButton
          onClick={() => console.log(parseZeroId({ zeroId: generateZeroId() }))}
        >
          Generate ZeroId
        </GradientButton>
        <GradientButton
          onClick={() =>
            console.log(
              generateZeroIds().map(zeroId => parseZeroId({ zeroId })),
            )
          }
        >
          Generate ZeroIds
        </GradientButton>
      </div>
    </div>
  )
}
