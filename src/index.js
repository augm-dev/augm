let { builder } = require('augm-dev')
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

export async function build(config){
  let start = Date.now()
  let output = {}
  await Promise.all(
    Object.keys(config).map(async k => {
      let build_it = builder({
        input: k,
        builds: config[k]
      })
      let targets = scan('it', watches_options)
      let new_builds =  await build_it(targets, targets)
      Object.assign(output, new_builds)
    })
  )
  await write(output);
  printer.success(`Done in ${Date.now() - start}ms`)
}

export function dev(config={}){

  for(let k in config){
    let build_it = builder({
      input: k,
      builds: config[k]
    })

    watch(k,watches_options)
      .on('ready', async (total) => {
        let output = await build_it(total, total)
        await write(output);
      })
      .on('change', async (changed, total) => {
        let output = await build_it(changed, total)
        await write(output);
      })
      .on('error', printer.error)
  
  }
  
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: 'public'
    });
  })

  server.listen(3000, () => {
    printer.success('Running at http://localhost:3000');
  });

}