import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'
import { z } from 'zod'

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  schema: process.env.NEXT_PUBLIC_API_GRAPHQL,
  documents: ['src/query/**/*.tsx', 'src/query/**/*.ts'],
  generates: {
    './src/query/gql/': {
      preset: 'client',
      plugins: [],
    },
    './src/query/schema.graphql': {
      plugins: [
        //'introspection',
        'schema-ast',
      ],
      config: {
        includeDirectives: true,
      },
    },
    './src/query/graphql-validation.ts': {
      plugins: ['typescript', 'typescript-validation-schema'],
      config: {
        // strictScalars: true,
        useEnumTypeAsDefaultValue: true,
        defaultScalarSchema: z.unknown(),
        scalarSchemas: {
          Date: 'z.string().datetime()',
          DateTime: 'z.string().datetime()',
        },
        scalars: {
          ID: 'string',
          DateTime: 'string',
          Date: 'string',
          JSON: '{ [key: string]: any }',
        },
        schema: 'zod',
      },
    },
  },
}

export default config
