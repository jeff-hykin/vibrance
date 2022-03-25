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

var parcelRequire = $parcel$global["parcelRequire7111"];
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

  $parcel$global["parcelRequire7111"] = parcelRequire;
}
parcelRequire.register("9nb1c", function(module, exports) {
// shim for using process in browser
var $6d2ecf10f390706f$var$process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $6d2ecf10f390706f$var$cachedSetTimeout;
var $6d2ecf10f390706f$var$cachedClearTimeout;
function $6d2ecf10f390706f$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $6d2ecf10f390706f$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $6d2ecf10f390706f$var$cachedSetTimeout = setTimeout;
        else $6d2ecf10f390706f$var$cachedSetTimeout = $6d2ecf10f390706f$var$defaultSetTimout;
    } catch (e) {
        $6d2ecf10f390706f$var$cachedSetTimeout = $6d2ecf10f390706f$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $6d2ecf10f390706f$var$cachedClearTimeout = clearTimeout;
        else $6d2ecf10f390706f$var$cachedClearTimeout = $6d2ecf10f390706f$var$defaultClearTimeout;
    } catch (e1) {
        $6d2ecf10f390706f$var$cachedClearTimeout = $6d2ecf10f390706f$var$defaultClearTimeout;
    }
})();
function $6d2ecf10f390706f$var$runTimeout(fun) {
    if ($6d2ecf10f390706f$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($6d2ecf10f390706f$var$cachedSetTimeout === $6d2ecf10f390706f$var$defaultSetTimout || !$6d2ecf10f390706f$var$cachedSetTimeout) && setTimeout) {
        $6d2ecf10f390706f$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $6d2ecf10f390706f$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $6d2ecf10f390706f$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $6d2ecf10f390706f$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $6d2ecf10f390706f$var$runClearTimeout(marker) {
    if ($6d2ecf10f390706f$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($6d2ecf10f390706f$var$cachedClearTimeout === $6d2ecf10f390706f$var$defaultClearTimeout || !$6d2ecf10f390706f$var$cachedClearTimeout) && clearTimeout) {
        $6d2ecf10f390706f$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $6d2ecf10f390706f$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $6d2ecf10f390706f$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $6d2ecf10f390706f$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $6d2ecf10f390706f$var$queue = [];
var $6d2ecf10f390706f$var$draining = false;
var $6d2ecf10f390706f$var$currentQueue;
var $6d2ecf10f390706f$var$queueIndex = -1;
function $6d2ecf10f390706f$var$cleanUpNextTick() {
    if (!$6d2ecf10f390706f$var$draining || !$6d2ecf10f390706f$var$currentQueue) return;
    $6d2ecf10f390706f$var$draining = false;
    if ($6d2ecf10f390706f$var$currentQueue.length) $6d2ecf10f390706f$var$queue = $6d2ecf10f390706f$var$currentQueue.concat($6d2ecf10f390706f$var$queue);
    else $6d2ecf10f390706f$var$queueIndex = -1;
    if ($6d2ecf10f390706f$var$queue.length) $6d2ecf10f390706f$var$drainQueue();
}
function $6d2ecf10f390706f$var$drainQueue() {
    if ($6d2ecf10f390706f$var$draining) return;
    var timeout = $6d2ecf10f390706f$var$runTimeout($6d2ecf10f390706f$var$cleanUpNextTick);
    $6d2ecf10f390706f$var$draining = true;
    var len = $6d2ecf10f390706f$var$queue.length;
    while(len){
        $6d2ecf10f390706f$var$currentQueue = $6d2ecf10f390706f$var$queue;
        $6d2ecf10f390706f$var$queue = [];
        while(++$6d2ecf10f390706f$var$queueIndex < len)if ($6d2ecf10f390706f$var$currentQueue) $6d2ecf10f390706f$var$currentQueue[$6d2ecf10f390706f$var$queueIndex].run();
        $6d2ecf10f390706f$var$queueIndex = -1;
        len = $6d2ecf10f390706f$var$queue.length;
    }
    $6d2ecf10f390706f$var$currentQueue = null;
    $6d2ecf10f390706f$var$draining = false;
    $6d2ecf10f390706f$var$runClearTimeout(timeout);
}
$6d2ecf10f390706f$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $6d2ecf10f390706f$var$queue.push(new $6d2ecf10f390706f$var$Item(fun, args));
    if ($6d2ecf10f390706f$var$queue.length === 1 && !$6d2ecf10f390706f$var$draining) $6d2ecf10f390706f$var$runTimeout($6d2ecf10f390706f$var$drainQueue);
};
// v8 likes predictible objects
function $6d2ecf10f390706f$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$6d2ecf10f390706f$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$6d2ecf10f390706f$var$process.title = 'browser';
$6d2ecf10f390706f$var$process.browser = true;
$6d2ecf10f390706f$var$process.env = {
};
$6d2ecf10f390706f$var$process.argv = [];
$6d2ecf10f390706f$var$process.version = ''; // empty string to avoid regexp issues
$6d2ecf10f390706f$var$process.versions = {
};
function $6d2ecf10f390706f$var$noop() {
}
$6d2ecf10f390706f$var$process.on = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.addListener = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.once = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.off = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.removeListener = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.removeAllListeners = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.emit = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.prependListener = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.prependOnceListener = $6d2ecf10f390706f$var$noop;
$6d2ecf10f390706f$var$process.listeners = function(name) {
    return [];
};
$6d2ecf10f390706f$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$6d2ecf10f390706f$var$process.cwd = function() {
    return '/';
};
$6d2ecf10f390706f$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$6d2ecf10f390706f$var$process.umask = function() {
    return 0;
};

});

parcelRequire.register("9u0DI", function(module, exports) {

$parcel$export(module.exports, "isatty", () => $6e77696498d0919b$export$9b473d35051e2626, (v) => $6e77696498d0919b$export$9b473d35051e2626 = v);
$parcel$export(module.exports, "ReadStream", () => $6e77696498d0919b$export$de64a30e4ee40519, (v) => $6e77696498d0919b$export$de64a30e4ee40519 = v);
$parcel$export(module.exports, "WriteStream", () => $6e77696498d0919b$export$b6b358f069d459a3, (v) => $6e77696498d0919b$export$b6b358f069d459a3 = v);
var $6e77696498d0919b$export$9b473d35051e2626;
var $6e77696498d0919b$export$de64a30e4ee40519;
var $6e77696498d0919b$export$b6b358f069d459a3;
$6e77696498d0919b$export$9b473d35051e2626 = function() {
    return false;
};
function $6e77696498d0919b$var$ReadStream() {
    throw new Error('tty.ReadStream is not implemented');
}
$6e77696498d0919b$export$de64a30e4ee40519 = $6e77696498d0919b$var$ReadStream;
function $6e77696498d0919b$var$WriteStream() {
    throw new Error('tty.WriteStream is not implemented');
}
$6e77696498d0919b$export$b6b358f069d459a3 = $6e77696498d0919b$var$WriteStream;

});

parcelRequire.register("cDsRi", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';

var $7lj5R = parcelRequire("7lj5R");

var $7qka1 = parcelRequire("7qka1");

var $98fQt = parcelRequire("98fQt");

var $fX2rl = parcelRequire("fX2rl");
function $932f834483233a95$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $932f834483233a95$var$BigIntSupported = typeof BigInt !== 'undefined';
var $932f834483233a95$var$SymbolSupported = typeof Symbol !== 'undefined';
var $932f834483233a95$var$ObjectToString = $932f834483233a95$var$uncurryThis(Object.prototype.toString);
var $932f834483233a95$var$numberValue = $932f834483233a95$var$uncurryThis(Number.prototype.valueOf);
var $932f834483233a95$var$stringValue = $932f834483233a95$var$uncurryThis(String.prototype.valueOf);
var $932f834483233a95$var$booleanValue = $932f834483233a95$var$uncurryThis(Boolean.prototype.valueOf);
if ($932f834483233a95$var$BigIntSupported) var $932f834483233a95$var$bigIntValue = $932f834483233a95$var$uncurryThis(BigInt.prototype.valueOf);
if ($932f834483233a95$var$SymbolSupported) var $932f834483233a95$var$symbolValue = $932f834483233a95$var$uncurryThis(Symbol.prototype.valueOf);
function $932f834483233a95$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $7lj5R;
module.exports.isGeneratorFunction = $7qka1;
module.exports.isTypedArray = $fX2rl;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $932f834483233a95$var$isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
module.exports.isPromise = $932f834483233a95$var$isPromise;
function $932f834483233a95$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $fX2rl(value) || $932f834483233a95$var$isDataView(value);
}
module.exports.isArrayBufferView = $932f834483233a95$var$isArrayBufferView;
function $932f834483233a95$var$isUint8Array(value) {
    return $98fQt(value) === 'Uint8Array';
}
module.exports.isUint8Array = $932f834483233a95$var$isUint8Array;
function $932f834483233a95$var$isUint8ClampedArray(value) {
    return $98fQt(value) === 'Uint8ClampedArray';
}
module.exports.isUint8ClampedArray = $932f834483233a95$var$isUint8ClampedArray;
function $932f834483233a95$var$isUint16Array(value) {
    return $98fQt(value) === 'Uint16Array';
}
module.exports.isUint16Array = $932f834483233a95$var$isUint16Array;
function $932f834483233a95$var$isUint32Array(value) {
    return $98fQt(value) === 'Uint32Array';
}
module.exports.isUint32Array = $932f834483233a95$var$isUint32Array;
function $932f834483233a95$var$isInt8Array(value) {
    return $98fQt(value) === 'Int8Array';
}
module.exports.isInt8Array = $932f834483233a95$var$isInt8Array;
function $932f834483233a95$var$isInt16Array(value) {
    return $98fQt(value) === 'Int16Array';
}
module.exports.isInt16Array = $932f834483233a95$var$isInt16Array;
function $932f834483233a95$var$isInt32Array(value) {
    return $98fQt(value) === 'Int32Array';
}
module.exports.isInt32Array = $932f834483233a95$var$isInt32Array;
function $932f834483233a95$var$isFloat32Array(value) {
    return $98fQt(value) === 'Float32Array';
}
module.exports.isFloat32Array = $932f834483233a95$var$isFloat32Array;
function $932f834483233a95$var$isFloat64Array(value) {
    return $98fQt(value) === 'Float64Array';
}
module.exports.isFloat64Array = $932f834483233a95$var$isFloat64Array;
function $932f834483233a95$var$isBigInt64Array(value) {
    return $98fQt(value) === 'BigInt64Array';
}
module.exports.isBigInt64Array = $932f834483233a95$var$isBigInt64Array;
function $932f834483233a95$var$isBigUint64Array(value) {
    return $98fQt(value) === 'BigUint64Array';
}
module.exports.isBigUint64Array = $932f834483233a95$var$isBigUint64Array;
function $932f834483233a95$var$isMapToString(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object Map]';
}
$932f834483233a95$var$isMapToString.working = typeof Map !== 'undefined' && $932f834483233a95$var$isMapToString(new Map());
function $932f834483233a95$var$isMap(value) {
    if (typeof Map === 'undefined') return false;
    return $932f834483233a95$var$isMapToString.working ? $932f834483233a95$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $932f834483233a95$var$isMap;
function $932f834483233a95$var$isSetToString(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object Set]';
}
$932f834483233a95$var$isSetToString.working = typeof Set !== 'undefined' && $932f834483233a95$var$isSetToString(new Set());
function $932f834483233a95$var$isSet(value) {
    if (typeof Set === 'undefined') return false;
    return $932f834483233a95$var$isSetToString.working ? $932f834483233a95$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $932f834483233a95$var$isSet;
function $932f834483233a95$var$isWeakMapToString(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object WeakMap]';
}
$932f834483233a95$var$isWeakMapToString.working = typeof WeakMap !== 'undefined' && $932f834483233a95$var$isWeakMapToString(new WeakMap());
function $932f834483233a95$var$isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return $932f834483233a95$var$isWeakMapToString.working ? $932f834483233a95$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $932f834483233a95$var$isWeakMap;
function $932f834483233a95$var$isWeakSetToString(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object WeakSet]';
}
$932f834483233a95$var$isWeakSetToString.working = typeof WeakSet !== 'undefined' && $932f834483233a95$var$isWeakSetToString(new WeakSet());
function $932f834483233a95$var$isWeakSet(value) {
    return $932f834483233a95$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $932f834483233a95$var$isWeakSet;
function $932f834483233a95$var$isArrayBufferToString(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object ArrayBuffer]';
}
$932f834483233a95$var$isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && $932f834483233a95$var$isArrayBufferToString(new ArrayBuffer());
function $932f834483233a95$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return $932f834483233a95$var$isArrayBufferToString.working ? $932f834483233a95$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $932f834483233a95$var$isArrayBuffer;
function $932f834483233a95$var$isDataViewToString(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object DataView]';
}
$932f834483233a95$var$isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && $932f834483233a95$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $932f834483233a95$var$isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return $932f834483233a95$var$isDataViewToString.working ? $932f834483233a95$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $932f834483233a95$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $932f834483233a95$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function $932f834483233a95$var$isSharedArrayBufferToString(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object SharedArrayBuffer]';
}
function $932f834483233a95$var$isSharedArrayBuffer(value) {
    if (typeof $932f834483233a95$var$SharedArrayBufferCopy === 'undefined') return false;
    if (typeof $932f834483233a95$var$isSharedArrayBufferToString.working === 'undefined') $932f834483233a95$var$isSharedArrayBufferToString.working = $932f834483233a95$var$isSharedArrayBufferToString(new $932f834483233a95$var$SharedArrayBufferCopy());
    return $932f834483233a95$var$isSharedArrayBufferToString.working ? $932f834483233a95$var$isSharedArrayBufferToString(value) : value instanceof $932f834483233a95$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $932f834483233a95$var$isSharedArrayBuffer;
function $932f834483233a95$var$isAsyncFunction(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object AsyncFunction]';
}
module.exports.isAsyncFunction = $932f834483233a95$var$isAsyncFunction;
function $932f834483233a95$var$isMapIterator(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object Map Iterator]';
}
module.exports.isMapIterator = $932f834483233a95$var$isMapIterator;
function $932f834483233a95$var$isSetIterator(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object Set Iterator]';
}
module.exports.isSetIterator = $932f834483233a95$var$isSetIterator;
function $932f834483233a95$var$isGeneratorObject(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object Generator]';
}
module.exports.isGeneratorObject = $932f834483233a95$var$isGeneratorObject;
function $932f834483233a95$var$isWebAssemblyCompiledModule(value) {
    return $932f834483233a95$var$ObjectToString(value) === '[object WebAssembly.Module]';
}
module.exports.isWebAssemblyCompiledModule = $932f834483233a95$var$isWebAssemblyCompiledModule;
function $932f834483233a95$var$isNumberObject(value) {
    return $932f834483233a95$var$checkBoxedPrimitive(value, $932f834483233a95$var$numberValue);
}
module.exports.isNumberObject = $932f834483233a95$var$isNumberObject;
function $932f834483233a95$var$isStringObject(value) {
    return $932f834483233a95$var$checkBoxedPrimitive(value, $932f834483233a95$var$stringValue);
}
module.exports.isStringObject = $932f834483233a95$var$isStringObject;
function $932f834483233a95$var$isBooleanObject(value) {
    return $932f834483233a95$var$checkBoxedPrimitive(value, $932f834483233a95$var$booleanValue);
}
module.exports.isBooleanObject = $932f834483233a95$var$isBooleanObject;
function $932f834483233a95$var$isBigIntObject(value) {
    return $932f834483233a95$var$BigIntSupported && $932f834483233a95$var$checkBoxedPrimitive(value, $932f834483233a95$var$bigIntValue);
}
module.exports.isBigIntObject = $932f834483233a95$var$isBigIntObject;
function $932f834483233a95$var$isSymbolObject(value) {
    return $932f834483233a95$var$SymbolSupported && $932f834483233a95$var$checkBoxedPrimitive(value, $932f834483233a95$var$symbolValue);
}
module.exports.isSymbolObject = $932f834483233a95$var$isSymbolObject;
function $932f834483233a95$var$isBoxedPrimitive(value) {
    return $932f834483233a95$var$isNumberObject(value) || $932f834483233a95$var$isStringObject(value) || $932f834483233a95$var$isBooleanObject(value) || $932f834483233a95$var$isBigIntObject(value) || $932f834483233a95$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $932f834483233a95$var$isBoxedPrimitive;
function $932f834483233a95$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && ($932f834483233a95$var$isArrayBuffer(value) || $932f834483233a95$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $932f834483233a95$var$isAnyArrayBuffer;
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
parcelRequire.register("7lj5R", function(module, exports) {
'use strict';

var $55894e20f97368d4$var$hasToStringTag = (parcelRequire("9qqVB"))();

var $1laoF = parcelRequire("1laoF");
var $55894e20f97368d4$var$$toString = $1laoF('Object.prototype.toString');
var $55894e20f97368d4$var$isStandardArguments = function isArguments(value) {
    if ($55894e20f97368d4$var$hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $55894e20f97368d4$var$$toString(value) === '[object Arguments]';
};
var $55894e20f97368d4$var$isLegacyArguments = function isArguments(value) {
    if ($55894e20f97368d4$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $55894e20f97368d4$var$$toString(value) !== '[object Array]' && $55894e20f97368d4$var$$toString(value.callee) === '[object Function]';
};
var $55894e20f97368d4$var$supportsStandardArguments = function() {
    return $55894e20f97368d4$var$isStandardArguments(arguments);
}();
$55894e20f97368d4$var$isStandardArguments.isLegacyArguments = $55894e20f97368d4$var$isLegacyArguments; // for tests
module.exports = $55894e20f97368d4$var$supportsStandardArguments ? $55894e20f97368d4$var$isStandardArguments : $55894e20f97368d4$var$isLegacyArguments;

});
parcelRequire.register("9qqVB", function(module, exports) {
'use strict';

var $91ncz = parcelRequire("91ncz");
module.exports = function hasToStringTagShams() {
    return $91ncz() && !!Symbol.toStringTag;
};

});
parcelRequire.register("91ncz", function(module, exports) {
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


parcelRequire.register("1laoF", function(module, exports) {
'use strict';

var $7Phts = parcelRequire("7Phts");

var $h7y5I = parcelRequire("h7y5I");
var $0f9fd138aff1bbd1$var$$indexOf = $h7y5I($7Phts('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = $7Phts(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $0f9fd138aff1bbd1$var$$indexOf(name, '.prototype.') > -1) return $h7y5I(intrinsic);
    return intrinsic;
};

});
parcelRequire.register("7Phts", function(module, exports) {
'use strict';
var $5b2ad9cc039efe49$var$undefined;
var $5b2ad9cc039efe49$var$$SyntaxError = SyntaxError;
var $5b2ad9cc039efe49$var$$Function = Function;
var $5b2ad9cc039efe49$var$$TypeError = TypeError;
// eslint-disable-next-line consistent-return
var $5b2ad9cc039efe49$var$getEvalledConstructor = function(expressionSyntax) {
    try {
        return $5b2ad9cc039efe49$var$$Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {
    }
};
var $5b2ad9cc039efe49$var$$gOPD = Object.getOwnPropertyDescriptor;
if ($5b2ad9cc039efe49$var$$gOPD) try {
    $5b2ad9cc039efe49$var$$gOPD({
    }, '');
} catch (e) {
    $5b2ad9cc039efe49$var$$gOPD = null; // this is IE 8, which has a broken gOPD
}
var $5b2ad9cc039efe49$var$throwTypeError = function() {
    throw new $5b2ad9cc039efe49$var$$TypeError();
};
var $5b2ad9cc039efe49$var$ThrowTypeError = $5b2ad9cc039efe49$var$$gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $5b2ad9cc039efe49$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $5b2ad9cc039efe49$var$$gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return $5b2ad9cc039efe49$var$throwTypeError;
        }
    }
}() : $5b2ad9cc039efe49$var$throwTypeError;

var $5b2ad9cc039efe49$var$hasSymbols = (parcelRequire("6oO1A"))();
var $5b2ad9cc039efe49$var$getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var $5b2ad9cc039efe49$var$needsEval = {
};
var $5b2ad9cc039efe49$var$TypedArray = typeof Uint8Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : $5b2ad9cc039efe49$var$getProto(Uint8Array);
var $5b2ad9cc039efe49$var$INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? $5b2ad9cc039efe49$var$undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? $5b2ad9cc039efe49$var$undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': $5b2ad9cc039efe49$var$hasSymbols ? $5b2ad9cc039efe49$var$getProto([][Symbol.iterator]()) : $5b2ad9cc039efe49$var$undefined,
    '%AsyncFromSyncIteratorPrototype%': $5b2ad9cc039efe49$var$undefined,
    '%AsyncFunction%': $5b2ad9cc039efe49$var$needsEval,
    '%AsyncGenerator%': $5b2ad9cc039efe49$var$needsEval,
    '%AsyncGeneratorFunction%': $5b2ad9cc039efe49$var$needsEval,
    '%AsyncIteratorPrototype%': $5b2ad9cc039efe49$var$needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? $5b2ad9cc039efe49$var$undefined : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? $5b2ad9cc039efe49$var$undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? $5b2ad9cc039efe49$var$undefined : FinalizationRegistry,
    '%Function%': $5b2ad9cc039efe49$var$$Function,
    '%GeneratorFunction%': $5b2ad9cc039efe49$var$needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': $5b2ad9cc039efe49$var$hasSymbols ? $5b2ad9cc039efe49$var$getProto($5b2ad9cc039efe49$var$getProto([][Symbol.iterator]())) : $5b2ad9cc039efe49$var$undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : $5b2ad9cc039efe49$var$undefined,
    '%Map%': typeof Map === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !$5b2ad9cc039efe49$var$hasSymbols ? $5b2ad9cc039efe49$var$undefined : $5b2ad9cc039efe49$var$getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !$5b2ad9cc039efe49$var$hasSymbols ? $5b2ad9cc039efe49$var$undefined : $5b2ad9cc039efe49$var$getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? $5b2ad9cc039efe49$var$undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': $5b2ad9cc039efe49$var$hasSymbols ? $5b2ad9cc039efe49$var$getProto(''[Symbol.iterator]()) : $5b2ad9cc039efe49$var$undefined,
    '%Symbol%': $5b2ad9cc039efe49$var$hasSymbols ? Symbol : $5b2ad9cc039efe49$var$undefined,
    '%SyntaxError%': $5b2ad9cc039efe49$var$$SyntaxError,
    '%ThrowTypeError%': $5b2ad9cc039efe49$var$ThrowTypeError,
    '%TypedArray%': $5b2ad9cc039efe49$var$TypedArray,
    '%TypeError%': $5b2ad9cc039efe49$var$$TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? $5b2ad9cc039efe49$var$undefined : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? $5b2ad9cc039efe49$var$undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? $5b2ad9cc039efe49$var$undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? $5b2ad9cc039efe49$var$undefined : WeakSet
};
var $5b2ad9cc039efe49$var$doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = $5b2ad9cc039efe49$var$getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = $5b2ad9cc039efe49$var$getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = $5b2ad9cc039efe49$var$getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen) value = $5b2ad9cc039efe49$var$getProto(gen.prototype);
    }
    $5b2ad9cc039efe49$var$INTRINSICS[name] = value;
    return value;
};
var $5b2ad9cc039efe49$var$LEGACY_ALIASES = {
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

var $5lG15 = parcelRequire("5lG15");

var $3AxJV = parcelRequire("3AxJV");
var $5b2ad9cc039efe49$var$$concat = $5lG15.call(Function.call, Array.prototype.concat);
var $5b2ad9cc039efe49$var$$spliceApply = $5lG15.call(Function.apply, Array.prototype.splice);
var $5b2ad9cc039efe49$var$$replace = $5lG15.call(Function.call, String.prototype.replace);
var $5b2ad9cc039efe49$var$$strSlice = $5lG15.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $5b2ad9cc039efe49$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $5b2ad9cc039efe49$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $5b2ad9cc039efe49$var$stringToPath = function stringToPath(string) {
    var first = $5b2ad9cc039efe49$var$$strSlice(string, 0, 1);
    var last = $5b2ad9cc039efe49$var$$strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $5b2ad9cc039efe49$var$$SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $5b2ad9cc039efe49$var$$SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $5b2ad9cc039efe49$var$$replace(string, $5b2ad9cc039efe49$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $5b2ad9cc039efe49$var$$replace(subString, $5b2ad9cc039efe49$var$reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var $5b2ad9cc039efe49$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($3AxJV($5b2ad9cc039efe49$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $5b2ad9cc039efe49$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if ($3AxJV($5b2ad9cc039efe49$var$INTRINSICS, intrinsicName)) {
        var value = $5b2ad9cc039efe49$var$INTRINSICS[intrinsicName];
        if (value === $5b2ad9cc039efe49$var$needsEval) value = $5b2ad9cc039efe49$var$doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $5b2ad9cc039efe49$var$$TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $5b2ad9cc039efe49$var$$SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $5b2ad9cc039efe49$var$$TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $5b2ad9cc039efe49$var$$TypeError('"allowMissing" argument must be a boolean');
    var parts = $5b2ad9cc039efe49$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = $5b2ad9cc039efe49$var$getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $5b2ad9cc039efe49$var$$spliceApply(parts, $5b2ad9cc039efe49$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $5b2ad9cc039efe49$var$$strSlice(part, 0, 1);
        var last = $5b2ad9cc039efe49$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $5b2ad9cc039efe49$var$$SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if ($3AxJV($5b2ad9cc039efe49$var$INTRINSICS, intrinsicRealName)) value = $5b2ad9cc039efe49$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $5b2ad9cc039efe49$var$$TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($5b2ad9cc039efe49$var$$gOPD && i + 1 >= parts.length) {
                var desc = $5b2ad9cc039efe49$var$$gOPD(value, part);
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
                isOwn = $3AxJV(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $5b2ad9cc039efe49$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRequire.register("6oO1A", function(module, exports) {
'use strict';
var $4a8bc9d44c33ab7c$var$origSymbol = typeof Symbol !== 'undefined' && Symbol;

var $91ncz = parcelRequire("91ncz");
module.exports = function hasNativeSymbols() {
    if (typeof $4a8bc9d44c33ab7c$var$origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof $4a8bc9d44c33ab7c$var$origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return $91ncz();
};

});

parcelRequire.register("5lG15", function(module, exports) {
'use strict';

var $1zy0V = parcelRequire("1zy0V");
module.exports = Function.prototype.bind || $1zy0V;

});
parcelRequire.register("1zy0V", function(module, exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var $125371cc6767e2a9$var$ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var $125371cc6767e2a9$var$slice = Array.prototype.slice;
var $125371cc6767e2a9$var$toStr = Object.prototype.toString;
var $125371cc6767e2a9$var$funcType = '[object Function]';
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || $125371cc6767e2a9$var$toStr.call(target) !== $125371cc6767e2a9$var$funcType) throw new TypeError($125371cc6767e2a9$var$ERROR_MESSAGE + target);
    var args = $125371cc6767e2a9$var$slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat($125371cc6767e2a9$var$slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat($125371cc6767e2a9$var$slice.call(arguments)));
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


parcelRequire.register("3AxJV", function(module, exports) {
'use strict';

var $5lG15 = parcelRequire("5lG15");
module.exports = $5lG15.call(Function.call, Object.prototype.hasOwnProperty);

});


parcelRequire.register("h7y5I", function(module, exports) {
'use strict';

var $5lG15 = parcelRequire("5lG15");

var $7Phts = parcelRequire("7Phts");
var $c76d88e3a4c44046$var$$apply = $7Phts('%Function.prototype.apply%');
var $c76d88e3a4c44046$var$$call = $7Phts('%Function.prototype.call%');
var $c76d88e3a4c44046$var$$reflectApply = $7Phts('%Reflect.apply%', true) || $5lG15.call($c76d88e3a4c44046$var$$call, $c76d88e3a4c44046$var$$apply);
var $c76d88e3a4c44046$var$$gOPD = $7Phts('%Object.getOwnPropertyDescriptor%', true);
var $c76d88e3a4c44046$var$$defineProperty = $7Phts('%Object.defineProperty%', true);
var $c76d88e3a4c44046$var$$max = $7Phts('%Math.max%');
if ($c76d88e3a4c44046$var$$defineProperty) try {
    $c76d88e3a4c44046$var$$defineProperty({
    }, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $c76d88e3a4c44046$var$$defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $c76d88e3a4c44046$var$$reflectApply($5lG15, $c76d88e3a4c44046$var$$call, arguments);
    if ($c76d88e3a4c44046$var$$gOPD && $c76d88e3a4c44046$var$$defineProperty) {
        var desc = $c76d88e3a4c44046$var$$gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $c76d88e3a4c44046$var$$defineProperty(func, 'length', {
            value: 1 + $c76d88e3a4c44046$var$$max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var $c76d88e3a4c44046$var$applyBind = function applyBind() {
    return $c76d88e3a4c44046$var$$reflectApply($5lG15, $c76d88e3a4c44046$var$$apply, arguments);
};
if ($c76d88e3a4c44046$var$$defineProperty) $c76d88e3a4c44046$var$$defineProperty(module.exports, 'apply', {
    value: $c76d88e3a4c44046$var$applyBind
});
else module.exports.apply = $c76d88e3a4c44046$var$applyBind;

});



parcelRequire.register("7qka1", function(module, exports) {
'use strict';
var $567a99972d987ced$var$toStr = Object.prototype.toString;
var $567a99972d987ced$var$fnToStr = Function.prototype.toString;
var $567a99972d987ced$var$isFnRegex = /^\s*(?:function)?\*/;

var $567a99972d987ced$var$hasToStringTag = (parcelRequire("9qqVB"))();
var $567a99972d987ced$var$getProto = Object.getPrototypeOf;
var $567a99972d987ced$var$getGeneratorFunc = function() {
    if (!$567a99972d987ced$var$hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {
    }
};
var $567a99972d987ced$var$GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if ($567a99972d987ced$var$isFnRegex.test($567a99972d987ced$var$fnToStr.call(fn))) return true;
    if (!$567a99972d987ced$var$hasToStringTag) {
        var str = $567a99972d987ced$var$toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!$567a99972d987ced$var$getProto) return false;
    if (typeof $567a99972d987ced$var$GeneratorFunction === 'undefined') {
        var generatorFunc = $567a99972d987ced$var$getGeneratorFunc();
        $567a99972d987ced$var$GeneratorFunction = generatorFunc ? $567a99972d987ced$var$getProto(generatorFunc) : false;
    }
    return $567a99972d987ced$var$getProto(fn) === $567a99972d987ced$var$GeneratorFunction;
};

});

parcelRequire.register("98fQt", function(module, exports) {
'use strict';

var $bOiNd = parcelRequire("bOiNd");

var $aAAwU = parcelRequire("aAAwU");

var $1laoF = parcelRequire("1laoF");
var $6a6126fc664b6c24$var$$toString = $1laoF('Object.prototype.toString');

var $6a6126fc664b6c24$var$hasToStringTag = (parcelRequire("9qqVB"))();
var $6a6126fc664b6c24$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $6a6126fc664b6c24$var$typedArrays = $aAAwU();
var $6a6126fc664b6c24$var$$slice = $1laoF('String.prototype.slice');
var $6a6126fc664b6c24$var$toStrTags = {
};

var $1Bun7 = parcelRequire("1Bun7");
var $6a6126fc664b6c24$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($6a6126fc664b6c24$var$hasToStringTag && $1Bun7 && $6a6126fc664b6c24$var$getPrototypeOf) $bOiNd($6a6126fc664b6c24$var$typedArrays, function(typedArray) {
    if (typeof $6a6126fc664b6c24$var$g[typedArray] === 'function') {
        var arr = new $6a6126fc664b6c24$var$g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = $6a6126fc664b6c24$var$getPrototypeOf(arr);
            var descriptor = $1Bun7(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = $6a6126fc664b6c24$var$getPrototypeOf(proto);
                descriptor = $1Bun7(superProto, Symbol.toStringTag);
            }
            $6a6126fc664b6c24$var$toStrTags[typedArray] = descriptor.get;
        }
    }
});
var $6a6126fc664b6c24$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    $bOiNd($6a6126fc664b6c24$var$toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {
        }
    });
    return foundName;
};

var $fX2rl = parcelRequire("fX2rl");
module.exports = function whichTypedArray(value) {
    if (!$fX2rl(value)) return false;
    if (!$6a6126fc664b6c24$var$hasToStringTag || !(Symbol.toStringTag in value)) return $6a6126fc664b6c24$var$$slice($6a6126fc664b6c24$var$$toString(value), 8, -1);
    return $6a6126fc664b6c24$var$tryTypedArrays(value);
};

});
parcelRequire.register("bOiNd", function(module, exports) {
var $8992f1175275e4e8$var$hasOwn = Object.prototype.hasOwnProperty;
var $8992f1175275e4e8$var$toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if ($8992f1175275e4e8$var$toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if ($8992f1175275e4e8$var$hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

});

parcelRequire.register("aAAwU", function(module, exports) {
'use strict';
var $7b599a3b00731191$var$possibleNames = [
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
var $7b599a3b00731191$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < $7b599a3b00731191$var$possibleNames.length; i++)if (typeof $7b599a3b00731191$var$g[$7b599a3b00731191$var$possibleNames[i]] === 'function') out[out.length] = $7b599a3b00731191$var$possibleNames[i];
    return out;
};

});

parcelRequire.register("1Bun7", function(module, exports) {
'use strict';

var $7Phts = parcelRequire("7Phts");
var $12b0ce5aae507341$var$$gOPD = $7Phts('%Object.getOwnPropertyDescriptor%', true);
if ($12b0ce5aae507341$var$$gOPD) try {
    $12b0ce5aae507341$var$$gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $12b0ce5aae507341$var$$gOPD = null;
}
module.exports = $12b0ce5aae507341$var$$gOPD;

});

parcelRequire.register("fX2rl", function(module, exports) {
'use strict';

var $bOiNd = parcelRequire("bOiNd");

var $aAAwU = parcelRequire("aAAwU");

var $1laoF = parcelRequire("1laoF");
var $b9ce42417f8a82ad$var$$toString = $1laoF('Object.prototype.toString');

var $b9ce42417f8a82ad$var$hasToStringTag = (parcelRequire("9qqVB"))();
var $b9ce42417f8a82ad$var$g = typeof globalThis === 'undefined' ? $parcel$global : globalThis;
var $b9ce42417f8a82ad$var$typedArrays = $aAAwU();
var $b9ce42417f8a82ad$var$$indexOf = $1laoF('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $b9ce42417f8a82ad$var$$slice = $1laoF('String.prototype.slice');
var $b9ce42417f8a82ad$var$toStrTags = {
};

var $1Bun7 = parcelRequire("1Bun7");
var $b9ce42417f8a82ad$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($b9ce42417f8a82ad$var$hasToStringTag && $1Bun7 && $b9ce42417f8a82ad$var$getPrototypeOf) $bOiNd($b9ce42417f8a82ad$var$typedArrays, function(typedArray) {
    var arr = new $b9ce42417f8a82ad$var$g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = $b9ce42417f8a82ad$var$getPrototypeOf(arr);
        var descriptor = $1Bun7(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = $b9ce42417f8a82ad$var$getPrototypeOf(proto);
            descriptor = $1Bun7(superProto, Symbol.toStringTag);
        }
        $b9ce42417f8a82ad$var$toStrTags[typedArray] = descriptor.get;
    }
});
var $b9ce42417f8a82ad$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    $bOiNd($b9ce42417f8a82ad$var$toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!$b9ce42417f8a82ad$var$hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $b9ce42417f8a82ad$var$$slice($b9ce42417f8a82ad$var$$toString(value), 8, -1);
        return $b9ce42417f8a82ad$var$$indexOf($b9ce42417f8a82ad$var$typedArrays, tag) > -1;
    }
    if (!$1Bun7) return false;
    return $b9ce42417f8a82ad$var$tryTypedArrays(value);
};

});



parcelRequire.register("2AavK", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

});

parcelRequire.register("fbl8R", function(module, exports) {
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

var $00f152d068d6e592$exports = {};
const $574bd3723ae64ae2$var$ANSI_BACKGROUND_OFFSET = 10;
const $574bd3723ae64ae2$var$wrapAnsi16 = (offset = 0)=>(code)=>`\u001B[${code + offset}m`
;
const $574bd3723ae64ae2$var$wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`
;
const $574bd3723ae64ae2$var$wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`
;
function $574bd3723ae64ae2$var$assembleStyles() {
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
    styles.color.ansi = $574bd3723ae64ae2$var$wrapAnsi16();
    styles.color.ansi256 = $574bd3723ae64ae2$var$wrapAnsi256();
    styles.color.ansi16m = $574bd3723ae64ae2$var$wrapAnsi16m();
    styles.bgColor.ansi = $574bd3723ae64ae2$var$wrapAnsi16($574bd3723ae64ae2$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = $574bd3723ae64ae2$var$wrapAnsi256($574bd3723ae64ae2$var$ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = $574bd3723ae64ae2$var$wrapAnsi16m($574bd3723ae64ae2$var$ANSI_BACKGROUND_OFFSET);
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
const $574bd3723ae64ae2$var$ansiStyles = $574bd3723ae64ae2$var$assembleStyles();
var $574bd3723ae64ae2$export$2e2bcd8739ae039 = $574bd3723ae64ae2$var$ansiStyles;


let $dde5ca882b3d480f$var$args = [];

try {
    $dde5ca882b3d480f$var$args = Deno.args;
} catch (error) {
    try {
        const [_1, _2, ...argvs] = (parcelRequire("9nb1c")).argv;
        $dde5ca882b3d480f$var$args = argvs;
    } catch (error) {
    }
}
function $dde5ca882b3d480f$export$2e2bcd8739ae039(flag, argv = $dde5ca882b3d480f$var$args) {
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}



function $d20d3b7af9313bfd$var$isatty(fd) {
    if (typeof fd !== "number") return false;
    try {
        return Deno.isatty(fd);
    } catch (_) {
        // if deno failed, try node
        try {
            var tty = (parcelRequire("9u0DI"));
            return tty.isatty(fd);
        } catch (error) {
        }
        return false;
    }
}
let $d20d3b7af9313bfd$var$env = {
};

try {
    $d20d3b7af9313bfd$var$env = Deno.env.toObject();
} catch (error) {
    try {
        $d20d3b7af9313bfd$var$env = (parcelRequire("9nb1c")).env;
    } catch (error) {
    }
}
let $d20d3b7af9313bfd$var$flagForceColor;
if ($dde5ca882b3d480f$export$2e2bcd8739ae039("no-color") || $dde5ca882b3d480f$export$2e2bcd8739ae039("no-colors") || $dde5ca882b3d480f$export$2e2bcd8739ae039("color=false") || $dde5ca882b3d480f$export$2e2bcd8739ae039("color=never")) $d20d3b7af9313bfd$var$flagForceColor = 0;
else if ($dde5ca882b3d480f$export$2e2bcd8739ae039("color") || $dde5ca882b3d480f$export$2e2bcd8739ae039("colors") || $dde5ca882b3d480f$export$2e2bcd8739ae039("color=true") || $dde5ca882b3d480f$export$2e2bcd8739ae039("color=always")) $d20d3b7af9313bfd$var$flagForceColor = 1;
function $d20d3b7af9313bfd$var$envForceColor() {
    if ("FORCE_COLOR" in $d20d3b7af9313bfd$var$env) {
        if ($d20d3b7af9313bfd$var$env.FORCE_COLOR === "true") return 1;
        if ($d20d3b7af9313bfd$var$env.FORCE_COLOR === "false") return 0;
        return $d20d3b7af9313bfd$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt($d20d3b7af9313bfd$var$env.FORCE_COLOR, 10), 3);
    }
}
function $d20d3b7af9313bfd$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}

function $d20d3b7af9313bfd$var$_supportsColor(haveStream, { streamIsTTY: streamIsTTY , sniffFlags: sniffFlags = true  } = {
}) {
    const noFlagForceColor = $d20d3b7af9313bfd$var$envForceColor();
    if (noFlagForceColor !== undefined) $d20d3b7af9313bfd$var$flagForceColor = noFlagForceColor;
    const forceColor = sniffFlags ? $d20d3b7af9313bfd$var$flagForceColor : noFlagForceColor;
    if (forceColor === 0) return 0;
    if (sniffFlags) {
        if ($dde5ca882b3d480f$export$2e2bcd8739ae039("color=16m") || $dde5ca882b3d480f$export$2e2bcd8739ae039("color=full") || $dde5ca882b3d480f$export$2e2bcd8739ae039("color=truecolor")) return 3;
        if ($dde5ca882b3d480f$export$2e2bcd8739ae039("color=256")) return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) return 0;
    const min = forceColor || 0;
    if ($d20d3b7af9313bfd$var$env.TERM === "dumb") return min;
    let os;
    try {
        os = Deno.build.os;
    } catch (error) {
        try {
            os = (parcelRequire("9nb1c")).platform;
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
    if ("CI" in $d20d3b7af9313bfd$var$env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE",
            "DRONE", 
        ].some((sign)=>sign in $d20d3b7af9313bfd$var$env
        ) || $d20d3b7af9313bfd$var$env.CI_NAME === "codeship") return 1;
        return min;
    }
    if ("TEAMCITY_VERSION" in $d20d3b7af9313bfd$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($d20d3b7af9313bfd$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($d20d3b7af9313bfd$var$env.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in $d20d3b7af9313bfd$var$env) {
        const version = Number.parseInt(($d20d3b7af9313bfd$var$env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch($d20d3b7af9313bfd$var$env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test($d20d3b7af9313bfd$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($d20d3b7af9313bfd$var$env.TERM)) return 1;
    if ("COLORTERM" in $d20d3b7af9313bfd$var$env) return 1;
    return min;
}
function $d20d3b7af9313bfd$export$6f279ba00f1459de(stream, options = {
}) {
    const level = $d20d3b7af9313bfd$var$_supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options
    });
    return $d20d3b7af9313bfd$var$translateLevel(level);
}
const $d20d3b7af9313bfd$var$supportsColor = {
    stdout: $d20d3b7af9313bfd$export$6f279ba00f1459de({
        isTTY: $d20d3b7af9313bfd$var$isatty(1)
    }),
    stderr: $d20d3b7af9313bfd$export$6f279ba00f1459de({
        isTTY: $d20d3b7af9313bfd$var$isatty(2)
    })
};
var $d20d3b7af9313bfd$export$2e2bcd8739ae039 = $d20d3b7af9313bfd$var$supportsColor;


function $4045b2b0c9c615ca$export$9300dfb554c6c407(string, substring, replacer) {
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
function $4045b2b0c9c615ca$export$ecabf4aff2e9764(string, prefix, postfix, index) {
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


const $3b2637e3c7885cbd$var$TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const $3b2637e3c7885cbd$var$STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const $3b2637e3c7885cbd$var$STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const $3b2637e3c7885cbd$var$ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
const $3b2637e3c7885cbd$var$ESCAPES = new Map([
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
function $3b2637e3c7885cbd$var$unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(Number.parseInt(c.slice(1), 16));
    if (u && bracket) return String.fromCodePoint(Number.parseInt(c.slice(2, -1), 16));
    return $3b2637e3c7885cbd$var$ESCAPES.get(c) || c;
}
function $3b2637e3c7885cbd$var$parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) results.push(number);
        else if (matches = chunk.match($3b2637e3c7885cbd$var$STRING_REGEX)) results.push(matches[2].replace($3b2637e3c7885cbd$var$ESCAPE_REGEX, (m, escape, character)=>escape ? $3b2637e3c7885cbd$var$unescape(escape) : character
        ));
        else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
    return results;
}
function $3b2637e3c7885cbd$var$parseStyle(style) {
    $3b2637e3c7885cbd$var$STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = $3b2637e3c7885cbd$var$STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = $3b2637e3c7885cbd$var$parseArguments(name, matches[2]);
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
function $3b2637e3c7885cbd$var$buildStyle(chalk, styles) {
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
function $3b2637e3c7885cbd$export$2e2bcd8739ae039(chalk, temporary) {
    const styles = [];
    const chunks = [];
    let chunk = [];
    // eslint-disable-next-line max-params
    temporary.replace($3b2637e3c7885cbd$var$TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) chunk.push($3b2637e3c7885cbd$var$unescape(escapeCharacter));
        else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : $3b2637e3c7885cbd$var$buildStyle(chalk, styles)(string));
            styles.push({
                inverse: inverse,
                styles: $3b2637e3c7885cbd$var$parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
            chunks.push($3b2637e3c7885cbd$var$buildStyle(chalk, styles)(chunk.join('')));
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


const { stdout: $7de8a094d06a5fd0$export$fcbe44f5d6fcebd , stderr: $7de8a094d06a5fd0$export$8107055a758cd2bd  } = $d20d3b7af9313bfd$export$2e2bcd8739ae039;
const { isArray: $7de8a094d06a5fd0$var$isArray  } = Array;
const $7de8a094d06a5fd0$var$GENERATOR = Symbol('GENERATOR');
const $7de8a094d06a5fd0$var$STYLER = Symbol('STYLER');
const $7de8a094d06a5fd0$var$IS_EMPTY = Symbol('IS_EMPTY');
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const $7de8a094d06a5fd0$var$levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const $7de8a094d06a5fd0$var$styles = Object.create(null);
const $7de8a094d06a5fd0$var$applyOptions = (object, options = {
})=>{
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
    // Detect level if not set manually
    const colorLevel = $7de8a094d06a5fd0$export$fcbe44f5d6fcebd ? $7de8a094d06a5fd0$export$fcbe44f5d6fcebd.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class $7de8a094d06a5fd0$export$79544b80b91c2197 {
    constructor(options){
        // eslint-disable-next-line no-constructor-return
        return $7de8a094d06a5fd0$var$chalkFactory(options);
    }
}
const $7de8a094d06a5fd0$var$chalkFactory = (options)=>{
    const chalk = {
    };
    $7de8a094d06a5fd0$var$applyOptions(chalk, options);
    chalk.template = (...arguments_)=>$7de8a094d06a5fd0$var$chalkTag(chalk.template, ...arguments_)
    ;
    Object.setPrototypeOf(chalk, $7de8a094d06a5fd0$var$createChalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.Chalk = $7de8a094d06a5fd0$export$79544b80b91c2197;
    return chalk.template;
};
function $7de8a094d06a5fd0$var$createChalk(options) {
    return $7de8a094d06a5fd0$var$chalkFactory(options);
}
Object.setPrototypeOf($7de8a094d06a5fd0$var$createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries($574bd3723ae64ae2$export$2e2bcd8739ae039))$7de8a094d06a5fd0$var$styles[styleName] = {
    get () {
        const builder = $7de8a094d06a5fd0$var$createBuilder(this, $7de8a094d06a5fd0$var$createStyler(style.open, style.close, this[$7de8a094d06a5fd0$var$STYLER]), this[$7de8a094d06a5fd0$var$IS_EMPTY]);
        Object.defineProperty(this, styleName, {
            value: builder
        });
        return builder;
    }
};
$7de8a094d06a5fd0$var$styles.visible = {
    get () {
        const builder = $7de8a094d06a5fd0$var$createBuilder(this, this[$7de8a094d06a5fd0$var$STYLER], true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const $7de8a094d06a5fd0$var$getModelAnsi = (model1, level, type, ...arguments_)=>{
    if (model1 === 'rgb') {
        if (level === 'ansi16m') return $574bd3723ae64ae2$export$2e2bcd8739ae039[type].ansi16m(...arguments_);
        if (level === 'ansi256') return $574bd3723ae64ae2$export$2e2bcd8739ae039[type].ansi256($574bd3723ae64ae2$export$2e2bcd8739ae039.rgbToAnsi256(...arguments_));
        return $574bd3723ae64ae2$export$2e2bcd8739ae039[type].ansi($574bd3723ae64ae2$export$2e2bcd8739ae039.rgbToAnsi(...arguments_));
    }
    if (model1 === 'hex') return $7de8a094d06a5fd0$var$getModelAnsi('rgb', level, type, ...$574bd3723ae64ae2$export$2e2bcd8739ae039.hexToRgb(...arguments_));
    return $574bd3723ae64ae2$export$2e2bcd8739ae039[type][model1](...arguments_);
};
const $7de8a094d06a5fd0$var$usedModels = [
    'rgb',
    'hex',
    'ansi256'
];
for (const model of $7de8a094d06a5fd0$var$usedModels){
    $7de8a094d06a5fd0$var$styles[model] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $7de8a094d06a5fd0$var$createStyler($7de8a094d06a5fd0$var$getModelAnsi(model, $7de8a094d06a5fd0$var$levelMapping[level], 'color', ...arguments_), $574bd3723ae64ae2$export$2e2bcd8739ae039.color.close, this[$7de8a094d06a5fd0$var$STYLER]);
                return $7de8a094d06a5fd0$var$createBuilder(this, styler, this[$7de8a094d06a5fd0$var$IS_EMPTY]);
            };
        }
    };
    const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
    $7de8a094d06a5fd0$var$styles[bgModel] = {
        get () {
            const { level: level  } = this;
            return function(...arguments_) {
                const styler = $7de8a094d06a5fd0$var$createStyler($7de8a094d06a5fd0$var$getModelAnsi(model, $7de8a094d06a5fd0$var$levelMapping[level], 'bgColor', ...arguments_), $574bd3723ae64ae2$export$2e2bcd8739ae039.bgColor.close, this[$7de8a094d06a5fd0$var$STYLER]);
                return $7de8a094d06a5fd0$var$createBuilder(this, styler, this[$7de8a094d06a5fd0$var$IS_EMPTY]);
            };
        }
    };
}
const $7de8a094d06a5fd0$var$proto = Object.defineProperties(()=>{
}, {
    ...$7de8a094d06a5fd0$var$styles,
    level: {
        enumerable: true,
        get () {
            return this[$7de8a094d06a5fd0$var$GENERATOR].level;
        },
        set (level) {
            this[$7de8a094d06a5fd0$var$GENERATOR].level = level;
        }
    }
});
const $7de8a094d06a5fd0$var$createStyler = (open, close, parent)=>{
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
const $7de8a094d06a5fd0$var$createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        if ($7de8a094d06a5fd0$var$isArray(arguments_[0]) && $7de8a094d06a5fd0$var$isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
        return $7de8a094d06a5fd0$var$applyStyle(builder, $7de8a094d06a5fd0$var$chalkTag(builder, ...arguments_));
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return $7de8a094d06a5fd0$var$applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // We alter the prototype because we must return a function, but there is
    // no way to create a function with a different prototype
    Object.setPrototypeOf(builder, $7de8a094d06a5fd0$var$proto);
    builder[$7de8a094d06a5fd0$var$GENERATOR] = self;
    builder[$7de8a094d06a5fd0$var$STYLER] = _styler;
    builder[$7de8a094d06a5fd0$var$IS_EMPTY] = _isEmpty;
    return builder;
};
const $7de8a094d06a5fd0$var$applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) return self[$7de8a094d06a5fd0$var$IS_EMPTY] ? '' : string;
    let styler = self[$7de8a094d06a5fd0$var$STYLER];
    if (styler === undefined) return string;
    const { openAll: openAll , closeAll: closeAll  } = styler;
    if (string.includes('\u001B')) while(styler !== undefined){
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        string = $4045b2b0c9c615ca$export$9300dfb554c6c407(string, styler.close, styler.open);
        styler = styler.parent;
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) string = $4045b2b0c9c615ca$export$ecabf4aff2e9764(string, closeAll, openAll, lfIndex);
    return openAll + string + closeAll;
};
const $7de8a094d06a5fd0$var$chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!$7de8a094d06a5fd0$var$isArray(firstString) || !$7de8a094d06a5fd0$var$isArray(firstString.raw)) // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return strings.join(' ');
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    return $3b2637e3c7885cbd$export$2e2bcd8739ae039(chalk, parts.join(''));
};
Object.defineProperties($7de8a094d06a5fd0$var$createChalk.prototype, $7de8a094d06a5fd0$var$styles);
const $7de8a094d06a5fd0$var$chalk = $7de8a094d06a5fd0$var$createChalk();
const $7de8a094d06a5fd0$export$8cef8185e551afa5 = $7de8a094d06a5fd0$var$createChalk({
    level: $7de8a094d06a5fd0$export$8107055a758cd2bd ? $7de8a094d06a5fd0$export$8107055a758cd2bd.level : 0
});
var $7de8a094d06a5fd0$export$2e2bcd8739ae039 = $7de8a094d06a5fd0$var$chalk;


var $00f152d068d6e592$require$es6Chalk = $7de8a094d06a5fd0$export$2e2bcd8739ae039;
var $66b8358f5cf98246$exports = {};
var $9c0477a45717219f$exports = {};

var $9nb1c = parcelRequire("9nb1c");
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
var $9c0477a45717219f$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {
    };
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $9c0477a45717219f$var$formatRegExp = /%[sdj%]/g;
$9c0477a45717219f$exports.format = function(f) {
    if (!$9c0477a45717219f$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($9c0477a45717219f$var$inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($9c0477a45717219f$var$formatRegExp, function(x) {
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
    for(var x1 = args[i]; i < len; x1 = args[++i])if ($9c0477a45717219f$var$isNull(x1) || !$9c0477a45717219f$var$isObject(x1)) str += ' ' + x1;
    else str += ' ' + $9c0477a45717219f$var$inspect(x1);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
$9c0477a45717219f$exports.deprecate = function(fn, msg) {
    if (typeof $9nb1c !== 'undefined' && $9nb1c.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof $9nb1c === 'undefined') return function() {
        return $9c0477a45717219f$exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if ($9nb1c.throwDeprecation) throw new Error(msg);
            else if ($9nb1c.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var $9c0477a45717219f$var$debugs = {
};
var $9c0477a45717219f$var$debugEnvRegex = /^$/;
var $9c0477a45717219f$var$debugEnv;
$9c0477a45717219f$exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$9c0477a45717219f$var$debugs[set]) {
        if ($9c0477a45717219f$var$debugEnvRegex.test(set)) {
            var pid = $9nb1c.pid;
            $9c0477a45717219f$var$debugs[set] = function() {
                var msg = $9c0477a45717219f$exports.format.apply($9c0477a45717219f$exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else $9c0477a45717219f$var$debugs[set] = function() {
        };
    }
    return $9c0477a45717219f$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $9c0477a45717219f$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $9c0477a45717219f$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($9c0477a45717219f$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    $9c0477a45717219f$exports._extend(ctx, opts);
    // set default options
    if ($9c0477a45717219f$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($9c0477a45717219f$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($9c0477a45717219f$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($9c0477a45717219f$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $9c0477a45717219f$var$stylizeWithColor;
    return $9c0477a45717219f$var$formatValue(ctx, obj, ctx.depth);
}
$9c0477a45717219f$exports.inspect = $9c0477a45717219f$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$9c0477a45717219f$var$inspect.colors = {
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
$9c0477a45717219f$var$inspect.styles = {
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
function $9c0477a45717219f$var$stylizeWithColor(str, styleType) {
    var style = $9c0477a45717219f$var$inspect.styles[styleType];
    if (style) return '\u001b[' + $9c0477a45717219f$var$inspect.colors[style][0] + 'm' + str + '\u001b[' + $9c0477a45717219f$var$inspect.colors[style][1] + 'm';
    else return str;
}
function $9c0477a45717219f$var$stylizeNoColor(str, styleType) {
    return str;
}
function $9c0477a45717219f$var$arrayToHash(array) {
    var hash = {
    };
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $9c0477a45717219f$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $9c0477a45717219f$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== $9c0477a45717219f$exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$9c0477a45717219f$var$isString(ret)) ret = $9c0477a45717219f$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $9c0477a45717219f$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $9c0477a45717219f$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($9c0477a45717219f$var$isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return $9c0477a45717219f$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($9c0477a45717219f$var$isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if ($9c0477a45717219f$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if ($9c0477a45717219f$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if ($9c0477a45717219f$var$isError(value)) return $9c0477a45717219f$var$formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if ($9c0477a45717219f$var$isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if ($9c0477a45717219f$var$isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if ($9c0477a45717219f$var$isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($9c0477a45717219f$var$isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($9c0477a45717219f$var$isError(value)) base = ' ' + $9c0477a45717219f$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($9c0477a45717219f$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $9c0477a45717219f$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $9c0477a45717219f$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $9c0477a45717219f$var$reduceToSingleString(output, base, braces);
}
function $9c0477a45717219f$var$formatPrimitive(ctx, value) {
    if ($9c0477a45717219f$var$isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if ($9c0477a45717219f$var$isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if ($9c0477a45717219f$var$isNumber(value)) return ctx.stylize('' + value, 'number');
    if ($9c0477a45717219f$var$isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if ($9c0477a45717219f$var$isNull(value)) return ctx.stylize('null', 'null');
}
function $9c0477a45717219f$var$formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function $9c0477a45717219f$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($9c0477a45717219f$var$hasOwnProperty(value, String(i))) output.push($9c0477a45717219f$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($9c0477a45717219f$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $9c0477a45717219f$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!$9c0477a45717219f$var$hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($9c0477a45717219f$var$isNull(recurseTimes)) str = $9c0477a45717219f$var$formatValue(ctx, desc.value, null);
            else str = $9c0477a45717219f$var$formatValue(ctx, desc.value, recurseTimes - 1);
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
    if ($9c0477a45717219f$var$isUndefined(name)) {
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
function $9c0477a45717219f$var$reduceToSingleString(output, base, braces) {
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
$9c0477a45717219f$exports.types = (parcelRequire("cDsRi"));
function $9c0477a45717219f$var$isArray(ar) {
    return Array.isArray(ar);
}
$9c0477a45717219f$exports.isArray = $9c0477a45717219f$var$isArray;
function $9c0477a45717219f$var$isBoolean(arg) {
    return typeof arg === 'boolean';
}
$9c0477a45717219f$exports.isBoolean = $9c0477a45717219f$var$isBoolean;
function $9c0477a45717219f$var$isNull(arg) {
    return arg === null;
}
$9c0477a45717219f$exports.isNull = $9c0477a45717219f$var$isNull;
function $9c0477a45717219f$var$isNullOrUndefined(arg) {
    return arg == null;
}
$9c0477a45717219f$exports.isNullOrUndefined = $9c0477a45717219f$var$isNullOrUndefined;
function $9c0477a45717219f$var$isNumber(arg) {
    return typeof arg === 'number';
}
$9c0477a45717219f$exports.isNumber = $9c0477a45717219f$var$isNumber;
function $9c0477a45717219f$var$isString(arg) {
    return typeof arg === 'string';
}
$9c0477a45717219f$exports.isString = $9c0477a45717219f$var$isString;
function $9c0477a45717219f$var$isSymbol(arg) {
    return typeof arg === 'symbol';
}
$9c0477a45717219f$exports.isSymbol = $9c0477a45717219f$var$isSymbol;
function $9c0477a45717219f$var$isUndefined(arg) {
    return arg === void 0;
}
$9c0477a45717219f$exports.isUndefined = $9c0477a45717219f$var$isUndefined;
function $9c0477a45717219f$var$isRegExp(re) {
    return $9c0477a45717219f$var$isObject(re) && $9c0477a45717219f$var$objectToString(re) === '[object RegExp]';
}
$9c0477a45717219f$exports.isRegExp = $9c0477a45717219f$var$isRegExp;
$9c0477a45717219f$exports.types.isRegExp = $9c0477a45717219f$var$isRegExp;
function $9c0477a45717219f$var$isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
$9c0477a45717219f$exports.isObject = $9c0477a45717219f$var$isObject;
function $9c0477a45717219f$var$isDate(d) {
    return $9c0477a45717219f$var$isObject(d) && $9c0477a45717219f$var$objectToString(d) === '[object Date]';
}
$9c0477a45717219f$exports.isDate = $9c0477a45717219f$var$isDate;
$9c0477a45717219f$exports.types.isDate = $9c0477a45717219f$var$isDate;
function $9c0477a45717219f$var$isError(e) {
    return $9c0477a45717219f$var$isObject(e) && ($9c0477a45717219f$var$objectToString(e) === '[object Error]' || e instanceof Error);
}
$9c0477a45717219f$exports.isError = $9c0477a45717219f$var$isError;
$9c0477a45717219f$exports.types.isNativeError = $9c0477a45717219f$var$isError;
function $9c0477a45717219f$var$isFunction(arg) {
    return typeof arg === 'function';
}
$9c0477a45717219f$exports.isFunction = $9c0477a45717219f$var$isFunction;
function $9c0477a45717219f$var$isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
$9c0477a45717219f$exports.isPrimitive = $9c0477a45717219f$var$isPrimitive;

$9c0477a45717219f$exports.isBuffer = (parcelRequire("2AavK"));
function $9c0477a45717219f$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $9c0477a45717219f$var$pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var $9c0477a45717219f$var$months = [
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
function $9c0477a45717219f$var$timestamp() {
    var d = new Date();
    var time = [
        $9c0477a45717219f$var$pad(d.getHours()),
        $9c0477a45717219f$var$pad(d.getMinutes()),
        $9c0477a45717219f$var$pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        $9c0477a45717219f$var$months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
$9c0477a45717219f$exports.log = function() {
    console.log('%s - %s', $9c0477a45717219f$var$timestamp(), $9c0477a45717219f$exports.format.apply($9c0477a45717219f$exports, arguments));
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
 */ $9c0477a45717219f$exports.inherits = (parcelRequire("fbl8R"));
$9c0477a45717219f$exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$9c0477a45717219f$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $9c0477a45717219f$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $9c0477a45717219f$var$kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
$9c0477a45717219f$exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if ($9c0477a45717219f$var$kCustomPromisifiedSymbol && original[$9c0477a45717219f$var$kCustomPromisifiedSymbol]) {
        var fn = original[$9c0477a45717219f$var$kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $9c0477a45717219f$var$kCustomPromisifiedSymbol, {
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
    if ($9c0477a45717219f$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $9c0477a45717219f$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $9c0477a45717219f$var$getOwnPropertyDescriptors(original));
};
$9c0477a45717219f$exports.promisify.custom = $9c0477a45717219f$var$kCustomPromisifiedSymbol;
function $9c0477a45717219f$var$callbackifyOnRejected(reason, cb) {
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
function $9c0477a45717219f$var$callbackify(original) {
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
            $9nb1c.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            $9nb1c.nextTick($9c0477a45717219f$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $9c0477a45717219f$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
$9c0477a45717219f$exports.callbackify = $9c0477a45717219f$var$callbackify;



$66b8358f5cf98246$exports = (chalk)=>{
    const realConsole = globalThis.console;
    const isBrowserContext = typeof document != 'undefined' && typeof window != 'undefined';
    // patch the built in console to allow classes to override output
    const originalThing1 = realConsole;
    const proxySymbol1 = Symbol.for('Proxy');
    const thisProxySymbol1 = Symbol('thisProxy');
    const symbolForConsoleLog = Symbol.for("console.log");
    globalThis.console = new Proxy(originalThing1, {
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
        get (original, key, ...args1) {
            if (key == proxySymbol1 || key == thisProxySymbol1) return true;
            // if logging, then 
            if (key == "log") return (...args)=>{
                realConsole.log(...args.map((each)=>{
                    if (each instanceof Object && each[symbolForConsoleLog] instanceof Function) return each[symbolForConsoleLog]();
                    return each;
                }));
            };
            return Reflect.get(original, key, ...args1);
        },
        set (original, key, ...args) {
            if (key == proxySymbol1 || key == thisProxySymbol1) return;
            return Reflect.set(original, key, ...args);
        }
    });
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
                this[$9c0477a45717219f$exports.inspect.custom] = this.toString;
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
    class ConsoleObject extends LoggerObject {
        constructor(){
            super();
            // 
            // only difference: proxy object executes .log() when called as a function
            // 
            const ifStyleCalledAsMethod = (...args)=>{
                let styler = chalk;
                while(this.attributeBuffer.length > 0)styler = styler[this.attributeBuffer.shift()];
                const string = styler(...args);
                this.stringBuffer.push(string);
                this.log();
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
                this[$9c0477a45717219f$exports.inspect.custom] = this.toString;
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
        get howdy () {
            if (!isBrowserContext) {
                console.dim.blackBright.bgWhite(`  --------------------------------------------------------------------------------  `);
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                              ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("   __    __                                      __              /\\\`\\         ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("  /\\ \\  /\\ \\                                    /\\ \\             \\ \\ \\        ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("  \\ \\ \\_\`_\\ \\                                   \\ \\ \\             \\ \\ \\       ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("   \\ \\  ___  \\     ,------,   /\\~\\ /\\~\\/\\~\\     ,\\_\\ \\     __  __  \\ \\ \\      ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("    \\ \\ \\_/ \\ \\   /\\ .---, \\  \\ \\ \\\\ \\ \\ \\ \\   / .__, \\   /\\ \\/\\ \\  \\ \\_\\     ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("     \\ \\ \\ \\ \\ \\  \\ \\ \\___\\ \\  \\ \\ \\_/  \\_/ \\ /\\ \\  /\\ \\  \\ \\ \\_\\ \\  \\/./     ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("      \\ \\_\\ \\ \\_\\  \\ \\______/   \\ \\____^____/ \\ \\_____,_\\  \\/\`____ \\  /\\\`\`\`\\  ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("       \\/_/  \\/_/   \`._____/     \\/___//___/   \\/___,_ /    \`/___/\\ \\ \\/___/  ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                 \\_| \\        ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                /\\___/        ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                \\/__/         ").bgWhite(" | "));
                console.log(vibrance.bgWhite(" | ").bold.white.bgRed("                                                                              ").bgWhite(" | "));
                console.dim.blackBright.bgWhite(`  --------------------------------------------------------------------------------  `);
            } else console.log(`%c${"Howdy!"}`, `
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
                    `);
        },
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
        clearColorsFrom (string) {
            // https://stackoverflow.com/questions/17998978/removing-colors-from-output
            return string.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
        },
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
        console: console
    };
    // add self reference
    vibrance.vibrance = vibrance;
    return vibrance;
};


// use es chalk
$00f152d068d6e592$exports = $66b8358f5cf98246$exports($00f152d068d6e592$require$es6Chalk);


export {$00f152d068d6e592$exports as default};
//# sourceMappingURL=module.js.map
