# Vibrancy

A CLI colorizing tool, use it in Deno, Node.js or the browswer console (no npm install required!)

```js
const { console, vibrance } = await import('https://cdn.skypack.dev/vibrance@v0.1.1')

console.red("Howdy!") // has console.log() and all the other methods (debug/warn/error/group/etc)
console.blue.underline("Howdy!") 
console.green.bgBlack("Howdy!")

// a dont-import-console way of using vibrancy
console.log(vibrance.blue("This will ").bold.magenta("also").blue(" be logged"))
// alternative way
vibrance.blue("Howdy! ").green("this will be logged").log() // NOTE: needs log at the end!
```


# API

- All the methods can be chained
- All work on both `console` and `vibrance`

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