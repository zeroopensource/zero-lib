'use client'
import { GradientButton, CardV2, CardHeader } from '@/lib'
import Link from 'next/link'
import {
  GradientButtonSection,
  PageSection,
  CardSection,
  FunctionSection,
} from './sections'
import type { User } from '@/query/types'
import { fetchUsersV3 } from '@/query/fetch-users'
import { fetchFilms } from '@/query/fetch-films'

export default function Page() {
  const { data: users, isLoading: isUsersLoading } = fetchUsersV3()
  const { data: films, isLoading: isFilmsLoading } = fetchFilms()

  return (
    <div className='flex flex-col p-2 prose prose-invert max-w-none *:max-w-4xl w-full overflow-auto'>
      <h2>Components</h2>
      <p>Set of reusable ui components for use on zero projects.</p>
      <GradientButtonSection />
      <PageSection />
      <CardSection />
      <FunctionSection />
      <div>
        {isUsersLoading && <p>Users Loading...</p>}
        {users &&
          users.map((user: User, key) => (
            <p key={key}>
              {user.name} - {user.email}
            </p>
          ))}
      </div>
      <div>
        {isFilmsLoading && <p>Films Loading...</p>}
        {films &&
          (films?.allFilms?.edges || []).map((film: any, key: number) => (
            <p key={key}>
              {film.node.title} - {film.node.releaseDate}
            </p>
          ))}
      </div>
    </div>
  )
}
