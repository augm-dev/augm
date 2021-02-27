'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var util = require('util');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

/* es-module-lexer 0.3.26 */
const A=1===new Uint8Array(new Uint16Array([1]).buffer)[0];function parse(E,g="@"){if(!B)return init.then(()=>parse(E));const I=E.length+1,D=(B.__heap_base.value||B.__heap_base)+4*I-B.memory.buffer.byteLength;D>0&&B.memory.grow(Math.ceil(D/65536));const w=B.sa(I-1);if((A?C:Q)(E,new Uint16Array(B.memory.buffer,w,I)),!B.parse())throw Object.assign(new Error(`Parse error ${g}:${E.slice(0,B.e()).split("\n").length}:${B.e()-E.lastIndexOf("\n",B.e()-1)}`),{idx:B.e()});const L=[],k=[];for(;B.ri();)L.push({s:B.is(),e:B.ie(),ss:B.ss(),se:B.se(),d:B.id()});for(;B.re();)k.push(E.slice(B.es(),B.ee()));return [L,k,!!B.f()]}function Q(A,Q){const C=A.length;let B=0;for(;B<C;){const C=A.charCodeAt(B);Q[B++]=(255&C)<<8|C>>>8;}}function C(A,Q){const C=A.length;let B=0;for(;B<C;)Q[B]=A.charCodeAt(B++);}let B;const init=WebAssembly.compile((E="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","function"==typeof atob?Uint8Array.from(atob(E),A=>A.charCodeAt(0)):Buffer.from(E,"base64"))).then(WebAssembly.instantiate).then(({exports:A})=>{B=A;});var E;

function totalist(dir, callback, pre='') {
	dir = path.resolve('.', dir);
	let arr = fs.readdirSync(dir);
	let i=0, abs, stats;
	for (; i < arr.length; i++) {
		abs = path.join(dir, arr[i]);
		stats = fs.statSync(abs);
		stats.isDirectory()
			? totalist(abs, callback, path.join(pre, arr[i]))
			: callback(path.join(pre, arr[i]), abs, stats);
	}
}

var chokidar = require('chokidar');
require = require("esm")(module);


const readFile = util.promisify(fs__default['default'].readFile);

function isHidden(p, ignore, only){
  // Ignore only if ignore is set and ignore test passes
  let shouldIgnore = ignore && ignore.test(p);
  // if only isn't set, include everything. Otherwise, must pass only test
  let shouldInclude = !only || only.test(p);
  // file is hidden if it shouldn't be included OR it should be ignored
  return !shouldInclude || shouldIgnore
}

const cwdify = (p) => path__default['default'].join(process.cwd(),p.replace(process.cwd(), ''));

// TODO: handler errors such that it waits until error is resolved before continuing
async function file_info(p){
  await init;
  let js = (path__default['default'].extname(p) === '.js');
  let module = js ? require(p) : void 0;
  let contents = await readFile(p, 'utf8');
  let [imports, exports] = js ? parse(contents) : [null,null];
  return { imports, exports, contents, js, p, module }
}

class Watcher{
  constructor(sources, options={}){
    Object.assign(this, {
      sources: (Array.isArray(sources) ? sources : [sources]).map(s => cwdify(path__default['default'].normalize(s))),
      options,
      targets: {},
      dependents: {},
      subscribers: {}
    });
    this.cache = options.cache;
    this.updateDependents = this.updateDependents.bind(this);
    this.effects = this.effects.bind(this);
    this.changeFile = this.changeFile.bind(this);
    this.init = this.init.bind(this);
    this.remove = this.remove.bind(this);
    this.format = this.format.bind(this);

    this.watcher = chokidar.watch(this.sources, {
      ...options.chokidar,
      ignoreInitial: true
    })
    .on('add', this.changeFile)
    .on('change', this.changeFile)
    .on('unlink', this.remove)
    .on('unlinkDir', this.remove);

    this.init().then(() => {
      this.dispatch('ready', this.format(Object.keys(this.targets)));
    }).catch(e => {
      this.dispatch('error', "Error initializing watches");
      console.log(e);
    });
  }

