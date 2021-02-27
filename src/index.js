let { builder, ssrBuilder } = require('augm-dev')
import { scan, watch } from 'watches'
import { writeFile } from '../utils'
import { printer } from '../utils'
const handler = require('serve-handler');
const http = require('http');

// ignore . or _ prefixed folders or files
let watches_options = {
  cache: require.cache,
  ignore: /(^|[\/\\])[\._]./, // ignore _ & . prefixed files/folders
  only: /\.js$/ // only js files
} 

// TODO: builder() should return { build, remove }
// TODO: builder should cache build results and respond to streams

async function write(obj){
  let keys = Object.keys(obj)
  await Promise.all(keys.map(p => writeFile(p, obj[p])))
  printer.success(`Built ${keys.length} files`)
}

let build_it = builder({
  input: 'it',
  output: 'public/it',
  builds: [
    ssrBuilder({
      minify: true,
      npm: dep => ({
        path: `https://cdn.skypack.dev/${dep}`,
        external: true,
      }),
      async optimize(code){
        
      }
    })
  ],
  onWarn: printer.warn,
  onError: printer.error,
  onSuccess: printer.success
})

export async function build(config){
  let start = Date.now()
  let targets = scan('it', watches_options)
  let output = await build_it(targets, targets)
  await write(output);
  printer.success(`Done in ${Date.now() - start}ms`)
}

export function dev(config={}){
  
  watch('it',watches_options)
    .on('ready', async (total) => {
      let output = await build_it(total, total)
      await write(output);
    })
    .on('change', async (changed, total) => {
      let output = await build_it(changed, total)
      await write(output);
    })
    .on('error', printer.error)

  
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: 'public'
    });
  })

  server.listen(3000, () => {
    printer.success('Running at http://localhost:3000');
  });

}