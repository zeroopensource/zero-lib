'use client'
import { z } from 'zod'

/**
 * TypeScript type definitions for JSON-Placeholder sample data API.
 * @see https://jsonplaceholder.typicode.com/
 */

/*
export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geolocation
}

export interface Geolocation {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export interface Album {
  id: number
  userId: number
  title: string
}

export interface Photo {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}
*/

export const geoSchema = z.object({
  lat: z.string(),
  lng: z.string(),
})

export const addressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: geoSchema,
})

export const companySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
})

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: addressSchema,
  phone: z.string(),
  website: z.string(),
  company: companySchema,
})
export type User = z.infer<typeof userSchema>
export const usersSchema = z.array(userSchema)
export type Users = z.infer<typeof usersSchema>
