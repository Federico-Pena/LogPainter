import esbuild from 'esbuild'

const ctx = await esbuild.context({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  minify: true,
  outdir: 'out',
  platform: 'node',
  target: ['node14'],
  sourcemap: true
})
await ctx
  .watch()
  .then(() => {
    console.log('Build and watching...')
  })
  .catch((err) => {
    console.log('Build failed')
    console.log(err)
  })
