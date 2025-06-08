import {
  GraphQLClient,
  RequestMiddleware,
  ResponseMiddleware,
} from 'graphql-request'
import 'dotenv/config'
import { getSession } from 'next-auth/react'

const endpoint = process.env.NEXT_PUBLIC_API_GRAPHQL || ''

const requestMiddleware: RequestMiddleware = async request => {
  const session = await getSession()
  return {
    ...request,
    headers: {
      ...request.headers,
      // Authorization: `Bearer ${session?.accessToken}`,
      'Content-type': 'application/json',
    },
  }
}

export const GraphqlClient = new GraphQLClient(endpoint, {
  requestMiddleware,
  // TODO: Fix graphql-request header bug
  // headers: {
  //   'Content-type': 'application/json',
  // },
})
