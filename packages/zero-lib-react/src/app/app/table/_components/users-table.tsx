'use client'
import { DataTable } from '@/lib/data-table-v1/data-table'
import { DataTableV2 } from './data-table-v2'
import { useDataTable } from '@/lib/data-table-v1/hooks/use-data-table'
import {
  useReactTable,
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
} from '@tanstack/react-table'
import { DATA, Task } from './data'
import { useState } from 'react'

const columnHelper = createColumnHelper<Task>()
const columns = [
  columnHelper.accessor('task', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    cell: info => info.getValue()?.name,
  }),
  columnHelper.accessor('due', {
    cell: info => info.getValue()?.toLocaleDateString('en-US'),
  }),
  columnHelper.accessor('notes', {
    cell: info => info.getValue(),
  }),
  // {
  //   accessorKey: 'task',
  //   header: 'Task',
  //   size: 225,
  //   cell: props => <p>{props.getValue()}</p>,
  //   // cell: EditableCell,
  //   enableColumnFilter: true,
  //   filterFn: 'includesString',
  // },
  // {
  //   accessorKey: 'status',
  //   header: 'Status',
  //   cell: props => <p>{props.getValue()}</p>,
  //   // cell: StatusCell,
  //   enableSorting: false,
  //   enableColumnFilter: true,
  //   // filterFn: (row, columnId, filterStatuses) => {
  //   //   if (filterStatuses.length === 0) return true
  //   //   const status = row.getValue(columnId)
  //   //   return filterStatuses.includes(status?.id)
  //   // },
  // },
  // {
  //   accessorKey: 'due',
  //   header: 'Due',
  //   cell: props => <p>{props.getValue()}</p>,
  //   // cell: DateCell,
  // },
  // {
  //   accessorKey: 'notes',
  //   header: 'Notes',
  //   size: 225,
  //   cell: props => <p>{props.getValue()}</p>,
  //   // cell: EditableCell,
  // },
]

type Props = {
  promises?: Promise<[Awaited<ReturnType<any>>]>
}

export const UsersTable = ({}: Props) => {
  const [data, setData] = useState(DATA)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  // const {table, shallow, debounceMs, throttleMs} = useDataTable({

  // })

  return (
    <>
      <p>Users Table</p>
      <DataTable table={table}></DataTable>
      {/* <DataTableV2 data={data} columns={columns} /> */}
    </>
  )
}
