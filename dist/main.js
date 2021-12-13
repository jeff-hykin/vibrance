var $1X50L$os = require("os");
var $1X50L$tty = require("tty");

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
var $2e8d761490e07ce1$exports = {};
'use strict';
parcelRequire.register("lL0oj", function(module, exports) {
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
    if (colorConvert === undefined) colorConvert = (parcelRequire("i1GDl"));
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
parcelRequire.register("i1GDl", function(module, exports) {

var $9bL6J = parcelRequire("9bL6J");

var $fKhVK = parcelRequire("fKhVK");
const $d1f96426e6e3c6e4$var$convert = {
};
const $d1f96426e6e3c6e4$var$models = Object.keys($9bL6J);
function $d1f96426e6e3c6e4$var$wrapRaw(fn) {
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
function $d1f96426e6e3c6e4$var$wrapRounded(fn) {
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
$d1f96426e6e3c6e4$var$models.forEach((fromModel)=>{
    $d1f96426e6e3c6e4$var$convert[fromModel] = {
    };
    Object.defineProperty($d1f96426e6e3c6e4$var$convert[fromModel], 'channels', {
        value: $9bL6J[fromModel].channels
    });
    Object.defineProperty($d1f96426e6e3c6e4$var$convert[fromModel], 'labels', {
        value: $9bL6J[fromModel].labels
    });
    const routes = $fKhVK(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        $d1f96426e6e3c6e4$var$convert[fromModel][toModel] = $d1f96426e6e3c6e4$var$wrapRounded(fn);
        $d1f96426e6e3c6e4$var$convert[fromModel][toModel].raw = $d1f96426e6e3c6e4$var$wrapRaw(fn);
    });
});
module.exports = $d1f96426e6e3c6e4$var$convert;

});
parcelRequire.register("9bL6J", function(module, exports) {

var $iq341 = parcelRequire("iq341");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const $6b09aebda5281507$var$reverseKeywords = {
};
for (const key of Object.keys($iq341))$6b09aebda5281507$var$reverseKeywords[$iq341[key]] = key;
const $6b09aebda5281507$var$convert = {
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
module.exports = $6b09aebda5281507$var$convert;
// Hide .channels and .labels properties
for (const model of Object.keys($6b09aebda5281507$var$convert)){
    if (!('channels' in $6b09aebda5281507$var$convert[model])) throw new Error('missing channels property: ' + model);
    if (!('labels' in $6b09aebda5281507$var$convert[model])) throw new Error('missing channel labels property: ' + model);
    if ($6b09aebda5281507$var$convert[model].labels.length !== $6b09aebda5281507$var$convert[model].channels) throw new Error('channel and label counts mismatch: ' + model);
    const { channels: channels , labels: labels  } = $6b09aebda5281507$var$convert[model];
    delete $6b09aebda5281507$var$convert[model].channels;
    delete $6b09aebda5281507$var$convert[model].labels;
    Object.defineProperty($6b09aebda5281507$var$convert[model], 'channels', {
        value: channels
    });
    Object.defineProperty($6b09aebda5281507$var$convert[model], 'labels', {
        value: labels
    });
}
$6b09aebda5281507$var$convert.rgb.hsl = function(rgb) {
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
$6b09aebda5281507$var$convert.rgb.hsv = function(rgb) {
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
$6b09aebda5281507$var$convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = $6b09aebda5281507$var$convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
$6b09aebda5281507$var$convert.rgb.cmyk = function(rgb) {
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
function $6b09aebda5281507$var$comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
$6b09aebda5281507$var$convert.rgb.keyword = function(rgb) {
    const reversed = $6b09aebda5281507$var$reverseKeywords[rgb];
    if (reversed) return reversed;
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys($iq341)){
        const value = $iq341[keyword];
        // Compute comparative distance
        const distance = $6b09aebda5281507$var$comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
$6b09aebda5281507$var$convert.keyword.rgb = function(keyword) {
    return $iq341[keyword];
};
$6b09aebda5281507$var$convert.rgb.xyz = function(rgb) {
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
$6b09aebda5281507$var$convert.rgb.lab = function(rgb) {
    const xyz = $6b09aebda5281507$var$convert.rgb.xyz(rgb);
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
$6b09aebda5281507$var$convert.hsl.rgb = function(hsl) {
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
$6b09aebda5281507$var$convert.hsl.hsv = function(hsl) {
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
$6b09aebda5281507$var$convert.hsv.rgb = function(hsv) {
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
$6b09aebda5281507$var$convert.hsv.hsl = function(hsv) {
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
$6b09aebda5281507$var$convert.hwb.rgb = function(hwb) {
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
$6b09aebda5281507$var$convert.cmyk.rgb = function(cmyk) {
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
$6b09aebda5281507$var$convert.xyz.rgb = function(xyz) {
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
$6b09aebda5281507$var$convert.xyz.lab = function(xyz) {
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
$6b09aebda5281507$var$convert.lab.xyz = function(lab) {
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
$6b09aebda5281507$var$convert.lab.lch = function(lab) {
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
$6b09aebda5281507$var$convert.lch.lab = function(lch) {
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
$6b09aebda5281507$var$convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? $6b09aebda5281507$var$convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) return 30;
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) ansi += 60;
    return ansi;
};
$6b09aebda5281507$var$convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return $6b09aebda5281507$var$convert.rgb.ansi16($6b09aebda5281507$var$convert.hsv.rgb(args), args[2]);
};
$6b09aebda5281507$var$convert.rgb.ansi256 = function(args) {
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
$6b09aebda5281507$var$convert.ansi16.rgb = function(args) {
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
$6b09aebda5281507$var$convert.ansi256.rgb = function(args) {
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
$6b09aebda5281507$var$convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
$6b09aebda5281507$var$convert.hex.rgb = function(args) {
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
$6b09aebda5281507$var$convert.rgb.hcg = function(rgb) {
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
$6b09aebda5281507$var$convert.hsl.hcg = function(hsl) {
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
$6b09aebda5281507$var$convert.hsv.hcg = function(hsv) {
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
$6b09aebda5281507$var$convert.hcg.rgb = function(hcg) {
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
$6b09aebda5281507$var$convert.hcg.hsv = function(hcg) {
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
$6b09aebda5281507$var$convert.hcg.hsl = function(hcg) {
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
$6b09aebda5281507$var$convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
$6b09aebda5281507$var$convert.hwb.hcg = function(hwb) {
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
$6b09aebda5281507$var$convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
$6b09aebda5281507$var$convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
$6b09aebda5281507$var$convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
$6b09aebda5281507$var$convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
$6b09aebda5281507$var$convert.gray.hsv = $6b09aebda5281507$var$convert.gray.hsl;
$6b09aebda5281507$var$convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
$6b09aebda5281507$var$convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
$6b09aebda5281507$var$convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
$6b09aebda5281507$var$convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
$6b09aebda5281507$var$convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};

});
parcelRequire.register("iq341", function(module, exports) {
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


parcelRequire.register("fKhVK", function(module, exports) {

var $9bL6J = parcelRequire("9bL6J");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function $b7690f80ae18235a$var$buildGraph() {
    const graph = {
    };
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys($9bL6J);
    for(let len = models.length, i = 0; i < len; i++)graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
    };
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function $b7690f80ae18235a$var$deriveBFS(fromModel) {
    const graph = $b7690f80ae18235a$var$buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys($9bL6J[current]);
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
function $b7690f80ae18235a$var$link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function $b7690f80ae18235a$var$wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = $9bL6J[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = $b7690f80ae18235a$var$link($9bL6J[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = $b7690f80ae18235a$var$deriveBFS(fromModel);
    const conversion = {
    };
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) continue;
        conversion[toModel] = $b7690f80ae18235a$var$wrapConversion(toModel, graph);
    }
    return conversion;
};

});




var $lL0oj = parcelRequire("lL0oj");
var $ab9c878c38f8d4dd$exports = {};
'use strict';


var $3f00cf38bd9565bf$exports = {};
'use strict';
$3f00cf38bd9565bf$exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


const { env: $ab9c878c38f8d4dd$var$env  } = process;
let $ab9c878c38f8d4dd$var$forceColor;
if ($3f00cf38bd9565bf$exports('no-color') || $3f00cf38bd9565bf$exports('no-colors') || $3f00cf38bd9565bf$exports('color=false') || $3f00cf38bd9565bf$exports('color=never')) $ab9c878c38f8d4dd$var$forceColor = 0;
else if ($3f00cf38bd9565bf$exports('color') || $3f00cf38bd9565bf$exports('colors') || $3f00cf38bd9565bf$exports('color=true') || $3f00cf38bd9565bf$exports('color=always')) $ab9c878c38f8d4dd$var$forceColor = 1;
if ('FORCE_COLOR' in $ab9c878c38f8d4dd$var$env) {
    if ($ab9c878c38f8d4dd$var$env.FORCE_COLOR === 'true') $ab9c878c38f8d4dd$var$forceColor = 1;
    else if ($ab9c878c38f8d4dd$var$env.FORCE_COLOR === 'false') $ab9c878c38f8d4dd$var$forceColor = 0;
    else $ab9c878c38f8d4dd$var$forceColor = $ab9c878c38f8d4dd$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt($ab9c878c38f8d4dd$var$env.FORCE_COLOR, 10), 3);
}
function $ab9c878c38f8d4dd$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function $ab9c878c38f8d4dd$var$supportsColor(haveStream, streamIsTTY) {
    if ($ab9c878c38f8d4dd$var$forceColor === 0) return 0;
    if ($3f00cf38bd9565bf$exports('color=16m') || $3f00cf38bd9565bf$exports('color=full') || $3f00cf38bd9565bf$exports('color=truecolor')) return 3;
    if ($3f00cf38bd9565bf$exports('color=256')) return 2;
    if (haveStream && !streamIsTTY && $ab9c878c38f8d4dd$var$forceColor === undefined) return 0;
    const min = $ab9c878c38f8d4dd$var$forceColor || 0;
    if ($ab9c878c38f8d4dd$var$env.TERM === 'dumb') return min;
    if (process.platform === 'win32') {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = $1X50L$os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) return Number(osRelease[2]) >= 14931 ? 3 : 2;
        return 1;
    }
    if ('CI' in $ab9c878c38f8d4dd$var$env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in $ab9c878c38f8d4dd$var$env
        ) || $ab9c878c38f8d4dd$var$env.CI_NAME === 'codeship') return 1;
        return min;
    }
    if ('TEAMCITY_VERSION' in $ab9c878c38f8d4dd$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($ab9c878c38f8d4dd$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($ab9c878c38f8d4dd$var$env.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in $ab9c878c38f8d4dd$var$env) {
        const version = parseInt(($ab9c878c38f8d4dd$var$env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch($ab9c878c38f8d4dd$var$env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test($ab9c878c38f8d4dd$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($ab9c878c38f8d4dd$var$env.TERM)) return 1;
    if ('COLORTERM' in $ab9c878c38f8d4dd$var$env) return 1;
    return min;
}
function $ab9c878c38f8d4dd$var$getSupportLevel(stream) {
    const level = $ab9c878c38f8d4dd$var$supportsColor(stream, stream && stream.isTTY);
    return $ab9c878c38f8d4dd$var$translateLevel(level);
}
$ab9c878c38f8d4dd$exports = {
    supportsColor: $ab9c878c38f8d4dd$var$getSupportLevel,
    stdout: $ab9c878c38f8d4dd$var$translateLevel($ab9c878c38f8d4dd$var$supportsColor(true, $1X50L$tty.isatty(1))),
    stderr: $ab9c878c38f8d4dd$var$translateLevel($ab9c878c38f8d4dd$var$supportsColor(true, $1X50L$tty.isatty(2)))
};


var $2e8d761490e07ce1$require$stdoutColor = $ab9c878c38f8d4dd$exports.stdout;
var $2e8d761490e07ce1$require$stderrColor = $ab9c878c38f8d4dd$exports.stderr;
var $478fff1bee01401b$exports = {};
'use strict';
const $478fff1bee01401b$var$stringReplaceAll = (string, substring, replacer)=>{
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
const $478fff1bee01401b$var$stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index)=>{
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
$478fff1bee01401b$exports = {
    stringReplaceAll: $478fff1bee01401b$var$stringReplaceAll,
    stringEncaseCRLFWithFirstIndex: $478fff1bee01401b$var$stringEncaseCRLFWithFirstIndex
};


var $2e8d761490e07ce1$require$stringReplaceAll = $478fff1bee01401b$exports.stringReplaceAll;
var $2e8d761490e07ce1$require$stringEncaseCRLFWithFirstIndex = $478fff1bee01401b$exports.stringEncaseCRLFWithFirstIndex;
const { isArray: $2e8d761490e07ce1$var$isArray  } = Array;
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $2e8d761490e07ce1$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $2e8d761490e07ce1$var$styles = Object.create(null);
const $2e8d761490e07ce1$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $2e8d761490e07ce1$require$stdoutColor ? $2e8d761490e07ce1$require$stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $2e8d761490e07ce1$var$ChalkClass {
    constructor(options1){
        // eslint-disable-next-line no-constructor-return
        return $2e8d761490e07ce1$var$chalkFactory(options1);
    }
}
const $2e8d761490e07ce1$var$chalkFactory = (options)=>{
    const chalk = {
    };
    $2e8d761490e07ce1$var$applyOptions(chalk, options);
    chalk.template = (...arguments_)=>$2e8d761490e07ce1$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $2e8d761490e07ce1$var$Chalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.constructor = ()=>{
        throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
    };
    chalk.template.Instance = $2e8d761490e07ce1$var$ChalkClass;
    return chalk.template;
};
function $2e8d761490e07ce1$var$Chalk(options) {
    return $2e8d761490e07ce1$var$chalkFactory(options);
}
for (const [styleName, style] of Object.entries($lL0oj))$2e8d761490e07ce1$var$styles[styleName] = {
    get () {
        const builder = $2e8d761490e07ce1$var$createBuilder(this, $2e8d761490e07ce1$var$createStyler(style.open, style.close, this._styler), this._isEmpty);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$2e8d761490e07ce1$var$styles.visible = {
    get () {
        const builder = $2e8d761490e07ce1$var$createBuilder(this, this._styler, true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $2e8d761490e07ce1$var$usedModels = [
    'rgb',
    'hex',
    'keyword',
    'hsl',
    'hsv',
    'hwb',
    'ansi',
    'ansi256'
];
for (const model of $2e8d761490e07ce1$var$usedModels)$2e8d761490e07ce1$var$styles[model] = {
    get () {
        const { level: level  } = this;
        return function(...arguments_) {
            const styler = $2e8d761490e07ce1$var$createStyler($lL0oj.color[$2e8d761490e07ce1$var$levelMapping[level]][model](...arguments_), $lL0oj.color.close, this._styler);
            return $2e8d761490e07ce1$var$createBuilder(this, styler, this._isEmpty);
        };
    }
};
for (const model1 of $2e8d761490e07ce1$var$usedModels){
    const bgModel = 'bg' + model1[0].toUpperCase() + model1.slice(1);
    $2e8d761490e07ce1$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $2e8d761490e07ce1$var$createStyler($lL0oj.bgColor[$2e8d761490e07ce1$var$levelMapping[level]][model1](...arguments_), $lL0oj.bgColor.close, this._styler);
                return $2e8d761490e07ce1$var$createBuilder(this, styler, this._isEmpty);
            };
        }
    };
}
const $2e8d761490e07ce1$var$proto = Object.defineProperties(()=>{
}, {
    ...$2e8d761490e07ce1$var$styles,
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
const $2e8d761490e07ce1$var$createStyler = (open, close, parent)=>{
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
const $2e8d761490e07ce1$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($2e8d761490e07ce1$var$isArray(arguments_[0]) && $2e8d761490e07ce1$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $2e8d761490e07ce1$var$applyStyle(builder, $2e8d761490e07ce1$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $2e8d761490e07ce1$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $2e8d761490e07ce1$var$proto);
    builder._generator = self;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
};
const $2e8d761490e07ce1$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self._isEmpty ? '' : string;
    let styler = self._styler;
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.indexOf('\u001B') !== -1) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $2e8d761490e07ce1$require$stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $2e8d761490e07ce1$require$stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
let $2e8d761490e07ce1$var$template;
parcelRequire.register("238Oy", function(module, exports) {
'use strict';
const $17e2b2f279025c8a$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $17e2b2f279025c8a$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $17e2b2f279025c8a$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $17e2b2f279025c8a$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $17e2b2f279025c8a$var$ESCAPES = new Map([
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
function $17e2b2f279025c8a$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    return $17e2b2f279025c8a$var$ESCAPES.get(c) || c;
}
function $17e2b2f279025c8a$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($17e2b2f279025c8a$var$STRING_REGEX)) results.push(matches[2].replace($17e2b2f279025c8a$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $17e2b2f279025c8a$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $17e2b2f279025c8a$var$parseStyle(style) {
    $17e2b2f279025c8a$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $17e2b2f279025c8a$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $17e2b2f279025c8a$var$parseArguments(name, matches[2]);
            results.push([
                name
            ].concat(args));
        } else results.push([
            name
        ]);
    }
    return results;
}
function $17e2b2f279025c8a$var$buildStyle(chalk, styles) {
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
    temporary.replace($17e2b2f279025c8a$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($17e2b2f279025c8a$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $17e2b2f279025c8a$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $17e2b2f279025c8a$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($17e2b2f279025c8a$var$buildStyle(chalk, styles)(chunk.join('')));
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


const $2e8d761490e07ce1$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$2e8d761490e07ce1$var$isArray(firstString) || !$2e8d761490e07ce1$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    if ($2e8d761490e07ce1$var$template === undefined) $2e8d761490e07ce1$var$template = (parcelRequire("238Oy"));
    return $2e8d761490e07ce1$var$template(chalk, parts.join(''));
};
Object.defineProperties($2e8d761490e07ce1$var$Chalk.prototype, $2e8d761490e07ce1$var$styles);
const $2e8d761490e07ce1$var$chalk = $2e8d761490e07ce1$var$Chalk(); // eslint-disable-line new-cap
$2e8d761490e07ce1$var$chalk.supportsColor = $2e8d761490e07ce1$require$stdoutColor;
$2e8d761490e07ce1$var$chalk.stderr = $2e8d761490e07ce1$var$Chalk({
    level: $2e8d761490e07ce1$require$stderrColor ? $2e8d761490e07ce1$require$stderrColor.level : 0
}); // eslint-disable-line new-cap
$2e8d761490e07ce1$var$chalk.stderr.supportsColor = $2e8d761490e07ce1$require$stderrColor;
$2e8d761490e07ce1$exports = $2e8d761490e07ce1$var$chalk;


const $9bfb22f90d74e463$var$ANSI_BACKGROUND_OFFSET = 10;
const $9bfb22f90d74e463$var$wrapAnsi16 = (offset = 0)=>(code)=>`\u001B[${code + offset}m`
;
const $9bfb22f90d74e463$var$wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`
;
const $9bfb22f90d74e463$var$wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`
;
function $9bfb22f90d74e463$var$assembleStyles() {
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
    styles.color.ansi = $9bfb22f90d74e463$var$wrapAnsi16();
    styles.color.ansi256 = $9bfb22f90d74e463$var$wrapAnsi256();
    styles.color.ansi16m = $9bfb22f90d74e463$var$wrapAnsi16m();
    styles.bgColor.ansi = $9bfb22f90d74e463$var$wrapAnsi16($9bfb22f90d74e463$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = $9bfb22f90d74e463$var$wrapAnsi256($9bfb22f90d74e463$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = $9bfb22f90d74e463$var$wrapAnsi16m($9bfb22f90d74e463$var$ANSI_BACKGROUND_OFFSET);
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
const $9bfb22f90d74e463$var$ansiStyles = $9bfb22f90d74e463$var$assembleStyles();
var $9bfb22f90d74e463$export$2e2bcd8739ae039 = $9bfb22f90d74e463$var$ansiStyles;


let $d00e5cff98a52f68$var$args = [];

try {
    $d00e5cff98a52f68$var$args = Deno.args;
} catch (error) {
    try {
        const [_1, _2, ...argvs] = $d00e5cff98a52f68$import$e54fe5b0f43758f7$6f4ae1207c703045;
        $d00e5cff98a52f68$var$args = argvs;
    } catch (error) {
    }
}
function $d00e5cff98a52f68$export$2e2bcd8739ae039(flag, argv = $d00e5cff98a52f68$var$args) {
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}



function $a2c32336ac648158$var$isatty(fd) {
    if (typeof fd !== "number") return false;
    try {
        return Deno.isatty(fd);
    } catch (_) {
        // if deno failed, try node
        try {
            var tty = $a2c32336ac648158$import$abaf19b7aa1bfe44;
            return tty.isatty(fd);
        } catch (error) {
        }
        return false;
    }
}
let $a2c32336ac648158$var$env = {
};

try {
    $a2c32336ac648158$var$env = Deno.env.toObject();
} catch (error) {
    try {
        $a2c32336ac648158$var$env = $a2c32336ac648158$import$e54fe5b0f43758f7$a7b6bc01c63cdfc3;
    } catch (error) {
    }
}
let $a2c32336ac648158$var$flagForceColor;
if ($d00e5cff98a52f68$export$2e2bcd8739ae039("no-color") || $d00e5cff98a52f68$export$2e2bcd8739ae039("no-colors") || $d00e5cff98a52f68$export$2e2bcd8739ae039("color=false") || $d00e5cff98a52f68$export$2e2bcd8739ae039("color=never")) $a2c32336ac648158$var$flagForceColor = 0;
else if ($d00e5cff98a52f68$export$2e2bcd8739ae039("color") || $d00e5cff98a52f68$export$2e2bcd8739ae039("colors") || $d00e5cff98a52f68$export$2e2bcd8739ae039("color=true") || $d00e5cff98a52f68$export$2e2bcd8739ae039("color=always")) $a2c32336ac648158$var$flagForceColor = 1;
function $a2c32336ac648158$var$envForceColor() {
    if ("FORCE_COLOR" in $a2c32336ac648158$var$env) {
        if ($a2c32336ac648158$var$env.FORCE_COLOR === "true") return 1;
        if ($a2c32336ac648158$var$env.FORCE_COLOR === "false") return 0;
        return $a2c32336ac648158$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt($a2c32336ac648158$var$env.FORCE_COLOR, 10), 3);
    }
}
function $a2c32336ac648158$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}

function $a2c32336ac648158$var$_supportsColor(haveStream, { streamIsTTY: streamIsTTY , sniffFlags: sniffFlags = true  } = {
}) {
    const noFlagForceColor = $a2c32336ac648158$var$envForceColor();
    if (noFlagForceColor !== undefined) $a2c32336ac648158$var$flagForceColor = noFlagForceColor;
    const forceColor = sniffFlags ? $a2c32336ac648158$var$flagForceColor : noFlagForceColor;
    if (forceColor === 0) return 0;
    if (sniffFlags) {
        if ($d00e5cff98a52f68$export$2e2bcd8739ae039("color=16m") || $d00e5cff98a52f68$export$2e2bcd8739ae039("color=full") || $d00e5cff98a52f68$export$2e2bcd8739ae039("color=truecolor")) return 3;
        if ($d00e5cff98a52f68$export$2e2bcd8739ae039("color=256")) return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) return 0;
    const min = forceColor || 0;
    if ($a2c32336ac648158$var$env.TERM === "dumb") return min;
    let os;
    try {
        os = Deno.build.os;
    } catch (error) {
        try {
            os = $a2c32336ac648158$import$e54fe5b0f43758f7$722a64dea1b767dc;
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
    if ("CI" in $a2c32336ac648158$var$env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE",
            "DRONE", 
        ].some((sign)=>sign in $a2c32336ac648158$var$env
        ) || $a2c32336ac648158$var$env.CI_NAME === "codeship") return 1;
        return min;
    }
    if ("TEAMCITY_VERSION" in $a2c32336ac648158$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($a2c32336ac648158$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($a2c32336ac648158$var$env.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in $a2c32336ac648158$var$env) {
        const version = Number.parseInt(($a2c32336ac648158$var$env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch($a2c32336ac648158$var$env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test($a2c32336ac648158$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($a2c32336ac648158$var$env.TERM)) return 1;
    if ("COLORTERM" in $a2c32336ac648158$var$env) return 1;
    return min;
}
function $a2c32336ac648158$export$6f279ba00f1459de(stream, options = {
}) {
    const level = $a2c32336ac648158$var$_supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options
    });
    return $a2c32336ac648158$var$translateLevel(level);
}
const $a2c32336ac648158$var$supportsColor = {
    stdout: $a2c32336ac648158$export$6f279ba00f1459de({
        isTTY: $a2c32336ac648158$var$isatty(1)
    }),
    stderr: $a2c32336ac648158$export$6f279ba00f1459de({
        isTTY: $a2c32336ac648158$var$isatty(2)
    })
};
var $a2c32336ac648158$export$2e2bcd8739ae039 = $a2c32336ac648158$var$supportsColor;


function $73720b04dfe94962$export$9300dfb554c6c407(string, substring, replacer) {
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
function $73720b04dfe94962$export$ecabf4aff2e9764(string, prefix, postfix, index) {
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


const $d04e15a1e3d858a5$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $d04e15a1e3d858a5$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $d04e15a1e3d858a5$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $d04e15a1e3d858a5$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $d04e15a1e3d858a5$var$ESCAPES = new Map([
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
function $d04e15a1e3d858a5$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(Number.parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(Number.parseInt(c.slice(2, -1), 16));
    return $d04e15a1e3d858a5$var$ESCAPES.get(c) || c;
}
function $d04e15a1e3d858a5$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($d04e15a1e3d858a5$var$STRING_REGEX)) results.push(matches[2].replace($d04e15a1e3d858a5$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $d04e15a1e3d858a5$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $d04e15a1e3d858a5$var$parseStyle(style) {
    $d04e15a1e3d858a5$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $d04e15a1e3d858a5$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $d04e15a1e3d858a5$var$parseArguments(name, matches[2]);
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
function $d04e15a1e3d858a5$var$buildStyle(chalk, styles) {
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
function $d04e15a1e3d858a5$export$2e2bcd8739ae039(chalk, temporary) {
    const styles = [];
    const chunks = [];
    let chunk = [];
    // eslint-disable-next-line max-params
    temporary.replace($d04e15a1e3d858a5$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($d04e15a1e3d858a5$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $d04e15a1e3d858a5$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $d04e15a1e3d858a5$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($d04e15a1e3d858a5$var$buildStyle(chalk, styles)(chunk.join('')));
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


const { stdout: $f536ac72549f90d1$export$fcbe44f5d6fcebd , stderr: $f536ac72549f90d1$export$8107055a758cd2bd  } = $a2c32336ac648158$export$2e2bcd8739ae039;
const { isArray: $f536ac72549f90d1$var$isArray  } = Array;
const $f536ac72549f90d1$var$GENERATOR = Symbol('GENERATOR');
const $f536ac72549f90d1$var$STYLER = Symbol('STYLER');
const $f536ac72549f90d1$var$IS_EMPTY = Symbol('IS_EMPTY');
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $f536ac72549f90d1$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $f536ac72549f90d1$var$styles = Object.create(null);
const $f536ac72549f90d1$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $f536ac72549f90d1$export$fcbe44f5d6fcebd ? $f536ac72549f90d1$export$fcbe44f5d6fcebd.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $f536ac72549f90d1$export$79544b80b91c2197 {
    constructor(options1){
        // eslint-disable-next-line no-constructor-return
        return $f536ac72549f90d1$var$chalkFactory(options1);
    }
}
const $f536ac72549f90d1$var$chalkFactory = (options)=>{
    const chalk = {
    };
    $f536ac72549f90d1$var$applyOptions(chalk, options);
    chalk.template = (...arguments_)=>$f536ac72549f90d1$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $f536ac72549f90d1$var$createChalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.Chalk = $f536ac72549f90d1$export$79544b80b91c2197;
    return chalk.template;
};
function $f536ac72549f90d1$var$createChalk(options) {
    return $f536ac72549f90d1$var$chalkFactory(options);
}
Object.setPrototypeOf($f536ac72549f90d1$var$createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries($9bfb22f90d74e463$export$2e2bcd8739ae039))$f536ac72549f90d1$var$styles[styleName] = {
    get () {
        const builder = $f536ac72549f90d1$var$createBuilder(this, $f536ac72549f90d1$var$createStyler(style.open, style.close, this[$f536ac72549f90d1$var$STYLER]), this[$f536ac72549f90d1$var$IS_EMPTY]);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$f536ac72549f90d1$var$styles.visible = {
    get () {
        const builder = $f536ac72549f90d1$var$createBuilder(this, this[$f536ac72549f90d1$var$STYLER], true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $f536ac72549f90d1$var$getModelAnsi = (model, level, type, ...arguments_)=>{
    if (model === 'rgb') {
        if (level === 'ansi16m') return $9bfb22f90d74e463$export$2e2bcd8739ae039[type].ansi16m(...arguments_);
        if (level === 'ansi256') return $9bfb22f90d74e463$export$2e2bcd8739ae039[type].ansi256($9bfb22f90d74e463$export$2e2bcd8739ae039.rgbToAnsi256(...arguments_));
        return $9bfb22f90d74e463$export$2e2bcd8739ae039[type].ansi($9bfb22f90d74e463$export$2e2bcd8739ae039.rgbToAnsi(...arguments_));
    }
    if (model === 'hex') return $f536ac72549f90d1$var$getModelAnsi('rgb', level, type, ...$9bfb22f90d74e463$export$2e2bcd8739ae039.hexToRgb(...arguments_));
    return $9bfb22f90d74e463$export$2e2bcd8739ae039[type][model](...arguments_);
};
const $f536ac72549f90d1$var$usedModels = [
    'rgb',
    'hex',
    'ansi256'
];
for (const model1 of $f536ac72549f90d1$var$usedModels){
    $f536ac72549f90d1$var$styles[model1] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $f536ac72549f90d1$var$createStyler($f536ac72549f90d1$var$getModelAnsi(model1, $f536ac72549f90d1$var$levelMapping[level], 'color', ...arguments_), $9bfb22f90d74e463$export$2e2bcd8739ae039.color.close, this[$f536ac72549f90d1$var$STYLER]);
                return $f536ac72549f90d1$var$createBuilder(this, styler, this[$f536ac72549f90d1$var$IS_EMPTY]);
            };
        }
    };
    const bgModel = 'bg' + model1[0].toUpperCase() + model1.slice(1);
    $f536ac72549f90d1$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $f536ac72549f90d1$var$createStyler($f536ac72549f90d1$var$getModelAnsi(model1, $f536ac72549f90d1$var$levelMapping[level], 'bgColor', ...arguments_), $9bfb22f90d74e463$export$2e2bcd8739ae039.bgColor.close, this[$f536ac72549f90d1$var$STYLER]);
                return $f536ac72549f90d1$var$createBuilder(this, styler, this[$f536ac72549f90d1$var$IS_EMPTY]);
            };
        }
    };
}
const $f536ac72549f90d1$var$proto = Object.defineProperties(()=>{
}, {
    ...$f536ac72549f90d1$var$styles,
    level: {
        enumerable: true,
        get () {
            return this[$f536ac72549f90d1$var$GENERATOR].level;
        },
        set (level) {
            this[$f536ac72549f90d1$var$GENERATOR].level = level;
        }
    }
});
const $f536ac72549f90d1$var$createStyler = (open, close, parent)=>{
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
const $f536ac72549f90d1$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($f536ac72549f90d1$var$isArray(arguments_[0]) && $f536ac72549f90d1$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $f536ac72549f90d1$var$applyStyle(builder, $f536ac72549f90d1$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $f536ac72549f90d1$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $f536ac72549f90d1$var$proto);
    builder[$f536ac72549f90d1$var$GENERATOR] = self;
    builder[$f536ac72549f90d1$var$STYLER] = _styler;
    builder[$f536ac72549f90d1$var$IS_EMPTY] = _isEmpty;
    return builder;
};
const $f536ac72549f90d1$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self[$f536ac72549f90d1$var$IS_EMPTY] ? '' : string;
    let styler = self[$f536ac72549f90d1$var$STYLER];
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.includes('\u001B')) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $73720b04dfe94962$export$9300dfb554c6c407(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $73720b04dfe94962$export$ecabf4aff2e9764(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
const $f536ac72549f90d1$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$f536ac72549f90d1$var$isArray(firstString) || !$f536ac72549f90d1$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    return $d04e15a1e3d858a5$export$2e2bcd8739ae039(chalk, parts.join(''));
};
Object.defineProperties($f536ac72549f90d1$var$createChalk.prototype, $f536ac72549f90d1$var$styles);
const $f536ac72549f90d1$var$chalk = $f536ac72549f90d1$var$createChalk();
const $f536ac72549f90d1$export$8cef8185e551afa5 = $f536ac72549f90d1$var$createChalk({
    level: $f536ac72549f90d1$export$8107055a758cd2bd ? $f536ac72549f90d1$export$8107055a758cd2bd.level : 0
});
var $f536ac72549f90d1$export$2e2bcd8739ae039 = $f536ac72549f90d1$var$chalk;


var $95c146fde19bc476$require$es6Chalk = $f536ac72549f90d1$export$2e2bcd8739ae039;
// because Parcel.js 2 is jank-AF (normally eval wouldn't be needed, and normally I wouldn't have to use globalThis to get it)
const $95c146fde19bc476$var$isNode = globalThis["eval"]("typeof module === 'object' && module instanceof Object && module.exports instanceof Object");
const $95c146fde19bc476$var$chalk = $95c146fde19bc476$var$isNode ? $2e8d761490e07ce1$exports : $95c146fde19bc476$require$es6Chalk;
const $95c146fde19bc476$var$realConsole = globalThis.console;
const $95c146fde19bc476$var$isBrowserContext = typeof document != 'undefined' && typeof window != 'undefined';
// patch the built in console to allow classes to override output
const $95c146fde19bc476$var$originalThing = $95c146fde19bc476$var$realConsole;
const $95c146fde19bc476$var$proxySymbol = Symbol.for('Proxy');
const $95c146fde19bc476$var$thisProxySymbol = Symbol('thisProxy');
const $95c146fde19bc476$var$symbolForConsoleLog = Symbol.for("console.log");
globalThis.console = new Proxy($95c146fde19bc476$var$originalThing, {
    defineProperty: Reflect.defineProperty,
    getPrototypeOf: Reflect.getPrototypeOf,
    // Object.keys
    ownKeys (...args) {
        return Reflect.ownKeys(...args);
    },
    // function call (original value needs to be a function)
    apply (original, context, ...args) {
        $95c146fde19bc476$var$console.log(args);
    },
    // new operator (original value needs to be a class)
    construct (...args) {
    },
    get (original, key, ...args1) {
        if (key == $95c146fde19bc476$var$proxySymbol || key == $95c146fde19bc476$var$thisProxySymbol) return true;
        // if logging, then 
        if (key == "log") return (...args)=>{
            $95c146fde19bc476$var$realConsole.log(...args.map((each)=>{
                if (each instanceof Object && each[$95c146fde19bc476$var$symbolForConsoleLog] instanceof Function) return each[$95c146fde19bc476$var$symbolForConsoleLog]();
                return each;
            }));
        };
        return Reflect.get(original, key, ...args1);
    },
    set (original, key, ...args) {
        if (key == $95c146fde19bc476$var$proxySymbol || key == $95c146fde19bc476$var$thisProxySymbol) return;
        return Reflect.set(original, key, ...args);
    }
});

class $95c146fde19bc476$var$LoggerObject {
    constructor(){
        this.id = Math.random();
        this.stringBuffer = [];
        this.attributeBuffer = [];
        this.styleString = "font-family:monospace;font-size: 1rem;";
        const ifStyleCalledAsMethod = (...args)=>{
            let styler = $95c146fde19bc476$var$chalk;
            while(this.attributeBuffer.length > 0)styler = styler[this.attributeBuffer.shift()];
            const string = styler(...args);
            this.stringBuffer.push(string);
            return this;
        };
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
            this[$95c146fde19bc476$import$7debb50ef11d5e0b$9dec5d1b3b6a130d.custom] = this.toString;
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
        if (!$95c146fde19bc476$var$isBrowserContext) $95c146fde19bc476$var$realConsole.log(this.toString().replace("%", "%%"), ...others);
        else $95c146fde19bc476$var$realConsole.log(`%c${this.toString().replace("%", "%%")}`, this.styleString);
        // reset it after logging
        this.styleString = "";
        this.stringBuffer = [];
        this.attributeBuffer = [];
        return this;
    }
}

class $95c146fde19bc476$var$ConsoleObject extends $95c146fde19bc476$var$LoggerObject {
    constructor(){
        super();
        // 
        // only difference: proxy object executes .log() when called as a function
        // 
        const ifStyleCalledAsMethod = (...args)=>{
            let styler = $95c146fde19bc476$var$chalk;
            while(this.attributeBuffer.length > 0)styler = styler[this.attributeBuffer.shift()];
            const string = styler(...args);
            this.stringBuffer.push(string);
            this.log();
            return;
        };
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
            this[$95c146fde19bc476$import$7debb50ef11d5e0b$9dec5d1b3b6a130d.custom] = this.toString;
        } catch (error) {
        }
    }
}
const $95c146fde19bc476$var$wrapAroundGet = (number, list)=>list[(number % list.length + list.length) % list.length]
;
let $95c146fde19bc476$var$console = {
    get reset () {
        return new $95c146fde19bc476$var$ConsoleObject().reset;
    },
    get bold () {
        return new $95c146fde19bc476$var$ConsoleObject().bold;
    },
    get dim () {
        return new $95c146fde19bc476$var$ConsoleObject().dim;
    },
    get italic () {
        return new $95c146fde19bc476$var$ConsoleObject().italic;
    },
    get underline () {
        return new $95c146fde19bc476$var$ConsoleObject().underline;
    },
    get inverse () {
        return new $95c146fde19bc476$var$ConsoleObject().inverse;
    },
    get hidden () {
        return new $95c146fde19bc476$var$ConsoleObject().hidden;
    },
    get strikethrough () {
        return new $95c146fde19bc476$var$ConsoleObject().strikethrough;
    },
    get visible () {
        return new $95c146fde19bc476$var$ConsoleObject().visible;
    },
    get black () {
        return new $95c146fde19bc476$var$ConsoleObject().black;
    },
    get red () {
        return new $95c146fde19bc476$var$ConsoleObject().red;
    },
    get green () {
        return new $95c146fde19bc476$var$ConsoleObject().green;
    },
    get yellow () {
        return new $95c146fde19bc476$var$ConsoleObject().yellow;
    },
    get blue () {
        return new $95c146fde19bc476$var$ConsoleObject().blue;
    },
    get magenta () {
        return new $95c146fde19bc476$var$ConsoleObject().magenta;
    },
    get cyan () {
        return new $95c146fde19bc476$var$ConsoleObject().cyan;
    },
    get white () {
        return new $95c146fde19bc476$var$ConsoleObject().white;
    },
    get blackBright () {
        return new $95c146fde19bc476$var$ConsoleObject().blackBright;
    },
    get gray () {
        return new $95c146fde19bc476$var$ConsoleObject().gray;
    },
    get grey () {
        return new $95c146fde19bc476$var$ConsoleObject().grey;
    },
    get redBright () {
        return new $95c146fde19bc476$var$ConsoleObject().redBright;
    },
    get greenBright () {
        return new $95c146fde19bc476$var$ConsoleObject().greenBright;
    },
    get yellowBright () {
        return new $95c146fde19bc476$var$ConsoleObject().yellowBright;
    },
    get blueBright () {
        return new $95c146fde19bc476$var$ConsoleObject().blueBright;
    },
    get magentaBright () {
        return new $95c146fde19bc476$var$ConsoleObject().magentaBright;
    },
    get cyanBright () {
        return new $95c146fde19bc476$var$ConsoleObject().cyanBright;
    },
    get whiteBright () {
        return new $95c146fde19bc476$var$ConsoleObject().whiteBright;
    },
    get bgBlack () {
        return new $95c146fde19bc476$var$ConsoleObject().bgBlack;
    },
    get bgRed () {
        return new $95c146fde19bc476$var$ConsoleObject().bgRed;
    },
    get bgGreen () {
        return new $95c146fde19bc476$var$ConsoleObject().bgGreen;
    },
    get bgYellow () {
        return new $95c146fde19bc476$var$ConsoleObject().bgYellow;
    },
    get bgBlue () {
        return new $95c146fde19bc476$var$ConsoleObject().bgBlue;
    },
    get bgMagenta () {
        return new $95c146fde19bc476$var$ConsoleObject().bgMagenta;
    },
    get bgCyan () {
        return new $95c146fde19bc476$var$ConsoleObject().bgCyan;
    },
    get bgWhite () {
        return new $95c146fde19bc476$var$ConsoleObject().bgWhite;
    },
    get bgBlackBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgBlackBright;
    },
    get bgGray () {
        return new $95c146fde19bc476$var$ConsoleObject().bgGray;
    },
    get bgGrey () {
        return new $95c146fde19bc476$var$ConsoleObject().bgGrey;
    },
    get bgRedBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgRedBright;
    },
    get bgGreenBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new $95c146fde19bc476$var$ConsoleObject().bgWhiteBright;
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
        if ($95c146fde19bc476$var$isBrowserContext) $95c146fde19bc476$var$realConsole.log(`%c${args.join("").replace("%", "%%")}`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
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
                bigString += $95c146fde19bc476$var$vibrance[$95c146fde19bc476$var$wrapAroundGet(number, rainbowColors)](eachChar).toString();
            }
            $95c146fde19bc476$var$realConsole.log(bigString.replace("%", "%%"));
        }
    }
};
const $95c146fde19bc476$var$vibrance = {
    get reset () {
        return new $95c146fde19bc476$var$LoggerObject().reset;
    },
    get bold () {
        return new $95c146fde19bc476$var$LoggerObject().bold;
    },
    get dim () {
        return new $95c146fde19bc476$var$LoggerObject().dim;
    },
    get italic () {
        return new $95c146fde19bc476$var$LoggerObject().italic;
    },
    get underline () {
        return new $95c146fde19bc476$var$LoggerObject().underline;
    },
    get inverse () {
        return new $95c146fde19bc476$var$LoggerObject().inverse;
    },
    get hidden () {
        return new $95c146fde19bc476$var$LoggerObject().hidden;
    },
    get strikethrough () {
        return new $95c146fde19bc476$var$LoggerObject().strikethrough;
    },
    get visible () {
        return new $95c146fde19bc476$var$LoggerObject().visible;
    },
    get black () {
        return new $95c146fde19bc476$var$LoggerObject().black;
    },
    get red () {
        return new $95c146fde19bc476$var$LoggerObject().red;
    },
    get green () {
        return new $95c146fde19bc476$var$LoggerObject().green;
    },
    get yellow () {
        return new $95c146fde19bc476$var$LoggerObject().yellow;
    },
    get blue () {
        return new $95c146fde19bc476$var$LoggerObject().blue;
    },
    get magenta () {
        return new $95c146fde19bc476$var$LoggerObject().magenta;
    },
    get cyan () {
        return new $95c146fde19bc476$var$LoggerObject().cyan;
    },
    get white () {
        return new $95c146fde19bc476$var$LoggerObject().white;
    },
    get blackBright () {
        return new $95c146fde19bc476$var$LoggerObject().blackBright;
    },
    get gray () {
        return new $95c146fde19bc476$var$LoggerObject().gray;
    },
    get grey () {
        return new $95c146fde19bc476$var$LoggerObject().grey;
    },
    get redBright () {
        return new $95c146fde19bc476$var$LoggerObject().redBright;
    },
    get greenBright () {
        return new $95c146fde19bc476$var$LoggerObject().greenBright;
    },
    get yellowBright () {
        return new $95c146fde19bc476$var$LoggerObject().yellowBright;
    },
    get blueBright () {
        return new $95c146fde19bc476$var$LoggerObject().blueBright;
    },
    get magentaBright () {
        return new $95c146fde19bc476$var$LoggerObject().magentaBright;
    },
    get cyanBright () {
        return new $95c146fde19bc476$var$LoggerObject().cyanBright;
    },
    get whiteBright () {
        return new $95c146fde19bc476$var$LoggerObject().whiteBright;
    },
    get bgBlack () {
        return new $95c146fde19bc476$var$LoggerObject().bgBlack;
    },
    get bgRed () {
        return new $95c146fde19bc476$var$LoggerObject().bgRed;
    },
    get bgGreen () {
        return new $95c146fde19bc476$var$LoggerObject().bgGreen;
    },
    get bgYellow () {
        return new $95c146fde19bc476$var$LoggerObject().bgYellow;
    },
    get bgBlue () {
        return new $95c146fde19bc476$var$LoggerObject().bgBlue;
    },
    get bgMagenta () {
        return new $95c146fde19bc476$var$LoggerObject().bgMagenta;
    },
    get bgCyan () {
        return new $95c146fde19bc476$var$LoggerObject().bgCyan;
    },
    get bgWhite () {
        return new $95c146fde19bc476$var$LoggerObject().bgWhite;
    },
    get bgBlackBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgBlackBright;
    },
    get bgGray () {
        return new $95c146fde19bc476$var$LoggerObject().bgGray;
    },
    get bgGrey () {
        return new $95c146fde19bc476$var$LoggerObject().bgGrey;
    },
    get bgRedBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgRedBright;
    },
    get bgGreenBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new $95c146fde19bc476$var$LoggerObject().bgWhiteBright;
    },
    console: $95c146fde19bc476$var$console
};
// add self reference
$95c146fde19bc476$var$vibrance.vibrance = $95c146fde19bc476$var$vibrance;
module.exports = $95c146fde19bc476$var$vibrance;


//# sourceMappingURL=main.js.map
