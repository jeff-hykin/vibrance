function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "console", () => $2b36420fded722e7$export$e896d9a1b4631fa1);
$parcel$export(module.exports, "vibrance", () => $2b36420fded722e7$export$9d69f5c452819e4);
$parcel$export(module.exports, "default", () => $2b36420fded722e7$export$2e2bcd8739ae039);
const $807e4283f2aec814$var$ANSI_BACKGROUND_OFFSET = 10;
const $807e4283f2aec814$var$wrapAnsi16 = (offset = 0)=>(code)=>`\u001B[${code + offset}m`
;
const $807e4283f2aec814$var$wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`
;
const $807e4283f2aec814$var$wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`
;
function $807e4283f2aec814$var$assembleStyles() {
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
    styles.color.ansi = $807e4283f2aec814$var$wrapAnsi16();
    styles.color.ansi256 = $807e4283f2aec814$var$wrapAnsi256();
    styles.color.ansi16m = $807e4283f2aec814$var$wrapAnsi16m();
    styles.bgColor.ansi = $807e4283f2aec814$var$wrapAnsi16($807e4283f2aec814$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = $807e4283f2aec814$var$wrapAnsi256($807e4283f2aec814$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = $807e4283f2aec814$var$wrapAnsi16m($807e4283f2aec814$var$ANSI_BACKGROUND_OFFSET);
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
const $807e4283f2aec814$var$ansiStyles = $807e4283f2aec814$var$assembleStyles();
var $807e4283f2aec814$export$2e2bcd8739ae039 = $807e4283f2aec814$var$ansiStyles;


let $315e57156680727c$var$args = [];

try {
    $315e57156680727c$var$args = Deno.args;
} catch (error) {
    try {
        const [_1, _2, ...argvs] = $315e57156680727c$import$e54fe5b0f43758f7$6f4ae1207c703045;
        $315e57156680727c$var$args = argvs;
    } catch (error) {
    }
}
function $315e57156680727c$export$2e2bcd8739ae039(flag, argv = $315e57156680727c$var$args) {
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}



function $805febd3f442664d$var$isatty(fd) {
    if (typeof fd !== "number") return false;
    try {
        return Deno.isatty(fd);
    } catch (_) {
        // if deno failed, try node
        try {
            var tty = $805febd3f442664d$import$abaf19b7aa1bfe44;
            return tty.isatty(fd);
        } catch (error) {
        }
        return false;
    }
}
let $805febd3f442664d$var$env = {
};

try {
    $805febd3f442664d$var$env = Deno.env.toObject();
} catch (error) {
    try {
        $805febd3f442664d$var$env = $805febd3f442664d$import$e54fe5b0f43758f7$a7b6bc01c63cdfc3;
    } catch (error) {
    }
}
let $805febd3f442664d$var$flagForceColor;
if ($315e57156680727c$export$2e2bcd8739ae039("no-color") || $315e57156680727c$export$2e2bcd8739ae039("no-colors") || $315e57156680727c$export$2e2bcd8739ae039("color=false") || $315e57156680727c$export$2e2bcd8739ae039("color=never")) $805febd3f442664d$var$flagForceColor = 0;
else if ($315e57156680727c$export$2e2bcd8739ae039("color") || $315e57156680727c$export$2e2bcd8739ae039("colors") || $315e57156680727c$export$2e2bcd8739ae039("color=true") || $315e57156680727c$export$2e2bcd8739ae039("color=always")) $805febd3f442664d$var$flagForceColor = 1;
function $805febd3f442664d$var$envForceColor() {
    if ("FORCE_COLOR" in $805febd3f442664d$var$env) {
        if ($805febd3f442664d$var$env.FORCE_COLOR === "true") return 1;
        if ($805febd3f442664d$var$env.FORCE_COLOR === "false") return 0;
        return $805febd3f442664d$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt($805febd3f442664d$var$env.FORCE_COLOR, 10), 3);
    }
}
function $805febd3f442664d$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}

function $805febd3f442664d$var$_supportsColor(haveStream, { streamIsTTY: streamIsTTY , sniffFlags: sniffFlags = true  } = {
}) {
    const noFlagForceColor = $805febd3f442664d$var$envForceColor();
    if (noFlagForceColor !== undefined) $805febd3f442664d$var$flagForceColor = noFlagForceColor;
    const forceColor = sniffFlags ? $805febd3f442664d$var$flagForceColor : noFlagForceColor;
    if (forceColor === 0) return 0;
    if (sniffFlags) {
        if ($315e57156680727c$export$2e2bcd8739ae039("color=16m") || $315e57156680727c$export$2e2bcd8739ae039("color=full") || $315e57156680727c$export$2e2bcd8739ae039("color=truecolor")) return 3;
        if ($315e57156680727c$export$2e2bcd8739ae039("color=256")) return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) return 0;
    const min = forceColor || 0;
    if ($805febd3f442664d$var$env.TERM === "dumb") return min;
    let os;
    try {
        os = Deno.build.os;
    } catch (error) {
        try {
            os = $805febd3f442664d$import$e54fe5b0f43758f7$722a64dea1b767dc;
        } catch (error) {
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
    if ("CI" in $805febd3f442664d$var$env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE",
            "DRONE", 
        ].some((sign)=>sign in $805febd3f442664d$var$env
        ) || $805febd3f442664d$var$env.CI_NAME === "codeship") return 1;
        return min;
    }
    if ("TEAMCITY_VERSION" in $805febd3f442664d$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($805febd3f442664d$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($805febd3f442664d$var$env.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in $805febd3f442664d$var$env) {
        const version = Number.parseInt(($805febd3f442664d$var$env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch($805febd3f442664d$var$env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test($805febd3f442664d$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($805febd3f442664d$var$env.TERM)) return 1;
    if ("COLORTERM" in $805febd3f442664d$var$env) return 1;
    return min;
}
function $805febd3f442664d$export$6f279ba00f1459de(stream, options = {
}) {
    const level = $805febd3f442664d$var$_supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options
    });
    return $805febd3f442664d$var$translateLevel(level);
}
const $805febd3f442664d$var$supportsColor = {
    stdout: $805febd3f442664d$export$6f279ba00f1459de({
        isTTY: $805febd3f442664d$var$isatty(1)
    }),
    stderr: $805febd3f442664d$export$6f279ba00f1459de({
        isTTY: $805febd3f442664d$var$isatty(2)
    })
};
var $805febd3f442664d$export$2e2bcd8739ae039 = $805febd3f442664d$var$supportsColor;


function $b5c3c55de721f71e$export$9300dfb554c6c407(string, substring, replacer) {
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
function $b5c3c55de721f71e$export$ecabf4aff2e9764(string, prefix, postfix, index) {
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


const $c4d5bea394627419$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $c4d5bea394627419$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $c4d5bea394627419$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $c4d5bea394627419$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $c4d5bea394627419$var$ESCAPES = new Map([
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
function $c4d5bea394627419$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(Number.parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(Number.parseInt(c.slice(2, -1), 16));
    return $c4d5bea394627419$var$ESCAPES.get(c) || c;
}
function $c4d5bea394627419$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($c4d5bea394627419$var$STRING_REGEX)) results.push(matches[2].replace($c4d5bea394627419$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $c4d5bea394627419$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $c4d5bea394627419$var$parseStyle(style) {
    $c4d5bea394627419$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $c4d5bea394627419$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $c4d5bea394627419$var$parseArguments(name, matches[2]);
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
function $c4d5bea394627419$var$buildStyle(chalk, styles) {
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
function $c4d5bea394627419$export$2e2bcd8739ae039(chalk, temporary) {
    const styles = [];
    const chunks = [];
    let chunk = [];
    // eslint-disable-next-line max-params
    temporary.replace($c4d5bea394627419$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($c4d5bea394627419$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $c4d5bea394627419$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $c4d5bea394627419$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($c4d5bea394627419$var$buildStyle(chalk, styles)(chunk.join('')));
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


const { stdout: $ce17e4624c99533e$export$fcbe44f5d6fcebd , stderr: $ce17e4624c99533e$export$8107055a758cd2bd  } = $805febd3f442664d$export$2e2bcd8739ae039;
const { isArray: $ce17e4624c99533e$var$isArray  } = Array;
const $ce17e4624c99533e$var$GENERATOR = Symbol('GENERATOR');
const $ce17e4624c99533e$var$STYLER = Symbol('STYLER');
const $ce17e4624c99533e$var$IS_EMPTY = Symbol('IS_EMPTY');
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $ce17e4624c99533e$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $ce17e4624c99533e$var$styles = Object.create(null);
const $ce17e4624c99533e$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $ce17e4624c99533e$export$fcbe44f5d6fcebd ? $ce17e4624c99533e$export$fcbe44f5d6fcebd.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $ce17e4624c99533e$export$79544b80b91c2197 {
    constructor(options1){
        // eslint-disable-next-line no-constructor-return
        return $ce17e4624c99533e$var$chalkFactory(options1);
    }
}
const $ce17e4624c99533e$var$chalkFactory = (options)=>{
    const chalk = {
    };
    $ce17e4624c99533e$var$applyOptions(chalk, options);
    chalk.template = (...arguments_)=>$ce17e4624c99533e$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $ce17e4624c99533e$var$createChalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.Chalk = $ce17e4624c99533e$export$79544b80b91c2197;
    return chalk.template;
};
function $ce17e4624c99533e$var$createChalk(options) {
    return $ce17e4624c99533e$var$chalkFactory(options);
}
Object.setPrototypeOf($ce17e4624c99533e$var$createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries($807e4283f2aec814$export$2e2bcd8739ae039))$ce17e4624c99533e$var$styles[styleName] = {
    get () {
        const builder = $ce17e4624c99533e$var$createBuilder(this, $ce17e4624c99533e$var$createStyler(style.open, style.close, this[$ce17e4624c99533e$var$STYLER]), this[$ce17e4624c99533e$var$IS_EMPTY]);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$ce17e4624c99533e$var$styles.visible = {
    get () {
        const builder = $ce17e4624c99533e$var$createBuilder(this, this[$ce17e4624c99533e$var$STYLER], true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $ce17e4624c99533e$var$getModelAnsi = (model, level, type, ...arguments_)=>{
    if (model === 'rgb') {
        if (level === 'ansi16m') return $807e4283f2aec814$export$2e2bcd8739ae039[type].ansi16m(...arguments_);
        if (level === 'ansi256') return $807e4283f2aec814$export$2e2bcd8739ae039[type].ansi256($807e4283f2aec814$export$2e2bcd8739ae039.rgbToAnsi256(...arguments_));
        return $807e4283f2aec814$export$2e2bcd8739ae039[type].ansi($807e4283f2aec814$export$2e2bcd8739ae039.rgbToAnsi(...arguments_));
    }
    if (model === 'hex') return $ce17e4624c99533e$var$getModelAnsi('rgb', level, type, ...$807e4283f2aec814$export$2e2bcd8739ae039.hexToRgb(...arguments_));
    return $807e4283f2aec814$export$2e2bcd8739ae039[type][model](...arguments_);
};
const $ce17e4624c99533e$var$usedModels = [
    'rgb',
    'hex',
    'ansi256'
];
for (const model1 of $ce17e4624c99533e$var$usedModels){
    $ce17e4624c99533e$var$styles[model1] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $ce17e4624c99533e$var$createStyler($ce17e4624c99533e$var$getModelAnsi(model1, $ce17e4624c99533e$var$levelMapping[level], 'color', ...arguments_), $807e4283f2aec814$export$2e2bcd8739ae039.color.close, this[$ce17e4624c99533e$var$STYLER]);
                return $ce17e4624c99533e$var$createBuilder(this, styler, this[$ce17e4624c99533e$var$IS_EMPTY]);
            };
        }
    };
    const bgModel = 'bg' + model1[0].toUpperCase() + model1.slice(1);
    $ce17e4624c99533e$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $ce17e4624c99533e$var$createStyler($ce17e4624c99533e$var$getModelAnsi(model1, $ce17e4624c99533e$var$levelMapping[level], 'bgColor', ...arguments_), $807e4283f2aec814$export$2e2bcd8739ae039.bgColor.close, this[$ce17e4624c99533e$var$STYLER]);
                return $ce17e4624c99533e$var$createBuilder(this, styler, this[$ce17e4624c99533e$var$IS_EMPTY]);
            };
        }
    };
}
const $ce17e4624c99533e$var$proto = Object.defineProperties(()=>{
}, {
    ...$ce17e4624c99533e$var$styles,
    level: {
        enumerable: true,
        get () {
            return this[$ce17e4624c99533e$var$GENERATOR].level;
        },
        set (level) {
            this[$ce17e4624c99533e$var$GENERATOR].level = level;
        }
    }
});
const $ce17e4624c99533e$var$createStyler = (open, close, parent)=>{
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
const $ce17e4624c99533e$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($ce17e4624c99533e$var$isArray(arguments_[0]) && $ce17e4624c99533e$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $ce17e4624c99533e$var$applyStyle(builder, $ce17e4624c99533e$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $ce17e4624c99533e$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $ce17e4624c99533e$var$proto);
    builder[$ce17e4624c99533e$var$GENERATOR] = self;
    builder[$ce17e4624c99533e$var$STYLER] = _styler;
    builder[$ce17e4624c99533e$var$IS_EMPTY] = _isEmpty;
    return builder;
};
const $ce17e4624c99533e$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self[$ce17e4624c99533e$var$IS_EMPTY] ? '' : string;
    let styler = self[$ce17e4624c99533e$var$STYLER];
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.includes('\u001B')) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $b5c3c55de721f71e$export$9300dfb554c6c407(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $b5c3c55de721f71e$export$ecabf4aff2e9764(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
const $ce17e4624c99533e$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$ce17e4624c99533e$var$isArray(firstString) || !$ce17e4624c99533e$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    return $c4d5bea394627419$export$2e2bcd8739ae039(chalk, parts.join(''));
};
Object.defineProperties($ce17e4624c99533e$var$createChalk.prototype, $ce17e4624c99533e$var$styles);
const $ce17e4624c99533e$var$chalk = $ce17e4624c99533e$var$createChalk();
const $ce17e4624c99533e$export$8cef8185e551afa5 = $ce17e4624c99533e$var$createChalk({
    level: $ce17e4624c99533e$export$8107055a758cd2bd ? $ce17e4624c99533e$export$8107055a758cd2bd.level : 0
});
var $ce17e4624c99533e$export$2e2bcd8739ae039 = $ce17e4624c99533e$var$chalk;


const $2b36420fded722e7$var$realConsole = globalThis.console;
const $2b36420fded722e7$var$isBrowserContext = typeof document != 'undefined' && typeof window != 'undefined';

class $2b36420fded722e7$var$LoggerObject {
    constructor(){
        this.stringBuffer = [];
        this.attributeBuffer = [];
        this.styleString = "font-family:monospace;";
        const ifStyleCalledAsMethod = (...args)=>{
            let styler = $ce17e4624c99533e$export$2e2bcd8739ae039;
            while(this.attributeBuffer.length > 0)styler = styler[this.attributeBuffer.shift()];
            const string = styler(...args);
            this.stringBuffer.push(string);
            return this;
        };
        this.id = Math.random();
        const originalThing = ifStyleCalledAsMethod;
        const proxySymbol = Symbol.for('Proxy');
        const thisProxySymbol = Symbol('thisProxy');
        this.proxyiedReturn = new Proxy(originalThing, {
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
                if (key == proxySymbol || key == thisProxySymbol) return true;
                $2b36420fded722e7$export$e896d9a1b4631fa1.debug(`key is:`, key);
                return this[key];
            },
            set: (original, key, value)=>{
                if (key == proxySymbol || key == thisProxySymbol) return;
                return this[key] = value;
            }
        });
        // 
        // attempt to add node.js logging
        // 
        try {
            this[$2b36420fded722e7$import$7debb50ef11d5e0b$9dec5d1b3b6a130d.custom] = this.toString;
        } catch (error) {
        }
    }
    get reset() {
        this.attributeBuffer.push("reset");
        this.styleString += ";";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bold() {
        this.attributeBuffer.push("bold");
        this.styleString += "; font-weight: bold;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get dim() {
        this.attributeBuffer.push("dim");
        this.styleString += "; opacity: 0.7;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get italic() {
        this.attributeBuffer.push("italic");
        this.styleString += "; font-style: italic;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get underline() {
        this.attributeBuffer.push("underline");
        this.styleString += "; text-decoration:underline;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get inverse() {
        this.attributeBuffer.push("inverse");
        this.styleString += "; -webkit-filter: invert(100%); filter: invert(100%);";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get hidden() {
        this.attributeBuffer.push("hidden");
        this.styleString += "; background-color: transparent; color:transparent;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get strikethrough() {
        this.attributeBuffer.push("strikethrough");
        this.styleString += "; text-decoration:line-through;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get visible() {
        this.attributeBuffer.push("visible");
        this.styleString += "; ";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get black() {
        this.attributeBuffer.push("black");
        this.styleString += "; color:#000000;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get red() {
        this.attributeBuffer.push("red");
        this.styleString += "; color:#f07178;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get green() {
        this.attributeBuffer.push("green");
        this.styleString += "; color:#c3e88d;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get yellow() {
        this.attributeBuffer.push("yellow");
        this.styleString += "; color:#ddd790;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get blue() {
        this.attributeBuffer.push("blue");
        this.styleString += "; color:#82aaff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get magenta() {
        this.attributeBuffer.push("magenta");
        this.styleString += "; color:#c792ea;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get cyan() {
        this.attributeBuffer.push("cyan");
        this.styleString += "; color:#64bac5;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get white() {
        this.attributeBuffer.push("white");
        this.styleString += "; color:#c7cbcd;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get blackBright() {
        this.attributeBuffer.push("blackBright");
        this.styleString += "; color:#546e7a;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get gray() {
        this.attributeBuffer.push("gray");
        this.styleString += "; color:#546e7a;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get grey() {
        this.attributeBuffer.push("grey");
        this.styleString += "; color:#546e7a;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get redBright() {
        this.attributeBuffer.push("redBright");
        this.styleString += "; color:#ff5572;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get greenBright() {
        this.attributeBuffer.push("greenBright");
        this.styleString += "; color:#04d895;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get yellowBright() {
        this.attributeBuffer.push("yellowBright");
        this.styleString += "; color:#fec355;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get blueBright() {
        this.attributeBuffer.push("blueBright");
        this.styleString += "; color:#00aeff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get magentaBright() {
        this.attributeBuffer.push("magentaBright");
        this.styleString += "; color:#e57eb3;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get cyanBright() {
        this.attributeBuffer.push("cyanBright");
        this.styleString += "; color:#89ddff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get whiteBright() {
        this.attributeBuffer.push("whiteBright");
        this.styleString += "; color:#ffffff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgBlack() {
        this.attributeBuffer.push("bgBlack");
        this.styleString += "; background-color:#000000;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgRed() {
        this.attributeBuffer.push("bgRed");
        this.styleString += "; background-color:#f07178;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgGreen() {
        this.attributeBuffer.push("bgGreen");
        this.styleString += "; background-color:#c3e88d;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgYellow() {
        this.attributeBuffer.push("bgYellow");
        this.styleString += "; background-color:#ddd790;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgBlue() {
        this.attributeBuffer.push("bgBlue");
        this.styleString += "; background-color:#82aaff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgMagenta() {
        this.attributeBuffer.push("bgMagenta");
        this.styleString += "; background-color:#c792ea;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgCyan() {
        this.attributeBuffer.push("bgCyan");
        this.styleString += "; background-color:#64bac5;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgWhite() {
        this.attributeBuffer.push("bgWhite");
        this.styleString += "; background-color:#c7cbcd;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgBlackBright() {
        this.attributeBuffer.push("bgBlackBright");
        this.styleString += "; background-color:#546e7a;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgGray() {
        this.attributeBuffer.push("bgGray");
        this.styleString += "; background-color:#546e7a;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgGrey() {
        this.attributeBuffer.push("bgGrey");
        this.styleString += "; background-color:#546e7a;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgRedBright() {
        this.attributeBuffer.push("bgRedBright");
        this.styleString += "; background-color:#ff5572;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgGreenBright() {
        this.attributeBuffer.push("bgGreenBright");
        this.styleString += "; background-color:#04d895;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgYellowBright() {
        this.attributeBuffer.push("bgYellowBright");
        this.styleString += "; background-color:#fec355;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgBlueBright() {
        this.attributeBuffer.push("bgBlueBright");
        this.styleString += "; background-color:#00aeff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgMagentaBright() {
        this.attributeBuffer.push("bgMagentaBright");
        this.styleString += "; background-color:#e57eb3;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgCyanBright() {
        this.attributeBuffer.push("bgCyanBright");
        this.styleString += "; background-color:#89ddff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    get bgWhiteBright() {
        this.attributeBuffer.push("bgWhiteBright");
        this.styleString += "; background-color:#ffffff;";
        $2b36420fded722e7$var$realConsole.log("this.styleString", this.styleString);
        return this.proxyiedReturn;
    }
    toString() {
        return this.stringBuffer.join("");
    }
    log(...others) {
        $2b36420fded722e7$var$realConsole.debug(`this.styleString is:`, this.styleString);
        $2b36420fded722e7$var$realConsole.debug(`this.stringBuffer is:`, this.stringBuffer);
        $2b36420fded722e7$var$realConsole.debug(`this.attributeBuffer is:`, this.attributeBuffer);
        if (!$2b36420fded722e7$var$isBrowserContext) $2b36420fded722e7$var$realConsole.log(this.toString().replace("%", "%%"), ...others);
        else $2b36420fded722e7$var$realConsole.log(`%c${this.toString().replace("%", "%%")}`, this.styleString);
        // reset it after logging
        this.styleString = "";
        this.stringBuffer = [];
        this.attributeBuffer = [];
        return this;
    }
}

class $2b36420fded722e7$var$ConsoleObject extends $2b36420fded722e7$var$LoggerObject {
    constructor(){
        super();
        // 
        // only difference: proxy object executes .log() when called as a function
        // 
        this.stringBuffer = [];
        this.attributeBuffer = [];
        this.styleString = "font-family:monospace;";
        const ifStyleCalledAsMethod = (...args)=>{
            let styler = $ce17e4624c99533e$export$2e2bcd8739ae039;
            while(this.attributeBuffer.length > 0)styler = styler[this.attributeBuffer.shift()];
            const string = styler(...args);
            this.stringBuffer.push(string);
            this.log();
            return;
        };
        ifStyleCalledAsMethod.id = Math.random();
        const originalThing = ifStyleCalledAsMethod;
        const proxySymbol = Symbol.for('Proxy');
        const thisProxySymbol = Symbol('thisProxy');
        this.proxyiedReturn = new Proxy(originalThing, {
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
                if (key == proxySymbol || key == thisProxySymbol) return true;
                $2b36420fded722e7$export$e896d9a1b4631fa1.debug(`key is:`, key);
                return this[key];
            },
            set: (original, key, value)=>{
                if (key == proxySymbol || key == thisProxySymbol) return;
                return this[key] = value;
            }
        });
        // 
        // attempt to add node.js logging
        // 
        try {
            this[$2b36420fded722e7$import$7debb50ef11d5e0b$9dec5d1b3b6a130d.custom] = this.toString;
        } catch (error) {
        }
    }
}
const $2b36420fded722e7$export$9d69f5c452819e4 = ()=>new $2b36420fded722e7$var$LoggerObject()
;
Object.assign($2b36420fded722e7$export$9d69f5c452819e4, {
    get reset () {
        return new $2b36420fded722e7$var$LoggerObject().reset;
    },
    get bold () {
        return new $2b36420fded722e7$var$LoggerObject().bold;
    },
    get dim () {
        return new $2b36420fded722e7$var$LoggerObject().dim;
    },
    get italic () {
        return new $2b36420fded722e7$var$LoggerObject().italic;
    },
    get underline () {
        return new $2b36420fded722e7$var$LoggerObject().underline;
    },
    get inverse () {
        return new $2b36420fded722e7$var$LoggerObject().inverse;
    },
    get hidden () {
        return new $2b36420fded722e7$var$LoggerObject().hidden;
    },
    get strikethrough () {
        return new $2b36420fded722e7$var$LoggerObject().strikethrough;
    },
    get visible () {
        return new $2b36420fded722e7$var$LoggerObject().visible;
    },
    get black () {
        return new $2b36420fded722e7$var$LoggerObject().black;
    },
    get red () {
        return new $2b36420fded722e7$var$LoggerObject().red;
    },
    get green () {
        return new $2b36420fded722e7$var$LoggerObject().green;
    },
    get yellow () {
        return new $2b36420fded722e7$var$LoggerObject().yellow;
    },
    get blue () {
        return new $2b36420fded722e7$var$LoggerObject().blue;
    },
    get magenta () {
        return new $2b36420fded722e7$var$LoggerObject().magenta;
    },
    get cyan () {
        return new $2b36420fded722e7$var$LoggerObject().cyan;
    },
    get white () {
        return new $2b36420fded722e7$var$LoggerObject().white;
    },
    get blackBright () {
        return new $2b36420fded722e7$var$LoggerObject().blackBright;
    },
    get gray () {
        return new $2b36420fded722e7$var$LoggerObject().gray;
    },
    get grey () {
        return new $2b36420fded722e7$var$LoggerObject().grey;
    },
    get redBright () {
        return new $2b36420fded722e7$var$LoggerObject().redBright;
    },
    get greenBright () {
        return new $2b36420fded722e7$var$LoggerObject().greenBright;
    },
    get yellowBright () {
        return new $2b36420fded722e7$var$LoggerObject().yellowBright;
    },
    get blueBright () {
        return new $2b36420fded722e7$var$LoggerObject().blueBright;
    },
    get magentaBright () {
        return new $2b36420fded722e7$var$LoggerObject().magentaBright;
    },
    get cyanBright () {
        return new $2b36420fded722e7$var$LoggerObject().cyanBright;
    },
    get whiteBright () {
        return new $2b36420fded722e7$var$LoggerObject().whiteBright;
    },
    get bgBlack () {
        return new $2b36420fded722e7$var$LoggerObject().bgBlack;
    },
    get bgRed () {
        return new $2b36420fded722e7$var$LoggerObject().bgRed;
    },
    get bgGreen () {
        return new $2b36420fded722e7$var$LoggerObject().bgGreen;
    },
    get bgYellow () {
        return new $2b36420fded722e7$var$LoggerObject().bgYellow;
    },
    get bgBlue () {
        return new $2b36420fded722e7$var$LoggerObject().bgBlue;
    },
    get bgMagenta () {
        return new $2b36420fded722e7$var$LoggerObject().bgMagenta;
    },
    get bgCyan () {
        return new $2b36420fded722e7$var$LoggerObject().bgCyan;
    },
    get bgWhite () {
        return new $2b36420fded722e7$var$LoggerObject().bgWhite;
    },
    get bgBlackBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgBlackBright;
    },
    get bgGray () {
        return new $2b36420fded722e7$var$LoggerObject().bgGray;
    },
    get bgGrey () {
        return new $2b36420fded722e7$var$LoggerObject().bgGrey;
    },
    get bgRedBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgRedBright;
    },
    get bgGreenBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new $2b36420fded722e7$var$LoggerObject().bgWhiteBright;
    }
});
var $2b36420fded722e7$export$e896d9a1b4631fa1 = {
    get reset () {
        return new $2b36420fded722e7$var$ConsoleObject().reset;
    },
    get bold () {
        return new $2b36420fded722e7$var$ConsoleObject().bold;
    },
    get dim () {
        return new $2b36420fded722e7$var$ConsoleObject().dim;
    },
    get italic () {
        return new $2b36420fded722e7$var$ConsoleObject().italic;
    },
    get underline () {
        return new $2b36420fded722e7$var$ConsoleObject().underline;
    },
    get inverse () {
        return new $2b36420fded722e7$var$ConsoleObject().inverse;
    },
    get hidden () {
        return new $2b36420fded722e7$var$ConsoleObject().hidden;
    },
    get strikethrough () {
        return new $2b36420fded722e7$var$ConsoleObject().strikethrough;
    },
    get visible () {
        return new $2b36420fded722e7$var$ConsoleObject().visible;
    },
    get black () {
        return new $2b36420fded722e7$var$ConsoleObject().black;
    },
    get red () {
        return new $2b36420fded722e7$var$ConsoleObject().red;
    },
    get green () {
        return new $2b36420fded722e7$var$ConsoleObject().green;
    },
    get yellow () {
        return new $2b36420fded722e7$var$ConsoleObject().yellow;
    },
    get blue () {
        return new $2b36420fded722e7$var$ConsoleObject().blue;
    },
    get magenta () {
        return new $2b36420fded722e7$var$ConsoleObject().magenta;
    },
    get cyan () {
        return new $2b36420fded722e7$var$ConsoleObject().cyan;
    },
    get white () {
        return new $2b36420fded722e7$var$ConsoleObject().white;
    },
    get blackBright () {
        return new $2b36420fded722e7$var$ConsoleObject().blackBright;
    },
    get gray () {
        return new $2b36420fded722e7$var$ConsoleObject().gray;
    },
    get grey () {
        return new $2b36420fded722e7$var$ConsoleObject().grey;
    },
    get redBright () {
        return new $2b36420fded722e7$var$ConsoleObject().redBright;
    },
    get greenBright () {
        return new $2b36420fded722e7$var$ConsoleObject().greenBright;
    },
    get yellowBright () {
        return new $2b36420fded722e7$var$ConsoleObject().yellowBright;
    },
    get blueBright () {
        return new $2b36420fded722e7$var$ConsoleObject().blueBright;
    },
    get magentaBright () {
        return new $2b36420fded722e7$var$ConsoleObject().magentaBright;
    },
    get cyanBright () {
        return new $2b36420fded722e7$var$ConsoleObject().cyanBright;
    },
    get whiteBright () {
        return new $2b36420fded722e7$var$ConsoleObject().whiteBright;
    },
    get bgBlack () {
        return new $2b36420fded722e7$var$ConsoleObject().bgBlack;
    },
    get bgRed () {
        return new $2b36420fded722e7$var$ConsoleObject().bgRed;
    },
    get bgGreen () {
        return new $2b36420fded722e7$var$ConsoleObject().bgGreen;
    },
    get bgYellow () {
        return new $2b36420fded722e7$var$ConsoleObject().bgYellow;
    },
    get bgBlue () {
        return new $2b36420fded722e7$var$ConsoleObject().bgBlue;
    },
    get bgMagenta () {
        return new $2b36420fded722e7$var$ConsoleObject().bgMagenta;
    },
    get bgCyan () {
        return new $2b36420fded722e7$var$ConsoleObject().bgCyan;
    },
    get bgWhite () {
        return new $2b36420fded722e7$var$ConsoleObject().bgWhite;
    },
    get bgBlackBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgBlackBright;
    },
    get bgGray () {
        return new $2b36420fded722e7$var$ConsoleObject().bgGray;
    },
    get bgGrey () {
        return new $2b36420fded722e7$var$ConsoleObject().bgGrey;
    },
    get bgRedBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgRedBright;
    },
    get bgGreenBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new $2b36420fded722e7$var$ConsoleObject().bgWhiteBright;
    },
    log: $2b36420fded722e7$var$realConsole.log,
    warn: $2b36420fded722e7$var$realConsole.warn,
    dir: $2b36420fded722e7$var$realConsole.dir,
    time: $2b36420fded722e7$var$realConsole.time,
    timeEnd: $2b36420fded722e7$var$realConsole.timeEnd,
    timeLog: $2b36420fded722e7$var$realConsole.timeLog,
    trace: $2b36420fded722e7$var$realConsole.trace,
    assert: $2b36420fded722e7$var$realConsole.assert,
    clear: $2b36420fded722e7$var$realConsole.clear,
    count: $2b36420fded722e7$var$realConsole.count,
    countReset: $2b36420fded722e7$var$realConsole.countReset,
    group: $2b36420fded722e7$var$realConsole.group,
    groupEnd: $2b36420fded722e7$var$realConsole.groupEnd,
    table: $2b36420fded722e7$var$realConsole.table,
    debug: $2b36420fded722e7$var$realConsole.debug,
    info: $2b36420fded722e7$var$realConsole.info,
    dirxml: $2b36420fded722e7$var$realConsole.dirxml,
    error: $2b36420fded722e7$var$realConsole.error,
    groupCollapsed: $2b36420fded722e7$var$realConsole.groupCollapsed,
    Console: $2b36420fded722e7$var$realConsole.Console,
    profile: $2b36420fded722e7$var$realConsole.profile,
    profileEnd: $2b36420fded722e7$var$realConsole.profileEnd,
    timeStamp: $2b36420fded722e7$var$realConsole.timeStamp,
    context: $2b36420fded722e7$var$realConsole.context
};
var $2b36420fded722e7$export$2e2bcd8739ae039 = $2b36420fded722e7$export$9d69f5c452819e4;


//# sourceMappingURL=main.js.map