  format(arr=[]){
    return arr.map(p => {
      let info = this.targets[p];
      return {
        contents: info.contents,
        module: info.module,
        p
      }
    })
  }

  async changeFile(p){
    try{
      p = cwdify(p);
      await this.updateDependents(p);
      let changed = await this.effects(p);
      if(changed.length > 0){
        this.dispatch('change', this.format(changed), this.format(Object.keys(this.targets)));
      }
    } catch(e){
      this.dispatch('error', e);
    }
  }

  async remove(p){
    try {
      p = cwdify(p);
      let removed = [];
      Object.keys(this.dependents).forEach(k => {
        this.dependents[k].forEach(dep => {
          if(dep.startsWith(p)){
            this.dependents[k].delete(dep);
            removed.push(dep);
          }
        });
        if(this.dependents[k].size === 0 || k.startsWith(p)){
          delete this.dependents[k];
        }
      });
      this.dispatch('remove', removed);
    } catch(e){
      this.dispatch('error', e);
    }
  }

  isTarget(p){
    return this.sources.some(s => p.startsWith(s)) && !isHidden(p, this.options.ignore, this.options.only)
  }

  async init(){
    await init;
    let targets = scan(this.sources, this.options);
    await Promise.all(
      targets.map(({p}) => this.updateDependents(p))
    );
  }

  clearCache(p){
    delete this.cache[p];
    delete require.cache[p];
  }


  async effects(p,changed=new Set()){
    // if in source directory and isn't hidden
    if(this.isTarget(p)){
      changed.add(p);
    }
    this.clearCache(p);
    if(this.dependents[p]){
      let effect = async function(dep){
        await this.effects(dep,changed);
      }.bind(this);
      let promises = [];
      this.dependents[p].forEach((dep) => {
        promises.push(effect(dep));
      });
      await Promise.all(promises);
    }
    return [...changed.values()];
  }

  async updateDependents(p){
    this.clearCache(p);
    let info = await file_info(p);
    if(this.isTarget(p)){
      this.targets[p] = info;
      this.watcher.add(p);
    }
    if(info.js){
      let relevant_imports = info.imports
        // get import string
        .map(({s,e}) => info.contents.substring(s,e))
        // only include local imports
        .filter(str => str.startsWith('.'))
        // ensure import string includes .js extension
        .map(str => str.endsWith('.js') ? str : str + '.js') 
        // resolve import path
        .map(str => path__default['default'].join(path__default['default'].dirname(p), str));

      await Promise.all(
        relevant_imports.map(async import_path => {
          // if we haven't already tracked this file
          if(!this.dependents[import_path]){
            this.dependents[import_path] = new Set([p]);
            // recursively search for dependencies to trigger file changes
            await this.updateDependents(import_path);
            // watch dependency for file changes
            this.watcher.add(import_path);
          }
          else {
            // ensure this path is included in dependency's dependents
            this.dependents[import_path].add(p);
          }
        })
      );
    }
    
  }

  async dispatch(event, ...args){
    if(this.subscribers[event]){
      let promises = [];
      this.subscribers[event].forEach(cb => promises.push(cb(...args)));
      await Promise.all(promises);
    }
  }

  on(event, callback){
    if(this.subscribers[event]){
      this.subscribers[event].add(callback);
    } else {
      this.subscribers[event] = new Set([callback]);
    }
    return this;
  }
  
}

function watch(source, cache, options){
  return new Watcher(source, cache, options);
}

function scan(sources=[], options={}){
  let targets = [];
  sources = (Array.isArray(sources) ? sources : [sources]).map(path__default['default'].normalize);

  sources.forEach(src => {
    totalist(src,  (rel) => {
      let p = cwdify(path__default['default'].join(src,rel));
      if(!isHidden(p, options.ignore, options.only)){
        targets.push({
          contents: fs__default['default'].readFileSync(p,'utf8'),
          module: require(p),
          p
        });
      }
    });
  });
  
  return targets
}

function throws(code, msg, path) {
	let err = new Error(code + ': ' + msg);
	err.code=code; err.path=path;
	throw err;
}

