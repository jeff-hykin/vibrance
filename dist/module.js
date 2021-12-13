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
var $11c045df1a5b205b$exports = {};
var $7e7a99ef2255b980$exports = {};
'use strict';
parcelRequire.register("3aJ9y", function(module, exports) {
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
    if (colorConvert === undefined) colorConvert = (parcelRequire("a4Dft"));
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
parcelRequire.register("a4Dft", function(module, exports) {

var $8jPr5 = parcelRequire("8jPr5");

var $jc8qk = parcelRequire("jc8qk");
const $7558b90be48e241e$var$convert = {
};
const $7558b90be48e241e$var$models = Object.keys($8jPr5);
function $7558b90be48e241e$var$wrapRaw(fn) {
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
function $7558b90be48e241e$var$wrapRounded(fn) {
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
$7558b90be48e241e$var$models.forEach((fromModel)=>{
    $7558b90be48e241e$var$convert[fromModel] = {
    };
    Object.defineProperty($7558b90be48e241e$var$convert[fromModel], 'channels', {
        value: $8jPr5[fromModel].channels
    });
    Object.defineProperty($7558b90be48e241e$var$convert[fromModel], 'labels', {
        value: $8jPr5[fromModel].labels
    });
    const routes = $jc8qk(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        $7558b90be48e241e$var$convert[fromModel][toModel] = $7558b90be48e241e$var$wrapRounded(fn);
        $7558b90be48e241e$var$convert[fromModel][toModel].raw = $7558b90be48e241e$var$wrapRaw(fn);
    });
});
module.exports = $7558b90be48e241e$var$convert;

});
parcelRequire.register("8jPr5", function(module, exports) {

var $eHZVp = parcelRequire("eHZVp");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const $60e7ff2708bfaf42$var$reverseKeywords = {
};
for (const key of Object.keys($eHZVp))$60e7ff2708bfaf42$var$reverseKeywords[$eHZVp[key]] = key;
const $60e7ff2708bfaf42$var$convert = {
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
module.exports = $60e7ff2708bfaf42$var$convert;
// Hide .channels and .labels properties
for (const model of Object.keys($60e7ff2708bfaf42$var$convert)){
    if (!('channels' in $60e7ff2708bfaf42$var$convert[model])) throw new Error('missing channels property: ' + model);
    if (!('labels' in $60e7ff2708bfaf42$var$convert[model])) throw new Error('missing channel labels property: ' + model);
    if ($60e7ff2708bfaf42$var$convert[model].labels.length !== $60e7ff2708bfaf42$var$convert[model].channels) throw new Error('channel and label counts mismatch: ' + model);
    const { channels: channels , labels: labels  } = $60e7ff2708bfaf42$var$convert[model];
    delete $60e7ff2708bfaf42$var$convert[model].channels;
    delete $60e7ff2708bfaf42$var$convert[model].labels;
    Object.defineProperty($60e7ff2708bfaf42$var$convert[model], 'channels', {
        value: channels
    });
    Object.defineProperty($60e7ff2708bfaf42$var$convert[model], 'labels', {
        value: labels
    });
}
$60e7ff2708bfaf42$var$convert.rgb.hsl = function(rgb) {
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
$60e7ff2708bfaf42$var$convert.rgb.hsv = function(rgb) {
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
$60e7ff2708bfaf42$var$convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = $60e7ff2708bfaf42$var$convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
$60e7ff2708bfaf42$var$convert.rgb.cmyk = function(rgb) {
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
function $60e7ff2708bfaf42$var$comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
$60e7ff2708bfaf42$var$convert.rgb.keyword = function(rgb) {
    const reversed = $60e7ff2708bfaf42$var$reverseKeywords[rgb];
    if (reversed) return reversed;
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys($eHZVp)){
        const value = $eHZVp[keyword];
        // Compute comparative distance
        const distance = $60e7ff2708bfaf42$var$comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
$60e7ff2708bfaf42$var$convert.keyword.rgb = function(keyword) {
    return $eHZVp[keyword];
};
$60e7ff2708bfaf42$var$convert.rgb.xyz = function(rgb) {
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
$60e7ff2708bfaf42$var$convert.rgb.lab = function(rgb) {
    const xyz = $60e7ff2708bfaf42$var$convert.rgb.xyz(rgb);
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
$60e7ff2708bfaf42$var$convert.hsl.rgb = function(hsl) {
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
$60e7ff2708bfaf42$var$convert.hsl.hsv = function(hsl) {
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
$60e7ff2708bfaf42$var$convert.hsv.rgb = function(hsv) {
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
$60e7ff2708bfaf42$var$convert.hsv.hsl = function(hsv) {
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
$60e7ff2708bfaf42$var$convert.hwb.rgb = function(hwb) {
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
$60e7ff2708bfaf42$var$convert.cmyk.rgb = function(cmyk) {
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
$60e7ff2708bfaf42$var$convert.xyz.rgb = function(xyz) {
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
$60e7ff2708bfaf42$var$convert.xyz.lab = function(xyz) {
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
$60e7ff2708bfaf42$var$convert.lab.xyz = function(lab) {
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
$60e7ff2708bfaf42$var$convert.lab.lch = function(lab) {
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
$60e7ff2708bfaf42$var$convert.lch.lab = function(lch) {
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
$60e7ff2708bfaf42$var$convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? $60e7ff2708bfaf42$var$convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) return 30;
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) ansi += 60;
    return ansi;
};
$60e7ff2708bfaf42$var$convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return $60e7ff2708bfaf42$var$convert.rgb.ansi16($60e7ff2708bfaf42$var$convert.hsv.rgb(args), args[2]);
};
$60e7ff2708bfaf42$var$convert.rgb.ansi256 = function(args) {
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
$60e7ff2708bfaf42$var$convert.ansi16.rgb = function(args) {
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
$60e7ff2708bfaf42$var$convert.ansi256.rgb = function(args) {
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
$60e7ff2708bfaf42$var$convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
$60e7ff2708bfaf42$var$convert.hex.rgb = function(args) {
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
$60e7ff2708bfaf42$var$convert.rgb.hcg = function(rgb) {
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
$60e7ff2708bfaf42$var$convert.hsl.hcg = function(hsl) {
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
$60e7ff2708bfaf42$var$convert.hsv.hcg = function(hsv) {
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
$60e7ff2708bfaf42$var$convert.hcg.rgb = function(hcg) {
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
$60e7ff2708bfaf42$var$convert.hcg.hsv = function(hcg) {
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
$60e7ff2708bfaf42$var$convert.hcg.hsl = function(hcg) {
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
$60e7ff2708bfaf42$var$convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
$60e7ff2708bfaf42$var$convert.hwb.hcg = function(hwb) {
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
$60e7ff2708bfaf42$var$convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
$60e7ff2708bfaf42$var$convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
$60e7ff2708bfaf42$var$convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
$60e7ff2708bfaf42$var$convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
$60e7ff2708bfaf42$var$convert.gray.hsv = $60e7ff2708bfaf42$var$convert.gray.hsl;
$60e7ff2708bfaf42$var$convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
$60e7ff2708bfaf42$var$convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
$60e7ff2708bfaf42$var$convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
$60e7ff2708bfaf42$var$convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
$60e7ff2708bfaf42$var$convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};

});
parcelRequire.register("eHZVp", function(module, exports) {
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


parcelRequire.register("jc8qk", function(module, exports) {

var $8jPr5 = parcelRequire("8jPr5");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function $df95ac10e327bde8$var$buildGraph() {
    const graph = {
    };
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys($8jPr5);
    for(let len = models.length, i = 0; i < len; i++)graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
    };
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function $df95ac10e327bde8$var$deriveBFS(fromModel) {
    const graph = $df95ac10e327bde8$var$buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys($8jPr5[current]);
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
function $df95ac10e327bde8$var$link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function $df95ac10e327bde8$var$wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = $8jPr5[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = $df95ac10e327bde8$var$link($8jPr5[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = $df95ac10e327bde8$var$deriveBFS(fromModel);
    const conversion = {
    };
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) continue;
        conversion[toModel] = $df95ac10e327bde8$var$wrapConversion(toModel, graph);
    }
    return conversion;
};

});




var $3aJ9y = parcelRequire("3aJ9y");
var $7414f335407bcd98$exports = {};
'use strict';
$7414f335407bcd98$exports = {
    stdout: false,
    stderr: false
};


var $7e7a99ef2255b980$require$stdoutColor = $7414f335407bcd98$exports.stdout;
var $7e7a99ef2255b980$require$stderrColor = $7414f335407bcd98$exports.stderr;
var $7092a0255343b526$exports = {};
'use strict';
const $7092a0255343b526$var$stringReplaceAll = (string, substring, replacer)=>{
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
const $7092a0255343b526$var$stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index)=>{
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
$7092a0255343b526$exports = {
    stringReplaceAll: $7092a0255343b526$var$stringReplaceAll,
    stringEncaseCRLFWithFirstIndex: $7092a0255343b526$var$stringEncaseCRLFWithFirstIndex
};


var $7e7a99ef2255b980$require$stringReplaceAll = $7092a0255343b526$exports.stringReplaceAll;
var $7e7a99ef2255b980$require$stringEncaseCRLFWithFirstIndex = $7092a0255343b526$exports.stringEncaseCRLFWithFirstIndex;
const { isArray: $7e7a99ef2255b980$var$isArray  } = Array;
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $7e7a99ef2255b980$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $7e7a99ef2255b980$var$styles = Object.create(null);
const $7e7a99ef2255b980$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $7e7a99ef2255b980$require$stdoutColor ? $7e7a99ef2255b980$require$stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $7e7a99ef2255b980$var$ChalkClass {
    constructor(options1){
        // eslint-disable-next-line no-constructor-return
        return $7e7a99ef2255b980$var$chalkFactory(options1);
    }
}
const $7e7a99ef2255b980$var$chalkFactory = (options)=>{
    const chalk = {
    };
    $7e7a99ef2255b980$var$applyOptions(chalk, options);
    chalk.template = (...arguments_)=>$7e7a99ef2255b980$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $7e7a99ef2255b980$var$Chalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.constructor = ()=>{
        throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
    };
    chalk.template.Instance = $7e7a99ef2255b980$var$ChalkClass;
    return chalk.template;
};
function $7e7a99ef2255b980$var$Chalk(options) {
    return $7e7a99ef2255b980$var$chalkFactory(options);
}
for (const [styleName, style] of Object.entries($3aJ9y))$7e7a99ef2255b980$var$styles[styleName] = {
    get () {
        const builder = $7e7a99ef2255b980$var$createBuilder(this, $7e7a99ef2255b980$var$createStyler(style.open, style.close, this._styler), this._isEmpty);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$7e7a99ef2255b980$var$styles.visible = {
    get () {
        const builder = $7e7a99ef2255b980$var$createBuilder(this, this._styler, true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $7e7a99ef2255b980$var$usedModels = [
    'rgb',
    'hex',
    'keyword',
    'hsl',
    'hsv',
    'hwb',
    'ansi',
    'ansi256'
];
for (const model of $7e7a99ef2255b980$var$usedModels)$7e7a99ef2255b980$var$styles[model] = {
    get () {
        const { level: level  } = this;
        return function(...arguments_) {
            const styler = $7e7a99ef2255b980$var$createStyler($3aJ9y.color[$7e7a99ef2255b980$var$levelMapping[level]][model](...arguments_), $3aJ9y.color.close, this._styler);
            return $7e7a99ef2255b980$var$createBuilder(this, styler, this._isEmpty);
        };
    }
};
for (const model1 of $7e7a99ef2255b980$var$usedModels){
    const bgModel = 'bg' + model1[0].toUpperCase() + model1.slice(1);
    $7e7a99ef2255b980$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $7e7a99ef2255b980$var$createStyler($3aJ9y.bgColor[$7e7a99ef2255b980$var$levelMapping[level]][model1](...arguments_), $3aJ9y.bgColor.close, this._styler);
                return $7e7a99ef2255b980$var$createBuilder(this, styler, this._isEmpty);
            };
        }
    };
}
const $7e7a99ef2255b980$var$proto = Object.defineProperties(()=>{
}, {
    ...$7e7a99ef2255b980$var$styles,
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
const $7e7a99ef2255b980$var$createStyler = (open, close, parent)=>{
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
const $7e7a99ef2255b980$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($7e7a99ef2255b980$var$isArray(arguments_[0]) && $7e7a99ef2255b980$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $7e7a99ef2255b980$var$applyStyle(builder, $7e7a99ef2255b980$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $7e7a99ef2255b980$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $7e7a99ef2255b980$var$proto);
    builder._generator = self;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
};
const $7e7a99ef2255b980$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self._isEmpty ? '' : string;
    let styler = self._styler;
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.indexOf('\u001B') !== -1) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $7e7a99ef2255b980$require$stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $7e7a99ef2255b980$require$stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
let $7e7a99ef2255b980$var$template;
parcelRequire.register("6Fg3G", function(module, exports) {
'use strict';
const $4da3074cf060f090$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $4da3074cf060f090$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $4da3074cf060f090$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $4da3074cf060f090$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $4da3074cf060f090$var$ESCAPES = new Map([
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
function $4da3074cf060f090$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    return $4da3074cf060f090$var$ESCAPES.get(c) || c;
}
function $4da3074cf060f090$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($4da3074cf060f090$var$STRING_REGEX)) results.push(matches[2].replace($4da3074cf060f090$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $4da3074cf060f090$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $4da3074cf060f090$var$parseStyle(style) {
    $4da3074cf060f090$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $4da3074cf060f090$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $4da3074cf060f090$var$parseArguments(name, matches[2]);
            results.push([
                name
            ].concat(args));
        } else results.push([
            name
        ]);
    }
    return results;
}
function $4da3074cf060f090$var$buildStyle(chalk, styles) {
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
    temporary.replace($4da3074cf060f090$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($4da3074cf060f090$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $4da3074cf060f090$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $4da3074cf060f090$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($4da3074cf060f090$var$buildStyle(chalk, styles)(chunk.join('')));
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


const $7e7a99ef2255b980$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$7e7a99ef2255b980$var$isArray(firstString) || !$7e7a99ef2255b980$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    if ($7e7a99ef2255b980$var$template === undefined) $7e7a99ef2255b980$var$template = (parcelRequire("6Fg3G"));
    return $7e7a99ef2255b980$var$template(chalk, parts.join(''));
};
Object.defineProperties($7e7a99ef2255b980$var$Chalk.prototype, $7e7a99ef2255b980$var$styles);
const $7e7a99ef2255b980$var$chalk = $7e7a99ef2255b980$var$Chalk(); // eslint-disable-line new-cap
$7e7a99ef2255b980$var$chalk.supportsColor = $7e7a99ef2255b980$require$stdoutColor;
$7e7a99ef2255b980$var$chalk.stderr = $7e7a99ef2255b980$var$Chalk({
    level: $7e7a99ef2255b980$require$stderrColor ? $7e7a99ef2255b980$require$stderrColor.level : 0
}); // eslint-disable-line new-cap
$7e7a99ef2255b980$var$chalk.stderr.supportsColor = $7e7a99ef2255b980$require$stderrColor;
$7e7a99ef2255b980$exports = $7e7a99ef2255b980$var$chalk;


const $2010dab071e0cfa0$var$ANSI_BACKGROUND_OFFSET = 10;
const $2010dab071e0cfa0$var$wrapAnsi16 = (offset = 0)=>(code)=>`\u001B[${code + offset}m`
;
const $2010dab071e0cfa0$var$wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`
;
const $2010dab071e0cfa0$var$wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`
;
function $2010dab071e0cfa0$var$assembleStyles() {
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
    styles.color.ansi = $2010dab071e0cfa0$var$wrapAnsi16();
    styles.color.ansi256 = $2010dab071e0cfa0$var$wrapAnsi256();
    styles.color.ansi16m = $2010dab071e0cfa0$var$wrapAnsi16m();
    styles.bgColor.ansi = $2010dab071e0cfa0$var$wrapAnsi16($2010dab071e0cfa0$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = $2010dab071e0cfa0$var$wrapAnsi256($2010dab071e0cfa0$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = $2010dab071e0cfa0$var$wrapAnsi16m($2010dab071e0cfa0$var$ANSI_BACKGROUND_OFFSET);
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
const $2010dab071e0cfa0$var$ansiStyles = $2010dab071e0cfa0$var$assembleStyles();
var $2010dab071e0cfa0$export$2e2bcd8739ae039 = $2010dab071e0cfa0$var$ansiStyles;


let $91e28553b6f62951$var$args = [];
parcelRequire.register("4cYrz", function(module, exports) {
// shim for using process in browser
var $31072b48e9a06a1f$var$process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $31072b48e9a06a1f$var$cachedSetTimeout;
var $31072b48e9a06a1f$var$cachedClearTimeout;
function $31072b48e9a06a1f$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $31072b48e9a06a1f$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $31072b48e9a06a1f$var$cachedSetTimeout = setTimeout;
        else $31072b48e9a06a1f$var$cachedSetTimeout = $31072b48e9a06a1f$var$defaultSetTimout;
    } catch (e) {
        $31072b48e9a06a1f$var$cachedSetTimeout = $31072b48e9a06a1f$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $31072b48e9a06a1f$var$cachedClearTimeout = clearTimeout;
        else $31072b48e9a06a1f$var$cachedClearTimeout = $31072b48e9a06a1f$var$defaultClearTimeout;
    } catch (e1) {
        $31072b48e9a06a1f$var$cachedClearTimeout = $31072b48e9a06a1f$var$defaultClearTimeout;
    }
})();
function $31072b48e9a06a1f$var$runTimeout(fun) {
    if ($31072b48e9a06a1f$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($31072b48e9a06a1f$var$cachedSetTimeout === $31072b48e9a06a1f$var$defaultSetTimout || !$31072b48e9a06a1f$var$cachedSetTimeout) && setTimeout) {
        $31072b48e9a06a1f$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $31072b48e9a06a1f$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $31072b48e9a06a1f$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $31072b48e9a06a1f$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $31072b48e9a06a1f$var$runClearTimeout(marker) {
    if ($31072b48e9a06a1f$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($31072b48e9a06a1f$var$cachedClearTimeout === $31072b48e9a06a1f$var$defaultClearTimeout || !$31072b48e9a06a1f$var$cachedClearTimeout) && clearTimeout) {
        $31072b48e9a06a1f$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $31072b48e9a06a1f$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $31072b48e9a06a1f$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $31072b48e9a06a1f$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $31072b48e9a06a1f$var$queue = [];
var $31072b48e9a06a1f$var$draining = false;
var $31072b48e9a06a1f$var$currentQueue;
var $31072b48e9a06a1f$var$queueIndex = -1;
function $31072b48e9a06a1f$var$cleanUpNextTick() {
    if (!$31072b48e9a06a1f$var$draining || !$31072b48e9a06a1f$var$currentQueue) return;
    $31072b48e9a06a1f$var$draining = false;
    if ($31072b48e9a06a1f$var$currentQueue.length) $31072b48e9a06a1f$var$queue = $31072b48e9a06a1f$var$currentQueue.concat($31072b48e9a06a1f$var$queue);
    else $31072b48e9a06a1f$var$queueIndex = -1;
    if ($31072b48e9a06a1f$var$queue.length) $31072b48e9a06a1f$var$drainQueue();
}
function $31072b48e9a06a1f$var$drainQueue() {
    if ($31072b48e9a06a1f$var$draining) return;
    var timeout = $31072b48e9a06a1f$var$runTimeout($31072b48e9a06a1f$var$cleanUpNextTick);
    $31072b48e9a06a1f$var$draining = true;
    var len = $31072b48e9a06a1f$var$queue.length;
    while(len){
        $31072b48e9a06a1f$var$currentQueue = $31072b48e9a06a1f$var$queue;
        $31072b48e9a06a1f$var$queue = [];
        while(++$31072b48e9a06a1f$var$queueIndex < len)if ($31072b48e9a06a1f$var$currentQueue) $31072b48e9a06a1f$var$currentQueue[$31072b48e9a06a1f$var$queueIndex].run();
        $31072b48e9a06a1f$var$queueIndex = -1;
        len = $31072b48e9a06a1f$var$queue.length;
    }
    $31072b48e9a06a1f$var$currentQueue = null;
    $31072b48e9a06a1f$var$draining = false;
    $31072b48e9a06a1f$var$runClearTimeout(timeout);
}
$31072b48e9a06a1f$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $31072b48e9a06a1f$var$queue.push(new $31072b48e9a06a1f$var$Item(fun, args));
    if ($31072b48e9a06a1f$var$queue.length === 1 && !$31072b48e9a06a1f$var$draining) $31072b48e9a06a1f$var$runTimeout($31072b48e9a06a1f$var$drainQueue);
};
// v8 likes predictible objects
function $31072b48e9a06a1f$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$31072b48e9a06a1f$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$31072b48e9a06a1f$var$process.title = 'browser';
$31072b48e9a06a1f$var$process.browser = true;
$31072b48e9a06a1f$var$process.env = {
};
$31072b48e9a06a1f$var$process.argv = [];
$31072b48e9a06a1f$var$process.version = ''; // empty string to avoid regexp issues
$31072b48e9a06a1f$var$process.versions = {
};
function $31072b48e9a06a1f$var$noop() {
}
$31072b48e9a06a1f$var$process.on = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.addListener = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.once = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.off = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.removeListener = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.removeAllListeners = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.emit = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.prependListener = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.prependOnceListener = $31072b48e9a06a1f$var$noop;
$31072b48e9a06a1f$var$process.listeners = function(name) {
    return [];
};
$31072b48e9a06a1f$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$31072b48e9a06a1f$var$process.cwd = function() {
    return '/';
};
$31072b48e9a06a1f$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$31072b48e9a06a1f$var$process.umask = function() {
    return 0;
};

});


try {
    $91e28553b6f62951$var$args = Deno.args;
} catch (error) {
    try {
        const [_1, _2, ...argvs] = (parcelRequire("4cYrz")).argv;
        $91e28553b6f62951$var$args = argvs;
    } catch (error) {
    }
}
function $91e28553b6f62951$export$2e2bcd8739ae039(flag, argv = $91e28553b6f62951$var$args) {
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}


parcelRequire.register("h5iGV", function(module, exports) {

$parcel$export(module.exports, "isatty", () => $c701670612364e19$export$9b473d35051e2626, (v) => $c701670612364e19$export$9b473d35051e2626 = v);
$parcel$export(module.exports, "ReadStream", () => $c701670612364e19$export$de64a30e4ee40519, (v) => $c701670612364e19$export$de64a30e4ee40519 = v);
$parcel$export(module.exports, "WriteStream", () => $c701670612364e19$export$b6b358f069d459a3, (v) => $c701670612364e19$export$b6b358f069d459a3 = v);
var $c701670612364e19$export$9b473d35051e2626;
var $c701670612364e19$export$de64a30e4ee40519;
var $c701670612364e19$export$b6b358f069d459a3;
$c701670612364e19$export$9b473d35051e2626 = function() {
    return false;
};
function $c701670612364e19$var$ReadStream() {
    throw new Error('tty.ReadStream is not implemented');
}
$c701670612364e19$export$de64a30e4ee40519 = $c701670612364e19$var$ReadStream;
function $c701670612364e19$var$WriteStream() {
    throw new Error('tty.WriteStream is not implemented');
}
$c701670612364e19$export$b6b358f069d459a3 = $c701670612364e19$var$WriteStream;

});


function $ddd3502303dad6de$var$isatty(fd) {
    if (typeof fd !== "number") return false;
    try {
        return Deno.isatty(fd);
    } catch (_) {
        // if deno failed, try node
        try {
            var tty = (parcelRequire("h5iGV"));
            return tty.isatty(fd);
        } catch (error) {
        }
        return false;
    }
}
let $ddd3502303dad6de$var$env = {
};

try {
    $ddd3502303dad6de$var$env = Deno.env.toObject();
} catch (error) {
    try {
        $ddd3502303dad6de$var$env = (parcelRequire("4cYrz")).env;
    } catch (error) {
    }
}
let $ddd3502303dad6de$var$flagForceColor;
if ($91e28553b6f62951$export$2e2bcd8739ae039("no-color") || $91e28553b6f62951$export$2e2bcd8739ae039("no-colors") || $91e28553b6f62951$export$2e2bcd8739ae039("color=false") || $91e28553b6f62951$export$2e2bcd8739ae039("color=never")) $ddd3502303dad6de$var$flagForceColor = 0;
else if ($91e28553b6f62951$export$2e2bcd8739ae039("color") || $91e28553b6f62951$export$2e2bcd8739ae039("colors") || $91e28553b6f62951$export$2e2bcd8739ae039("color=true") || $91e28553b6f62951$export$2e2bcd8739ae039("color=always")) $ddd3502303dad6de$var$flagForceColor = 1;
function $ddd3502303dad6de$var$envForceColor() {
    if ("FORCE_COLOR" in $ddd3502303dad6de$var$env) {
        if ($ddd3502303dad6de$var$env.FORCE_COLOR === "true") return 1;
        if ($ddd3502303dad6de$var$env.FORCE_COLOR === "false") return 0;
        return $ddd3502303dad6de$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt($ddd3502303dad6de$var$env.FORCE_COLOR, 10), 3);
    }
}
function $ddd3502303dad6de$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}

function $ddd3502303dad6de$var$_supportsColor(haveStream, { streamIsTTY: streamIsTTY , sniffFlags: sniffFlags = true  } = {
}) {
    const noFlagForceColor = $ddd3502303dad6de$var$envForceColor();
    if (noFlagForceColor !== undefined) $ddd3502303dad6de$var$flagForceColor = noFlagForceColor;
    const forceColor = sniffFlags ? $ddd3502303dad6de$var$flagForceColor : noFlagForceColor;
    if (forceColor === 0) return 0;
    if (sniffFlags) {
        if ($91e28553b6f62951$export$2e2bcd8739ae039("color=16m") || $91e28553b6f62951$export$2e2bcd8739ae039("color=full") || $91e28553b6f62951$export$2e2bcd8739ae039("color=truecolor")) return 3;
        if ($91e28553b6f62951$export$2e2bcd8739ae039("color=256")) return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) return 0;
    const min = forceColor || 0;
    if ($ddd3502303dad6de$var$env.TERM === "dumb") return min;
    let os;
    try {
        os = Deno.build.os;
    } catch (error) {
        try {
            os = (parcelRequire("4cYrz")).platform;
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
    if ("CI" in $ddd3502303dad6de$var$env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE",
            "DRONE", 
        ].some((sign)=>sign in $ddd3502303dad6de$var$env
        ) || $ddd3502303dad6de$var$env.CI_NAME === "codeship") return 1;
        return min;
    }
    if ("TEAMCITY_VERSION" in $ddd3502303dad6de$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($ddd3502303dad6de$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($ddd3502303dad6de$var$env.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in $ddd3502303dad6de$var$env) {
        const version = Number.parseInt(($ddd3502303dad6de$var$env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch($ddd3502303dad6de$var$env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test($ddd3502303dad6de$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($ddd3502303dad6de$var$env.TERM)) return 1;
    if ("COLORTERM" in $ddd3502303dad6de$var$env) return 1;
    return min;
}
function $ddd3502303dad6de$export$6f279ba00f1459de(stream, options = {
}) {
    const level = $ddd3502303dad6de$var$_supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options
    });
    return $ddd3502303dad6de$var$translateLevel(level);
}
const $ddd3502303dad6de$var$supportsColor = {
    stdout: $ddd3502303dad6de$export$6f279ba00f1459de({
        isTTY: $ddd3502303dad6de$var$isatty(1)
    }),
    stderr: $ddd3502303dad6de$export$6f279ba00f1459de({
        isTTY: $ddd3502303dad6de$var$isatty(2)
    })
};
var $ddd3502303dad6de$export$2e2bcd8739ae039 = $ddd3502303dad6de$var$supportsColor;


function $2fc9955a13feadc7$export$9300dfb554c6c407(string, substring, replacer) {
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
function $2fc9955a13feadc7$export$ecabf4aff2e9764(string, prefix, postfix, index) {
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


const $0b1ac7e9aaf40a4e$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $0b1ac7e9aaf40a4e$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $0b1ac7e9aaf40a4e$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $0b1ac7e9aaf40a4e$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $0b1ac7e9aaf40a4e$var$ESCAPES = new Map([
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
function $0b1ac7e9aaf40a4e$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(Number.parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(Number.parseInt(c.slice(2, -1), 16));
    return $0b1ac7e9aaf40a4e$var$ESCAPES.get(c) || c;
}
function $0b1ac7e9aaf40a4e$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($0b1ac7e9aaf40a4e$var$STRING_REGEX)) results.push(matches[2].replace($0b1ac7e9aaf40a4e$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $0b1ac7e9aaf40a4e$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $0b1ac7e9aaf40a4e$var$parseStyle(style) {
    $0b1ac7e9aaf40a4e$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $0b1ac7e9aaf40a4e$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $0b1ac7e9aaf40a4e$var$parseArguments(name, matches[2]);
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
function $0b1ac7e9aaf40a4e$var$buildStyle(chalk, styles) {
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
function $0b1ac7e9aaf40a4e$export$2e2bcd8739ae039(chalk, temporary) {
    const styles = [];
    const chunks = [];
    let chunk = [];
    // eslint-disable-next-line max-params
    temporary.replace($0b1ac7e9aaf40a4e$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($0b1ac7e9aaf40a4e$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $0b1ac7e9aaf40a4e$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $0b1ac7e9aaf40a4e$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($0b1ac7e9aaf40a4e$var$buildStyle(chalk, styles)(chunk.join('')));
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


const { stdout: $22d59f45aa7c47f0$export$fcbe44f5d6fcebd , stderr: $22d59f45aa7c47f0$export$8107055a758cd2bd  } = $ddd3502303dad6de$export$2e2bcd8739ae039;
const { isArray: $22d59f45aa7c47f0$var$isArray  } = Array;
const $22d59f45aa7c47f0$var$GENERATOR = Symbol('GENERATOR');
const $22d59f45aa7c47f0$var$STYLER = Symbol('STYLER');
const $22d59f45aa7c47f0$var$IS_EMPTY = Symbol('IS_EMPTY');
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $22d59f45aa7c47f0$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $22d59f45aa7c47f0$var$styles = Object.create(null);
const $22d59f45aa7c47f0$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $22d59f45aa7c47f0$export$fcbe44f5d6fcebd ? $22d59f45aa7c47f0$export$fcbe44f5d6fcebd.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $22d59f45aa7c47f0$export$79544b80b91c2197 {
    constructor(options1){
        // eslint-disable-next-line no-constructor-return
        return $22d59f45aa7c47f0$var$chalkFactory(options1);
    }
}
const $22d59f45aa7c47f0$var$chalkFactory = (options)=>{
    const chalk = {
    };
    $22d59f45aa7c47f0$var$applyOptions(chalk, options);
    chalk.template = (...arguments_)=>$22d59f45aa7c47f0$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $22d59f45aa7c47f0$var$createChalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.Chalk = $22d59f45aa7c47f0$export$79544b80b91c2197;
    return chalk.template;
};
function $22d59f45aa7c47f0$var$createChalk(options) {
    return $22d59f45aa7c47f0$var$chalkFactory(options);
}
Object.setPrototypeOf($22d59f45aa7c47f0$var$createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries($2010dab071e0cfa0$export$2e2bcd8739ae039))$22d59f45aa7c47f0$var$styles[styleName] = {
    get () {
        const builder = $22d59f45aa7c47f0$var$createBuilder(this, $22d59f45aa7c47f0$var$createStyler(style.open, style.close, this[$22d59f45aa7c47f0$var$STYLER]), this[$22d59f45aa7c47f0$var$IS_EMPTY]);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$22d59f45aa7c47f0$var$styles.visible = {
    get () {
        const builder = $22d59f45aa7c47f0$var$createBuilder(this, this[$22d59f45aa7c47f0$var$STYLER], true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $22d59f45aa7c47f0$var$getModelAnsi = (model, level, type, ...arguments_)=>{
    if (model === 'rgb') {
        if (level === 'ansi16m') return $2010dab071e0cfa0$export$2e2bcd8739ae039[type].ansi16m(...arguments_);
        if (level === 'ansi256') return $2010dab071e0cfa0$export$2e2bcd8739ae039[type].ansi256($2010dab071e0cfa0$export$2e2bcd8739ae039.rgbToAnsi256(...arguments_));
        return $2010dab071e0cfa0$export$2e2bcd8739ae039[type].ansi($2010dab071e0cfa0$export$2e2bcd8739ae039.rgbToAnsi(...arguments_));
    }
    if (model === 'hex') return $22d59f45aa7c47f0$var$getModelAnsi('rgb', level, type, ...$2010dab071e0cfa0$export$2e2bcd8739ae039.hexToRgb(...arguments_));
    return $2010dab071e0cfa0$export$2e2bcd8739ae039[type][model](...arguments_);
};
const $22d59f45aa7c47f0$var$usedModels = [
    'rgb',
    'hex',
    'ansi256'
];
for (const model1 of $22d59f45aa7c47f0$var$usedModels){
    $22d59f45aa7c47f0$var$styles[model1] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $22d59f45aa7c47f0$var$createStyler($22d59f45aa7c47f0$var$getModelAnsi(model1, $22d59f45aa7c47f0$var$levelMapping[level], 'color', ...arguments_), $2010dab071e0cfa0$export$2e2bcd8739ae039.color.close, this[$22d59f45aa7c47f0$var$STYLER]);
                return $22d59f45aa7c47f0$var$createBuilder(this, styler, this[$22d59f45aa7c47f0$var$IS_EMPTY]);
            };
        }
    };
    const bgModel = 'bg' + model1[0].toUpperCase() + model1.slice(1);
    $22d59f45aa7c47f0$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $22d59f45aa7c47f0$var$createStyler($22d59f45aa7c47f0$var$getModelAnsi(model1, $22d59f45aa7c47f0$var$levelMapping[level], 'bgColor', ...arguments_), $2010dab071e0cfa0$export$2e2bcd8739ae039.bgColor.close, this[$22d59f45aa7c47f0$var$STYLER]);
                return $22d59f45aa7c47f0$var$createBuilder(this, styler, this[$22d59f45aa7c47f0$var$IS_EMPTY]);
            };
        }
    };
}
const $22d59f45aa7c47f0$var$proto = Object.defineProperties(()=>{
}, {
    ...$22d59f45aa7c47f0$var$styles,
    level: {
        enumerable: true,
        get () {
            return this[$22d59f45aa7c47f0$var$GENERATOR].level;
        },
        set (level) {
            this[$22d59f45aa7c47f0$var$GENERATOR].level = level;
        }
    }
});
const $22d59f45aa7c47f0$var$createStyler = (open, close, parent)=>{
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
const $22d59f45aa7c47f0$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($22d59f45aa7c47f0$var$isArray(arguments_[0]) && $22d59f45aa7c47f0$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $22d59f45aa7c47f0$var$applyStyle(builder, $22d59f45aa7c47f0$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $22d59f45aa7c47f0$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $22d59f45aa7c47f0$var$proto);
    builder[$22d59f45aa7c47f0$var$GENERATOR] = self;
    builder[$22d59f45aa7c47f0$var$STYLER] = _styler;
    builder[$22d59f45aa7c47f0$var$IS_EMPTY] = _isEmpty;
    return builder;
};
const $22d59f45aa7c47f0$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self[$22d59f45aa7c47f0$var$IS_EMPTY] ? '' : string;
    let styler = self[$22d59f45aa7c47f0$var$STYLER];
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.includes('\u001B')) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $2fc9955a13feadc7$export$9300dfb554c6c407(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $2fc9955a13feadc7$export$ecabf4aff2e9764(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
const $22d59f45aa7c47f0$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$22d59f45aa7c47f0$var$isArray(firstString) || !$22d59f45aa7c47f0$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    return $0b1ac7e9aaf40a4e$export$2e2bcd8739ae039(chalk, parts.join(''));
};
Object.defineProperties($22d59f45aa7c47f0$var$createChalk.prototype, $22d59f45aa7c47f0$var$styles);
const $22d59f45aa7c47f0$var$chalk = $22d59f45aa7c47f0$var$createChalk();
const $22d59f45aa7c47f0$export$8cef8185e551afa5 = $22d59f45aa7c47f0$var$createChalk({
    level: $22d59f45aa7c47f0$export$8107055a758cd2bd ? $22d59f45aa7c47f0$export$8107055a758cd2bd.level : 0
});
var $22d59f45aa7c47f0$export$2e2bcd8739ae039 = $22d59f45aa7c47f0$var$chalk;


var $11c045df1a5b205b$require$es6Chalk = $22d59f45aa7c47f0$export$2e2bcd8739ae039;
// because Parcel.js 2 is jank-AF (normally eval wouldn't be needed, and normally I wouldn't have to use globalThis to get it)
const $11c045df1a5b205b$var$isNode = globalThis["eval"]("typeof module === 'object' && module instanceof Object && module.exports instanceof Object");
const $11c045df1a5b205b$var$chalk = $11c045df1a5b205b$var$isNode ? $7e7a99ef2255b980$exports : $11c045df1a5b205b$require$es6Chalk;
const $11c045df1a5b205b$var$realConsole = globalThis.console;
const $11c045df1a5b205b$var$isBrowserContext = typeof document != 'undefined' && typeof window != 'undefined';
// patch the built in console to allow classes to override output
const $11c045df1a5b205b$var$originalThing = $11c045df1a5b205b$var$realConsole;
const $11c045df1a5b205b$var$proxySymbol = Symbol.for('Proxy');
const $11c045df1a5b205b$var$thisProxySymbol = Symbol('thisProxy');
const $11c045df1a5b205b$var$symbolForConsoleLog = Symbol.for("console.log");
globalThis.console = new Proxy($11c045df1a5b205b$var$originalThing, {
    defineProperty: Reflect.defineProperty,
    getPrototypeOf: Reflect.getPrototypeOf,
    // Object.keys
    ownKeys (...args) {
        return Reflect.ownKeys(...args);
    },
    // function call (original value needs to be a function)
    apply (original, context, ...args) {
        $11c045df1a5b205b$var$console.log(args);
    },
    // new operator (original value needs to be a class)
    construct (...args) {
    },
    get (original, key, ...args1) {
        if (key == $11c045df1a5b205b$var$proxySymbol || key == $11c045df1a5b205b$var$thisProxySymbol) return true;
        // if logging, then 
        if (key == "log") return (...args)=>{
            $11c045df1a5b205b$var$realConsole.log(...args.map((each)=>{
                if (each instanceof Object && each[$11c045df1a5b205b$var$symbolForConsoleLog] instanceof Function) return each[$11c045df1a5b205b$var$symbolForConsoleLog]();
                return each;
            }));
        };
        return Reflect.get(original, key, ...args1);
    },
    set (original, key, ...args) {
        if (key == $11c045df1a5b205b$var$proxySymbol || key == $11c045df1a5b205b$var$thisProxySymbol) return;
        return Reflect.set(original, key, ...args);
    }
});
var $6b43bec9714ecd1e$exports = {};

var $4cYrz = parcelRequire("4cYrz");
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
var $6b43bec9714ecd1e$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {
    };
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $6b43bec9714ecd1e$var$formatRegExp = /%[sdj%]/g;
$6b43bec9714ecd1e$exports.format = function(f) {
    if (!$6b43bec9714ecd1e$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($6b43bec9714ecd1e$var$inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($6b43bec9714ecd1e$var$formatRegExp, function(x) {
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
    for(var x1 = args[i]; i < len; x1 = args[++i])if ($6b43bec9714ecd1e$var$isNull(x1) || !$6b43bec9714ecd1e$var$isObject(x1)) str += ' ' + x1;
    else str += ' ' + $6b43bec9714ecd1e$var$inspect(x1);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
$6b43bec9714ecd1e$exports.deprecate = function(fn, msg) {
    if (typeof $4cYrz !== 'undefined' && $4cYrz.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof $4cYrz === 'undefined') return function() {
        return $6b43bec9714ecd1e$exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if ($4cYrz.throwDeprecation) throw new Error(msg);
            else if ($4cYrz.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var $6b43bec9714ecd1e$var$debugs = {
};
var $6b43bec9714ecd1e$var$debugEnvRegex = /^$/;
var $6b43bec9714ecd1e$var$debugEnv;
$6b43bec9714ecd1e$exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$6b43bec9714ecd1e$var$debugs[set]) {
        if ($6b43bec9714ecd1e$var$debugEnvRegex.test(set)) {
            var pid = $4cYrz.pid;
            $6b43bec9714ecd1e$var$debugs[set] = function() {
                var msg = $6b43bec9714ecd1e$exports.format.apply($6b43bec9714ecd1e$exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else $6b43bec9714ecd1e$var$debugs[set] = function() {
        };
    }
    return $6b43bec9714ecd1e$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $6b43bec9714ecd1e$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $6b43bec9714ecd1e$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($6b43bec9714ecd1e$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    $6b43bec9714ecd1e$exports._extend(ctx, opts);
    // set default options
    if ($6b43bec9714ecd1e$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($6b43bec9714ecd1e$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($6b43bec9714ecd1e$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($6b43bec9714ecd1e$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $6b43bec9714ecd1e$var$stylizeWithColor;
    return $6b43bec9714ecd1e$var$formatValue(ctx, obj, ctx.depth);
}
$6b43bec9714ecd1e$exports.inspect = $6b43bec9714ecd1e$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$6b43bec9714ecd1e$var$inspect.colors = {
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
$6b43bec9714ecd1e$var$inspect.styles = {
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
function $6b43bec9714ecd1e$var$stylizeWithColor(str, styleType) {
    var style = $6b43bec9714ecd1e$var$inspect.styles[styleType];
    if (style) return '\u001b[' + $6b43bec9714ecd1e$var$inspect.colors[style][0] + 'm' + str + '\u001b[' + $6b43bec9714ecd1e$var$inspect.colors[style][1] + 'm';
    else return str;
}
function $6b43bec9714ecd1e$var$stylizeNoColor(str, styleType) {
    return str;
}
function $6b43bec9714ecd1e$var$arrayToHash(array) {
    var hash = {
    };
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $6b43bec9714ecd1e$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $6b43bec9714ecd1e$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== $6b43bec9714ecd1e$exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$6b43bec9714ecd1e$var$isString(ret)) ret = $6b43bec9714ecd1e$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $6b43bec9714ecd1e$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $6b43bec9714ecd1e$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($6b43bec9714ecd1e$var$isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return $6b43bec9714ecd1e$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($6b43bec9714ecd1e$var$isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if ($6b43bec9714ecd1e$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if ($6b43bec9714ecd1e$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if ($6b43bec9714ecd1e$var$isError(value)) return $6b43bec9714ecd1e$var$formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if ($6b43bec9714ecd1e$var$isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if ($6b43bec9714ecd1e$var$isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if ($6b43bec9714ecd1e$var$isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($6b43bec9714ecd1e$var$isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($6b43bec9714ecd1e$var$isError(value)) base = ' ' + $6b43bec9714ecd1e$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($6b43bec9714ecd1e$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $6b43bec9714ecd1e$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $6b43bec9714ecd1e$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $6b43bec9714ecd1e$var$reduceToSingleString(output, base, braces);
}
function $6b43bec9714ecd1e$var$formatPrimitive(ctx, value) {
    if ($6b43bec9714ecd1e$var$isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if ($6b43bec9714ecd1e$var$isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if ($6b43bec9714ecd1e$var$isNumber(value)) return ctx.stylize('' + value, 'number');
    if ($6b43bec9714ecd1e$var$isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if ($6b43bec9714ecd1e$var$isNull(value)) return ctx.stylize('null', 'null');
}
function $6b43bec9714ecd1e$var$formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function $6b43bec9714ecd1e$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($6b43bec9714ecd1e$var$hasOwnProperty(value, String(i))) output.push($6b43bec9714ecd1e$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($6b43bec9714ecd1e$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $6b43bec9714ecd1e$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!$6b43bec9714ecd1e$var$hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($6b43bec9714ecd1e$var$isNull(recurseTimes)) str = $6b43bec9714ecd1e$var$formatValue(ctx, desc.value, null);
            else str = $6b43bec9714ecd1e$var$formatValue(ctx, desc.value, recurseTimes - 1);
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
    if ($6b43bec9714ecd1e$var$isUndefined(name)) {
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
function $6b43bec9714ecd1e$var$reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
parcelRequire.register("gUdyo", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';

var $aYNSh = parcelRequire("aYNSh");

var $iUVnI = parcelRequire("iUVnI");

var $7s39a = parcelRequire("7s39a");

var $ju8Yj = parcelRequire("ju8Yj");
function $c4ec63cc77772976$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $c4ec63cc77772976$var$BigIntSupported = typeof BigInt !== 'undefined';
var $c4ec63cc77772976$var$SymbolSupported = typeof Symbol !== 'undefined';
var $c4ec63cc77772976$var$ObjectToString = $c4ec63cc77772976$var$uncurryThis(Object.prototype.toString);
var $c4ec63cc77772976$var$numberValue = $c4ec63cc77772976$var$uncurryThis(Number.prototype.valueOf);
var $c4ec63cc77772976$var$stringValue = $c4ec63cc77772976$var$uncurryThis(String.prototype.valueOf);
var $c4ec63cc77772976$var$booleanValue = $c4ec63cc77772976$var$uncurryThis(Boolean.prototype.valueOf);
if ($c4ec63cc77772976$var$BigIntSupported) var $c4ec63cc77772976$var$bigIntValue = $c4ec63cc77772976$var$uncurryThis(BigInt.prototype.valueOf);
if ($c4ec63cc77772976$var$SymbolSupported) var $c4ec63cc77772976$var$symbolValue = $c4ec63cc77772976$var$uncurryThis(Symbol.prototype.valueOf);
function $c4ec63cc77772976$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $aYNSh;
module.exports.isGeneratorFunction = $iUVnI;
module.exports.isTypedArray = $ju8Yj;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $c4ec63cc77772976$var$isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
module.exports.isPromise = $c4ec63cc77772976$var$isPromise;
function $c4ec63cc77772976$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $ju8Yj(value) || $c4ec63cc77772976$var$isDataView(value);
}
module.exports.isArrayBufferView = $c4ec63cc77772976$var$isArrayBufferView;
function $c4ec63cc77772976$var$isUint8Array(value) {
    return $7s39a(value) === 'Uint8Array';
}
module.exports.isUint8Array = $c4ec63cc77772976$var$isUint8Array;
function $c4ec63cc77772976$var$isUint8ClampedArray(value) {
    return $7s39a(value) === 'Uint8ClampedArray';
}
module.exports.isUint8ClampedArray = $c4ec63cc77772976$var$isUint8ClampedArray;
function $c4ec63cc77772976$var$isUint16Array(value) {
    return $7s39a(value) === 'Uint16Array';
}
module.exports.isUint16Array = $c4ec63cc77772976$var$isUint16Array;
function $c4ec63cc77772976$var$isUint32Array(value) {
    return $7s39a(value) === 'Uint32Array';
}
module.exports.isUint32Array = $c4ec63cc77772976$var$isUint32Array;
function $c4ec63cc77772976$var$isInt8Array(value) {
    return $7s39a(value) === 'Int8Array';
}
module.exports.isInt8Array = $c4ec63cc77772976$var$isInt8Array;
function $c4ec63cc77772976$var$isInt16Array(value) {
    return $7s39a(value) === 'Int16Array';
}
module.exports.isInt16Array = $c4ec63cc77772976$var$isInt16Array;
function $c4ec63cc77772976$var$isInt32Array(value) {
    return $7s39a(value) === 'Int32Array';
}
module.exports.isInt32Array = $c4ec63cc77772976$var$isInt32Array;
function $c4ec63cc77772976$var$isFloat32Array(value) {
    return $7s39a(value) === 'Float32Array';
}
module.exports.isFloat32Array = $c4ec63cc77772976$var$isFloat32Array;
function $c4ec63cc77772976$var$isFloat64Array(value) {
    return $7s39a(value) === 'Float64Array';
}
module.exports.isFloat64Array = $c4ec63cc77772976$var$isFloat64Array;
function $c4ec63cc77772976$var$isBigInt64Array(value) {
    return $7s39a(value) === 'BigInt64Array';
}
module.exports.isBigInt64Array = $c4ec63cc77772976$var$isBigInt64Array;
function $c4ec63cc77772976$var$isBigUint64Array(value) {
    return $7s39a(value) === 'BigUint64Array';
}
module.exports.isBigUint64Array = $c4ec63cc77772976$var$isBigUint64Array;
function $c4ec63cc77772976$var$isMapToString(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object Map]';
}
$c4ec63cc77772976$var$isMapToString.working = typeof Map !== 'undefined' && $c4ec63cc77772976$var$isMapToString(new Map());
function $c4ec63cc77772976$var$isMap(value) {
    if (typeof Map === 'undefined') return false;
    return $c4ec63cc77772976$var$isMapToString.working ? $c4ec63cc77772976$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $c4ec63cc77772976$var$isMap;
function $c4ec63cc77772976$var$isSetToString(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object Set]';
}
$c4ec63cc77772976$var$isSetToString.working = typeof Set !== 'undefined' && $c4ec63cc77772976$var$isSetToString(new Set());
function $c4ec63cc77772976$var$isSet(value) {
    if (typeof Set === 'undefined') return false;
    return $c4ec63cc77772976$var$isSetToString.working ? $c4ec63cc77772976$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $c4ec63cc77772976$var$isSet;
function $c4ec63cc77772976$var$isWeakMapToString(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object WeakMap]';
}
$c4ec63cc77772976$var$isWeakMapToString.working = typeof WeakMap !== 'undefined' && $c4ec63cc77772976$var$isWeakMapToString(new WeakMap());
function $c4ec63cc77772976$var$isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return $c4ec63cc77772976$var$isWeakMapToString.working ? $c4ec63cc77772976$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $c4ec63cc77772976$var$isWeakMap;
function $c4ec63cc77772976$var$isWeakSetToString(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object WeakSet]';
}
$c4ec63cc77772976$var$isWeakSetToString.working = typeof WeakSet !== 'undefined' && $c4ec63cc77772976$var$isWeakSetToString(new WeakSet());
function $c4ec63cc77772976$var$isWeakSet(value) {
    return $c4ec63cc77772976$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $c4ec63cc77772976$var$isWeakSet;
function $c4ec63cc77772976$var$isArrayBufferToString(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object ArrayBuffer]';
}
$c4ec63cc77772976$var$isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && $c4ec63cc77772976$var$isArrayBufferToString(new ArrayBuffer());
function $c4ec63cc77772976$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return $c4ec63cc77772976$var$isArrayBufferToString.working ? $c4ec63cc77772976$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $c4ec63cc77772976$var$isArrayBuffer;
function $c4ec63cc77772976$var$isDataViewToString(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object DataView]';
}
$c4ec63cc77772976$var$isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && $c4ec63cc77772976$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $c4ec63cc77772976$var$isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return $c4ec63cc77772976$var$isDataViewToString.working ? $c4ec63cc77772976$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $c4ec63cc77772976$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $c4ec63cc77772976$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function $c4ec63cc77772976$var$isSharedArrayBufferToString(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object SharedArrayBuffer]';
}
function $c4ec63cc77772976$var$isSharedArrayBuffer(value) {
    if (typeof $c4ec63cc77772976$var$SharedArrayBufferCopy === 'undefined') return false;
    if (typeof $c4ec63cc77772976$var$isSharedArrayBufferToString.working === 'undefined') $c4ec63cc77772976$var$isSharedArrayBufferToString.working = $c4ec63cc77772976$var$isSharedArrayBufferToString(new $c4ec63cc77772976$var$SharedArrayBufferCopy());
    return $c4ec63cc77772976$var$isSharedArrayBufferToString.working ? $c4ec63cc77772976$var$isSharedArrayBufferToString(value) : value instanceof $c4ec63cc77772976$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $c4ec63cc77772976$var$isSharedArrayBuffer;
function $c4ec63cc77772976$var$isAsyncFunction(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object AsyncFunction]';
}
module.exports.isAsyncFunction = $c4ec63cc77772976$var$isAsyncFunction;
function $c4ec63cc77772976$var$isMapIterator(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object Map Iterator]';
}
module.exports.isMapIterator = $c4ec63cc77772976$var$isMapIterator;
function $c4ec63cc77772976$var$isSetIterator(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object Set Iterator]';
}
module.exports.isSetIterator = $c4ec63cc77772976$var$isSetIterator;
function $c4ec63cc77772976$var$isGeneratorObject(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object Generator]';
}
module.exports.isGeneratorObject = $c4ec63cc77772976$var$isGeneratorObject;
function $c4ec63cc77772976$var$isWebAssemblyCompiledModule(value) {
    return $c4ec63cc77772976$var$ObjectToString(value) === '[object WebAssembly.Module]';
}
module.exports.isWebAssemblyCompiledModule = $c4ec63cc77772976$var$isWebAssemblyCompiledModule;
function $c4ec63cc77772976$var$isNumberObject(value) {
    return $c4ec63cc77772976$var$checkBoxedPrimitive(value, $c4ec63cc77772976$var$numberValue);
}
module.exports.isNumberObject = $c4ec63cc77772976$var$isNumberObject;
function $c4ec63cc77772976$var$isStringObject(value) {
    return $c4ec63cc77772976$var$checkBoxedPrimitive(value, $c4ec63cc77772976$var$stringValue);
}
module.exports.isStringObject = $c4ec63cc77772976$var$isStringObject;
function $c4ec63cc77772976$var$isBooleanObject(value) {
    return $c4ec63cc77772976$var$checkBoxedPrimitive(value, $c4ec63cc77772976$var$booleanValue);
}
module.exports.isBooleanObject = $c4ec63cc77772976$var$isBooleanObject;
function $c4ec63cc77772976$var$isBigIntObject(value) {
    return $c4ec63cc77772976$var$BigIntSupported && $c4ec63cc77772976$var$checkBoxedPrimitive(value, $c4ec63cc77772976$var$bigIntValue);
}
module.exports.isBigIntObject = $c4ec63cc77772976$var$isBigIntObject;
function $c4ec63cc77772976$var$isSymbolObject(value) {
    return $c4ec63cc77772976$var$SymbolSupported && $c4ec63cc77772976$var$checkBoxedPrimitive(value, $c4ec63cc77772976$var$symbolValue);
}
module.exports.isSymbolObject = $c4ec63cc77772976$var$isSymbolObject;
function $c4ec63cc77772976$var$isBoxedPrimitive(value) {
    return $c4ec63cc77772976$var$isNumberObject(value) || $c4ec63cc77772976$var$isStringObject(value) || $c4ec63cc77772976$var$isBooleanObject(value) || $c4ec63cc77772976$var$isBigIntObject(value) || $c4ec63cc77772976$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $c4ec63cc77772976$var$isBoxedPrimitive;
function $c4ec63cc77772976$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && ($c4ec63cc77772976$var$isArrayBuffer(value) || $c4ec63cc77772976$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $c4ec63cc77772976$var$isAnyArrayBuffer;
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
parcelRequire.register("aYNSh", function(module, exports) {
'use strict';

var $7fe632012dc5aa5f$var$hasToStringTag = (parcelRequire("CUUJa"))();

var $lRlve = parcelRequire("lRlve");
var $7fe632012dc5aa5f$var$$toString = $lRlve('Object.prototype.toString');
var $7fe632012dc5aa5f$var$isStandardArguments = function isArguments(value) {
    if ($7fe632012dc5aa5f$var$hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $7fe632012dc5aa5f$var$$toString(value) === '[object Arguments]';
};
var $7fe632012dc5aa5f$var$isLegacyArguments = function isArguments(value) {
    if ($7fe632012dc5aa5f$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $7fe632012dc5aa5f$var$$toString(value) !== '[object Array]' && $7fe632012dc5aa5f$var$$toString(value.callee) === '[object Function]';
};
var $7fe632012dc5aa5f$var$supportsStandardArguments = function() {
    return $7fe632012dc5aa5f$var$isStandardArguments(arguments);
}();
$7fe632012dc5aa5f$var$isStandardArguments.isLegacyArguments = $7fe632012dc5aa5f$var$isLegacyArguments; // for tests
module.exports = $7fe632012dc5aa5f$var$supportsStandardArguments ? $7fe632012dc5aa5f$var$isStandardArguments : $7fe632012dc5aa5f$var$isLegacyArguments;

});
parcelRequire.register("CUUJa", function(module, exports) {
'use strict';

var $6Y5Uz = parcelRequire("6Y5Uz");
module.exports = function hasToStringTagShams() {
    return $6Y5Uz() && !!Symbol.toStringTag;
};

});
parcelRequire.register("6Y5Uz", function(module, exports) {
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


parcelRequire.register("lRlve", function(module, exports) {
'use strict';

var $5Ekch = parcelRequire("5Ekch");

var $eM3I4 = parcelRequire("eM3I4");
var $fe9f3a3774129222$var$$indexOf = $eM3I4($5Ekch('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = $5Ekch(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $fe9f3a3774129222$var$$indexOf(name, '.prototype.') > -1) return $eM3I4(intrinsic);
    return intrinsic;
};

});
parcelRequire.register("5Ekch", function(module, exports) {
'use strict';
var $41d05ae3623ccfcd$var$undefined;
var $41d05ae3623ccfcd$var$$SyntaxError = SyntaxError;
var $41d05ae3623ccfcd$var$$Function = Function;
var $41d05ae3623ccfcd$var$$TypeError = TypeError;
// eslint-disable-next-line consistent-return
var $41d05ae3623ccfcd$var$getEvalledConstructor = function(expressionSyntax) {
    try {
        return $41d05ae3623ccfcd$var$$Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {
    }
};
var $41d05ae3623ccfcd$var$$gOPD = Object.getOwnPropertyDescriptor;
if ($41d05ae3623ccfcd$var$$gOPD) try {
    $41d05ae3623ccfcd$var$$gOPD({
    }, '');
} catch (e) {
    $41d05ae3623ccfcd$var$$gOPD = null; // this is IE 8, which has a broken gOPD
}
var $41d05ae3623ccfcd$var$throwTypeError = function() {
    throw new $41d05ae3623ccfcd$var$$TypeError();
};
var $41d05ae3623ccfcd$var$ThrowTypeError = $41d05ae3623ccfcd$var$$gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $41d05ae3623ccfcd$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $41d05ae3623ccfcd$var$$gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return $41d05ae3623ccfcd$var$throwTypeError;
        }
    }
}() : $41d05ae3623ccfcd$var$throwTypeError;

var $41d05ae3623ccfcd$var$hasSymbols = (parcelRequire("7e1u9"))();
var $41d05ae3623ccfcd$var$getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var $41d05ae3623ccfcd$var$needsEval = {
};
var $41d05ae3623ccfcd$var$TypedArray = typeof Uint8Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : $41d05ae3623ccfcd$var$getProto(Uint8Array);
var $41d05ae3623ccfcd$var$INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? $41d05ae3623ccfcd$var$undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? $41d05ae3623ccfcd$var$undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': $41d05ae3623ccfcd$var$hasSymbols ? $41d05ae3623ccfcd$var$getProto([][Symbol.iterator]()) : $41d05ae3623ccfcd$var$undefined,
    '%AsyncFromSyncIteratorPrototype%': $41d05ae3623ccfcd$var$undefined,
    '%AsyncFunction%': $41d05ae3623ccfcd$var$needsEval,
    '%AsyncGenerator%': $41d05ae3623ccfcd$var$needsEval,
    '%AsyncGeneratorFunction%': $41d05ae3623ccfcd$var$needsEval,
    '%AsyncIteratorPrototype%': $41d05ae3623ccfcd$var$needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? $41d05ae3623ccfcd$var$undefined : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? $41d05ae3623ccfcd$var$undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? $41d05ae3623ccfcd$var$undefined : FinalizationRegistry,
    '%Function%': $41d05ae3623ccfcd$var$$Function,
    '%GeneratorFunction%': $41d05ae3623ccfcd$var$needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': $41d05ae3623ccfcd$var$hasSymbols ? $41d05ae3623ccfcd$var$getProto($41d05ae3623ccfcd$var$getProto([][Symbol.iterator]())) : $41d05ae3623ccfcd$var$undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : $41d05ae3623ccfcd$var$undefined,
    '%Map%': typeof Map === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !$41d05ae3623ccfcd$var$hasSymbols ? $41d05ae3623ccfcd$var$undefined : $41d05ae3623ccfcd$var$getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !$41d05ae3623ccfcd$var$hasSymbols ? $41d05ae3623ccfcd$var$undefined : $41d05ae3623ccfcd$var$getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? $41d05ae3623ccfcd$var$undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': $41d05ae3623ccfcd$var$hasSymbols ? $41d05ae3623ccfcd$var$getProto(''[Symbol.iterator]()) : $41d05ae3623ccfcd$var$undefined,
    '%Symbol%': $41d05ae3623ccfcd$var$hasSymbols ? Symbol : $41d05ae3623ccfcd$var$undefined,
    '%SyntaxError%': $41d05ae3623ccfcd$var$$SyntaxError,
    '%ThrowTypeError%': $41d05ae3623ccfcd$var$ThrowTypeError,
    '%TypedArray%': $41d05ae3623ccfcd$var$TypedArray,
    '%TypeError%': $41d05ae3623ccfcd$var$$TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? $41d05ae3623ccfcd$var$undefined : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? $41d05ae3623ccfcd$var$undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? $41d05ae3623ccfcd$var$undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? $41d05ae3623ccfcd$var$undefined : WeakSet
};
var $41d05ae3623ccfcd$var$doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = $41d05ae3623ccfcd$var$getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = $41d05ae3623ccfcd$var$getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = $41d05ae3623ccfcd$var$getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen) value = $41d05ae3623ccfcd$var$getProto(gen.prototype);
    }
    $41d05ae3623ccfcd$var$INTRINSICS[name] = value;
    return value;
};
var $41d05ae3623ccfcd$var$LEGACY_ALIASES = {
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

var $hYKua = parcelRequire("hYKua");

var $gKR0c = parcelRequire("gKR0c");
var $41d05ae3623ccfcd$var$$concat = $hYKua.call(Function.call, Array.prototype.concat);
var $41d05ae3623ccfcd$var$$spliceApply = $hYKua.call(Function.apply, Array.prototype.splice);
var $41d05ae3623ccfcd$var$$replace = $hYKua.call(Function.call, String.prototype.replace);
var $41d05ae3623ccfcd$var$$strSlice = $hYKua.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $41d05ae3623ccfcd$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $41d05ae3623ccfcd$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $41d05ae3623ccfcd$var$stringToPath = function stringToPath(string) {
    var first = $41d05ae3623ccfcd$var$$strSlice(string, 0, 1);
    var last = $41d05ae3623ccfcd$var$$strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $41d05ae3623ccfcd$var$$SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $41d05ae3623ccfcd$var$$SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $41d05ae3623ccfcd$var$$replace(string, $41d05ae3623ccfcd$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $41d05ae3623ccfcd$var$$replace(subString, $41d05ae3623ccfcd$var$reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var $41d05ae3623ccfcd$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($gKR0c($41d05ae3623ccfcd$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $41d05ae3623ccfcd$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if ($gKR0c($41d05ae3623ccfcd$var$INTRINSICS, intrinsicName)) {
        var value = $41d05ae3623ccfcd$var$INTRINSICS[intrinsicName];
        if (value === $41d05ae3623ccfcd$var$needsEval) value = $41d05ae3623ccfcd$var$doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $41d05ae3623ccfcd$var$$TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $41d05ae3623ccfcd$var$$SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $41d05ae3623ccfcd$var$$TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $41d05ae3623ccfcd$var$$TypeError('"allowMissing" argument must be a boolean');
    var parts = $41d05ae3623ccfcd$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = $41d05ae3623ccfcd$var$getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $41d05ae3623ccfcd$var$$spliceApply(parts, $41d05ae3623ccfcd$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $41d05ae3623ccfcd$var$$strSlice(part, 0, 1);
        var last = $41d05ae3623ccfcd$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $41d05ae3623ccfcd$var$$SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if ($gKR0c($41d05ae3623ccfcd$var$INTRINSICS, intrinsicRealName)) value = $41d05ae3623ccfcd$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $41d05ae3623ccfcd$var$$TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($41d05ae3623ccfcd$var$$gOPD && i + 1 >= parts.length) {
                var desc = $41d05ae3623ccfcd$var$$gOPD(value, part);
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
                isOwn = $gKR0c(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $41d05ae3623ccfcd$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRequire.register("7e1u9", function(module, exports) {
'use strict';
var $542afe2e32c92715$var$origSymbol = typeof Symbol !== 'undefined' && Symbol;

var $6Y5Uz = parcelRequire("6Y5Uz");
module.exports = function hasNativeSymbols() {
    if (typeof $542afe2e32c92715$var$origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof $542afe2e32c92715$var$origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return $6Y5Uz();
};

});

parcelRequire.register("hYKua", function(module, exports) {
'use strict';

var $g5MKA = parcelRequire("g5MKA");
module.exports = Function.prototype.bind || $g5MKA;

});
parcelRequire.register("g5MKA", function(module, exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var $bb72edc4c8ad609c$var$ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var $bb72edc4c8ad609c$var$slice = Array.prototype.slice;
var $bb72edc4c8ad609c$var$toStr = Object.prototype.toString;
var $bb72edc4c8ad609c$var$funcType = '[object Function]';
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || $bb72edc4c8ad609c$var$toStr.call(target) !== $bb72edc4c8ad609c$var$funcType) throw new TypeError($bb72edc4c8ad609c$var$ERROR_MESSAGE + target);
    var args = $bb72edc4c8ad609c$var$slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat($bb72edc4c8ad609c$var$slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat($bb72edc4c8ad609c$var$slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push('$' + i);
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

});


parcelRequire.register("gKR0c", function(module, exports) {
'use strict';

var $hYKua = parcelRequire("hYKua");
module.exports = $hYKua.call(Function.call, Object.prototype.hasOwnProperty);

});


parcelRequire.register("eM3I4", function(module, exports) {
'use strict';

var $hYKua = parcelRequire("hYKua");

var $5Ekch = parcelRequire("5Ekch");
var $ac186d169e6ed63c$var$$apply = $5Ekch('%Function.prototype.apply%');
var $ac186d169e6ed63c$var$$call = $5Ekch('%Function.prototype.call%');
var $ac186d169e6ed63c$var$$reflectApply = $5Ekch('%Reflect.apply%', true) || $hYKua.call($ac186d169e6ed63c$var$$call, $ac186d169e6ed63c$var$$apply);
var $ac186d169e6ed63c$var$$gOPD = $5Ekch('%Object.getOwnPropertyDescriptor%', true);
var $ac186d169e6ed63c$var$$defineProperty = $5Ekch('%Object.defineProperty%', true);
var $ac186d169e6ed63c$var$$max = $5Ekch('%Math.max%');
if ($ac186d169e6ed63c$var$$defineProperty) try {
    $ac186d169e6ed63c$var$$defineProperty({
    }, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $ac186d169e6ed63c$var$$defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $ac186d169e6ed63c$var$$reflectApply($hYKua, $ac186d169e6ed63c$var$$call, arguments);
    if ($ac186d169e6ed63c$var$$gOPD && $ac186d169e6ed63c$var$$defineProperty) {
        var desc = $ac186d169e6ed63c$var$$gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $ac186d169e6ed63c$var$$defineProperty(func, 'length', {
            value: 1 + $ac186d169e6ed63c$var$$max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var $ac186d169e6ed63c$var$applyBind = function applyBind() {
    return $ac186d169e6ed63c$var$$reflectApply($hYKua, $ac186d169e6ed63c$var$$apply, arguments);
};
if ($ac186d169e6ed63c$var$$defineProperty) $ac186d169e6ed63c$var$$defineProperty(module.exports, 'apply', {
    value: $ac186d169e6ed63c$var$applyBind
});
else module.exports.apply = $ac186d169e6ed63c$var$applyBind;

});



parcelRequire.register("iUVnI", function(module, exports) {
'use strict';
var $dc59f7b7881c94ff$var$toStr = Object.prototype.toString;
var $dc59f7b7881c94ff$var$fnToStr = Function.prototype.toString;
var $dc59f7b7881c94ff$var$isFnRegex = /^\s*(?:function)?\*/;

var $dc59f7b7881c94ff$var$hasToStringTag = (parcelRequire("CUUJa"))();
var $dc59f7b7881c94ff$var$getProto = Object.getPrototypeOf;
var $dc59f7b7881c94ff$var$getGeneratorFunc = function() {
    if (!$dc59f7b7881c94ff$var$hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {
    }
};
var $dc59f7b7881c94ff$var$GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if ($dc59f7b7881c94ff$var$isFnRegex.test($dc59f7b7881c94ff$var$fnToStr.call(fn))) return true;
    if (!$dc59f7b7881c94ff$var$hasToStringTag) {
        var str = $dc59f7b7881c94ff$var$toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!$dc59f7b7881c94ff$var$getProto) return false;
    if (typeof $dc59f7b7881c94ff$var$GeneratorFunction === 'undefined') {
        var generatorFunc = $dc59f7b7881c94ff$var$getGeneratorFunc();
        $dc59f7b7881c94ff$var$GeneratorFunction = generatorFunc ? $dc59f7b7881c94ff$var$getProto(generatorFunc) : false;
    }
    return $dc59f7b7881c94ff$var$getProto(fn) === $dc59f7b7881c94ff$var$GeneratorFunction;
};

});

parcelRequire.register("7s39a", function(module, exports) {
'use strict';

var $gY1Kw = parcelRequire("gY1Kw");

var $bWznr = parcelRequire("bWznr");

var $lRlve = parcelRequire("lRlve");
var $56cd96d103c3752b$var$$toString = $lRlve('Object.prototype.toString');

var $56cd96d103c3752b$var$hasToStringTag = (parcelRequire("CUUJa"))();
var $56cd96d103c3752b$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $56cd96d103c3752b$var$typedArrays = $bWznr();
var $56cd96d103c3752b$var$$slice = $lRlve('String.prototype.slice');
var $56cd96d103c3752b$var$toStrTags = {
};

var $hBaS4 = parcelRequire("hBaS4");
var $56cd96d103c3752b$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($56cd96d103c3752b$var$hasToStringTag && $hBaS4 && $56cd96d103c3752b$var$getPrototypeOf) $gY1Kw($56cd96d103c3752b$var$typedArrays, function(typedArray) {
    if (typeof $56cd96d103c3752b$var$g[typedArray] === 'function') {
        var arr = new $56cd96d103c3752b$var$g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = $56cd96d103c3752b$var$getPrototypeOf(arr);
            var descriptor = $hBaS4(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = $56cd96d103c3752b$var$getPrototypeOf(proto);
                descriptor = $hBaS4(superProto, Symbol.toStringTag);
            }
            $56cd96d103c3752b$var$toStrTags[typedArray] = descriptor.get;
        }
    }
});
var $56cd96d103c3752b$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    $gY1Kw($56cd96d103c3752b$var$toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {
        }
    });
    return foundName;
};

var $ju8Yj = parcelRequire("ju8Yj");
module.exports = function whichTypedArray(value) {
    if (!$ju8Yj(value)) return false;
    if (!$56cd96d103c3752b$var$hasToStringTag || !(Symbol.toStringTag in value)) return $56cd96d103c3752b$var$$slice($56cd96d103c3752b$var$$toString(value), 8, -1);
    return $56cd96d103c3752b$var$tryTypedArrays(value);
};

});
parcelRequire.register("gY1Kw", function(module, exports) {
var $c5a39b4f2b948639$var$hasOwn = Object.prototype.hasOwnProperty;
var $c5a39b4f2b948639$var$toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if ($c5a39b4f2b948639$var$toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if ($c5a39b4f2b948639$var$hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

});

parcelRequire.register("bWznr", function(module, exports) {
'use strict';
var $8b208da88bcc77e2$var$possibleNames = [
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
var $8b208da88bcc77e2$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < $8b208da88bcc77e2$var$possibleNames.length; i++)if (typeof $8b208da88bcc77e2$var$g[$8b208da88bcc77e2$var$possibleNames[i]] === 'function') out[out.length] = $8b208da88bcc77e2$var$possibleNames[i];
    return out;
};

});

parcelRequire.register("hBaS4", function(module, exports) {
'use strict';

var $5Ekch = parcelRequire("5Ekch");
var $ccfe5329c2bbb895$var$$gOPD = $5Ekch('%Object.getOwnPropertyDescriptor%', true);
if ($ccfe5329c2bbb895$var$$gOPD) try {
    $ccfe5329c2bbb895$var$$gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $ccfe5329c2bbb895$var$$gOPD = null;
}
module.exports = $ccfe5329c2bbb895$var$$gOPD;

});

parcelRequire.register("ju8Yj", function(module, exports) {
'use strict';

var $gY1Kw = parcelRequire("gY1Kw");

var $bWznr = parcelRequire("bWznr");

var $lRlve = parcelRequire("lRlve");
var $e2f7c745416ca9f9$var$$toString = $lRlve('Object.prototype.toString');

var $e2f7c745416ca9f9$var$hasToStringTag = (parcelRequire("CUUJa"))();
var $e2f7c745416ca9f9$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $e2f7c745416ca9f9$var$typedArrays = $bWznr();
var $e2f7c745416ca9f9$var$$indexOf = $lRlve('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $e2f7c745416ca9f9$var$$slice = $lRlve('String.prototype.slice');
var $e2f7c745416ca9f9$var$toStrTags = {
};

var $hBaS4 = parcelRequire("hBaS4");
var $e2f7c745416ca9f9$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($e2f7c745416ca9f9$var$hasToStringTag && $hBaS4 && $e2f7c745416ca9f9$var$getPrototypeOf) $gY1Kw($e2f7c745416ca9f9$var$typedArrays, function(typedArray) {
    var arr = new $e2f7c745416ca9f9$var$g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = $e2f7c745416ca9f9$var$getPrototypeOf(arr);
        var descriptor = $hBaS4(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = $e2f7c745416ca9f9$var$getPrototypeOf(proto);
            descriptor = $hBaS4(superProto, Symbol.toStringTag);
        }
        $e2f7c745416ca9f9$var$toStrTags[typedArray] = descriptor.get;
    }
});
var $e2f7c745416ca9f9$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    $gY1Kw($e2f7c745416ca9f9$var$toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!$e2f7c745416ca9f9$var$hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $e2f7c745416ca9f9$var$$slice($e2f7c745416ca9f9$var$$toString(value), 8, -1);
        return $e2f7c745416ca9f9$var$$indexOf($e2f7c745416ca9f9$var$typedArrays, tag) > -1;
    }
    if (!$hBaS4) return false;
    return $e2f7c745416ca9f9$var$tryTypedArrays(value);
};

});




// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
$6b43bec9714ecd1e$exports.types = (parcelRequire("gUdyo"));
function $6b43bec9714ecd1e$var$isArray(ar) {
    return Array.isArray(ar);
}
$6b43bec9714ecd1e$exports.isArray = $6b43bec9714ecd1e$var$isArray;
function $6b43bec9714ecd1e$var$isBoolean(arg) {
    return typeof arg === 'boolean';
}
$6b43bec9714ecd1e$exports.isBoolean = $6b43bec9714ecd1e$var$isBoolean;
function $6b43bec9714ecd1e$var$isNull(arg) {
    return arg === null;
}
$6b43bec9714ecd1e$exports.isNull = $6b43bec9714ecd1e$var$isNull;
function $6b43bec9714ecd1e$var$isNullOrUndefined(arg) {
    return arg == null;
}
$6b43bec9714ecd1e$exports.isNullOrUndefined = $6b43bec9714ecd1e$var$isNullOrUndefined;
function $6b43bec9714ecd1e$var$isNumber(arg) {
    return typeof arg === 'number';
}
$6b43bec9714ecd1e$exports.isNumber = $6b43bec9714ecd1e$var$isNumber;
function $6b43bec9714ecd1e$var$isString(arg) {
    return typeof arg === 'string';
}
$6b43bec9714ecd1e$exports.isString = $6b43bec9714ecd1e$var$isString;
function $6b43bec9714ecd1e$var$isSymbol(arg) {
    return typeof arg === 'symbol';
}
$6b43bec9714ecd1e$exports.isSymbol = $6b43bec9714ecd1e$var$isSymbol;
function $6b43bec9714ecd1e$var$isUndefined(arg) {
    return arg === void 0;
}
$6b43bec9714ecd1e$exports.isUndefined = $6b43bec9714ecd1e$var$isUndefined;
function $6b43bec9714ecd1e$var$isRegExp(re) {
    return $6b43bec9714ecd1e$var$isObject(re) && $6b43bec9714ecd1e$var$objectToString(re) === '[object RegExp]';
}
$6b43bec9714ecd1e$exports.isRegExp = $6b43bec9714ecd1e$var$isRegExp;
$6b43bec9714ecd1e$exports.types.isRegExp = $6b43bec9714ecd1e$var$isRegExp;
function $6b43bec9714ecd1e$var$isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
$6b43bec9714ecd1e$exports.isObject = $6b43bec9714ecd1e$var$isObject;
function $6b43bec9714ecd1e$var$isDate(d) {
    return $6b43bec9714ecd1e$var$isObject(d) && $6b43bec9714ecd1e$var$objectToString(d) === '[object Date]';
}
$6b43bec9714ecd1e$exports.isDate = $6b43bec9714ecd1e$var$isDate;
$6b43bec9714ecd1e$exports.types.isDate = $6b43bec9714ecd1e$var$isDate;
function $6b43bec9714ecd1e$var$isError(e) {
    return $6b43bec9714ecd1e$var$isObject(e) && ($6b43bec9714ecd1e$var$objectToString(e) === '[object Error]' || e instanceof Error);
}
$6b43bec9714ecd1e$exports.isError = $6b43bec9714ecd1e$var$isError;
$6b43bec9714ecd1e$exports.types.isNativeError = $6b43bec9714ecd1e$var$isError;
function $6b43bec9714ecd1e$var$isFunction(arg) {
    return typeof arg === 'function';
}
$6b43bec9714ecd1e$exports.isFunction = $6b43bec9714ecd1e$var$isFunction;
function $6b43bec9714ecd1e$var$isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
$6b43bec9714ecd1e$exports.isPrimitive = $6b43bec9714ecd1e$var$isPrimitive;
parcelRequire.register("9F572", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

});


$6b43bec9714ecd1e$exports.isBuffer = (parcelRequire("9F572"));
function $6b43bec9714ecd1e$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $6b43bec9714ecd1e$var$pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var $6b43bec9714ecd1e$var$months = [
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
function $6b43bec9714ecd1e$var$timestamp() {
    var d = new Date();
    var time = [
        $6b43bec9714ecd1e$var$pad(d.getHours()),
        $6b43bec9714ecd1e$var$pad(d.getMinutes()),
        $6b43bec9714ecd1e$var$pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        $6b43bec9714ecd1e$var$months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
$6b43bec9714ecd1e$exports.log = function() {
    console.log('%s - %s', $6b43bec9714ecd1e$var$timestamp(), $6b43bec9714ecd1e$exports.format.apply($6b43bec9714ecd1e$exports, arguments));
};
parcelRequire.register("1SwcL", function(module, exports) {
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
module.exports = function inherits(ctor, superCtor) {
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
 */ $6b43bec9714ecd1e$exports.inherits = (parcelRequire("1SwcL"));
$6b43bec9714ecd1e$exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$6b43bec9714ecd1e$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $6b43bec9714ecd1e$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $6b43bec9714ecd1e$var$kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
$6b43bec9714ecd1e$exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if ($6b43bec9714ecd1e$var$kCustomPromisifiedSymbol && original[$6b43bec9714ecd1e$var$kCustomPromisifiedSymbol]) {
        var fn = original[$6b43bec9714ecd1e$var$kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $6b43bec9714ecd1e$var$kCustomPromisifiedSymbol, {
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
    if ($6b43bec9714ecd1e$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $6b43bec9714ecd1e$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $6b43bec9714ecd1e$var$getOwnPropertyDescriptors(original));
};
$6b43bec9714ecd1e$exports.promisify.custom = $6b43bec9714ecd1e$var$kCustomPromisifiedSymbol;
function $6b43bec9714ecd1e$var$callbackifyOnRejected(reason, cb) {
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
function $6b43bec9714ecd1e$var$callbackify(original) {
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
            $4cYrz.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            $4cYrz.nextTick($6b43bec9714ecd1e$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $6b43bec9714ecd1e$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
$6b43bec9714ecd1e$exports.callbackify = $6b43bec9714ecd1e$var$callbackify;


class $11c045df1a5b205b$var$LoggerObject {
    constructor(){
        this.id = Math.random();
        this.stringBuffer = [];
        this.attributeBuffer = [];
        this.styleString = "font-family:monospace;font-size: 1rem;";
        const ifStyleCalledAsMethod = (...args)=>{
            let styler = $11c045df1a5b205b$var$chalk;
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
            this[$6b43bec9714ecd1e$exports.inspect.custom] = this.toString;
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
        if (!$11c045df1a5b205b$var$isBrowserContext) $11c045df1a5b205b$var$realConsole.log(this.toString().replace("%", "%%"), ...others);
        else $11c045df1a5b205b$var$realConsole.log(`%c${this.toString().replace("%", "%%")}`, this.styleString);
        // reset it after logging
        this.styleString = "";
        this.stringBuffer = [];
        this.attributeBuffer = [];
        return this;
    }
}

class $11c045df1a5b205b$var$ConsoleObject extends $11c045df1a5b205b$var$LoggerObject {
    constructor(){
        super();
        // 
        // only difference: proxy object executes .log() when called as a function
        // 
        const ifStyleCalledAsMethod = (...args)=>{
            let styler = $11c045df1a5b205b$var$chalk;
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
            this[$6b43bec9714ecd1e$exports.inspect.custom] = this.toString;
        } catch (error) {
        }
    }
}
const $11c045df1a5b205b$var$wrapAroundGet = (number, list)=>list[(number % list.length + list.length) % list.length]
;
let $11c045df1a5b205b$var$console = {
    get reset () {
        return new $11c045df1a5b205b$var$ConsoleObject().reset;
    },
    get bold () {
        return new $11c045df1a5b205b$var$ConsoleObject().bold;
    },
    get dim () {
        return new $11c045df1a5b205b$var$ConsoleObject().dim;
    },
    get italic () {
        return new $11c045df1a5b205b$var$ConsoleObject().italic;
    },
    get underline () {
        return new $11c045df1a5b205b$var$ConsoleObject().underline;
    },
    get inverse () {
        return new $11c045df1a5b205b$var$ConsoleObject().inverse;
    },
    get hidden () {
        return new $11c045df1a5b205b$var$ConsoleObject().hidden;
    },
    get strikethrough () {
        return new $11c045df1a5b205b$var$ConsoleObject().strikethrough;
    },
    get visible () {
        return new $11c045df1a5b205b$var$ConsoleObject().visible;
    },
    get black () {
        return new $11c045df1a5b205b$var$ConsoleObject().black;
    },
    get red () {
        return new $11c045df1a5b205b$var$ConsoleObject().red;
    },
    get green () {
        return new $11c045df1a5b205b$var$ConsoleObject().green;
    },
    get yellow () {
        return new $11c045df1a5b205b$var$ConsoleObject().yellow;
    },
    get blue () {
        return new $11c045df1a5b205b$var$ConsoleObject().blue;
    },
    get magenta () {
        return new $11c045df1a5b205b$var$ConsoleObject().magenta;
    },
    get cyan () {
        return new $11c045df1a5b205b$var$ConsoleObject().cyan;
    },
    get white () {
        return new $11c045df1a5b205b$var$ConsoleObject().white;
    },
    get blackBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().blackBright;
    },
    get gray () {
        return new $11c045df1a5b205b$var$ConsoleObject().gray;
    },
    get grey () {
        return new $11c045df1a5b205b$var$ConsoleObject().grey;
    },
    get redBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().redBright;
    },
    get greenBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().greenBright;
    },
    get yellowBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().yellowBright;
    },
    get blueBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().blueBright;
    },
    get magentaBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().magentaBright;
    },
    get cyanBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().cyanBright;
    },
    get whiteBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().whiteBright;
    },
    get bgBlack () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgBlack;
    },
    get bgRed () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgRed;
    },
    get bgGreen () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgGreen;
    },
    get bgYellow () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgYellow;
    },
    get bgBlue () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgBlue;
    },
    get bgMagenta () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgMagenta;
    },
    get bgCyan () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgCyan;
    },
    get bgWhite () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgWhite;
    },
    get bgBlackBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgBlackBright;
    },
    get bgGray () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgGray;
    },
    get bgGrey () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgGrey;
    },
    get bgRedBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgRedBright;
    },
    get bgGreenBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new $11c045df1a5b205b$var$ConsoleObject().bgWhiteBright;
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
        if ($11c045df1a5b205b$var$isBrowserContext) $11c045df1a5b205b$var$realConsole.log(`%c${args.join("").replace("%", "%%")}`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
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
                bigString += $11c045df1a5b205b$var$vibrance[$11c045df1a5b205b$var$wrapAroundGet(number, rainbowColors)](eachChar).toString();
            }
            $11c045df1a5b205b$var$realConsole.log(bigString.replace("%", "%%"));
        }
    }
};
const $11c045df1a5b205b$var$vibrance = {
    get reset () {
        return new $11c045df1a5b205b$var$LoggerObject().reset;
    },
    get bold () {
        return new $11c045df1a5b205b$var$LoggerObject().bold;
    },
    get dim () {
        return new $11c045df1a5b205b$var$LoggerObject().dim;
    },
    get italic () {
        return new $11c045df1a5b205b$var$LoggerObject().italic;
    },
    get underline () {
        return new $11c045df1a5b205b$var$LoggerObject().underline;
    },
    get inverse () {
        return new $11c045df1a5b205b$var$LoggerObject().inverse;
    },
    get hidden () {
        return new $11c045df1a5b205b$var$LoggerObject().hidden;
    },
    get strikethrough () {
        return new $11c045df1a5b205b$var$LoggerObject().strikethrough;
    },
    get visible () {
        return new $11c045df1a5b205b$var$LoggerObject().visible;
    },
    get black () {
        return new $11c045df1a5b205b$var$LoggerObject().black;
    },
    get red () {
        return new $11c045df1a5b205b$var$LoggerObject().red;
    },
    get green () {
        return new $11c045df1a5b205b$var$LoggerObject().green;
    },
    get yellow () {
        return new $11c045df1a5b205b$var$LoggerObject().yellow;
    },
    get blue () {
        return new $11c045df1a5b205b$var$LoggerObject().blue;
    },
    get magenta () {
        return new $11c045df1a5b205b$var$LoggerObject().magenta;
    },
    get cyan () {
        return new $11c045df1a5b205b$var$LoggerObject().cyan;
    },
    get white () {
        return new $11c045df1a5b205b$var$LoggerObject().white;
    },
    get blackBright () {
        return new $11c045df1a5b205b$var$LoggerObject().blackBright;
    },
    get gray () {
        return new $11c045df1a5b205b$var$LoggerObject().gray;
    },
    get grey () {
        return new $11c045df1a5b205b$var$LoggerObject().grey;
    },
    get redBright () {
        return new $11c045df1a5b205b$var$LoggerObject().redBright;
    },
    get greenBright () {
        return new $11c045df1a5b205b$var$LoggerObject().greenBright;
    },
    get yellowBright () {
        return new $11c045df1a5b205b$var$LoggerObject().yellowBright;
    },
    get blueBright () {
        return new $11c045df1a5b205b$var$LoggerObject().blueBright;
    },
    get magentaBright () {
        return new $11c045df1a5b205b$var$LoggerObject().magentaBright;
    },
    get cyanBright () {
        return new $11c045df1a5b205b$var$LoggerObject().cyanBright;
    },
    get whiteBright () {
        return new $11c045df1a5b205b$var$LoggerObject().whiteBright;
    },
    get bgBlack () {
        return new $11c045df1a5b205b$var$LoggerObject().bgBlack;
    },
    get bgRed () {
        return new $11c045df1a5b205b$var$LoggerObject().bgRed;
    },
    get bgGreen () {
        return new $11c045df1a5b205b$var$LoggerObject().bgGreen;
    },
    get bgYellow () {
        return new $11c045df1a5b205b$var$LoggerObject().bgYellow;
    },
    get bgBlue () {
        return new $11c045df1a5b205b$var$LoggerObject().bgBlue;
    },
    get bgMagenta () {
        return new $11c045df1a5b205b$var$LoggerObject().bgMagenta;
    },
    get bgCyan () {
        return new $11c045df1a5b205b$var$LoggerObject().bgCyan;
    },
    get bgWhite () {
        return new $11c045df1a5b205b$var$LoggerObject().bgWhite;
    },
    get bgBlackBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgBlackBright;
    },
    get bgGray () {
        return new $11c045df1a5b205b$var$LoggerObject().bgGray;
    },
    get bgGrey () {
        return new $11c045df1a5b205b$var$LoggerObject().bgGrey;
    },
    get bgRedBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgRedBright;
    },
    get bgGreenBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgGreenBright;
    },
    get bgYellowBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgYellowBright;
    },
    get bgBlueBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgBlueBright;
    },
    get bgMagentaBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgMagentaBright;
    },
    get bgCyanBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgCyanBright;
    },
    get bgWhiteBright () {
        return new $11c045df1a5b205b$var$LoggerObject().bgWhiteBright;
    },
    console: $11c045df1a5b205b$var$console
};
// add self reference
$11c045df1a5b205b$var$vibrance.vibrance = $11c045df1a5b205b$var$vibrance;
$11c045df1a5b205b$exports = $11c045df1a5b205b$var$vibrance;


export {$11c045df1a5b205b$exports as default};
//# sourceMappingURL=module.js.map
