# Vibrancy

A CLI terminal helper for Deno, and a modifiction of chalk.js for deno.

```js
const { Logger } = await import('https://cdn.skypack.dev/vibrance@v0.0.5')

Logger.blue("Howdy!").green("this will automatically be logged")
```


The API is extremely straightforwards, just call the methods and 

```js
// colors
Logger.black()
Logger.red()
Logger.green()
Logger.yellow()
Logger.blue()
Logger.magenta()
Logger.cyan()
Logger.white()
Logger.blackBright()
Logger.gray()
Logger.grey()
Logger.redBright()
Logger.greenBright()
Logger.yellowBright()
Logger.blueBright()
Logger.magentaBright()
Logger.cyanBright()
Logger.whiteBright()
// background colors
Logger.bgBlack()
Logger.bgRed()
Logger.bgGreen()
Logger.bgYellow()
Logger.bgBlue()
Logger.bgMagenta()
Logger.bgCyan()
Logger.bgWhite()
Logger.bgBlackBright()
Logger.bgGray()
Logger.bgGrey()
Logger.bgRedBright()
Logger.bgGreenBright()
Logger.bgYellowBright()
Logger.bgBlueBright()
Logger.bgMagentaBright()
Logger.bgCyanBright()
Logger.bgWhiteBright()
// specials
Logger.reset()
Logger.bold()
Logger.dim()
Logger.italic()
Logger.underline()
Logger.inverse()
Logger.hidden()
Logger.strikethrough()
Logger.visible()
```