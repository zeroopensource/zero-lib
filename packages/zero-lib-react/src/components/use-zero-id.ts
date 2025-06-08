'use client'
import { nanoid, customAlphabet } from 'nanoid'
import { v4 as uuidV4, validate as uuidValidate } from 'uuid'
// Delete this component

const PARTCOUNT = 6
const PARTSIZE = 6

const isHex = (str?: string | null) => {
  let RegExp = /^[0-9a-f]{6}$/i
  return str ? RegExp.test(str) : false
}

export const generateZeroId = ({ prefix }: { prefix: string }) => {
  const keys = Array.from({ length: PARTCOUNT }, () =>
    customAlphabet('1234567890abcdef', PARTSIZE)()
  )
  return [prefix, ...keys].join('-')
}

export const generateZeroIds = ({
  prefix,
  length = 8,
}: {
  prefix: string
  length?: number
}) =>
  Array.from(
    {
      length,
    },
    () => generateZeroId({ prefix })
  )

export const parseZeroId = ({ zeroId }: { zeroId?: string | null }) => {
  const [prefix, ...parts] = zeroId?.split('-') || []
  const arePartsValidHex = parts.every(x => isHex(x))
  const isZeroIdValid = [parts.length === PARTCOUNT, arePartsValidHex].every(
    x => x === true
  )
  return {
    zeroId,
    parts,
    prefix,
    isZeroIdValid,
  }
}

export const useZeroId = (args: {
  prefix: string
  strategy?: 'zeroId' | 'uuid' | null | undefined
  generateIdsLength?: number | null | undefined
}) => {
  const strategy = args.strategy ?? 'zeroId'
  const generateIdsLength = args.generateIdsLength ?? 8

  if (strategy === 'uuid')
    return {
      generateZeroId: () => [args.prefix, uuidV4()].join('-'),
      generateZeroIds: () =>
        Array.from({ length: generateIdsLength }, () =>
          [args.prefix, uuidV4()].join('-')
        ),
      parseZeroId: ({ zeroId }: { zeroId?: string | null | undefined }) => ({
        zeroId,
        parts: zeroId?.split('-'),
        prefix: zeroId?.split('-')[0],
        isZeroIdValid: uuidValidate(zeroId?.replace(`${args.prefix}-`, '')),
      }),
    }
  // else if (strategy === 'zeroId')
  else
    return {
      generateZeroId: () => generateZeroId({ prefix: args.prefix }),
      generateZeroIds: () => generateZeroIds({ prefix: args.prefix }),
      parseZeroId,
    }
}
