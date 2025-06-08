'use client'
import {
  cn,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
} from '@/components/shadcn'

type Feature = {
  title: React.ReactNode
  description: React.ReactNode
}

type Props = {
  title?: React.ReactNode
  description?: React.ReactNode
  features: Feature[]
}

export const FeatureCard = ({ title, description, features }: Props) => {
  return (
    <Card className='w-full sm:max-w-80 shrink-0'>
      <CardHeader className={cn(!title && !description && 'p-3')}>
        <CardTitle hidden={!title}>{title}</CardTitle>
        <CardDescription hidden={!description}>{description}</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        {features.map((feature, key) => (
          <div
            key={key}
            className='flex items-center justify-between space-x-2'
          >
            <Label className='flex flex-col space-y-1'>
              <span>{feature.title}</span>
              <span className='font-normal leading-snug text-muted-foreground'>
                {feature.description}
              </span>
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
