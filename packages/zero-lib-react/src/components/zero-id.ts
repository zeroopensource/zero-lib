'use client'
import { useZeroId } from '@zero-company/zero-lib'

/* eslint-disable react-hooks/rules-of-hooks */
export const { generateZeroId, generateZeroIds, parseZeroId } = useZeroId({
  prefix: 'zero1',
})
