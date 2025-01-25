import esbuild from 'esbuild'

await esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    format: 'esm'
  })
  .catch((err) => process.exit(1))
