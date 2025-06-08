'use client'
import { useZeroId } from './use-zero-id'

/* eslint-disable react-hooks/rules-of-hooks */
export const { generateZeroId, generateZeroIds, parseZeroId } = useZeroId({
  prefix: 'zero1',
})
