import chalk from "../chalk-deno/source/index.js"

const realConsole = globalThis.console
const isBrowserContext = typeof document != 'undefined' && typeof window != 'undefined'

class LoggerObject {
    constructor() {
        this.stringBuffer = []
        this.attributeBuffer = []
        this.styleString = ""
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
            defineProperty: Reflect.defineProperty,
            getPrototypeOf: Reflect.getPrototypeOf,
            // Object.keys
            ownKeys(original, ...args) { return Reflect.ownKeys(this, ...args) },
            get: (original, key, ...args) => {
                if (key == proxySymbol||key == thisProxySymbol) {return true}
                return Reflect.get(this, key, ...args)
            },
            set: (original, key, ...args) => {
                if (key == proxySymbol||key == thisProxySymbol) {return}
                return Reflect.set(this, key, ...args)
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
    
    log(...others) {
        if (!isBrowserContext) {
            console.log(this.toString().replace("%", "%%"), ...others)
        } else {
            console.log(`%c${this.toString().replace("%", "%%")}`, this.styleString)
            // reset it after logging
            this.styleString = ""
        }
        return this
    }
}

export const vibrance = {
    reset           (...args) { return (new LoggerObject()).reset(...args) },
    bold            (...args) { return (new LoggerObject()).bold(...args) },
    dim             (...args) { return (new LoggerObject()).dim(...args) },
    italic          (...args) { return (new LoggerObject()).italic(...args) },
    underline       (...args) { return (new LoggerObject()).underline(...args) },
    inverse         (...args) { return (new LoggerObject()).inverse(...args) },
    hidden          (...args) { return (new LoggerObject()).hidden(...args) },
    strikethrough   (...args) { return (new LoggerObject()).strikethrough(...args) },
    visible         (...args) { return (new LoggerObject()).visible(...args) },
    black           (...args) { return (new LoggerObject()).black(...args) },
    red             (...args) { return (new LoggerObject()).red(...args) },
    green           (...args) { return (new LoggerObject()).green(...args) },
    yellow          (...args) { return (new LoggerObject()).yellow(...args) },
    blue            (...args) { return (new LoggerObject()).blue(...args) },
    magenta         (...args) { return (new LoggerObject()).magenta(...args) },
    cyan            (...args) { return (new LoggerObject()).cyan(...args) },
    white           (...args) { return (new LoggerObject()).white(...args) },
    blackBright     (...args) { return (new LoggerObject()).blackBright(...args) },
    gray            (...args) { return (new LoggerObject()).gray(...args) },
    grey            (...args) { return (new LoggerObject()).grey(...args) },
    redBright       (...args) { return (new LoggerObject()).redBright(...args) },
    greenBright     (...args) { return (new LoggerObject()).greenBright(...args) },
    yellowBright    (...args) { return (new LoggerObject()).yellowBright(...args) },
    blueBright      (...args) { return (new LoggerObject()).blueBright(...args) },
    magentaBright   (...args) { return (new LoggerObject()).magentaBright(...args) },
    cyanBright      (...args) { return (new LoggerObject()).cyanBright(...args) },
    whiteBright     (...args) { return (new LoggerObject()).whiteBright(...args) },
    bgBlack         (...args) { return (new LoggerObject()).bgBlack(...args) },
    bgRed           (...args) { return (new LoggerObject()).bgRed(...args) },
    bgGreen         (...args) { return (new LoggerObject()).bgGreen(...args) },
    bgYellow        (...args) { return (new LoggerObject()).bgYellow(...args) },
    bgBlue          (...args) { return (new LoggerObject()).bgBlue(...args) },
    bgMagenta       (...args) { return (new LoggerObject()).bgMagenta(...args) },
    bgCyan          (...args) { return (new LoggerObject()).bgCyan(...args) },
    bgWhite         (...args) { return (new LoggerObject()).bgWhite(...args) },
    bgBlackBright   (...args) { return (new LoggerObject()).bgBlackBright(...args) },
    bgGray          (...args) { return (new LoggerObject()).bgGray(...args) },
    bgGrey          (...args) { return (new LoggerObject()).bgGrey(...args) },
    bgRedBright     (...args) { return (new LoggerObject()).bgRedBright(...args) },
    bgGreenBright   (...args) { return (new LoggerObject()).bgGreenBright(...args) },
    bgYellowBright  (...args) { return (new LoggerObject()).bgYellowBright(...args) },
    bgBlueBright    (...args) { return (new LoggerObject()).bgBlueBright(...args) },
    bgMagentaBright (...args) { return (new LoggerObject()).bgMagentaBright(...args) },
    bgCyanBright    (...args) { return (new LoggerObject()).bgCyanBright(...args) },
    bgWhiteBright   (...args) { return (new LoggerObject()).bgWhiteBright(...args) },
}

export var console = {
    reset           (...args) { return (new LoggerObject()).reset(...args).log() },
    bold            (...args) { return (new LoggerObject()).bold(...args).log() },
    dim             (...args) { return (new LoggerObject()).dim(...args).log() },
    italic          (...args) { return (new LoggerObject()).italic(...args).log() },
    underline       (...args) { return (new LoggerObject()).underline(...args).log() },
    inverse         (...args) { return (new LoggerObject()).inverse(...args).log() },
    hidden          (...args) { return (new LoggerObject()).hidden(...args).log() },
    strikethrough   (...args) { return (new LoggerObject()).strikethrough(...args).log() },
    visible         (...args) { return (new LoggerObject()).visible(...args).log() },
    black           (...args) { return (new LoggerObject()).black(...args).log() },
    red             (...args) { return (new LoggerObject()).red(...args).log() },
    green           (...args) { return (new LoggerObject()).green(...args).log() },
    yellow          (...args) { return (new LoggerObject()).yellow(...args).log() },
    blue            (...args) { return (new LoggerObject()).blue(...args).log() },
    magenta         (...args) { return (new LoggerObject()).magenta(...args).log() },
    cyan            (...args) { return (new LoggerObject()).cyan(...args).log() },
    white           (...args) { return (new LoggerObject()).white(...args).log() },
    blackBright     (...args) { return (new LoggerObject()).blackBright(...args).log() },
    gray            (...args) { return (new LoggerObject()).gray(...args).log() },
    grey            (...args) { return (new LoggerObject()).grey(...args).log() },
    redBright       (...args) { return (new LoggerObject()).redBright(...args).log() },
    greenBright     (...args) { return (new LoggerObject()).greenBright(...args).log() },
    yellowBright    (...args) { return (new LoggerObject()).yellowBright(...args).log() },
    blueBright      (...args) { return (new LoggerObject()).blueBright(...args).log() },
    magentaBright   (...args) { return (new LoggerObject()).magentaBright(...args).log() },
    cyanBright      (...args) { return (new LoggerObject()).cyanBright(...args).log() },
    whiteBright     (...args) { return (new LoggerObject()).whiteBright(...args).log() },
    bgBlack         (...args) { return (new LoggerObject()).bgBlack(...args).log() },
    bgRed           (...args) { return (new LoggerObject()).bgRed(...args).log() },
    bgGreen         (...args) { return (new LoggerObject()).bgGreen(...args).log() },
    bgYellow        (...args) { return (new LoggerObject()).bgYellow(...args).log() },
    bgBlue          (...args) { return (new LoggerObject()).bgBlue(...args).log() },
    bgMagenta       (...args) { return (new LoggerObject()).bgMagenta(...args).log() },
    bgCyan          (...args) { return (new LoggerObject()).bgCyan(...args).log() },
    bgWhite         (...args) { return (new LoggerObject()).bgWhite(...args).log() },
    bgBlackBright   (...args) { return (new LoggerObject()).bgBlackBright(...args).log() },
    bgGray          (...args) { return (new LoggerObject()).bgGray(...args).log() },
    bgGrey          (...args) { return (new LoggerObject()).bgGrey(...args).log() },
    bgRedBright     (...args) { return (new LoggerObject()).bgRedBright(...args).log() },
    bgGreenBright   (...args) { return (new LoggerObject()).bgGreenBright(...args).log() },
    bgYellowBright  (...args) { return (new LoggerObject()).bgYellowBright(...args).log() },
    bgBlueBright    (...args) { return (new LoggerObject()).bgBlueBright(...args).log() },
    bgMagentaBright (...args) { return (new LoggerObject()).bgMagentaBright(...args).log() },
    bgCyanBright    (...args) { return (new LoggerObject()).bgCyanBright(...args).log() },
    bgWhiteBright   (...args) { return (new LoggerObject()).bgWhiteBright(...args).log() },
    log: realConsole.log,
    warn: realConsole.warn,
    dir: realConsole.dir,
    time: realConsole.time,
    timeEnd: realConsole.timeEnd,
    timeLog: realConsole.timeLog,
    trace: realConsole.trace,
    assert: realConsole.assert,
    clear: realConsole.clear,
    count: realConsole.count,
    countReset: realConsole.countReset,
    group: realConsole.group,
    groupEnd: realConsole.groupEnd,
    table: realConsole.table,
    debug: realConsole.debug,
    info: realConsole.info,
    dirxml: realConsole.dirxml,
    error: realConsole.error,
    groupCollapsed: realConsole.groupCollapsed,
    Console: realConsole.Console,
    profile: realConsole.profile,
    profileEnd: realConsole.profileEnd,
    timeStamp: realConsole.timeStamp,
    context: realConsole.context,
}


export default vibrance
