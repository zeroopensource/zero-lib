import { useQuery } from '@tanstack/react-query'
import { User, usersSchema } from './types'

type FetchUsersParams = {
  userId?: number
  filter?: string
}

export const fetchUsersV3 = (params?: FetchUsersParams) => {
  const { userId, filter } = params || {}

  return useQuery<User[]>({
    queryKey: ['users', filter, userId],
    queryFn: () => {
      return (
        fetch(`${process.env.NEXT_PUBLIC_API}/users`)
          .then(res => res.json())
          .then(data => data)
          .catch(error => {
            console.error('Error fetching users:', error) // Add logger
            throw error
          })
          // .finally(() => {
          //   console.log('Fetch users completed')
          // })
          .then(data => {
            console.log('Fetched users:', data)
            return data
          })
          .then(data => {
            const {
              data: parsedData,
              success,
              error,
            } = usersSchema.safeParse(data)
            if (!success) {
              console.error('Error parsing users:', error) // Add logger
              throw error
            }
            console.log('Parsed users:', parsedData)
            return parsedData
          })
      )
    },
  })
}
