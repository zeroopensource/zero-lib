'use client'
import { UsersTable } from './_components/users-table'
import { fetchUsersV3 } from '@/query/fetch-users'

export default function Page() {
  const promises = Promise.all([])
  const { data: users, isLoading: isUsersLoading } = fetchUsersV3()

  return (
    <div>
      <p>table</p>
      <UsersTable
      // promises={promises}
      />
    </div>
  )
}
