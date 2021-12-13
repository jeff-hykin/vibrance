# Vibrancy

A CLI terminal helper for Deno, and a modifiction of chalk.js for deno.

```js
const { console, vibrance } = await import('https://cdn.skypack.dev/vibrance@v0.0.33')

console.red("Howdy!") // has console.log() and all the other methods (debug/warn/error/group/etc)
console.blue.underline("Howdy!") 
console.green.bgBlack("Howdy!")

// alternatively use vibrancy
vibrance.blue("Howdy! ").green("this will be logged").log() // NOTE: needs log at the end!
// a different way of using vibrancy
console.log(vibrance.blue("This will ").bold("also").blue(" be logged"))
```


The API is extremely straightforwards, just call the methods and 

```js
// colors
vibrance.black("Howdy!")
vibrance.red("Howdy!")
vibrance.green("Howdy!")
vibrance.yellow("Howdy!")
vibrance.blue("Howdy!")
vibrance.magenta("Howdy!")
vibrance.cyan("Howdy!")
vibrance.white("Howdy!")
vibrance.blackBright("Howdy!")
vibrance.gray("Howdy!")
vibrance.grey("Howdy!")
vibrance.redBright("Howdy!")
vibrance.greenBright("Howdy!")
vibrance.yellowBright("Howdy!")
vibrance.blueBright("Howdy!")
vibrance.magentaBright("Howdy!")
vibrance.cyanBright("Howdy!")
vibrance.whiteBright("Howdy!")
// background colors
vibrance.bgBlack("Howdy!")
vibrance.bgRed("Howdy!")
vibrance.bgGreen("Howdy!")
vibrance.bgYellow("Howdy!")
vibrance.bgBlue("Howdy!")
vibrance.bgMagenta("Howdy!")
vibrance.bgCyan("Howdy!")
vibrance.bgWhite("Howdy!")
vibrance.bgBlackBright("Howdy!")
vibrance.bgGray("Howdy!")
vibrance.bgGrey("Howdy!")
vibrance.bgRedBright("Howdy!")
vibrance.bgGreenBright("Howdy!")
vibrance.bgYellowBright("Howdy!")
vibrance.bgBlueBright("Howdy!")
vibrance.bgMagentaBright("Howdy!")
vibrance.bgCyanBright("Howdy!")
vibrance.bgWhiteBright("Howdy!")
// specials
vibrance.reset()
vibrance.bold()
vibrance.dim()
vibrance.italic()
vibrance.underline()
vibrance.inverse()
vibrance.hidden()
vibrance.strikethrough()
vibrance.visible()
```