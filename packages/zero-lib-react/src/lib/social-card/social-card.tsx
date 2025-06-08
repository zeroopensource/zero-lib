'use client'
import { IconV2, ZERO_LINKS } from '@/lib'
import { FaFacebookF, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa6'

export const SocialCard = () => {
  return (
    <div className='h-8 divide-x flex *:flex *:flex-1 *:justify-center *:h-full *:p-2'>
      <a href={ZERO_LINKS.website} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaGlobe />} />
      </a>
      <a href={ZERO_LINKS.github} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaGithub />} />
      </a>
      <a href={ZERO_LINKS.twitter} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaTwitter />} />
      </a>
      <a href={ZERO_LINKS.facebook} className='flex-1' target='_blank'>
        <IconV2 size='sm' reactIcon={<FaFacebookF />} />
      </a>
    </div>
  )
}