function mkdir(str, opts={}) {
	if (process.platform === 'win32' && /[<>:"|?*]/.test(str.replace(path.parse(str).root, ''))) {
		throws('EINVAL', 'invalid characters', str);
	}

	let cwd = path.resolve(opts.cwd || '.');
	let seg, mode = opts.mode || 0o777 & (~process.umask());
	let arr = path.resolve(cwd, path.normalize(str)).replace(cwd, '').split(/\/|\\/);

	for (seg of arr) {
		cwd = path.join(cwd, seg);
		if (fs.existsSync(cwd)) {
			if (!fs.statSync(cwd).isDirectory()) {
				throws('ENOTDIR', 'not a directory', cwd);
			}
		} else {
			fs.mkdirSync(cwd, mode);
		}
	}

	return cwd;
}

const writeFileAsync = util.promisify(fs__default['default'].writeFile);
util.promisify(fs__default['default'].readFile);

async function writeFile(p, data){
  // only if data is truthy
  if(data){
    // ensure dir exists
    mkdir(path__default['default'].dirname(p));
    await writeFileAsync(p, data);
  }
}

let FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY=true;
if (typeof process !== 'undefined') {
	({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env);
	isTTY = process.stdout && process.stdout.isTTY;
}

const $ = {
	enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== 'dumb' && (
		FORCE_COLOR != null && FORCE_COLOR !== '0' || isTTY
	),

	// modifiers
	reset: init$1(0, 0),
	bold: init$1(1, 22),
	dim: init$1(2, 22),
	italic: init$1(3, 23),
	underline: init$1(4, 24),
	inverse: init$1(7, 27),
	hidden: init$1(8, 28),
	strikethrough: init$1(9, 29),

	// colors
	black: init$1(30, 39),
	red: init$1(31, 39),
	green: init$1(32, 39),
	yellow: init$1(33, 39),
	blue: init$1(34, 39),
	magenta: init$1(35, 39),
	cyan: init$1(36, 39),
	white: init$1(37, 39),
	gray: init$1(90, 39),
	grey: init$1(90, 39),

	// background colors
	bgBlack: init$1(40, 49),
	bgRed: init$1(41, 49),
	bgGreen: init$1(42, 49),
	bgYellow: init$1(43, 49),
	bgBlue: init$1(44, 49),
	bgMagenta: init$1(45, 49),
	bgCyan: init$1(46, 49),
	bgWhite: init$1(47, 49)
};

function run(arr, str) {
	let i=0, tmp, beg='', end='';
	for (; i < arr.length; i++) {
		tmp = arr[i];
		beg += tmp.open;
		end += tmp.close;
		if (!!~str.indexOf(tmp.close)) {
			str = str.replace(tmp.rgx, tmp.close + tmp.open);
		}
	}
	return beg + str + end;
}

function chain(has, keys) {
	let ctx = { has, keys };

	ctx.reset = $.reset.bind(ctx);
	ctx.bold = $.bold.bind(ctx);
	ctx.dim = $.dim.bind(ctx);
	ctx.italic = $.italic.bind(ctx);
	ctx.underline = $.underline.bind(ctx);
	ctx.inverse = $.inverse.bind(ctx);
	ctx.hidden = $.hidden.bind(ctx);
	ctx.strikethrough = $.strikethrough.bind(ctx);

	ctx.black = $.black.bind(ctx);
	ctx.red = $.red.bind(ctx);
	ctx.green = $.green.bind(ctx);
	ctx.yellow = $.yellow.bind(ctx);
	ctx.blue = $.blue.bind(ctx);
	ctx.magenta = $.magenta.bind(ctx);
	ctx.cyan = $.cyan.bind(ctx);
	ctx.white = $.white.bind(ctx);
	ctx.gray = $.gray.bind(ctx);
	ctx.grey = $.grey.bind(ctx);

	ctx.bgBlack = $.bgBlack.bind(ctx);
	ctx.bgRed = $.bgRed.bind(ctx);
	ctx.bgGreen = $.bgGreen.bind(ctx);
	ctx.bgYellow = $.bgYellow.bind(ctx);
	ctx.bgBlue = $.bgBlue.bind(ctx);
	ctx.bgMagenta = $.bgMagenta.bind(ctx);
	ctx.bgCyan = $.bgCyan.bind(ctx);
	ctx.bgWhite = $.bgWhite.bind(ctx);

	return ctx;
}

function init$1(open, close) {
	let blk = {
		open: `\x1b[${open}m`,
		close: `\x1b[${close}m`,
		rgx: new RegExp(`\\x1b\\[${close}m`, 'g')
	};
	return function (txt) {
		if (this !== void 0 && this.has !== void 0) {
			!!~this.has.indexOf(open) || (this.has.push(open),this.keys.push(blk));
			return txt === void 0 ? this : $.enabled ? run(this.keys, txt+'') : txt+'';
		}
		return txt === void 0 ? chain([open], [blk]) : $.enabled ? run([blk], txt+'') : txt+'';
	};
}

let { bold, dim, yellow } = $;

let printer = {
  print(message, color="blue"){
    if(!this.silent){
      console.log(`${$[color](`လ  ${bold("it")}`)} ${dim(':')} ${message}`);
    }
  },
  warn(message){
    this.print(message, "yellow");
    // console.log(yellow("║"))
    // console.log(`${yellow("╚═▷")}  ${message}`)
  },
  error(message, e){
    this.print(message, "red");
  },
  success(message){
    this.print(message, "green");
  },
  info(message){
    this.print(message, "blue");
  },
  benchmarks(arr){
    if(!this.silent){
      if(arr.length){
        console.log(dim("║"));
      }
      arr.forEach(([label, ...facts], i) => {
        console.log(`${i === arr.length - 1 ? dim("╚══") : dim("╟══")} ${label} ${dim("═▷")}  ${facts.join(dim(' -- '))}`);
      });
    }
  },
  silent: false
};

// class Spinner{
//   constructor(logo_art='◸/◿', loading_art=['◸-◿','◸\\◿','◸|◿','◸/◿'], error_art='◸x◿', success_art='◸✓◿'){
//     Object.assign(this, { logo_art, error_art, success_art })
//     this.s = ora({
//     text: "initializing...",
//       spinner: {
//         interval: 80,
//         frames: loading_art
//       },
//       color: 'yellow'
//     })
//   }
//   ready(text="ready"){
//     this.s.stopAndPersist({
//       symbol: chalk.green(this.logo_art),
//       text
//     })
//   }
//   start(text="loading..."){
//     this.s.start(text)
//   }
//   error(text="generic routo error"){
//     this.s.stopAndPersist({
//       symbol: chalk.red(this.error_art),
//       text
//     })
//   }
//   success(text="success"){
//     this.s.stopAndPersist({
//       symbol: chalk.green(this.success_art),
//       text
//     })
//   }
// }

require('brotli-size');

let { builder, ssrBuilder } = require('augm-dev');
const handler = require('serve-handler');
const http = require('http');

// ignore . or _ prefixed folders or files
let watches_options = {
  cache: require.cache,
  ignore: /(^|[\/\\])[\._]./, // ignore _ & . prefixed files/folders
  only: /\.js$/ // only js files
}; 

// TODO: builder() should return { build, remove }
// TODO: builder should cache build results and respond to streams

async function write(obj){
  let keys = Object.keys(obj);
  await Promise.all(keys.map(p => writeFile(p, obj[p])));
  printer.success(`Built ${keys.length} files`);
}

let build_it = builder({
  input: 'it',
  output: 'public/it',
  builds: [
    ssrBuilder()
  ],
  onWarn: printer.warn,
  onError: printer.error,
  onSuccess: printer.success
});

async function build(config){
  let start = Date.now();
  let targets = scan('it', watches_options);
  let output = await build_it(targets, targets);
  await write(output);
  printer.success(`Done in ${Date.now() - start}ms`);
}

function dev(config={}){
  
  watch('it',watches_options)
    .on('ready', async (total) => {
      let output = await build_it(total, total);
      await write(output);
    })
    .on('change', async (changed, total) => {
      let output = await build_it(changed, total);
      await write(output);
    })
    .on('error', printer.error);

  
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: 'public'
    });
  });

  server.listen(3000, () => {
    printer.success('Running at http://localhost:3000');
  });

}

exports.build = build;
exports.dev = dev;
