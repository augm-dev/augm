#!/usr/bin/env node

require = require("esm")(module)
const sade = require('sade');
const pkg = require('./package.json')
const path = require('path')
const { build } = require('./dist/index.js')

const cli = sade('augm')

function parseConfig(path_to_config){
  let config
  try{
    config = require(path.join(process.cwd(), path_to_config))
  } catch(e){
    console.log('Error loading config file: ' + path_to_config)
  }
  if(config && config.default && typeof config.default === 'object'){
    return config.default;
  }
  console.log('Error loading config file: ' + path_to_config)
  return {}
}

cli
  .version(pkg.version)
  .describe(pkg.description)
  .option('-c, --config', 'Path to config file', 'augm.js')

cli
  .command('build')
  .describe('Build the project for production')
  .action(({ c }) => {
    let config = parseConfig(c)
    build(config)
  })


cli.parse(process.argv);
