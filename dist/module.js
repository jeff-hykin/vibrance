function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
parcelRequire.register("cF4et", function(module, exports) {

var $61gyR = parcelRequire("61gyR");

var $lNjAV = parcelRequire("lNjAV");
const chalk = "object" === 'object' && module instanceof Object && module.exports instanceof Object ? $61gyR : $lNjAV;
const realConsole = globalThis.console;
const isBrowserContext = typeof document != 'undefined' && typeof window != 'undefined';
// patch the built in console to allow classes to override output
const originalThing = realConsole;
const proxySymbol = Symbol.for('Proxy');
const thisProxySymbol = Symbol('thisProxy');
const symbolForConsoleLog = Symbol.for("console.log");
globalThis.console = new Proxy(originalThing, {
    defineProperty: Reflect.defineProperty,
    getPrototypeOf: Reflect.getPrototypeOf,
    // Object.keys
    ownKeys (...args) {
        return Reflect.ownKeys(...args);
    },
    // function call (original value needs to be a function)
    apply (original, context, ...args) {
        console.log(args);
    },
    // new operator (original value needs to be a class)
    construct (...args) {
    },
    get (original, key, ...args) {
        if (key == proxySymbol || key == thisProxySymbol) return true;
        // if logging, then 
        if (key == "log") return (...args)=>{
            realConsole.log(...args.map((each)=>{
                if (each instanceof Object && each[symbolForConsoleLog] instanceof Function) return each[symbolForConsoleLog]();
                return each;
            }));
        };
        return Reflect.get(original, key, ...args);
    },
    set (original, key, ...args) {
        if (key == proxySymbol || key == thisProxySymbol) return;
        return Reflect.set(original, key, ...args);
    }
});

var $3xbWd = parcelRequire("3xbWd");
class LoggerObject {
    constructor(){
        this.id = Math.random();
        this.stringBuffer = [];
        this.attributeBuffer = [];
        this.styleString = "font-family:monospace;font-size: 1rem;";
        const ifStyleCalledAsMethod = (...args)=>{
            let styler = chalk;
            while(this.attributeBuffer.length > 0)styler = styler[this.attributeBuffer.shift()];
            const string = styler(...args);
            this.stringBuffer.push(string);
            return this;
        };
        const originalThing1 = ifStyleCalledAsMethod;
        const proxySymbol1 = Symbol.for('Proxy');
        const thisProxySymbol1 = Symbol('thisProxy');
        this.proxyiedReturn = new Proxy(originalThing1, {
            defineProperty (original, ...args) {
                return Reflect.defineProperty(this, ...args);
            },
            getPrototypeOf (original, ...args) {
                return Reflect.getPrototypeOf(this, ...args);
            },
            // Object.keys
            ownKeys (original, ...args) {
                return Reflect.ownKeys(this, ...args);
            },
            get: (original, key, ...args)=>{
                if (key == proxySymbol1 || key == thisProxySymbol1) return true;
                return this[key];
            },
            set: (original, key, value)=>{
                if (key == proxySymbol1 || key == thisProxySymbol1) return;
                return this[key] = value;
            }
        });
        // 
        // attempt to add node.js logging
        // 
        try {
            this[$3xbWd.inspect.custom] = this.toString;
        } catch (error) {
        }
    }
    get reset() {
        this.attributeBuffer.push("reset");
        this.styleString += ";";
        return this.proxyiedReturn;
    }
    get bold() {
        this.attributeBuffer.push("bold");
        this.styleString += "; font-weight: bold;";
        return this.proxyiedReturn;
    }
    get dim() {
        this.attributeBuffer.push("dim");
        this.styleString += "; opacity: 0.7;";
        return this.proxyiedReturn;
    }
    get italic() {
        this.attributeBuffer.push("italic");
        this.styleString += "; font-style: italic;";
        return this.proxyiedReturn;
    }
    get underline() {
        this.attributeBuffer.push("underline");
        this.styleString += "; text-decoration:underline;";
        return this.proxyiedReturn;
    }
    get inverse() {
        this.attributeBuffer.push("inverse");
        this.styleString += "; -webkit-filter: invert(100%); filter: invert(100%);";
        return this.proxyiedReturn;
    }
    get hidden() {
        this.attributeBuffer.push("hidden");
        this.styleString += "; background-color: transparent; color:transparent;";
        return this.proxyiedReturn;
    }
    get strikethrough() {
        this.attributeBuffer.push("strikethrough");
        this.styleString += "; text-decoration:line-through;";
        return this.proxyiedReturn;
    }
    get visible() {
        this.attributeBuffer.push("visible");
        this.styleString += "; ";
        return this.proxyiedReturn;
    }
    get black() {
        this.attributeBuffer.push("black");
        this.styleString += "; color:#000000;";
        return this.proxyiedReturn;
    }
    get red() {
        this.attributeBuffer.push("red");
        this.styleString += "; color:#f07178;";
        return this.proxyiedReturn;
    }
    get green() {
        this.attributeBuffer.push("green");
        this.styleString += "; color:#c3e88d;";
        return this.proxyiedReturn;
    }
    get yellow() {
        this.attributeBuffer.push("yellow");
        this.styleString += "; color:#ddd790;";
        return this.proxyiedReturn;
    }
    get blue() {
        this.attributeBuffer.push("blue");
        this.styleString += "; color:#82aaff;";
        return this.proxyiedReturn;
    }
    get magenta() {
        this.attributeBuffer.push("magenta");
        this.styleString += "; color:#c792ea;";
        return this.proxyiedReturn;
    }
    get cyan() {
        this.attributeBuffer.push("cyan");
        this.styleString += "; color:#64bac5;";
        return this.proxyiedReturn;
    }
    get white() {
        this.attributeBuffer.push("white");
        this.styleString += "; color:#c7cbcd;";
        return this.proxyiedReturn;
    }
    get blackBright() {
        this.attributeBuffer.push("blackBright");
        this.styleString += "; color:#546e7a;";
        return this.proxyiedReturn;
    }
    get gray() {
        this.attributeBuffer.push("gray");
        this.styleString += "; color:#546e7a;";
        return this.proxyiedReturn;
    }
    get grey() {
        this.attributeBuffer.push("grey");
        this.styleString += "; color:#546e7a;";
        return this.proxyiedReturn;
    }
    get redBright() {
        this.attributeBuffer.push("redBright");
        this.styleString += "; color:#ff5572;";
        return this.proxyiedReturn;
    }
    get greenBright() {
        this.attributeBuffer.push("greenBright");
        this.styleString += "; color:#04d895;";
        return this.proxyiedReturn;
    }
    get yellowBright() {
        this.attributeBuffer.push("yellowBright");
        this.styleString += "; color:#fec355;";
        return this.proxyiedReturn;
    }
    get blueBright() {
        this.attributeBuffer.push("blueBright");
        this.styleString += "; color:#00aeff;";
        return this.proxyiedReturn;
    }
    get magentaBright() {
        this.attributeBuffer.push("magentaBright");
        this.styleString += "; color:#e57eb3;";
        return this.proxyiedReturn;
    }
    get cyanBright() {
        this.attributeBuffer.push("cyanBright");
        this.styleString += "; color:#89ddff;";
        return this.proxyiedReturn;
    }
    get whiteBright() {
        this.attributeBuffer.push("whiteBright");
        this.styleString += "; color:#ffffff;";
        return this.proxyiedReturn;
    }
    get bgBlack() {
        this.attributeBuffer.push("bgBlack");
        this.styleString += "; background-color:#000000;";
        return this.proxyiedReturn;
    }
    get bgRed() {
        this.attributeBuffer.push("bgRed");
        this.styleString += "; background-color:#f07178;";
        return this.proxyiedReturn;
    }
    get bgGreen() {
        this.attributeBuffer.push("bgGreen");
        this.styleString += "; background-color:#c3e88d;";
        return this.proxyiedReturn;
    }
    get bgYellow() {
        this.attributeBuffer.push("bgYellow");
        this.styleString += "; background-color:#ddd790;";
        return this.proxyiedReturn;
    }
    get bgBlue() {
        this.attributeBuffer.push("bgBlue");
        this.styleString += "; background-color:#82aaff;";
        return this.proxyiedReturn;
    }
    get bgMagenta() {
        this.attributeBuffer.push("bgMagenta");
        this.styleString += "; background-color:#c792ea;";
        return this.proxyiedReturn;
    }
    get bgCyan() {
        this.attributeBuffer.push("bgCyan");
        this.styleString += "; background-color:#64bac5;";
        return this.proxyiedReturn;
    }
    get bgWhite() {
        this.attributeBuffer.push("bgWhite");
        this.styleString += "; background-color:#c7cbcd;";
        return this.proxyiedReturn;
    }
    get bgBlackBright() {
        this.attributeBuffer.push("bgBlackBright");
        this.styleString += "; background-color:#546e7a;";
        return this.proxyiedReturn;
    }
    get bgGray() {
        this.attributeBuffer.push("bgGray");
        this.styleString += "; background-color:#546e7a;";
        return this.proxyiedReturn;
    }
    get bgGrey() {
        this.attributeBuffer.push("bgGrey");
        this.styleString += "; background-color:#546e7a;";
        return this.proxyiedReturn;
    }
    get bgRedBright() {
        this.attributeBuffer.push("bgRedBright");
        this.styleString += "; background-color:#ff5572;";
        return this.proxyiedReturn;
    }
    get bgGreenBright() {
        this.attributeBuffer.push("bgGreenBright");
        this.styleString += "; background-color:#04d895;";
        return this.proxyiedReturn;
    }
    get bgYellowBright() {
        this.attributeBuffer.push("bgYellowBright");
        this.styleString += "; background-color:#fec355;";
        return this.proxyiedReturn;
    }
    get bgBlueBright() {
        this.attributeBuffer.push("bgBlueBright");
        this.styleString += "; background-color:#00aeff;";
        return this.proxyiedReturn;
    }
    get bgMagentaBright() {
        this.attributeBuffer.push("bgMagentaBright");
        this.styleString += "; background-color:#e57eb3;";
        return this.proxyiedReturn;
    }
    get bgCyanBright() {
        this.attributeBuffer.push("bgCyanBright");
        this.styleString += "; background-color:#89ddff;";
        return this.proxyiedReturn;
    }
    get bgWhiteBright() {
        this.attributeBuffer.push("bgWhiteBright");
        this.styleString += "; background-color:#ffffff;";
        return this.proxyiedReturn;
    }
    toString() {
        return this.stringBuffer.join("");
    }
    [Symbol.for("console.log")]() {
        const result = this.toString();
        // reset because its about to be logged
        this.styleString = "";
        this.stringBuffer = [];
        this.attributeBuffer = [];
        return result;
    }
    log(...others) {
        if (!isBrowserContext) realConsole.log(this.toString().replace("%", "%%"), ...others);
        else realConsole.log(`%c${this.toString().replace("%", "%%")}`, this.styleString);
        // reset it after logging
        this.styleString = "";
        this.stringBuffer = [];
        this.attributeBuffer = [];
        return this;
    }
}

var $3xbWd = parcelRequire("3xbWd");
class ConsoleObject extends LoggerObject {
    constructor(){
        super();
        // 
        // only difference: proxy object executes .log() when called as a function
        // 
        const ifStyleCalledAsMethod1 = (...args)=>{
            let styler = chalk;
            while(this.attributeBuffer.length > 0)styler = styler[this.attributeBuffer.shift()];
            const string = styler(...args);
            this.stringBuffer.push(string);
            this.log();
            return;
        };
        const originalThing2 = ifStyleCalledAsMethod1;
        const proxySymbol2 = Symbol.for('Proxy');
        const thisProxySymbol2 = Symbol('thisProxy');
        this.proxyiedReturn = new Proxy(originalThing2, {
            defineProperty (original, ...args) {
                return Reflect.defineProperty(this, ...args);
            },
            getPrototypeOf (original, ...args) {
                return Reflect.getPrototypeOf(this, ...args);
            },
            // Object.keys
            ownKeys (original, ...args) {
                return Reflect.ownKeys(this, ...args);
            },
            get: (original, key, ...args)=>{
                if (key == proxySymbol2 || key == thisProxySymbol2) return true;
                return this[key];
            },
            set: (original, key, value)=>{
                if (key == proxySymbol2 || key == thisProxySymbol2) return;
                return this[key] = value;
            }
        });
        // 
        // attempt to add node.js logging
        // 
        try {
            this[$3xbWd.inspect.custom] = this.toString;
        } catch (error) {
        }
    }
}
const wrapAroundGet = (number, list)=>list[(number % list.length + list.length) % list.length]
;
let console = {
    get reset () {
        return new ConsoleObject().reset;
    },
    get bold () {
        return new ConsoleObject().bold;
    },
    get dim () {
        return new ConsoleObject().dim;
    },
    get italic () {
        return new ConsoleObject().italic;
    },
    get underline () {
        return new ConsoleObject().underline;
    },
    get inverse () {
        return new ConsoleObject().inverse;
    },
    get hidden () {
        return new ConsoleObject().hidden;
    },
    get strikethrough () {
        return new ConsoleObject().strikethrough;
    },
    get visible () {
        return new ConsoleObject().visible;
    },
    get black () {
        return new ConsoleObject().black;
    },
    get red () {
        return new ConsoleObject().red;
    },
    get green () {
        return new ConsoleObject().green;
    },
    get yellow () {
        return new ConsoleObject().yellow;
    },
    get blue () {
        return new ConsoleObject().blue;
    },
    get magenta () {
        return new ConsoleObject().magenta;
    },
    get cyan () {
        return new ConsoleObject().cyan;
    },
    get white () {
        return new ConsoleObject().white;
    },
    get blackBright () {
        return new ConsoleObject().blackBright;
    },
    get gray () {
        return new ConsoleObject().gray;
    },
    get grey () {
        return new ConsoleObject().grey;
    },
    get redBright () {
        return new ConsoleObject().redBright;
    },
    get greenBright () {
        return new ConsoleObject().greenBright;
    },
    get yellowBright () {
        return new ConsoleObject().yellowBright;
    },
    get blueBright () {
        return new ConsoleObject().blueBright;
    },
    get magentaBright () {
        return new ConsoleObject().magentaBright;
    },
    get cyanBright () {
        return new ConsoleObject().cyanBright;
    },
    get whiteBright () {
        return new ConsoleObject().whiteBright;
    },
    get bgBlack () {
        return new ConsoleObject().bgBlack;
    },
    get bgRed () {
        return new ConsoleObject().bgRed;
    },
    get bgGreen () {
        return new ConsoleObject().bgGreen;
    },
    get bgYellow () {
        return new ConsoleObject().bgYellow;
    },
    get bgBlue () {
        return new ConsoleObject().bgBlue;
    },
    get bgMagenta () {
        return new ConsoleObject().bgMagenta;
    },
    get bgCyan () {
        return new ConsoleObject().bgCyan;
    },
    get bgWhite () {
        return new ConsoleObject().bgWhite;
    },
    get bgBlackBright () {
        return new ConsoleObject().bgBlackBright;
    },
    get bgGray () {
        return new ConsoleObject().bgGray;
    },
    get bgGrey () {
        return new ConsoleObject().bgGrey;
    },
    get bgRedBright () {
        return new ConsoleObject().bgRedBright;
    },
    get bgGreenBright () {
        return new ConsoleObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new ConsoleObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new ConsoleObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new ConsoleObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new ConsoleObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new ConsoleObject().bgWhiteBright;
    },
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
    secretRainbow: (...args)=>{
        if (isBrowserContext) realConsole.log(`%c${args.join("").replace("%", "%%")}`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
        else {
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
            ];
            let number = 0;
            let bigString = "";
            for (const eachChar of args.join("")){
                number += 1;
                bigString += vibrance[wrapAroundGet(number, rainbowColors)](eachChar).toString();
            }
            realConsole.log(bigString.replace("%", "%%"));
        }
    }
};
const vibrance = {
    get reset () {
        return new LoggerObject().reset;
    },
    get bold () {
        return new LoggerObject().bold;
    },
    get dim () {
        return new LoggerObject().dim;
    },
    get italic () {
        return new LoggerObject().italic;
    },
    get underline () {
        return new LoggerObject().underline;
    },
    get inverse () {
        return new LoggerObject().inverse;
    },
    get hidden () {
        return new LoggerObject().hidden;
    },
    get strikethrough () {
        return new LoggerObject().strikethrough;
    },
    get visible () {
        return new LoggerObject().visible;
    },
    get black () {
        return new LoggerObject().black;
    },
    get red () {
        return new LoggerObject().red;
    },
    get green () {
        return new LoggerObject().green;
    },
    get yellow () {
        return new LoggerObject().yellow;
    },
    get blue () {
        return new LoggerObject().blue;
    },
    get magenta () {
        return new LoggerObject().magenta;
    },
    get cyan () {
        return new LoggerObject().cyan;
    },
    get white () {
        return new LoggerObject().white;
    },
    get blackBright () {
        return new LoggerObject().blackBright;
    },
    get gray () {
        return new LoggerObject().gray;
    },
    get grey () {
        return new LoggerObject().grey;
    },
    get redBright () {
        return new LoggerObject().redBright;
    },
    get greenBright () {
        return new LoggerObject().greenBright;
    },
    get yellowBright () {
        return new LoggerObject().yellowBright;
    },
    get blueBright () {
        return new LoggerObject().blueBright;
    },
    get magentaBright () {
        return new LoggerObject().magentaBright;
    },
    get cyanBright () {
        return new LoggerObject().cyanBright;
    },
    get whiteBright () {
        return new LoggerObject().whiteBright;
    },
    get bgBlack () {
        return new LoggerObject().bgBlack;
    },
    get bgRed () {
        return new LoggerObject().bgRed;
    },
    get bgGreen () {
        return new LoggerObject().bgGreen;
    },
    get bgYellow () {
        return new LoggerObject().bgYellow;
    },
    get bgBlue () {
        return new LoggerObject().bgBlue;
    },
    get bgMagenta () {
        return new LoggerObject().bgMagenta;
    },
    get bgCyan () {
        return new LoggerObject().bgCyan;
    },
    get bgWhite () {
        return new LoggerObject().bgWhite;
    },
    get bgBlackBright () {
        return new LoggerObject().bgBlackBright;
    },
    get bgGray () {
        return new LoggerObject().bgGray;
    },
    get bgGrey () {
        return new LoggerObject().bgGrey;
    },
    get bgRedBright () {
        return new LoggerObject().bgRedBright;
    },
    get bgGreenBright () {
        return new LoggerObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new LoggerObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new LoggerObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new LoggerObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new LoggerObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new LoggerObject().bgWhiteBright;
    },
    console
};
// add self reference
vibrance.vibrance = vibrance;
module.exports = vibrance;

});
parcelRequire.register("61gyR", function(module, exports) {
'use strict';

var $fn8sB = parcelRequire("fn8sB");

var $9rxdn = parcelRequire("9rxdn");
var $461faecb049a994e$require$stderrColor = $9rxdn.stderr;
var $461faecb049a994e$require$stdoutColor = $9rxdn.stdout;

var $29S4V = parcelRequire("29S4V");
var $461faecb049a994e$require$stringEncaseCRLFWithFirstIndex = $29S4V.stringEncaseCRLFWithFirstIndex;
var $461faecb049a994e$require$stringReplaceAll = $29S4V.stringReplaceAll;
const { isArray: $461faecb049a994e$var$isArray  } = Array;
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $461faecb049a994e$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $461faecb049a994e$var$styles = Object.create(null);
const $461faecb049a994e$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $461faecb049a994e$require$stdoutColor ? $461faecb049a994e$require$stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $461faecb049a994e$var$ChalkClass {
    constructor(options){
        // eslint-disable-next-line no-constructor-return
        return $461faecb049a994e$var$chalkFactory(options);
    }
}
const $461faecb049a994e$var$chalkFactory = (options1)=>{
    const chalk = {
    };
    $461faecb049a994e$var$applyOptions(chalk, options1);
    chalk.template = (...arguments_)=>$461faecb049a994e$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $461faecb049a994e$var$Chalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.constructor = ()=>{
        throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
    };
    chalk.template.Instance = $461faecb049a994e$var$ChalkClass;
    return chalk.template;
};
function $461faecb049a994e$var$Chalk(options1) {
    return $461faecb049a994e$var$chalkFactory(options1);
}
for (const [styleName, style] of Object.entries($fn8sB))$461faecb049a994e$var$styles[styleName] = {
    get () {
        const builder = $461faecb049a994e$var$createBuilder(this, $461faecb049a994e$var$createStyler(style.open, style.close, this._styler), this._isEmpty);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$461faecb049a994e$var$styles.visible = {
    get () {
        const builder = $461faecb049a994e$var$createBuilder(this, this._styler, true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $461faecb049a994e$var$usedModels = [
    'rgb',
    'hex',
    'keyword',
    'hsl',
    'hsv',
    'hwb',
    'ansi',
    'ansi256'
];
for (const model of $461faecb049a994e$var$usedModels)$461faecb049a994e$var$styles[model] = {
    get () {
        const { level: level  } = this;
        return function(...arguments_) {
            const styler = $461faecb049a994e$var$createStyler($fn8sB.color[$461faecb049a994e$var$levelMapping[level]][model](...arguments_), $fn8sB.color.close, this._styler);
            return $461faecb049a994e$var$createBuilder(this, styler, this._isEmpty);
        };
    }
};
for (const model1 of $461faecb049a994e$var$usedModels){
    const bgModel = 'bg' + model1[0].toUpperCase() + model1.slice(1);
    $461faecb049a994e$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $461faecb049a994e$var$createStyler($fn8sB.bgColor[$461faecb049a994e$var$levelMapping[level]][model1](...arguments_), $fn8sB.bgColor.close, this._styler);
                return $461faecb049a994e$var$createBuilder(this, styler, this._isEmpty);
            };
        }
    };
}
const $461faecb049a994e$var$proto = Object.defineProperties(()=>{
}, {
    ...$461faecb049a994e$var$styles,
    level: {
        enumerable: true,
        get () {
            return this._generator.level;
        },
        set (level) {
            this._generator.level = level;
        }
    }
});
const $461faecb049a994e$var$createStyler = (open, close, parent)=>{
    let openAll;
    let closeAll;
    if (parent === undefined) {
        openAll = open;
        closeAll = close;
    } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
    }
    return {
        open: open,
        close: close,
        openAll: openAll,
        closeAll: closeAll,
        parent: parent
    };
};
const $461faecb049a994e$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($461faecb049a994e$var$isArray(arguments_[0]) && $461faecb049a994e$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $461faecb049a994e$var$applyStyle(builder, $461faecb049a994e$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $461faecb049a994e$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $461faecb049a994e$var$proto);
    builder._generator = self;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
};
const $461faecb049a994e$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self._isEmpty ? '' : string;
    let styler = self._styler;
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.indexOf('\u001B') !== -1) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $461faecb049a994e$require$stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $461faecb049a994e$require$stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
let $461faecb049a994e$var$template;

const $461faecb049a994e$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$461faecb049a994e$var$isArray(firstString) || !$461faecb049a994e$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    if ($461faecb049a994e$var$template === undefined) $461faecb049a994e$var$template = (parcelRequire("jUci8"));
    return $461faecb049a994e$var$template(chalk, parts.join(''));
};
Object.defineProperties($461faecb049a994e$var$Chalk.prototype, $461faecb049a994e$var$styles);
const $461faecb049a994e$var$chalk = $461faecb049a994e$var$Chalk(); // eslint-disable-line new-cap
$461faecb049a994e$var$chalk.supportsColor = $461faecb049a994e$require$stdoutColor;
$461faecb049a994e$var$chalk.stderr = $461faecb049a994e$var$Chalk({
    level: $461faecb049a994e$require$stderrColor ? $461faecb049a994e$require$stderrColor.level : 0
}); // eslint-disable-line new-cap
$461faecb049a994e$var$chalk.stderr.supportsColor = $461faecb049a994e$require$stderrColor;
module.exports = $461faecb049a994e$var$chalk;

});
parcelRequire.register("fn8sB", function(module, exports) {
'use strict';
const wrapAnsi16 = (fn, offset)=>(...args)=>{
        const code = fn(...args);
        return `\u001B[${code + offset}m`;
    }
;
const wrapAnsi256 = (fn, offset)=>(...args)=>{
        const code = fn(...args);
        return `\u001B[${38 + offset};5;${code}m`;
    }
;
const wrapAnsi16m = (fn, offset)=>(...args)=>{
        const rgb = fn(...args);
        return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    }
;
const ansi2ansi = (n)=>n
;
const rgb2rgb = (r, g, b)=>[
        r,
        g,
        b
    ]
;
const setLazyProperty = (object, property, get)=>{
    Object.defineProperty(object, property, {
        get: ()=>{
            const value = get();
            Object.defineProperty(object, property, {
                value,
                enumerable: true,
                configurable: true
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
};
/** @type {typeof import('color-convert')} */ let colorConvert;

const makeDynamicStyles = (wrap, targetSpace, identity, isBackground)=>{
    if (colorConvert === undefined) colorConvert = (parcelRequire("iYhee"));
    const offset = isBackground ? 10 : 0;
    const styles = {
    };
    for (const [sourceSpace, suite] of Object.entries(colorConvert)){
        const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
        if (sourceSpace === targetSpace) styles[name] = wrap(identity, offset);
        else if (typeof suite === 'object') styles[name] = wrap(suite[targetSpace], offset);
    }
    return styles;
};
function assembleStyles() {
    const codes = new Map();
    const styles = {
        modifier: {
            reset: [
                0,
                0
            ],
            // 21 isn't widely supported and 22 does the same thing
            bold: [
                1,
                22
            ],
            dim: [
                2,
                22
            ],
            italic: [
                3,
                23
            ],
            underline: [
                4,
                24
            ],
            inverse: [
                7,
                27
            ],
            hidden: [
                8,
                28
            ],
            strikethrough: [
                9,
                29
            ]
        },
        color: {
            black: [
                30,
                39
            ],
            red: [
                31,
                39
            ],
            green: [
                32,
                39
            ],
            yellow: [
                33,
                39
            ],
            blue: [
                34,
                39
            ],
            magenta: [
                35,
                39
            ],
            cyan: [
                36,
                39
            ],
            white: [
                37,
                39
            ],
            // Bright color
            blackBright: [
                90,
                39
            ],
            redBright: [
                91,
                39
            ],
            greenBright: [
                92,
                39
            ],
            yellowBright: [
                93,
                39
            ],
            blueBright: [
                94,
                39
            ],
            magentaBright: [
                95,
                39
            ],
            cyanBright: [
                96,
                39
            ],
            whiteBright: [
                97,
                39
            ]
        },
        bgColor: {
            bgBlack: [
                40,
                49
            ],
            bgRed: [
                41,
                49
            ],
            bgGreen: [
                42,
                49
            ],
            bgYellow: [
                43,
                49
            ],
            bgBlue: [
                44,
                49
            ],
            bgMagenta: [
                45,
                49
            ],
            bgCyan: [
                46,
                49
            ],
            bgWhite: [
                47,
                49
            ],
            // Bright color
            bgBlackBright: [
                100,
                49
            ],
            bgRedBright: [
                101,
                49
            ],
            bgGreenBright: [
                102,
                49
            ],
            bgYellowBright: [
                103,
                49
            ],
            bgBlueBright: [
                104,
                49
            ],
            bgMagentaBright: [
                105,
                49
            ],
            bgCyanBright: [
                106,
                49
            ],
            bgWhiteBright: [
                107,
                49
            ]
        }
    };
    // Alias bright black as gray (and grey)
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)){
        for (const [styleName, style] of Object.entries(group)){
            styles[styleName] = {
                open: `\u001B[${style[0]}m`,
                close: `\u001B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
        });
    }
    Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false
    });
    styles.color.close = '\u001B[39m';
    styles.bgColor.close = '\u001B[49m';
    setLazyProperty(styles.color, 'ansi', ()=>makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false)
    );
    setLazyProperty(styles.color, 'ansi256', ()=>makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false)
    );
    setLazyProperty(styles.color, 'ansi16m', ()=>makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false)
    );
    setLazyProperty(styles.bgColor, 'ansi', ()=>makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true)
    );
    setLazyProperty(styles.bgColor, 'ansi256', ()=>makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true)
    );
    setLazyProperty(styles.bgColor, 'ansi16m', ()=>makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true)
    );
    return styles;
}
// Make the export immutable
Object.defineProperty(module, 'exports', {
    enumerable: true,
    get: assembleStyles
});

});
parcelRequire.register("iYhee", function(module, exports) {

var $1oJ3O = parcelRequire("1oJ3O");

var $6eX8l = parcelRequire("6eX8l");
const $dcfb31d17018a3cf$var$convert = {
};
const $dcfb31d17018a3cf$var$models = Object.keys($1oJ3O);
function $dcfb31d17018a3cf$var$wrapRaw(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) return arg0;
        if (arg0.length > 1) args = arg0;
        return fn(args);
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) wrappedFn.conversion = fn.conversion;
    return wrappedFn;
}
function $dcfb31d17018a3cf$var$wrapRounded(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) return arg0;
        if (arg0.length > 1) args = arg0;
        const result = fn(args);
        // We're assuming the result is an array here.
        // see notice in conversions.js; don't use box types
        // in conversion functions.
        if (typeof result === 'object') for(let len = result.length, i = 0; i < len; i++)result[i] = Math.round(result[i]);
        return result;
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) wrappedFn.conversion = fn.conversion;
    return wrappedFn;
}
$dcfb31d17018a3cf$var$models.forEach((fromModel)=>{
    $dcfb31d17018a3cf$var$convert[fromModel] = {
    };
    Object.defineProperty($dcfb31d17018a3cf$var$convert[fromModel], 'channels', {
        value: $1oJ3O[fromModel].channels
    });
    Object.defineProperty($dcfb31d17018a3cf$var$convert[fromModel], 'labels', {
        value: $1oJ3O[fromModel].labels
    });
    const routes = $6eX8l(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        $dcfb31d17018a3cf$var$convert[fromModel][toModel] = $dcfb31d17018a3cf$var$wrapRounded(fn);
        $dcfb31d17018a3cf$var$convert[fromModel][toModel].raw = $dcfb31d17018a3cf$var$wrapRaw(fn);
    });
});
module.exports = $dcfb31d17018a3cf$var$convert;

});
parcelRequire.register("1oJ3O", function(module, exports) {

var $22hX9 = parcelRequire("22hX9");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const $104afc683b5c343c$var$reverseKeywords = {
};
for (const key of Object.keys($22hX9))$104afc683b5c343c$var$reverseKeywords[$22hX9[key]] = key;
const $104afc683b5c343c$var$convert = {
    rgb: {
        channels: 3,
        labels: 'rgb'
    },
    hsl: {
        channels: 3,
        labels: 'hsl'
    },
    hsv: {
        channels: 3,
        labels: 'hsv'
    },
    hwb: {
        channels: 3,
        labels: 'hwb'
    },
    cmyk: {
        channels: 4,
        labels: 'cmyk'
    },
    xyz: {
        channels: 3,
        labels: 'xyz'
    },
    lab: {
        channels: 3,
        labels: 'lab'
    },
    lch: {
        channels: 3,
        labels: 'lch'
    },
    hex: {
        channels: 1,
        labels: [
            'hex'
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            'keyword'
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            'ansi16'
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            'ansi256'
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            'h',
            'c',
            'g'
        ]
    },
    apple: {
        channels: 3,
        labels: [
            'r16',
            'g16',
            'b16'
        ]
    },
    gray: {
        channels: 1,
        labels: [
            'gray'
        ]
    }
};
module.exports = $104afc683b5c343c$var$convert;
// Hide .channels and .labels properties
for (const model of Object.keys($104afc683b5c343c$var$convert)){
    if (!('channels' in $104afc683b5c343c$var$convert[model])) throw new Error('missing channels property: ' + model);
    if (!('labels' in $104afc683b5c343c$var$convert[model])) throw new Error('missing channel labels property: ' + model);
    if ($104afc683b5c343c$var$convert[model].labels.length !== $104afc683b5c343c$var$convert[model].channels) throw new Error('channel and label counts mismatch: ' + model);
    const { channels: channels , labels: labels  } = $104afc683b5c343c$var$convert[model];
    delete $104afc683b5c343c$var$convert[model].channels;
    delete $104afc683b5c343c$var$convert[model].labels;
    Object.defineProperty($104afc683b5c343c$var$convert[model], 'channels', {
        value: channels
    });
    Object.defineProperty($104afc683b5c343c$var$convert[model], 'labels', {
        value: labels
    });
}
$104afc683b5c343c$var$convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) h = 0;
    else if (r === max) h = (g - b) / delta;
    else if (g === max) h = 2 + (b - r) / delta;
    else if (b === max) h = 4 + (r - g) / delta;
    h = Math.min(h * 60, 360);
    if (h < 0) h += 360;
    const l = (min + max) / 2;
    if (max === min) s = 0;
    else if (l <= 0.5) s = delta / (max + min);
    else s = delta / (2 - max - min);
    return [
        h,
        s * 100,
        l * 100
    ];
};
$104afc683b5c343c$var$convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
        return (v - c) / 6 / diff + 0.5;
    };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) h = bdif - gdif;
        else if (g === v) h = 1 / 3 + rdif - bdif;
        else if (b === v) h = 2 / 3 + gdif - rdif;
        if (h < 0) h += 1;
        else if (h > 1) h -= 1;
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
};
$104afc683b5c343c$var$convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = $104afc683b5c343c$var$convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
$104afc683b5c343c$var$convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
};
function $104afc683b5c343c$var$comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
$104afc683b5c343c$var$convert.rgb.keyword = function(rgb) {
    const reversed = $104afc683b5c343c$var$reverseKeywords[rgb];
    if (reversed) return reversed;
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys($22hX9)){
        const value = $22hX9[keyword];
        // Compute comparative distance
        const distance = $104afc683b5c343c$var$comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
$104afc683b5c343c$var$convert.keyword.rgb = function(keyword) {
    return $22hX9[keyword];
};
$104afc683b5c343c$var$convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    // Assume sRGB
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [
        x * 100,
        y * 100,
        z * 100
    ];
};
$104afc683b5c343c$var$convert.rgb.lab = function(rgb) {
    const xyz = $104afc683b5c343c$var$convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
$104afc683b5c343c$var$convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
        val = l * 255;
        return [
            val,
            val,
            val
        ];
    }
    if (l < 0.5) t2 = l * (1 + s);
    else t2 = l + s - l * s;
    const t1 = 2 * l - t2;
    const rgb = [
        0,
        0,
        0
    ];
    for(let i = 0; i < 3; i++){
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) t3++;
        if (t3 > 1) t3--;
        if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
        else if (2 * t3 < 1) val = t2;
        else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        else val = t1;
        rgb[i] = val * 255;
    }
    return rgb;
};
$104afc683b5c343c$var$convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [
        h,
        sv * 100,
        v * 100
    ];
};
$104afc683b5c343c$var$convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch(hi){
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
};
$104afc683b5c343c$var$convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [
        h,
        sl * 100,
        l * 100
    ];
};
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
$104afc683b5c343c$var$convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    // Wh + bl cant be > 1
    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) f = 1 - f;
    const n = wh + f * (v - wh); // Linear interpolation
    let r;
    let g;
    let b;
    /* eslint-disable max-statements-per-line,no-multi-spaces */ switch(i){
        default:
        case 6:
        case 0:
            r = v;
            g = n;
            b = wh;
            break;
        case 1:
            r = n;
            g = v;
            b = wh;
            break;
        case 2:
            r = wh;
            g = v;
            b = n;
            break;
        case 3:
            r = wh;
            g = n;
            b = v;
            break;
        case 4:
            r = n;
            g = wh;
            b = v;
            break;
        case 5:
            r = v;
            g = wh;
            b = n;
            break;
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
        r * 255,
        g * 255,
        b * 255
    ];
};
$104afc683b5c343c$var$convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
$104afc683b5c343c$var$convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    // Assume sRGB
    r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
$104afc683b5c343c$var$convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
$104afc683b5c343c$var$convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [
        x,
        y,
        z
    ];
};
$104afc683b5c343c$var$convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) h += 360;
    const c = Math.sqrt(a * a + b * b);
    return [
        l,
        c,
        h
    ];
};
$104afc683b5c343c$var$convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [
        l,
        a,
        b
    ];
};
$104afc683b5c343c$var$convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? $104afc683b5c343c$var$convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) return 30;
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) ansi += 60;
    return ansi;
};
$104afc683b5c343c$var$convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return $104afc683b5c343c$var$convert.rgb.ansi16($104afc683b5c343c$var$convert.hsv.rgb(args), args[2]);
};
$104afc683b5c343c$var$convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.
    if (r === g && g === b) {
        if (r < 8) return 16;
        if (r > 248) return 231;
        return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
};
$104afc683b5c343c$var$convert.ansi16.rgb = function(args) {
    let color = args % 10;
    // Handle greyscale
    if (color === 0 || color === 7) {
        if (args > 50) color += 3.5;
        color = color / 10.5 * 255;
        return [
            color,
            color,
            color
        ];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [
        r,
        g,
        b
    ];
};
$104afc683b5c343c$var$convert.ansi256.rgb = function(args) {
    // Handle greyscale
    if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
            c,
            c,
            c
        ];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [
        r,
        g,
        b
    ];
};
$104afc683b5c343c$var$convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
$104afc683b5c343c$var$convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) return [
        0,
        0,
        0
    ];
    let colorString = match[0];
    if (match[0].length === 3) colorString = colorString.split('').map((char)=>{
        return char + char;
    }).join('');
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 255;
    const g = integer >> 8 & 255;
    const b = integer & 255;
    return [
        r,
        g,
        b
    ];
};
$104afc683b5c343c$var$convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) grayscale = min / (1 - chroma);
    else grayscale = 0;
    if (chroma <= 0) hue = 0;
    else if (max === r) hue = (g - b) / chroma % 6;
    else if (max === g) hue = 2 + (b - r) / chroma;
    else hue = 4 + (r - g) / chroma;
    hue /= 6;
    hue %= 1;
    return [
        hue * 360,
        chroma * 100,
        grayscale * 100
    ];
};
$104afc683b5c343c$var$convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) f = (l - 0.5 * c) / (1 - c);
    return [
        hsl[0],
        c * 100,
        f * 100
    ];
};
$104afc683b5c343c$var$convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) f = (v - c) / (1 - c);
    return [
        hsv[0],
        c * 100,
        f * 100
    ];
};
$104afc683b5c343c$var$convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) return [
        g * 255,
        g * 255,
        g * 255
    ];
    const pure = [
        0,
        0,
        0
    ];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    /* eslint-disable max-statements-per-line */ switch(Math.floor(hi)){
        case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
        case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
        case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
        case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
        case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
        default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
    }
    /* eslint-enable max-statements-per-line */ mg = (1 - c) * g;
    return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
    ];
};
$104afc683b5c343c$var$convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) f = c / v;
    return [
        hcg[0],
        f * 100,
        v * 100
    ];
};
$104afc683b5c343c$var$convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) s = c / (2 * l);
    else if (l >= 0.5 && l < 1) s = c / (2 * (1 - l));
    return [
        hcg[0],
        s * 100,
        l * 100
    ];
};
$104afc683b5c343c$var$convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
$104afc683b5c343c$var$convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) g = (v - c) / (1 - c);
    return [
        hwb[0],
        c * 100,
        g * 100
    ];
};
$104afc683b5c343c$var$convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
$104afc683b5c343c$var$convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
$104afc683b5c343c$var$convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
$104afc683b5c343c$var$convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
$104afc683b5c343c$var$convert.gray.hsv = $104afc683b5c343c$var$convert.gray.hsl;
$104afc683b5c343c$var$convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
$104afc683b5c343c$var$convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
$104afc683b5c343c$var$convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
$104afc683b5c343c$var$convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
$104afc683b5c343c$var$convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};

});
parcelRequire.register("22hX9", function(module, exports) {
'use strict';
module.exports = {
    "aliceblue": [
        240,
        248,
        255
    ],
    "antiquewhite": [
        250,
        235,
        215
    ],
    "aqua": [
        0,
        255,
        255
    ],
    "aquamarine": [
        127,
        255,
        212
    ],
    "azure": [
        240,
        255,
        255
    ],
    "beige": [
        245,
        245,
        220
    ],
    "bisque": [
        255,
        228,
        196
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        255,
        235,
        205
    ],
    "blue": [
        0,
        0,
        255
    ],
    "blueviolet": [
        138,
        43,
        226
    ],
    "brown": [
        165,
        42,
        42
    ],
    "burlywood": [
        222,
        184,
        135
    ],
    "cadetblue": [
        95,
        158,
        160
    ],
    "chartreuse": [
        127,
        255,
        0
    ],
    "chocolate": [
        210,
        105,
        30
    ],
    "coral": [
        255,
        127,
        80
    ],
    "cornflowerblue": [
        100,
        149,
        237
    ],
    "cornsilk": [
        255,
        248,
        220
    ],
    "crimson": [
        220,
        20,
        60
    ],
    "cyan": [
        0,
        255,
        255
    ],
    "darkblue": [
        0,
        0,
        139
    ],
    "darkcyan": [
        0,
        139,
        139
    ],
    "darkgoldenrod": [
        184,
        134,
        11
    ],
    "darkgray": [
        169,
        169,
        169
    ],
    "darkgreen": [
        0,
        100,
        0
    ],
    "darkgrey": [
        169,
        169,
        169
    ],
    "darkkhaki": [
        189,
        183,
        107
    ],
    "darkmagenta": [
        139,
        0,
        139
    ],
    "darkolivegreen": [
        85,
        107,
        47
    ],
    "darkorange": [
        255,
        140,
        0
    ],
    "darkorchid": [
        153,
        50,
        204
    ],
    "darkred": [
        139,
        0,
        0
    ],
    "darksalmon": [
        233,
        150,
        122
    ],
    "darkseagreen": [
        143,
        188,
        143
    ],
    "darkslateblue": [
        72,
        61,
        139
    ],
    "darkslategray": [
        47,
        79,
        79
    ],
    "darkslategrey": [
        47,
        79,
        79
    ],
    "darkturquoise": [
        0,
        206,
        209
    ],
    "darkviolet": [
        148,
        0,
        211
    ],
    "deeppink": [
        255,
        20,
        147
    ],
    "deepskyblue": [
        0,
        191,
        255
    ],
    "dimgray": [
        105,
        105,
        105
    ],
    "dimgrey": [
        105,
        105,
        105
    ],
    "dodgerblue": [
        30,
        144,
        255
    ],
    "firebrick": [
        178,
        34,
        34
    ],
    "floralwhite": [
        255,
        250,
        240
    ],
    "forestgreen": [
        34,
        139,
        34
    ],
    "fuchsia": [
        255,
        0,
        255
    ],
    "gainsboro": [
        220,
        220,
        220
    ],
    "ghostwhite": [
        248,
        248,
        255
    ],
    "gold": [
        255,
        215,
        0
    ],
    "goldenrod": [
        218,
        165,
        32
    ],
    "gray": [
        128,
        128,
        128
    ],
    "green": [
        0,
        128,
        0
    ],
    "greenyellow": [
        173,
        255,
        47
    ],
    "grey": [
        128,
        128,
        128
    ],
    "honeydew": [
        240,
        255,
        240
    ],
    "hotpink": [
        255,
        105,
        180
    ],
    "indianred": [
        205,
        92,
        92
    ],
    "indigo": [
        75,
        0,
        130
    ],
    "ivory": [
        255,
        255,
        240
    ],
    "khaki": [
        240,
        230,
        140
    ],
    "lavender": [
        230,
        230,
        250
    ],
    "lavenderblush": [
        255,
        240,
        245
    ],
    "lawngreen": [
        124,
        252,
        0
    ],
    "lemonchiffon": [
        255,
        250,
        205
    ],
    "lightblue": [
        173,
        216,
        230
    ],
    "lightcoral": [
        240,
        128,
        128
    ],
    "lightcyan": [
        224,
        255,
        255
    ],
    "lightgoldenrodyellow": [
        250,
        250,
        210
    ],
    "lightgray": [
        211,
        211,
        211
    ],
    "lightgreen": [
        144,
        238,
        144
    ],
    "lightgrey": [
        211,
        211,
        211
    ],
    "lightpink": [
        255,
        182,
        193
    ],
    "lightsalmon": [
        255,
        160,
        122
    ],
    "lightseagreen": [
        32,
        178,
        170
    ],
    "lightskyblue": [
        135,
        206,
        250
    ],
    "lightslategray": [
        119,
        136,
        153
    ],
    "lightslategrey": [
        119,
        136,
        153
    ],
    "lightsteelblue": [
        176,
        196,
        222
    ],
    "lightyellow": [
        255,
        255,
        224
    ],
    "lime": [
        0,
        255,
        0
    ],
    "limegreen": [
        50,
        205,
        50
    ],
    "linen": [
        250,
        240,
        230
    ],
    "magenta": [
        255,
        0,
        255
    ],
    "maroon": [
        128,
        0,
        0
    ],
    "mediumaquamarine": [
        102,
        205,
        170
    ],
    "mediumblue": [
        0,
        0,
        205
    ],
    "mediumorchid": [
        186,
        85,
        211
    ],
    "mediumpurple": [
        147,
        112,
        219
    ],
    "mediumseagreen": [
        60,
        179,
        113
    ],
    "mediumslateblue": [
        123,
        104,
        238
    ],
    "mediumspringgreen": [
        0,
        250,
        154
    ],
    "mediumturquoise": [
        72,
        209,
        204
    ],
    "mediumvioletred": [
        199,
        21,
        133
    ],
    "midnightblue": [
        25,
        25,
        112
    ],
    "mintcream": [
        245,
        255,
        250
    ],
    "mistyrose": [
        255,
        228,
        225
    ],
    "moccasin": [
        255,
        228,
        181
    ],
    "navajowhite": [
        255,
        222,
        173
    ],
    "navy": [
        0,
        0,
        128
    ],
    "oldlace": [
        253,
        245,
        230
    ],
    "olive": [
        128,
        128,
        0
    ],
    "olivedrab": [
        107,
        142,
        35
    ],
    "orange": [
        255,
        165,
        0
    ],
    "orangered": [
        255,
        69,
        0
    ],
    "orchid": [
        218,
        112,
        214
    ],
    "palegoldenrod": [
        238,
        232,
        170
    ],
    "palegreen": [
        152,
        251,
        152
    ],
    "paleturquoise": [
        175,
        238,
        238
    ],
    "palevioletred": [
        219,
        112,
        147
    ],
    "papayawhip": [
        255,
        239,
        213
    ],
    "peachpuff": [
        255,
        218,
        185
    ],
    "peru": [
        205,
        133,
        63
    ],
    "pink": [
        255,
        192,
        203
    ],
    "plum": [
        221,
        160,
        221
    ],
    "powderblue": [
        176,
        224,
        230
    ],
    "purple": [
        128,
        0,
        128
    ],
    "rebeccapurple": [
        102,
        51,
        153
    ],
    "red": [
        255,
        0,
        0
    ],
    "rosybrown": [
        188,
        143,
        143
    ],
    "royalblue": [
        65,
        105,
        225
    ],
    "saddlebrown": [
        139,
        69,
        19
    ],
    "salmon": [
        250,
        128,
        114
    ],
    "sandybrown": [
        244,
        164,
        96
    ],
    "seagreen": [
        46,
        139,
        87
    ],
    "seashell": [
        255,
        245,
        238
    ],
    "sienna": [
        160,
        82,
        45
    ],
    "silver": [
        192,
        192,
        192
    ],
    "skyblue": [
        135,
        206,
        235
    ],
    "slateblue": [
        106,
        90,
        205
    ],
    "slategray": [
        112,
        128,
        144
    ],
    "slategrey": [
        112,
        128,
        144
    ],
    "snow": [
        255,
        250,
        250
    ],
    "springgreen": [
        0,
        255,
        127
    ],
    "steelblue": [
        70,
        130,
        180
    ],
    "tan": [
        210,
        180,
        140
    ],
    "teal": [
        0,
        128,
        128
    ],
    "thistle": [
        216,
        191,
        216
    ],
    "tomato": [
        255,
        99,
        71
    ],
    "turquoise": [
        64,
        224,
        208
    ],
    "violet": [
        238,
        130,
        238
    ],
    "wheat": [
        245,
        222,
        179
    ],
    "white": [
        255,
        255,
        255
    ],
    "whitesmoke": [
        245,
        245,
        245
    ],
    "yellow": [
        255,
        255,
        0
    ],
    "yellowgreen": [
        154,
        205,
        50
    ]
};

});


parcelRequire.register("6eX8l", function(module, exports) {

var $1oJ3O = parcelRequire("1oJ3O");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function $48b1eb937aea34a8$var$buildGraph() {
    const graph = {
    };
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys($1oJ3O);
    for(let len = models.length, i = 0; i < len; i++)graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
    };
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function $48b1eb937aea34a8$var$deriveBFS(fromModel) {
    const graph = $48b1eb937aea34a8$var$buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys($1oJ3O[current]);
        for(let len = adjacents.length, i = 0; i < len; i++){
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
            }
        }
    }
    return graph;
}
function $48b1eb937aea34a8$var$link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function $48b1eb937aea34a8$var$wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = $1oJ3O[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = $48b1eb937aea34a8$var$link($1oJ3O[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = $48b1eb937aea34a8$var$deriveBFS(fromModel);
    const conversion = {
    };
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) continue;
        conversion[toModel] = $48b1eb937aea34a8$var$wrapConversion(toModel, graph);
    }
    return conversion;
};

});



parcelRequire.register("9rxdn", function(module, exports) {
'use strict';
module.exports = {
    stdout: false,
    stderr: false
};

});

parcelRequire.register("29S4V", function(module, exports) {
'use strict';
const $19265ee14ab201e4$var$stringReplaceAll = (string, substring, replacer)=>{
    let index = string.indexOf(substring);
    if (index === -1) return string;
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = '';
    do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
    }while (index !== -1)
    returnValue += string.substr(endIndex);
    return returnValue;
};
const $19265ee14ab201e4$var$stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index)=>{
    let endIndex = 0;
    let returnValue = '';
    do {
        const gotCR = string[index - 1] === '\r';
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
        endIndex = index + 1;
        index = string.indexOf('\n', endIndex);
    }while (index !== -1)
    returnValue += string.substr(endIndex);
    return returnValue;
};
module.exports = {
    stringReplaceAll: $19265ee14ab201e4$var$stringReplaceAll,
    stringEncaseCRLFWithFirstIndex: $19265ee14ab201e4$var$stringEncaseCRLFWithFirstIndex
};

});

parcelRequire.register("jUci8", function(module, exports) {
'use strict';
const $e7dcc81bfad2befb$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $e7dcc81bfad2befb$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $e7dcc81bfad2befb$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $e7dcc81bfad2befb$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $e7dcc81bfad2befb$var$ESCAPES = new Map([
    [
        'n',
        '\n'
    ],
    [
        'r',
        '\r'
    ],
    [
        't',
        '\t'
    ],
    [
        'b',
        '\b'
    ],
    [
        'f',
        '\f'
    ],
    [
        'v',
        '\v'
    ],
    [
        '0',
        '\0'
    ],
    [
        '\\',
        '\\'
    ],
    [
        'e',
        '\u001B'
    ],
    [
        'a',
        '\u0007'
    ]
]);
function $e7dcc81bfad2befb$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    return $e7dcc81bfad2befb$var$ESCAPES.get(c) || c;
}
function $e7dcc81bfad2befb$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($e7dcc81bfad2befb$var$STRING_REGEX)) results.push(matches[2].replace($e7dcc81bfad2befb$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $e7dcc81bfad2befb$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $e7dcc81bfad2befb$var$parseStyle(style) {
    $e7dcc81bfad2befb$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $e7dcc81bfad2befb$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $e7dcc81bfad2befb$var$parseArguments(name, matches[2]);
            results.push([
                name
            ].concat(args));
        } else results.push([
            name
        ]);
    }
    return results;
}
function $e7dcc81bfad2befb$var$buildStyle(chalk, styles) {
    const enabled = {
    };
    for (const layer of styles)for (const style of layer.styles)enabled[style[0]] = layer.inverse ? null : style.slice(1);
    let current = chalk;
    for (const [styleName, styles1] of Object.entries(enabled)){
        if (!Array.isArray(styles1)) continue;
        if (!(styleName in current)) throw new Error(`Unknown Chalk style: ${styleName}`);
        current = styles1.length > 0 ? current[styleName](...styles1) : current[styleName];
    }
    return current;
}
module.exports = (chalk, temporary)=>{
    const styles = [];
    const chunks = [];
    let chunk = [];
    // eslint-disable-next-line max-params
    temporary.replace($e7dcc81bfad2befb$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($e7dcc81bfad2befb$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $e7dcc81bfad2befb$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $e7dcc81bfad2befb$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($e7dcc81bfad2befb$var$buildStyle(chalk, styles)(chunk.join('')));
            chunk = [];
            styles.pop();
        } else chunk.push(character);
    });
    chunks.push(chunk.join(''));
    if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
        throw new Error(errMessage);
    }
    return chunks.join('');
};

});


parcelRequire.register("lNjAV", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "Chalk", () => $fddd5fa89d9523a3$export$71e289472ea891bc);
$parcel$export(module.exports, "supportsColor", () => $fddd5fa89d9523a3$export$14dc0f862cd743cf);
$parcel$export(module.exports, "chalkStderr", () => $fddd5fa89d9523a3$export$46348ae7515f5916);
$parcel$export(module.exports, "default", () => $fddd5fa89d9523a3$export$9099ad97b570f7c);
$parcel$export(module.exports, "supportsColorStderr", () => $fddd5fa89d9523a3$export$e9dd22d6b9c0c455);

var $h527d = parcelRequire("h527d");

var $75teS = parcelRequire("75teS");

var $jVyQD = parcelRequire("jVyQD");

var $7LV6B = parcelRequire("7LV6B");
const { stdout: $fddd5fa89d9523a3$export$14dc0f862cd743cf , stderr: $fddd5fa89d9523a3$export$e9dd22d6b9c0c455  } = $75teS.default;
const { isArray: $fddd5fa89d9523a3$var$isArray  } = Array;
const $fddd5fa89d9523a3$var$GENERATOR = Symbol('GENERATOR');
const $fddd5fa89d9523a3$var$STYLER = Symbol('STYLER');
const $fddd5fa89d9523a3$var$IS_EMPTY = Symbol('IS_EMPTY');
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $fddd5fa89d9523a3$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $fddd5fa89d9523a3$var$styles = Object.create(null);
const $fddd5fa89d9523a3$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $fddd5fa89d9523a3$export$14dc0f862cd743cf ? $fddd5fa89d9523a3$export$14dc0f862cd743cf.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $fddd5fa89d9523a3$export$71e289472ea891bc {
    constructor(options){
        // eslint-disable-next-line no-constructor-return
        return $fddd5fa89d9523a3$var$chalkFactory(options);
    }
}
const $fddd5fa89d9523a3$var$chalkFactory = (options1)=>{
    const chalk = {
    };
    $fddd5fa89d9523a3$var$applyOptions(chalk, options1);
    chalk.template = (...arguments_)=>$fddd5fa89d9523a3$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $fddd5fa89d9523a3$var$createChalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.Chalk = $fddd5fa89d9523a3$export$71e289472ea891bc;
    return chalk.template;
};
function $fddd5fa89d9523a3$var$createChalk(options1) {
    return $fddd5fa89d9523a3$var$chalkFactory(options1);
}
Object.setPrototypeOf($fddd5fa89d9523a3$var$createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries($h527d.default))$fddd5fa89d9523a3$var$styles[styleName] = {
    get () {
        const builder = $fddd5fa89d9523a3$var$createBuilder(this, $fddd5fa89d9523a3$var$createStyler(style.open, style.close, this[$fddd5fa89d9523a3$var$STYLER]), this[$fddd5fa89d9523a3$var$IS_EMPTY]);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$fddd5fa89d9523a3$var$styles.visible = {
    get () {
        const builder = $fddd5fa89d9523a3$var$createBuilder(this, this[$fddd5fa89d9523a3$var$STYLER], true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $fddd5fa89d9523a3$var$getModelAnsi = (model, level, type, ...arguments_)=>{
    if (model === 'rgb') {
        if (level === 'ansi16m') return $h527d.default[type].ansi16m(...arguments_);
        if (level === 'ansi256') return $h527d.default[type].ansi256($h527d.default.rgbToAnsi256(...arguments_));
        return $h527d.default[type].ansi($h527d.default.rgbToAnsi(...arguments_));
    }
    if (model === 'hex') return $fddd5fa89d9523a3$var$getModelAnsi('rgb', level, type, ...$h527d.default.hexToRgb(...arguments_));
    return $h527d.default[type][model](...arguments_);
};
const $fddd5fa89d9523a3$var$usedModels = [
    'rgb',
    'hex',
    'ansi256'
];
for (const model of $fddd5fa89d9523a3$var$usedModels){
    $fddd5fa89d9523a3$var$styles[model] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $fddd5fa89d9523a3$var$createStyler($fddd5fa89d9523a3$var$getModelAnsi(model, $fddd5fa89d9523a3$var$levelMapping[level], 'color', ...arguments_), $h527d.default.color.close, this[$fddd5fa89d9523a3$var$STYLER]);
                return $fddd5fa89d9523a3$var$createBuilder(this, styler, this[$fddd5fa89d9523a3$var$IS_EMPTY]);
            };
        }
    };
    const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
    $fddd5fa89d9523a3$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $fddd5fa89d9523a3$var$createStyler($fddd5fa89d9523a3$var$getModelAnsi(model, $fddd5fa89d9523a3$var$levelMapping[level], 'bgColor', ...arguments_), $h527d.default.bgColor.close, this[$fddd5fa89d9523a3$var$STYLER]);
                return $fddd5fa89d9523a3$var$createBuilder(this, styler, this[$fddd5fa89d9523a3$var$IS_EMPTY]);
            };
        }
    };
}
const $fddd5fa89d9523a3$var$proto = Object.defineProperties(()=>{
}, {
    ...$fddd5fa89d9523a3$var$styles,
    level: {
        enumerable: true,
        get () {
            return this[$fddd5fa89d9523a3$var$GENERATOR].level;
        },
        set (level) {
            this[$fddd5fa89d9523a3$var$GENERATOR].level = level;
        }
    }
});
const $fddd5fa89d9523a3$var$createStyler = (open, close, parent)=>{
    let openAll;
    let closeAll;
    if (parent === undefined) {
        openAll = open;
        closeAll = close;
    } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
    }
    return {
        open: open,
        close: close,
        openAll: openAll,
        closeAll: closeAll,
        parent: parent
    };
};
const $fddd5fa89d9523a3$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($fddd5fa89d9523a3$var$isArray(arguments_[0]) && $fddd5fa89d9523a3$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $fddd5fa89d9523a3$var$applyStyle(builder, $fddd5fa89d9523a3$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $fddd5fa89d9523a3$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $fddd5fa89d9523a3$var$proto);
    builder[$fddd5fa89d9523a3$var$GENERATOR] = self;
    builder[$fddd5fa89d9523a3$var$STYLER] = _styler;
    builder[$fddd5fa89d9523a3$var$IS_EMPTY] = _isEmpty;
    return builder;
};
const $fddd5fa89d9523a3$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self[$fddd5fa89d9523a3$var$IS_EMPTY] ? '' : string;
    let styler = self[$fddd5fa89d9523a3$var$STYLER];
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.includes('\u001B')) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $jVyQD.stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $jVyQD.stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
const $fddd5fa89d9523a3$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$fddd5fa89d9523a3$var$isArray(firstString) || !$fddd5fa89d9523a3$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    return $7LV6B.default(chalk, parts.join(''));
};
Object.defineProperties($fddd5fa89d9523a3$var$createChalk.prototype, $fddd5fa89d9523a3$var$styles);
const $fddd5fa89d9523a3$var$chalk = $fddd5fa89d9523a3$var$createChalk();
const $fddd5fa89d9523a3$export$46348ae7515f5916 = $fddd5fa89d9523a3$var$createChalk({
    level: $fddd5fa89d9523a3$export$e9dd22d6b9c0c455 ? $fddd5fa89d9523a3$export$e9dd22d6b9c0c455.level : 0
});
var $fddd5fa89d9523a3$export$9099ad97b570f7c = $fddd5fa89d9523a3$var$chalk;

});
parcelRequire.register("h527d", function(module, exports) {

$parcel$export(module.exports, "default", () => $c6f48b604bcc0391$export$9099ad97b570f7c);
const $c6f48b604bcc0391$var$ANSI_BACKGROUND_OFFSET = 10;
const $c6f48b604bcc0391$var$wrapAnsi16 = (offset = 0)=>(code)=>`\u001B[${code + offset}m`
;
const $c6f48b604bcc0391$var$wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`
;
const $c6f48b604bcc0391$var$wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`
;
function $c6f48b604bcc0391$var$assembleStyles() {
    const codes = new Map();
    const styles = {
        modifier: {
            reset: [
                0,
                0
            ],
            // 21 isn't widely supported and 22 does the same thing
            bold: [
                1,
                22
            ],
            dim: [
                2,
                22
            ],
            italic: [
                3,
                23
            ],
            underline: [
                4,
                24
            ],
            overline: [
                53,
                55
            ],
            inverse: [
                7,
                27
            ],
            hidden: [
                8,
                28
            ],
            strikethrough: [
                9,
                29
            ]
        },
        color: {
            black: [
                30,
                39
            ],
            red: [
                31,
                39
            ],
            green: [
                32,
                39
            ],
            yellow: [
                33,
                39
            ],
            blue: [
                34,
                39
            ],
            magenta: [
                35,
                39
            ],
            cyan: [
                36,
                39
            ],
            white: [
                37,
                39
            ],
            // Bright color
            blackBright: [
                90,
                39
            ],
            redBright: [
                91,
                39
            ],
            greenBright: [
                92,
                39
            ],
            yellowBright: [
                93,
                39
            ],
            blueBright: [
                94,
                39
            ],
            magentaBright: [
                95,
                39
            ],
            cyanBright: [
                96,
                39
            ],
            whiteBright: [
                97,
                39
            ]
        },
        bgColor: {
            bgBlack: [
                40,
                49
            ],
            bgRed: [
                41,
                49
            ],
            bgGreen: [
                42,
                49
            ],
            bgYellow: [
                43,
                49
            ],
            bgBlue: [
                44,
                49
            ],
            bgMagenta: [
                45,
                49
            ],
            bgCyan: [
                46,
                49
            ],
            bgWhite: [
                47,
                49
            ],
            // Bright color
            bgBlackBright: [
                100,
                49
            ],
            bgRedBright: [
                101,
                49
            ],
            bgGreenBright: [
                102,
                49
            ],
            bgYellowBright: [
                103,
                49
            ],
            bgBlueBright: [
                104,
                49
            ],
            bgMagentaBright: [
                105,
                49
            ],
            bgCyanBright: [
                106,
                49
            ],
            bgWhiteBright: [
                107,
                49
            ]
        }
    };
    // Alias bright black as gray (and grey)
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)){
        for (const [styleName, style] of Object.entries(group)){
            styles[styleName] = {
                open: `\u001B[${style[0]}m`,
                close: `\u001B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
        });
    }
    Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false
    });
    styles.color.close = '\u001B[39m';
    styles.bgColor.close = '\u001B[49m';
    styles.color.ansi = $c6f48b604bcc0391$var$wrapAnsi16();
    styles.color.ansi256 = $c6f48b604bcc0391$var$wrapAnsi256();
    styles.color.ansi16m = $c6f48b604bcc0391$var$wrapAnsi16m();
    styles.bgColor.ansi = $c6f48b604bcc0391$var$wrapAnsi16($c6f48b604bcc0391$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = $c6f48b604bcc0391$var$wrapAnsi256($c6f48b604bcc0391$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = $c6f48b604bcc0391$var$wrapAnsi16m($c6f48b604bcc0391$var$ANSI_BACKGROUND_OFFSET);
    // From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
    Object.defineProperties(styles, {
        rgbToAnsi256: {
            value: (red, green, blue)=>{
                // We use the extended greyscale palette here, with the exception of
                // black and white. normal palette only has 4 greyscale shades.
                if (red === green && green === blue) {
                    if (red < 8) return 16;
                    if (red > 248) return 231;
                    return Math.round((red - 8) / 247 * 24) + 232;
                }
                return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
            },
            enumerable: false
        },
        hexToRgb: {
            value: (hex)=>{
                const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
                if (!matches) return [
                    0,
                    0,
                    0
                ];
                let { colorString: colorString  } = matches.groups;
                if (colorString.length === 3) colorString = colorString.split('').map((character)=>character + character
                ).join('');
                const integer = Number.parseInt(colorString, 16);
                return [
                    integer >> 16 & 255,
                    integer >> 8 & 255,
                    integer & 255
                ];
            },
            enumerable: false
        },
        hexToAnsi256: {
            value: (hex)=>styles.rgbToAnsi256(...styles.hexToRgb(hex))
            ,
            enumerable: false
        },
        ansi256ToAnsi: {
            value: (code)=>{
                if (code < 8) return 30 + code;
                if (code < 16) return 90 + (code - 8);
                let red;
                let green;
                let blue;
                if (code >= 232) {
                    red = ((code - 232) * 10 + 8) / 255;
                    green = red;
                    blue = red;
                } else {
                    code -= 16;
                    const remainder = code % 36;
                    red = Math.floor(code / 36) / 5;
                    green = Math.floor(remainder / 6) / 5;
                    blue = remainder % 6 / 5;
                }
                const value = Math.max(red, green, blue) * 2;
                if (value === 0) return 30;
                let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
                if (value === 2) result += 60;
                return result;
            },
            enumerable: false
        },
        rgbToAnsi: {
            value: (red, green, blue)=>styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue))
            ,
            enumerable: false
        },
        hexToAnsi: {
            value: (hex)=>styles.ansi256ToAnsi(styles.hexToAnsi256(hex))
            ,
            enumerable: false
        }
    });
    return styles;
}
const $c6f48b604bcc0391$var$ansiStyles = $c6f48b604bcc0391$var$assembleStyles();
var $c6f48b604bcc0391$export$9099ad97b570f7c = $c6f48b604bcc0391$var$ansiStyles;

});

parcelRequire.register("75teS", function(module, exports) {

$parcel$export(module.exports, "default", () => $528fae4305378571$export$9099ad97b570f7c);

var $ahD0O = parcelRequire("ahD0O");

function $528fae4305378571$var$isatty(fd) {
    if (typeof fd !== "number") return false;
    try {
        return Deno.isatty(fd);
    } catch (_) {
        // if deno failed, try node
        try {
            var tty = (parcelRequire("4BChY"));
            return tty.isatty(fd);
        } catch (error) {
        }
        return false;
    }
}
let $528fae4305378571$var$env = {
};

try {
    $528fae4305378571$var$env = Deno.env.toObject();
} catch (error) {
    try {
        $528fae4305378571$var$env = (parcelRequire("ewvuw")).env;
    } catch (error1) {
    }
}
let $528fae4305378571$var$flagForceColor;
if ($ahD0O.default("no-color") || $ahD0O.default("no-colors") || $ahD0O.default("color=false") || $ahD0O.default("color=never")) $528fae4305378571$var$flagForceColor = 0;
else if ($ahD0O.default("color") || $ahD0O.default("colors") || $ahD0O.default("color=true") || $ahD0O.default("color=always")) $528fae4305378571$var$flagForceColor = 1;
function $528fae4305378571$var$envForceColor() {
    if ("FORCE_COLOR" in $528fae4305378571$var$env) {
        if ($528fae4305378571$var$env.FORCE_COLOR === "true") return 1;
        if ($528fae4305378571$var$env.FORCE_COLOR === "false") return 0;
        return $528fae4305378571$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt($528fae4305378571$var$env.FORCE_COLOR, 10), 3);
    }
}
function $528fae4305378571$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}

function $528fae4305378571$var$_supportsColor(haveStream, { streamIsTTY: streamIsTTY , sniffFlags: sniffFlags = true  } = {
}) {
    const noFlagForceColor = $528fae4305378571$var$envForceColor();
    if (noFlagForceColor !== undefined) $528fae4305378571$var$flagForceColor = noFlagForceColor;
    const forceColor = sniffFlags ? $528fae4305378571$var$flagForceColor : noFlagForceColor;
    if (forceColor === 0) return 0;
    if (sniffFlags) {
        if ($ahD0O.default("color=16m") || $ahD0O.default("color=full") || $ahD0O.default("color=truecolor")) return 3;
        if ($ahD0O.default("color=256")) return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) return 0;
    const min = forceColor || 0;
    if ($528fae4305378571$var$env.TERM === "dumb") return min;
    let os;
    try {
        os = Deno.build.os;
    } catch (error) {
        try {
            os = (parcelRequire("ewvuw")).platform;
        } catch (error1) {
        }
    }
    if (os === "win32") // TODO could not find how to get the OS release in Deno, the `Deno.osRelease()` (found in std/node/os) does not seem to work
    // // Windows 10 build 10586 is the first Windows release that supports 256 colors.
    // // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
    // const osRelease = os.release().split('.')
    // if (
    // 	Number(osRelease[0]) >= 10 &&
    // 	Number(osRelease[2]) >= 10586
    // ) {
    // 	return Number(osRelease[2]) >= 14931 ? 3 : 2
    // }
    return 1;
    if ("CI" in $528fae4305378571$var$env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE",
            "DRONE", 
        ].some((sign)=>sign in $528fae4305378571$var$env
        ) || $528fae4305378571$var$env.CI_NAME === "codeship") return 1;
        return min;
    }
    if ("TEAMCITY_VERSION" in $528fae4305378571$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($528fae4305378571$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($528fae4305378571$var$env.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in $528fae4305378571$var$env) {
        const version = Number.parseInt(($528fae4305378571$var$env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch($528fae4305378571$var$env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test($528fae4305378571$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($528fae4305378571$var$env.TERM)) return 1;
    if ("COLORTERM" in $528fae4305378571$var$env) return 1;
    return min;
}
function $528fae4305378571$export$104f125f7782dcf1(stream, options = {
}) {
    const level = $528fae4305378571$var$_supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options
    });
    return $528fae4305378571$var$translateLevel(level);
}
const $528fae4305378571$var$supportsColor = {
    stdout: $528fae4305378571$export$104f125f7782dcf1({
        isTTY: $528fae4305378571$var$isatty(1)
    }),
    stderr: $528fae4305378571$export$104f125f7782dcf1({
        isTTY: $528fae4305378571$var$isatty(2)
    })
};
var $528fae4305378571$export$9099ad97b570f7c = $528fae4305378571$var$supportsColor;

});
parcelRequire.register("ahD0O", function(module, exports) {

$parcel$export(module.exports, "default", () => $77c9c0e708d2416d$export$9099ad97b570f7c);
let $77c9c0e708d2416d$var$args = [];

try {
    $77c9c0e708d2416d$var$args = Deno.args;
} catch (error) {
    try {
        const [_1, _2, ...argvs] = (parcelRequire("ewvuw")).argv;
        $77c9c0e708d2416d$var$args = argvs;
    } catch (error1) {
    }
}
function $77c9c0e708d2416d$export$9099ad97b570f7c(flag, argv = $77c9c0e708d2416d$var$args) {
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}

});
parcelRequire.register("ewvuw", function(module, exports) {
// shim for using process in browser
var $a92c7b5d984e6e9f$var$process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $a92c7b5d984e6e9f$var$cachedSetTimeout;
var $a92c7b5d984e6e9f$var$cachedClearTimeout;
function $a92c7b5d984e6e9f$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $a92c7b5d984e6e9f$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $a92c7b5d984e6e9f$var$cachedSetTimeout = setTimeout;
        else $a92c7b5d984e6e9f$var$cachedSetTimeout = $a92c7b5d984e6e9f$var$defaultSetTimout;
    } catch (e) {
        $a92c7b5d984e6e9f$var$cachedSetTimeout = $a92c7b5d984e6e9f$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $a92c7b5d984e6e9f$var$cachedClearTimeout = clearTimeout;
        else $a92c7b5d984e6e9f$var$cachedClearTimeout = $a92c7b5d984e6e9f$var$defaultClearTimeout;
    } catch (e) {
        $a92c7b5d984e6e9f$var$cachedClearTimeout = $a92c7b5d984e6e9f$var$defaultClearTimeout;
    }
})();
function $a92c7b5d984e6e9f$var$runTimeout(fun) {
    if ($a92c7b5d984e6e9f$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($a92c7b5d984e6e9f$var$cachedSetTimeout === $a92c7b5d984e6e9f$var$defaultSetTimout || !$a92c7b5d984e6e9f$var$cachedSetTimeout) && setTimeout) {
        $a92c7b5d984e6e9f$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $a92c7b5d984e6e9f$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $a92c7b5d984e6e9f$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $a92c7b5d984e6e9f$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $a92c7b5d984e6e9f$var$runClearTimeout(marker) {
    if ($a92c7b5d984e6e9f$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($a92c7b5d984e6e9f$var$cachedClearTimeout === $a92c7b5d984e6e9f$var$defaultClearTimeout || !$a92c7b5d984e6e9f$var$cachedClearTimeout) && clearTimeout) {
        $a92c7b5d984e6e9f$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $a92c7b5d984e6e9f$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $a92c7b5d984e6e9f$var$cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $a92c7b5d984e6e9f$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $a92c7b5d984e6e9f$var$queue = [];
var $a92c7b5d984e6e9f$var$draining = false;
var $a92c7b5d984e6e9f$var$currentQueue;
var $a92c7b5d984e6e9f$var$queueIndex = -1;
function $a92c7b5d984e6e9f$var$cleanUpNextTick() {
    if (!$a92c7b5d984e6e9f$var$draining || !$a92c7b5d984e6e9f$var$currentQueue) return;
    $a92c7b5d984e6e9f$var$draining = false;
    if ($a92c7b5d984e6e9f$var$currentQueue.length) $a92c7b5d984e6e9f$var$queue = $a92c7b5d984e6e9f$var$currentQueue.concat($a92c7b5d984e6e9f$var$queue);
    else $a92c7b5d984e6e9f$var$queueIndex = -1;
    if ($a92c7b5d984e6e9f$var$queue.length) $a92c7b5d984e6e9f$var$drainQueue();
}
function $a92c7b5d984e6e9f$var$drainQueue() {
    if ($a92c7b5d984e6e9f$var$draining) return;
    var timeout = $a92c7b5d984e6e9f$var$runTimeout($a92c7b5d984e6e9f$var$cleanUpNextTick);
    $a92c7b5d984e6e9f$var$draining = true;
    var len = $a92c7b5d984e6e9f$var$queue.length;
    while(len){
        $a92c7b5d984e6e9f$var$currentQueue = $a92c7b5d984e6e9f$var$queue;
        $a92c7b5d984e6e9f$var$queue = [];
        while((++$a92c7b5d984e6e9f$var$queueIndex) < len)if ($a92c7b5d984e6e9f$var$currentQueue) $a92c7b5d984e6e9f$var$currentQueue[$a92c7b5d984e6e9f$var$queueIndex].run();
        $a92c7b5d984e6e9f$var$queueIndex = -1;
        len = $a92c7b5d984e6e9f$var$queue.length;
    }
    $a92c7b5d984e6e9f$var$currentQueue = null;
    $a92c7b5d984e6e9f$var$draining = false;
    $a92c7b5d984e6e9f$var$runClearTimeout(timeout);
}
$a92c7b5d984e6e9f$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $a92c7b5d984e6e9f$var$queue.push(new $a92c7b5d984e6e9f$var$Item(fun, args));
    if ($a92c7b5d984e6e9f$var$queue.length === 1 && !$a92c7b5d984e6e9f$var$draining) $a92c7b5d984e6e9f$var$runTimeout($a92c7b5d984e6e9f$var$drainQueue);
};
// v8 likes predictible objects
function $a92c7b5d984e6e9f$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$a92c7b5d984e6e9f$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$a92c7b5d984e6e9f$var$process.title = 'browser';
$a92c7b5d984e6e9f$var$process.browser = true;
$a92c7b5d984e6e9f$var$process.env = {
};
$a92c7b5d984e6e9f$var$process.argv = [];
$a92c7b5d984e6e9f$var$process.version = ''; // empty string to avoid regexp issues
$a92c7b5d984e6e9f$var$process.versions = {
};
function $a92c7b5d984e6e9f$var$noop() {
}
$a92c7b5d984e6e9f$var$process.on = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.addListener = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.once = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.off = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.removeListener = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.removeAllListeners = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.emit = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.prependListener = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.prependOnceListener = $a92c7b5d984e6e9f$var$noop;
$a92c7b5d984e6e9f$var$process.listeners = function(name) {
    return [];
};
$a92c7b5d984e6e9f$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$a92c7b5d984e6e9f$var$process.cwd = function() {
    return '/';
};
$a92c7b5d984e6e9f$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$a92c7b5d984e6e9f$var$process.umask = function() {
    return 0;
};

});


parcelRequire.register("4BChY", function(module, exports) {

$parcel$export(module.exports, "WriteStream", () => $35a851831d5f7693$export$1953153abafa5eda, (v) => $35a851831d5f7693$export$1953153abafa5eda = v);
$parcel$export(module.exports, "isatty", () => $35a851831d5f7693$export$72dd798ff3d6c7cd, (v) => $35a851831d5f7693$export$72dd798ff3d6c7cd = v);
$parcel$export(module.exports, "ReadStream", () => $35a851831d5f7693$export$8247c093a68e0242, (v) => $35a851831d5f7693$export$8247c093a68e0242 = v);
var $35a851831d5f7693$export$1953153abafa5eda;
var $35a851831d5f7693$export$8247c093a68e0242;
var $35a851831d5f7693$export$72dd798ff3d6c7cd;
$35a851831d5f7693$export$72dd798ff3d6c7cd = function() {
    return false;
};
function $35a851831d5f7693$var$ReadStream() {
    throw new Error('tty.ReadStream is not implemented');
}
$35a851831d5f7693$export$8247c093a68e0242 = $35a851831d5f7693$var$ReadStream;
function $35a851831d5f7693$var$WriteStream() {
    throw new Error('tty.WriteStream is not implemented');
}
$35a851831d5f7693$export$1953153abafa5eda = $35a851831d5f7693$var$WriteStream;

});


parcelRequire.register("jVyQD", function(module, exports) {

$parcel$export(module.exports, "stringEncaseCRLFWithFirstIndex", () => $e81e5f4ac5214b19$export$7797e13f30e96f2c);
$parcel$export(module.exports, "stringReplaceAll", () => $e81e5f4ac5214b19$export$fbb981a622011428);
function $e81e5f4ac5214b19$export$fbb981a622011428(string, substring, replacer) {
    let index = string.indexOf(substring);
    if (index === -1) return string;
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = '';
    do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
    }while (index !== -1)
    returnValue += string.slice(endIndex);
    return returnValue;
}
function $e81e5f4ac5214b19$export$7797e13f30e96f2c(string, prefix, postfix, index) {
    let endIndex = 0;
    let returnValue = '';
    do {
        const gotCR = string[index - 1] === '\r';
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
        endIndex = index + 1;
        index = string.indexOf('\n', endIndex);
    }while (index !== -1)
    returnValue += string.slice(endIndex);
    return returnValue;
}

});

parcelRequire.register("7LV6B", function(module, exports) {

$parcel$export(module.exports, "default", () => $5a893827d4540656$export$9099ad97b570f7c);
const $5a893827d4540656$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $5a893827d4540656$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $5a893827d4540656$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $5a893827d4540656$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $5a893827d4540656$var$ESCAPES = new Map([
    [
        'n',
        '\n'
    ],
    [
        'r',
        '\r'
    ],
    [
        't',
        '\t'
    ],
    [
        'b',
        '\b'
    ],
    [
        'f',
        '\f'
    ],
    [
        'v',
        '\v'
    ],
    [
        '0',
        '\0'
    ],
    [
        '\\',
        '\\'
    ],
    [
        'e',
        '\u001B'
    ],
    [
        'a',
        '\u0007'
    ]
]);
function $5a893827d4540656$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(Number.parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(Number.parseInt(c.slice(2, -1), 16));
    return $5a893827d4540656$var$ESCAPES.get(c) || c;
}
function $5a893827d4540656$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($5a893827d4540656$var$STRING_REGEX)) results.push(matches[2].replace($5a893827d4540656$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $5a893827d4540656$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $5a893827d4540656$var$parseStyle(style) {
    $5a893827d4540656$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $5a893827d4540656$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $5a893827d4540656$var$parseArguments(name, matches[2]);
            results.push([
                name,
                ...args
            ]);
        } else results.push([
            name
        ]);
    }
    return results;
}
function $5a893827d4540656$var$buildStyle(chalk, styles) {
    const enabled = {
    };
    for (const layer of styles)for (const style of layer.styles)enabled[style[0]] = layer.inverse ? null : style.slice(1);
    let current = chalk;
    for (const [styleName, styles1] of Object.entries(enabled)){
        if (!Array.isArray(styles1)) continue;
        if (!(styleName in current)) throw new Error(`Unknown Chalk style: ${styleName}`);
        current = styles1.length > 0 ? current[styleName](...styles1) : current[styleName];
    }
    return current;
}
function $5a893827d4540656$export$9099ad97b570f7c(chalk, temporary) {
    const styles = [];
    const chunks = [];
    let chunk = [];
    // eslint-disable-next-line max-params
    temporary.replace($5a893827d4540656$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($5a893827d4540656$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $5a893827d4540656$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $5a893827d4540656$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($5a893827d4540656$var$buildStyle(chalk, styles)(chunk.join('')));
            chunk = [];
            styles.pop();
        } else chunk.push(character);
    });
    chunks.push(chunk.join(''));
    if (styles.length > 0) {
        const errorMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
        throw new Error(errorMessage);
    }
    return chunks.join('');
}

});


