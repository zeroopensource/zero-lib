import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: ['src/lib/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  minify: true,
  plugins: [],
  external: ['react'],
  tsconfig: './tsup.tsconfig.json',
  ...options,
}))
