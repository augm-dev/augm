let { builder, ssrBuilder } = require('augm-dev')
import { scan } from 'watches'
import { writeFile } from '../utils'

// ignore . or _ prefixed folders or files
let watches_options = { ignore: /(^|[\/\\])[\._]./ } 

// TODO: builder() should return { build, remove }
// TODO: builder should cache build results and respond to streams

export async function build(config){
  let start = Date.now()
  let build_it = builder({
    input: 'it',
    output: 'public/it',
    builds: [
      ssrBuilder()
    ],
    onWarn: console.log,
    onError: console.log,
    onSuccess: console.log
  })
  let targets = await scan('it', watches_options)
  targets = Object.values(targets)
  let output = await build_it(targets)
  let promises = []
  let files = 0
  for(let p in output){
    files++
    promises.push(writeFile(p, output[p]))
  }
  await Promise.all(promises)
  console.log(`Built ${files} files in ${Date.now() - start}ms`)
}