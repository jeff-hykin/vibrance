module.exports = (chalk)=>{

    const realConsole = globalThis.console
    const isBrowserContext = typeof document != 'undefined' && typeof window != 'undefined'

    // patch the built in console to allow classes to override output
    const originalThing = realConsole
    const proxySymbol = Symbol.for('Proxy')
    const thisProxySymbol = Symbol('thisProxy')
    const symbolForConsoleLog = Symbol.for("console.log")
    globalThis.console = new Proxy(originalThing, {
        defineProperty: Reflect.defineProperty,
        getPrototypeOf: Reflect.getPrototypeOf,
        // Object.keys
        ownKeys(...args) { return Reflect.ownKeys(...args) },
        // function call (original value needs to be a function)
        apply(original, context, ...args) { console.log(args) },
        // new operator (original value needs to be a class)
        construct(...args) {},
        get(original, key, ...args) {
            if (key == proxySymbol||key == thisProxySymbol) {return true}
            // if logging, then 
            if (key == "log") {
                return (...args)=>{
                    realConsole.log(
                        ...args.map(each=>{
                            if (each instanceof Object && each[symbolForConsoleLog] instanceof Function) {
                                return each[symbolForConsoleLog]()
                            }
                            return each
                        })
                    )
                }
            }
            return Reflect.get(original, key, ...args)
        },
        set(original, key, ...args) {
            if (key == proxySymbol||key == thisProxySymbol) {return}
            return Reflect.set(original, key, ...args)
        },
    })

    class LoggerObject {
        constructor() {
            this.id = Math.random()
            this.stringBuffer = []
            this.attributeBuffer = []
            this.styleString = "font-family:monospace;font-size: 1rem;"
            const ifStyleCalledAsMethod = (...args)=>{
                let styler = chalk
                while (this.attributeBuffer.length > 0) {
                    styler = styler[this.attributeBuffer.shift()]
                }
                const string = styler(...args)
                this.stringBuffer.push(string)
                return this
            }
            const originalThing = ifStyleCalledAsMethod
            const proxySymbol = Symbol.for('Proxy')
            const thisProxySymbol = Symbol('thisProxy')
            this.proxyiedReturn = new Proxy(originalThing, {
                defineProperty(original, ...args) { return Reflect.defineProperty(this, ...args) },
                getPrototypeOf(original, ...args) { return Reflect.getPrototypeOf(this, ...args) },
                // Object.keys
                ownKeys(original, ...args) { return Reflect.ownKeys(this, ...args) },
                get: (original, key, ...args) => {
                    if (key == proxySymbol||key == thisProxySymbol) {return true}
                    return this[key]
                },
                set: (original, key, value) => {
                    if (key == proxySymbol||key == thisProxySymbol) {return}
                    return this[key] = value
                },
            })

            // 
            // attempt to add node.js logging
            // 
            try {
                this[require('util').inspect.custom] = this.toString
            } catch (error) {}
        }
        
        get reset           () { this.attributeBuffer.push("reset"          );this.styleString += ";";                                                     return this.proxyiedReturn }
        get bold            () { this.attributeBuffer.push("bold"           );this.styleString += "; font-weight: bold;";                                  return this.proxyiedReturn }
        get dim             () { this.attributeBuffer.push("dim"            );this.styleString += "; opacity: 0.7;";                                       return this.proxyiedReturn }
        get italic          () { this.attributeBuffer.push("italic"         );this.styleString += "; font-style: italic;";                                 return this.proxyiedReturn }
        get underline       () { this.attributeBuffer.push("underline"      );this.styleString += "; text-decoration:underline;";                          return this.proxyiedReturn }
        get inverse         () { this.attributeBuffer.push("inverse"        );this.styleString += "; -webkit-filter: invert(100%); filter: invert(100%);"; return this.proxyiedReturn }
        get hidden          () { this.attributeBuffer.push("hidden"         );this.styleString += "; background-color: transparent; color:transparent;";   return this.proxyiedReturn }
        get strikethrough   () { this.attributeBuffer.push("strikethrough"  );this.styleString += "; text-decoration:line-through;";                       return this.proxyiedReturn }
        get visible         () { this.attributeBuffer.push("visible"        );this.styleString += "; ";                                                    return this.proxyiedReturn }
        
        get black           () { this.attributeBuffer.push("black"          );this.styleString += "; color:#000000;"; return this.proxyiedReturn }
        get red             () { this.attributeBuffer.push("red"            );this.styleString += "; color:#f07178;"; return this.proxyiedReturn }
        get green           () { this.attributeBuffer.push("green"          );this.styleString += "; color:#c3e88d;"; return this.proxyiedReturn }
        get yellow          () { this.attributeBuffer.push("yellow"         );this.styleString += "; color:#ddd790;"; return this.proxyiedReturn }
        get blue            () { this.attributeBuffer.push("blue"           );this.styleString += "; color:#82aaff;"; return this.proxyiedReturn }
        get magenta         () { this.attributeBuffer.push("magenta"        );this.styleString += "; color:#c792ea;"; return this.proxyiedReturn }
        get cyan            () { this.attributeBuffer.push("cyan"           );this.styleString += "; color:#64bac5;"; return this.proxyiedReturn }
        get white           () { this.attributeBuffer.push("white"          );this.styleString += "; color:#c7cbcd;"; return this.proxyiedReturn }
        get blackBright     () { this.attributeBuffer.push("blackBright"    );this.styleString += "; color:#546e7a;"; return this.proxyiedReturn }
        get gray            () { this.attributeBuffer.push("gray"           );this.styleString += "; color:#546e7a;"; return this.proxyiedReturn }
        get grey            () { this.attributeBuffer.push("grey"           );this.styleString += "; color:#546e7a;"; return this.proxyiedReturn }
        get redBright       () { this.attributeBuffer.push("redBright"      );this.styleString += "; color:#ff5572;"; return this.proxyiedReturn }
        get greenBright     () { this.attributeBuffer.push("greenBright"    );this.styleString += "; color:#04d895;"; return this.proxyiedReturn }
        get yellowBright    () { this.attributeBuffer.push("yellowBright"   );this.styleString += "; color:#fec355;"; return this.proxyiedReturn }
        get blueBright      () { this.attributeBuffer.push("blueBright"     );this.styleString += "; color:#00aeff;"; return this.proxyiedReturn }
        get magentaBright   () { this.attributeBuffer.push("magentaBright"  );this.styleString += "; color:#e57eb3;"; return this.proxyiedReturn }
        get cyanBright      () { this.attributeBuffer.push("cyanBright"     );this.styleString += "; color:#89ddff;"; return this.proxyiedReturn }
        get whiteBright     () { this.attributeBuffer.push("whiteBright"    );this.styleString += "; color:#ffffff;"; return this.proxyiedReturn }

        get bgBlack         () { this.attributeBuffer.push("bgBlack"        );this.styleString += "; background-color:#000000;"; return this.proxyiedReturn }
        get bgRed           () { this.attributeBuffer.push("bgRed"          );this.styleString += "; background-color:#f07178;"; return this.proxyiedReturn }
        get bgGreen         () { this.attributeBuffer.push("bgGreen"        );this.styleString += "; background-color:#c3e88d;"; return this.proxyiedReturn }
        get bgYellow        () { this.attributeBuffer.push("bgYellow"       );this.styleString += "; background-color:#ddd790;"; return this.proxyiedReturn }
        get bgBlue          () { this.attributeBuffer.push("bgBlue"         );this.styleString += "; background-color:#82aaff;"; return this.proxyiedReturn }
        get bgMagenta       () { this.attributeBuffer.push("bgMagenta"      );this.styleString += "; background-color:#c792ea;"; return this.proxyiedReturn }
        get bgCyan          () { this.attributeBuffer.push("bgCyan"         );this.styleString += "; background-color:#64bac5;"; return this.proxyiedReturn }
        get bgWhite         () { this.attributeBuffer.push("bgWhite"        );this.styleString += "; background-color:#c7cbcd;"; return this.proxyiedReturn }
        get bgBlackBright   () { this.attributeBuffer.push("bgBlackBright"  );this.styleString += "; background-color:#546e7a;"; return this.proxyiedReturn }
        get bgGray          () { this.attributeBuffer.push("bgGray"         );this.styleString += "; background-color:#546e7a;"; return this.proxyiedReturn }
        get bgGrey          () { this.attributeBuffer.push("bgGrey"         );this.styleString += "; background-color:#546e7a;"; return this.proxyiedReturn }
        get bgRedBright     () { this.attributeBuffer.push("bgRedBright"    );this.styleString += "; background-color:#ff5572;"; return this.proxyiedReturn }
        get bgGreenBright   () { this.attributeBuffer.push("bgGreenBright"  );this.styleString += "; background-color:#04d895;"; return this.proxyiedReturn }
        get bgYellowBright  () { this.attributeBuffer.push("bgYellowBright" );this.styleString += "; background-color:#fec355;"; return this.proxyiedReturn }
        get bgBlueBright    () { this.attributeBuffer.push("bgBlueBright"   );this.styleString += "; background-color:#00aeff;"; return this.proxyiedReturn }
        get bgMagentaBright () { this.attributeBuffer.push("bgMagentaBright");this.styleString += "; background-color:#e57eb3;"; return this.proxyiedReturn }
        get bgCyanBright    () { this.attributeBuffer.push("bgCyanBright"   );this.styleString += "; background-color:#89ddff;"; return this.proxyiedReturn }
        get bgWhiteBright   () { this.attributeBuffer.push("bgWhiteBright"  );this.styleString += "; background-color:#ffffff;"; return this.proxyiedReturn }
        
        toString() {
            return this.stringBuffer.join("")
        }
        
        [Symbol.for("console.log")]() {
            const result = this.toString()
            // reset because its about to be logged
            this.styleString = ""
            this.stringBuffer = []
            this.attributeBuffer = []
            return result
        }

        log(...others) {
            if (!isBrowserContext) {
                realConsole.log(this.toString().replace("%", "%%"), ...others)
            } else {
                realConsole.log(`%c${this.toString().replace("%", "%%")}`, this.styleString)
            }
            // reset it after logging
            this.styleString = ""
            this.stringBuffer = []
            this.attributeBuffer = []
            return this
        }
    }

    class ConsoleObject extends LoggerObject {
        constructor() {
            super()
            // 
            // only difference: proxy object executes .log() when called as a function
            // 
            const ifStyleCalledAsMethod = (...args)=>{
                let styler = chalk
                while (this.attributeBuffer.length > 0) {
                    styler = styler[this.attributeBuffer.shift()]
                }
                const string = styler(...args)
                this.stringBuffer.push(string)
                this.log()
                return this
            }
            const originalThing = ifStyleCalledAsMethod
            const proxySymbol = Symbol.for('Proxy')
            const thisProxySymbol = Symbol('thisProxy')
            this.proxyiedReturn = new Proxy(originalThing, {
                defineProperty(original, ...args) { return Reflect.defineProperty(this, ...args) },
                getPrototypeOf(original, ...args) { return Reflect.getPrototypeOf(this, ...args) },
                // Object.keys
                ownKeys(original, ...args) { return Reflect.ownKeys(this, ...args) },
                get: (original, key, ...args) => {
                    if (key == proxySymbol||key == thisProxySymbol) {return true}
                    return this[key]
                },
                set: (original, key, value) => {
                    if (key == proxySymbol||key == thisProxySymbol) {return}
                    return this[key] = value
                },
            })

            // 
            // attempt to add node.js logging
            // 
            try {
                this[require('util').inspect.custom] = this.toString
            } catch (error) {}
        }
    }

    const wrapAroundGet = (number, list) => list[(number % list.length + list.length) % list.length]

    let console = {
        get reset           () { return (new ConsoleObject()).reset },
        get bold            () { return (new ConsoleObject()).bold },
        get dim             () { return (new ConsoleObject()).dim },
        get italic          () { return (new ConsoleObject()).italic },
        get underline       () { return (new ConsoleObject()).underline },
        get inverse         () { return (new ConsoleObject()).inverse },
        get hidden          () { return (new ConsoleObject()).hidden },
        get strikethrough   () { return (new ConsoleObject()).strikethrough },
        get visible         () { return (new ConsoleObject()).visible },
        get black           () { return (new ConsoleObject()).black },
        get red             () { return (new ConsoleObject()).red },
        get green           () { return (new ConsoleObject()).green },
        get yellow          () { return (new ConsoleObject()).yellow },
        get blue            () { return (new ConsoleObject()).blue },
        get magenta         () { return (new ConsoleObject()).magenta },
        get cyan            () { return (new ConsoleObject()).cyan },
        get white           () { return (new ConsoleObject()).white },
        get blackBright     () { return (new ConsoleObject()).blackBright },
        get gray            () { return (new ConsoleObject()).gray },
        get grey            () { return (new ConsoleObject()).grey },
        get redBright       () { return (new ConsoleObject()).redBright },
        get greenBright     () { return (new ConsoleObject()).greenBright },
        get yellowBright    () { return (new ConsoleObject()).yellowBright },
        get blueBright      () { return (new ConsoleObject()).blueBright },
        get magentaBright   () { return (new ConsoleObject()).magentaBright },
        get cyanBright      () { return (new ConsoleObject()).cyanBright },
        get whiteBright     () { return (new ConsoleObject()).whiteBright },
        get bgBlack         () { return (new ConsoleObject()).bgBlack },
        get bgRed           () { return (new ConsoleObject()).bgRed },
        get bgGreen         () { return (new ConsoleObject()).bgGreen },
        get bgYellow        () { return (new ConsoleObject()).bgYellow },
        get bgBlue          () { return (new ConsoleObject()).bgBlue },
        get bgMagenta       () { return (new ConsoleObject()).bgMagenta },
        get bgCyan          () { return (new ConsoleObject()).bgCyan },
        get bgWhite         () { return (new ConsoleObject()).bgWhite },
        get bgBlackBright   () { return (new ConsoleObject()).bgBlackBright },
        get bgGray          () { return (new ConsoleObject()).bgGray },
        get bgGrey          () { return (new ConsoleObject()).bgGrey },
        get bgRedBright     () { return (new ConsoleObject()).bgRedBright },
        get bgGreenBright   () { return (new ConsoleObject()).bgGreenBright },
        get bgYellowBright  () { return (new ConsoleObject()).bgYellowBright },
        get bgBlueBright    () { return (new ConsoleObject()).bgBlueBright },
        get bgMagentaBright () { return (new ConsoleObject()).bgMagentaBright },
        get bgCyanBright    () { return (new ConsoleObject()).bgCyanBright },
        get bgWhiteBright   () { return (new ConsoleObject()).bgWhiteBright },
        log: globalThis.console.log,
        warn: globalThis.console.warn,
        dir: globalThis.console.dir,
        time: globalThis.console.time,
        timeEnd: globalThis.console.timeEnd,
        timeLog: globalThis.console.timeLog,
        trace: globalThis.console.trace,
        assert: globalThis.console.assert,
        clear: globalThis.console.clear,
        count: globalThis.console.count,
        countReset: globalThis.console.countReset,
        group: globalThis.console.group,
        groupEnd: globalThis.console.groupEnd,
        table: globalThis.console.table,
        debug: globalThis.console.debug,
        info: globalThis.console.info,
        dirxml: globalThis.console.dirxml,
        error: globalThis.console.error,
        groupCollapsed: globalThis.console.groupCollapsed,
        Console: globalThis.console.Console,
        profile: globalThis.console.profile,
        profileEnd: globalThis.console.profileEnd,
        timeStamp: globalThis.console.timeStamp,
        context: globalThis.console.context,
        get howdy() {
            if (!isBrowserContext) {
                console.dim.blackBright.bgWhite(`  --------------------------------------------------------------------------------  `)
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                              ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("   __    __                                      __              /\\\`\\         ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("  /\\ \\  /\\ \\                                    /\\ \\             \\ \\ \\        ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("  \\ \\ \\_\`_\\ \\                                   \\ \\ \\             \\ \\ \\       ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("   \\ \\  ___  \\     ,------,   /\\~\\ /\\~\\/\\~\\     ,\\_\\ \\     __  __  \\ \\ \\      ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("    \\ \\ \\_/ \\ \\   /\\ .---, \\  \\ \\ \\\\ \\ \\ \\ \\   / .__, \\   /\\ \\/\\ \\  \\ \\_\\     ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("     \\ \\ \\ \\ \\ \\  \\ \\ \\___\\ \\  \\ \\ \\_/  \\_/ \\ /\\ \\  /\\ \\  \\ \\ \\_\\ \\  \\/./     ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("      \\ \\_\\ \\ \\_\\  \\ \\______/   \\ \\____^____/ \\ \\_____,_\\  \\/\`____ \\  /\\\`\`\`\\  ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("       \\/_/  \\/_/   \`._____/     \\/___//___/   \\/___,_ /    \`/___/\\ \\ \\/___/  ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                 \\_| \\        ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                /\\___/        ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                \\/__/         ").bgWhite(" | "))
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                              ").bgWhite(" | "))
                console.dim.blackBright.bgWhite(`  --------------------------------------------------------------------------------  `)
            } else {
                console.log(
                    `%c${"Howdy!"}`,
                    `
                    display: inline-block;
                    padding: 2rem;
                    font-size: 11vmin;
                    font-family: Helvetica, sans-serif;
                    color: white;
                    font-weight: bold;
                    background-size: cover;
                    background-size: 40% 120%;
                    background-color: #782345;
                    text-align: center;
                    min-width: 100%;
                    line-height: calc(10rem + 15vw);
                    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
                    background: linear-gradient(135deg, #eceddc 25%, transparent 25%) 50px 0, linear-gradient(225deg, #eceddc 25%, transparent 25%) 50px 0, linear-gradient(315deg, #eceddc 25%, transparent 25%), linear-gradient(45deg, #eceddc 25%, transparent 25%);
                    background-size: 17px;
                    background-color: #782345;
                    border: 2rem solid #7823459F;
                    `
                )
            }
        },
        secretRainbow: (...args)=>{
            if (isBrowserContext) {
                realConsole.log(`%c${args.join("").replace("%", "%%")}`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
            } else {
                const rainbowColors = [
                    'red',
                    'redBright',
                    'yellow',
                    'yellowBright',
                    'green',
                    'greenBright',
                    'cyan',
                    'cyanBright',
                    'blue',
                    'blueBright',
                    'magenta',
                    'magentaBright',
                ]
                let number = 0
                let bigString = ""
                for (const eachChar of args.join("")) {
                    number += 1
                    bigString += vibrance[wrapAroundGet(number, rainbowColors)](eachChar).toString()
                }
                realConsole.log(bigString.replace("%", "%%"))
            }
        }
    }

    const vibrance = {
        clearColorsFrom(string) {
            // https://stackoverflow.com/questions/17998978/removing-colors-from-output
            return string.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "")
        },
        get reset           () { return (new LoggerObject()).reset },
        get bold            () { return (new LoggerObject()).bold },
        get dim             () { return (new LoggerObject()).dim },
        get italic          () { return (new LoggerObject()).italic },
        get underline       () { return (new LoggerObject()).underline },
        get inverse         () { return (new LoggerObject()).inverse },
        get hidden          () { return (new LoggerObject()).hidden },
        get strikethrough   () { return (new LoggerObject()).strikethrough },
        get visible         () { return (new LoggerObject()).visible },
        get black           () { return (new LoggerObject()).black },
        get red             () { return (new LoggerObject()).red },
        get green           () { return (new LoggerObject()).green },
        get yellow          () { return (new LoggerObject()).yellow },
        get blue            () { return (new LoggerObject()).blue },
        get magenta         () { return (new LoggerObject()).magenta },
        get cyan            () { return (new LoggerObject()).cyan },
        get white           () { return (new LoggerObject()).white },
        get blackBright     () { return (new LoggerObject()).blackBright },
        get gray            () { return (new LoggerObject()).gray },
        get grey            () { return (new LoggerObject()).grey },
        get redBright       () { return (new LoggerObject()).redBright },
        get greenBright     () { return (new LoggerObject()).greenBright },
        get yellowBright    () { return (new LoggerObject()).yellowBright },
        get blueBright      () { return (new LoggerObject()).blueBright },
        get magentaBright   () { return (new LoggerObject()).magentaBright },
        get cyanBright      () { return (new LoggerObject()).cyanBright },
        get whiteBright     () { return (new LoggerObject()).whiteBright },
        get bgBlack         () { return (new LoggerObject()).bgBlack },
        get bgRed           () { return (new LoggerObject()).bgRed },
        get bgGreen         () { return (new LoggerObject()).bgGreen },
        get bgYellow        () { return (new LoggerObject()).bgYellow },
        get bgBlue          () { return (new LoggerObject()).bgBlue },
        get bgMagenta       () { return (new LoggerObject()).bgMagenta },
        get bgCyan          () { return (new LoggerObject()).bgCyan },
        get bgWhite         () { return (new LoggerObject()).bgWhite },
        get bgBlackBright   () { return (new LoggerObject()).bgBlackBright },
        get bgGray          () { return (new LoggerObject()).bgGray },
        get bgGrey          () { return (new LoggerObject()).bgGrey },
        get bgRedBright     () { return (new LoggerObject()).bgRedBright },
        get bgGreenBright   () { return (new LoggerObject()).bgGreenBright },
        get bgYellowBright  () { return (new LoggerObject()).bgYellowBright },
        get bgBlueBright    () { return (new LoggerObject()).bgBlueBright },
        get bgMagentaBright () { return (new LoggerObject()).bgMagentaBright },
        get bgCyanBright    () { return (new LoggerObject()).bgCyanBright },
        get bgWhiteBright   () { return (new LoggerObject()).bgWhiteBright },
        console,
    }
    // add self reference
    vibrance.vibrance = vibrance

    return vibrance
}