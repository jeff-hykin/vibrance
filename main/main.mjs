const { chalk } = require("./chalk_deno/source/index.js")

class LoggerObject {
    constructor() {
        this.stringBuffer = []
        this.attributeBuffer = []
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
                console.debug(`key is:`,key)
                return Reflect.get(this, key, ...args)
            },
            set: (original, key, ...args) => {
                if (key == proxySymbol||key == thisProxySymbol) {return}
                return Reflect.set(this, key, ...args)
            },
        })
        
    }
    
    get reset           () { this.attributeBuffer.push("reset"          ); return this.proxyiedReturn }
    get bold            () { this.attributeBuffer.push("bold"           ); return this.proxyiedReturn }
    get dim             () { this.attributeBuffer.push("dim"            ); return this.proxyiedReturn }
    get italic          () { this.attributeBuffer.push("italic"         ); return this.proxyiedReturn }
    get underline       () { this.attributeBuffer.push("underline"      ); return this.proxyiedReturn }
    get inverse         () { this.attributeBuffer.push("inverse"        ); return this.proxyiedReturn }
    get hidden          () { this.attributeBuffer.push("hidden"         ); return this.proxyiedReturn }
    get strikethrough   () { this.attributeBuffer.push("strikethrough"  ); return this.proxyiedReturn }
    get visible         () { this.attributeBuffer.push("visible"        ); return this.proxyiedReturn }
    get black           () { this.attributeBuffer.push("black"          ); return this.proxyiedReturn }
    get red             () { this.attributeBuffer.push("red"            ); return this.proxyiedReturn }
    get green           () { this.attributeBuffer.push("green"          ); return this.proxyiedReturn }
    get yellow          () { this.attributeBuffer.push("yellow"         ); return this.proxyiedReturn }
    get blue            () { this.attributeBuffer.push("blue"           ); return this.proxyiedReturn }
    get magenta         () { this.attributeBuffer.push("magenta"        ); return this.proxyiedReturn }
    get cyan            () { this.attributeBuffer.push("cyan"           ); return this.proxyiedReturn }
    get white           () { this.attributeBuffer.push("white"          ); return this.proxyiedReturn }
    get blackBright     () { this.attributeBuffer.push("blackBright"    ); return this.proxyiedReturn }
    get gray            () { this.attributeBuffer.push("gray"           ); return this.proxyiedReturn }
    get grey            () { this.attributeBuffer.push("grey"           ); return this.proxyiedReturn }
    get redBright       () { this.attributeBuffer.push("redBright"      ); return this.proxyiedReturn }
    get greenBright     () { this.attributeBuffer.push("greenBright"    ); return this.proxyiedReturn }
    get yellowBright    () { this.attributeBuffer.push("yellowBright"   ); return this.proxyiedReturn }
    get blueBright      () { this.attributeBuffer.push("blueBright"     ); return this.proxyiedReturn }
    get magentaBright   () { this.attributeBuffer.push("magentaBright"  ); return this.proxyiedReturn }
    get cyanBright      () { this.attributeBuffer.push("cyanBright"     ); return this.proxyiedReturn }
    get whiteBright     () { this.attributeBuffer.push("whiteBright"    ); return this.proxyiedReturn }
    get bgBlack         () { this.attributeBuffer.push("bgBlack"        ); return this.proxyiedReturn }
    get bgRed           () { this.attributeBuffer.push("bgRed"          ); return this.proxyiedReturn }
    get bgGreen         () { this.attributeBuffer.push("bgGreen"        ); return this.proxyiedReturn }
    get bgYellow        () { this.attributeBuffer.push("bgYellow"       ); return this.proxyiedReturn }
    get bgBlue          () { this.attributeBuffer.push("bgBlue"         ); return this.proxyiedReturn }
    get bgMagenta       () { this.attributeBuffer.push("bgMagenta"      ); return this.proxyiedReturn }
    get bgCyan          () { this.attributeBuffer.push("bgCyan"         ); return this.proxyiedReturn }
    get bgWhite         () { this.attributeBuffer.push("bgWhite"        ); return this.proxyiedReturn }
    get bgBlackBright   () { this.attributeBuffer.push("bgBlackBright"  ); return this.proxyiedReturn }
    get bgGray          () { this.attributeBuffer.push("bgGray"         ); return this.proxyiedReturn }
    get bgGrey          () { this.attributeBuffer.push("bgGrey"         ); return this.proxyiedReturn }
    get bgRedBright     () { this.attributeBuffer.push("bgRedBright"    ); return this.proxyiedReturn }
    get bgGreenBright   () { this.attributeBuffer.push("bgGreenBright"  ); return this.proxyiedReturn }
    get bgYellowBright  () { this.attributeBuffer.push("bgYellowBright" ); return this.proxyiedReturn }
    get bgBlueBright    () { this.attributeBuffer.push("bgBlueBright"   ); return this.proxyiedReturn }
    get bgMagentaBright () { this.attributeBuffer.push("bgMagentaBright"); return this.proxyiedReturn }
    get bgCyanBright    () { this.attributeBuffer.push("bgCyanBright"   ); return this.proxyiedReturn }
    get bgWhiteBright   () { this.attributeBuffer.push("bgWhiteBright"  ); return this.proxyiedReturn }

    toString() {
        return buffer.join("")
    }
    
    log() {
        console.log(this.stringBuffer.join("").replace("%", "%%"), ...others)
        return this
    }
}

export const Logger = {
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

export default Logger
