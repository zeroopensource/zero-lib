'use client'
import Link from 'next/link'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  cn,
  STATECLASSES,
} from '@/lib'
import React from 'react'

const CARDCOLORS = {
  info: cn('', STATECLASSES.infoBorder, STATECLASSES.infoBg),
  success: cn('', STATECLASSES.successBorder, STATECLASSES.successBg),
  warning: cn('', STATECLASSES.warningBorder, STATECLASSES.warningBg),
  error: cn('', STATECLASSES.errorBorder, STATECLASSES.errorBg),
  default: ``,
}

type Props = {
  className?: string
  children?: React.ReactNode
  color?: keyof typeof CARDCOLORS
}

export const CardV2 = ({ children, className, color = 'default' }: Props) => {
  return (
    <Card
      className={cn('rounded-md py-4 *:px-4', CARDCOLORS[color], className)}
    >
      {children}
    </Card>
  )
}
