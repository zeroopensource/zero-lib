'use client'
import Link from 'next/link'
import {
  cn,
  Button,
  Card,
  CardV2,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Page,
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
} from '@/lib'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().min(1, { message: 'Email required' }).email(),
  password: z.string().min(1, { message: 'Password required' }).min(8, {
    message: 'Password must be at least 8 characters.',
  }),
})
const formSchemaKeys = formSchema.keyof()
type FormSchemaType = z.infer<typeof formSchema>
type FormSchemaKeysType = z.infer<typeof formSchemaKeys>

type Props = {
  signupUrl: string
  onSubmit: (values: z.infer<typeof formSchema>) => void
  forgotPasswordUrl: string
}

export const SigninPage = ({
  signupUrl,
  onSubmit,
  forgotPasswordUrl,
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const formErrors = form.formState.errors
  const formErrorKeys = Object.keys(formErrors) as FormSchemaKeysType[]
  const errorMessages = formErrorKeys.map(
    (error: FormSchemaKeysType) => formErrors[error]?.message,
  )

  return (
    <Page layout='center' innerClassName='max-w-sm w-full'>
      {errorMessages.length > 0 && (
        <CardV2 color='error' className='text-xs'>
          <CardHeader>
            {errorMessages.map((message, key) => (
              <p key={key}>• {message}</p>
            ))}
          </CardHeader>
        </CardV2>
      )}
      <CardV2>
        <CardHeader>
          <CardTitle className='text-xl'>Sign In</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className='!pt-0'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='JohnDoe@gmail.com' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex'>
                      <FormLabel>Password</FormLabel>
                      <Link
                        href={forgotPasswordUrl}
                        className='ml-auto text-sm underline'
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input type='password' placeholder='••••' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='grid gap-4'>
                <Button type='submit' className='w-full'>
                  Login
                </Button>
              </div>
              <div className='mt-4 text-center text-sm'>
                Don&apos;t have an account?{' '}
                <Link href={signupUrl} className='underline'>
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </CardV2>
    </Page>
  )
}
