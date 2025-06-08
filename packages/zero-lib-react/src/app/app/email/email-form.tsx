'use client'
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
  Textarea,
} from '@/lib'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  header: z.string().min(1, { message: 'Header required' }),
  preview: z.string(),
  body: z.string().min(1, { message: 'Body required' }),
})
const formSchemaKeys = formSchema.keyof()
type FormSchemaType = z.infer<typeof formSchema>
type FormSchemaKeysType = z.infer<typeof formSchemaKeys>

type Props = {
  onSubmit: (values: z.infer<typeof formSchema>) => void
  html?: string | null | undefined
  className?: string
  defaultValues?: z.infer<typeof formSchema>
}

export const EmailForm = ({
  onSubmit,
  html,
  className,
  defaultValues,
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      header: defaultValues?.header || '',
      preview: defaultValues?.preview,
      body: defaultValues?.body || '',
    },
  })
  const formErrors = form.formState.errors
  const formErrorKeys = Object.keys(formErrors) as FormSchemaKeysType[]
  const errorMessages = formErrorKeys.map(
    (error: FormSchemaKeysType) => formErrors[error]?.message,
  )

  const onSend = () => {
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ header: defaultValues?.header, body: html }),
    })
  }

  return (
    <div className={`space-y-4 ${className}`}>
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
          <CardTitle className='text-xl'>Generate Email</CardTitle>
        </CardHeader>
        <CardContent className='!pt-0'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='header'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Header</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='preview'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preview</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='body'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body</FormLabel>
                    <FormControl>
                      {/* <Input placeholder='# Changes' {...field} /> */}
                      <Textarea className='h-[10rem]' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='grid grid-cols-2 gap-6'>
                <Button variant='outline' type='submit'>
                  Generate
                </Button>
                <Button variant='outline' onClick={() => onSend()}>
                  Send
                </Button>
              </div>
              <div className='mt-4 text-sm'>Output HTML</div>
              <Textarea className='h-[10rem]' readOnly value={html || ''} />
            </form>
          </Form>
        </CardContent>
      </CardV2>
    </div>
  )
}
