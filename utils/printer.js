import kleur from 'kleur'
let { bold, dim, yellow } = kleur

export let printer = {
  print(message, color="blue"){
    if(!this.silent){
      console.log(`${kleur[color](`လ  ${bold("it")}`)} ${dim(':')} ${message}`)
    }
  },
  warn(message){
    this.print(message, "yellow")
    // console.log(yellow("║"))
    // console.log(`${yellow("╚═▷")}  ${message}`)
  },
  error(message, e){
    this.print(message, "red")
  },
  success(message){
    this.print(message, "green")
  },
  info(message){
    this.print(message, "blue")
  },
  benchmarks(arr){
    if(!this.silent){
      if(arr.length){
        console.log(dim("║"))
      }
      arr.forEach(([label, ...facts], i) => {
        console.log(`${i === arr.length - 1 ? dim("╚══") : dim("╟══")} ${label} ${dim("═▷")}  ${facts.join(dim(' -- '))}`)
      });
    }
  },
  silent: false
}

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