parcelRequire.register("3xbWd", function(module, exports) {

var $ewvuw = parcelRequire("ewvuw");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var $292db6cc5cf238f4$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {
    };
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $292db6cc5cf238f4$var$formatRegExp = /%[sdj%]/g;
module.exports.format = function(f) {
    if (!$292db6cc5cf238f4$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($292db6cc5cf238f4$var$inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($292db6cc5cf238f4$var$formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch(x){
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for(var x = args[i]; i < len; x = args[++i])if ($292db6cc5cf238f4$var$isNull(x) || !$292db6cc5cf238f4$var$isObject(x)) str += ' ' + x;
    else str += ' ' + $292db6cc5cf238f4$var$inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
module.exports.deprecate = function(fn, msg) {
    if (typeof $ewvuw !== 'undefined' && $ewvuw.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof $ewvuw === 'undefined') return function() {
        return module.exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if ($ewvuw.throwDeprecation) throw new Error(msg);
            else if ($ewvuw.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var $292db6cc5cf238f4$var$debugs = {
};
var $292db6cc5cf238f4$var$debugEnvRegex = /^$/;
var $292db6cc5cf238f4$var$debugEnv;
module.exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$292db6cc5cf238f4$var$debugs[set]) {
        if ($292db6cc5cf238f4$var$debugEnvRegex.test(set)) {
            var pid = $ewvuw.pid;
            $292db6cc5cf238f4$var$debugs[set] = function() {
                var msg = module.exports.format.apply(module.exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else $292db6cc5cf238f4$var$debugs[set] = function() {
        };
    }
    return $292db6cc5cf238f4$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $292db6cc5cf238f4$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $292db6cc5cf238f4$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($292db6cc5cf238f4$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    module.exports._extend(ctx, opts);
    // set default options
    if ($292db6cc5cf238f4$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($292db6cc5cf238f4$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($292db6cc5cf238f4$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($292db6cc5cf238f4$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $292db6cc5cf238f4$var$stylizeWithColor;
    return $292db6cc5cf238f4$var$formatValue(ctx, obj, ctx.depth);
}
module.exports.inspect = $292db6cc5cf238f4$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$292db6cc5cf238f4$var$inspect.colors = {
    'bold': [
        1,
        22
    ],
    'italic': [
        3,
        23
    ],
    'underline': [
        4,
        24
    ],
    'inverse': [
        7,
        27
    ],
    'white': [
        37,
        39
    ],
    'grey': [
        90,
        39
    ],
    'black': [
        30,
        39
    ],
    'blue': [
        34,
        39
    ],
    'cyan': [
        36,
        39
    ],
    'green': [
        32,
        39
    ],
    'magenta': [
        35,
        39
    ],
    'red': [
        31,
        39
    ],
    'yellow': [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
$292db6cc5cf238f4$var$inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function $292db6cc5cf238f4$var$stylizeWithColor(str, styleType) {
    var style = $292db6cc5cf238f4$var$inspect.styles[styleType];
    if (style) return '\u001b[' + $292db6cc5cf238f4$var$inspect.colors[style][0] + 'm' + str + '\u001b[' + $292db6cc5cf238f4$var$inspect.colors[style][1] + 'm';
    else return str;
}
function $292db6cc5cf238f4$var$stylizeNoColor(str, styleType) {
    return str;
}
function $292db6cc5cf238f4$var$arrayToHash(array) {
    var hash = {
    };
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $292db6cc5cf238f4$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $292db6cc5cf238f4$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== module.exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$292db6cc5cf238f4$var$isString(ret)) ret = $292db6cc5cf238f4$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $292db6cc5cf238f4$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $292db6cc5cf238f4$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($292db6cc5cf238f4$var$isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return $292db6cc5cf238f4$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($292db6cc5cf238f4$var$isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if ($292db6cc5cf238f4$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if ($292db6cc5cf238f4$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if ($292db6cc5cf238f4$var$isError(value)) return $292db6cc5cf238f4$var$formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if ($292db6cc5cf238f4$var$isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if ($292db6cc5cf238f4$var$isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if ($292db6cc5cf238f4$var$isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($292db6cc5cf238f4$var$isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($292db6cc5cf238f4$var$isError(value)) base = ' ' + $292db6cc5cf238f4$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($292db6cc5cf238f4$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $292db6cc5cf238f4$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $292db6cc5cf238f4$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $292db6cc5cf238f4$var$reduceToSingleString(output, base, braces);
}
function $292db6cc5cf238f4$var$formatPrimitive(ctx, value) {
    if ($292db6cc5cf238f4$var$isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if ($292db6cc5cf238f4$var$isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if ($292db6cc5cf238f4$var$isNumber(value)) return ctx.stylize('' + value, 'number');
    if ($292db6cc5cf238f4$var$isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if ($292db6cc5cf238f4$var$isNull(value)) return ctx.stylize('null', 'null');
}
function $292db6cc5cf238f4$var$formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function $292db6cc5cf238f4$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($292db6cc5cf238f4$var$hasOwnProperty(value, String(i))) output.push($292db6cc5cf238f4$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($292db6cc5cf238f4$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $292db6cc5cf238f4$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!$292db6cc5cf238f4$var$hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($292db6cc5cf238f4$var$isNull(recurseTimes)) str = $292db6cc5cf238f4$var$formatValue(ctx, desc.value, null);
            else str = $292db6cc5cf238f4$var$formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf('\n') > -1) {
                if (array) str = str.split('\n').map(function(line) {
                    return '  ' + line;
                }).join('\n').substr(2);
                else str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                }).join('\n');
            }
        } else str = ctx.stylize('[Circular]', 'special');
    }
    if ($292db6cc5cf238f4$var$isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function $292db6cc5cf238f4$var$reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
module.exports.types = (parcelRequire("h96W4"));
function $292db6cc5cf238f4$var$isArray(ar) {
    return Array.isArray(ar);
}
module.exports.isArray = $292db6cc5cf238f4$var$isArray;
function $292db6cc5cf238f4$var$isBoolean(arg) {
    return typeof arg === 'boolean';
}
module.exports.isBoolean = $292db6cc5cf238f4$var$isBoolean;
function $292db6cc5cf238f4$var$isNull(arg) {
    return arg === null;
}
module.exports.isNull = $292db6cc5cf238f4$var$isNull;
function $292db6cc5cf238f4$var$isNullOrUndefined(arg) {
    return arg == null;
}
module.exports.isNullOrUndefined = $292db6cc5cf238f4$var$isNullOrUndefined;
function $292db6cc5cf238f4$var$isNumber(arg) {
    return typeof arg === 'number';
}
module.exports.isNumber = $292db6cc5cf238f4$var$isNumber;
function $292db6cc5cf238f4$var$isString(arg) {
    return typeof arg === 'string';
}
module.exports.isString = $292db6cc5cf238f4$var$isString;
function $292db6cc5cf238f4$var$isSymbol(arg) {
    return typeof arg === 'symbol';
}
module.exports.isSymbol = $292db6cc5cf238f4$var$isSymbol;
function $292db6cc5cf238f4$var$isUndefined(arg) {
    return arg === void 0;
}
module.exports.isUndefined = $292db6cc5cf238f4$var$isUndefined;
function $292db6cc5cf238f4$var$isRegExp(re) {
    return $292db6cc5cf238f4$var$isObject(re) && $292db6cc5cf238f4$var$objectToString(re) === '[object RegExp]';
}
module.exports.isRegExp = $292db6cc5cf238f4$var$isRegExp;
module.exports.types.isRegExp = $292db6cc5cf238f4$var$isRegExp;
function $292db6cc5cf238f4$var$isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
module.exports.isObject = $292db6cc5cf238f4$var$isObject;
function $292db6cc5cf238f4$var$isDate(d) {
    return $292db6cc5cf238f4$var$isObject(d) && $292db6cc5cf238f4$var$objectToString(d) === '[object Date]';
}
module.exports.isDate = $292db6cc5cf238f4$var$isDate;
module.exports.types.isDate = $292db6cc5cf238f4$var$isDate;
function $292db6cc5cf238f4$var$isError(e) {
    return $292db6cc5cf238f4$var$isObject(e) && ($292db6cc5cf238f4$var$objectToString(e) === '[object Error]' || e instanceof Error);
}
module.exports.isError = $292db6cc5cf238f4$var$isError;
module.exports.types.isNativeError = $292db6cc5cf238f4$var$isError;
function $292db6cc5cf238f4$var$isFunction(arg) {
    return typeof arg === 'function';
}
module.exports.isFunction = $292db6cc5cf238f4$var$isFunction;
function $292db6cc5cf238f4$var$isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
module.exports.isPrimitive = $292db6cc5cf238f4$var$isPrimitive;

module.exports.isBuffer = (parcelRequire("iwya7"));
function $292db6cc5cf238f4$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $292db6cc5cf238f4$var$pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var $292db6cc5cf238f4$var$months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 26 Feb 16:19:34
function $292db6cc5cf238f4$var$timestamp() {
    var d = new Date();
    var time = [
        $292db6cc5cf238f4$var$pad(d.getHours()),
        $292db6cc5cf238f4$var$pad(d.getMinutes()),
        $292db6cc5cf238f4$var$pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        $292db6cc5cf238f4$var$months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
module.exports.log = function() {
    console.log('%s - %s', $292db6cc5cf238f4$var$timestamp(), module.exports.format.apply(module.exports, arguments));
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ module.exports.inherits = (parcelRequire("eeC3p"));
module.exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$292db6cc5cf238f4$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $292db6cc5cf238f4$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $292db6cc5cf238f4$var$kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
module.exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if ($292db6cc5cf238f4$var$kCustomPromisifiedSymbol && original[$292db6cc5cf238f4$var$kCustomPromisifiedSymbol]) {
        var fn = original[$292db6cc5cf238f4$var$kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $292db6cc5cf238f4$var$kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if ($292db6cc5cf238f4$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $292db6cc5cf238f4$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $292db6cc5cf238f4$var$getOwnPropertyDescriptors(original));
};
module.exports.promisify.custom = $292db6cc5cf238f4$var$kCustomPromisifiedSymbol;
function $292db6cc5cf238f4$var$callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function $292db6cc5cf238f4$var$callbackify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== 'function') throw new TypeError('The last argument must be of type Function');
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            $ewvuw.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            $ewvuw.nextTick($292db6cc5cf238f4$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $292db6cc5cf238f4$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
module.exports.callbackify = $292db6cc5cf238f4$var$callbackify;

});
parcelRequire.register("h96W4", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';

var $alMHE = parcelRequire("alMHE");

var $liNZQ = parcelRequire("liNZQ");

var $8pHxd = parcelRequire("8pHxd");

var $fV6Lw = parcelRequire("fV6Lw");
function $c7b8a83128cdd6c4$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $c7b8a83128cdd6c4$var$BigIntSupported = typeof BigInt !== 'undefined';
var $c7b8a83128cdd6c4$var$SymbolSupported = typeof Symbol !== 'undefined';
var $c7b8a83128cdd6c4$var$ObjectToString = $c7b8a83128cdd6c4$var$uncurryThis(Object.prototype.toString);
var $c7b8a83128cdd6c4$var$numberValue = $c7b8a83128cdd6c4$var$uncurryThis(Number.prototype.valueOf);
var $c7b8a83128cdd6c4$var$stringValue = $c7b8a83128cdd6c4$var$uncurryThis(String.prototype.valueOf);
var $c7b8a83128cdd6c4$var$booleanValue = $c7b8a83128cdd6c4$var$uncurryThis(Boolean.prototype.valueOf);
if ($c7b8a83128cdd6c4$var$BigIntSupported) var $c7b8a83128cdd6c4$var$bigIntValue = $c7b8a83128cdd6c4$var$uncurryThis(BigInt.prototype.valueOf);
if ($c7b8a83128cdd6c4$var$SymbolSupported) var $c7b8a83128cdd6c4$var$symbolValue = $c7b8a83128cdd6c4$var$uncurryThis(Symbol.prototype.valueOf);
function $c7b8a83128cdd6c4$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $alMHE;
module.exports.isGeneratorFunction = $liNZQ;
module.exports.isTypedArray = $fV6Lw;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $c7b8a83128cdd6c4$var$isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
module.exports.isPromise = $c7b8a83128cdd6c4$var$isPromise;
function $c7b8a83128cdd6c4$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $fV6Lw(value) || $c7b8a83128cdd6c4$var$isDataView(value);
}
module.exports.isArrayBufferView = $c7b8a83128cdd6c4$var$isArrayBufferView;
function $c7b8a83128cdd6c4$var$isUint8Array(value) {
    return $8pHxd(value) === 'Uint8Array';
}
module.exports.isUint8Array = $c7b8a83128cdd6c4$var$isUint8Array;
function $c7b8a83128cdd6c4$var$isUint8ClampedArray(value) {
    return $8pHxd(value) === 'Uint8ClampedArray';
}
module.exports.isUint8ClampedArray = $c7b8a83128cdd6c4$var$isUint8ClampedArray;
function $c7b8a83128cdd6c4$var$isUint16Array(value) {
    return $8pHxd(value) === 'Uint16Array';
}
module.exports.isUint16Array = $c7b8a83128cdd6c4$var$isUint16Array;
function $c7b8a83128cdd6c4$var$isUint32Array(value) {
    return $8pHxd(value) === 'Uint32Array';
}
module.exports.isUint32Array = $c7b8a83128cdd6c4$var$isUint32Array;
function $c7b8a83128cdd6c4$var$isInt8Array(value) {
    return $8pHxd(value) === 'Int8Array';
}
module.exports.isInt8Array = $c7b8a83128cdd6c4$var$isInt8Array;
function $c7b8a83128cdd6c4$var$isInt16Array(value) {
    return $8pHxd(value) === 'Int16Array';
}
module.exports.isInt16Array = $c7b8a83128cdd6c4$var$isInt16Array;
function $c7b8a83128cdd6c4$var$isInt32Array(value) {
    return $8pHxd(value) === 'Int32Array';
}
module.exports.isInt32Array = $c7b8a83128cdd6c4$var$isInt32Array;
function $c7b8a83128cdd6c4$var$isFloat32Array(value) {
    return $8pHxd(value) === 'Float32Array';
}
module.exports.isFloat32Array = $c7b8a83128cdd6c4$var$isFloat32Array;
function $c7b8a83128cdd6c4$var$isFloat64Array(value) {
    return $8pHxd(value) === 'Float64Array';
}
module.exports.isFloat64Array = $c7b8a83128cdd6c4$var$isFloat64Array;
function $c7b8a83128cdd6c4$var$isBigInt64Array(value) {
    return $8pHxd(value) === 'BigInt64Array';
}
module.exports.isBigInt64Array = $c7b8a83128cdd6c4$var$isBigInt64Array;
function $c7b8a83128cdd6c4$var$isBigUint64Array(value) {
    return $8pHxd(value) === 'BigUint64Array';
}
module.exports.isBigUint64Array = $c7b8a83128cdd6c4$var$isBigUint64Array;
function $c7b8a83128cdd6c4$var$isMapToString(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object Map]';
}
$c7b8a83128cdd6c4$var$isMapToString.working = typeof Map !== 'undefined' && $c7b8a83128cdd6c4$var$isMapToString(new Map());
function $c7b8a83128cdd6c4$var$isMap(value) {
    if (typeof Map === 'undefined') return false;
    return $c7b8a83128cdd6c4$var$isMapToString.working ? $c7b8a83128cdd6c4$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $c7b8a83128cdd6c4$var$isMap;
function $c7b8a83128cdd6c4$var$isSetToString(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object Set]';
}
$c7b8a83128cdd6c4$var$isSetToString.working = typeof Set !== 'undefined' && $c7b8a83128cdd6c4$var$isSetToString(new Set());
function $c7b8a83128cdd6c4$var$isSet(value) {
    if (typeof Set === 'undefined') return false;
    return $c7b8a83128cdd6c4$var$isSetToString.working ? $c7b8a83128cdd6c4$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $c7b8a83128cdd6c4$var$isSet;
function $c7b8a83128cdd6c4$var$isWeakMapToString(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object WeakMap]';
}
$c7b8a83128cdd6c4$var$isWeakMapToString.working = typeof WeakMap !== 'undefined' && $c7b8a83128cdd6c4$var$isWeakMapToString(new WeakMap());
function $c7b8a83128cdd6c4$var$isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return $c7b8a83128cdd6c4$var$isWeakMapToString.working ? $c7b8a83128cdd6c4$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $c7b8a83128cdd6c4$var$isWeakMap;
function $c7b8a83128cdd6c4$var$isWeakSetToString(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object WeakSet]';
}
$c7b8a83128cdd6c4$var$isWeakSetToString.working = typeof WeakSet !== 'undefined' && $c7b8a83128cdd6c4$var$isWeakSetToString(new WeakSet());
function $c7b8a83128cdd6c4$var$isWeakSet(value) {
    return $c7b8a83128cdd6c4$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $c7b8a83128cdd6c4$var$isWeakSet;
function $c7b8a83128cdd6c4$var$isArrayBufferToString(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object ArrayBuffer]';
}
$c7b8a83128cdd6c4$var$isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && $c7b8a83128cdd6c4$var$isArrayBufferToString(new ArrayBuffer());
function $c7b8a83128cdd6c4$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return $c7b8a83128cdd6c4$var$isArrayBufferToString.working ? $c7b8a83128cdd6c4$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $c7b8a83128cdd6c4$var$isArrayBuffer;
function $c7b8a83128cdd6c4$var$isDataViewToString(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object DataView]';
}
$c7b8a83128cdd6c4$var$isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && $c7b8a83128cdd6c4$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $c7b8a83128cdd6c4$var$isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return $c7b8a83128cdd6c4$var$isDataViewToString.working ? $c7b8a83128cdd6c4$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $c7b8a83128cdd6c4$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $c7b8a83128cdd6c4$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function $c7b8a83128cdd6c4$var$isSharedArrayBufferToString(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object SharedArrayBuffer]';
}
function $c7b8a83128cdd6c4$var$isSharedArrayBuffer(value) {
    if (typeof $c7b8a83128cdd6c4$var$SharedArrayBufferCopy === 'undefined') return false;
    if (typeof $c7b8a83128cdd6c4$var$isSharedArrayBufferToString.working === 'undefined') $c7b8a83128cdd6c4$var$isSharedArrayBufferToString.working = $c7b8a83128cdd6c4$var$isSharedArrayBufferToString(new $c7b8a83128cdd6c4$var$SharedArrayBufferCopy());
    return $c7b8a83128cdd6c4$var$isSharedArrayBufferToString.working ? $c7b8a83128cdd6c4$var$isSharedArrayBufferToString(value) : value instanceof $c7b8a83128cdd6c4$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $c7b8a83128cdd6c4$var$isSharedArrayBuffer;
function $c7b8a83128cdd6c4$var$isAsyncFunction(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object AsyncFunction]';
}
module.exports.isAsyncFunction = $c7b8a83128cdd6c4$var$isAsyncFunction;
function $c7b8a83128cdd6c4$var$isMapIterator(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object Map Iterator]';
}
module.exports.isMapIterator = $c7b8a83128cdd6c4$var$isMapIterator;
function $c7b8a83128cdd6c4$var$isSetIterator(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object Set Iterator]';
}
module.exports.isSetIterator = $c7b8a83128cdd6c4$var$isSetIterator;
function $c7b8a83128cdd6c4$var$isGeneratorObject(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object Generator]';
}
module.exports.isGeneratorObject = $c7b8a83128cdd6c4$var$isGeneratorObject;
function $c7b8a83128cdd6c4$var$isWebAssemblyCompiledModule(value) {
    return $c7b8a83128cdd6c4$var$ObjectToString(value) === '[object WebAssembly.Module]';
}
module.exports.isWebAssemblyCompiledModule = $c7b8a83128cdd6c4$var$isWebAssemblyCompiledModule;
function $c7b8a83128cdd6c4$var$isNumberObject(value) {
    return $c7b8a83128cdd6c4$var$checkBoxedPrimitive(value, $c7b8a83128cdd6c4$var$numberValue);
}
module.exports.isNumberObject = $c7b8a83128cdd6c4$var$isNumberObject;
function $c7b8a83128cdd6c4$var$isStringObject(value) {
    return $c7b8a83128cdd6c4$var$checkBoxedPrimitive(value, $c7b8a83128cdd6c4$var$stringValue);
}
module.exports.isStringObject = $c7b8a83128cdd6c4$var$isStringObject;
function $c7b8a83128cdd6c4$var$isBooleanObject(value) {
    return $c7b8a83128cdd6c4$var$checkBoxedPrimitive(value, $c7b8a83128cdd6c4$var$booleanValue);
}
module.exports.isBooleanObject = $c7b8a83128cdd6c4$var$isBooleanObject;
function $c7b8a83128cdd6c4$var$isBigIntObject(value) {
    return $c7b8a83128cdd6c4$var$BigIntSupported && $c7b8a83128cdd6c4$var$checkBoxedPrimitive(value, $c7b8a83128cdd6c4$var$bigIntValue);
}
module.exports.isBigIntObject = $c7b8a83128cdd6c4$var$isBigIntObject;
function $c7b8a83128cdd6c4$var$isSymbolObject(value) {
    return $c7b8a83128cdd6c4$var$SymbolSupported && $c7b8a83128cdd6c4$var$checkBoxedPrimitive(value, $c7b8a83128cdd6c4$var$symbolValue);
}
module.exports.isSymbolObject = $c7b8a83128cdd6c4$var$isSymbolObject;
function $c7b8a83128cdd6c4$var$isBoxedPrimitive(value) {
    return $c7b8a83128cdd6c4$var$isNumberObject(value) || $c7b8a83128cdd6c4$var$isStringObject(value) || $c7b8a83128cdd6c4$var$isBooleanObject(value) || $c7b8a83128cdd6c4$var$isBigIntObject(value) || $c7b8a83128cdd6c4$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $c7b8a83128cdd6c4$var$isBoxedPrimitive;
function $c7b8a83128cdd6c4$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && ($c7b8a83128cdd6c4$var$isArrayBuffer(value) || $c7b8a83128cdd6c4$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $c7b8a83128cdd6c4$var$isAnyArrayBuffer;
[
    'isProxy',
    'isExternal',
    'isModuleNamespaceObject'
].forEach(function(method) {
    Object.defineProperty(module.exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + ' is not supported in userland');
        }
    });
});

});
parcelRequire.register("alMHE", function(module, exports) {
'use strict';

var $7891a4f44ad228e7$var$hasToStringTag = (parcelRequire("6vpUc"))();

var $a8Z2V = parcelRequire("a8Z2V");
var $7891a4f44ad228e7$var$$toString = $a8Z2V('Object.prototype.toString');
var $7891a4f44ad228e7$var$isStandardArguments = function isArguments(value) {
    if ($7891a4f44ad228e7$var$hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $7891a4f44ad228e7$var$$toString(value) === '[object Arguments]';
};
var $7891a4f44ad228e7$var$isLegacyArguments = function isArguments1(value) {
    if ($7891a4f44ad228e7$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $7891a4f44ad228e7$var$$toString(value) !== '[object Array]' && $7891a4f44ad228e7$var$$toString(value.callee) === '[object Function]';
};
var $7891a4f44ad228e7$var$supportsStandardArguments = function() {
    return $7891a4f44ad228e7$var$isStandardArguments(arguments);
}();
$7891a4f44ad228e7$var$isStandardArguments.isLegacyArguments = $7891a4f44ad228e7$var$isLegacyArguments; // for tests
module.exports = $7891a4f44ad228e7$var$supportsStandardArguments ? $7891a4f44ad228e7$var$isStandardArguments : $7891a4f44ad228e7$var$isLegacyArguments;

});
parcelRequire.register("6vpUc", function(module, exports) {
'use strict';

var $d14kg = parcelRequire("d14kg");
module.exports = function hasToStringTagShams() {
    return $d14kg() && !!Symbol.toStringTag;
};

});
parcelRequire.register("d14kg", function(module, exports) {
'use strict';
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    var obj = {
    };
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

});


parcelRequire.register("a8Z2V", function(module, exports) {
'use strict';

var $lROOG = parcelRequire("lROOG");

var $1Q6UW = parcelRequire("1Q6UW");
var $762a0141316fcf5d$var$$indexOf = $1Q6UW($lROOG('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = $lROOG(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $762a0141316fcf5d$var$$indexOf(name, '.prototype.') > -1) return $1Q6UW(intrinsic);
    return intrinsic;
};

});
parcelRequire.register("lROOG", function(module, exports) {
'use strict';
var $feb5f7542f36dbc7$var$undefined;
var $feb5f7542f36dbc7$var$$SyntaxError = SyntaxError;
var $feb5f7542f36dbc7$var$$Function = Function;
var $feb5f7542f36dbc7$var$$TypeError = TypeError;
// eslint-disable-next-line consistent-return
var $feb5f7542f36dbc7$var$getEvalledConstructor = function(expressionSyntax) {
    try {
        return $feb5f7542f36dbc7$var$$Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {
    }
};
var $feb5f7542f36dbc7$var$$gOPD = Object.getOwnPropertyDescriptor;
if ($feb5f7542f36dbc7$var$$gOPD) try {
    $feb5f7542f36dbc7$var$$gOPD({
    }, '');
} catch (e) {
    $feb5f7542f36dbc7$var$$gOPD = null; // this is IE 8, which has a broken gOPD
}
var $feb5f7542f36dbc7$var$throwTypeError = function() {
    throw new $feb5f7542f36dbc7$var$$TypeError();
};
var $feb5f7542f36dbc7$var$ThrowTypeError = $feb5f7542f36dbc7$var$$gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $feb5f7542f36dbc7$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $feb5f7542f36dbc7$var$$gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return $feb5f7542f36dbc7$var$throwTypeError;
        }
    }
}() : $feb5f7542f36dbc7$var$throwTypeError;

var $feb5f7542f36dbc7$var$hasSymbols = (parcelRequire("1lfue"))();
var $feb5f7542f36dbc7$var$getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var $feb5f7542f36dbc7$var$needsEval = {
};
var $feb5f7542f36dbc7$var$TypedArray = typeof Uint8Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : $feb5f7542f36dbc7$var$getProto(Uint8Array);
var $feb5f7542f36dbc7$var$INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? $feb5f7542f36dbc7$var$undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? $feb5f7542f36dbc7$var$undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': $feb5f7542f36dbc7$var$hasSymbols ? $feb5f7542f36dbc7$var$getProto([][Symbol.iterator]()) : $feb5f7542f36dbc7$var$undefined,
    '%AsyncFromSyncIteratorPrototype%': $feb5f7542f36dbc7$var$undefined,
    '%AsyncFunction%': $feb5f7542f36dbc7$var$needsEval,
    '%AsyncGenerator%': $feb5f7542f36dbc7$var$needsEval,
    '%AsyncGeneratorFunction%': $feb5f7542f36dbc7$var$needsEval,
    '%AsyncIteratorPrototype%': $feb5f7542f36dbc7$var$needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? $feb5f7542f36dbc7$var$undefined : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? $feb5f7542f36dbc7$var$undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? $feb5f7542f36dbc7$var$undefined : FinalizationRegistry,
    '%Function%': $feb5f7542f36dbc7$var$$Function,
    '%GeneratorFunction%': $feb5f7542f36dbc7$var$needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': $feb5f7542f36dbc7$var$hasSymbols ? $feb5f7542f36dbc7$var$getProto($feb5f7542f36dbc7$var$getProto([][Symbol.iterator]())) : $feb5f7542f36dbc7$var$undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : $feb5f7542f36dbc7$var$undefined,
    '%Map%': typeof Map === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !$feb5f7542f36dbc7$var$hasSymbols ? $feb5f7542f36dbc7$var$undefined : $feb5f7542f36dbc7$var$getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !$feb5f7542f36dbc7$var$hasSymbols ? $feb5f7542f36dbc7$var$undefined : $feb5f7542f36dbc7$var$getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? $feb5f7542f36dbc7$var$undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': $feb5f7542f36dbc7$var$hasSymbols ? $feb5f7542f36dbc7$var$getProto(''[Symbol.iterator]()) : $feb5f7542f36dbc7$var$undefined,
    '%Symbol%': $feb5f7542f36dbc7$var$hasSymbols ? Symbol : $feb5f7542f36dbc7$var$undefined,
    '%SyntaxError%': $feb5f7542f36dbc7$var$$SyntaxError,
    '%ThrowTypeError%': $feb5f7542f36dbc7$var$ThrowTypeError,
    '%TypedArray%': $feb5f7542f36dbc7$var$TypedArray,
    '%TypeError%': $feb5f7542f36dbc7$var$$TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? $feb5f7542f36dbc7$var$undefined : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? $feb5f7542f36dbc7$var$undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? $feb5f7542f36dbc7$var$undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? $feb5f7542f36dbc7$var$undefined : WeakSet
};
var $feb5f7542f36dbc7$var$doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = $feb5f7542f36dbc7$var$getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = $feb5f7542f36dbc7$var$getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = $feb5f7542f36dbc7$var$getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen) value = $feb5f7542f36dbc7$var$getProto(gen.prototype);
    }
    $feb5f7542f36dbc7$var$INTRINSICS[name] = value;
    return value;
};
var $feb5f7542f36dbc7$var$LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};

var $dVgr9 = parcelRequire("dVgr9");

var $4ZE0K = parcelRequire("4ZE0K");
var $feb5f7542f36dbc7$var$$concat = $dVgr9.call(Function.call, Array.prototype.concat);
var $feb5f7542f36dbc7$var$$spliceApply = $dVgr9.call(Function.apply, Array.prototype.splice);
var $feb5f7542f36dbc7$var$$replace = $dVgr9.call(Function.call, String.prototype.replace);
var $feb5f7542f36dbc7$var$$strSlice = $dVgr9.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $feb5f7542f36dbc7$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $feb5f7542f36dbc7$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $feb5f7542f36dbc7$var$stringToPath = function stringToPath(string) {
    var first = $feb5f7542f36dbc7$var$$strSlice(string, 0, 1);
    var last = $feb5f7542f36dbc7$var$$strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $feb5f7542f36dbc7$var$$SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $feb5f7542f36dbc7$var$$SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $feb5f7542f36dbc7$var$$replace(string, $feb5f7542f36dbc7$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $feb5f7542f36dbc7$var$$replace(subString, $feb5f7542f36dbc7$var$reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var $feb5f7542f36dbc7$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($4ZE0K($feb5f7542f36dbc7$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $feb5f7542f36dbc7$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if ($4ZE0K($feb5f7542f36dbc7$var$INTRINSICS, intrinsicName)) {
        var value = $feb5f7542f36dbc7$var$INTRINSICS[intrinsicName];
        if (value === $feb5f7542f36dbc7$var$needsEval) value = $feb5f7542f36dbc7$var$doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $feb5f7542f36dbc7$var$$TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $feb5f7542f36dbc7$var$$SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $feb5f7542f36dbc7$var$$TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $feb5f7542f36dbc7$var$$TypeError('"allowMissing" argument must be a boolean');
    var parts = $feb5f7542f36dbc7$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = $feb5f7542f36dbc7$var$getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $feb5f7542f36dbc7$var$$spliceApply(parts, $feb5f7542f36dbc7$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $feb5f7542f36dbc7$var$$strSlice(part, 0, 1);
        var last = $feb5f7542f36dbc7$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $feb5f7542f36dbc7$var$$SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if ($4ZE0K($feb5f7542f36dbc7$var$INTRINSICS, intrinsicRealName)) value = $feb5f7542f36dbc7$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $feb5f7542f36dbc7$var$$TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($feb5f7542f36dbc7$var$$gOPD && i + 1 >= parts.length) {
                var desc = $feb5f7542f36dbc7$var$$gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = $4ZE0K(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $feb5f7542f36dbc7$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRequire.register("1lfue", function(module, exports) {
'use strict';
var $0fa3c3edbe092954$var$origSymbol = typeof Symbol !== 'undefined' && Symbol;

var $d14kg = parcelRequire("d14kg");
module.exports = function hasNativeSymbols() {
    if (typeof $0fa3c3edbe092954$var$origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof $0fa3c3edbe092954$var$origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return $d14kg();
};

});

parcelRequire.register("dVgr9", function(module, exports) {
'use strict';

var $hlOfT = parcelRequire("hlOfT");
module.exports = Function.prototype.bind || $hlOfT;

});
parcelRequire.register("hlOfT", function(module, exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var $ca1b617e851bbb22$var$ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var $ca1b617e851bbb22$var$slice = Array.prototype.slice;
var $ca1b617e851bbb22$var$toStr = Object.prototype.toString;
var $ca1b617e851bbb22$var$funcType = '[object Function]';
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || $ca1b617e851bbb22$var$toStr.call(target) !== $ca1b617e851bbb22$var$funcType) throw new TypeError($ca1b617e851bbb22$var$ERROR_MESSAGE + target);
    var args = $ca1b617e851bbb22$var$slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat($ca1b617e851bbb22$var$slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat($ca1b617e851bbb22$var$slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push('$' + i);
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty1() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

});


parcelRequire.register("4ZE0K", function(module, exports) {
'use strict';

var $dVgr9 = parcelRequire("dVgr9");
module.exports = $dVgr9.call(Function.call, Object.prototype.hasOwnProperty);

});


parcelRequire.register("1Q6UW", function(module, exports) {
'use strict';

var $dVgr9 = parcelRequire("dVgr9");

var $lROOG = parcelRequire("lROOG");
var $1570036a5f4bf247$var$$apply = $lROOG('%Function.prototype.apply%');
var $1570036a5f4bf247$var$$call = $lROOG('%Function.prototype.call%');
var $1570036a5f4bf247$var$$reflectApply = $lROOG('%Reflect.apply%', true) || $dVgr9.call($1570036a5f4bf247$var$$call, $1570036a5f4bf247$var$$apply);
var $1570036a5f4bf247$var$$gOPD = $lROOG('%Object.getOwnPropertyDescriptor%', true);
var $1570036a5f4bf247$var$$defineProperty = $lROOG('%Object.defineProperty%', true);
var $1570036a5f4bf247$var$$max = $lROOG('%Math.max%');
if ($1570036a5f4bf247$var$$defineProperty) try {
    $1570036a5f4bf247$var$$defineProperty({
    }, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $1570036a5f4bf247$var$$defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $1570036a5f4bf247$var$$reflectApply($dVgr9, $1570036a5f4bf247$var$$call, arguments);
    if ($1570036a5f4bf247$var$$gOPD && $1570036a5f4bf247$var$$defineProperty) {
        var desc = $1570036a5f4bf247$var$$gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $1570036a5f4bf247$var$$defineProperty(func, 'length', {
            value: 1 + $1570036a5f4bf247$var$$max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var $1570036a5f4bf247$var$applyBind = function applyBind() {
    return $1570036a5f4bf247$var$$reflectApply($dVgr9, $1570036a5f4bf247$var$$apply, arguments);
};
if ($1570036a5f4bf247$var$$defineProperty) $1570036a5f4bf247$var$$defineProperty(module.exports, 'apply', {
    value: $1570036a5f4bf247$var$applyBind
});
else module.exports.apply = $1570036a5f4bf247$var$applyBind;

});



parcelRequire.register("liNZQ", function(module, exports) {
'use strict';
var $f8220fb33aeb5589$var$toStr = Object.prototype.toString;
var $f8220fb33aeb5589$var$fnToStr = Function.prototype.toString;
var $f8220fb33aeb5589$var$isFnRegex = /^\s*(?:function)?\*/;

var $f8220fb33aeb5589$var$hasToStringTag = (parcelRequire("6vpUc"))();
var $f8220fb33aeb5589$var$getProto = Object.getPrototypeOf;
var $f8220fb33aeb5589$var$getGeneratorFunc = function() {
    if (!$f8220fb33aeb5589$var$hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {
    }
};
var $f8220fb33aeb5589$var$GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if ($f8220fb33aeb5589$var$isFnRegex.test($f8220fb33aeb5589$var$fnToStr.call(fn))) return true;
    if (!$f8220fb33aeb5589$var$hasToStringTag) {
        var str = $f8220fb33aeb5589$var$toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!$f8220fb33aeb5589$var$getProto) return false;
    if (typeof $f8220fb33aeb5589$var$GeneratorFunction === 'undefined') {
        var generatorFunc = $f8220fb33aeb5589$var$getGeneratorFunc();
        $f8220fb33aeb5589$var$GeneratorFunction = generatorFunc ? $f8220fb33aeb5589$var$getProto(generatorFunc) : false;
    }
    return $f8220fb33aeb5589$var$getProto(fn) === $f8220fb33aeb5589$var$GeneratorFunction;
};

});

parcelRequire.register("8pHxd", function(module, exports) {
'use strict';

var $7yRiA = parcelRequire("7yRiA");

var $kE0EK = parcelRequire("kE0EK");

var $a8Z2V = parcelRequire("a8Z2V");
var $62026da2a3202391$var$$toString = $a8Z2V('Object.prototype.toString');

var $62026da2a3202391$var$hasToStringTag = (parcelRequire("6vpUc"))();
var $62026da2a3202391$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $62026da2a3202391$var$typedArrays = $kE0EK();
var $62026da2a3202391$var$$slice = $a8Z2V('String.prototype.slice');
var $62026da2a3202391$var$toStrTags = {
};

var $8ZWjA = parcelRequire("8ZWjA");
var $62026da2a3202391$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($62026da2a3202391$var$hasToStringTag && $8ZWjA && $62026da2a3202391$var$getPrototypeOf) $7yRiA($62026da2a3202391$var$typedArrays, function(typedArray) {
    if (typeof $62026da2a3202391$var$g[typedArray] === 'function') {
        var arr = new $62026da2a3202391$var$g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = $62026da2a3202391$var$getPrototypeOf(arr);
            var descriptor = $8ZWjA(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = $62026da2a3202391$var$getPrototypeOf(proto);
                descriptor = $8ZWjA(superProto, Symbol.toStringTag);
            }
            $62026da2a3202391$var$toStrTags[typedArray] = descriptor.get;
        }
    }
});
var $62026da2a3202391$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    $7yRiA($62026da2a3202391$var$toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {
        }
    });
    return foundName;
};

var $fV6Lw = parcelRequire("fV6Lw");
module.exports = function whichTypedArray(value) {
    if (!$fV6Lw(value)) return false;
    if (!$62026da2a3202391$var$hasToStringTag || !(Symbol.toStringTag in value)) return $62026da2a3202391$var$$slice($62026da2a3202391$var$$toString(value), 8, -1);
    return $62026da2a3202391$var$tryTypedArrays(value);
};

});
parcelRequire.register("7yRiA", function(module, exports) {
var $58150d6c0412c116$var$hasOwn = Object.prototype.hasOwnProperty;
var $58150d6c0412c116$var$toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if ($58150d6c0412c116$var$toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if ($58150d6c0412c116$var$hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

});

parcelRequire.register("kE0EK", function(module, exports) {
'use strict';
var $f0780d5d2ad49200$var$possibleNames = [
    'BigInt64Array',
    'BigUint64Array',
    'Float32Array',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray'
];
var $f0780d5d2ad49200$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < $f0780d5d2ad49200$var$possibleNames.length; i++)if (typeof $f0780d5d2ad49200$var$g[$f0780d5d2ad49200$var$possibleNames[i]] === 'function') out[out.length] = $f0780d5d2ad49200$var$possibleNames[i];
    return out;
};

});

parcelRequire.register("8ZWjA", function(module, exports) {
'use strict';

var $lROOG = parcelRequire("lROOG");
var $68d1416015817d27$var$$gOPD = $lROOG('%Object.getOwnPropertyDescriptor%', true);
if ($68d1416015817d27$var$$gOPD) try {
    $68d1416015817d27$var$$gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $68d1416015817d27$var$$gOPD = null;
}
module.exports = $68d1416015817d27$var$$gOPD;

});

parcelRequire.register("fV6Lw", function(module, exports) {
'use strict';

var $7yRiA = parcelRequire("7yRiA");

var $kE0EK = parcelRequire("kE0EK");

var $a8Z2V = parcelRequire("a8Z2V");
var $b9716d648d831028$var$$toString = $a8Z2V('Object.prototype.toString');

var $b9716d648d831028$var$hasToStringTag = (parcelRequire("6vpUc"))();
var $b9716d648d831028$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $b9716d648d831028$var$typedArrays = $kE0EK();
var $b9716d648d831028$var$$indexOf = $a8Z2V('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $b9716d648d831028$var$$slice = $a8Z2V('String.prototype.slice');
var $b9716d648d831028$var$toStrTags = {
};

var $8ZWjA = parcelRequire("8ZWjA");
var $b9716d648d831028$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($b9716d648d831028$var$hasToStringTag && $8ZWjA && $b9716d648d831028$var$getPrototypeOf) $7yRiA($b9716d648d831028$var$typedArrays, function(typedArray) {
    var arr = new $b9716d648d831028$var$g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = $b9716d648d831028$var$getPrototypeOf(arr);
        var descriptor = $8ZWjA(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = $b9716d648d831028$var$getPrototypeOf(proto);
            descriptor = $8ZWjA(superProto, Symbol.toStringTag);
        }
        $b9716d648d831028$var$toStrTags[typedArray] = descriptor.get;
    }
});
var $b9716d648d831028$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    $7yRiA($b9716d648d831028$var$toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!$b9716d648d831028$var$hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $b9716d648d831028$var$$slice($b9716d648d831028$var$$toString(value), 8, -1);
        return $b9716d648d831028$var$$indexOf($b9716d648d831028$var$typedArrays, tag) > -1;
    }
    if (!$8ZWjA) return false;
    return $b9716d648d831028$var$tryTypedArrays(value);
};

});



parcelRequire.register("iwya7", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

});

parcelRequire.register("eeC3p", function(module, exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits1(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

});




parcelRequire("cF4et");

//# sourceMappingURL=module.js.map
