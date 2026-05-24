var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name2) {
  return new Error(`[unenv] ${name2} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name2) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name2);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name2) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name2} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name2, options) {
        this.name = name2;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name2, type) {
        return this._entries.filter((e) => e.name === name2 && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name2, options) {
        const entry = new PerformanceMark(name2, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2._4825f8c5ffc9123198af9b19d7829fed/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2._4825f8c5ffc9123198af9b19d7829fed/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2._4825f8c5ffc9123198af9b19d7829fed/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2._4825f8c5ffc9123198af9b19d7829fed/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x2, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2._4825f8c5ffc9123198af9b19d7829fed/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2._4825f8c5ffc9123198af9b19d7829fed/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/.pnpm/postgres-array@3.0.4/node_modules/postgres-array/index.js
var require_postgres_array = __commonJS({
  "node_modules/.pnpm/postgres-array@3.0.4/node_modules/postgres-array/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var BACKSLASH = "\\";
    var DQUOT = '"';
    var LBRACE = "{";
    var RBRACE = "}";
    var LBRACKET = "[";
    var EQUALS = "=";
    var COMMA = ",";
    var NULL_STRING = "NULL";
    function makeParseArrayWithTransform(transform) {
      const haveTransform = transform != null;
      return /* @__PURE__ */ __name(function parseArray3(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
          return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
          throw new Error("Invalid array text - must end with }");
        }
        let position = 0;
        if (str[position] === LBRACKET) {
          position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
          throw new Error("Invalid array text - must start with {");
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = "";
        let expectValue = true;
        for (; position < rbraceIndex; ++position) {
          let char = str[position];
          if (char === DQUOT) {
            currentStringStart = ++position;
            let dquot = str.indexOf(DQUOT, currentStringStart);
            let backSlash = str.indexOf(BACKSLASH, currentStringStart);
            while (backSlash !== -1 && backSlash < dquot) {
              position = backSlash;
              const part2 = str.slice(currentStringStart, position);
              currentString += part2;
              currentStringStart = ++position;
              if (dquot === position++) {
                dquot = str.indexOf(DQUOT, position);
              }
              backSlash = str.indexOf(BACKSLASH, position);
            }
            position = dquot;
            const part = str.slice(currentStringStart, position);
            currentString += part;
            current.push(haveTransform ? transform(currentString) : currentString);
            currentString = "";
            expectValue = false;
          } else if (char === LBRACE) {
            const newArray = [];
            current.push(newArray);
            stack.push(current);
            current = newArray;
            currentStringStart = position + 1;
            expectValue = true;
          } else if (char === COMMA) {
            expectValue = true;
          } else if (char === RBRACE) {
            expectValue = false;
            const arr = stack.pop();
            if (arr === void 0) {
              throw new Error("Invalid array text - too many '}'");
            }
            current = arr;
          } else if (expectValue) {
            currentStringStart = position;
            while ((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex) {
              ++position;
            }
            const part = str.slice(currentStringStart, position--);
            current.push(
              part === NULL_STRING ? null : haveTransform ? transform(part) : part
            );
            expectValue = false;
          } else {
            throw new Error("Was expecting delimeter");
          }
        }
        return output;
      }, "parseArray");
    }
    __name(makeParseArrayWithTransform, "makeParseArrayWithTransform");
    var parseArray2 = makeParseArrayWithTransform();
    exports.parse = (source, transform) => transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray2(source);
  }
});

// node_modules/.pnpm/@prisma+client-runtime-utils@7.8.0/node_modules/@prisma/client-runtime-utils/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/@prisma+client-runtime-utils@7.8.0/node_modules/@prisma/client-runtime-utils/dist/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name2 in all)
        __defProp3(target, name2, { get: all[name2], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp3(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod2) => __copyProps2(__defProp3({}, "__esModule", { value: true }), mod2), "__toCommonJS");
    var index_exports = {};
    __export3(index_exports, {
      AnyNull: /* @__PURE__ */ __name(() => AnyNull2, "AnyNull"),
      AnyNullClass: /* @__PURE__ */ __name(() => AnyNullClass, "AnyNullClass"),
      DbNull: /* @__PURE__ */ __name(() => DbNull2, "DbNull"),
      DbNullClass: /* @__PURE__ */ __name(() => DbNullClass, "DbNullClass"),
      Decimal: /* @__PURE__ */ __name(() => Decimal2, "Decimal"),
      JsonNull: /* @__PURE__ */ __name(() => JsonNull2, "JsonNull"),
      JsonNullClass: /* @__PURE__ */ __name(() => JsonNullClass, "JsonNullClass"),
      NullTypes: /* @__PURE__ */ __name(() => NullTypes2, "NullTypes"),
      ObjectEnumValue: /* @__PURE__ */ __name(() => ObjectEnumValue2, "ObjectEnumValue"),
      PrismaClientInitializationError: /* @__PURE__ */ __name(() => PrismaClientInitializationError2, "PrismaClientInitializationError"),
      PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => PrismaClientKnownRequestError2, "PrismaClientKnownRequestError"),
      PrismaClientRustError: /* @__PURE__ */ __name(() => PrismaClientRustError, "PrismaClientRustError"),
      PrismaClientRustPanicError: /* @__PURE__ */ __name(() => PrismaClientRustPanicError2, "PrismaClientRustPanicError"),
      PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => PrismaClientUnknownRequestError2, "PrismaClientUnknownRequestError"),
      PrismaClientValidationError: /* @__PURE__ */ __name(() => PrismaClientValidationError2, "PrismaClientValidationError"),
      Sql: /* @__PURE__ */ __name(() => Sql2, "Sql"),
      empty: /* @__PURE__ */ __name(() => empty2, "empty"),
      hasBatchIndex: /* @__PURE__ */ __name(() => hasBatchIndex, "hasBatchIndex"),
      isAnyNull: /* @__PURE__ */ __name(() => isAnyNull2, "isAnyNull"),
      isDbNull: /* @__PURE__ */ __name(() => isDbNull2, "isDbNull"),
      isJsonNull: /* @__PURE__ */ __name(() => isJsonNull2, "isJsonNull"),
      isObjectEnumValue: /* @__PURE__ */ __name(() => isObjectEnumValue2, "isObjectEnumValue"),
      join: /* @__PURE__ */ __name(() => join2, "join"),
      raw: /* @__PURE__ */ __name(() => raw3, "raw"),
      sql: /* @__PURE__ */ __name(() => sql, "sql")
    });
    module.exports = __toCommonJS(index_exports);
    function hasBatchIndex(value) {
      return typeof value["batchRequestIdx"] === "number";
    }
    __name(hasBatchIndex, "hasBatchIndex");
    function setClassName(classObject, name2) {
      Object.defineProperty(classObject, "name", {
        value: name2,
        configurable: true
      });
    }
    __name(setClassName, "setClassName");
    var PrismaClientInitializationError2 = class _PrismaClientInitializationError extends Error {
      static {
        __name(this, "_PrismaClientInitializationError");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(message, clientVersion, errorCode) {
        super(message);
        this.name = "PrismaClientInitializationError";
        this.clientVersion = clientVersion;
        this.errorCode = errorCode;
        Error.captureStackTrace(_PrismaClientInitializationError);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    setClassName(PrismaClientInitializationError2, "PrismaClientInitializationError");
    var PrismaClientKnownRequestError2 = class extends Error {
      static {
        __name(this, "PrismaClientKnownRequestError");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientKnownRequestError";
        this.code = code;
        this.clientVersion = clientVersion;
        this.meta = meta;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          enumerable: false,
          writable: true
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    setClassName(PrismaClientKnownRequestError2, "PrismaClientKnownRequestError");
    function getBacktrace(log32) {
      if (log32.fields?.message) {
        let str = log32.fields?.message;
        if (log32.fields?.file) {
          str += ` in ${log32.fields.file}`;
          if (log32.fields?.line) {
            str += `:${log32.fields.line}`;
          }
          if (log32.fields?.column) {
            str += `:${log32.fields.column}`;
          }
        }
        if (log32.fields?.reason) {
          str += `
${log32.fields?.reason}`;
        }
        return str;
      }
      return "Unknown error";
    }
    __name(getBacktrace, "getBacktrace");
    function isPanic(err) {
      return err.fields?.message === "PANIC";
    }
    __name(isPanic, "isPanic");
    var PrismaClientRustError = class extends Error {
      static {
        __name(this, "PrismaClientRustError");
      }
      clientVersion;
      _isPanic;
      constructor({ clientVersion, error: error3 }) {
        const backtrace = getBacktrace(error3);
        super(backtrace ?? "Unknown error");
        this._isPanic = isPanic(error3);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustError";
      }
      isPanic() {
        return this._isPanic;
      }
    };
    setClassName(PrismaClientRustError, "PrismaClientRustError");
    var PrismaClientRustPanicError2 = class extends Error {
      static {
        __name(this, "PrismaClientRustPanicError");
      }
      clientVersion;
      constructor(message, clientVersion) {
        super(message);
        this.name = "PrismaClientRustPanicError";
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    setClassName(PrismaClientRustPanicError2, "PrismaClientRustPanicError");
    var PrismaClientUnknownRequestError2 = class extends Error {
      static {
        __name(this, "PrismaClientUnknownRequestError");
      }
      clientVersion;
      batchRequestIdx;
      constructor(message, { clientVersion, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientUnknownRequestError";
        this.clientVersion = clientVersion;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          writable: true,
          enumerable: false
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    setClassName(PrismaClientUnknownRequestError2, "PrismaClientUnknownRequestError");
    var PrismaClientValidationError2 = class extends Error {
      static {
        __name(this, "PrismaClientValidationError");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(message, { clientVersion }) {
        super(message);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    setClassName(PrismaClientValidationError2, "PrismaClientValidationError");
    var secret = /* @__PURE__ */ Symbol();
    var PRISMA_OBJECT_ENUM_VALUE = /* @__PURE__ */ Symbol.for("prisma.objectEnumValue");
    var ObjectEnumValue2 = class {
      static {
        __name(this, "ObjectEnumValue");
      }
      [PRISMA_OBJECT_ENUM_VALUE] = true;
      #representation;
      constructor(arg) {
        if (arg === secret) {
          this.#representation = `Prisma.${this._getName()}`;
        } else {
          this.#representation = `new Prisma.${this._getNamespace()}.${this._getName()}()`;
        }
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return this.#representation;
      }
    };
    function setClassName2(classObject, name2) {
      Object.defineProperty(classObject, "name", {
        value: name2,
        configurable: true
      });
    }
    __name(setClassName2, "setClassName2");
    var NullTypesEnumValue = class extends ObjectEnumValue2 {
      static {
        __name(this, "NullTypesEnumValue");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var DbNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "DbNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_DbNull;
    };
    setClassName2(DbNullClass, "DbNull");
    var JsonNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "JsonNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_JsonNull;
    };
    setClassName2(JsonNullClass, "JsonNull");
    var AnyNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "AnyNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_AnyNull;
    };
    setClassName2(AnyNullClass, "AnyNull");
    var NullTypes2 = {
      DbNull: DbNullClass,
      JsonNull: JsonNullClass,
      AnyNull: AnyNullClass
    };
    var DbNull2 = new DbNullClass(secret);
    var JsonNull2 = new JsonNullClass(secret);
    var AnyNull2 = new AnyNullClass(secret);
    function isObjectEnumValue2(value) {
      return typeof value === "object" && value !== null && value[PRISMA_OBJECT_ENUM_VALUE] === true;
    }
    __name(isObjectEnumValue2, "isObjectEnumValue");
    function isDbNull2(value) {
      return value === DbNull2;
    }
    __name(isDbNull2, "isDbNull");
    function isJsonNull2(value) {
      return value === JsonNull2;
    }
    __name(isJsonNull2, "isJsonNull");
    function isAnyNull2(value) {
      return value === AnyNull2;
    }
    __name(isAnyNull2, "isAnyNull");
    var EXP_LIMIT = 9e15;
    var MAX_DIGITS = 1e9;
    var NUMERALS = "0123456789abcdef";
    var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var DEFAULTS = {
      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.
      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,
      // 1 to MAX_DIGITS
      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,
      // 0 to 8
      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,
      // 0 to 9
      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,
      // 0 to -EXP_LIMIT
      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos: 21,
      // 0 to EXP_LIMIT
      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,
      // -1 to -EXP_LIMIT
      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,
      // 1 to EXP_LIMIT
      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false
      // true/false
    };
    var inexact;
    var quadrant;
    var external = true;
    var decimalError = "[DecimalError] ";
    var invalidArgument = decimalError + "Invalid argument: ";
    var precisionLimitExceeded = decimalError + "Precision limit exceeded";
    var cryptoUnavailable = decimalError + "crypto unavailable";
    var tag = "[object Decimal]";
    var mathfloor = Math.floor;
    var mathpow = Math.pow;
    var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var BASE = 1e7;
    var LOG_BASE = 7;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var LN10_PRECISION = LN10.length - 1;
    var PI_PRECISION = PI.length - 1;
    var P = { toStringTag: tag };
    P.absoluteValue = P.abs = function() {
      var x2 = new this.constructor(this);
      if (x2.s < 0) x2.s = 1;
      return finalise(x2);
    };
    P.ceil = function() {
      return finalise(new this.constructor(this), this.e + 1, 2);
    };
    P.clampedTo = P.clamp = function(min2, max2) {
      var k, x2 = this, Ctor = x2.constructor;
      min2 = new Ctor(min2);
      max2 = new Ctor(max2);
      if (!min2.s || !max2.s) return new Ctor(NaN);
      if (min2.gt(max2)) throw Error(invalidArgument + max2);
      k = x2.cmp(min2);
      return k < 0 ? min2 : x2.cmp(max2) > 0 ? max2 : new Ctor(x2);
    };
    P.comparedTo = P.cmp = function(y) {
      var i, j, xdL, ydL, x2 = this, xd = x2.d, yd = (y = new x2.constructor(y)).d, xs = x2.s, ys2 = y.s;
      if (!xd || !yd) {
        return !xs || !ys2 ? NaN : xs !== ys2 ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
      }
      if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys2 : 0;
      if (xs !== ys2) return xs;
      if (x2.e !== y.e) return x2.e > y.e ^ xs < 0 ? 1 : -1;
      xdL = xd.length;
      ydL = yd.length;
      for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
        if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
      }
      return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    };
    P.cosine = P.cos = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.d) return new Ctor(NaN);
      if (!x2.d[0]) return new Ctor(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x2 = cosine(Ctor, toLessThanHalfPi(Ctor, x2));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 3 ? x2.neg() : x2, pr, rm, true);
    };
    P.cubeRoot = P.cbrt = function() {
      var e, m2, n, r, rep, s, sd, t, t3, t3plusx, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      external = false;
      s = x2.s * mathpow(x2.s * x2, 1 / 3);
      if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x2.d);
        e = x2.e;
        if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
        s = mathpow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
        r.s = x2.s;
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x2);
        r = divide(t3plusx.plus(x2).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).times(t).eq(x2)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m2 = !r.times(r).times(r).eq(x2);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m2);
    };
    P.decimalPlaces = P.dp = function() {
      var w, d2 = this.d, n = NaN;
      if (d2) {
        w = d2.length - 1;
        n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w = d2[w];
        if (w) for (; w % 10 == 0; w /= 10) n--;
        if (n < 0) n = 0;
      }
      return n;
    };
    P.dividedBy = P.div = function(y) {
      return divide(this, new this.constructor(y));
    };
    P.dividedToIntegerBy = P.divToInt = function(y) {
      var x2 = this, Ctor = x2.constructor;
      return finalise(divide(x2, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    };
    P.equals = P.eq = function(y) {
      return this.cmp(y) === 0;
    };
    P.floor = function() {
      return finalise(new this.constructor(this), this.e + 1, 3);
    };
    P.greaterThan = P.gt = function(y) {
      return this.cmp(y) > 0;
    };
    P.greaterThanOrEqualTo = P.gte = function(y) {
      var k = this.cmp(y);
      return k == 1 || k === 0;
    };
    P.hyperbolicCosine = P.cosh = function() {
      var k, n, pr, rm, len, x2 = this, Ctor = x2.constructor, one = new Ctor(1);
      if (!x2.isFinite()) return new Ctor(x2.s ? 1 / 0 : NaN);
      if (x2.isZero()) return one;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + 4;
      Ctor.rounding = 1;
      len = x2.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k)).toString();
      } else {
        k = 16;
        n = "2.3283064365386962890625e-10";
      }
      x2 = taylorSeries(Ctor, 1, x2.times(n), new Ctor(1), true);
      var cosh2_x, i = k, d8 = new Ctor(8);
      for (; i--; ) {
        cosh2_x = x2.times(x2);
        x2 = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
      }
      return finalise(x2, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.hyperbolicSine = P.sinh = function() {
      var k, pr, rm, len, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + 4;
      Ctor.rounding = 1;
      len = x2.d.length;
      if (len < 3) {
        x2 = taylorSeries(Ctor, 2, x2, x2, true);
      } else {
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x2 = x2.times(1 / tinyPow(5, k));
        x2 = taylorSeries(Ctor, 2, x2, x2, true);
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for (; k--; ) {
          sinh2_x = x2.times(x2);
          x2 = x2.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
      }
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(x2, pr, rm, true);
    };
    P.hyperbolicTangent = P.tanh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(x2.s);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 7;
      Ctor.rounding = 1;
      return divide(x2.sinh(), x2.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
    };
    P.inverseCosine = P.acos = function() {
      var x2 = this, Ctor = x2.constructor, k = x2.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
      if (k !== -1) {
        return k === 0 ? x2.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
      }
      if (x2.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x2 = new Ctor(1).minus(x2).div(x2.plus(1)).sqrt().atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(2);
    };
    P.inverseHyperbolicCosine = P.acosh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (x2.lte(1)) return new Ctor(x2.eq(1) ? 0 : NaN);
      if (!x2.isFinite()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(Math.abs(x2.e), x2.sd()) + 4;
      Ctor.rounding = 1;
      external = false;
      x2 = x2.times(x2).minus(1).sqrt().plus(x2);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.ln();
    };
    P.inverseHyperbolicSine = P.asinh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 2 * Math.max(Math.abs(x2.e), x2.sd()) + 6;
      Ctor.rounding = 1;
      external = false;
      x2 = x2.times(x2).plus(1).sqrt().plus(x2);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.ln();
    };
    P.inverseHyperbolicTangent = P.atanh = function() {
      var pr, rm, wpr, xsd, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.e >= 0) return new Ctor(x2.abs().eq(1) ? x2.s / 0 : x2.isZero() ? x2 : NaN);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      xsd = x2.sd();
      if (Math.max(xsd, pr) < 2 * -x2.e - 1) return finalise(new Ctor(x2), pr, rm, true);
      Ctor.precision = wpr = xsd - x2.e;
      x2 = divide(x2.plus(1), new Ctor(1).minus(x2), wpr + pr, 1);
      Ctor.precision = pr + 4;
      Ctor.rounding = 1;
      x2 = x2.ln();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(0.5);
    };
    P.inverseSine = P.asin = function() {
      var halfPi, k, pr, rm, x2 = this, Ctor = x2.constructor;
      if (x2.isZero()) return new Ctor(x2);
      k = x2.abs().cmp(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (k !== -1) {
        if (k === 0) {
          halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
          halfPi.s = x2.s;
          return halfPi;
        }
        return new Ctor(NaN);
      }
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x2 = x2.div(new Ctor(1).minus(x2.times(x2)).sqrt().plus(1)).atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(2);
    };
    P.inverseTangent = P.atan = function() {
      var i, j, k, n, px, t, r, wpr, x2, x3 = this, Ctor = x3.constructor, pr = Ctor.precision, rm = Ctor.rounding;
      if (!x3.isFinite()) {
        if (!x3.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
          r = getPi(Ctor, pr + 4, rm).times(0.5);
          r.s = x3.s;
          return r;
        }
      } else if (x3.isZero()) {
        return new Ctor(x3);
      } else if (x3.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x3.s;
        return r;
      }
      Ctor.precision = wpr = pr + 10;
      Ctor.rounding = 1;
      k = Math.min(28, wpr / LOG_BASE + 2 | 0);
      for (i = k; i; --i) x3 = x3.div(x3.times(x3).plus(1).sqrt().plus(1));
      external = false;
      j = Math.ceil(wpr / LOG_BASE);
      n = 1;
      x2 = x3.times(x3);
      r = new Ctor(x3);
      px = x3;
      for (; i !== -1; ) {
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--; ) ;
      }
      if (k) r = r.times(2 << k - 1);
      external = true;
      return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.isFinite = function() {
      return !!this.d;
    };
    P.isInteger = P.isInt = function() {
      return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
    };
    P.isNaN = function() {
      return !this.s;
    };
    P.isNegative = P.isNeg = function() {
      return this.s < 0;
    };
    P.isPositive = P.isPos = function() {
      return this.s > 0;
    };
    P.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    P.lessThan = P.lt = function(y) {
      return this.cmp(y) < 0;
    };
    P.lessThanOrEqualTo = P.lte = function(y) {
      return this.cmp(y) < 1;
    };
    P.logarithm = P.log = function(base) {
      var isBase10, d2, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
      if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
      } else {
        base = new Ctor(base);
        d2 = base.d;
        if (base.s < 0 || !d2 || !d2[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
      }
      d2 = arg.d;
      if (arg.s < 0 || !d2 || !d2[0] || arg.eq(1)) {
        return new Ctor(d2 && !d2[0] ? -1 / 0 : arg.s != 1 ? NaN : d2 ? 0 : 1 / 0);
      }
      if (isBase10) {
        if (d2.length > 1) {
          inf = true;
        } else {
          for (k = d2[0]; k % 10 === 0; ) k /= 10;
          inf = k !== 1;
        }
      }
      external = false;
      sd = pr + guard;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (checkRoundingDigits(r.d, k = pr, rm)) {
        do {
          sd += 10;
          num = naturalLogarithm(arg, sd);
          denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
          r = divide(num, denominator, sd, 1);
          if (!inf) {
            if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
              r = finalise(r, pr + 1, 0);
            }
            break;
          }
        } while (checkRoundingDigits(r.d, k += 10, rm));
      }
      external = true;
      return finalise(r, pr, rm);
    };
    P.minus = P.sub = function(y) {
      var d2, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.d) {
        if (!x2.s || !y.s) y = new Ctor(NaN);
        else if (x2.d) y.s = -y.s;
        else y = new Ctor(y.d || x2.s !== y.s ? x2 : NaN);
        return y;
      }
      if (x2.s != y.s) {
        y.s = -y.s;
        return x2.plus(y);
      }
      xd = x2.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (yd[0]) y.s = -y.s;
        else if (xd[0]) y = new Ctor(x2);
        else return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
      }
      e = mathfloor(y.e / LOG_BASE);
      xe = mathfloor(x2.e / LOG_BASE);
      xd = xd.slice();
      k = xe - e;
      if (k) {
        xLTy = k < 0;
        if (xLTy) {
          d2 = xd;
          k = -k;
          len = yd.length;
        } else {
          d2 = yd;
          e = xe;
          len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k > i) {
          k = i;
          d2.length = 1;
        }
        d2.reverse();
        for (i = k; i--; ) d2.push(0);
        d2.reverse();
      } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy) len = i;
        for (i = 0; i < len; i++) {
          if (xd[i] != yd[i]) {
            xLTy = xd[i] < yd[i];
            break;
          }
        }
        k = 0;
      }
      if (xLTy) {
        d2 = xd;
        xd = yd;
        yd = d2;
        y.s = -y.s;
      }
      len = xd.length;
      for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
      for (i = yd.length; i > k; ) {
        if (xd[--i] < yd[i]) {
          for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
          --xd[j];
          xd[i] += BASE;
        }
        xd[i] -= yd[i];
      }
      for (; xd[--len] === 0; ) xd.pop();
      for (; xd[0] === 0; xd.shift()) --e;
      if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.modulo = P.mod = function(y) {
      var q, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
      if (!y.d || x2.d && !x2.d[0]) {
        return finalise(new Ctor(x2), Ctor.precision, Ctor.rounding);
      }
      external = false;
      if (Ctor.modulo == 9) {
        q = divide(x2, y.abs(), 0, 3, 1);
        q.s *= y.s;
      } else {
        q = divide(x2, y, 0, Ctor.modulo, 1);
      }
      q = q.times(y);
      external = true;
      return x2.minus(q);
    };
    P.naturalExponential = P.exp = function() {
      return naturalExponential(this);
    };
    P.naturalLogarithm = P.ln = function() {
      return naturalLogarithm(this);
    };
    P.negated = P.neg = function() {
      var x2 = new this.constructor(this);
      x2.s = -x2.s;
      return finalise(x2);
    };
    P.plus = P.add = function(y) {
      var carry, d2, e, i, k, len, pr, rm, xd, yd, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.d) {
        if (!x2.s || !y.s) y = new Ctor(NaN);
        else if (!x2.d) y = new Ctor(y.d || x2.s === y.s ? x2 : NaN);
        return y;
      }
      if (x2.s != y.s) {
        y.s = -y.s;
        return x2.minus(y);
      }
      xd = x2.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (!yd[0]) y = new Ctor(x2);
        return external ? finalise(y, pr, rm) : y;
      }
      k = mathfloor(x2.e / LOG_BASE);
      e = mathfloor(y.e / LOG_BASE);
      xd = xd.slice();
      i = k - e;
      if (i) {
        if (i < 0) {
          d2 = xd;
          i = -i;
          len = yd.length;
        } else {
          d2 = yd;
          e = k;
          len = xd.length;
        }
        k = Math.ceil(pr / LOG_BASE);
        len = k > len ? k + 1 : len + 1;
        if (i > len) {
          i = len;
          d2.length = 1;
        }
        d2.reverse();
        for (; i--; ) d2.push(0);
        d2.reverse();
      }
      len = xd.length;
      i = yd.length;
      if (len - i < 0) {
        i = len;
        d2 = yd;
        yd = xd;
        xd = d2;
      }
      for (carry = 0; i; ) {
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
      }
      if (carry) {
        xd.unshift(carry);
        ++e;
      }
      for (len = xd.length; xd[--len] == 0; ) xd.pop();
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.precision = P.sd = function(z) {
      var k, x2 = this;
      if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
      if (x2.d) {
        k = getPrecision(x2.d);
        if (z && x2.e + 1 > k) k = x2.e + 1;
      } else {
        k = NaN;
      }
      return k;
    };
    P.round = function() {
      var x2 = this, Ctor = x2.constructor;
      return finalise(new Ctor(x2), x2.e + 1, Ctor.rounding);
    };
    P.sine = P.sin = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x2 = sine(Ctor, toLessThanHalfPi(Ctor, x2));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant > 2 ? x2.neg() : x2, pr, rm, true);
    };
    P.squareRoot = P.sqrt = function() {
      var m2, n, sd, r, rep, t, x2 = this, d2 = x2.d, e = x2.e, s = x2.s, Ctor = x2.constructor;
      if (s !== 1 || !d2 || !d2[0]) {
        return new Ctor(!s || s < 0 && (!d2 || d2[0]) ? NaN : d2 ? x2 : 1 / 0);
      }
      external = false;
      s = Math.sqrt(+x2);
      if (s == 0 || s == 1 / 0) {
        n = digitsToString(d2);
        if ((n.length + e) % 2 == 0) n += "0";
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        r = t.plus(divide(x2, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).eq(x2)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m2 = !r.times(r).eq(x2);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m2);
    };
    P.tangent = P.tan = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 10;
      Ctor.rounding = 1;
      x2 = x2.sin();
      x2.s = 1;
      x2 = divide(x2, new Ctor(1).minus(x2.times(x2)).sqrt(), pr + 10, 0);
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 4 ? x2.neg() : x2, pr, rm, true);
    };
    P.times = P.mul = function(y) {
      var carry, e, i, k, r, rL, t, xdL, ydL, x2 = this, Ctor = x2.constructor, xd = x2.d, yd = (y = new Ctor(y)).d;
      y.s *= x2.s;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
      }
      e = mathfloor(x2.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
      xdL = xd.length;
      ydL = yd.length;
      if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
      }
      r = [];
      rL = xdL + ydL;
      for (i = rL; i--; ) r.push(0);
      for (i = ydL; --i >= 0; ) {
        carry = 0;
        for (k = xdL + i; k > i; ) {
          t = r[k] + yd[i] * xd[k - i - 1] + carry;
          r[k--] = t % BASE | 0;
          carry = t / BASE | 0;
        }
        r[k] = (r[k] + carry) % BASE | 0;
      }
      for (; !r[--rL]; ) r.pop();
      if (carry) ++e;
      else r.shift();
      y.d = r;
      y.e = getBase10Exponent(r, e);
      return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    };
    P.toBinary = function(sd, rm) {
      return toStringBinary(this, 2, sd, rm);
    };
    P.toDecimalPlaces = P.toDP = function(dp, rm) {
      var x2 = this, Ctor = x2.constructor;
      x2 = new Ctor(x2);
      if (dp === void 0) return x2;
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
      return finalise(x2, dp + x2.e + 1, rm);
    };
    P.toExponential = function(dp, rm) {
      var str, x2 = this, Ctor = x2.constructor;
      if (dp === void 0) {
        str = finiteToString(x2, true);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x2 = finalise(new Ctor(x2), dp + 1, rm);
        str = finiteToString(x2, true, dp + 1);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P.toFixed = function(dp, rm) {
      var str, y, x2 = this, Ctor = x2.constructor;
      if (dp === void 0) {
        str = finiteToString(x2);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x2), dp + x2.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P.toFraction = function(maxD) {
      var d2, d0, d1, d22, e, k, n, n0, n1, pr, q, r, x2 = this, xd = x2.d, Ctor = x2.constructor;
      if (!xd) return new Ctor(x2);
      n1 = d0 = new Ctor(1);
      d1 = n0 = new Ctor(0);
      d2 = new Ctor(d1);
      e = d2.e = getPrecision(xd) - x2.e - 1;
      k = e % LOG_BASE;
      d2.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
      if (maxD == null) {
        maxD = e > 0 ? d2 : n1;
      } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d2) ? e > 0 ? d2 : n1 : n;
      }
      external = false;
      n = new Ctor(digitsToString(xd));
      pr = Ctor.precision;
      Ctor.precision = e = xd.length * LOG_BASE * 2;
      for (; ; ) {
        q = divide(n, d2, 0, 1, 1);
        d22 = d0.plus(q.times(d1));
        if (d22.cmp(maxD) == 1) break;
        d0 = d1;
        d1 = d22;
        d22 = n1;
        n1 = n0.plus(q.times(d22));
        n0 = d22;
        d22 = d2;
        d2 = n.minus(q.times(d22));
        n = d22;
      }
      d22 = divide(maxD.minus(d0), d1, 0, 1, 1);
      n0 = n0.plus(d22.times(n1));
      d0 = d0.plus(d22.times(d1));
      n0.s = n1.s = x2.s;
      r = divide(n1, d1, e, 1).minus(x2).abs().cmp(divide(n0, d0, e, 1).minus(x2).abs()) < 1 ? [n1, d1] : [n0, d0];
      Ctor.precision = pr;
      external = true;
      return r;
    };
    P.toHexadecimal = P.toHex = function(sd, rm) {
      return toStringBinary(this, 16, sd, rm);
    };
    P.toNearest = function(y, rm) {
      var x2 = this, Ctor = x2.constructor;
      x2 = new Ctor(x2);
      if (y == null) {
        if (!x2.d) return x2;
        y = new Ctor(1);
        rm = Ctor.rounding;
      } else {
        y = new Ctor(y);
        if (rm === void 0) {
          rm = Ctor.rounding;
        } else {
          checkInt32(rm, 0, 8);
        }
        if (!x2.d) return y.s ? x2 : y;
        if (!y.d) {
          if (y.s) y.s = x2.s;
          return y;
        }
      }
      if (y.d[0]) {
        external = false;
        x2 = divide(x2, y, 0, rm, 1).times(y);
        external = true;
        finalise(x2);
      } else {
        y.s = x2.s;
        x2 = y;
      }
      return x2;
    };
    P.toNumber = function() {
      return +this;
    };
    P.toOctal = function(sd, rm) {
      return toStringBinary(this, 8, sd, rm);
    };
    P.toPower = P.pow = function(y) {
      var e, k, pr, r, rm, s, x2 = this, Ctor = x2.constructor, yn = +(y = new Ctor(y));
      if (!x2.d || !y.d || !x2.d[0] || !y.d[0]) return new Ctor(mathpow(+x2, yn));
      x2 = new Ctor(x2);
      if (x2.eq(1)) return x2;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (y.eq(1)) return finalise(x2, pr, rm);
      e = mathfloor(y.e / LOG_BASE);
      if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x2, k, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
      }
      s = x2.s;
      if (s < 0) {
        if (e < y.d.length - 1) return new Ctor(NaN);
        if ((y.d[e] & 1) == 0) s = 1;
        if (x2.e == 0 && x2.d[0] == 1 && x2.d.length == 1) {
          x2.s = s;
          return x2;
        }
      }
      k = mathpow(+x2, yn);
      e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x2.d)) / Math.LN10 + x2.e + 1)) : new Ctor(k + "").e;
      if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
      external = false;
      Ctor.rounding = x2.s = 1;
      k = Math.min(12, (e + "").length);
      r = naturalExponential(y.times(naturalLogarithm(x2, pr + k)), pr);
      if (r.d) {
        r = finalise(r, pr + 5, 1);
        if (checkRoundingDigits(r.d, pr, rm)) {
          e = pr + 10;
          r = finalise(naturalExponential(y.times(naturalLogarithm(x2, e + k)), e), e + 5, 1);
          if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }
        }
      }
      r.s = s;
      external = true;
      Ctor.rounding = rm;
      return finalise(r, pr, rm);
    };
    P.toPrecision = function(sd, rm) {
      var str, x2 = this, Ctor = x2.constructor;
      if (sd === void 0) {
        str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x2 = finalise(new Ctor(x2), sd, rm);
        str = finiteToString(x2, sd <= x2.e || x2.e <= Ctor.toExpNeg, sd);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P.toSignificantDigits = P.toSD = function(sd, rm) {
      var x2 = this, Ctor = x2.constructor;
      if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      }
      return finalise(new Ctor(x2), sd, rm);
    };
    P.toString = function() {
      var x2 = this, Ctor = x2.constructor, str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P.truncated = P.trunc = function() {
      return finalise(new this.constructor(this), this.e + 1, 1);
    };
    P.valueOf = P.toJSON = function() {
      var x2 = this, Ctor = x2.constructor, str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      return x2.isNeg() ? "-" + str : str;
    };
    function digitsToString(d2) {
      var i, k, ws, indexOfLastWord = d2.length - 1, str = "", w = d2[0];
      if (indexOfLastWord > 0) {
        str += w;
        for (i = 1; i < indexOfLastWord; i++) {
          ws = d2[i] + "";
          k = LOG_BASE - ws.length;
          if (k) str += getZeroString(k);
          str += ws;
        }
        w = d2[i];
        ws = w + "";
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
      } else if (w === 0) {
        return "0";
      }
      for (; w % 10 === 0; ) w /= 10;
      return str + w;
    }
    __name(digitsToString, "digitsToString");
    function checkInt32(i, min2, max2) {
      if (i !== ~~i || i < min2 || i > max2) {
        throw Error(invalidArgument + i);
      }
    }
    __name(checkInt32, "checkInt32");
    function checkRoundingDigits(d2, i, rm, repeating) {
      var di, k, r, rd;
      for (k = d2[0]; k >= 10; k /= 10) --i;
      if (--i < 0) {
        i += LOG_BASE;
        di = 0;
      } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
      }
      k = mathpow(10, LOG_BASE - i);
      rd = d2[di] % k | 0;
      if (repeating == null) {
        if (i < 3) {
          if (i == 0) rd = rd / 100 | 0;
          else if (i == 1) rd = rd / 10 | 0;
          r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
        } else {
          r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d2[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d2[di + 1] / k / 100 | 0) == 0;
        }
      } else {
        if (i < 4) {
          if (i == 0) rd = rd / 1e3 | 0;
          else if (i == 1) rd = rd / 100 | 0;
          else if (i == 2) rd = rd / 10 | 0;
          r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
          r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d2[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
        }
      }
      return r;
    }
    __name(checkRoundingDigits, "checkRoundingDigits");
    function convertBase(str, baseIn, baseOut) {
      var j, arr = [0], arrL, i = 0, strL = str.length;
      for (; i < strL; ) {
        for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] === void 0) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    __name(convertBase, "convertBase");
    function cosine(Ctor, x2) {
      var k, len, y;
      if (x2.isZero()) return x2;
      len = x2.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k)).toString();
      } else {
        k = 16;
        y = "2.3283064365386962890625e-10";
      }
      Ctor.precision += k;
      x2 = taylorSeries(Ctor, 1, x2.times(y), new Ctor(1));
      for (var i = k; i--; ) {
        var cos2x = x2.times(x2);
        x2 = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
      }
      Ctor.precision -= k;
      return x2;
    }
    __name(cosine, "cosine");
    var divide = /* @__PURE__ */ (function() {
      function multiplyInteger(x2, k, base) {
        var temp, carry = 0, i = x2.length;
        for (x2 = x2.slice(); i--; ) {
          temp = x2[i] * k + carry;
          x2[i] = temp % base | 0;
          carry = temp / base | 0;
        }
        if (carry) x2.unshift(carry);
        return x2;
      }
      __name(multiplyInteger, "multiplyInteger");
      function compare(a2, b2, aL, bL) {
        var i, r;
        if (aL != bL) {
          r = aL > bL ? 1 : -1;
        } else {
          for (i = r = 0; i < aL; i++) {
            if (a2[i] != b2[i]) {
              r = a2[i] > b2[i] ? 1 : -1;
              break;
            }
          }
        }
        return r;
      }
      __name(compare, "compare");
      function subtract(a2, b2, aL, base) {
        var i = 0;
        for (; aL--; ) {
          a2[aL] -= i;
          i = a2[aL] < b2[aL] ? 1 : 0;
          a2[aL] = i * base + a2[aL] - b2[aL];
        }
        for (; !a2[0] && a2.length > 1; ) a2.shift();
      }
      __name(subtract, "subtract");
      return function(x2, y, pr, rm, dp, base) {
        var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi2, xL, yd0, yL, yz, Ctor = x2.constructor, sign2 = x2.s == y.s ? 1 : -1, xd = x2.d, yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
          return new Ctor(
            // Return NaN if either NaN, or both Infinity or 0.
            !x2.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
              // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
              xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
            )
          );
        }
        if (base) {
          logBase = 1;
          e = x2.e - y.e;
        } else {
          base = BASE;
          logBase = LOG_BASE;
          e = mathfloor(x2.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign2);
        qd = q.d = [];
        for (i = 0; yd[i] == (xd[i] || 0); i++) ;
        if (yd[i] > (xd[i] || 0)) e--;
        if (pr == null) {
          sd = pr = Ctor.precision;
          rm = Ctor.rounding;
        } else if (dp) {
          sd = pr + (x2.e - y.e) + 1;
        } else {
          sd = pr;
        }
        if (sd < 0) {
          qd.push(1);
          more = true;
        } else {
          sd = sd / logBase + 2 | 0;
          i = 0;
          if (yL == 1) {
            k = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k) && sd--; i++) {
              t = k * base + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k = t % yd | 0;
            }
            more = k || i < xL;
          } else {
            k = base / (yd[0] + 1) | 0;
            if (k > 1) {
              yd = multiplyInteger(yd, k, base);
              xd = multiplyInteger(xd, k, base);
              yL = yd.length;
              xL = xd.length;
            }
            xi2 = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; ) rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= base / 2) ++yd0;
            do {
              k = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                k = rem0 / yd0 | 0;
                if (k > 1) {
                  if (k >= base) k = base - 1;
                  prod = multiplyInteger(yd, k, base);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k--;
                    subtract(prod, yL < prodL ? yz : yd, prodL, base);
                  }
                } else {
                  if (k == 0) cmp = k = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL) prod.unshift(0);
                subtract(rem, prod, remL, base);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k++;
                    subtract(rem, yL < remL ? yz : yd, remL, base);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k++;
                rem = [0];
              }
              qd[i++] = k;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi2] || 0;
              } else {
                rem = [xd[xi2]];
                remL = 1;
              }
            } while ((xi2++ < xL || rem[0] !== void 0) && sd--);
            more = rem[0] !== void 0;
          }
          if (!qd[0]) qd.shift();
        }
        if (logBase == 1) {
          q.e = e;
          inexact = more;
        } else {
          for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
          q.e = i + e * logBase - 1;
          finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
      };
    })();
    function finalise(x2, sd, rm, isTruncated) {
      var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x2.constructor;
      out: if (sd != null) {
        xd = x2.d;
        if (!xd) return x2;
        for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
        i = sd - digits;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w = xd[xdi = 0];
          rd = w / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k = xd.length;
          if (xdi >= k) {
            if (isTruncated) {
              for (; k++ <= xdi; ) xd.push(0);
              w = rd = 0;
              digits = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            w = k = xd[xdi];
            for (digits = 1; k >= 10; k /= 10) digits++;
            i %= LOG_BASE;
            j = i - LOG_BASE + digits;
            rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
          }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x2.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x2.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
          xd.length = 0;
          if (roundUp) {
            sd -= x2.e + 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x2.e = -sd || 0;
          } else {
            xd[0] = x2.e = 0;
          }
          return x2;
        }
        if (i == 0) {
          xd.length = xdi;
          k = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
        }
        if (roundUp) {
          for (; ; ) {
            if (xdi == 0) {
              for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
              j = xd[0] += k;
              for (k = 1; j >= 10; j /= 10) k++;
              if (i != k) {
                x2.e++;
                if (xd[0] == BASE) xd[0] = 1;
              }
              break;
            } else {
              xd[xdi] += k;
              if (xd[xdi] != BASE) break;
              xd[xdi--] = 0;
              k = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; ) xd.pop();
      }
      if (external) {
        if (x2.e > Ctor.maxE) {
          x2.d = null;
          x2.e = NaN;
        } else if (x2.e < Ctor.minE) {
          x2.e = 0;
          x2.d = [0];
        }
      }
      return x2;
    }
    __name(finalise, "finalise");
    function finiteToString(x2, isExp, sd) {
      if (!x2.isFinite()) return nonFiniteToString(x2);
      var k, e = x2.e, str = digitsToString(x2.d), len = str.length;
      if (isExp) {
        if (sd && (k = sd - len) > 0) {
          str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
        } else if (len > 1) {
          str = str.charAt(0) + "." + str.slice(1);
        }
        str = str + (x2.e < 0 ? "e" : "e+") + x2.e;
      } else if (e < 0) {
        str = "0." + getZeroString(-e - 1) + str;
        if (sd && (k = sd - len) > 0) str += getZeroString(k);
      } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
      } else {
        if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
        if (sd && (k = sd - len) > 0) {
          if (e + 1 === len) str += ".";
          str += getZeroString(k);
        }
      }
      return str;
    }
    __name(finiteToString, "finiteToString");
    function getBase10Exponent(digits, e) {
      var w = digits[0];
      for (e *= LOG_BASE; w >= 10; w /= 10) e++;
      return e;
    }
    __name(getBase10Exponent, "getBase10Exponent");
    function getLn10(Ctor, sd, pr) {
      if (sd > LN10_PRECISION) {
        external = true;
        if (pr) Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
      }
      return finalise(new Ctor(LN10), sd, 1, true);
    }
    __name(getLn10, "getLn10");
    function getPi(Ctor, sd, rm) {
      if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
      return finalise(new Ctor(PI), sd, rm, true);
    }
    __name(getPi, "getPi");
    function getPrecision(digits) {
      var w = digits.length - 1, len = w * LOG_BASE + 1;
      w = digits[w];
      if (w) {
        for (; w % 10 == 0; w /= 10) len--;
        for (w = digits[0]; w >= 10; w /= 10) len++;
      }
      return len;
    }
    __name(getPrecision, "getPrecision");
    function getZeroString(k) {
      var zs2 = "";
      for (; k--; ) zs2 += "0";
      return zs2;
    }
    __name(getZeroString, "getZeroString");
    function intPow(Ctor, x2, n, pr) {
      var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
      external = false;
      for (; ; ) {
        if (n % 2) {
          r = r.times(x2);
          if (truncate(r.d, k)) isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
          n = r.d.length - 1;
          if (isTruncated && r.d[n] === 0) ++r.d[n];
          break;
        }
        x2 = x2.times(x2);
        truncate(x2.d, k);
      }
      external = true;
      return r;
    }
    __name(intPow, "intPow");
    function isOdd(n) {
      return n.d[n.d.length - 1] & 1;
    }
    __name(isOdd, "isOdd");
    function maxOrMin(Ctor, args, n) {
      var k, y, x2 = new Ctor(args[0]), i = 0;
      for (; ++i < args.length; ) {
        y = new Ctor(args[i]);
        if (!y.s) {
          x2 = y;
          break;
        }
        k = x2.cmp(y);
        if (k === n || k === 0 && x2.s === n) {
          x2 = y;
        }
      }
      return x2;
    }
    __name(maxOrMin, "maxOrMin");
    function naturalExponential(x2, sd) {
      var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x2.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (!x2.d || !x2.d[0] || x2.e > 17) {
        return new Ctor(x2.d ? !x2.d[0] ? 1 : x2.s < 0 ? 0 : 1 / 0 : x2.s ? x2.s < 0 ? 0 : x2 : 0 / 0);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      t = new Ctor(0.03125);
      while (x2.e > -2) {
        x2 = x2.times(t);
        k += 5;
      }
      guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
      wpr += guard;
      denominator = pow2 = sum2 = new Ctor(1);
      Ctor.precision = wpr;
      for (; ; ) {
        pow2 = finalise(pow2.times(x2), wpr, 1);
        denominator = denominator.times(++i);
        t = sum2.plus(divide(pow2, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          j = k;
          while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
          if (sd == null) {
            if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += 10;
              denominator = pow2 = t = new Ctor(1);
              i = 0;
              rep++;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
      }
    }
    __name(naturalExponential, "naturalExponential");
    function naturalLogarithm(y, sd) {
      var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x3 = y, xd = x3.d, Ctor = x3.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (x3.s < 0 || !xd || !xd[0] || !x3.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x3.s != 1 ? NaN : xd ? 0 : x3);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      Ctor.precision = wpr += guard;
      c = digitsToString(xd);
      c0 = c.charAt(0);
      if (Math.abs(e = x3.e) < 15e14) {
        while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
          x3 = x3.times(y);
          c = digitsToString(x3.d);
          c0 = c.charAt(0);
          n++;
        }
        e = x3.e;
        if (c0 > 1) {
          x3 = new Ctor("0." + c);
          e++;
        } else {
          x3 = new Ctor(c0 + "." + c.slice(1));
        }
      } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + "");
        x3 = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x3, pr, rm, external = true) : x3;
      }
      x1 = x3;
      sum2 = numerator = x3 = divide(x3.minus(1), x3.plus(1), wpr, 1);
      x2 = finalise(x3.times(x3), wpr, 1);
      denominator = 3;
      for (; ; ) {
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          sum2 = sum2.times(2);
          if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
          sum2 = divide(sum2, new Ctor(n), wpr, 1);
          if (sd == null) {
            if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += guard;
              t = numerator = x3 = divide(x1.minus(1), x1.plus(1), wpr, 1);
              x2 = finalise(x3.times(x3), wpr, 1);
              denominator = rep = 1;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
        denominator += 2;
      }
    }
    __name(naturalLogarithm, "naturalLogarithm");
    function nonFiniteToString(x2) {
      return String(x2.s * x2.s / 0);
    }
    __name(nonFiniteToString, "nonFiniteToString");
    function parseDecimal(x2, str) {
      var e, i, len;
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
      for (i = 0; str.charCodeAt(i) === 48; i++) ;
      for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
      str = str.slice(i, len);
      if (str) {
        len -= i;
        x2.e = e = e - i - 1;
        x2.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
          if (i) x2.d.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) x2.d.push(+str.slice(i, i += LOG_BASE));
          str = str.slice(i);
          i = LOG_BASE - str.length;
        } else {
          i -= len;
        }
        for (; i--; ) str += "0";
        x2.d.push(+str);
        if (external) {
          if (x2.e > x2.constructor.maxE) {
            x2.d = null;
            x2.e = NaN;
          } else if (x2.e < x2.constructor.minE) {
            x2.e = 0;
            x2.d = [0];
          }
        }
      } else {
        x2.e = 0;
        x2.d = [0];
      }
      return x2;
    }
    __name(parseDecimal, "parseDecimal");
    function parseOther(x2, str) {
      var base, Ctor, divisor, i, isFloat, len, p2, xd, xe;
      if (str.indexOf("_") > -1) {
        str = str.replace(/(\d)_(?=\d)/g, "$1");
        if (isDecimal.test(str)) return parseDecimal(x2, str);
      } else if (str === "Infinity" || str === "NaN") {
        if (!+str) x2.s = NaN;
        x2.e = NaN;
        x2.d = null;
        return x2;
      }
      if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
      } else if (isBinary.test(str)) {
        base = 2;
      } else if (isOctal.test(str)) {
        base = 8;
      } else {
        throw Error(invalidArgument + str);
      }
      i = str.search(/p/i);
      if (i > 0) {
        p2 = +str.slice(i + 1);
        str = str.substring(2, i);
      } else {
        str = str.slice(2);
      }
      i = str.indexOf(".");
      isFloat = i >= 0;
      Ctor = x2.constructor;
      if (isFloat) {
        str = str.replace(".", "");
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
      }
      xd = convertBase(str, base, BASE);
      xe = xd.length - 1;
      for (i = xe; xd[i] === 0; --i) xd.pop();
      if (i < 0) return new Ctor(x2.s * 0);
      x2.e = getBase10Exponent(xd, xe);
      x2.d = xd;
      external = false;
      if (isFloat) x2 = divide(x2, divisor, len * 4);
      if (p2) x2 = x2.times(Math.abs(p2) < 54 ? mathpow(2, p2) : Decimal2.pow(2, p2));
      external = true;
      return x2;
    }
    __name(parseOther, "parseOther");
    function sine(Ctor, x2) {
      var k, len = x2.d.length;
      if (len < 3) {
        return x2.isZero() ? x2 : taylorSeries(Ctor, 2, x2, x2);
      }
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;
      x2 = x2.times(1 / tinyPow(5, k));
      x2 = taylorSeries(Ctor, 2, x2, x2);
      var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
      for (; k--; ) {
        sin2_x = x2.times(x2);
        x2 = x2.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
      }
      return x2;
    }
    __name(sine, "sine");
    function taylorSeries(Ctor, n, x2, y, isHyperbolic) {
      var j, t, u, x22, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
      external = false;
      x22 = x2.times(x2);
      u = new Ctor(y);
      for (; ; ) {
        t = divide(u.times(x22), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x22), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k] !== void 0) {
          for (j = k; t.d[j] === u.d[j] && j--; ) ;
          if (j == -1) break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
      }
      external = true;
      t.d.length = k + 1;
      return t;
    }
    __name(taylorSeries, "taylorSeries");
    function tinyPow(b2, e) {
      var n = b2;
      while (--e) n *= b2;
      return n;
    }
    __name(tinyPow, "tinyPow");
    function toLessThanHalfPi(Ctor, x2) {
      var t, isNeg = x2.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
      x2 = x2.abs();
      if (x2.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x2;
      }
      t = x2.divToInt(pi);
      if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
      } else {
        x2 = x2.minus(t.times(pi));
        if (x2.lte(halfPi)) {
          quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
          return x2;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
      }
      return x2.minus(pi).abs();
    }
    __name(toLessThanHalfPi, "toLessThanHalfPi");
    function toStringBinary(x2, baseOut, sd, rm) {
      var base, e, i, k, len, roundUp, str, xd, y, Ctor = x2.constructor, isExp = sd !== void 0;
      if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      }
      if (!x2.isFinite()) {
        str = nonFiniteToString(x2);
      } else {
        str = finiteToString(x2);
        i = str.indexOf(".");
        if (isExp) {
          base = 2;
          if (baseOut == 16) {
            sd = sd * 4 - 3;
          } else if (baseOut == 8) {
            sd = sd * 3 - 2;
          }
        } else {
          base = baseOut;
        }
        if (i >= 0) {
          str = str.replace(".", "");
          y = new Ctor(1);
          y.e = str.length - i;
          y.d = convertBase(finiteToString(y), 10, base);
          y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for (; xd[--len] == 0; ) xd.pop();
        if (!xd[0]) {
          str = isExp ? "0p+0" : "0";
        } else {
          if (i < 0) {
            e--;
          } else {
            x2 = new Ctor(x2);
            x2.d = xd;
            x2.e = e;
            x2 = divide(x2, y, sd, rm, 0, base);
            xd = x2.d;
            e = x2.e;
            roundUp = inexact;
          }
          i = xd[sd];
          k = base / 2;
          roundUp = roundUp || xd[sd + 1] !== void 0;
          roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x2.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x2.s < 0 ? 8 : 7));
          xd.length = sd;
          if (roundUp) {
            for (; ++xd[--sd] > base - 1; ) {
              xd[sd] = 0;
              if (!sd) {
                ++e;
                xd.unshift(1);
              }
            }
          }
          for (len = xd.length; !xd[len - 1]; --len) ;
          for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
          if (isExp) {
            if (len > 1) {
              if (baseOut == 16 || baseOut == 8) {
                i = baseOut == 16 ? 4 : 3;
                for (--len; len % i; len++) str += "0";
                xd = convertBase(str, base, baseOut);
                for (len = xd.length; !xd[len - 1]; --len) ;
                for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
              } else {
                str = str.charAt(0) + "." + str.slice(1);
              }
            }
            str = str + (e < 0 ? "p" : "p+") + e;
          } else if (e < 0) {
            for (; ++e; ) str = "0" + str;
            str = "0." + str;
          } else {
            if (++e > len) for (e -= len; e--; ) str += "0";
            else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
      }
      return x2.s < 0 ? "-" + str : str;
    }
    __name(toStringBinary, "toStringBinary");
    function truncate(arr, len) {
      if (arr.length > len) {
        arr.length = len;
        return true;
      }
    }
    __name(truncate, "truncate");
    function abs(x2) {
      return new this(x2).abs();
    }
    __name(abs, "abs");
    function acos(x2) {
      return new this(x2).acos();
    }
    __name(acos, "acos");
    function acosh(x2) {
      return new this(x2).acosh();
    }
    __name(acosh, "acosh");
    function add(x2, y) {
      return new this(x2).plus(y);
    }
    __name(add, "add");
    function asin(x2) {
      return new this(x2).asin();
    }
    __name(asin, "asin");
    function asinh(x2) {
      return new this(x2).asinh();
    }
    __name(asinh, "asinh");
    function atan(x2) {
      return new this(x2).atan();
    }
    __name(atan, "atan");
    function atanh(x2) {
      return new this(x2).atanh();
    }
    __name(atanh, "atanh");
    function atan2(y, x2) {
      y = new this(y);
      x2 = new this(x2);
      var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
      if (!y.s || !x2.s) {
        r = new this(NaN);
      } else if (!y.d && !x2.d) {
        r = getPi(this, wpr, 1).times(x2.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
      } else if (!x2.d || y.isZero()) {
        r = x2.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
      } else if (!y.d || x2.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
      } else if (x2.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x2, wpr, 1));
        x2 = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x2) : r.plus(x2);
      } else {
        r = this.atan(divide(y, x2, wpr, 1));
      }
      return r;
    }
    __name(atan2, "atan2");
    function cbrt(x2) {
      return new this(x2).cbrt();
    }
    __name(cbrt, "cbrt");
    function ceil(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 2);
    }
    __name(ceil, "ceil");
    function clamp(x2, min2, max2) {
      return new this(x2).clamp(min2, max2);
    }
    __name(clamp, "clamp");
    function config2(obj) {
      if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
      var i, p2, v2, useDefaults = obj.defaults === true, ps = [
        "precision",
        1,
        MAX_DIGITS,
        "rounding",
        0,
        8,
        "toExpNeg",
        -EXP_LIMIT,
        0,
        "toExpPos",
        0,
        EXP_LIMIT,
        "maxE",
        0,
        EXP_LIMIT,
        "minE",
        -EXP_LIMIT,
        0,
        "modulo",
        0,
        9
      ];
      for (i = 0; i < ps.length; i += 3) {
        if (p2 = ps[i], useDefaults) this[p2] = DEFAULTS[p2];
        if ((v2 = obj[p2]) !== void 0) {
          if (mathfloor(v2) === v2 && v2 >= ps[i + 1] && v2 <= ps[i + 2]) this[p2] = v2;
          else throw Error(invalidArgument + p2 + ": " + v2);
        }
      }
      if (p2 = "crypto", useDefaults) this[p2] = DEFAULTS[p2];
      if ((v2 = obj[p2]) !== void 0) {
        if (v2 === true || v2 === false || v2 === 0 || v2 === 1) {
          if (v2) {
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
              this[p2] = true;
            } else {
              throw Error(cryptoUnavailable);
            }
          } else {
            this[p2] = false;
          }
        } else {
          throw Error(invalidArgument + p2 + ": " + v2);
        }
      }
      return this;
    }
    __name(config2, "config");
    function cos(x2) {
      return new this(x2).cos();
    }
    __name(cos, "cos");
    function cosh(x2) {
      return new this(x2).cosh();
    }
    __name(cosh, "cosh");
    function clone(obj) {
      var i, p2, ps;
      function Decimal22(v2) {
        var e, i2, t, x2 = this;
        if (!(x2 instanceof Decimal22)) return new Decimal22(v2);
        x2.constructor = Decimal22;
        if (isDecimalInstance(v2)) {
          x2.s = v2.s;
          if (external) {
            if (!v2.d || v2.e > Decimal22.maxE) {
              x2.e = NaN;
              x2.d = null;
            } else if (v2.e < Decimal22.minE) {
              x2.e = 0;
              x2.d = [0];
            } else {
              x2.e = v2.e;
              x2.d = v2.d.slice();
            }
          } else {
            x2.e = v2.e;
            x2.d = v2.d ? v2.d.slice() : v2.d;
          }
          return;
        }
        t = typeof v2;
        if (t === "number") {
          if (v2 === 0) {
            x2.s = 1 / v2 < 0 ? -1 : 1;
            x2.e = 0;
            x2.d = [0];
            return;
          }
          if (v2 < 0) {
            v2 = -v2;
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          if (v2 === ~~v2 && v2 < 1e7) {
            for (e = 0, i2 = v2; i2 >= 10; i2 /= 10) e++;
            if (external) {
              if (e > Decimal22.maxE) {
                x2.e = NaN;
                x2.d = null;
              } else if (e < Decimal22.minE) {
                x2.e = 0;
                x2.d = [0];
              } else {
                x2.e = e;
                x2.d = [v2];
              }
            } else {
              x2.e = e;
              x2.d = [v2];
            }
            return;
          }
          if (v2 * 0 !== 0) {
            if (!v2) x2.s = NaN;
            x2.e = NaN;
            x2.d = null;
            return;
          }
          return parseDecimal(x2, v2.toString());
        }
        if (t === "string") {
          if ((i2 = v2.charCodeAt(0)) === 45) {
            v2 = v2.slice(1);
            x2.s = -1;
          } else {
            if (i2 === 43) v2 = v2.slice(1);
            x2.s = 1;
          }
          return isDecimal.test(v2) ? parseDecimal(x2, v2) : parseOther(x2, v2);
        }
        if (t === "bigint") {
          if (v2 < 0) {
            v2 = -v2;
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          return parseDecimal(x2, v2.toString());
        }
        throw Error(invalidArgument + v2);
      }
      __name(Decimal22, "Decimal2");
      Decimal22.prototype = P;
      Decimal22.ROUND_UP = 0;
      Decimal22.ROUND_DOWN = 1;
      Decimal22.ROUND_CEIL = 2;
      Decimal22.ROUND_FLOOR = 3;
      Decimal22.ROUND_HALF_UP = 4;
      Decimal22.ROUND_HALF_DOWN = 5;
      Decimal22.ROUND_HALF_EVEN = 6;
      Decimal22.ROUND_HALF_CEIL = 7;
      Decimal22.ROUND_HALF_FLOOR = 8;
      Decimal22.EUCLID = 9;
      Decimal22.config = Decimal22.set = config2;
      Decimal22.clone = clone;
      Decimal22.isDecimal = isDecimalInstance;
      Decimal22.abs = abs;
      Decimal22.acos = acos;
      Decimal22.acosh = acosh;
      Decimal22.add = add;
      Decimal22.asin = asin;
      Decimal22.asinh = asinh;
      Decimal22.atan = atan;
      Decimal22.atanh = atanh;
      Decimal22.atan2 = atan2;
      Decimal22.cbrt = cbrt;
      Decimal22.ceil = ceil;
      Decimal22.clamp = clamp;
      Decimal22.cos = cos;
      Decimal22.cosh = cosh;
      Decimal22.div = div;
      Decimal22.exp = exp;
      Decimal22.floor = floor;
      Decimal22.hypot = hypot;
      Decimal22.ln = ln2;
      Decimal22.log = log3;
      Decimal22.log10 = log10;
      Decimal22.log2 = log22;
      Decimal22.max = max;
      Decimal22.min = min;
      Decimal22.mod = mod;
      Decimal22.mul = mul;
      Decimal22.pow = pow;
      Decimal22.random = random;
      Decimal22.round = round;
      Decimal22.sign = sign;
      Decimal22.sin = sin;
      Decimal22.sinh = sinh;
      Decimal22.sqrt = sqrt;
      Decimal22.sub = sub;
      Decimal22.sum = sum;
      Decimal22.tan = tan;
      Decimal22.tanh = tanh;
      Decimal22.trunc = trunc;
      if (obj === void 0) obj = {};
      if (obj) {
        if (obj.defaults !== true) {
          ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
          for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p2 = ps[i++])) obj[p2] = this[p2];
        }
      }
      Decimal22.config(obj);
      return Decimal22;
    }
    __name(clone, "clone");
    function div(x2, y) {
      return new this(x2).div(y);
    }
    __name(div, "div");
    function exp(x2) {
      return new this(x2).exp();
    }
    __name(exp, "exp");
    function floor(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 3);
    }
    __name(floor, "floor");
    function hypot() {
      var i, n, t = new this(0);
      external = false;
      for (i = 0; i < arguments.length; ) {
        n = new this(arguments[i++]);
        if (!n.d) {
          if (n.s) {
            external = true;
            return new this(1 / 0);
          }
          t = n;
        } else if (t.d) {
          t = t.plus(n.times(n));
        }
      }
      external = true;
      return t.sqrt();
    }
    __name(hypot, "hypot");
    function isDecimalInstance(obj) {
      return obj instanceof Decimal2 || obj && obj.toStringTag === tag || false;
    }
    __name(isDecimalInstance, "isDecimalInstance");
    function ln2(x2) {
      return new this(x2).ln();
    }
    __name(ln2, "ln");
    function log3(x2, y) {
      return new this(x2).log(y);
    }
    __name(log3, "log");
    function log22(x2) {
      return new this(x2).log(2);
    }
    __name(log22, "log2");
    function log10(x2) {
      return new this(x2).log(10);
    }
    __name(log10, "log10");
    function max() {
      return maxOrMin(this, arguments, -1);
    }
    __name(max, "max");
    function min() {
      return maxOrMin(this, arguments, 1);
    }
    __name(min, "min");
    function mod(x2, y) {
      return new this(x2).mod(y);
    }
    __name(mod, "mod");
    function mul(x2, y) {
      return new this(x2).mul(y);
    }
    __name(mul, "mul");
    function pow(x2, y) {
      return new this(x2).pow(y);
    }
    __name(pow, "pow");
    function random(sd) {
      var d2, e, k, n, i = 0, r = new this(1), rd = [];
      if (sd === void 0) sd = this.precision;
      else checkInt32(sd, 1, MAX_DIGITS);
      k = Math.ceil(sd / LOG_BASE);
      if (!this.crypto) {
        for (; i < k; ) rd[i++] = Math.random() * 1e7 | 0;
      } else if (crypto.getRandomValues) {
        d2 = crypto.getRandomValues(new Uint32Array(k));
        for (; i < k; ) {
          n = d2[i];
          if (n >= 429e7) {
            d2[i] = crypto.getRandomValues(new Uint32Array(1))[0];
          } else {
            rd[i++] = n % 1e7;
          }
        }
      } else if (crypto.randomBytes) {
        d2 = crypto.randomBytes(k *= 4);
        for (; i < k; ) {
          n = d2[i] + (d2[i + 1] << 8) + (d2[i + 2] << 16) + ((d2[i + 3] & 127) << 24);
          if (n >= 214e7) {
            crypto.randomBytes(4).copy(d2, i);
          } else {
            rd.push(n % 1e7);
            i += 4;
          }
        }
        i = k / 4;
      } else {
        throw Error(cryptoUnavailable);
      }
      k = rd[--i];
      sd %= LOG_BASE;
      if (k && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k / n | 0) * n;
      }
      for (; rd[i] === 0; i--) rd.pop();
      if (i < 0) {
        e = 0;
        rd = [0];
      } else {
        e = -1;
        for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
        for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
        if (k < LOG_BASE) e -= LOG_BASE - k;
      }
      r.e = e;
      r.d = rd;
      return r;
    }
    __name(random, "random");
    function round(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, this.rounding);
    }
    __name(round, "round");
    function sign(x2) {
      x2 = new this(x2);
      return x2.d ? x2.d[0] ? x2.s : 0 * x2.s : x2.s || NaN;
    }
    __name(sign, "sign");
    function sin(x2) {
      return new this(x2).sin();
    }
    __name(sin, "sin");
    function sinh(x2) {
      return new this(x2).sinh();
    }
    __name(sinh, "sinh");
    function sqrt(x2) {
      return new this(x2).sqrt();
    }
    __name(sqrt, "sqrt");
    function sub(x2, y) {
      return new this(x2).sub(y);
    }
    __name(sub, "sub");
    function sum() {
      var i = 0, args = arguments, x2 = new this(args[i]);
      external = false;
      for (; x2.s && ++i < args.length; ) x2 = x2.plus(args[i]);
      external = true;
      return finalise(x2, this.precision, this.rounding);
    }
    __name(sum, "sum");
    function tan(x2) {
      return new this(x2).tan();
    }
    __name(tan, "tan");
    function tanh(x2) {
      return new this(x2).tanh();
    }
    __name(tanh, "tanh");
    function trunc(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 1);
    }
    __name(trunc, "trunc");
    P[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = P.toString;
    P[Symbol.toStringTag] = "Decimal";
    var Decimal2 = P.constructor = clone(DEFAULTS);
    LN10 = new Decimal2(LN10);
    PI = new Decimal2(PI);
    var Sql2 = class _Sql {
      static {
        __name(this, "_Sql");
      }
      constructor(rawStrings, rawValues) {
        if (rawStrings.length - 1 !== rawValues.length) {
          if (rawStrings.length === 0) {
            throw new TypeError("Expected at least 1 string");
          }
          throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
        }
        const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
        this.values = new Array(valuesLength);
        this.strings = new Array(valuesLength + 1);
        this.strings[0] = rawStrings[0];
        let i = 0, pos = 0;
        while (i < rawValues.length) {
          const child = rawValues[i++];
          const rawString = rawStrings[i];
          if (child instanceof _Sql) {
            this.strings[pos] += child.strings[0];
            let childIndex = 0;
            while (childIndex < child.values.length) {
              this.values[pos++] = child.values[childIndex++];
              this.strings[pos] = child.strings[childIndex];
            }
            this.strings[pos] += rawString;
          } else {
            this.values[pos++] = child;
            this.strings[pos] = rawString;
          }
        }
      }
      get sql() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `?${this.strings[i++]}`;
        return value;
      }
      get statement() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `:${i}${this.strings[i++]}`;
        return value;
      }
      get text() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `$${i}${this.strings[i++]}`;
        return value;
      }
      inspect() {
        return {
          sql: this.sql,
          statement: this.statement,
          text: this.text,
          values: this.values
        };
      }
    };
    function join2(values, separator = ",", prefix = "", suffix = "") {
      if (values.length === 0) {
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      }
      return new Sql2([prefix, ...Array(values.length - 1).fill(separator), suffix], values);
    }
    __name(join2, "join");
    function raw3(value) {
      return new Sql2([value], []);
    }
    __name(raw3, "raw");
    var empty2 = raw3("");
    function sql(strings, ...values) {
      return new Sql2(strings, values);
    }
    __name(sql, "sql");
  }
});

// node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/@prisma/client/runtime/wasm-compiler-edge.js
var require_wasm_compiler_edge = __commonJS({
  "node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/@prisma/client/runtime/wasm-compiler-edge.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Vl = Object.create;
    var hr = Object.defineProperty;
    var Ul = Object.getOwnPropertyDescriptor;
    var ql = Object.getOwnPropertyNames;
    var Bl = Object.getPrototypeOf;
    var jl = Object.prototype.hasOwnProperty;
    var xe = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "xe");
    var ue = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "ue");
    var st = /* @__PURE__ */ __name((e, t) => {
      for (var r in t) hr(e, r, { get: t[r], enumerable: true });
    }, "st");
    var Yi = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of ql(t)) !jl.call(e, i) && i !== r && hr(e, i, { get: /* @__PURE__ */ __name(() => t[i], "get"), enumerable: !(n = Ul(t, i)) || n.enumerable });
      return e;
    }, "Yi");
    var Je2 = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? Vl(Bl(e)) : {}, Yi(t || !e || !e.__esModule ? hr(r, "default", { value: e, enumerable: true }) : r, e)), "Je");
    var Xi = /* @__PURE__ */ __name((e) => Yi(hr({}, "__esModule", { value: true }), e), "Xi");
    function Rn(e, t) {
      if (t = t.toLowerCase(), t === "utf8" || t === "utf-8") return new h(Gl.encode(e));
      if (t === "base64" || t === "base64url") return e = e.replace(/-/g, "+").replace(/_/g, "/"), e = e.replace(/[^A-Za-z0-9+/]/g, ""), new h([...atob(e)].map((r) => r.charCodeAt(0)));
      if (t === "binary" || t === "ascii" || t === "latin1" || t === "latin-1") return new h([...e].map((r) => r.charCodeAt(0)));
      if (t === "ucs2" || t === "ucs-2" || t === "utf16le" || t === "utf-16le") {
        let r = new h(e.length * 2), n = new DataView(r.buffer);
        for (let i = 0; i < e.length; i++) n.setUint16(i * 2, e.charCodeAt(i), true);
        return r;
      }
      if (t === "hex") {
        let r = new h(e.length / 2);
        for (let n = 0, i = 0; i < e.length; i += 2, n++) r[n] = parseInt(e.slice(i, i + 2), 16);
        return r;
      }
      to(`encoding "${t}"`);
    }
    __name(Rn, "Rn");
    function Ql(e) {
      let r = Object.getOwnPropertyNames(DataView.prototype).filter((a2) => a2.startsWith("get") || a2.startsWith("set")), n = r.map((a2) => a2.replace("get", "read").replace("set", "write")), i = /* @__PURE__ */ __name((a2, m2) => function(f = 0) {
        return G2(f, "offset"), se(f, "offset"), W(f, "offset", this.length - 1), new DataView(this.buffer)[r[a2]](f, m2);
      }, "i"), o = /* @__PURE__ */ __name((a2, m2) => function(f, T2 = 0) {
        let S2 = r[a2].match(/set(\w+\d+)/)[1].toLowerCase(), v2 = Hl[S2];
        return G2(T2, "offset"), se(T2, "offset"), W(T2, "offset", this.length - 1), Jl(f, "value", v2[0], v2[1]), new DataView(this.buffer)[r[a2]](T2, f, m2), T2 + parseInt(r[a2].match(/\d+/)[0]) / 8;
      }, "o"), s = /* @__PURE__ */ __name((a2) => {
        a2.forEach((m2) => {
          m2.includes("Uint") && (e[m2.replace("Uint", "UInt")] = e[m2]), m2.includes("Float64") && (e[m2.replace("Float64", "Double")] = e[m2]), m2.includes("Float32") && (e[m2.replace("Float32", "Float")] = e[m2]);
        });
      }, "s");
      n.forEach((a2, m2) => {
        a2.startsWith("read") && (e[a2] = i(m2, false), e[a2 + "LE"] = i(m2, true), e[a2 + "BE"] = i(m2, false)), a2.startsWith("write") && (e[a2] = o(m2, false), e[a2 + "LE"] = o(m2, true), e[a2 + "BE"] = o(m2, false)), s([a2, a2 + "LE", a2 + "BE"]);
      });
    }
    __name(Ql, "Ql");
    function to(e) {
      throw new Error(`Buffer polyfill does not implement "${e}"`);
    }
    __name(to, "to");
    function wr2(e, t) {
      if (!(e instanceof Uint8Array)) throw new TypeError(`The "${t}" argument must be an instance of Buffer or Uint8Array`);
    }
    __name(wr2, "wr");
    function W(e, t, r = Kl + 1) {
      if (e < 0 || e > r) {
        let n = new RangeError(`The value of "${t}" is out of range. It must be >= 0 && <= ${r}. Received ${e}`);
        throw n.code = "ERR_OUT_OF_RANGE", n;
      }
    }
    __name(W, "W");
    function G2(e, t) {
      if (typeof e != "number") {
        let r = new TypeError(`The "${t}" argument must be of type number. Received type ${typeof e}.`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(G2, "G");
    function se(e, t) {
      if (!Number.isInteger(e) || Number.isNaN(e)) {
        let r = new RangeError(`The value of "${t}" is out of range. It must be an integer. Received ${e}`);
        throw r.code = "ERR_OUT_OF_RANGE", r;
      }
    }
    __name(se, "se");
    function Jl(e, t, r, n) {
      if (e < r || e > n) {
        let i = new RangeError(`The value of "${t}" is out of range. It must be >= ${r} and <= ${n}. Received ${e}`);
        throw i.code = "ERR_OUT_OF_RANGE", i;
      }
    }
    __name(Jl, "Jl");
    function eo2(e, t) {
      if (typeof e != "string") {
        let r = new TypeError(`The "${t}" argument must be of type string. Received type ${typeof e}`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(eo2, "eo");
    function Zl(e, t = "utf8") {
      return h.from(e, t);
    }
    __name(Zl, "Zl");
    var h;
    var Hl;
    var Gl;
    var zl;
    var Wl;
    var Kl;
    var g;
    var In;
    var u = xe(() => {
      "use strict";
      h = class e extends Uint8Array {
        static {
          __name(this, "e");
        }
        _isBuffer = true;
        get offset() {
          return this.byteOffset;
        }
        static alloc(t, r = 0, n = "utf8") {
          return eo2(n, "encoding"), e.allocUnsafe(t).fill(r, n);
        }
        static allocUnsafe(t) {
          return e.from(t);
        }
        static allocUnsafeSlow(t) {
          return e.from(t);
        }
        static isBuffer(t) {
          return t && !!t._isBuffer;
        }
        static byteLength(t, r = "utf8") {
          if (typeof t == "string") return Rn(t, r).byteLength;
          if (t && t.byteLength) return t.byteLength;
          let n = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.');
          throw n.code = "ERR_INVALID_ARG_TYPE", n;
        }
        static isEncoding(t) {
          return Wl.includes(t);
        }
        static compare(t, r) {
          wr2(t, "buff1"), wr2(r, "buff2");
          for (let n = 0; n < t.length; n++) {
            if (t[n] < r[n]) return -1;
            if (t[n] > r[n]) return 1;
          }
          return t.length === r.length ? 0 : t.length > r.length ? 1 : -1;
        }
        static from(t, r = "utf8") {
          if (t && typeof t == "object" && t.type === "Buffer") return new e(t.data);
          if (typeof t == "number") return new e(new Uint8Array(t));
          if (typeof t == "string") return Rn(t, r);
          if (ArrayBuffer.isView(t)) {
            let { byteOffset: n, byteLength: i, buffer: o } = t;
            return "map" in t && typeof t.map == "function" ? new e(t.map((s) => s % 256), n, i) : new e(o, n, i);
          }
          if (t && typeof t == "object" && ("length" in t || "byteLength" in t || "buffer" in t)) return new e(t);
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        static concat(t, r) {
          if (t.length === 0) return e.alloc(0);
          let n = [].concat(...t.map((o) => [...o])), i = e.alloc(r !== void 0 ? r : n.length);
          return i.set(r !== void 0 ? n.slice(0, r) : n), i;
        }
        slice(t = 0, r = this.length) {
          return this.subarray(t, r);
        }
        subarray(t = 0, r = this.length) {
          return Object.setPrototypeOf(super.subarray(t, r), e.prototype);
        }
        reverse() {
          return super.reverse(), this;
        }
        readIntBE(t, r) {
          G2(t, "offset"), se(t, "offset"), W(t, "offset", this.length - 1), G2(r, "byteLength"), se(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
          return n.getUint8(0) & 128 && (i -= Math.pow(256, r)), i;
        }
        readIntLE(t, r) {
          G2(t, "offset"), se(t, "offset"), W(t, "offset", this.length - 1), G2(r, "byteLength"), se(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
          return n.getUint8(r - 1) & 128 && (i -= Math.pow(256, r)), i;
        }
        readUIntBE(t, r) {
          G2(t, "offset"), se(t, "offset"), W(t, "offset", this.length - 1), G2(r, "byteLength"), se(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
          return i;
        }
        readUintBE(t, r) {
          return this.readUIntBE(t, r);
        }
        readUIntLE(t, r) {
          G2(t, "offset"), se(t, "offset"), W(t, "offset", this.length - 1), G2(r, "byteLength"), se(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
          return i;
        }
        readUintLE(t, r) {
          return this.readUIntLE(t, r);
        }
        writeIntBE(t, r, n) {
          return t = t < 0 ? t + Math.pow(256, n) : t, this.writeUIntBE(t, r, n);
        }
        writeIntLE(t, r, n) {
          return t = t < 0 ? t + Math.pow(256, n) : t, this.writeUIntLE(t, r, n);
        }
        writeUIntBE(t, r, n) {
          G2(r, "offset"), se(r, "offset"), W(r, "offset", this.length - 1), G2(n, "byteLength"), se(n, "byteLength");
          let i = new DataView(this.buffer, r, n);
          for (let o = n - 1; o >= 0; o--) i.setUint8(o, t & 255), t = t / 256;
          return r + n;
        }
        writeUintBE(t, r, n) {
          return this.writeUIntBE(t, r, n);
        }
        writeUIntLE(t, r, n) {
          G2(r, "offset"), se(r, "offset"), W(r, "offset", this.length - 1), G2(n, "byteLength"), se(n, "byteLength");
          let i = new DataView(this.buffer, r, n);
          for (let o = 0; o < n; o++) i.setUint8(o, t & 255), t = t / 256;
          return r + n;
        }
        writeUintLE(t, r, n) {
          return this.writeUIntLE(t, r, n);
        }
        toJSON() {
          return { type: "Buffer", data: Array.from(this) };
        }
        swap16() {
          let t = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 2) t.setUint16(r, t.getUint16(r, true), false);
          return this;
        }
        swap32() {
          let t = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 4) t.setUint32(r, t.getUint32(r, true), false);
          return this;
        }
        swap64() {
          let t = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 8) t.setBigUint64(r, t.getBigUint64(r, true), false);
          return this;
        }
        compare(t, r = 0, n = t.length, i = 0, o = this.length) {
          return wr2(t, "target"), G2(r, "targetStart"), G2(n, "targetEnd"), G2(i, "sourceStart"), G2(o, "sourceEnd"), W(r, "targetStart"), W(n, "targetEnd", t.length), W(i, "sourceStart"), W(o, "sourceEnd", this.length), e.compare(this.slice(i, o), t.slice(r, n));
        }
        equals(t) {
          return wr2(t, "otherBuffer"), this.length === t.length && this.every((r, n) => r === t[n]);
        }
        copy(t, r = 0, n = 0, i = this.length) {
          W(r, "targetStart"), W(n, "sourceStart", this.length), W(i, "sourceEnd"), r >>>= 0, n >>>= 0, i >>>= 0;
          let o = 0;
          for (; n < i && !(this[n] === void 0 || t[r] === void 0); ) t[r] = this[n], o++, n++, r++;
          return o;
        }
        write(t, r, n, i = "utf8") {
          let o = typeof r == "string" ? 0 : r ?? 0, s = typeof n == "string" ? this.length - o : n ?? this.length - o;
          return i = typeof r == "string" ? r : typeof n == "string" ? n : i, G2(o, "offset"), G2(s, "length"), W(o, "offset", this.length), W(s, "length", this.length), (i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le") && (s = s - s % 2), Rn(t, i).copy(this, o, 0, s);
        }
        fill(t = 0, r = 0, n = this.length, i = "utf-8") {
          let o = typeof r == "string" ? 0 : r, s = typeof n == "string" ? this.length : n;
          if (i = typeof r == "string" ? r : typeof n == "string" ? n : i, t = e.from(typeof t == "number" ? [t] : t ?? [], i), eo2(i, "encoding"), W(o, "offset", this.length), W(s, "end", this.length), t.length !== 0) for (let a2 = o; a2 < s; a2 += t.length) super.set(t.slice(0, t.length + a2 >= this.length ? this.length - a2 : t.length), a2);
          return this;
        }
        includes(t, r = null, n = "utf-8") {
          return this.indexOf(t, r, n) !== -1;
        }
        lastIndexOf(t, r = null, n = "utf-8") {
          return this.indexOf(t, r, n, true);
        }
        indexOf(t, r = null, n = "utf-8", i = false) {
          let o = i ? this.findLastIndex.bind(this) : this.findIndex.bind(this);
          n = typeof r == "string" ? r : n;
          let s = e.from(typeof t == "number" ? [t] : t, n), a2 = typeof r == "string" ? 0 : r;
          return a2 = typeof r == "number" ? a2 : null, a2 = Number.isNaN(a2) ? null : a2, a2 ??= i ? this.length : 0, a2 = a2 < 0 ? this.length + a2 : a2, s.length === 0 && i === false ? a2 >= this.length ? this.length : a2 : s.length === 0 && i === true ? (a2 >= this.length ? this.length : a2) || this.length : o((m2, f) => (i ? f <= a2 : f >= a2) && this[f] === s[0] && s.every((S2, v2) => this[f + v2] === S2));
        }
        toString(t = "utf8", r = 0, n = this.length) {
          if (r = r < 0 ? 0 : r, t = t.toString().toLowerCase(), n <= 0) return "";
          if (t === "utf8" || t === "utf-8") return zl.decode(this.slice(r, n));
          if (t === "base64" || t === "base64url") {
            let i = btoa(this.reduce((o, s) => o + In(s), ""));
            return t === "base64url" ? i.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : i;
          }
          if (t === "binary" || t === "ascii" || t === "latin1" || t === "latin-1") return this.slice(r, n).reduce((i, o) => i + In(o & (t === "ascii" ? 127 : 255)), "");
          if (t === "ucs2" || t === "ucs-2" || t === "utf16le" || t === "utf-16le") {
            let i = new DataView(this.buffer.slice(r, n));
            return Array.from({ length: i.byteLength / 2 }, (o, s) => s * 2 + 1 < i.byteLength ? In(i.getUint16(s * 2, true)) : "").join("");
          }
          if (t === "hex") return this.slice(r, n).reduce((i, o) => i + o.toString(16).padStart(2, "0"), "");
          to(`encoding "${t}"`);
        }
        toLocaleString() {
          return this.toString();
        }
        inspect() {
          return `<Buffer ${this.toString("hex").match(/.{1,2}/g).join(" ")}>`;
        }
      };
      Hl = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn], biguint64: [0n, 0xffffffffffffffffn] }, Gl = new TextEncoder(), zl = new TextDecoder(), Wl = ["utf8", "utf-8", "hex", "base64", "ascii", "binary", "base64url", "ucs2", "ucs-2", "utf16le", "utf-16le", "latin1", "latin-1"], Kl = 4294967295;
      Ql(h.prototype);
      g = new Proxy(Zl, { construct(e, [t, r]) {
        return h.from(t, r);
      }, get(e, t) {
        return h[t];
      } }), In = String.fromCodePoint;
    });
    var y;
    var x2;
    var l = xe(() => {
      "use strict";
      y = { nextTick: /* @__PURE__ */ __name((e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, "nextTick"), env: {}, version: "", cwd: /* @__PURE__ */ __name(() => "/", "cwd"), stderr: {}, argv: ["/bin/node"], pid: 1e4 }, { cwd: x2 } = y;
    });
    var w;
    var c = xe(() => {
      "use strict";
      w = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: /* @__PURE__ */ __name(() => Date.now() - e, "now") };
      })();
    });
    var b2;
    var p2 = xe(() => {
      "use strict";
      b2 = /* @__PURE__ */ __name(() => {
      }, "b");
      b2.prototype = b2;
    });
    function oo2(e, t) {
      var r, n, i, o, s, a2, m2, f, T2 = e.constructor, S2 = T2.precision;
      if (!e.s || !t.s) return t.s || (t = new T2(e)), Q ? _(t, S2) : t;
      if (m2 = e.d, f = t.d, s = e.e, i = t.e, m2 = m2.slice(), o = s - i, o) {
        for (o < 0 ? (n = m2, o = -o, a2 = f.length) : (n = f, i = s, a2 = m2.length), s = Math.ceil(S2 / U2), a2 = s > a2 ? s + 1 : a2 + 1, o > a2 && (o = a2, n.length = 1), n.reverse(); o--; ) n.push(0);
        n.reverse();
      }
      for (a2 = m2.length, o = f.length, a2 - o < 0 && (o = a2, n = f, f = m2, m2 = n), r = 0; o; ) r = (m2[--o] = m2[o] + f[o] + r) / K | 0, m2[o] %= K;
      for (r && (m2.unshift(r), ++i), a2 = m2.length; m2[--a2] == 0; ) m2.pop();
      return t.d = m2, t.e = i, Q ? _(t, S2) : t;
    }
    __name(oo2, "oo");
    function Te(e, t, r) {
      if (e !== ~~e || e < t || e > r) throw Error(Ge2 + e);
    }
    __name(Te, "Te");
    function Ee(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++) n = e[t] + "", r = U2 - n.length, r && (o += _e(r)), o += n;
        s = e[t], n = s + "", r = U2 - n.length, r && (o += _e(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(Ee, "Ee");
    function so2(e, t) {
      var r, n, i, o, s, a2, m2 = 0, f = 0, T2 = e.constructor, S2 = T2.precision;
      if (z(e) > 16) throw Error(On + z(e));
      if (!e.s) return new T2(le);
      for (t == null ? (Q = false, a2 = S2) : a2 = t, s = new T2(0.03125); e.abs().gte(0.1); ) e = e.times(s), f += 5;
      for (n = Math.log(He2(2, f)) / Math.LN10 * 2 + 5 | 0, a2 += n, r = i = o = new T2(le), T2.precision = a2; ; ) {
        if (i = _(i.times(e), a2), r = r.times(++m2), s = o.plus(Oe(i, r, a2)), Ee(s.d).slice(0, a2) === Ee(o.d).slice(0, a2)) {
          for (; f--; ) o = _(o.times(o), a2);
          return T2.precision = S2, t == null ? (Q = true, _(o, S2)) : o;
        }
        o = s;
      }
    }
    __name(so2, "so");
    function z(e) {
      for (var t = e.e * U2, r = e.d[0]; r >= 10; r /= 10) t++;
      return t;
    }
    __name(z, "z");
    function kn3(e, t, r) {
      if (t > e.LN10.sd()) throw Q = true, r && (e.precision = r), Error(pe + "LN10 precision limit exceeded");
      return _(new e(e.LN10), t);
    }
    __name(kn3, "kn");
    function _e(e) {
      for (var t = ""; e--; ) t += "0";
      return t;
    }
    __name(_e, "_e");
    function Mt(e, t) {
      var r, n, i, o, s, a2, m2, f, T2, S2 = 1, v2 = 10, A = e, N = A.d, R = A.constructor, I = R.precision;
      if (A.s < 1) throw Error(pe + (A.s ? "NaN" : "-Infinity"));
      if (A.eq(le)) return new R(0);
      if (t == null ? (Q = false, f = I) : f = t, A.eq(10)) return t == null && (Q = true), kn3(R, f);
      if (f += v2, R.precision = f, r = Ee(N), n = r.charAt(0), o = z(A), Math.abs(o) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) A = A.times(e), r = Ee(A.d), n = r.charAt(0), S2++;
        o = z(A), n > 1 ? (A = new R("0." + r), o++) : A = new R(n + "." + r.slice(1));
      } else return m2 = kn3(R, f + 2, I).times(o + ""), A = Mt(new R(n + "." + r.slice(1)), f - v2).plus(m2), R.precision = I, t == null ? (Q = true, _(A, I)) : A;
      for (a2 = s = A = Oe(A.minus(le), A.plus(le), f), T2 = _(A.times(A), f), i = 3; ; ) {
        if (s = _(s.times(T2), f), m2 = a2.plus(Oe(s, new R(i), f)), Ee(m2.d).slice(0, f) === Ee(a2.d).slice(0, f)) return a2 = a2.times(2), o !== 0 && (a2 = a2.plus(kn3(R, f + 2, I).times(o + ""))), a2 = Oe(a2, new R(S2), f), R.precision = I, t == null ? (Q = true, _(a2, I)) : a2;
        a2 = m2, i += 2;
      }
    }
    __name(Mt, "Mt");
    function ro(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
      for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
      if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = ut2(r / U2), e.d = [], n = (r + 1) % U2, r < 0 && (n += U2), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= U2; n < i; ) e.d.push(+t.slice(n, n += U2));
          t = t.slice(n), n = U2 - t.length;
        } else n -= i;
        for (; n--; ) t += "0";
        if (e.d.push(+t), Q && (e.e > br2 || e.e < -br2)) throw Error(On + r);
      } else e.s = 0, e.e = 0, e.d = [0];
      return e;
    }
    __name(ro, "ro");
    function _(e, t, r) {
      var n, i, o, s, a2, m2, f, T2, S2 = e.d;
      for (s = 1, o = S2[0]; o >= 10; o /= 10) s++;
      if (n = t - s, n < 0) n += U2, i = t, f = S2[T2 = 0];
      else {
        if (T2 = Math.ceil((n + 1) / U2), o = S2.length, T2 >= o) return e;
        for (f = o = S2[T2], s = 1; o >= 10; o /= 10) s++;
        n %= U2, i = n - U2 + s;
      }
      if (r !== void 0 && (o = He2(10, s - i - 1), a2 = f / o % 10 | 0, m2 = t < 0 || S2[T2 + 1] !== void 0 || f % o, m2 = r < 4 ? (a2 || m2) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : a2 > 5 || a2 == 5 && (r == 4 || m2 || r == 6 && (n > 0 ? i > 0 ? f / He2(10, s - i) : 0 : S2[T2 - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !S2[0]) return m2 ? (o = z(e), S2.length = 1, t = t - o - 1, S2[0] = He2(10, (U2 - t % U2) % U2), e.e = ut2(-t / U2) || 0) : (S2.length = 1, S2[0] = e.e = e.s = 0), e;
      if (n == 0 ? (S2.length = T2, o = 1, T2--) : (S2.length = T2 + 1, o = He2(10, U2 - n), S2[T2] = i > 0 ? (f / He2(10, s - i) % He2(10, i) | 0) * o : 0), m2) for (; ; ) if (T2 == 0) {
        (S2[0] += o) == K && (S2[0] = 1, ++e.e);
        break;
      } else {
        if (S2[T2] += o, S2[T2] != K) break;
        S2[T2--] = 0, o = 1;
      }
      for (n = S2.length; S2[--n] === 0; ) S2.pop();
      if (Q && (e.e > br2 || e.e < -br2)) throw Error(On + z(e));
      return e;
    }
    __name(_, "_");
    function ao2(e, t) {
      var r, n, i, o, s, a2, m2, f, T2, S2, v2 = e.constructor, A = v2.precision;
      if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new v2(e), Q ? _(t, A) : t;
      if (m2 = e.d, S2 = t.d, n = t.e, f = e.e, m2 = m2.slice(), s = f - n, s) {
        for (T2 = s < 0, T2 ? (r = m2, s = -s, a2 = S2.length) : (r = S2, n = f, a2 = m2.length), i = Math.max(Math.ceil(A / U2), a2) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; ) r.push(0);
        r.reverse();
      } else {
        for (i = m2.length, a2 = S2.length, T2 = i < a2, T2 && (a2 = i), i = 0; i < a2; i++) if (m2[i] != S2[i]) {
          T2 = m2[i] < S2[i];
          break;
        }
        s = 0;
      }
      for (T2 && (r = m2, m2 = S2, S2 = r, t.s = -t.s), a2 = m2.length, i = S2.length - a2; i > 0; --i) m2[a2++] = 0;
      for (i = S2.length; i > s; ) {
        if (m2[--i] < S2[i]) {
          for (o = i; o && m2[--o] === 0; ) m2[o] = K - 1;
          --m2[o], m2[i] += K;
        }
        m2[i] -= S2[i];
      }
      for (; m2[--a2] === 0; ) m2.pop();
      for (; m2[0] === 0; m2.shift()) --n;
      return m2[0] ? (t.d = m2, t.e = n, Q ? _(t, A) : t) : new v2(0);
    }
    __name(ao2, "ao");
    function ze(e, t, r) {
      var n, i = z(e), o = Ee(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + _e(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + _e(-i - 1) + o, r && (n = r - s) > 0 && (o += _e(n))) : i >= s ? (o += _e(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + _e(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += _e(n))), e.s < 0 ? "-" + o : o;
    }
    __name(ze, "ze");
    function no(e, t) {
      if (e.length > t) return e.length = t, true;
    }
    __name(no, "no");
    function uo(e) {
      var t, r, n;
      function i(o) {
        var s = this;
        if (!(s instanceof i)) return new i(o);
        if (s.constructor = i, o instanceof i) {
          s.s = o.s, s.e = o.e, s.d = (o = o.d) ? o.slice() : o;
          return;
        }
        if (typeof o == "number") {
          if (o * 0 !== 0) throw Error(Ge2 + o);
          if (o > 0) s.s = 1;
          else if (o < 0) o = -o, s.s = -1;
          else {
            s.s = 0, s.e = 0, s.d = [0];
            return;
          }
          if (o === ~~o && o < 1e7) {
            s.e = 0, s.d = [o];
            return;
          }
          return ro(s, o.toString());
        } else if (typeof o != "string") throw Error(Ge2 + o);
        if (o.charCodeAt(0) === 45 ? (o = o.slice(1), s.s = -1) : s.s = 1, Xl.test(o)) ro(s, o);
        else throw Error(Ge2 + o);
      }
      __name(i, "i");
      if (i.prototype = C, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = uo, i.config = i.set = ec, e === void 0 && (e = {}), e) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(uo, "uo");
    function ec(e) {
      if (!e || typeof e != "object") throw Error(pe + "Object expected");
      var t, r, n, i = ["precision", 1, at, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (t = 0; t < i.length; t += 3) if ((n = e[r = i[t]]) !== void 0) if (ut2(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Ge2 + r + ": " + n);
      if ((n = e[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
      else throw Error(Ge2 + r + ": " + n);
      return this;
    }
    __name(ec, "ec");
    var at;
    var Yl;
    var lo2;
    var Q;
    var pe;
    var Ge2;
    var On;
    var ut2;
    var He2;
    var Xl;
    var le;
    var K;
    var U2;
    var io2;
    var br2;
    var C;
    var Oe;
    var lo2;
    var co = xe(() => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      at = 1e9, Yl = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, Q = true, pe = "[DecimalError] ", Ge2 = pe + "Invalid argument: ", On = pe + "Exponent out of range: ", ut2 = Math.floor, He2 = Math.pow, Xl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, K = 1e7, U2 = 7, io2 = 9007199254740991, br2 = ut2(io2 / U2), C = {};
      C.absoluteValue = C.abs = function() {
        var e = new this.constructor(this);
        return e.s && (e.s = 1), e;
      };
      C.comparedTo = C.cmp = function(e) {
        var t, r, n, i, o = this;
        if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
        if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
        for (n = o.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
        return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
      };
      C.decimalPlaces = C.dp = function() {
        var e = this, t = e.d.length - 1, r = (t - e.e) * U2;
        if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
        return r < 0 ? 0 : r;
      };
      C.dividedBy = C.div = function(e) {
        return Oe(this, new this.constructor(e));
      };
      C.dividedToIntegerBy = C.idiv = function(e) {
        var t = this, r = t.constructor;
        return _(Oe(t, new r(e), 0, 1), r.precision);
      };
      C.equals = C.eq = function(e) {
        return !this.cmp(e);
      };
      C.exponent = function() {
        return z(this);
      };
      C.greaterThan = C.gt = function(e) {
        return this.cmp(e) > 0;
      };
      C.greaterThanOrEqualTo = C.gte = function(e) {
        return this.cmp(e) >= 0;
      };
      C.isInteger = C.isint = function() {
        return this.e > this.d.length - 2;
      };
      C.isNegative = C.isneg = function() {
        return this.s < 0;
      };
      C.isPositive = C.ispos = function() {
        return this.s > 0;
      };
      C.isZero = function() {
        return this.s === 0;
      };
      C.lessThan = C.lt = function(e) {
        return this.cmp(e) < 0;
      };
      C.lessThanOrEqualTo = C.lte = function(e) {
        return this.cmp(e) < 1;
      };
      C.logarithm = C.log = function(e) {
        var t, r = this, n = r.constructor, i = n.precision, o = i + 5;
        if (e === void 0) e = new n(10);
        else if (e = new n(e), e.s < 1 || e.eq(le)) throw Error(pe + "NaN");
        if (r.s < 1) throw Error(pe + (r.s ? "NaN" : "-Infinity"));
        return r.eq(le) ? new n(0) : (Q = false, t = Oe(Mt(r, o), Mt(e, o), o), Q = true, _(t, i));
      };
      C.minus = C.sub = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? ao2(t, e) : oo2(t, (e.s = -e.s, e));
      };
      C.modulo = C.mod = function(e) {
        var t, r = this, n = r.constructor, i = n.precision;
        if (e = new n(e), !e.s) throw Error(pe + "NaN");
        return r.s ? (Q = false, t = Oe(r, e, 0, 1).times(e), Q = true, r.minus(t)) : _(new n(r), i);
      };
      C.naturalExponential = C.exp = function() {
        return so2(this);
      };
      C.naturalLogarithm = C.ln = function() {
        return Mt(this);
      };
      C.negated = C.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s || 0, e;
      };
      C.plus = C.add = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? oo2(t, e) : ao2(t, (e.s = -e.s, e));
      };
      C.precision = C.sd = function(e) {
        var t, r, n, i = this;
        if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ge2 + e);
        if (t = z(i) + 1, n = i.d.length - 1, r = n * U2 + 1, n = i.d[n], n) {
          for (; n % 10 == 0; n /= 10) r--;
          for (n = i.d[0]; n >= 10; n /= 10) r++;
        }
        return e && t > r ? t : r;
      };
      C.squareRoot = C.sqrt = function() {
        var e, t, r, n, i, o, s, a2 = this, m2 = a2.constructor;
        if (a2.s < 1) {
          if (!a2.s) return new m2(0);
          throw Error(pe + "NaN");
        }
        for (e = z(a2), Q = false, i = Math.sqrt(+a2), i == 0 || i == 1 / 0 ? (t = Ee(a2.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = ut2((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new m2(t)) : n = new m2(i.toString()), r = m2.precision, i = s = r + 3; ; ) if (o = n, n = o.plus(Oe(a2, o, s + 2)).times(0.5), Ee(o.d).slice(0, s) === (t = Ee(n.d)).slice(0, s)) {
          if (t = t.slice(s - 3, s + 1), i == s && t == "4999") {
            if (_(o, r + 1, 0), o.times(o).eq(a2)) {
              n = o;
              break;
            }
          } else if (t != "9999") break;
          s += 4;
        }
        return Q = true, _(n, r);
      };
      C.times = C.mul = function(e) {
        var t, r, n, i, o, s, a2, m2, f, T2 = this, S2 = T2.constructor, v2 = T2.d, A = (e = new S2(e)).d;
        if (!T2.s || !e.s) return new S2(0);
        for (e.s *= T2.s, r = T2.e + e.e, m2 = v2.length, f = A.length, m2 < f && (o = v2, v2 = A, A = o, s = m2, m2 = f, f = s), o = [], s = m2 + f, n = s; n--; ) o.push(0);
        for (n = f; --n >= 0; ) {
          for (t = 0, i = m2 + n; i > n; ) a2 = o[i] + A[n] * v2[i - n - 1] + t, o[i--] = a2 % K | 0, t = a2 / K | 0;
          o[i] = (o[i] + t) % K | 0;
        }
        for (; !o[--s]; ) o.pop();
        return t ? ++r : o.shift(), e.d = o, e.e = r, Q ? _(e, S2.precision) : e;
      };
      C.toDecimalPlaces = C.todp = function(e, t) {
        var r = this, n = r.constructor;
        return r = new n(r), e === void 0 ? r : (Te(e, 0, at), t === void 0 ? t = n.rounding : Te(t, 0, 8), _(r, e + z(r) + 1, t));
      };
      C.toExponential = function(e, t) {
        var r, n = this, i = n.constructor;
        return e === void 0 ? r = ze(n, true) : (Te(e, 0, at), t === void 0 ? t = i.rounding : Te(t, 0, 8), n = _(new i(n), e + 1, t), r = ze(n, true, e + 1)), r;
      };
      C.toFixed = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? ze(i) : (Te(e, 0, at), t === void 0 ? t = o.rounding : Te(t, 0, 8), n = _(new o(i), e + z(i) + 1, t), r = ze(n.abs(), false, e + z(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
      };
      C.toInteger = C.toint = function() {
        var e = this, t = e.constructor;
        return _(new t(e), z(e) + 1, t.rounding);
      };
      C.toNumber = function() {
        return +this;
      };
      C.toPower = C.pow = function(e) {
        var t, r, n, i, o, s, a2 = this, m2 = a2.constructor, f = 12, T2 = +(e = new m2(e));
        if (!e.s) return new m2(le);
        if (a2 = new m2(a2), !a2.s) {
          if (e.s < 1) throw Error(pe + "Infinity");
          return a2;
        }
        if (a2.eq(le)) return a2;
        if (n = m2.precision, e.eq(le)) return _(a2, n);
        if (t = e.e, r = e.d.length - 1, s = t >= r, o = a2.s, s) {
          if ((r = T2 < 0 ? -T2 : T2) <= io2) {
            for (i = new m2(le), t = Math.ceil(n / U2 + 4), Q = false; r % 2 && (i = i.times(a2), no(i.d, t)), r = ut2(r / 2), r !== 0; ) a2 = a2.times(a2), no(a2.d, t);
            return Q = true, e.s < 0 ? new m2(le).div(i) : _(i, n);
          }
        } else if (o < 0) throw Error(pe + "NaN");
        return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, a2.s = 1, Q = false, i = e.times(Mt(a2, n + f)), Q = true, i = so2(i), i.s = o, i;
      };
      C.toPrecision = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? (r = z(i), n = ze(i, r <= o.toExpNeg || r >= o.toExpPos)) : (Te(e, 1, at), t === void 0 ? t = o.rounding : Te(t, 0, 8), i = _(new o(i), e, t), r = z(i), n = ze(i, e <= r || r <= o.toExpNeg, e)), n;
      };
      C.toSignificantDigits = C.tosd = function(e, t) {
        var r = this, n = r.constructor;
        return e === void 0 ? (e = n.precision, t = n.rounding) : (Te(e, 1, at), t === void 0 ? t = n.rounding : Te(t, 0, 8)), _(new n(r), e, t);
      };
      C.toString = C.valueOf = C.val = C.toJSON = C[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        var e = this, t = z(e), r = e.constructor;
        return ze(e, t <= r.toExpNeg || t >= r.toExpPos);
      };
      Oe = /* @__PURE__ */ (function() {
        function e(n, i) {
          var o, s = 0, a2 = n.length;
          for (n = n.slice(); a2--; ) o = n[a2] * i + s, n[a2] = o % K | 0, s = o / K | 0;
          return s && n.unshift(s), n;
        }
        __name(e, "e");
        function t(n, i, o, s) {
          var a2, m2;
          if (o != s) m2 = o > s ? 1 : -1;
          else for (a2 = m2 = 0; a2 < o; a2++) if (n[a2] != i[a2]) {
            m2 = n[a2] > i[a2] ? 1 : -1;
            break;
          }
          return m2;
        }
        __name(t, "t");
        function r(n, i, o) {
          for (var s = 0; o--; ) n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * K + n[o] - i[o];
          for (; !n[0] && n.length > 1; ) n.shift();
        }
        __name(r, "r");
        return function(n, i, o, s) {
          var a2, m2, f, T2, S2, v2, A, N, R, I, J, j, $2, oe, Qe, Cn, ge2, gr2, yr = n.constructor, $l = n.s == i.s ? 1 : -1, be2 = n.d, H = i.d;
          if (!n.s) return new yr(n);
          if (!i.s) throw Error(pe + "Division by zero");
          for (m2 = n.e - i.e, ge2 = H.length, Qe = be2.length, A = new yr($l), N = A.d = [], f = 0; H[f] == (be2[f] || 0); ) ++f;
          if (H[f] > (be2[f] || 0) && --m2, o == null ? j = o = yr.precision : s ? j = o + (z(n) - z(i)) + 1 : j = o, j < 0) return new yr(0);
          if (j = j / U2 + 2 | 0, f = 0, ge2 == 1) for (T2 = 0, H = H[0], j++; (f < Qe || T2) && j--; f++) $2 = T2 * K + (be2[f] || 0), N[f] = $2 / H | 0, T2 = $2 % H | 0;
          else {
            for (T2 = K / (H[0] + 1) | 0, T2 > 1 && (H = e(H, T2), be2 = e(be2, T2), ge2 = H.length, Qe = be2.length), oe = ge2, R = be2.slice(0, ge2), I = R.length; I < ge2; ) R[I++] = 0;
            gr2 = H.slice(), gr2.unshift(0), Cn = H[0], H[1] >= K / 2 && ++Cn;
            do
              T2 = 0, a2 = t(H, R, ge2, I), a2 < 0 ? (J = R[0], ge2 != I && (J = J * K + (R[1] || 0)), T2 = J / Cn | 0, T2 > 1 ? (T2 >= K && (T2 = K - 1), S2 = e(H, T2), v2 = S2.length, I = R.length, a2 = t(S2, R, v2, I), a2 == 1 && (T2--, r(S2, ge2 < v2 ? gr2 : H, v2))) : (T2 == 0 && (a2 = T2 = 1), S2 = H.slice()), v2 = S2.length, v2 < I && S2.unshift(0), r(R, S2, I), a2 == -1 && (I = R.length, a2 = t(H, R, ge2, I), a2 < 1 && (T2++, r(R, ge2 < I ? gr2 : H, I))), I = R.length) : a2 === 0 && (T2++, R = [0]), N[f++] = T2, a2 && R[0] ? R[I++] = be2[oe] || 0 : (R = [be2[oe]], I = 1);
            while ((oe++ < Qe || R[0] !== void 0) && j--);
          }
          return N[0] || N.shift(), A.e = m2, _(A, s ? o + z(A) + 1 : o);
        };
      })();
      lo2 = uo(Yl);
      le = new lo2(1);
    });
    var d2 = xe(() => {
      "use strict";
      co();
    });
    var Fn = {};
    st(Fn, { Hash: /* @__PURE__ */ __name(() => $t, "Hash"), createHash: /* @__PURE__ */ __name(() => ko, "createHash"), default: /* @__PURE__ */ __name(() => ct2, "default"), randomFillSync: /* @__PURE__ */ __name(() => Sr2, "randomFillSync"), randomUUID: /* @__PURE__ */ __name(() => Pr, "randomUUID"), webcrypto: /* @__PURE__ */ __name(() => Vt, "webcrypto") });
    function Pr() {
      return globalThis.crypto.randomUUID();
    }
    __name(Pr, "Pr");
    function Sr2(e, t, r) {
      return t !== void 0 && (r !== void 0 ? e = e.subarray(t, t + r) : e = e.subarray(t)), globalThis.crypto.getRandomValues(e);
    }
    __name(Sr2, "Sr");
    function ko(e) {
      return new $t(e);
    }
    __name(ko, "ko");
    var Vt;
    var $t;
    var ct2;
    var We = xe(() => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Vt = globalThis.crypto;
      $t = class {
        static {
          __name(this, "$t");
        }
        #e = [];
        #t;
        constructor(t) {
          this.#t = t;
        }
        update(t) {
          this.#e.push(t);
        }
        async digest() {
          let t = new Uint8Array(this.#e.reduce((i, o) => i + o.length, 0)), r = 0;
          for (let i of this.#e) t.set(i, r), r += i.length;
          let n = await globalThis.crypto.subtle.digest(this.#t, t);
          return new Uint8Array(n);
        }
      }, ct2 = { webcrypto: Vt, randomUUID: Pr, randomFillSync: Sr2, createHash: ko, Hash: $t };
    });
    var Oo = ue(() => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
    });
    var No = ue((Ky, sc) => {
      sc.exports = { name: "@prisma/engines-version", version: "7.8.0-6.3c6e192761c0362d496ed980de936e2f3cebcd3a", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "3c6e192761c0362d496ed980de936e2f3cebcd3a" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Do = ue((vr2) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Object.defineProperty(vr2, "__esModule", { value: true });
      vr2.enginesVersion = void 0;
      vr2.enginesVersion = No().prisma.enginesVersion;
    });
    var Fo = ue((lh, _o2) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      _o2.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Vo = ue((Mh, Cr) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Cr.exports = (e = {}) => {
        let t;
        if (e.repoUrl) t = e.repoUrl;
        else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Cr.exports.default = Cr.exports;
    });
    var Qn2 = ue((Tb, Bo) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Bo.exports = /* @__PURE__ */ (function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a2 = 0, m2, f, T2, S2, v2, A, N, R, I, J, j, $2, oe = [];
          for (m2 = 0; m2 < i; m2++) oe.push(m2 + 1), oe.push(t.charCodeAt(s + m2));
          for (var Qe = oe.length - 1; a2 < o - 3; ) for (I = r.charCodeAt(s + (f = a2)), J = r.charCodeAt(s + (T2 = a2 + 1)), j = r.charCodeAt(s + (S2 = a2 + 2)), $2 = r.charCodeAt(s + (v2 = a2 + 3)), A = a2 += 4, m2 = 0; m2 < Qe; m2 += 2) N = oe[m2], R = oe[m2 + 1], f = e(N, f, T2, I, R), T2 = e(f, T2, S2, J, R), S2 = e(T2, S2, v2, j, R), A = e(S2, v2, A, $2, R), oe[m2] = A, v2 = S2, S2 = T2, T2 = f, f = N;
          for (; a2 < o; ) for (I = r.charCodeAt(s + (f = a2)), A = ++a2, m2 = 0; m2 < Qe; m2 += 2) N = oe[m2], oe[m2] = A = e(N, f, A, I, oe[m2 + 1]), f = N;
          return A;
        };
      })();
    });
    var Go = xe(() => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
    });
    var zo = xe(() => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
    });
    var Jr;
    var xs = xe(() => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Jr = class {
        static {
          __name(this, "Jr");
        }
        events = {};
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var ci = ue((Xe2) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Object.defineProperty(Xe2, "__esModule", { value: true });
      Xe2.anumber = li;
      Xe2.abytes = da2;
      Xe2.ahash = Jp;
      Xe2.aexists = Hp;
      Xe2.aoutput = Gp;
      function li(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
      }
      __name(li, "li");
      function Qp(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      __name(Qp, "Qp");
      function da2(e, ...t) {
        if (!Qp(e)) throw new Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
      }
      __name(da2, "da");
      function Jp(e) {
        if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
        li(e.outputLen), li(e.blockLen);
      }
      __name(Jp, "Jp");
      function Hp(e, t = true) {
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished) throw new Error("Hash#digest() has already been called");
      }
      __name(Hp, "Hp");
      function Gp(e, t) {
        da2(e);
        let r = t.outputLen;
        if (e.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
      }
      __name(Gp, "Gp");
    });
    var Ma = ue((O2) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Object.defineProperty(O2, "__esModule", { value: true });
      O2.add5L = O2.add5H = O2.add4H = O2.add4L = O2.add3H = O2.add3L = O2.rotlBL = O2.rotlBH = O2.rotlSL = O2.rotlSH = O2.rotr32L = O2.rotr32H = O2.rotrBL = O2.rotrBH = O2.rotrSL = O2.rotrSH = O2.shrSL = O2.shrSH = O2.toBig = void 0;
      O2.fromBig = di;
      O2.split = ma2;
      O2.add = Ca;
      var en = BigInt(2 ** 32 - 1), pi = BigInt(32);
      function di(e, t = false) {
        return t ? { h: Number(e & en), l: Number(e >> pi & en) } : { h: Number(e >> pi & en) | 0, l: Number(e & en) | 0 };
      }
      __name(di, "di");
      function ma2(e, t = false) {
        let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: o, l: s } = di(e[i], t);
          [r[i], n[i]] = [o, s];
        }
        return [r, n];
      }
      __name(ma2, "ma");
      var fa = /* @__PURE__ */ __name((e, t) => BigInt(e >>> 0) << pi | BigInt(t >>> 0), "fa");
      O2.toBig = fa;
      var ga2 = /* @__PURE__ */ __name((e, t, r) => e >>> r, "ga");
      O2.shrSH = ga2;
      var ya2 = /* @__PURE__ */ __name((e, t, r) => e << 32 - r | t >>> r, "ya");
      O2.shrSL = ya2;
      var ha2 = /* @__PURE__ */ __name((e, t, r) => e >>> r | t << 32 - r, "ha");
      O2.rotrSH = ha2;
      var wa2 = /* @__PURE__ */ __name((e, t, r) => e << 32 - r | t >>> r, "wa");
      O2.rotrSL = wa2;
      var ba2 = /* @__PURE__ */ __name((e, t, r) => e << 64 - r | t >>> r - 32, "ba");
      O2.rotrBH = ba2;
      var xa2 = /* @__PURE__ */ __name((e, t, r) => e >>> r - 32 | t << 64 - r, "xa");
      O2.rotrBL = xa2;
      var Ea2 = /* @__PURE__ */ __name((e, t) => t, "Ea");
      O2.rotr32H = Ea2;
      var Ta = /* @__PURE__ */ __name((e, t) => e, "Ta");
      O2.rotr32L = Ta;
      var Pa = /* @__PURE__ */ __name((e, t, r) => e << r | t >>> 32 - r, "Pa");
      O2.rotlSH = Pa;
      var Sa2 = /* @__PURE__ */ __name((e, t, r) => t << r | e >>> 32 - r, "Sa");
      O2.rotlSL = Sa2;
      var va2 = /* @__PURE__ */ __name((e, t, r) => t << r - 32 | e >>> 64 - r, "va");
      O2.rotlBH = va2;
      var Aa2 = /* @__PURE__ */ __name((e, t, r) => e << r - 32 | t >>> 64 - r, "Aa");
      O2.rotlBL = Aa2;
      function Ca(e, t, r, n) {
        let i = (t >>> 0) + (n >>> 0);
        return { h: e + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
      }
      __name(Ca, "Ca");
      var Ra = /* @__PURE__ */ __name((e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0), "Ra");
      O2.add3L = Ra;
      var Ia = /* @__PURE__ */ __name((e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0, "Ia");
      O2.add3H = Ia;
      var ka = /* @__PURE__ */ __name((e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0), "ka");
      O2.add4L = ka;
      var Oa = /* @__PURE__ */ __name((e, t, r, n, i) => t + r + n + i + (e / 2 ** 32 | 0) | 0, "Oa");
      O2.add4H = Oa;
      var Na = /* @__PURE__ */ __name((e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0), "Na");
      O2.add5L = Na;
      var Da = /* @__PURE__ */ __name((e, t, r, n, i, o) => t + r + n + i + o + (e / 2 ** 32 | 0) | 0, "Da");
      O2.add5H = Da;
      var zp = { fromBig: di, split: ma2, toBig: fa, shrSH: ga2, shrSL: ya2, rotrSH: ha2, rotrSL: wa2, rotrBH: ba2, rotrBL: xa2, rotr32H: Ea2, rotr32L: Ta, rotlSH: Pa, rotlSL: Sa2, rotlBH: va2, rotlBL: Aa2, add: Ca, add3L: Ra, add3H: Ia, add4L: ka, add4H: Oa, add5H: Da, add5L: Na };
      O2.default = zp;
    });
    var La = ue((tn) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Object.defineProperty(tn, "__esModule", { value: true });
      tn.crypto = void 0;
      var Ue = (We(), Xi(Fn));
      tn.crypto = Ue && typeof Ue == "object" && "webcrypto" in Ue ? Ue.webcrypto : Ue && typeof Ue == "object" && "randomBytes" in Ue ? Ue : void 0;
    });
    var $a = ue((M) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Object.defineProperty(M, "__esModule", { value: true });
      M.Hash = M.nextTick = M.byteSwapIfBE = M.isLE = void 0;
      M.isBytes = Wp;
      M.u8 = Kp;
      M.u32 = Zp;
      M.createView = Yp;
      M.rotr = Xp;
      M.rotl = ed;
      M.byteSwap = gi2;
      M.byteSwap32 = td;
      M.bytesToHex = nd;
      M.hexToBytes = id;
      M.asyncLoop = sd;
      M.utf8ToBytes = Fa;
      M.toBytes = rn;
      M.concatBytes = ad;
      M.checkOpts = ud;
      M.wrapConstructor = ld;
      M.wrapConstructorWithOpts = cd;
      M.wrapXOFConstructorWithOpts = pd;
      M.randomBytes = dd;
      var At2 = La(), fi = ci();
      function Wp(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      __name(Wp, "Wp");
      function Kp(e) {
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      __name(Kp, "Kp");
      function Zp(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      __name(Zp, "Zp");
      function Yp(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      __name(Yp, "Yp");
      function Xp(e, t) {
        return e << 32 - t | e >>> t;
      }
      __name(Xp, "Xp");
      function ed(e, t) {
        return e << t | e >>> 32 - t >>> 0;
      }
      __name(ed, "ed");
      M.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
      function gi2(e) {
        return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
      }
      __name(gi2, "gi");
      M.byteSwapIfBE = M.isLE ? (e) => e : (e) => gi2(e);
      function td(e) {
        for (let t = 0; t < e.length; t++) e[t] = gi2(e[t]);
      }
      __name(td, "td");
      var rd = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      function nd(e) {
        (0, fi.abytes)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += rd[e[r]];
        return t;
      }
      __name(nd, "nd");
      var De = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function _a(e) {
        if (e >= De._0 && e <= De._9) return e - De._0;
        if (e >= De.A && e <= De.F) return e - (De.A - 10);
        if (e >= De.a && e <= De.f) return e - (De.a - 10);
      }
      __name(_a, "_a");
      function id(e) {
        if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
        let t = e.length, r = t / 2;
        if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let i = 0, o = 0; i < r; i++, o += 2) {
          let s = _a(e.charCodeAt(o)), a2 = _a(e.charCodeAt(o + 1));
          if (s === void 0 || a2 === void 0) {
            let m2 = e[o] + e[o + 1];
            throw new Error('hex string expected, got non-hex character "' + m2 + '" at index ' + o);
          }
          n[i] = s * 16 + a2;
        }
        return n;
      }
      __name(id, "id");
      var od = /* @__PURE__ */ __name(async () => {
      }, "od");
      M.nextTick = od;
      async function sd(e, t, r) {
        let n = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          let o = Date.now() - n;
          o >= 0 && o < t || (await (0, M.nextTick)(), n += o);
        }
      }
      __name(sd, "sd");
      function Fa(e) {
        if (typeof e != "string") throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      __name(Fa, "Fa");
      function rn(e) {
        return typeof e == "string" && (e = Fa(e)), (0, fi.abytes)(e), e;
      }
      __name(rn, "rn");
      function ad(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          (0, fi.abytes)(i), t += i.length;
        }
        let r = new Uint8Array(t);
        for (let n = 0, i = 0; n < e.length; n++) {
          let o = e[n];
          r.set(o, i), i += o.length;
        }
        return r;
      }
      __name(ad, "ad");
      var mi2 = class {
        static {
          __name(this, "mi");
        }
        clone() {
          return this._cloneInto();
        }
      };
      M.Hash = mi2;
      function ud(e, t) {
        if (t !== void 0 && {}.toString.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
        return Object.assign(e, t);
      }
      __name(ud, "ud");
      function ld(e) {
        let t = /* @__PURE__ */ __name((n) => e().update(rn(n)).digest(), "t"), r = e();
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
      }
      __name(ld, "ld");
      function cd(e) {
        let t = /* @__PURE__ */ __name((n, i) => e(i).update(rn(n)).digest(), "t"), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      __name(cd, "cd");
      function pd(e) {
        let t = /* @__PURE__ */ __name((n, i) => e(i).update(rn(n)).digest(), "t"), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      __name(pd, "pd");
      function dd(e = 32) {
        if (At2.crypto && typeof At2.crypto.getRandomValues == "function") return At2.crypto.getRandomValues(new Uint8Array(e));
        if (At2.crypto && typeof At2.crypto.randomBytes == "function") return At2.crypto.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
      }
      __name(dd, "dd");
    });
    var Ha = ue((B) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      Object.defineProperty(B, "__esModule", { value: true });
      B.shake256 = B.shake128 = B.keccak_512 = B.keccak_384 = B.keccak_256 = B.keccak_224 = B.sha3_512 = B.sha3_384 = B.sha3_256 = B.sha3_224 = B.Keccak = void 0;
      B.keccakP = Qa;
      var Ct = ci(), nr = Ma(), Me = $a(), qa = [], Ba = [], ja = [], md = BigInt(0), rr2 = BigInt(1), fd = BigInt(2), gd = BigInt(7), yd = BigInt(256), hd = BigInt(113);
      for (let e = 0, t = rr2, r = 1, n = 0; e < 24; e++) {
        [r, n] = [n, (2 * r + 3 * n) % 5], qa.push(2 * (5 * n + r)), Ba.push((e + 1) * (e + 2) / 2 % 64);
        let i = md;
        for (let o = 0; o < 7; o++) t = (t << rr2 ^ (t >> gd) * hd) % yd, t & fd && (i ^= rr2 << (rr2 << BigInt(o)) - rr2);
        ja.push(i);
      }
      var [wd, bd] = (0, nr.split)(ja, true), Va = /* @__PURE__ */ __name((e, t, r) => r > 32 ? (0, nr.rotlBH)(e, t, r) : (0, nr.rotlSH)(e, t, r), "Va"), Ua = /* @__PURE__ */ __name((e, t, r) => r > 32 ? (0, nr.rotlBL)(e, t, r) : (0, nr.rotlSL)(e, t, r), "Ua");
      function Qa(e, t = 24) {
        let r = new Uint32Array(10);
        for (let n = 24 - t; n < 24; n++) {
          for (let s = 0; s < 10; s++) r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
          for (let s = 0; s < 10; s += 2) {
            let a2 = (s + 8) % 10, m2 = (s + 2) % 10, f = r[m2], T2 = r[m2 + 1], S2 = Va(f, T2, 1) ^ r[a2], v2 = Ua(f, T2, 1) ^ r[a2 + 1];
            for (let A = 0; A < 50; A += 10) e[s + A] ^= S2, e[s + A + 1] ^= v2;
          }
          let i = e[2], o = e[3];
          for (let s = 0; s < 24; s++) {
            let a2 = Ba[s], m2 = Va(i, o, a2), f = Ua(i, o, a2), T2 = qa[s];
            i = e[T2], o = e[T2 + 1], e[T2] = m2, e[T2 + 1] = f;
          }
          for (let s = 0; s < 50; s += 10) {
            for (let a2 = 0; a2 < 10; a2++) r[a2] = e[s + a2];
            for (let a2 = 0; a2 < 10; a2++) e[s + a2] ^= ~r[(a2 + 2) % 10] & r[(a2 + 4) % 10];
          }
          e[0] ^= wd[n], e[1] ^= bd[n];
        }
        r.fill(0);
      }
      __name(Qa, "Qa");
      var ir = class e extends Me.Hash {
        static {
          __name(this, "e");
        }
        constructor(t, r, n, i = false, o = 24) {
          if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, (0, Ct.anumber)(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200), this.state32 = (0, Me.u32)(this.state);
        }
        keccak() {
          Me.isLE || (0, Me.byteSwap32)(this.state32), Qa(this.state32, this.rounds), Me.isLE || (0, Me.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
        }
        update(t) {
          (0, Ct.aexists)(this);
          let { blockLen: r, state: n } = this;
          t = (0, Me.toBytes)(t);
          let i = t.length;
          for (let o = 0; o < i; ) {
            let s = Math.min(r - this.pos, i - o);
            for (let a2 = 0; a2 < s; a2++) n[this.pos++] ^= t[o++];
            this.pos === r && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = true;
          let { state: t, suffix: r, pos: n, blockLen: i } = this;
          t[n] ^= r, (r & 128) !== 0 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
        }
        writeInto(t) {
          (0, Ct.aexists)(this, false), (0, Ct.abytes)(t), this.finish();
          let r = this.state, { blockLen: n } = this;
          for (let i = 0, o = t.length; i < o; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, o - i);
            t.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, Ct.anumber)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if ((0, Ct.aoutput)(t, this), this.finished) throw new Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true, this.state.fill(0);
        }
        _cloneInto(t) {
          let { blockLen: r, suffix: n, outputLen: i, rounds: o, enableXOF: s } = this;
          return t || (t = new e(r, n, i, s, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.destroyed = this.destroyed, t;
        }
      };
      B.Keccak = ir;
      var qe = /* @__PURE__ */ __name((e, t, r) => (0, Me.wrapConstructor)(() => new ir(t, e, r)), "qe");
      B.sha3_224 = qe(6, 144, 224 / 8);
      B.sha3_256 = qe(6, 136, 256 / 8);
      B.sha3_384 = qe(6, 104, 384 / 8);
      B.sha3_512 = qe(6, 72, 512 / 8);
      B.keccak_224 = qe(1, 144, 224 / 8);
      B.keccak_256 = qe(1, 136, 256 / 8);
      B.keccak_384 = qe(1, 104, 384 / 8);
      B.keccak_512 = qe(1, 72, 512 / 8);
      var Ja = /* @__PURE__ */ __name((e, t, r) => (0, Me.wrapXOFConstructorWithOpts)((n = {}) => new ir(t, e, n.dkLen === void 0 ? r : n.dkLen, true)), "Ja");
      B.shake128 = Ja(31, 168, 128 / 8);
      B.shake256 = Ja(31, 136, 256 / 8);
    });
    var eu = ue((Yk, Be) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      var { sha3_512: xd } = Ha(), za = 24, or = 32, yi2 = /* @__PURE__ */ __name((e = 4, t = Math.random) => {
        let r = "";
        for (; r.length < e; ) r = r + Math.floor(t() * 36).toString(36);
        return r;
      }, "yi");
      function Wa(e) {
        let t = 8n, r = 0n;
        for (let n of e.values()) {
          let i = BigInt(n);
          r = (r << t) + i;
        }
        return r;
      }
      __name(Wa, "Wa");
      var Ka = /* @__PURE__ */ __name((e = "") => Wa(xd(e)).toString(36).slice(1), "Ka"), Ga = Array.from({ length: 26 }, (e, t) => String.fromCharCode(t + 97)), Ed = /* @__PURE__ */ __name((e) => Ga[Math.floor(e() * Ga.length)], "Ed"), Za = /* @__PURE__ */ __name(({ globalObj: e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {}, random: t = Math.random } = {}) => {
        let r = Object.keys(e).toString(), n = r.length ? r + yi2(or, t) : yi2(or, t);
        return Ka(n).substring(0, or);
      }, "Za"), Ya = /* @__PURE__ */ __name((e) => () => e++, "Ya"), Td = 476782367, Xa = /* @__PURE__ */ __name(({ random: e = Math.random, counter: t = Ya(Math.floor(e() * Td)), length: r = za, fingerprint: n = Za({ random: e }) } = {}) => function() {
        let o = Ed(e), s = Date.now().toString(36), a2 = t().toString(36), m2 = yi2(r, e), f = `${s + m2 + a2 + n}`;
        return `${o + Ka(f).substring(1, r)}`;
      }, "Xa"), Pd = Xa(), Sd = /* @__PURE__ */ __name((e, { minLength: t = 2, maxLength: r = or } = {}) => {
        let n = e.length, i = /^[0-9a-z]+$/;
        try {
          if (typeof e == "string" && n >= t && n <= r && i.test(e)) return true;
        } finally {
        }
        return false;
      }, "Sd");
      Be.exports.getConstants = () => ({ defaultLength: za, bigLength: or });
      Be.exports.init = Xa;
      Be.exports.createId = Pd;
      Be.exports.bufToBigInt = Wa;
      Be.exports.createCounter = Ya;
      Be.exports.createFingerprint = Za;
      Be.exports.isCuid = Sd;
    });
    var tu = ue((iO, sr) => {
      "use strict";
      u();
      l();
      c();
      p2();
      d2();
      var { createId: vd, init: Ad, getConstants: Cd, isCuid: Rd } = eu();
      sr.exports.createId = vd;
      sr.exports.init = Ad;
      sr.exports.getConstants = Cd;
      sr.exports.isCuid = Rd;
    });
    var sf = {};
    st(sf, { AnyNull: /* @__PURE__ */ __name(() => Y.AnyNull, "AnyNull"), DMMF: /* @__PURE__ */ __name(() => Qt, "DMMF"), DbNull: /* @__PURE__ */ __name(() => Y.DbNull, "DbNull"), Debug: /* @__PURE__ */ __name(() => ne, "Debug"), Decimal: /* @__PURE__ */ __name(() => Fl.Decimal, "Decimal"), Extensions: /* @__PURE__ */ __name(() => Nn2, "Extensions"), JsonNull: /* @__PURE__ */ __name(() => Y.JsonNull, "JsonNull"), NullTypes: /* @__PURE__ */ __name(() => Y.NullTypes, "NullTypes"), ObjectEnumValue: /* @__PURE__ */ __name(() => Y.ObjectEnumValue, "ObjectEnumValue"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => D.PrismaClientInitializationError, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => D.PrismaClientKnownRequestError, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => D.PrismaClientRustPanicError, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => D.PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => D.PrismaClientValidationError, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => Dn2, "Public"), Sql: /* @__PURE__ */ __name(() => ke.Sql, "Sql"), createParam: /* @__PURE__ */ __name(() => ds2, "createParam"), defineDmmfProperty: /* @__PURE__ */ __name(() => ws, "defineDmmfProperty"), deserializeJsonObject: /* @__PURE__ */ __name(() => we, "deserializeJsonObject"), deserializeRawResult: /* @__PURE__ */ __name(() => vn2, "deserializeRawResult"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => yo2, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => ke.empty, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => Ml, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => _l, "getRuntime"), isAnyNull: /* @__PURE__ */ __name(() => Y.isAnyNull, "isAnyNull"), isDbNull: /* @__PURE__ */ __name(() => Y.isDbNull, "isDbNull"), isJsonNull: /* @__PURE__ */ __name(() => Y.isJsonNull, "isJsonNull"), isObjectEnumValue: /* @__PURE__ */ __name(() => Y.isObjectEnumValue, "isObjectEnumValue"), join: /* @__PURE__ */ __name(() => ke.join, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => Ll, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => bs, "makeTypedQueryFactory"), raw: /* @__PURE__ */ __name(() => ke.raw, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => Br, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => qr, "skip"), sqltag: /* @__PURE__ */ __name(() => ke.sql, "sqltag"), warnOnce: /* @__PURE__ */ __name(() => jn, "warnOnce") });
    module.exports = Xi(sf);
    u();
    l();
    c();
    p2();
    d2();
    var Nn2 = {};
    st(Nn2, { defineExtension: /* @__PURE__ */ __name(() => po, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => mo, "getExtensionContext") });
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function po(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(po, "po");
    u();
    l();
    c();
    p2();
    d2();
    function mo(e) {
      return e;
    }
    __name(mo, "mo");
    var Dn2 = {};
    st(Dn2, { validator: /* @__PURE__ */ __name(() => fo, "validator") });
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function fo(...e) {
      return (t) => t;
    }
    __name(fo, "fo");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Pe = class {
      static {
        __name(this, "Pe");
      }
      _map = /* @__PURE__ */ new Map();
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    function Fe2(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Fe2, "Fe");
    u();
    l();
    c();
    p2();
    d2();
    function go2(e, t) {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    }
    __name(go2, "go");
    u();
    l();
    c();
    p2();
    d2();
    function Lt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(Lt, "Lt");
    u();
    l();
    c();
    p2();
    d2();
    function yo2(e) {
      return { models: Mn2(e.models), enums: Mn2(e.enums), types: Mn2(e.types) };
    }
    __name(yo2, "yo");
    function Mn2(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    __name(Mn2, "Mn");
    var fs = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Ln2;
    var ho;
    var wo2;
    var bo2;
    var xo = true;
    typeof y < "u" && ({ FORCE_COLOR: Ln2, NODE_DISABLE_COLORS: ho, NO_COLOR: wo2, TERM: bo2 } = y.env || {}, xo = y.stdout && y.stdout.isTTY);
    var tc = { enabled: !ho && wo2 == null && bo2 !== "dumb" && (Ln2 != null && Ln2 !== "0" || xo) };
    function V(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !tc.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(V, "V");
    var Gg = V(0, 0);
    var xr2 = V(1, 22);
    var Er2 = V(2, 22);
    var zg = V(3, 23);
    var Tr = V(4, 24);
    var Wg = V(7, 27);
    var Kg = V(8, 28);
    var Zg = V(9, 29);
    var Yg = V(30, 39);
    var lt = V(31, 39);
    var Eo2 = V(32, 39);
    var To = V(33, 39);
    var Po = V(34, 39);
    var Xg = V(35, 39);
    var So2 = V(36, 39);
    var ey = V(37, 39);
    var vo = V(90, 39);
    var ty = V(90, 39);
    var ry = V(40, 49);
    var ny = V(41, 49);
    var iy = V(42, 49);
    var oy = V(43, 49);
    var sy = V(44, 49);
    var ay = V(45, 49);
    var uy = V(46, 49);
    var ly = V(47, 49);
    u();
    l();
    c();
    p2();
    d2();
    var rc = 100;
    var Ao2 = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var _t3 = [];
    var Co2 = Date.now();
    var nc = 0;
    var _n = typeof y < "u" ? y.env : {};
    globalThis.DEBUG ??= _n.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= _n.DEBUG_COLORS ? _n.DEBUG_COLORS === "true" : true;
    var Ft = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, "log"), formatters: {} };
    function ic(e) {
      let t = { color: Ao2[nc++ % Ao2.length], enabled: Ft.enabled(e), namespace: e, log: Ft.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a2 } = t;
        if (n.length !== 0 && _t3.push([o, ...n]), _t3.length > rc && _t3.shift(), Ft.enabled(o) || i) {
          let m2 = n.map((T2) => typeof T2 == "string" ? T2 : oc(T2)), f = `+${Date.now() - Co2}ms`;
          Co2 = Date.now(), a2(o, ...m2, f);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => t[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => t[i] = o, "set") });
    }
    __name(ic, "ic");
    var ne = new Proxy(ic, { get: /* @__PURE__ */ __name((e, t) => Ft[t], "get"), set: /* @__PURE__ */ __name((e, t, r) => Ft[t] = r, "set") });
    function oc(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    __name(oc, "oc");
    function Ro(e = 7500) {
      let t = _t3.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    __name(Ro, "Ro");
    function Io2() {
      _t3.length = 0;
    }
    __name(Io2, "Io");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Ne(e, t) {
      throw new Error(t);
    }
    __name(Ne, "Ne");
    u();
    l();
    c();
    p2();
    d2();
    var Mo = "prisma+postgres";
    var Ar = `${Mo}:`;
    function Lo(e) {
      return e?.toString().startsWith(`${Ar}//`) ?? false;
    }
    __name(Lo, "Lo");
    function $n(e) {
      if (!Lo(e)) return false;
      let { host: t } = new URL(e);
      return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
    }
    __name($n, "$n");
    var qt = {};
    st(qt, { error: /* @__PURE__ */ __name(() => lc, "error"), info: /* @__PURE__ */ __name(() => uc, "info"), log: /* @__PURE__ */ __name(() => ac, "log"), query: /* @__PURE__ */ __name(() => cc2, "query"), should: /* @__PURE__ */ __name(() => $o, "should"), tags: /* @__PURE__ */ __name(() => Ut, "tags"), warn: /* @__PURE__ */ __name(() => Vn, "warn") });
    u();
    l();
    c();
    p2();
    d2();
    var Ut = { error: lt("prisma:error"), warn: To("prisma:warn"), info: So2("prisma:info"), query: Po("prisma:query") };
    var $o = { warn: /* @__PURE__ */ __name(() => !y.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function ac(...e) {
      console.log(...e);
    }
    __name(ac, "ac");
    function Vn(e, ...t) {
      $o.warn() && console.warn(`${Ut.warn} ${e}`, ...t);
    }
    __name(Vn, "Vn");
    function uc(e, ...t) {
      console.info(`${Ut.info} ${e}`, ...t);
    }
    __name(uc, "uc");
    function lc(e, ...t) {
      console.error(`${Ut.error} ${e}`, ...t);
    }
    __name(lc, "lc");
    function cc2(e, ...t) {
      console.log(`${Ut.query} ${e}`, ...t);
    }
    __name(cc2, "cc");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Un3({ onlyFirst: e = false } = {}) {
      let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
      return new RegExp(r, e ? void 0 : "g");
    }
    __name(Un3, "Un");
    var pc = Un3();
    function pt(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(pc, "");
    }
    __name(pt, "pt");
    u();
    l();
    c();
    p2();
    d2();
    function qn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(qn, "qn");
    u();
    l();
    c();
    p2();
    d2();
    function Rr(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Rr, "Rr");
    u();
    l();
    c();
    p2();
    d2();
    function Bn(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(Bn, "Bn");
    u();
    l();
    c();
    p2();
    d2();
    function Bt(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(Bt, "Bt");
    u();
    l();
    c();
    p2();
    d2();
    var Uo = /* @__PURE__ */ new Set();
    var jn = /* @__PURE__ */ __name((e, t, ...r) => {
      Uo.has(e) || (Uo.add(e), Vn(t, ...r));
    }, "jn");
    u();
    l();
    c();
    p2();
    d2();
    function dt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(dt, "dt");
    function Ir(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Ir, "Ir");
    u();
    l();
    c();
    p2();
    d2();
    var qo = require_dist();
    function mt2(e) {
      return qo.Decimal.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(mt2, "mt");
    u();
    l();
    c();
    p2();
    d2();
    var ss2 = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    var Qt = {};
    st(Qt, { ModelAction: /* @__PURE__ */ __name(() => jt, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => dc, "datamodelEnumToSchemaEnum") });
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function dc(e) {
      return { name: e.name, values: e.values.map((t) => t.name) };
    }
    __name(dc, "dc");
    u();
    l();
    c();
    p2();
    d2();
    var jt = (($2) => ($2.findUnique = "findUnique", $2.findUniqueOrThrow = "findUniqueOrThrow", $2.findFirst = "findFirst", $2.findFirstOrThrow = "findFirstOrThrow", $2.findMany = "findMany", $2.create = "create", $2.createMany = "createMany", $2.createManyAndReturn = "createManyAndReturn", $2.update = "update", $2.updateMany = "updateMany", $2.updateManyAndReturn = "updateManyAndReturn", $2.upsert = "upsert", $2.delete = "delete", $2.deleteMany = "deleteMany", $2.groupBy = "groupBy", $2.count = "count", $2.aggregate = "aggregate", $2.findRaw = "findRaw", $2.aggregateRaw = "aggregateRaw", $2))(jt || {});
    var mc = Je2(Fo());
    var fc = { red: lt, gray: vo, dim: Er2, bold: xr2, underline: Tr, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var gc = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function yc({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(yc, "yc");
    function hc({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a2 = [""], m2 = t ? " in" : ":";
      if (n ? (a2.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a2.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${m2}`))) : a2.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${m2}`)), t && a2.push(s.underline(wc(t))), i) {
        a2.push("");
        let f = [i.toString()];
        o && (f.push(o), f.push(s.dim(")"))), a2.push(f.join("")), o && a2.push("");
      } else a2.push(""), o && a2.push(o), a2.push("");
      return a2.push(r), a2.join(`
`);
    }
    __name(hc, "hc");
    function wc(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(wc, "wc");
    function kr(e) {
      let t = e.showColors ? fc : gc, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = yc(e), hc(r, t);
    }
    __name(kr, "kr");
    u();
    l();
    c();
    p2();
    d2();
    var Ko = Je2(Qn2());
    u();
    l();
    c();
    p2();
    d2();
    function Jo(e, t, r) {
      let n = Ho(e), i = bc(n), o = Ec(i);
      o ? Or(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(Jo, "Jo");
    function Ho(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Ho(t) : [t]);
    }
    __name(Ho, "Ho");
    function bc(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: xc(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(bc, "bc");
    function xc(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(xc, "xc");
    function Ec(e) {
      return Bn(e, (t, r) => {
        let n = jo(t), i = jo(r);
        return n !== i ? n - i : Qo(t) - Qo(r);
      });
    }
    __name(Ec, "Ec");
    function jo(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(jo, "jo");
    function Qo(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(Qo, "Qo");
    u();
    l();
    c();
    p2();
    d2();
    var ce2 = class {
      static {
        __name(this, "ce");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    zo();
    u();
    l();
    c();
    p2();
    d2();
    var ft = class {
      static {
        __name(this, "ft");
      }
      constructor(t = 0, r) {
        this.context = r;
        this.currentIndent = t;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    Go();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Nr = class {
      static {
        __name(this, "Nr");
      }
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var Dr = /* @__PURE__ */ __name((e) => e, "Dr");
    var Mr = { bold: Dr, red: Dr, green: Dr, dim: Dr, enabled: false };
    var Wo = { bold: xr2, red: lt, green: Eo2, dim: Er2, enabled: true };
    var gt3 = { write(e) {
      e.writeLine(",");
    } };
    u();
    l();
    c();
    p2();
    d2();
    var Se2 = class {
      static {
        __name(this, "Se");
      }
      constructor(t) {
        this.contents = t;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((t) => t, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var $e2 = class {
      static {
        __name(this, "$e");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var yt2 = class extends $e2 {
      static {
        __name(this, "yt");
      }
      items = [];
      addItem(t) {
        return this.items.push(new Nr(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let r = new Se2("[]");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithItems(t) {
        let { colors: r } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(gt3, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var ht = class e extends $e2 {
      static {
        __name(this, "e");
      }
      fields = {};
      suggestions = [];
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [r, ...n] = t, i = this.getField(r);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a2;
          if (o.value instanceof e ? a2 = o.value.getField(s) : o.value instanceof yt2 && (a2 = o.value.getField(Number(s))), !a2) return;
          o = a2;
        }
        return o;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let r = this;
        for (let n of t) {
          if (!(r instanceof e)) return;
          let i = r.getSubSelectionValue(n);
          if (!i) return;
          r = i;
        }
        return r;
      }
      getDeepSelectionParent(t) {
        let r = this.getSelectionParent();
        if (!r) return;
        let n = r;
        for (let i of t) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let t = this.getField("select")?.value.asObject();
        if (t) return { kind: "select", value: t };
        let r = this.getField("include")?.value.asObject();
        if (r) return { kind: "include", value: r };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
      }
      write(t) {
        let r = Object.values(this.fields);
        if (r.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, r);
      }
      asObject() {
        return this;
      }
      writeEmpty(t) {
        let r = new Se2("{}");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithContents(t, r) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(gt3, [...r, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var Z = class extends $e2 {
      static {
        __name(this, "Z");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Se2(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var Jt2 = class {
      static {
        __name(this, "Jt");
      }
      fields = [];
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(gt3, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function Or(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Tc(e, t);
          break;
        case "IncludeOnScalar":
          Pc(e, t);
          break;
        case "EmptySelection":
          Sc(e, t, r);
          break;
        case "UnknownSelectionField":
          Rc(e, t);
          break;
        case "InvalidSelectionValue":
          Ic(e, t);
          break;
        case "UnknownArgument":
          kc(e, t);
          break;
        case "UnknownInputField":
          Oc(e, t);
          break;
        case "RequiredArgumentMissing":
          Nc(e, t);
          break;
        case "InvalidArgumentType":
          Dc(e, t);
          break;
        case "InvalidArgumentValue":
          Mc(e, t);
          break;
        case "ValueTooLarge":
          Lc(e, t);
          break;
        case "SomeFieldsMissing":
          _c(e, t);
          break;
        case "TooManyFieldsGiven":
          Fc(e, t);
          break;
        case "Union":
          Jo(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(Or, "Or");
    function Tc(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(Tc, "Tc");
    function Pc(e, t) {
      let [r, n] = wt2(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new ce2(s.name, "true"));
      t.addErrorMessage((s) => {
        let a2 = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a2 += ` on model ${s.bold(i.name)}. ${Ht(s)}` : a2 += ".", a2 += `
Note that ${s.bold("include")} statements only accept relation fields.`, a2;
      });
    }
    __name(Pc, "Pc");
    function Sc(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          vc(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          Ac(e, t);
          return;
        }
      }
      if (r?.[Fe2(e.outputType.name)]) {
        Cc(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(Sc, "Sc");
    function vc(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new ce2(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(vc, "vc");
    function Ac(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Xo(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Ht(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(Ac, "Ac");
    function Cc(e, t) {
      let r = new Jt2();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new ce2("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = wt2(e.selectionPath), a2 = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a2) {
          let m2 = a2?.value.asObject() ?? new ht();
          m2.addSuggestion(n), a2.value = m2;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Cc, "Cc");
    function Rc(e, t) {
      let r = es2(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            Xo(n, e.outputType);
            break;
          case "include":
            $c2(n, e.outputType);
            break;
          case "omit":
            Vc(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(Ht(n)), i.join(" ");
      });
    }
    __name(Rc, "Rc");
    function Ic(e, t) {
      let r = es2(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(Ic, "Ic");
    function kc(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Uc(n, e.arguments)), t.addErrorMessage((i) => Zo(i, r, e.arguments.map((o) => o.name)));
    }
    __name(kc, "kc");
    function Oc(e, t) {
      let [r, n] = wt2(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && ts2(o, e.inputType);
      }
      t.addErrorMessage((o) => Zo(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(Oc, "Oc");
    function Zo(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = Bc(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Ht(e)), n.join(" ");
    }
    __name(Zo, "Zo");
    function Nc(e, t) {
      let r;
      t.addErrorMessage((m2) => r?.value instanceof Z && r.value.text === "null" ? `Argument \`${m2.green(o)}\` must not be ${m2.red("null")}.` : `Argument \`${m2.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = wt2(e.argumentPath), s = new Jt2(), a2 = n.getDeepFieldValue(i)?.asObject();
      if (a2) {
        if (r = a2.getField(o), r && a2.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let m2 of e.inputTypes[0].fields) s.addField(m2.name, m2.typeNames.join(" | "));
          a2.addSuggestion(new ce2(o, s).makeRequired());
        } else {
          let m2 = e.inputTypes.map(Yo).join(" | ");
          a2.addSuggestion(new ce2(o, m2).makeRequired());
        }
        if (e.dependentArgumentPath) {
          n.getDeepField(e.dependentArgumentPath)?.markAsError();
          let [, m2] = wt2(e.dependentArgumentPath);
          t.addErrorMessage((f) => `Argument \`${f.green(o)}\` is required because argument \`${f.green(m2)}\` was provided.`);
        }
      }
    }
    __name(Nc, "Nc");
    function Yo(e) {
      return e.kind === "list" ? `${Yo(e.elementType)}[]` : e.name;
    }
    __name(Yo, "Yo");
    function Dc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Lr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(Dc, "Dc");
    function Mc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Lr("or", e.argument.typeNames.map((a2) => i.green(a2)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(Mc, "Mc");
    function Lc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof Z && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(Lc, "Lc");
    function _c(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && ts2(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Lr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Ht(i)), o.join(" ");
      });
    }
    __name(_c, "_c");
    function Fc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Lr("and", i.map((a2) => o.red(a2)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(Fc, "Fc");
    function Xo(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new ce2(r.name, "true"));
    }
    __name(Xo, "Xo");
    function $c2(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new ce2(r.name, "true"));
    }
    __name($c2, "$c");
    function Vc(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new ce2(r.name, "true"));
    }
    __name(Vc, "Vc");
    function Uc(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new ce2(r.name, r.typeNames.join(" | ")));
    }
    __name(Uc, "Uc");
    function es2(e, t) {
      let [r, n] = wt2(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a2 = i.getFieldValue("omit")?.asObject(), m2 = o?.getField(n);
      return o && m2 ? { parentKind: "select", parent: o, field: m2, fieldName: n } : (m2 = s?.getField(n), s && m2 ? { parentKind: "include", field: m2, parent: s, fieldName: n } : (m2 = a2?.getField(n), a2 && m2 ? { parentKind: "omit", field: m2, parent: a2, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(es2, "es");
    function ts2(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new ce2(r.name, r.typeNames.join(" | ")));
    }
    __name(ts2, "ts");
    function wt2(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(wt2, "wt");
    function Ht({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(Ht, "Ht");
    function Lr(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Lr, "Lr");
    var qc = 3;
    function Bc(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Ko.default)(e, i);
        o > qc || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(Bc, "Bc");
    u();
    l();
    c();
    p2();
    d2();
    var ns = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    var Gt = class {
      static {
        __name(this, "Gt");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function bt2(e) {
      return e instanceof Gt;
    }
    __name(bt2, "bt");
    u();
    l();
    c();
    p2();
    d2();
    var rs = ": ";
    var _r = class {
      static {
        __name(this, "_r");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + rs.length;
      }
      write(t) {
        let r = new Se2(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(rs).write(this.value);
      }
    };
    var Hn = class {
      static {
        __name(this, "Hn");
      }
      arguments;
      errorMessages = [];
      constructor(t) {
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function xt(e) {
      return new Hn(is2(e));
    }
    __name(xt, "xt");
    function is2(e) {
      let t = new ht();
      for (let [r, n] of Object.entries(e)) {
        let i = new _r(r, os2(n));
        t.addField(i);
      }
      return t;
    }
    __name(is2, "is");
    function os2(e) {
      if (typeof e == "string") return new Z(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new Z(String(e));
      if (typeof e == "bigint") return new Z(`${e}n`);
      if (e === null) return new Z("null");
      if (e === void 0) return new Z("undefined");
      if (mt2(e)) return new Z(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return g.isBuffer(e) ? new Z(`Buffer.alloc(${e.byteLength})`) : new Z(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Ir(e) ? e.toISOString() : "Invalid Date";
        return new Z(`new Date("${t}")`);
      }
      return (0, ns.isObjectEnumValue)(e) ? new Z(`Prisma.${e._getName()}`) : bt2(e) ? new Z(`prisma.${Fe2(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? jc(e) : typeof e == "object" ? is2(e) : new Z(Object.prototype.toString.call(e));
    }
    __name(os2, "os");
    function jc(e) {
      let t = new yt2();
      for (let r of e) t.addItem(os2(r));
      return t;
    }
    __name(jc, "jc");
    function Fr(e, t) {
      let r = t === "pretty" ? Wo : Mr, n = e.renderAllMessages(r), i = new ft(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(Fr, "Fr");
    function $r({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a2 = xt(e);
      for (let S2 of t) Or(S2, a2, s);
      let { message: m2, args: f } = Fr(a2, r), T2 = kr({ message: m2, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: f });
      throw new ss2.PrismaClientValidationError(T2, { clientVersion: o });
    }
    __name($r, "$r");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function ve(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(ve, "ve");
    u();
    l();
    c();
    p2();
    d2();
    function us2(e, t, r) {
      let n = ve(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Qc({ ...e, ...as2(t.name, e, t.result.$allModels), ...as2(t.name, e, t.result[n]) });
    }
    __name(us2, "us");
    function Qc(e) {
      let t = new Pe(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Rr(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Qc, "Qc");
    function as2(e, t, r) {
      return r ? Rr(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Jc(t, o, i) })) : {};
    }
    __name(as2, "as");
    function Jc(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(Jc, "Jc");
    function ls(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(ls, "ls");
    function cs2(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(cs2, "cs");
    var Vr = class {
      static {
        __name(this, "Vr");
      }
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
      }
      computedFieldsCache = new Pe();
      modelExtensionsCache = new Pe();
      queryCallbacksCache = new Pe();
      clientExtensions = Lt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = Lt(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => us2(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = ve(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Et = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Vr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Vr(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var Ur = class {
      static {
        __name(this, "Ur");
      }
      constructor(t) {
        this.name = t;
      }
    };
    function ps(e) {
      return e instanceof Ur;
    }
    __name(ps, "ps");
    function ds2(e) {
      return new Ur(e);
    }
    __name(ds2, "ds");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var ms2 = /* @__PURE__ */ Symbol();
    var zt = class {
      static {
        __name(this, "zt");
      }
      constructor(t) {
        if (t !== ms2) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? qr : t;
      }
    };
    var qr = new zt(ms2);
    function de(e) {
      return e instanceof zt;
    }
    __name(de, "de");
    var Hc = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var gs = "explicitly `undefined` values are not allowed";
    function Br({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = Et.empty(), callsite: o, clientMethod: s, errorFormat: a2, clientVersion: m2, previewFeatures: f, globalOmit: T2, wrapRawValues: S2 }) {
      let v2 = new Gn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a2, clientVersion: m2, previewFeatures: f, globalOmit: T2, wrapRawValues: S2 });
      return { modelName: e, action: Hc[t], query: Wt(r, v2) };
    }
    __name(Br, "Br");
    function Wt({ select: e, include: t, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: hs(r, n), selection: Gc(e, t, i, n) };
    }
    __name(Wt, "Wt");
    function Gc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Zc(e, n)) : zc(n, t, r);
    }
    __name(Gc, "Gc");
    function zc(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && Wc(n, t, e), Kc(n, r, e), n;
    }
    __name(zc, "zc");
    function Wc(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (de(i)) continue;
        let o = r.nestSelection(n);
        if (zn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = Wt(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Wt(i, o);
      }
    }
    __name(Wc, "Wc");
    function Kc(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = cs2(i, n);
      for (let [s, a2] of Object.entries(o)) {
        if (de(a2)) continue;
        zn(a2, r.nestSelection(s));
        let m2 = r.findField(s);
        n?.[s] && !m2 || (e[s] = !a2);
      }
    }
    __name(Kc, "Kc");
    function Zc(e, t) {
      let r = {}, n = t.getComputedFields(), i = ls(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (de(s)) continue;
        let a2 = t.nestSelection(o);
        zn(s, a2);
        let m2 = t.findField(o);
        if (!(n?.[o] && !m2)) {
          if (s === false || s === void 0 || de(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            m2?.kind === "object" ? r[o] = Wt({}, a2) : r[o] = true;
            continue;
          }
          r[o] = Wt(s, a2);
        }
      }
      return r;
    }
    __name(Zc, "Zc");
    function ys2(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (dt(e)) {
        if (Ir(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (ps(e)) return { $type: "Param", value: e.name };
      if (bt2(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return Yc(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: g.from(r, n, i).toString("base64") };
      }
      if (Xc(e)) return e.values;
      if (mt2(e)) return { $type: "Decimal", value: e.toFixed() };
      if ((0, fs.isObjectEnumValue)(e)) {
        let r = e._getName();
        if (r !== "DbNull" && r !== "JsonNull" && r !== "AnyNull") throw new Error(`Invalid ObjectEnumValue: expected DbNull, JsonNull, or AnyNull, got ${r}`);
        return { $type: "Enum", value: r };
      }
      if (ep(e)) return e.toJSON();
      if (typeof e == "object") return hs(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(ys2, "ys");
    function hs(e, t) {
      if (t.shouldWrapRawValues() && e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        de(i) || (i !== void 0 ? r[n] = ys2(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: gs }));
      }
      return r;
    }
    __name(hs, "hs");
    function Yc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || de(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(ys2(o, i));
      }
      return r;
    }
    __name(Yc, "Yc");
    function Xc(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(Xc, "Xc");
    function ep(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(ep, "ep");
    function zn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: gs });
    }
    __name(zn, "zn");
    var Gn = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(t) {
        $r({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      shouldWrapRawValues() {
        return this.params.wrapRawValues ?? true;
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Fe2(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Ne(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    function ws(e, t) {
      let r = Lt(() => tp(t));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(ws, "ws");
    function tp(e) {
      throw new Error("Prisma.dmmf is not available when running in edge runtimes.");
    }
    __name(tp, "tp");
    u();
    l();
    c();
    p2();
    d2();
    var Kn = /* @__PURE__ */ new WeakMap();
    var jr = "$$PrismaTypedSql";
    var Kt = class {
      static {
        __name(this, "Kt");
      }
      constructor(t, r) {
        Kn.set(this, { sql: t, values: r }), Object.defineProperty(this, jr, { value: jr });
      }
      get sql() {
        return Kn.get(this).sql;
      }
      get values() {
        return Kn.get(this).values;
      }
    };
    function bs(e) {
      return (...t) => new Kt(e, t);
    }
    __name(bs, "bs");
    function Qr(e) {
      return e != null && e[jr] === jr;
    }
    __name(Qr, "Qr");
    u();
    l();
    c();
    p2();
    d2();
    var Nl = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    xs();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Zt2(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(Zt2, "Zt");
    u();
    l();
    c();
    p2();
    d2();
    function ie2(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(ie2, "ie");
    u();
    l();
    c();
    p2();
    d2();
    function Ke(e) {
      let t = new Pe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(Ke, "Ke");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Hr = { enumerable: true, configurable: true, writable: true };
    function Gr(e) {
      let t = new Set(e);
      return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => Hr, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => t.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => t.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...t], "ownKeys") };
    }
    __name(Gr, "Gr");
    var Es2 = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
    function ye(e, t) {
      let r = rp(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a2 = r.get(s);
        return a2 ? a2.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a2 = r.get(s);
        return a2 ? a2.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Ts(Reflect.ownKeys(o), r), a2 = Ts(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a2, ...n])];
      }, set(o, s, a2) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a2));
      }, getOwnPropertyDescriptor(o, s) {
        let a2 = Reflect.getOwnPropertyDescriptor(o, s);
        if (a2 && !a2.configurable) return a2;
        let m2 = r.get(s);
        return m2 ? m2.getPropertyDescriptor ? { ...Hr, ...m2?.getPropertyDescriptor(s) } : Hr : a2;
      }, defineProperty(o, s, a2) {
        return n.add(s), Reflect.defineProperty(o, s, a2);
      }, getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
      return i[Es2] = function() {
        let o = { ...this };
        return delete o[Es2], o;
      }, i;
    }
    __name(ye, "ye");
    function rp(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    __name(rp, "rp");
    function Ts(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(Ts, "Ts");
    u();
    l();
    c();
    p2();
    d2();
    function Tt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(Tt, "Tt");
    u();
    l();
    c();
    p2();
    d2();
    function Ps2(e) {
      if (e === void 0) return "";
      let t = xt(e);
      return new ft(0, { colors: Mr }).write(t).toString();
    }
    __name(Ps2, "Ps");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Zn = class {
      static {
        __name(this, "Zn");
      }
      getLocation() {
        return null;
      }
    };
    function Ve(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Zn();
    }
    __name(Ve, "Ve");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Ss = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Pt(e = {}) {
      let t = ip(e);
      return Object.entries(t).reduce((n, [i, o]) => (Ss[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(Pt, "Pt");
    function ip(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(ip, "ip");
    function zr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(zr, "zr");
    function vs2(e, t) {
      let r = zr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: Pt })(e);
    }
    __name(vs2, "vs");
    u();
    l();
    c();
    p2();
    d2();
    function op(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? Pt({ ...r, _count: t }) : Pt({ ...r, _count: { _all: true } });
    }
    __name(op, "op");
    function sp(e = {}) {
      return typeof e.select == "object" ? (t) => zr(e)(t)._count : (t) => zr(e)(t)._count._all;
    }
    __name(sp, "sp");
    function As(e, t) {
      return t({ action: "count", unpacker: sp(e), argsMapper: op })(e);
    }
    __name(As, "As");
    u();
    l();
    c();
    p2();
    d2();
    function ap(e = {}) {
      let t = Pt(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(ap, "ap");
    function up(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(up, "up");
    function Cs2(e, t) {
      return t({ action: "groupBy", unpacker: up(e), argsMapper: ap })(e);
    }
    __name(Cs2, "Cs");
    function Rs(e, t, r) {
      if (t === "aggregate") return (n) => vs2(n, r);
      if (t === "count") return (n) => As(n, r);
      if (t === "groupBy") return (n) => Cs2(n, r);
    }
    __name(Rs, "Rs");
    u();
    l();
    c();
    p2();
    d2();
    function Is2(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = go2(r, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Gt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Gr(Object.keys(n)) });
    }
    __name(Is2, "Is");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var ks = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "ks");
    var Yn = /* @__PURE__ */ __name((e, t) => ks(t).reduce((r, n) => r && r[n], e), "Yn");
    var Os = /* @__PURE__ */ __name((e, t, r) => ks(t).reduceRight((n, i, o, s) => Object.assign({}, Yn(e, s.slice(0, o)), { [i]: n }), r), "Os");
    function lp(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(lp, "lp");
    function cp(e, t, r) {
      return t === void 0 ? e ?? {} : Os(t, r, e || true);
    }
    __name(cp, "cp");
    function Xn(e, t, r, n, i, o) {
      let a2 = e._runtimeDataModel.models[t].fields.reduce((m2, f) => ({ ...m2, [f.name]: f }), {});
      return (m2) => {
        let f = Ve(e._errorFormat), T2 = lp(n, i), S2 = cp(m2, o, T2), v2 = r({ dataPath: T2, callsite: f })(S2), A = pp(e, t);
        return new Proxy(v2, { get(N, R) {
          if (!A.includes(R)) return N[R];
          let J = [a2[R].type, r, R], j = [T2, S2];
          return Xn(e, ...J, ...j);
        }, ...Gr([...A, ...Object.getOwnPropertyNames(v2)]) });
      };
    }
    __name(Xn, "Xn");
    function pp(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(pp, "pp");
    var dp = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var mp = ["aggregate", "count", "groupBy"];
    function ei(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [fp(e, t), yp(e, t), Zt2(r), ie2("name", () => t), ie2("$name", () => t), ie2("$parent", () => e._appliedParent)];
      return ye({}, n);
    }
    __name(ei, "ei");
    function fp(e, t) {
      let r = ve(t), n = Object.keys(jt).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a2) => (m2) => {
          let f = Ve(e._errorFormat);
          return e._createPrismaPromise((T2) => {
            let S2 = { args: m2, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: T2, callsite: f };
            return e._request({ ...S2, ...a2 });
          }, { action: o, args: m2, model: t });
        }, "s");
        return dp.includes(o) ? Xn(e, t, s) : gp(i) ? Rs(e, i, s) : s({});
      } };
    }
    __name(fp, "fp");
    function gp(e) {
      return mp.includes(e);
    }
    __name(gp, "gp");
    function yp(e, t) {
      return Ke(ie2("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Is2(t, r);
      }));
    }
    __name(yp, "yp");
    u();
    l();
    c();
    p2();
    d2();
    function Ns(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(Ns, "Ns");
    var ti = /* @__PURE__ */ Symbol();
    function Yt2(e) {
      let t = [hp(e), wp(e), ie2(ti, () => e), ie2("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Zt2(r)), ye(e, t);
    }
    __name(Yt2, "Yt");
    function hp(e) {
      let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    __name(hp, "hp");
    function wp(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(ve), n = [...new Set(t.concat(r))];
      return Ke({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Ns(i);
        if (e._runtimeDataModel.models[o] !== void 0) return ei(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return ei(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(wp, "wp");
    function Ds(e) {
      return e[ti] ? e[ti] : e;
    }
    __name(Ds, "Ds");
    function Ms2(e) {
      if (typeof e == "function") return e(this);
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } });
      return Yt2(t);
    }
    __name(Ms2, "Ms");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Ls({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a2 = [];
      for (let m2 of Object.values(o)) {
        if (n) {
          if (n[m2.name]) continue;
          let f = m2.needs.filter((T2) => n[T2]);
          f.length > 0 && a2.push(Tt(f));
        } else if (r) {
          if (!r[m2.name]) continue;
          let f = m2.needs.filter((T2) => !r[T2]);
          f.length > 0 && a2.push(Tt(f));
        }
        bp(e, m2.needs) && s.push(xp(m2, ye(e, s)));
      }
      return s.length > 0 || a2.length > 0 ? ye(e, [...s, ...a2]) : e;
    }
    __name(Ls, "Ls");
    function bp(e, t) {
      return t.every((r) => qn(e, r));
    }
    __name(bp, "bp");
    function xp(e, t) {
      return Ke(ie2(e.name, () => e.compute(t)));
    }
    __name(xp, "xp");
    u();
    l();
    c();
    p2();
    d2();
    function Wr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = Wr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && _s2({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && _s2({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(Wr, "Wr");
    function _s2({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || de(s)) continue;
        let m2 = n.models[r].fields.find((T2) => T2.name === o);
        if (!m2 || m2.kind !== "object" || !m2.relationName) continue;
        let f = typeof s == "object" ? s : {};
        t[o] = Wr({ visitor: i, result: t[o], args: f, modelName: m2.type, runtimeDataModel: n });
      }
    }
    __name(_s2, "_s");
    function Fs({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Wr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a2, m2, f) => {
        let T2 = ve(m2);
        return Ls({ result: a2, modelName: T2, select: f.select, omit: f.select ? void 0 : { ...o?.[T2], ...f.omit }, extensions: n });
      }, "visitor") });
    }
    __name(Fs, "Fs");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Ze = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    var Ep = ["$connect", "$disconnect", "$on", "$use", "$extends"];
    var $s = Ep;
    function Vs2(e) {
      if (e instanceof Ze.Sql) return Tp(e);
      if (Qr(e)) return Pp(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = Xt3(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = Xt3(e[r]);
      return t;
    }
    __name(Vs2, "Vs");
    function Tp(e) {
      return new Ze.Sql(e.strings, e.values);
    }
    __name(Tp, "Tp");
    function Pp(e) {
      return new Kt(e.sql, e.values);
    }
    __name(Pp, "Pp");
    function Xt3(e) {
      if (typeof e != "object" || e == null || (0, Ze.isObjectEnumValue)(e) || bt2(e) || de(e)) return e;
      if (mt2(e)) return new Ze.Decimal(e.toFixed());
      if (dt(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = Xt3(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: Xt3(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Xt3(e[r]);
        return t;
      }
      Ne(e, "Unknown value");
    }
    __name(Xt3, "Xt");
    function qs2(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Vs2(t.args ?? {}), __internalParams: t, query: /* @__PURE__ */ __name((s, a2 = t) => {
          let m2 = a2.customDataProxyFetch;
          return a2.customDataProxyFetch = Js(o, m2), a2.args = s, qs2(e, a2, r, n + 1);
        }, "query") });
      });
    }
    __name(qs2, "qs");
    function Bs(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return qs2(e, t, s);
    }
    __name(Bs, "Bs");
    function js2(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Qs2(r, n, 0, e) : e(r);
      };
    }
    __name(js2, "js");
    function Qs2(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a2 = e) {
        let m2 = a2.customDataProxyFetch;
        return a2.customDataProxyFetch = Js(i, m2), Qs2(a2, t, r + 1, n);
      } });
    }
    __name(Qs2, "Qs");
    var Us = /* @__PURE__ */ __name((e) => e, "Us");
    function Js(e = Us, t = Us) {
      return (r) => e(t(r));
    }
    __name(Js, "Js");
    u();
    l();
    c();
    p2();
    d2();
    function Gs2({ dataPath: e, modelName: t, args: r, runtimeDataModel: n }) {
      let i = { modelName: t, args: r ?? {} }, o = Sp(e);
      if (!o || o.length === 0) return i;
      let s = t, a2 = r ?? {};
      for (let m2 of o) {
        let f = n.models[s];
        if (!f) return i;
        let T2 = f.fields.find((S2) => S2.name === m2);
        if (!T2) throw new Error(`Could not resolve relation field "${m2}" on model "${s}" from dataPath "${e.join(".")}"`);
        if (T2.kind !== "object" || !T2.relationName) return i;
        s = T2.type, a2 = vp(a2, m2);
      }
      return { modelName: s, args: a2 };
    }
    __name(Gs2, "Gs");
    function Sp(e) {
      let t = [];
      for (let r = 0; r < e.length; r += 2) {
        let n = e[r], i = e[r + 1];
        if (n !== "select" && n !== "include" || i === void 0) return;
        t.push(i);
      }
      return t;
    }
    __name(Sp, "Sp");
    function vp(e, t) {
      let r = e.select?.[t];
      if (Hs(r)) return r;
      let n = e.include?.[t];
      return Hs(n) ? n : {};
    }
    __name(vp, "vp");
    function Hs(e) {
      return !!e && typeof e == "object" && !Array.isArray(e);
    }
    __name(Hs, "Hs");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var Xs = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    var er = require_dist();
    function L(e, t) {
      throw new Error(t);
    }
    __name(L, "L");
    function ri(e, t) {
      return e === t || e !== null && t !== null && typeof e == "object" && typeof t == "object" && Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => ri(e[r], t[r]));
    }
    __name(ri, "ri");
    function St(e, t) {
      let r = Object.keys(e), n = Object.keys(t);
      return (r.length < n.length ? r : n).every((o) => {
        if (typeof e[o] == typeof t[o] && typeof e[o] != "object") return e[o] === t[o];
        if (er.Decimal.isDecimal(e[o]) || er.Decimal.isDecimal(t[o])) {
          let s = zs2(e[o]), a2 = zs2(t[o]);
          return s && a2 && s.equals(a2);
        } else if (e[o] instanceof Uint8Array || t[o] instanceof Uint8Array) {
          let s = Ws2(e[o]), a2 = Ws2(t[o]);
          return s && a2 && s.equals(a2);
        } else {
          if (e[o] instanceof Date || t[o] instanceof Date) return Ks(e[o])?.getTime() === Ks(t[o])?.getTime();
          if (typeof e[o] == "bigint" || typeof t[o] == "bigint") return Zs(e[o]) === Zs(t[o]);
          if (typeof e[o] == "number" || typeof t[o] == "number") return Ys(e[o]) === Ys(t[o]);
        }
        return ri(e[o], t[o]);
      });
    }
    __name(St, "St");
    function zs2(e) {
      return er.Decimal.isDecimal(e) ? e : typeof e == "number" || typeof e == "string" ? new er.Decimal(e) : void 0;
    }
    __name(zs2, "zs");
    function Ws2(e) {
      return g.isBuffer(e) ? e : e instanceof Uint8Array ? g.from(e.buffer, e.byteOffset, e.byteLength) : typeof e == "string" ? g.from(e, "base64") : void 0;
    }
    __name(Ws2, "Ws");
    function Ks(e) {
      return e instanceof Date ? e : typeof e == "string" || typeof e == "number" ? new Date(e) : void 0;
    }
    __name(Ks, "Ks");
    function Zs(e) {
      return typeof e == "bigint" ? e : typeof e == "number" || typeof e == "string" ? BigInt(e) : void 0;
    }
    __name(Zs, "Zs");
    function Ys(e) {
      return typeof e == "number" ? e : typeof e == "string" ? Number(e) : void 0;
    }
    __name(Ys, "Ys");
    function he(e) {
      return JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() : ArrayBuffer.isView(r) ? g.from(r.buffer, r.byteOffset, r.byteLength).toString("base64") : r);
    }
    __name(he, "he");
    function Ap(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(Ap, "Ap");
    function Cp(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Cp, "Cp");
    function we(e) {
      return e === null ? e : Array.isArray(e) ? e.map(we) : typeof e == "object" ? Ap(e) ? Rp(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Cp(e, we) : e;
    }
    __name(we, "we");
    function Rp({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = g.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new Xs.Decimal(t);
        case "Json":
          return JSON.parse(t);
        case "Raw":
          return t;
        case "FieldRef":
          throw new Error("FieldRef tagged values cannot be deserialized to JavaScript values");
        case "Enum":
          return t;
        default:
          L(t, "Unknown tagged value");
      }
    }
    __name(Rp, "Rp");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Kr(e) {
      return e.name === "DriverAdapterError" && typeof e.cause == "object";
    }
    __name(Kr, "Kr");
    u();
    l();
    c();
    p2();
    d2();
    var k = { Int32: 0, Int64: 1, Float: 2, Double: 3, Numeric: 4, Boolean: 5, Character: 6, Text: 7, Date: 8, Time: 9, DateTime: 10, Json: 11, Enum: 12, Bytes: 13, Set: 14, Uuid: 15, Int32Array: 64, Int64Array: 65, FloatArray: 66, DoubleArray: 67, NumericArray: 68, BooleanArray: 69, CharacterArray: 70, TextArray: 71, DateArray: 72, TimeArray: 73, DateTimeArray: 74, JsonArray: 75, EnumArray: 76, BytesArray: 77, UuidArray: 78, UnknownNumber: 128 };
    var X = class extends Error {
      static {
        __name(this, "X");
      }
      name = "UserFacingError";
      code;
      meta;
      constructor(t, r, n) {
        super(t), this.code = r, this.meta = n ?? {};
      }
      toQueryResponseErrorObject() {
        return { error: this.message, user_facing_error: { is_panic: false, message: this.message, meta: this.meta, error_code: this.code } };
      }
    };
    function vt(e) {
      if (!Kr(e)) throw e;
      let t = Ip(e), r = ea(e);
      throw !t || !r ? e : new X(r, t, { driverAdapterError: e });
    }
    __name(vt, "vt");
    function ii2(e) {
      throw Kr(e) ? new X(`Raw query failed. Code: \`${e.cause.originalCode ?? "N/A"}\`. Message: \`${e.cause.originalMessage ?? ea(e)}\``, "P2010", { driverAdapterError: e }) : e;
    }
    __name(ii2, "ii");
    function Ip(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return "P1000";
        case "DatabaseNotReachable":
          return "P1001";
        case "DatabaseDoesNotExist":
          return "P1003";
        case "SocketTimeout":
          return "P1008";
        case "DatabaseAlreadyExists":
          return "P1009";
        case "DatabaseAccessDenied":
          return "P1010";
        case "TlsConnectionError":
          return "P1011";
        case "ConnectionClosed":
          return "P1017";
        case "TransactionAlreadyClosed":
          return "P1018";
        case "LengthMismatch":
          return "P2000";
        case "UniqueConstraintViolation":
          return "P2002";
        case "ForeignKeyConstraintViolation":
          return "P2003";
        case "InvalidInputValue":
          return "P2007";
        case "UnsupportedNativeDataType":
          return "P2010";
        case "NullConstraintViolation":
          return "P2011";
        case "ValueOutOfRange":
          return "P2020";
        case "TableDoesNotExist":
          return "P2021";
        case "ColumnNotFound":
          return "P2022";
        case "InvalidIsolationLevel":
        case "InconsistentColumnData":
          return "P2023";
        case "MissingFullTextSearchIndex":
          return "P2030";
        case "TransactionWriteConflict":
          return "P2034";
        case "GenericJs":
          return "P2036";
        case "TooManyConnections":
          return "P2037";
        case "postgres":
        case "sqlite":
        case "mysql":
        case "mssql":
          return;
        default:
          L(e.cause, `Unknown error: ${he(e.cause)}`);
      }
    }
    __name(Ip, "Ip");
    function ea(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return `Authentication failed against the database server, the provided database credentials for \`${e.cause.user ?? "(not available)"}\` are not valid`;
        case "DatabaseNotReachable": {
          let t = e.cause.host && e.cause.port ? `${e.cause.host}:${e.cause.port}` : e.cause.host;
          return `Can't reach database server${t ? ` at ${t}` : ""}`;
        }
        case "DatabaseDoesNotExist":
          return `Database \`${e.cause.db ?? "(not available)"}\` does not exist on the database server`;
        case "SocketTimeout":
          return "Operation has timed out";
        case "DatabaseAlreadyExists":
          return `Database \`${e.cause.db ?? "(not available)"}\` already exists on the database server`;
        case "DatabaseAccessDenied":
          return `User was denied access on the database \`${e.cause.db ?? "(not available)"}\``;
        case "TlsConnectionError":
          return `Error opening a TLS connection: ${e.cause.reason}`;
        case "ConnectionClosed":
          return "Server has closed the connection.";
        case "TransactionAlreadyClosed":
          return e.cause.cause;
        case "LengthMismatch":
          return `The provided value for the column is too long for the column's type. Column: ${e.cause.column ?? "(not available)"}`;
        case "UniqueConstraintViolation":
          return `Unique constraint failed on the ${ni(e.cause.constraint)}`;
        case "ForeignKeyConstraintViolation":
          return `Foreign key constraint violated on the ${ni(e.cause.constraint)}`;
        case "UnsupportedNativeDataType":
          return `Failed to deserialize column of type '${e.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;
        case "NullConstraintViolation":
          return `Null constraint violation on the ${ni(e.cause.constraint)}`;
        case "ValueOutOfRange":
          return `Value out of range for the type: ${e.cause.cause}`;
        case "TableDoesNotExist":
          return `The table \`${e.cause.table ?? "(not available)"}\` does not exist in the current database.`;
        case "ColumnNotFound":
          return `The column \`${e.cause.column ?? "(not available)"}\` does not exist in the current database.`;
        case "InvalidIsolationLevel":
          return `Error in connector: Conversion error: ${e.cause.level}`;
        case "InconsistentColumnData":
          return `Inconsistent column data: ${e.cause.cause}`;
        case "MissingFullTextSearchIndex":
          return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";
        case "TransactionWriteConflict":
          return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";
        case "GenericJs":
          return `Error in external connector (id ${e.cause.id})`;
        case "TooManyConnections":
          return `Too many database connections opened: ${e.cause.cause}`;
        case "InvalidInputValue":
          return `Invalid input value: ${e.cause.message}`;
        case "sqlite":
        case "postgres":
        case "mysql":
        case "mssql":
          return;
        default:
          L(e.cause, `Unknown error: ${he(e.cause)}`);
      }
    }
    __name(ea, "ea");
    function ni(e) {
      return e && "fields" in e ? `fields: (${e.fields.map((t) => `\`${t}\``).join(", ")})` : e && "index" in e ? `constraint: \`${e.index}\`` : e && "foreignKey" in e ? "foreign key" : "(not available)";
    }
    __name(ni, "ni");
    function kp(e) {
      if (typeof e != "object" || e === null) return false;
      let t = e;
      return "$type" in t && t.$type === "Param" || "prisma__type" in t && t.prisma__type === "param";
    }
    __name(kp, "kp");
    function Op(e) {
      return "prisma__type" in e ? e.prisma__value?.name : e.value.name;
    }
    __name(Op, "Op");
    function Np(e, t) {
      let r = {};
      for (let [n, i] of Object.entries(e)) if (r[n] = i, kp(i)) {
        let o = Op(i);
        o && o in t && (r[n] = t[o]);
      }
      return r;
    }
    __name(Np, "Np");
    function ta(e, t, r = {}) {
      let n = e.map((o) => t.keys.reduce((s, a2) => (s[a2] = we(o[a2]), s), {})), i = new Set(t.nestedSelection);
      return t.arguments.map((o) => {
        let s = Np(o, r), a2 = n.findIndex((m2) => St(m2, s));
        if (a2 === -1) return t.expectNonEmpty ? new X("An operation failed because it depends on one or more records that were required but not found", "P2025") : null;
        {
          let m2 = Object.entries(e[a2]).filter(([f]) => i.has(f));
          return Object.fromEntries(m2);
        }
      });
    }
    __name(ta, "ta");
    u();
    l();
    c();
    p2();
    d2();
    var ia = require_dist();
    var q = class extends X {
      static {
        __name(this, "q");
      }
      name = "DataMapperError";
      constructor(t, r) {
        super(t, "P2023", r);
      }
    };
    var ra = /* @__PURE__ */ new WeakMap();
    function Dp(e) {
      let t = ra.get(e);
      return t || (t = Object.entries(e), ra.set(e, t)), t;
    }
    __name(Dp, "Dp");
    function oa(e, t, r) {
      switch (t.type) {
        case "affectedRows":
          if (typeof e != "number") throw new q(`Expected an affected rows count, got: ${typeof e} (${e})`);
          return { count: e };
        case "object":
          return si(e, t.fields, r, t.skipNulls);
        case "field":
          return oi(e, "<result>", t.fieldType, r);
        default:
          L(t, `Invalid data mapping type: '${t.type}'`);
      }
    }
    __name(oa, "oa");
    function si(e, t, r, n) {
      if (e === null) return null;
      if (Array.isArray(e)) {
        let i = e;
        return n && (i = i.filter((o) => o !== null)), i.map((o) => na(o, t, r));
      }
      if (typeof e == "object") return na(e, t, r);
      if (typeof e == "string") {
        let i;
        try {
          i = JSON.parse(e);
        } catch (o) {
          throw new q("Expected an array or object, got a string that is not valid JSON", { cause: o });
        }
        return si(i, t, r, n);
      }
      throw new q(`Expected an array or an object, got: ${typeof e}`);
    }
    __name(si, "si");
    function na(e, t, r) {
      if (typeof e != "object") throw new q(`Expected an object, but got '${typeof e}'`);
      let n = {};
      for (let [i, o] of Dp(t)) switch (o.type) {
        case "affectedRows":
          throw new q(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);
        case "object": {
          let { serializedName: s, fields: a2, skipNulls: m2 } = o;
          if (s !== null && !Object.hasOwn(e, s)) throw new q(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          let f = s !== null ? e[s] : e;
          n[i] = si(f, a2, r, m2);
          break;
        }
        case "field":
          {
            let s = o.dbName;
            if (Object.hasOwn(e, s)) n[i] = Mp(e[s], s, o.fieldType, r);
            else throw new q(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          }
          break;
        default:
          L(o, `DataMapper: Invalid data mapping node type: '${o.type}'`);
      }
      return n;
    }
    __name(na, "na");
    function Mp(e, t, r, n) {
      return e === null ? r.arity === "list" ? [] : null : r.arity === "list" ? e.map((o, s) => oi(o, `${t}[${s}]`, r, n)) : oi(e, t, r, n);
    }
    __name(Mp, "Mp");
    function oi(e, t, r, n) {
      switch (r.type) {
        case "unsupported":
          return e;
        case "string": {
          if (typeof e != "string") throw new q(`Expected a string in column '${t}', got ${typeof e}: ${e}`);
          return e;
        }
        case "int":
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string": {
              let i = Math.trunc(Number(e));
              if (Number.isNaN(i) || !Number.isFinite(i)) throw new q(`Expected an integer in column '${t}', got string: ${e}`);
              if (!Number.isSafeInteger(i)) throw new q(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e}. Consider using BigInt type.`);
              return i;
            }
            default:
              throw new q(`Expected an integer in column '${t}', got ${typeof e}: ${e}`);
          }
        case "bigint": {
          if (typeof e != "number" && typeof e != "string") throw new q(`Expected a bigint in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "BigInt", value: e };
        }
        case "float": {
          if (typeof e == "number") return e;
          if (typeof e == "string") {
            let i = Number(e);
            if (Number.isNaN(i) && !/^[-+]?nan$/.test(e.toLowerCase())) throw new q(`Expected a float in column '${t}', got string: ${e}`);
            return i;
          }
          throw new q(`Expected a float in column '${t}', got ${typeof e}: ${e}`);
        }
        case "boolean": {
          if (typeof e == "boolean") return e;
          if (typeof e == "number") return e === 1;
          if (typeof e == "string") {
            if (e === "true" || e === "TRUE" || e === "1") return true;
            if (e === "false" || e === "FALSE" || e === "0") return false;
            throw new q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
          }
          if (Array.isArray(e) || e instanceof Uint8Array) {
            for (let i of e) if (i !== 0) return true;
            return false;
          }
          throw new q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
        }
        case "decimal":
          if (typeof e != "number" && typeof e != "string" && !ia.Decimal.isDecimal(e)) throw new q(`Expected a decimal in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "Decimal", value: e };
        case "datetime": {
          if (typeof e == "string") return { $type: "DateTime", value: _p(e) };
          if (typeof e == "number" || e instanceof Date) return { $type: "DateTime", value: e };
          throw new q(`Expected a date in column '${t}', got ${typeof e}: ${e}`);
        }
        case "object":
          return { $type: "Json", value: he(e) };
        case "json":
          return { $type: "Json", value: `${e}` };
        case "bytes": {
          switch (r.encoding) {
            case "base64":
              if (typeof e != "string") throw new q(`Expected a base64-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: e };
            case "hex":
              if (typeof e != "string" || !e.startsWith("\\x")) throw new q(`Expected a hex-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: g.from(e.slice(2), "hex").toString("base64") };
            case "array":
              if (Array.isArray(e)) return { $type: "Bytes", value: g.from(e).toString("base64") };
              if (e instanceof Uint8Array) return { $type: "Bytes", value: g.from(e).toString("base64") };
              throw new q(`Expected a byte array in column '${t}', got ${typeof e}: ${e}`);
            default:
              L(r.encoding, `DataMapper: Unknown bytes encoding: ${r.encoding}`);
          }
          break;
        }
        case "enum": {
          let i = n[r.name];
          if (i === void 0) throw new q(`Unknown enum '${r.name}'`);
          let o = i[`${e}`];
          if (o === void 0) throw new q(`Value '${e}' not found in enum '${r.name}'`);
          return o;
        }
        default:
          L(r, `DataMapper: Unknown result type: ${r.type}`);
      }
    }
    __name(oi, "oi");
    var Lp = /\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
    function _p(e) {
      let t = Lp.exec(e);
      if (t === null) return `${e}T00:00:00Z`;
      let r = e, [n, i, o] = t;
      if (i !== void 0 && i !== "Z" && o === void 0 ? r = `${e}:00` : i === void 0 && (r = `${e}Z`), n.length === e.length) return `1970-01-01T${r}`;
      let s = t.index - 1;
      return r[s] === " " && (r = `${r.slice(0, s)}T${r.slice(s + 1)}`), r;
    }
    __name(_p, "_p");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function me(e) {
      if (typeof e != "object") return e;
      var t, r, n = Object.prototype.toString.call(e);
      if (n === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
          r = new e.constructor();
          for (t in e) e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = me(e[t]));
        } else {
          r = {};
          for (t in e) t === "__proto__" ? Object.defineProperty(r, t, { value: me(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = me(e[t]);
        }
        return r;
      }
      if (n === "[object Array]") {
        for (t = e.length, r = Array(t); t--; ) r[t] = me(e[t]);
        return r;
      }
      return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
        r.add(me(i));
      }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
        r.set(me(o), me(i));
      }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(me(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
    }
    __name(me, "me");
    u();
    l();
    c();
    p2();
    d2();
    function Fp(e) {
      let t = Object.entries(e);
      return t.length === 0 ? "" : (t.sort(([n], [i]) => n.localeCompare(i)), `/*${t.map(([n, i]) => {
        let o = encodeURIComponent(n), s = encodeURIComponent(i).replace(/'/g, "\\'");
        return `${o}='${s}'`;
      }).join(",")}*/`);
    }
    __name(Fp, "Fp");
    function Zr(e, t) {
      let r = {};
      for (let n of e) {
        let i = n(me(t));
        for (let [o, s] of Object.entries(i)) s !== void 0 && (r[o] = s);
      }
      return r;
    }
    __name(Zr, "Zr");
    function sa(e, t) {
      let r = Zr(e, t);
      return Fp(r);
    }
    __name(sa, "sa");
    function aa(e, t) {
      return t ? `${e} ${t}` : e;
    }
    __name(aa, "aa");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var tr2;
    (function(e) {
      e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
    })(tr2 || (tr2 = {}));
    function $p(e) {
      switch (e) {
        case "postgresql":
        case "postgres":
        case "prisma+postgres":
          return "postgresql";
        case "sqlserver":
          return "mssql";
        case "mysql":
        case "sqlite":
        case "cockroachdb":
        case "mongodb":
          return e;
        default:
          L(e, `Unknown provider: ${e}`);
      }
    }
    __name($p, "$p");
    async function Yr({ query: e, tracingHelper: t, provider: r, onQuery: n, execute: i }) {
      let o = n === void 0 ? i : async () => {
        let s = /* @__PURE__ */ new Date(), a2 = w.now(), m2 = await i(), f = w.now();
        return n({ timestamp: s, duration: f - a2, query: e.sql, params: e.args }), m2;
      };
      return t.isEnabled() ? await t.runInChildSpan({ name: "db_query", kind: tr2.CLIENT, attributes: { "db.query.text": e.sql, "db.system.name": $p(r) } }, o) : o();
    }
    __name(Yr, "Yr");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Ye(e, t) {
      var r = "000000000" + e;
      return r.substr(r.length - t);
    }
    __name(Ye, "Ye");
    var ua = Je2(Oo(), 1);
    function Vp() {
      try {
        return ua.default.hostname();
      } catch {
        return y.env._CLUSTER_NETWORK_NAME_ || y.env.COMPUTERNAME || "hostname";
      }
    }
    __name(Vp, "Vp");
    var la = 2;
    var Up = Ye(y.pid.toString(36), la);
    var ca = Vp();
    var qp = ca.length;
    var Bp = Ye(ca.split("").reduce(function(e, t) {
      return +e + t.charCodeAt(0);
    }, +qp + 36).toString(36), la);
    function ai() {
      return Up + Bp;
    }
    __name(ai, "ai");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Xr(e) {
      return typeof e == "string" && /^c[a-z0-9]{20,32}$/.test(e);
    }
    __name(Xr, "Xr");
    function ui(e) {
      let n = Math.pow(36, 4), i = 0;
      function o() {
        return Ye((Math.random() * n << 0).toString(36), 4);
      }
      __name(o, "o");
      function s() {
        return i = i < n ? i : 0, i++, i - 1;
      }
      __name(s, "s");
      function a2() {
        var m2 = "c", f = (/* @__PURE__ */ new Date()).getTime().toString(36), T2 = Ye(s().toString(36), 4), S2 = e(), v2 = o() + o();
        return m2 + f + T2 + S2 + v2;
      }
      __name(a2, "a");
      return a2.fingerprint = e, a2.isCuid = Xr, a2;
    }
    __name(ui, "ui");
    var jp = ui(ai);
    var pa2 = jp;
    var uu = Je2(tu());
    u();
    l();
    c();
    p2();
    d2();
    We();
    u();
    l();
    c();
    p2();
    d2();
    var ru = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    var Id = 128;
    var et2;
    var Rt2;
    function kd(e) {
      !et2 || et2.length < e ? (et2 = g.allocUnsafe(e * Id), Vt.getRandomValues(et2), Rt2 = 0) : Rt2 + e > et2.length && (Vt.getRandomValues(et2), Rt2 = 0), Rt2 += e;
    }
    __name(kd, "kd");
    function hi(e = 21) {
      kd(e |= 0);
      let t = "";
      for (let r = Rt2 - e; r < Rt2; r++) t += ru[et2[r] & 63];
      return t;
    }
    __name(hi, "hi");
    u();
    l();
    c();
    p2();
    d2();
    We();
    var iu = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    var ar = 32;
    var Od = 16;
    var ou = 10;
    var nu = 281474976710655;
    var tt2;
    (function(e) {
      e.Base32IncorrectEncoding = "B32_ENC_INVALID", e.DecodeTimeInvalidCharacter = "DEC_TIME_CHAR", e.DecodeTimeValueMalformed = "DEC_TIME_MALFORMED", e.EncodeTimeNegative = "ENC_TIME_NEG", e.EncodeTimeSizeExceeded = "ENC_TIME_SIZE_EXCEED", e.EncodeTimeValueMalformed = "ENC_TIME_MALFORMED", e.PRNGDetectFailure = "PRNG_DETECT", e.ULIDInvalid = "ULID_INVALID", e.Unexpected = "UNEXPECTED", e.UUIDInvalid = "UUID_INVALID";
    })(tt2 || (tt2 = {}));
    var rt2 = class extends Error {
      static {
        __name(this, "rt");
      }
      constructor(t, r) {
        super(`${r} (${t})`), this.name = "ULIDError", this.code = t;
      }
    };
    function Nd(e) {
      let t = Math.floor(e() * ar);
      return t === ar && (t = ar - 1), iu.charAt(t);
    }
    __name(Nd, "Nd");
    function Dd(e) {
      let t = Md(), r = t && (t.crypto || t.msCrypto) || (typeof ct2 < "u" ? ct2 : null);
      if (typeof r?.getRandomValues == "function") return () => {
        let n = new Uint8Array(1);
        return r.getRandomValues(n), n[0] / 255;
      };
      if (typeof r?.randomBytes == "function") return () => r.randomBytes(1).readUInt8() / 255;
      if (ct2?.randomBytes) return () => ct2.randomBytes(1).readUInt8() / 255;
      throw new rt2(tt2.PRNGDetectFailure, "Failed to find a reliable PRNG");
    }
    __name(Dd, "Dd");
    function Md() {
      return Fd() ? self : typeof window < "u" ? window : typeof globalThis < "u" || typeof globalThis < "u" ? globalThis : null;
    }
    __name(Md, "Md");
    function Ld(e, t) {
      let r = "";
      for (; e > 0; e--) r = Nd(t) + r;
      return r;
    }
    __name(Ld, "Ld");
    function _d(e, t = ou) {
      if (isNaN(e)) throw new rt2(tt2.EncodeTimeValueMalformed, `Time must be a number: ${e}`);
      if (e > nu) throw new rt2(tt2.EncodeTimeSizeExceeded, `Cannot encode a time larger than ${nu}: ${e}`);
      if (e < 0) throw new rt2(tt2.EncodeTimeNegative, `Time must be positive: ${e}`);
      if (Number.isInteger(e) === false) throw new rt2(tt2.EncodeTimeValueMalformed, `Time must be an integer: ${e}`);
      let r, n = "";
      for (let i = t; i > 0; i--) r = e % ar, n = iu.charAt(r) + n, e = (e - r) / ar;
      return n;
    }
    __name(_d, "_d");
    function Fd() {
      return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
    }
    __name(Fd, "Fd");
    function su(e, t) {
      let r = t || Dd(), n = !e || isNaN(e) ? Date.now() : e;
      return _d(n, ou) + Ld(Od, r);
    }
    __name(su, "su");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var ee = [];
    for (let e = 0; e < 256; ++e) ee.push((e + 256).toString(16).slice(1));
    function nn(e, t = 0) {
      return (ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]]).toLowerCase();
    }
    __name(nn, "nn");
    u();
    l();
    c();
    p2();
    d2();
    We();
    var sn = new Uint8Array(256);
    var on2 = sn.length;
    function It() {
      return on2 > sn.length - 16 && (Sr2(sn), on2 = 0), sn.slice(on2, on2 += 16);
    }
    __name(It, "It");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    We();
    var wi2 = { randomUUID: Pr };
    function $d(e, t, r) {
      if (wi2.randomUUID && !t && !e) return wi2.randomUUID();
      e = e || {};
      let n = e.random ?? e.rng?.() ?? It();
      if (n.length < 16) throw new Error("Random bytes length must be >= 16");
      if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
        if (r = r || 0, r < 0 || r + 16 > t.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
        for (let i = 0; i < 16; ++i) t[r + i] = n[i];
        return t;
      }
      return nn(n);
    }
    __name($d, "$d");
    var bi2 = $d;
    u();
    l();
    c();
    p2();
    d2();
    var xi2 = {};
    function Vd(e, t, r) {
      let n;
      if (e) n = au(e.random ?? e.rng?.() ?? It(), e.msecs, e.seq, t, r);
      else {
        let i = Date.now(), o = It();
        Ud(xi2, i, o), n = au(o, xi2.msecs, xi2.seq, t, r);
      }
      return t ?? nn(n);
    }
    __name(Vd, "Vd");
    function Ud(e, t, r) {
      return e.msecs ??= -1 / 0, e.seq ??= 0, t > e.msecs ? (e.seq = r[6] << 23 | r[7] << 16 | r[8] << 8 | r[9], e.msecs = t) : (e.seq = e.seq + 1 | 0, e.seq === 0 && e.msecs++), e;
    }
    __name(Ud, "Ud");
    function au(e, t, r, n, i = 0) {
      if (e.length < 16) throw new Error("Random bytes length must be >= 16");
      if (!n) n = new Uint8Array(16), i = 0;
      else if (i < 0 || i + 16 > n.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
      return t ??= Date.now(), r ??= e[6] * 127 << 24 | e[7] << 16 | e[8] << 8 | e[9], n[i++] = t / 1099511627776 & 255, n[i++] = t / 4294967296 & 255, n[i++] = t / 16777216 & 255, n[i++] = t / 65536 & 255, n[i++] = t / 256 & 255, n[i++] = t & 255, n[i++] = 112 | r >>> 28 & 15, n[i++] = r >>> 20 & 255, n[i++] = 128 | r >>> 14 & 63, n[i++] = r >>> 6 & 255, n[i++] = r << 2 & 255 | e[10] & 3, n[i++] = e[11], n[i++] = e[12], n[i++] = e[13], n[i++] = e[14], n[i++] = e[15], n;
    }
    __name(au, "au");
    var Ei2 = Vd;
    var an = class {
      static {
        __name(this, "an");
      }
      #e = {};
      constructor() {
        this.register("uuid", new Pi()), this.register("cuid", new Si2()), this.register("ulid", new vi2()), this.register("nanoid", new Ai()), this.register("product", new Ci());
      }
      snapshot() {
        return Object.create(this.#e, { now: { value: new Ti2() } });
      }
      register(t, r) {
        this.#e[t] = r;
      }
    };
    var Ti2 = class {
      static {
        __name(this, "Ti");
      }
      #e;
      generate() {
        return this.#e === void 0 && (this.#e = /* @__PURE__ */ new Date()), this.#e.toISOString();
      }
    };
    var Pi = class {
      static {
        __name(this, "Pi");
      }
      generate(t) {
        if (t === 4) return bi2();
        if (t === 7) return Ei2();
        throw new Error("Invalid UUID generator arguments");
      }
    };
    var Si2 = class {
      static {
        __name(this, "Si");
      }
      generate(t) {
        if (t === 1) return pa2();
        if (t === 2) return (0, uu.createId)();
        throw new Error("Invalid CUID generator arguments");
      }
    };
    var vi2 = class {
      static {
        __name(this, "vi");
      }
      generate() {
        return su();
      }
    };
    var Ai = class {
      static {
        __name(this, "Ai");
      }
      generate(t) {
        if (typeof t == "number") return hi(t);
        if (t === void 0) return hi();
        throw new Error("Invalid Nanoid generator arguments");
      }
    };
    var Ci = class {
      static {
        __name(this, "Ci");
      }
      generate(t, r) {
        if (t === void 0 || r === void 0) throw new Error("Invalid Product generator arguments");
        return Array.isArray(t) && Array.isArray(r) ? t.flatMap((n) => r.map((i) => [n, i])) : Array.isArray(t) ? t.map((n) => [n, r]) : Array.isArray(r) ? r.map((n) => [t, n]) : [[t, r]];
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    function un(e, t) {
      return e == null ? e : typeof e == "string" ? un(JSON.parse(e), t) : Array.isArray(e) ? Bd(e, t) : qd(e, t);
    }
    __name(un, "un");
    function qd(e, t) {
      if (t.pagination) {
        let { skip: r, take: n, cursor: i } = t.pagination;
        if (r !== null && r > 0 || n === 0 || i !== null && !St(e, i)) return null;
      }
      return cu(e, t.nested);
    }
    __name(qd, "qd");
    function cu(e, t) {
      for (let [r, n] of Object.entries(t)) e[r] = un(e[r], n);
      return e;
    }
    __name(cu, "cu");
    function Bd(e, t) {
      if (t.distinct !== null) {
        let r = t.linkingFields !== null ? [...t.distinct, ...t.linkingFields] : t.distinct;
        e = jd(e, r);
      }
      return t.pagination && (e = Qd(e, t.pagination, t.linkingFields)), t.reverse && e.reverse(), Object.keys(t.nested).length === 0 ? e : e.map((r) => cu(r, t.nested));
    }
    __name(Bd, "Bd");
    function jd(e, t) {
      let r = /* @__PURE__ */ new Set(), n = [];
      for (let i of e) {
        let o = kt(i, t);
        r.has(o) || (r.add(o), n.push(i));
      }
      return n;
    }
    __name(jd, "jd");
    function Qd(e, t, r) {
      if (r === null) return lu(e, t);
      let n = /* @__PURE__ */ new Map();
      for (let o of e) {
        let s = kt(o, r);
        n.has(s) || n.set(s, []), n.get(s).push(o);
      }
      let i = Array.from(n.entries());
      return i.sort(([o], [s]) => o < s ? -1 : o > s ? 1 : 0), i.flatMap(([, o]) => lu(o, t));
    }
    __name(Qd, "Qd");
    function lu(e, { cursor: t, skip: r, take: n }) {
      let i = t !== null ? e.findIndex((a2) => St(a2, t)) : 0;
      if (i === -1) return [];
      let o = i + (r ?? 0), s = n !== null ? o + n : e.length;
      return e.slice(o, s);
    }
    __name(lu, "lu");
    function kt(e, t, r) {
      let n = t.map((i, o) => r?.[o] ? e[i] !== null ? r[o](e[i]) : null : e[i]);
      return JSON.stringify(n);
    }
    __name(kt, "kt");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function Ri2(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "param";
    }
    __name(Ri2, "Ri");
    function Ii(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "generatorCall";
    }
    __name(Ii, "Ii");
    function Ni(e, t, r, n) {
      let i = e.args.map((o) => fe(o, t, r));
      switch (e.type) {
        case "rawSql":
          return [Gd(e.sql, i, e.argTypes)];
        case "templateSql":
          return (e.chunkable ? Wd(e.fragments, i, n) : [i]).map((s) => {
            let a2 = Jd(e.fragments, e.placeholderFormat, s, e.argTypes);
            if (n !== void 0 && a2.args.length > n) throw new X("The query parameter limit supported by your database is exceeded.", "P2029");
            return a2;
          });
        default:
          L(e.type, "Invalid query type");
      }
    }
    __name(Ni, "Ni");
    function fe(e, t, r) {
      for (; zd(e); ) if (Ri2(e)) {
        let n = t[e.prisma__value.name];
        if (n === void 0) throw new Error(`Missing value for query variable ${e.prisma__value.name}`);
        e.prisma__value.type === "DateTime" && typeof n == "string" ? e = new Date(n) : e = n;
      } else if (Ii(e)) {
        let { name: n, args: i } = e.prisma__value, o = r[n];
        if (!o) throw new Error(`Encountered an unknown generator '${n}'`);
        e = o.generate(...i.map((s) => fe(s, t, r)));
      } else L(e, `Unexpected unevaluated value type: ${e}`);
      return Array.isArray(e) && (e = e.map((n) => fe(n, t, r))), e;
    }
    __name(fe, "fe");
    function Jd(e, t, r, n) {
      let i = "", o = { placeholderNumber: 1 }, s = [], a2 = [];
      for (let m2 of Oi(e, r, n)) {
        if (i += Hd(m2, t, o), m2.type === "stringChunk") continue;
        let f = s.length, T2 = s.push(...pu(m2)) - f;
        if (m2.argType.arity === "tuple") {
          if (T2 % m2.argType.elements.length !== 0) throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${T2} parameters for a tuple of arity ${m2.argType.elements.length}.`);
          for (let S2 = 0; S2 < T2 / m2.argType.elements.length; S2++) a2.push(...m2.argType.elements);
        } else for (let S2 = 0; S2 < T2; S2++) a2.push(m2.argType);
      }
      return { sql: i, args: s, argTypes: a2 };
    }
    __name(Jd, "Jd");
    function Hd(e, t, r) {
      let n = e.type;
      switch (n) {
        case "parameter":
          return ki(t, r.placeholderNumber++);
        case "stringChunk":
          return e.chunk;
        case "parameterTuple":
          return `(${e.value.length == 0 ? "NULL" : e.value.map(() => {
            let o = ki(t, r.placeholderNumber++);
            return `${e.itemPrefix}${o}${e.itemSuffix}`;
          }).join(e.itemSeparator)})`;
        case "parameterTupleList":
          return e.value.map((i) => {
            let o = i.map(() => ki(t, r.placeholderNumber++)).join(e.itemSeparator);
            return `${e.itemPrefix}${o}${e.itemSuffix}`;
          }).join(e.groupSeparator);
        default:
          L(n, "Invalid fragment type");
      }
    }
    __name(Hd, "Hd");
    function ki(e, t) {
      return e.hasNumbering ? `${e.prefix}${t}` : e.prefix;
    }
    __name(ki, "ki");
    function Gd(e, t, r) {
      return { sql: e, args: t, argTypes: r };
    }
    __name(Gd, "Gd");
    function zd(e) {
      return Ri2(e) || Ii(e);
    }
    __name(zd, "zd");
    function* Oi(e, t, r) {
      let n = 0;
      for (let i of e) switch (i.type) {
        case "parameter": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          yield { ...i, value: t[n], argType: r?.[n] }, n++;
          break;
        }
        case "stringChunk": {
          yield i;
          break;
        }
        case "parameterTuple": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          yield { ...i, value: Array.isArray(o) ? o : [o], argType: r?.[n] }, n++;
          break;
        }
        case "parameterTupleList": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          if (!Array.isArray(o)) throw new Error("Malformed query template. Tuple list expected.");
          if (o.length === 0) throw new Error("Malformed query template. Tuple list cannot be empty.");
          for (let s of o) if (!Array.isArray(s)) throw new Error("Malformed query template. Tuple expected.");
          yield { ...i, value: o, argType: r?.[n] }, n++;
          break;
        }
      }
    }
    __name(Oi, "Oi");
    function* pu(e) {
      switch (e.type) {
        case "parameter":
          yield e.value;
          break;
        case "stringChunk":
          break;
        case "parameterTuple":
          yield* e.value;
          break;
        case "parameterTupleList":
          for (let t of e.value) yield* t;
          break;
      }
    }
    __name(pu, "pu");
    function Wd(e, t, r) {
      let n = 0, i = 0;
      for (let s of Oi(e, t, void 0)) {
        let a2 = 0;
        for (let m2 of pu(s)) a2++;
        i = Math.max(i, a2), n += a2;
      }
      let o = [[]];
      for (let s of Oi(e, t, void 0)) switch (s.type) {
        case "parameter": {
          for (let a2 of o) a2.push(s.value);
          break;
        }
        case "stringChunk":
          break;
        case "parameterTuple": {
          let a2 = s.value.length, m2 = [];
          if (r && o.length === 1 && a2 === i && n > r && n - a2 < r) {
            let f = r - (n - a2);
            m2 = Kd(s.value, f);
          } else m2 = [s.value];
          o = o.flatMap((f) => m2.map((T2) => [...f, T2]));
          break;
        }
        case "parameterTupleList": {
          let a2 = s.value.reduce((S2, v2) => S2 + v2.length, 0), m2 = [], f = [], T2 = 0;
          for (let S2 of s.value) r && o.length === 1 && a2 === i && f.length > 0 && n - a2 + T2 + S2.length > r && (m2.push(f), f = [], T2 = 0), f.push(S2), T2 += S2.length;
          f.length > 0 && m2.push(f), o = o.flatMap((S2) => m2.map((v2) => [...S2, v2]));
          break;
        }
      }
      return o;
    }
    __name(Wd, "Wd");
    function Kd(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n += t) r.push(e.slice(n, n + t));
      return r;
    }
    __name(Kd, "Kd");
    u();
    l();
    c();
    p2();
    d2();
    function du(e) {
      return e.rows.map((t) => t.reduce((r, n, i) => (r[e.columnNames[i]] = n, r), {}));
    }
    __name(du, "du");
    function mu(e) {
      return { columns: e.columnNames, types: e.columnTypes.map((t) => Zd(t)), rows: e.rows.map((t) => t.map((r, n) => ur(r, e.columnTypes[n]))) };
    }
    __name(mu, "mu");
    function ur(e, t) {
      if (e === null) return null;
      switch (t) {
        case k.Int32:
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string":
              return Math.trunc(Number(e));
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int32`);
          }
        case k.Int32Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int32Array`);
          return e.map((r) => ur(r, k.Int32));
        case k.Int64:
          switch (typeof e) {
            case "number":
              return BigInt(Math.trunc(e));
            case "string":
              return e;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int64`);
          }
        case k.Int64Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int64Array`);
          return e.map((r) => ur(r, k.Int64));
        case k.Json:
          switch (typeof e) {
            case "string":
              return JSON.parse(e);
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Json`);
          }
        case k.JsonArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as JsonArray`);
          return e.map((r) => ur(r, k.Json));
        case k.Boolean:
          switch (typeof e) {
            case "boolean":
              return e;
            case "string":
              return e === "true" || e === "1";
            case "number":
              return e === 1;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Boolean`);
          }
        case k.BooleanArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as BooleanArray`);
          return e.map((r) => ur(r, k.Boolean));
        default:
          return e;
      }
    }
    __name(ur, "ur");
    function Zd(e) {
      switch (e) {
        case k.Int32:
          return "int";
        case k.Int64:
          return "bigint";
        case k.Float:
          return "float";
        case k.Double:
          return "double";
        case k.Text:
          return "string";
        case k.Enum:
          return "enum";
        case k.Bytes:
          return "bytes";
        case k.Boolean:
          return "bool";
        case k.Character:
          return "char";
        case k.Numeric:
          return "decimal";
        case k.Json:
          return "json";
        case k.Uuid:
          return "uuid";
        case k.DateTime:
          return "datetime";
        case k.Date:
          return "date";
        case k.Time:
          return "time";
        case k.Int32Array:
          return "int-array";
        case k.Int64Array:
          return "bigint-array";
        case k.FloatArray:
          return "float-array";
        case k.DoubleArray:
          return "double-array";
        case k.TextArray:
          return "string-array";
        case k.EnumArray:
          return "string-array";
        case k.BytesArray:
          return "bytes-array";
        case k.BooleanArray:
          return "bool-array";
        case k.CharacterArray:
          return "char-array";
        case k.NumericArray:
          return "decimal-array";
        case k.JsonArray:
          return "json-array";
        case k.UuidArray:
          return "uuid-array";
        case k.DateTimeArray:
          return "datetime-array";
        case k.DateArray:
          return "date-array";
        case k.TimeArray:
          return "time-array";
        case k.UnknownNumber:
          return "unknown";
        case k.Set:
          return "string";
        default:
          L(e, `Unexpected column type: ${e}`);
      }
    }
    __name(Zd, "Zd");
    u();
    l();
    c();
    p2();
    d2();
    function fu(e, t, r) {
      if (!t.every((n) => Di(e, n))) {
        let n = Yd(e, r), i = Xd(r);
        throw new X(n, i, r.context);
      }
    }
    __name(fu, "fu");
    function Di(e, t) {
      switch (t.type) {
        case "rowCountEq":
          return Array.isArray(e) ? e.length === t.args : e === null ? t.args === 0 : t.args === 1;
        case "rowCountNeq":
          return Array.isArray(e) ? e.length !== t.args : e === null ? t.args !== 0 : t.args !== 1;
        case "affectedRowCountEq":
          return e === t.args;
        case "never":
          return false;
        default:
          L(t, `Unknown rule type: ${t.type}`);
      }
    }
    __name(Di, "Di");
    function Yd(e, t) {
      switch (t.errorIdentifier) {
        case "RELATION_VIOLATION":
          return `The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;
        case "MISSING_RECORD":
          return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;
        case "MISSING_RELATED_RECORD": {
          let r = t.context.neededFor ? ` (needed to ${t.context.neededFor})` : "";
          return `An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`;
        }
        case "INCOMPLETE_CONNECT_INPUT":
          return `An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e) ? e.length : e}.`;
        case "INCOMPLETE_CONNECT_OUTPUT":
          return `The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e) ? e.length : e}.`;
        case "RECORDS_NOT_CONNECTED":
          return `The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;
        default:
          L(t, `Unknown error identifier: ${t}`);
      }
    }
    __name(Yd, "Yd");
    function Xd(e) {
      switch (e.errorIdentifier) {
        case "RELATION_VIOLATION":
          return "P2014";
        case "RECORDS_NOT_CONNECTED":
          return "P2017";
        case "INCOMPLETE_CONNECT_OUTPUT":
          return "P2018";
        case "MISSING_RECORD":
        case "MISSING_RELATED_RECORD":
        case "INCOMPLETE_CONNECT_INPUT":
          return "P2025";
        default:
          L(e, `Unknown error identifier: ${e}`);
      }
    }
    __name(Xd, "Xd");
    var lr2 = class e {
      static {
        __name(this, "e");
      }
      #e;
      #t = new an();
      #r;
      #n;
      #i;
      #o;
      #s;
      constructor({ onQuery: t, tracingHelper: r, serializer: n, rawSerializer: i, provider: o, connectionInfo: s }) {
        this.#e = t, this.#r = r, this.#n = n, this.#i = i ?? n, this.#o = o, this.#s = s;
      }
      static forSql(t) {
        return new e({ onQuery: t.onQuery, tracingHelper: t.tracingHelper, serializer: du, rawSerializer: mu, provider: t.provider, connectionInfo: t.connectionInfo });
      }
      async run(t, r) {
        let { value: n } = await this.interpretNode(t, { ...r, generators: this.#t.snapshot() }).catch((i) => vt(i));
        return n;
      }
      async interpretNode(t, r) {
        switch (t.type) {
          case "value":
            return { value: fe(t.args, r.scope, r.generators) };
          case "seq": {
            let n;
            for (let i of t.args) n = await this.interpretNode(i, r);
            return n ?? { value: void 0 };
          }
          case "get":
            return { value: r.scope[t.args.name] };
          case "let": {
            let n = Object.create(r.scope);
            for (let i of t.args.bindings) {
              let { value: o } = await this.interpretNode(i.expr, { ...r, scope: n });
              n[i.name] = o;
            }
            return this.interpretNode(t.args.expr, { ...r, scope: n });
          }
          case "getFirstNonEmpty": {
            for (let n of t.args.names) {
              let i = r.scope[n];
              if (!gu2(i)) return { value: i };
            }
            return { value: [] };
          }
          case "concat": {
            let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
            return { value: n.length > 0 ? n.reduce((i, o) => i.concat(Mi2(o)), []) : [] };
          }
          case "sum": {
            let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
            return { value: n.length > 0 ? n.reduce((i, o) => Ae(i) + Ae(o)) : 0 };
          }
          case "execute": {
            let n = Ni(t.args, r.scope, r.generators, this.#a()), i = 0;
            for (let o of n) {
              let s = yu(o, r.sqlCommenter);
              i += await this.#l(s, r.queryable, () => r.queryable.executeRaw(Li(s)).catch((a2) => t.args.type === "rawSql" ? ii2(a2) : vt(a2)));
            }
            return { value: i };
          }
          case "query": {
            let n = Ni(t.args, r.scope, r.generators, this.#a()), i;
            for (let o of n) {
              let s = yu(o, r.sqlCommenter), a2 = await this.#l(s, r.queryable, () => r.queryable.queryRaw(Li(s)).catch((m2) => t.args.type === "rawSql" ? ii2(m2) : vt(m2)));
              i === void 0 ? i = a2 : (i.rows.push(...a2.rows), i.lastInsertId = a2.lastInsertId);
            }
            return { value: t.args.type === "rawSql" ? this.#i(i) : this.#n(i), lastInsertId: i?.lastInsertId };
          }
          case "reverse": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            return { value: Array.isArray(n) ? n.reverse() : n, lastInsertId: i };
          }
          case "unique": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            if (!Array.isArray(n)) return { value: n, lastInsertId: i };
            if (n.length > 1) throw new Error(`Expected zero or one element, got ${n.length}`);
            return { value: n[0] ?? null, lastInsertId: i };
          }
          case "required": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            if (gu2(n)) throw new Error("Required value is empty");
            return { value: n, lastInsertId: i };
          }
          case "mapField": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.records, r);
            return { value: hu(n, t.args.field), lastInsertId: i };
          }
          case "join": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.parent, r);
            if (n === null) return { value: null, lastInsertId: i };
            let o = await Promise.all(t.args.children.map(async (s) => ({ joinExpr: s, childRecords: (await this.interpretNode(s.child, r)).value })));
            return { value: em(n, o, t.args.canAssumeStrictEquality), lastInsertId: i };
          }
          case "transaction": {
            if (!r.transactionManager.enabled) return this.interpretNode(t.args, r);
            let n = r.transactionManager.manager, i = await n.startInternalTransaction(), o = await n.getTransaction(i, "query");
            try {
              let s = await this.interpretNode(t.args, { ...r, queryable: o });
              return await n.commitTransaction(i.id), s;
            } catch (s) {
              throw await n.rollbackTransaction(i.id), s;
            }
          }
          case "dataMap": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
            return { value: oa(n, t.args.structure, t.args.enums), lastInsertId: i };
          }
          case "validate": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
            return fu(n, t.args.rules, t.args), { value: n, lastInsertId: i };
          }
          case "if": {
            let { value: n } = await this.interpretNode(t.args.value, r);
            return Di(n, t.args.rule) ? await this.interpretNode(t.args.then, r) : await this.interpretNode(t.args.else, r);
          }
          case "unit":
            return { value: void 0 };
          case "diff": {
            let { value: n } = await this.interpretNode(t.args.from, r), { value: i } = await this.interpretNode(t.args.to, r), o = /* @__PURE__ */ __name((a2) => a2 !== null ? kt(cr(a2), t.args.fields) : null, "o"), s = new Set(Mi2(i).map(o));
            return { value: Mi2(n).filter((a2) => !s.has(o(a2))) };
          }
          case "process": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = Li(t.args.operations);
            return wu(o, r.scope, r.generators), { value: un(n, o), lastInsertId: i };
          }
          case "initializeRecord": {
            let { lastInsertId: n } = await this.interpretNode(t.args.expr, r), i = {};
            for (let [o, s] of Object.entries(t.args.fields)) i[o] = rm(s, n, r.scope, r.generators);
            return { value: i, lastInsertId: n };
          }
          case "mapRecord": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = n === null ? {} : cr(n);
            for (let [s, a2] of Object.entries(t.args.fields)) o[s] = nm(a2, o[s], r.scope, r.generators);
            return { value: o, lastInsertId: i };
          }
          default:
            L(t, `Unexpected node type: ${t.type}`);
        }
      }
      #a() {
        return this.#s?.maxBindValues !== void 0 ? this.#s.maxBindValues : this.#u();
      }
      #u() {
        if (this.#o !== void 0) switch (this.#o) {
          case "cockroachdb":
          case "postgres":
          case "postgresql":
          case "prisma+postgres":
            return 32766;
          case "mysql":
            return 65535;
          case "sqlite":
            return 999;
          case "sqlserver":
            return 2098;
          case "mongodb":
            return;
          default:
            L(this.#o, `Unexpected provider: ${this.#o}`);
        }
      }
      #l(t, r, n) {
        return Yr({ query: t, execute: n, provider: this.#o ?? r.provider, tracingHelper: this.#r, onQuery: this.#e });
      }
    };
    function gu2(e) {
      return Array.isArray(e) ? e.length === 0 : e == null;
    }
    __name(gu2, "gu");
    function Mi2(e) {
      return Array.isArray(e) ? e : [e];
    }
    __name(Mi2, "Mi");
    function Ae(e) {
      if (typeof e == "number") return e;
      if (typeof e == "string") return Number(e);
      throw new Error(`Expected number, got ${typeof e}`);
    }
    __name(Ae, "Ae");
    function cr(e) {
      if (typeof e == "object" && e !== null) return e;
      throw new Error(`Expected object, got ${typeof e}`);
    }
    __name(cr, "cr");
    function hu(e, t) {
      return Array.isArray(e) ? e.map((r) => hu(r, t)) : typeof e == "object" && e !== null ? e[t] ?? null : e;
    }
    __name(hu, "hu");
    function em(e, t, r) {
      for (let { joinExpr: n, childRecords: i } of t) {
        let o = n.on.map(([T2]) => T2), s = n.on.map(([, T2]) => T2), a2 = {}, m2 = Array.isArray(e) ? e : [e];
        for (let T2 of m2) {
          let S2 = cr(T2), v2 = kt(S2, o);
          a2[v2] || (a2[v2] = []), a2[v2].push(S2), n.isRelationUnique ? S2[n.parentField] = null : S2[n.parentField] = [];
        }
        let f = r ? void 0 : tm(m2, o);
        for (let T2 of Array.isArray(i) ? i : [i]) {
          if (T2 === null) continue;
          let S2 = kt(cr(T2), s, f);
          for (let v2 of a2[S2] ?? []) n.isRelationUnique ? v2[n.parentField] = T2 : v2[n.parentField].push(T2);
        }
      }
      return e;
    }
    __name(em, "em");
    function tm(e, t) {
      function r(o) {
        switch (o) {
          case "number":
            return Number;
          case "string":
            return String;
          case "boolean":
            return Boolean;
          case "bigint":
            return BigInt;
          default:
            return;
        }
      }
      __name(r, "r");
      let n = Array.from({ length: t.length }), i = 0;
      for (let o of e) {
        let s = cr(o);
        for (let [a2, m2] of t.entries()) if (s[m2] !== null && n[a2] === void 0) {
          let f = r(typeof s[m2]);
          f !== void 0 && (n[a2] = f), i++;
        }
        if (i === t.length) break;
      }
      return n;
    }
    __name(tm, "tm");
    function rm(e, t, r, n) {
      switch (e.type) {
        case "value":
          return fe(e.value, r, n);
        case "lastInsertId":
          return t;
        default:
          L(e, `Unexpected field initializer type: ${e.type}`);
      }
    }
    __name(rm, "rm");
    function nm(e, t, r, n) {
      switch (e.type) {
        case "set":
          return fe(e.value, r, n);
        case "add":
          return Ae(t) + Ae(fe(e.value, r, n));
        case "subtract":
          return Ae(t) - Ae(fe(e.value, r, n));
        case "multiply":
          return Ae(t) * Ae(fe(e.value, r, n));
        case "divide": {
          let i = Ae(t), o = Ae(fe(e.value, r, n));
          return o === 0 ? null : i / o;
        }
        default:
          L(e, `Unexpected field operation type: ${e.type}`);
      }
    }
    __name(nm, "nm");
    function yu(e, t) {
      if (!t || t.plugins.length === 0) return e;
      let r = sa(t.plugins, { query: t.queryInfo, sql: e.sql });
      return r ? { ...e, sql: aa(e.sql, r) } : e;
    }
    __name(yu, "yu");
    function wu(e, t, r) {
      let n = e.pagination?.cursor;
      if (n) for (let [i, o] of Object.entries(n)) n[i] = fe(o, t, r);
      for (let i of Object.values(e.nested)) wu(i, t, r);
    }
    __name(wu, "wu");
    function Li(e) {
      return me(e);
    }
    __name(Li, "Li");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function bu2(e) {
      return new _i(e).deserialize();
    }
    __name(bu2, "bu");
    function im(e) {
      return g.from(e, "base64url");
    }
    __name(im, "im");
    var _i = class {
      static {
        __name(this, "_i");
      }
      #e;
      #t;
      #r = 0;
      constructor(t) {
        this.#e = t;
        let r = im(t.graph);
        this.#t = new DataView(r.buffer, r.byteOffset, r.byteLength);
      }
      deserialize() {
        let { inputNodeCount: t, outputNodeCount: r, rootCount: n } = this.#a(), i = this.#u(t), o = this.#l(r), s = this.#p(n);
        return { strings: this.#e.strings, inputNodes: i, outputNodes: o, roots: s };
      }
      #n() {
        let t = 0, r = 0, n;
        do
          n = this.#t.getUint8(this.#r++), t |= (n & 127) << r, r += 7;
        while (n >= 128);
        return t;
      }
      #i() {
        let t = this.#n();
        return t === 0 ? void 0 : t - 1;
      }
      #o() {
        let t = this.#t.getUint8(this.#r);
        return this.#r += 1, t;
      }
      #s() {
        let t = this.#t.getUint16(this.#r, true);
        return this.#r += 2, t;
      }
      #a() {
        let t = this.#n(), r = this.#n(), n = this.#n();
        return { inputNodeCount: t, outputNodeCount: r, rootCount: n };
      }
      #u(t) {
        let r = [];
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = {};
          for (let s = 0; s < i; s++) {
            let a2 = this.#n(), m2 = this.#s(), f = this.#i(), T2 = this.#i(), v2 = { flags: this.#o() };
            m2 !== 0 && (v2.scalarMask = m2), f !== void 0 && (v2.childNodeId = f), T2 !== void 0 && (v2.enumNameIndex = T2), o[a2] = v2;
          }
          r.push({ edges: o });
        }
        return r;
      }
      #l(t) {
        let r = [];
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = {};
          for (let s = 0; s < i; s++) {
            let a2 = this.#n(), m2 = this.#i(), f = this.#i(), T2 = {};
            m2 !== void 0 && (T2.argsNodeId = m2), f !== void 0 && (T2.outputNodeId = f), o[a2] = T2;
          }
          r.push({ edges: o });
        }
        return r;
      }
      #p(t) {
        let r = {};
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = this.#i(), s = this.#i(), a2 = this.#e.strings[i], m2 = {};
          o !== void 0 && (m2.argsNodeId = o), s !== void 0 && (m2.outputNodeId = s), r[a2] = m2;
        }
        return r;
      }
    };
    var pr = class e {
      static {
        __name(this, "e");
      }
      #e;
      #t;
      #r;
      constructor(t, r) {
        this.#e = t, this.#r = r, this.#t = /* @__PURE__ */ new Map();
        for (let n = 0; n < t.strings.length; n++) this.#t.set(t.strings[n], n);
      }
      static deserialize(t, r) {
        let n = bu2(t);
        return new e(n, r);
      }
      static fromData(t, r) {
        return new e(t, r);
      }
      root(t) {
        let r = this.#e.roots[t];
        if (r) return { argsNodeId: r.argsNodeId, outputNodeId: r.outputNodeId };
      }
      inputNode(t) {
        if (!(t === void 0 || t < 0 || t >= this.#e.inputNodes.length)) return { id: t };
      }
      outputNode(t) {
        if (!(t === void 0 || t < 0 || t >= this.#e.outputNodes.length)) return { id: t };
      }
      inputEdge(t, r) {
        if (!t) return;
        let n = this.#e.inputNodes[t.id];
        if (!n) return;
        let i = this.#t.get(r);
        if (i === void 0) return;
        let o = n.edges[i];
        if (o) return { flags: o.flags, childNodeId: o.childNodeId, scalarMask: o.scalarMask ?? 0, enumNameIndex: o.enumNameIndex };
      }
      outputEdge(t, r) {
        if (!t) return;
        let n = this.#e.outputNodes[t.id];
        if (!n) return;
        let i = this.#t.get(r);
        if (i === void 0) return;
        let o = n.edges[i];
        if (o) return { argsNodeId: o.argsNodeId, outputNodeId: o.outputNodeId };
      }
      enumValues(t) {
        if (t?.enumNameIndex === void 0) return;
        let r = this.#e.strings[t.enumNameIndex];
        if (r) return this.#r(r);
      }
      getString(t) {
        return this.#e.strings[t];
      }
    };
    var Ce2 = { ParamScalar: 1, ParamEnum: 2, ParamListScalar: 4, ParamListEnum: 8, ListObject: 16, Object: 32 };
    var te = { String: 1, Int: 2, BigInt: 4, Float: 8, Decimal: 16, Boolean: 32, DateTime: 64, Json: 128, Bytes: 256 };
    function Re(e, t) {
      return (e.flags & t) !== 0;
    }
    __name(Re, "Re");
    function je(e) {
      return e.scalarMask;
    }
    __name(je, "je");
    u();
    l();
    c();
    p2();
    d2();
    var om = /* @__PURE__ */ new Set(["DateTime", "Decimal", "BigInt", "Bytes", "Json", "Raw"]);
    function ln2(e) {
      if (e == null) return { kind: "null" };
      if (typeof e == "string") return { kind: "primitive", value: e };
      if (typeof e == "number") return { kind: "primitive", value: e };
      if (typeof e == "boolean") return { kind: "primitive", value: e };
      if (Array.isArray(e)) return { kind: "array", items: e };
      if (typeof e == "object") {
        let t = e;
        if ("$type" in t && typeof t.$type == "string") {
          let r = t.$type;
          return om.has(r) ? { kind: "taggedScalar", tag: r, value: t.value } : { kind: "structural", value: t.value };
        }
        return { kind: "object", entries: t };
      }
      return { kind: "structural", value: e };
    }
    __name(ln2, "ln");
    function xu(e) {
      return typeof e == "object" && e !== null && !Array.isArray(e) && !("$type" in e);
    }
    __name(xu, "xu");
    function Eu(e) {
      return typeof e == "object" && e !== null && "$type" in e && typeof e.$type == "string";
    }
    __name(Eu, "Eu");
    function Fi2(e, t) {
      let r = new cn(t), n = e.modelName ? `${e.modelName}.${e.action}` : e.action, i = t.root(n);
      return { parameterizedQuery: { ...e, query: r.parameterizeFieldSelection(e.query, i?.argsNodeId, i?.outputNodeId) }, placeholderValues: r.getPlaceholderValues() };
    }
    __name(Fi2, "Fi");
    function $i(e, t) {
      let r = new cn(t), n = [];
      for (let i = 0; i < e.batch.length; i++) {
        let o = e.batch[i], s = o.modelName ? `${o.modelName}.${o.action}` : o.action, a2 = t.root(s);
        n.push({ ...o, query: r.parameterizeFieldSelection(o.query, a2?.argsNodeId, a2?.outputNodeId) });
      }
      return { parameterizedBatch: { ...e, batch: n }, placeholderValues: r.getPlaceholderValues() };
    }
    __name($i, "$i");
    var cn = class {
      static {
        __name(this, "cn");
      }
      #e;
      #t = /* @__PURE__ */ new Map();
      #r = /* @__PURE__ */ new Map();
      #n = 1;
      constructor(t) {
        this.#e = t;
      }
      getPlaceholderValues() {
        return Object.fromEntries(this.#t);
      }
      #i(t, r) {
        let n = am(t, r), i = this.#r.get(n);
        if (i !== void 0) return Tu(i, r);
        let o = `%${this.#n++}`;
        return this.#r.set(n, o), this.#t.set(o, t), Tu(o, r);
      }
      parameterizeFieldSelection(t, r, n) {
        let i = this.#e.inputNode(r), o = this.#e.outputNode(n), s = { ...t };
        return t.arguments && t.arguments.$type !== "Raw" && (s.arguments = this.#o(t.arguments, i)), t.selection && (s.selection = this.#c(t.selection, o)), s;
      }
      #o(t, r) {
        if (!r) return t;
        let n = {};
        for (let [i, o] of Object.entries(t)) {
          let s = this.#e.inputEdge(r, i);
          s ? n[i] = this.#s(o, s) : n[i] = o;
        }
        return n;
      }
      #s(t, r) {
        let n = ln2(t);
        switch (n.kind) {
          case "null":
            return t;
          case "structural":
            return t;
          case "primitive":
            return this.#a(n.value, r);
          case "taggedScalar":
            return this.#u(t, n.tag, r);
          case "array":
            return this.#l(n.items, t, r);
          case "object":
            return this.#p(n.entries, r);
          default:
            throw new Error(`Unknown value kind ${n.kind}`);
        }
      }
      #a(t, r) {
        if (Re(r, Ce2.ParamEnum) && r.enumNameIndex !== void 0 && typeof t == "string") {
          let o = this.#e.enumValues(r);
          if (o && Object.hasOwn(o, t)) {
            let s = { type: "Enum" };
            return this.#i(o[t], s);
          }
        }
        if (!Re(r, Ce2.ParamScalar)) return t;
        let n = je(r);
        if (n === 0) return t;
        let i = Vi(t);
        return Su(i, n) ? (n & te.Json && (t = JSON.stringify(t)), this.#i(t, i)) : t;
      }
      #u(t, r, n) {
        if (!Re(n, Ce2.ParamScalar)) return t;
        let i = je(n);
        if (i === 0 || !Au(r, i)) return t;
        let o = vu2(t.$type), s = Cu(t);
        return this.#i(s, o);
      }
      #l(t, r, n) {
        if (Re(n, Ce2.ParamScalar) && je(n) & te.Json) {
          let i = he(we(t)), o = { type: "Json" };
          return this.#i(i, o);
        }
        if (Re(n, Ce2.ParamEnum)) {
          let i = this.#e.enumValues(n);
          if (i && t.every((o) => typeof o == "string" && Object.hasOwn(i, o))) {
            let o = { type: "List", inner: { type: "Enum" } };
            return this.#i(t, o);
          }
        }
        if (Re(n, Ce2.ParamListScalar) && t.every((o) => dm(o, n)) && t.length > 0) {
          let o = t.map((m2) => mm(m2)), a2 = { type: "List", inner: cm(t) };
          return this.#i(o, a2);
        }
        if (Re(n, Ce2.ListObject)) {
          let i = this.#e.inputNode(n.childNodeId);
          if (i) return t.map((o) => xu(o) ? this.#o(o, i) : o);
        }
        return r;
      }
      #p(t, r) {
        if (Re(r, Ce2.Object)) {
          let i = this.#e.inputNode(r.childNodeId);
          if (i) return this.#o(t, i);
        }
        if (je(r) & te.Json) {
          let i = he(we(t)), o = { type: "Json" };
          return this.#i(i, o);
        }
        return t;
      }
      #c(t, r) {
        if (!t || !r) return t;
        let n = {};
        for (let [i, o] of Object.entries(t)) {
          if (i === "$scalars" || i === "$composites" || typeof o == "boolean") {
            n[i] = o;
            continue;
          }
          let s = this.#e.outputEdge(r, i);
          if (s) {
            let a2 = o, m2 = this.#e.inputNode(s.argsNodeId), f = this.#e.outputNode(s.outputNodeId), T2 = { selection: a2.selection ? this.#c(a2.selection, f) : {} };
            a2.arguments && (T2.arguments = this.#o(a2.arguments, m2)), n[i] = T2;
          } else n[i] = o;
        }
        return n;
      }
    };
    function Tu(e, t) {
      return { $type: "Param", value: { name: e, ...t } };
    }
    __name(Tu, "Tu");
    function Pu(e) {
      return e.type === "List" ? `List<${Pu(e.inner)}>` : e.type;
    }
    __name(Pu, "Pu");
    function sm(e) {
      return ArrayBuffer.isView(e) ? g.from(e.buffer, e.byteOffset, e.byteLength).toString("base64") : JSON.stringify(e);
    }
    __name(sm, "sm");
    function am(e, t) {
      let r = Pu(t), n = sm(e);
      return `${r}:${n}`;
    }
    __name(am, "am");
    var um = 2 ** 31 - 1;
    var lm = -(2 ** 31);
    function Vi(e) {
      switch (typeof e) {
        case "boolean":
          return { type: "Boolean" };
        case "number":
          return Number.isInteger(e) ? lm <= e && e <= um ? { type: "Int" } : { type: "BigInt" } : { type: "Float" };
        case "string":
          return { type: "String" };
        default:
          throw new Error("unreachable");
      }
    }
    __name(Vi, "Vi");
    function Su({ type: e }, t) {
      switch (e) {
        case "Boolean":
          return (t & te.Boolean) !== 0;
        case "Int":
          return (t & (te.Int | te.BigInt | te.Float)) !== 0;
        case "BigInt":
          return (t & te.BigInt) !== 0;
        case "Float":
          return (t & te.Float) !== 0;
        case "String":
          return (t & te.String) !== 0;
        default:
          return false;
      }
    }
    __name(Su, "Su");
    function vu2(e) {
      switch (e) {
        case "BigInt":
        case "Bytes":
        case "DateTime":
        case "Json":
          return { type: e };
        case "Decimal":
          return { type: "Float" };
        default:
          return;
      }
    }
    __name(vu2, "vu");
    function cm(e) {
      let t = { type: "Any" };
      for (let r of e) {
        let n = ln2(r), i;
        switch (n.kind) {
          case "primitive":
            i = Vi(n.value);
            break;
          case "taggedScalar":
            i = vu2(n.tag) ?? { type: "Any" };
            break;
          default:
            return { type: "Any" };
        }
        t = pm(t, i);
      }
      return t;
    }
    __name(cm, "cm");
    function pm(e, t) {
      if (e.type === "Any") return t;
      if (t.type === "Any" || e.type === t.type) return e;
      let r = { Int: 0, BigInt: 1, Float: 2 }, n = r[e.type], i = r[t.type];
      return n !== void 0 && i !== void 0 ? n >= i ? e : t : { type: "Any" };
    }
    __name(pm, "pm");
    function Au(e, t) {
      switch (e) {
        case "DateTime":
          return (t & te.DateTime) !== 0;
        case "Decimal":
          return (t & te.Decimal) !== 0;
        case "BigInt":
          return (t & te.BigInt) !== 0;
        case "Bytes":
          return (t & te.Bytes) !== 0;
        case "Json":
          return (t & te.Json) !== 0;
        default:
          return false;
      }
    }
    __name(Au, "Au");
    function dm(e, t) {
      let r = ln2(e);
      switch (r.kind) {
        case "structural":
          return false;
        case "null":
          return false;
        case "primitive": {
          let n = Vi(r.value), i = je(t);
          return i !== 0 && Su(n, i);
        }
        case "taggedScalar": {
          let n = je(t);
          return n !== 0 && Au(r.tag, n);
        }
        default:
          return false;
      }
    }
    __name(dm, "dm");
    function mm(e) {
      return Eu(e) ? Cu(e) : e;
    }
    __name(mm, "mm");
    function Cu(e) {
      return e.value;
    }
    __name(Cu, "Cu");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    async function fm() {
      return globalThis.crypto ?? await Promise.resolve().then(() => (We(), Fn));
    }
    __name(fm, "fm");
    async function Ru() {
      return (await fm()).randomUUID();
    }
    __name(Ru, "Ru");
    u();
    l();
    c();
    p2();
    d2();
    async function Iu(e, t) {
      return new Promise((r) => {
        e.addEventListener(t, r, { once: true });
      });
    }
    __name(Iu, "Iu");
    u();
    l();
    c();
    p2();
    d2();
    var ae = class extends X {
      static {
        __name(this, "ae");
      }
      name = "TransactionManagerError";
      constructor(t, r) {
        super("Transaction API error: " + t, "P2028", r);
      }
    };
    var nt2 = class extends ae {
      static {
        __name(this, "nt");
      }
      constructor() {
        super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");
      }
    };
    var pn = class extends ae {
      static {
        __name(this, "pn");
      }
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`);
      }
    };
    var dn = class extends ae {
      static {
        __name(this, "dn");
      }
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`);
      }
    };
    var mn = class extends ae {
      static {
        __name(this, "mn");
      }
      constructor() {
        super("Unable to start a transaction in the given time.");
      }
    };
    var fn = class extends ae {
      static {
        __name(this, "fn");
      }
      constructor(t, { timeout: r, timeTaken: n }) {
        super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`, { operation: t, timeout: r, timeTaken: n });
      }
    };
    var Ie2 = class extends ae {
      static {
        __name(this, "Ie");
      }
      constructor(t) {
        super(`Internal Consistency Error: ${t}`);
      }
    };
    var gn = class extends ae {
      static {
        __name(this, "gn");
      }
      constructor(t) {
        super(`Invalid isolation level: ${t}`, { isolationLevel: t });
      }
    };
    var gm = 100;
    var Ot = ne("prisma:client:transactionManager");
    var ym = /* @__PURE__ */ __name(() => ({ sql: "COMMIT", args: [], argTypes: [] }), "ym");
    var hm = /* @__PURE__ */ __name(() => ({ sql: "ROLLBACK", args: [], argTypes: [] }), "hm");
    var wm = /* @__PURE__ */ __name(() => ({ sql: '-- Implicit "COMMIT" query via underlying driver', args: [], argTypes: [] }), "wm");
    var bm = /* @__PURE__ */ __name(() => ({ sql: '-- Implicit "ROLLBACK" query via underlying driver', args: [], argTypes: [] }), "bm");
    var dr3 = class {
      static {
        __name(this, "dr");
      }
      transactions = /* @__PURE__ */ new Map();
      closedTransactions = [];
      driverAdapter;
      transactionOptions;
      tracingHelper;
      #e;
      #t;
      constructor({ driverAdapter: t, transactionOptions: r, tracingHelper: n, onQuery: i, provider: o }) {
        this.driverAdapter = t, this.transactionOptions = r, this.tracingHelper = n, this.#e = i, this.#t = o;
      }
      async startInternalTransaction(t) {
        let r = t !== void 0 ? this.#m(t) : {};
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async startTransaction(t) {
        let r = t !== void 0 ? this.#m(t) : this.transactionOptions;
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async #r(t) {
        if (t.newTxId) return await this.#p(t.newTxId, "start", async (s) => {
          if (s.status !== "running") throw new Ie2(`Transaction in invalid state ${s.status} when starting a nested transaction.`);
          if (!s.transaction) throw new Ie2("Transaction missing underlying driver transaction when starting a nested transaction.");
          s.depth += 1;
          let a2 = this.#i(s);
          s.savepoints.push(a2);
          try {
            await this.#o(s.transaction)(a2);
          } catch (m2) {
            throw s.depth -= 1, s.savepoints.pop(), m2;
          }
          return { id: s.id };
        });
        let r = { id: await Ru(), status: "waiting", timer: void 0, timeout: t.timeout, startedAt: Date.now(), transaction: void 0, operationQueue: Promise.resolve(), depth: 1, savepoints: [], savepointCounter: 0 }, n = new AbortController(), i = ku2(() => n.abort(), t.maxWait);
        i?.unref?.();
        let o = this.driverAdapter.startTransaction(t.isolationLevel).catch(vt);
        switch (r.transaction = await Promise.race([o.finally(() => clearTimeout(i)), Iu(n.signal, "abort").then(() => {
        })]), this.transactions.set(r.id, r), r.status) {
          case "waiting":
            if (n.signal.aborted) throw o.then((s) => s.rollback()).catch((s) => Ot("error in discarded transaction:", s)), await this.#d(r, "timed_out"), new mn();
            return r.status = "running", r.timer = this.#l(r.id, t.timeout), { id: r.id };
          case "timed_out":
          case "running":
          case "committed":
          case "rolled_back":
            throw new Ie2(`Transaction in invalid state ${r.status} although it just finished startup.`);
          default:
            L(r.status, "Unknown transaction status.");
        }
      }
      async commitTransaction(t) {
        return await this.tracingHelper.runInChildSpan("commit_transaction", async () => {
          await this.#p(t, "commit", async (r) => {
            if (r.depth > 1) {
              if (!r.transaction) throw new nt2();
              let n = r.savepoints.at(-1);
              if (!n) throw new Ie2(`Missing savepoint for nested commit. Depth: ${r.depth}, transactionId: ${r.id}`);
              try {
                await this.#a(r.transaction, n);
              } finally {
                r.savepoints.pop(), r.depth -= 1;
              }
              return;
            }
            await this.#d(r, "committed");
          });
        });
      }
      async rollbackTransaction(t) {
        return await this.tracingHelper.runInChildSpan("rollback_transaction", async () => {
          await this.#p(t, "rollback", async (r) => {
            if (r.depth > 1) {
              if (!r.transaction) throw new nt2();
              let n = r.savepoints.at(-1);
              if (!n) throw new Ie2(`Missing savepoint for nested rollback. Depth: ${r.depth}, transactionId: ${r.id}`);
              try {
                await this.#s(r.transaction)(n), await this.#a(r.transaction, n);
              } finally {
                r.savepoints.pop(), r.depth -= 1;
              }
              return;
            }
            await this.#d(r, "rolled_back");
          });
        });
      }
      async getTransaction(t, r) {
        let n = this.#n(t.id, r);
        if (n.status === "closing" && (await n.closing, n = this.#n(t.id, r)), !n.transaction) throw new nt2();
        return n.transaction;
      }
      #n(t, r) {
        let n = this.transactions.get(t);
        if (!n) {
          let i = this.closedTransactions.find((o) => o.id === t);
          if (i) switch (Ot("Transaction already closed.", { transactionId: t, status: i.status }), i.status) {
            case "closing":
            case "waiting":
            case "running":
              throw new Ie2("Active transaction found in closed transactions list.");
            case "committed":
              throw new pn(r);
            case "rolled_back":
              throw new dn(r);
            case "timed_out":
              throw new fn(r, { timeout: i.timeout, timeTaken: Date.now() - i.startedAt });
          }
          else throw Ot("Transaction not found.", t), new nt2();
        }
        if (["committed", "rolled_back", "timed_out"].includes(n.status)) throw new Ie2("Closed transaction found in active transactions map.");
        return n;
      }
      async cancelAllTransactions() {
        await Promise.allSettled([...this.transactions.values()].map((t) => this.#c(t, async () => {
          let r = this.transactions.get(t.id);
          r && await this.#d(r, "rolled_back");
        })));
      }
      #i(t) {
        return `prisma_sp_${t.savepointCounter++}`;
      }
      #o(t) {
        if (t.createSavepoint) return t.createSavepoint.bind(t);
        throw new ae(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): createSavepoint is not implemented.`);
      }
      #s(t) {
        if (t.rollbackToSavepoint) return t.rollbackToSavepoint.bind(t);
        throw new ae(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): rollbackToSavepoint is not implemented.`);
      }
      async #a(t, r) {
        t.releaseSavepoint && await t.releaseSavepoint(r);
      }
      #u(t) {
        Ot("Transaction already committed or rolled back when timeout happened.", t);
      }
      #l(t, r) {
        let n = Date.now(), i = ku2(async () => {
          Ot("Transaction timed out.", { transactionId: t, timeoutStartedAt: n, timeout: r });
          let o = this.transactions.get(t);
          if (!o) {
            this.#u(t);
            return;
          }
          await this.#c(o, async () => {
            let s = this.transactions.get(t);
            s && ["running", "waiting"].includes(s.status) ? await this.#d(s, "timed_out") : this.#u(t);
          });
        }, r);
        return i?.unref?.(), i;
      }
      async #p(t, r, n) {
        let i = this.#n(t, r);
        return await this.#c(i, async () => {
          let o = this.#n(t, r);
          return await n(o);
        });
      }
      async #c(t, r) {
        let n = t.operationQueue, i;
        t.operationQueue = new Promise((o) => {
          i = o;
        }), await n;
        try {
          return await r();
        } finally {
          i();
        }
      }
      async #d(t, r) {
        let n = /* @__PURE__ */ __name(async () => {
          Ot("Closing transaction.", { transactionId: t.id, status: r });
          try {
            if (t.transaction && r === "committed") if (t.transaction.options.usePhantomQuery) await this.#f(wm(), t.transaction, () => t.transaction.commit());
            else {
              let i = ym();
              await this.#f(i, t.transaction, () => t.transaction.executeRaw(i)).then(() => t.transaction.commit(), (o) => {
                let s = /* @__PURE__ */ __name(() => Promise.reject(o), "s");
                return t.transaction.rollback().then(s, s);
              });
            }
            else if (t.transaction) if (t.transaction.options.usePhantomQuery) await this.#f(bm(), t.transaction, () => t.transaction.rollback());
            else {
              let i = hm();
              try {
                await this.#f(i, t.transaction, () => t.transaction.executeRaw(i));
              } finally {
                await t.transaction.rollback();
              }
            }
          } finally {
            t.status = r, clearTimeout(t.timer), t.timer = void 0, this.transactions.delete(t.id), this.closedTransactions.push(t), this.closedTransactions.length > gm && this.closedTransactions.shift();
          }
        }, "n");
        t.status === "closing" ? (await t.closing, this.#n(t.id, r === "committed" ? "commit" : "rollback")) : await Object.assign(t, { status: "closing", reason: r, closing: n() }).closing;
      }
      #m(t) {
        if (!t.timeout) throw new ae("timeout is required");
        if (!t.maxWait) throw new ae("maxWait is required");
        if (t.isolationLevel === "SNAPSHOT") throw new gn(t.isolationLevel);
        return { ...t, timeout: t.timeout, maxWait: t.maxWait };
      }
      #f(t, r, n) {
        return Yr({ query: t, execute: n, provider: this.#t ?? r.provider, tracingHelper: this.tracingHelper, onQuery: this.#e });
      }
    };
    function ku2(e, t) {
      return t !== void 0 ? setTimeout(e, t) : void 0;
    }
    __name(ku2, "ku");
    var re = require_dist();
    var yn = "7.8.0";
    u();
    l();
    c();
    p2();
    d2();
    var Ou = { bigint: "bigint", date: "datetime", decimal: "decimal", bytes: "bytes" };
    function Du(e) {
      let t;
      try {
        t = JSON.parse(e);
      } catch (i) {
        throw new Error(`Received invalid serialized parameters: ${i.message}`);
      }
      if (!Array.isArray(t)) throw new Error("Received invalid serialized parameters: expected an array");
      let r = t.map((i) => Mu(i)), n = t.map((i) => Em(i));
      return { args: r, argTypes: n };
    }
    __name(Du, "Du");
    function Mu(e) {
      if (Array.isArray(e)) return e.map((t) => Mu(t));
      if (typeof e == "object" && e !== null && "prisma__value" in e) {
        if (!("prisma__type" in e)) throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");
        return `${e.prisma__value}`;
      }
      return typeof e == "object" && e !== null ? JSON.stringify(e) : e;
    }
    __name(Mu, "Mu");
    function Em(e) {
      return Array.isArray(e) ? { scalarType: e.length > 0 ? Nu(e[0]) : "unknown", arity: "list" } : { scalarType: Nu(e), arity: "scalar" };
    }
    __name(Em, "Em");
    function Nu(e) {
      return typeof e == "object" && e !== null && "prisma__type" in e && typeof e.prisma__type == "string" && e.prisma__type in Ou ? Ou[e.prisma__type] : typeof e == "number" ? "decimal" : typeof e == "string" ? "string" : "unknown";
    }
    __name(Nu, "Nu");
    u();
    l();
    c();
    p2();
    d2();
    function Lu2(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(Lu2, "Lu");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    function _u(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    __name(_u, "_u");
    u();
    l();
    c();
    p2();
    d2();
    function Fu2(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    __name(Fu2, "Fu");
    u();
    l();
    c();
    p2();
    d2();
    var $u2 = Je2(Vo());
    function Vu({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, $u2.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    __name(Vu, "Vu");
    function Uu({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let a2 = Ro(6e3 - (s?.length ?? 0)), m2 = Fu2(pt(a2)), f = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", T2 = pt(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${y.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${f}

## Logs
\`\`\`
${m2}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? _u(s) : ""}
\`\`\`
`), S2 = Vu({ title: r, body: T2 });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Tr(S2)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    __name(Uu, "Uu");
    u();
    l();
    c();
    p2();
    d2();
    var hn = class e {
      static {
        __name(this, "e");
      }
      #e;
      #t;
      #r;
      #n;
      #i;
      constructor(t, r, n) {
        this.#e = t, this.#t = r, this.#r = n, this.#n = r.getConnectionInfo?.(), this.#i = lr2.forSql({ onQuery: this.#e.onQuery, tracingHelper: this.#e.tracingHelper, provider: this.#e.provider, connectionInfo: this.#n });
      }
      static async connect(t) {
        let r, n;
        try {
          r = await t.driverAdapterFactory.connect(), n = new dr3({ driverAdapter: r, transactionOptions: t.transactionOptions, tracingHelper: t.tracingHelper, onQuery: t.onQuery, provider: t.provider });
        } catch (i) {
          throw await r?.dispose(), i;
        }
        return new e(t, r, n);
      }
      getConnectionInfo() {
        let t = this.#n ?? { supportsRelationJoins: false };
        return Promise.resolve({ provider: this.#t.provider, connectionInfo: t });
      }
      async execute({ plan: t, placeholderValues: r, transaction: n, batchIndex: i, queryInfo: o }) {
        let s = n ? await this.#r.getTransaction(n, i !== void 0 ? "batch query" : "query") : this.#t;
        return await this.#i.run(t, { queryable: s, transactionManager: n ? { enabled: false } : { enabled: true, manager: this.#r }, scope: r, sqlCommenter: this.#e.sqlCommenters && { plugins: this.#e.sqlCommenters, queryInfo: o } });
      }
      async startTransaction(t) {
        return { ...await this.#r.startTransaction(t), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#r.commitTransaction(t.id);
      }
      async rollbackTransaction(t) {
        await this.#r.rollbackTransaction(t.id);
      }
      async disconnect() {
        try {
          await this.#r.cancelAllTransactions();
        } finally {
          await this.#t.dispose();
        }
      }
      apiKey() {
        return null;
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var wn = class {
      static {
        __name(this, "wn");
      }
      #e;
      #t;
      #r;
      constructor(t = 1e3) {
        this.#e = /* @__PURE__ */ new Map(), this.#t = /* @__PURE__ */ new Map(), this.#r = t;
      }
      getSingle(t) {
        let r = this.#e.get(t);
        return r && (this.#e.delete(t), this.#e.set(t, r)), r;
      }
      setSingle(t, r) {
        if (this.#e.has(t)) {
          this.#e.delete(t), this.#e.set(t, r);
          return;
        }
        if (this.#e.size >= this.#r) {
          let n = this.#e.keys().next().value;
          n !== void 0 && this.#e.delete(n);
        }
        this.#e.set(t, r);
      }
      getBatch(t) {
        let r = this.#t.get(t);
        return r && (this.#t.delete(t), this.#t.set(t, r)), r;
      }
      setBatch(t, r) {
        if (this.#t.has(t)) {
          this.#t.delete(t), this.#t.set(t, r);
          return;
        }
        if (this.#t.size >= this.#r) {
          let n = this.#t.keys().next().value;
          n !== void 0 && this.#t.delete(n);
        }
        this.#t.set(t, r);
      }
      clear() {
        this.#e.clear(), this.#t.clear();
      }
      get size() {
        return this.#e.size + this.#t.size;
      }
      get singleCacheSize() {
        return this.#e.size;
      }
      get batchCacheSize() {
        return this.#t.size;
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var Hu2 = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    var bn = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    function qu(e, t, r) {
      let n = r || {}, i = n.encode || encodeURIComponent;
      if (typeof i != "function") throw new TypeError("option encode is invalid");
      if (!bn.test(e)) throw new TypeError("argument name is invalid");
      let o = i(t);
      if (o && !bn.test(o)) throw new TypeError("argument val is invalid");
      let s = e + "=" + o;
      if (n.maxAge !== void 0 && n.maxAge !== null) {
        let a2 = n.maxAge - 0;
        if (Number.isNaN(a2) || !Number.isFinite(a2)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a2);
      }
      if (n.domain) {
        if (!bn.test(n.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + n.domain;
      }
      if (n.path) {
        if (!bn.test(n.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + n.path;
      }
      if (n.expires) {
        if (!Tm(n.expires) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
        s += "; Expires=" + n.expires.toUTCString();
      }
      if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority) {
        case "low": {
          s += "; Priority=Low";
          break;
        }
        case "medium": {
          s += "; Priority=Medium";
          break;
        }
        case "high": {
          s += "; Priority=High";
          break;
        }
        default:
          throw new TypeError("option priority is invalid");
      }
      if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
        case true: {
          s += "; SameSite=Strict";
          break;
        }
        case "lax": {
          s += "; SameSite=Lax";
          break;
        }
        case "strict": {
          s += "; SameSite=Strict";
          break;
        }
        case "none": {
          s += "; SameSite=None";
          break;
        }
        default:
          throw new TypeError("option sameSite is invalid");
      }
      return n.partitioned && (s += "; Partitioned"), s;
    }
    __name(qu, "qu");
    function Tm(e) {
      return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
    }
    __name(Tm, "Tm");
    function Bu2(e, t) {
      let r = (e || "").split(";").filter((m2) => typeof m2 == "string" && !!m2.trim()), n = r.shift() || "", i = Pm(n), o = i.name, s = i.value;
      try {
        s = t?.decode === false ? s : (t?.decode || decodeURIComponent)(s);
      } catch {
      }
      let a2 = { name: o, value: s };
      for (let m2 of r) {
        let f = m2.split("="), T2 = (f.shift() || "").trimStart().toLowerCase(), S2 = f.join("=");
        switch (T2) {
          case "expires": {
            a2.expires = new Date(S2);
            break;
          }
          case "max-age": {
            a2.maxAge = Number.parseInt(S2, 10);
            break;
          }
          case "secure": {
            a2.secure = true;
            break;
          }
          case "httponly": {
            a2.httpOnly = true;
            break;
          }
          case "samesite": {
            a2.sameSite = S2;
            break;
          }
          default:
            a2[T2] = S2;
        }
      }
      return a2;
    }
    __name(Bu2, "Bu");
    function Pm(e) {
      let t = "", r = "", n = e.split("=");
      return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, { name: t, value: r };
    }
    __name(Pm, "Pm");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var xn = class extends Error {
      static {
        __name(this, "xn");
      }
      clientVersion;
      cause;
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var En2 = class extends xn {
      static {
        __name(this, "En");
      }
      isRetryable;
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    function ju2(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(ju2, "ju");
    var it2 = class extends En2 {
      static {
        __name(this, "it");
      }
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(t, r) {
        super(t, ju2(r, false));
      }
    };
    Bt(it2, "InvalidDatasourceError");
    function Qu(e) {
      let t = { clientVersion: e.clientVersion }, r;
      try {
        r = new URL(e.accelerateUrl);
      } catch (m2) {
        let f = m2.message;
        throw new it2(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${f}`, t);
      }
      let { protocol: n, searchParams: i } = r;
      if (n !== "prisma:" && n !== Ar) throw new it2("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`", t);
      let o = i.get("api_key");
      if (o === null || o.length < 1) throw new it2("Error validating `accelerateUrl`: the URL must contain a valid API key", t);
      let s = $n(r) ? "http:" : "https:";
      y.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && r.searchParams.has("use_http") && (s = "http:");
      let a2 = new URL(r.href.replace(n, s));
      return { apiKey: o, url: a2 };
    }
    __name(Qu, "Qu");
    u();
    l();
    c();
    p2();
    d2();
    var Ju = Je2(Do());
    var Tn = class {
      static {
        __name(this, "Tn");
      }
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, transactionId: r } = {}) {
        let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": Ju.enginesVersion };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-Transaction-Id"] = r);
        let i = this.#e();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
      }
      #e() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    function Sm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(Sm, "Sm");
    function Ui(e) {
      return new Date(Sm(e));
    }
    __name(Ui, "Ui");
    var Gu = ne("prisma:client:clientEngine:remoteExecutor");
    var Pn = class {
      static {
        __name(this, "Pn");
      }
      #e;
      #t;
      #r;
      #n;
      #i;
      #o;
      constructor(t) {
        this.#e = t.clientVersion, this.#n = t.logEmitter, this.#i = t.tracingHelper, this.#o = t.sqlCommenters;
        let { url: r, apiKey: n } = Qu({ clientVersion: t.clientVersion, accelerateUrl: t.accelerateUrl });
        this.#r = new qi(r), this.#t = new Tn({ apiKey: n, engineHash: t.clientVersion, logLevel: t.logLevel, logQueries: t.logQueries, tracingHelper: t.tracingHelper });
      }
      async getConnectionInfo() {
        return await this.#s({ path: "/connection-info", method: "GET" });
      }
      async execute({ plan: t, placeholderValues: r, batchIndex: n, model: i, operation: o, transaction: s, customFetch: a2, queryInfo: m2 }) {
        let f = m2 && this.#o?.length ? Zr(this.#o, { query: m2 }) : void 0;
        return (await this.#s({ path: s ? `/transaction/${s.id}/query` : "/query", method: "POST", body: { model: i, operation: o, plan: t, params: r, comments: f && Object.keys(f).length > 0 ? f : void 0 }, batchRequestIdx: n, fetch: a2 })).data;
      }
      async startTransaction(t) {
        return { ...await this.#s({ path: "/transaction/start", method: "POST", body: t }), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#s({ path: `/transaction/${t.id}/commit`, method: "POST" });
      }
      async rollbackTransaction(t) {
        await this.#s({ path: `/transaction/${t.id}/rollback`, method: "POST" });
      }
      disconnect() {
        return Promise.resolve();
      }
      apiKey() {
        return this.#t.apiKey;
      }
      async #s({ path: t, method: r, body: n, fetch: i = globalThis.fetch, batchRequestIdx: o }) {
        let s = await this.#r.request({ method: r, path: t, headers: this.#t.build(), body: n, fetch: i });
        s.ok || await this.#a(s, o);
        let a2 = await s.json();
        return typeof a2.extensions == "object" && a2.extensions !== null && this.#u(a2.extensions), a2;
      }
      async #a(t, r) {
        let n = t.headers.get("Prisma-Error-Code"), i = await t.text(), o, s = i;
        try {
          o = JSON.parse(i);
        } catch {
          o = {};
        }
        typeof o.code == "string" && (n = o.code), typeof o.error == "string" ? s = o.error : typeof o.message == "string" ? s = o.message : typeof o.InvalidRequestError == "object" && o.InvalidRequestError !== null && typeof o.InvalidRequestError.reason == "string" && (s = o.InvalidRequestError.reason), s = s || `HTTP ${t.status}: ${t.statusText}`;
        let a2 = typeof o.meta == "object" && o.meta !== null ? o.meta : o;
        throw new Hu2.PrismaClientKnownRequestError(s, { clientVersion: this.#e, code: n ?? "P6000", batchRequestIdx: r, meta: a2 });
      }
      #u(t) {
        if (t.logs) for (let r of t.logs) this.#l(r);
        t.spans && this.#i.dispatchEngineSpans(t.spans);
      }
      #l(t) {
        switch (t.level) {
          case "debug":
          case "trace":
            Gu(t);
            break;
          case "error":
          case "warn":
          case "info": {
            this.#n.emit(t.level, { timestamp: Ui(t.timestamp), message: t.attributes.message ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          case "query": {
            this.#n.emit("query", { query: t.attributes.query ?? "", timestamp: Ui(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          default:
            throw new Error(`Unexpected log level: ${t.level}`);
        }
      }
    };
    var qi = class {
      static {
        __name(this, "qi");
      }
      #e;
      #t;
      #r;
      constructor(t) {
        this.#e = t, this.#t = /* @__PURE__ */ new Map();
      }
      async request({ method: t, path: r, headers: n, body: i, fetch: o }) {
        let s = new URL(r, this.#e), a2 = this.#n(s);
        a2 && (n.Cookie = a2), this.#r && (n["Accelerate-Query-Engine-Jwt"] = this.#r);
        let m2 = await o(s.href, { method: t, body: i !== void 0 ? JSON.stringify(i) : void 0, headers: n });
        return Gu(t, s, m2.status, m2.statusText), this.#r = m2.headers.get("Accelerate-Query-Engine-Jwt") ?? void 0, this.#i(s, m2), m2;
      }
      #n(t) {
        let r = [], n = /* @__PURE__ */ new Date();
        for (let [i, o] of this.#t) {
          if (o.expires && o.expires < n) {
            this.#t.delete(i);
            continue;
          }
          let s = o.domain ?? t.hostname, a2 = o.path ?? "/";
          t.hostname.endsWith(s) && t.pathname.startsWith(a2) && r.push(qu(o.name, o.value));
        }
        return r.length > 0 ? r.join("; ") : void 0;
      }
      #i(t, r) {
        let n = r.headers.getSetCookie?.() || [];
        if (n.length === 0) {
          let i = r.headers.get("Set-Cookie");
          i && n.push(i);
        }
        for (let i of n) {
          let o = Bu2(i), s = o.domain ?? t.hostname, a2 = o.path ?? "/", m2 = `${s}:${a2}:${o.name}`;
          this.#t.set(m2, { name: o.name, value: o.value, domain: s, path: a2, expires: o.expires });
        }
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var ji = require_dist();
    var Bi = {};
    var zu = { async loadQueryCompiler(e) {
      let { clientVersion: t, compilerWasm: r } = e;
      if (r === void 0) throw new ji.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`", t);
      let n;
      return e.activeProvider === void 0 || Bi[e.activeProvider] === void 0 ? (n = (async () => {
        let i = await r.getRuntime(), o = await r.getQueryCompilerWasmModule();
        if (o == null) throw new ji.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let s = { [r.importName]: i }, a2 = new WebAssembly.Instance(o, s), m2 = a2.exports.__wbindgen_start;
        return i.__wbg_set_wasm(a2.exports), m2(), i.QueryCompiler;
      })(), e.activeProvider !== void 0 && (Bi[e.activeProvider] = n)) : n = Bi[e.activeProvider], await n;
    } };
    var vm = "P2038";
    var Le = ne("prisma:client:clientEngine");
    var Yu = globalThis;
    Yu.PRISMA_WASM_PANIC_REGISTRY = { set_message(e) {
      throw new re.PrismaClientRustPanicError(e, yn);
    } };
    var mr2 = class {
      static {
        __name(this, "mr");
      }
      name = "ClientEngine";
      #e;
      #t = { type: "disconnected" };
      #r;
      #n;
      #i;
      #o;
      config;
      datamodel;
      logEmitter;
      logQueries;
      logLevel;
      tracingHelper;
      #s;
      constructor(t, r) {
        if (t.accelerateUrl !== void 0) this.#n = { remote: true, accelerateUrl: t.accelerateUrl };
        else if (t.adapter) this.#n = { remote: false, driverAdapterFactory: t.adapter }, Le("Using driver adapter: %O", t.adapter);
        else throw new re.PrismaClientInitializationError("Missing configured driver adapter. Engine type `client` requires an active driver adapter. Please check your PrismaClient initialization code.", t.clientVersion, vm);
        this.#r = r ?? zu, this.config = t, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, this.#i = t.queryPlanCacheMaxSize === 0 ? void 0 : new wn(t.queryPlanCacheMaxSize), this.#o = pr.deserialize(t.parameterizationSchema, (n) => {
          if (!Object.hasOwn(t.runtimeDataModel.enums, n)) return;
          let i = {};
          for (let o of t.runtimeDataModel.enums[n].values) i[o.name] = o.dbName ?? o.name;
          return i;
        }), t.enableDebugLogs && (this.logLevel = "debug"), this.logQueries && (this.#s = (n) => {
          this.logEmitter.emit("query", { ...n, params: he(n.params), target: "ClientEngine" });
        });
      }
      async #a() {
        switch (this.#t.type) {
          case "disconnected": {
            let t = this.tracingHelper.runInChildSpan("connect", async () => {
              let r, n;
              try {
                r = await this.#u(), n = await this.#l(r);
              } catch (o) {
                throw this.#t = { type: "disconnected" }, n?.free(), await r?.disconnect(), o;
              }
              let i = { executor: r, queryCompiler: n };
              return this.#t = { type: "connected", engine: i }, i;
            });
            return this.#t = { type: "connecting", promise: t }, await t;
          }
          case "connecting":
            return await this.#t.promise;
          case "connected":
            return this.#t.engine;
          case "disconnecting":
            return await this.#t.promise, await this.#a();
        }
      }
      async #u() {
        return this.#n.remote ? new Pn({ clientVersion: this.config.clientVersion, accelerateUrl: this.#n.accelerateUrl, logEmitter: this.logEmitter, logLevel: this.logLevel, logQueries: this.logQueries, tracingHelper: this.tracingHelper, sqlCommenters: this.config.sqlCommenters }) : await hn.connect({ driverAdapterFactory: this.#n.driverAdapterFactory, tracingHelper: this.tracingHelper, transactionOptions: { ...this.config.transactionOptions, isolationLevel: this.#y(this.config.transactionOptions.isolationLevel) }, onQuery: this.#s, provider: this.config.activeProvider, sqlCommenters: this.config.sqlCommenters });
      }
      async #l(t) {
        let r = this.#e;
        r === void 0 && (r = await this.#r.loadQueryCompiler(this.config), this.#e = r);
        let { provider: n, connectionInfo: i } = await t.getConnectionInfo();
        try {
          return this.#m(() => new r({ datamodel: this.datamodel, provider: n, connectionInfo: i }), void 0, false);
        } catch (o) {
          throw this.#p(o);
        }
      }
      #p(t) {
        if (t instanceof re.PrismaClientRustPanicError) return t;
        try {
          let r = JSON.parse(t.message);
          return new re.PrismaClientInitializationError(r.message, this.config.clientVersion, r.error_code);
        } catch {
          return t;
        }
      }
      #c(t, r) {
        if (t instanceof re.PrismaClientInitializationError) return t;
        if (t.code === "GenericFailure" && t.message?.startsWith("PANIC:")) return new re.PrismaClientRustPanicError(Wu(this, t.message, r), this.config.clientVersion);
        if (t instanceof X) return new re.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion });
        try {
          let n = JSON.parse(t);
          return new re.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`, { clientVersion: this.config.clientVersion });
        } catch {
          return t;
        }
      }
      #d(t) {
        return t instanceof re.PrismaClientRustPanicError ? t : typeof t.message == "string" && typeof t.code == "string" ? new re.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion }) : typeof t.message == "string" ? new re.PrismaClientUnknownRequestError(t.message, { clientVersion: this.config.clientVersion }) : t;
      }
      #m(t, r, n = true) {
        let i = Yu.PRISMA_WASM_PANIC_REGISTRY.set_message, o;
        globalThis.PRISMA_WASM_PANIC_REGISTRY.set_message = (s) => {
          o = s;
        };
        try {
          return t();
        } finally {
          if (globalThis.PRISMA_WASM_PANIC_REGISTRY.set_message = i, o) throw this.#e = void 0, n && this.stop().catch((s) => Le("failed to disconnect:", s)), new re.PrismaClientRustPanicError(Wu(this, o, r), this.config.clientVersion);
        }
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        await this.#a();
      }
      async stop() {
        switch (this.#t.type) {
          case "disconnected":
            return;
          case "connecting":
            return await this.#t.promise, await this.stop();
          case "connected": {
            let t = this.#t.engine, r = this.tracingHelper.runInChildSpan("disconnect", async () => {
              try {
                await t.executor.disconnect(), t.queryCompiler.free();
              } finally {
                this.#t = { type: "disconnected" };
              }
            });
            return this.#t = { type: "disconnecting", promise: r }, await r;
          }
          case "disconnecting":
            return await this.#t.promise;
        }
      }
      version() {
        return "unknown";
      }
      async transaction(t, r, n) {
        let i, { executor: o } = await this.#a();
        try {
          if (t === "start") {
            let s = n;
            i = await o.startTransaction({ ...s, isolationLevel: this.#y(s.isolationLevel) });
          } else if (t === "commit") {
            let s = n;
            await o.commitTransaction(s);
          } else if (t === "rollback") {
            let s = n;
            await o.rollbackTransaction(s);
          } else Ne(t, "Invalid transaction action.");
        } catch (s) {
          throw this.#c(s);
        }
        return i ? { id: i.id, payload: void 0 } : void 0;
      }
      async request(t, { interactiveTransaction: r, customDataProxyFetch: n }) {
        Le("sending request");
        let { executor: i, queryCompiler: o } = await this.#a().catch((m2) => {
          throw this.#c(m2, JSON.stringify(t));
        }), s, a2 = {};
        if (Ku(t)) s = Zu(t);
        else {
          let { parameterizedQuery: m2, placeholderValues: f } = Fi2(t, this.#o), T2 = JSON.stringify(m2);
          a2 = f;
          let S2 = t.action !== "createMany" && t.action !== "createManyAndReturn", v2 = S2 ? this.#i?.getSingle(T2) : void 0;
          v2 ? (Le("query plan cache hit"), s = v2) : (Le("query plan cache miss"), s = this.#f(m2, T2, o), S2 && this.#i?.setSingle(T2, s));
        }
        try {
          Le("query plan created", s);
          let m2 = await i.execute({ plan: s, model: t.modelName, operation: t.action, placeholderValues: a2, transaction: r, batchIndex: void 0, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", modelName: t.modelName, action: t.action, query: t.query } });
          return Le("query plan executed"), { data: { [t.action]: m2 } };
        } catch (m2) {
          throw this.#c(m2, JSON.stringify(t));
        }
      }
      async requestBatch(t, { transaction: r, customDataProxyFetch: n }) {
        if (t.length === 0) return [];
        let i = t[0].action, o = t[0].modelName, s = Lu2(t, r), a2 = JSON.stringify(s), { executor: m2, queryCompiler: f } = await this.#a().catch((A) => {
          throw this.#c(A, a2);
        }), T2 = o === void 0, S2, v2 = {};
        if (T2) S2 = this.#g(t, a2, f);
        else {
          let { parameterizedBatch: A, placeholderValues: N } = $i(s, this.#o), R = JSON.stringify(A);
          v2 = N;
          let I = this.#i?.getBatch(R);
          if (I) Le("batch query plan cache hit"), S2 = I;
          else {
            Le("batch query plan cache miss");
            try {
              S2 = this.#g(A.batch, R, f), this.#i?.setBatch(R, S2);
            } catch (J) {
              throw this.#d(J);
            }
          }
        }
        try {
          let A;
          switch (r?.kind === "itx" && (A = r.options), S2.type) {
            case "multi": {
              if (r?.kind !== "itx") {
                let I = r?.options, J = { maxWait: I?.maxWait ?? this.config.transactionOptions.maxWait, timeout: I?.timeout ?? this.config.transactionOptions.timeout, isolationLevel: I?.isolationLevel ?? this.config.transactionOptions.isolationLevel };
                A = await this.transaction("start", {}, J);
              }
              let N = [], R = false;
              for (let [I, J] of S2.plans.entries()) try {
                let j = await m2.execute({ plan: J, placeholderValues: v2, model: t[I].modelName, operation: t[I].action, batchIndex: I, transaction: A, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", ...t[I] } });
                N.push({ data: { [t[I].action]: j } });
              } catch (j) {
                N.push(j), R = true;
                break;
              }
              return A !== void 0 && r?.kind !== "itx" && (R ? await this.transaction("rollback", {}, A) : await this.transaction("commit", {}, A)), N;
            }
            case "compacted": {
              if (!t.every((I) => I.action === i && I.modelName === o)) {
                let I = t.map((j) => j.action).join(", "), J = t.map((j) => j.modelName).join(", ");
                throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${I}] and model names: [${J}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`);
              }
              if (o === void 0) throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");
              let N = await m2.execute({ plan: S2.plan, placeholderValues: v2, model: o, operation: i, batchIndex: void 0, transaction: A, customFetch: n?.(globalThis.fetch), queryInfo: { type: "compacted", action: i, modelName: o, queries: t } });
              return ta(N, S2, v2).map((I) => ({ data: { [i]: I } }));
            }
          }
        } catch (A) {
          throw this.#c(A, a2);
        }
      }
      async apiKey() {
        let { executor: t } = await this.#a();
        return t.apiKey();
      }
      #f(t, r, n) {
        try {
          return this.#m(() => this.#h({ queries: [t], execute: /* @__PURE__ */ __name(() => n.compile(r), "execute") }));
        } catch (i) {
          throw this.#d(i);
        }
      }
      #g(t, r, n) {
        if (t.every(Ku)) return { type: "multi", plans: t.map((i) => Zu(i)) };
        try {
          return this.#m(() => this.#h({ queries: t, execute: /* @__PURE__ */ __name(() => n.compileBatch(r), "execute") }));
        } catch (i) {
          throw this.#d(i);
        }
      }
      #y(t) {
        switch (t) {
          case void 0:
            return;
          case "ReadUncommitted":
            return "READ UNCOMMITTED";
          case "ReadCommitted":
            return "READ COMMITTED";
          case "RepeatableRead":
            return "REPEATABLE READ";
          case "Serializable":
            return "SERIALIZABLE";
          case "Snapshot":
            return "SNAPSHOT";
          default:
            throw new re.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``, { code: "P2023", clientVersion: this.config.clientVersion, meta: { providedIsolationLevel: t } });
        }
      }
      #h({ queries: t, execute: r }) {
        return this.tracingHelper.runInChildSpan({ name: "compile", attributes: { models: t.map((n) => n.modelName).filter((n) => n !== void 0), actions: t.map((n) => n.action) } }, r);
      }
    };
    function Wu(e, t, r) {
      return Uu({ binaryTarget: void 0, title: t, version: e.config.clientVersion, engineVersion: "unknown", database: e.config.activeProvider, query: r });
    }
    __name(Wu, "Wu");
    function Ku(e) {
      return e.action === "queryRaw" || e.action === "executeRaw";
    }
    __name(Ku, "Ku");
    function Zu(e) {
      let t = e.query.arguments.query, { args: r, argTypes: n } = Du(e.query.arguments.parameters);
      return { type: e.action === "queryRaw" ? "query" : "execute", args: { type: "rawSql", sql: t, args: r, argTypes: n } };
    }
    __name(Zu, "Zu");
    function Xu(e) {
      return new mr2(e);
    }
    __name(Xu, "Xu");
    u();
    l();
    c();
    p2();
    d2();
    var el = /* @__PURE__ */ __name((e) => ({ command: e }), "el");
    u();
    l();
    c();
    p2();
    d2();
    var ul = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    var tl = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "tl");
    u();
    l();
    c();
    p2();
    d2();
    var il = require_dist();
    function Nt(e) {
      try {
        return rl(e, "fast");
      } catch {
        return rl(e, "slow");
      }
    }
    __name(Nt, "Nt");
    function rl(e, t) {
      return JSON.stringify(e.map((r) => ol2(r, t)));
    }
    __name(rl, "rl");
    function ol2(e, t) {
      if (Array.isArray(e)) return e.map((r) => ol2(r, t));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (dt(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (il.Decimal.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (g.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (Am(e)) return { prisma__type: "bytes", prisma__value: g.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: g.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? sl(e) : e;
    }
    __name(ol2, "ol");
    function Am(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(Am, "Am");
    function sl(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(nl);
      let t = {};
      for (let r of Object.keys(e)) t[r] = nl(e[r]);
      return t;
    }
    __name(sl, "sl");
    function nl(e) {
      return typeof e == "bigint" ? e.toString() : sl(e);
    }
    __name(nl, "nl");
    var Cm = /^(\s*alter\s)/i;
    var al = ne("prisma:client");
    function Qi(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Cm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(Qi, "Qi");
    var Ji = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (Qr(r)) n = r.sql, i = { values: Nt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: Nt(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: Nt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: Nt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = tl(r), i = { values: Nt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return i?.values ? al(`prisma.${e}(${n}, ${i.values})`) : al(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "Ji");
    var ll = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new ul.Sql(t, r);
    } };
    var cl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    u();
    l();
    c();
    p2();
    d2();
    function Hi2(e) {
      return function(r, n) {
        let i, o = /* @__PURE__ */ __name((s = e) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= pl(r(s)) : pl(r(s));
          } catch (a2) {
            return Promise.reject(a2);
          }
        }, "o");
        return { get spec() {
          return n;
        }, then(s, a2) {
          return o().then(s, a2);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a2 = o(s);
          return a2.requestTransaction ? a2.requestTransaction(s) : a2;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(Hi2, "Hi");
    function pl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(pl, "pl");
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    u();
    l();
    c();
    p2();
    d2();
    var dl = { name: "@prisma/instrumentation-contract", version: "7.8.0", description: "Shared types and utilities for Prisma instrumentation", main: "dist/index.js", module: "dist/index.mjs", types: "dist/index.d.ts", exports: { ".": { require: { types: "./dist/index.d.ts", default: "./dist/index.js" }, import: { types: "./dist/index.d.mts", default: "./dist/index.mjs" } } }, license: "Apache-2.0", homepage: "https://www.prisma.io", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/instrumentation-contract" }, bugs: "https://github.com/prisma/prisma/issues", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", prepublishOnly: "pnpm run build", test: "vitest run" }, files: ["dist"], sideEffects: false, devDependencies: { "@opentelemetry/api": "1.9.0" }, peerDependencies: { "@opentelemetry/api": "^1.8" } };
    var Im = dl.version.split(".")[0];
    var km = "PRISMA_INSTRUMENTATION";
    var Om = `V${Im}_PRISMA_INSTRUMENTATION`;
    var ml = globalThis;
    function fl() {
      let e = ml[Om];
      return e?.helper ? e.helper : ml[km]?.helper;
    }
    __name(fl, "fl");
    var Nm = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Gi = class {
      static {
        __name(this, "Gi");
      }
      isEnabled() {
        return this.getTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getTracingHelper().getTraceParent(t);
      }
      dispatchEngineSpans(t) {
        return this.getTracingHelper().dispatchEngineSpans(t);
      }
      getActiveContext() {
        return this.getTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getTracingHelper().runInChildSpan(t, r);
      }
      getTracingHelper() {
        return fl() ?? Nm;
      }
    };
    function gl() {
      return new Gi();
    }
    __name(gl, "gl");
    u();
    l();
    c();
    p2();
    d2();
    function yl(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(yl, "yl");
    u();
    l();
    c();
    p2();
    d2();
    function hl(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(hl, "hl");
    u();
    l();
    c();
    p2();
    d2();
    var bl = require_dist();
    u();
    l();
    c();
    p2();
    d2();
    function Wi2(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(zi(e.query.arguments)), t.push(zi(e.query.selection)), t.join("");
    }
    __name(Wi2, "Wi");
    function zi(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${zi(n)})` : r;
      }).join(" ")})`;
    }
    __name(zi, "zi");
    u();
    l();
    c();
    p2();
    d2();
    var Dm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function Ki2(e) {
      return Dm[e];
    }
    __name(Ki2, "Ki");
    u();
    l();
    c();
    p2();
    d2();
    var Sn = class {
      static {
        __name(this, "Sn");
      }
      constructor(t) {
        this.options = t;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    u();
    l();
    c();
    p2();
    d2();
    var wl = require_dist();
    function ot2(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = g.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new wl.Decimal(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => ot2("bigint", r));
        case "bytes-array":
          return t.map((r) => ot2("bytes", r));
        case "decimal-array":
          return t.map((r) => ot2("decimal", r));
        case "datetime-array":
          return t.map((r) => ot2("datetime", r));
        case "date-array":
          return t.map((r) => ot2("date", r));
        case "time-array":
          return t.map((r) => ot2("time", r));
        default:
          return t;
      }
    }
    __name(ot2, "ot");
    function vn2(e) {
      let t = [], r = Mm(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = ot2(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(vn2, "vn");
    function Mm(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    __name(Mm, "Mm");
    var Lm = ne("prisma:client:request_handler");
    var An = class {
      static {
        __name(this, "An");
      }
      client;
      dataloader;
      logEmitter;
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Sn({ batchLoader: js2(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a2 = n.map((S2) => S2.protocolQuery), m2 = this.client._tracingHelper.getTraceParent(s), f = n.some((S2) => Ki2(S2.protocolQuery.action));
          return (await this.client._engine.requestBatch(a2, { traceparent: m2, transaction: _m(o), containsWrite: f, customDataProxyFetch: i })).map((S2, v2) => {
            if (S2 instanceof Error) return S2;
            try {
              return this.mapQueryEngineResult(n[v2], S2);
            } catch (A) {
              return A;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? xl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Ki2(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => {
          if (n.transaction?.kind === "itx") {
            let i = Wi2(n.protocolQuery);
            return `itx-${n.transaction.id}${i ? `-${i}` : ""}`;
          }
          return n.transaction?.id ? `transaction-${n.transaction.id}` : Wi2(n.protocolQuery);
        }, "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a2 } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a2, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, t, r);
        return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a2 }) {
        if (Lm(t), Fm(t, i)) throw t;
        if (t instanceof D.PrismaClientKnownRequestError && $m(t)) {
          let f = El(t.meta);
          $r({ args: o, errors: [f], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a2 });
        }
        let m2 = t.message;
        if (n && (m2 = kr({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: m2 })), m2 = this.sanitizeMessage(m2), t.code) {
          let f = s ? { modelName: s, ...t.meta } : t.meta;
          throw new D.PrismaClientKnownRequestError(m2, { code: t.code, clientVersion: this.client._clientVersion, meta: f, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new D.PrismaClientRustPanicError(m2, this.client._clientVersion);
          if (t instanceof D.PrismaClientUnknownRequestError) throw new D.PrismaClientUnknownRequestError(m2, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof D.PrismaClientInitializationError) throw new D.PrismaClientInitializationError(m2, this.client._clientVersion);
          if (t instanceof D.PrismaClientRustPanicError) throw new D.PrismaClientRustPanicError(m2, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? pt(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((f) => f !== "select" && f !== "include"), a2 = Yn(o, s), m2 = i === "queryRaw" ? vn2(a2) : we(a2);
        return n ? n(m2) : m2;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function _m(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel, maxWait: e.maxWait, timeout: e.timeout } };
        if (e.kind === "itx") return { kind: "itx", options: xl(e) };
        Ne(e, "Unknown transaction kind");
      }
    }
    __name(_m, "_m");
    function xl(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(xl, "xl");
    function Fm(e, t) {
      return (0, bl.hasBatchIndex)(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(Fm, "Fm");
    function $m(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name($m, "$m");
    function El(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(El) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(El, "El");
    u();
    l();
    c();
    p2();
    d2();
    var Zi2 = yn;
    u();
    l();
    c();
    p2();
    d2();
    var Al = Je2(Qn2());
    u();
    l();
    c();
    p2();
    d2();
    var F = class extends Error {
      static {
        __name(this, "F");
      }
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    Bt(F, "PrismaClientConstructorValidationError");
    var Tl = ["errorFormat", "adapter", "accelerateUrl", "log", "transactionOptions", "omit", "comments", "queryPlanCacheMaxSize", "__internal"];
    var Pl = ["pretty", "colorless", "minimal"];
    var Sl = ["info", "query", "warn", "error"];
    var Vm = { adapter: /* @__PURE__ */ __name(() => {
    }, "adapter"), accelerateUrl: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (typeof e != "string") throw new F(`Invalid value ${JSON.stringify(e)} for "accelerateUrl" provided to PrismaClient constructor.`);
        if (e.trim().length === 0) throw new F('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.');
      }
    }, "accelerateUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new F(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Pl.includes(e)) {
          let t = fr2(e, Pl);
          throw new F(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new F(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Sl.includes(r)) {
          let n = fr2(r, Sl);
          throw new F(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = fr2(i, o);
            throw new F(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new F(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new F(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new F(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, t) => {
      if (typeof e != "object") throw new F('"omit" option is expected to be an object.');
      if (e === null) throw new F('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Bm(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a2] of Object.entries(i)) {
          let m2 = o.fields.find((f) => f.name === s);
          if (!m2) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (m2.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a2 != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new F(jm(e, r));
    }, "omit"), queryPlanCacheMaxSize: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (typeof e != "number") throw new F(`Invalid value ${JSON.stringify(e)} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected a number.`);
        if (!Number.isInteger(e)) throw new F(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected an integer.`);
        if (e < 0) throw new F(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Cache size needs to be greater or equal to 0.`);
      }
    }, "queryPlanCacheMaxSize"), comments: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (!Array.isArray(e)) throw new F(`Invalid value ${JSON.stringify(e)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);
        for (let t = 0; t < e.length; t++) if (typeof e[t] != "function") throw new F(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`);
      }
    }, "comments"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new F(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = fr2(r, t);
        throw new F(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function Um(e) {
      let t = e.adapter !== void 0, r = e.accelerateUrl !== void 0;
      if (t && r) throw new F('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');
      if (!t && !r) throw new F('Using engine type "client" requires either "adapter" or "accelerateUrl" to be provided to PrismaClient constructor.');
    }
    __name(Um, "Um");
    function Cl(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Tl.includes(r)) {
          let i = fr2(r, Tl);
          throw new F(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Vm[r](n, t);
      }
      Um(e);
    }
    __name(Cl, "Cl");
    function fr2(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = qm(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(fr2, "fr");
    function qm(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, Al.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(qm, "qm");
    function Bm(e, t) {
      return vl2(t.models, e) ?? vl2(t.types, e);
    }
    __name(Bm, "Bm");
    function vl2(e, t) {
      let r = Object.keys(e).find((n) => Fe2(n) === t);
      if (r) return e[r];
    }
    __name(vl2, "vl");
    function jm(e, t) {
      let r = xt(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = Fr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(jm, "jm");
    u();
    l();
    c();
    p2();
    d2();
    var Rl = require_dist();
    function Il(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a2 = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), m2 = /* @__PURE__ */ __name((f) => {
          o || (o = true, r(f));
        }, "m");
        for (let f = 0; f < e.length; f++) e[f].then((T2) => {
          n[f] = T2, a2();
        }, (T2) => {
          if (!(0, Rl.hasBatchIndex)(T2)) {
            m2(T2);
            return;
          }
          T2.batchRequestIdx === f ? m2(T2) : (i || (i = T2), a2());
        });
      });
    }
    __name(Il, "Il");
    var Dt = ne("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Qm = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var Dl = /* @__PURE__ */ Symbol.for("prisma.client.transaction.scope_context");
    function kl(e) {
      let r = e[Dl];
      if (r === void 0) return { kind: "top-level" };
      if (Jm(r)) return r;
      throw new Error("Internal error: inconsistent transaction scope context.");
    }
    __name(kl, "kl");
    function Jm(e) {
      if (typeof e != "object" || e === null) return false;
      let t = e;
      return t.kind === "nested" && typeof t.txId == "string" && typeof t.scopeId == "string" && Hm(t.scopeState);
    }
    __name(Jm, "Jm");
    function Hm(e) {
      return typeof e != "object" || e === null ? false : Array.isArray(e.stack);
    }
    __name(Hm, "Hm");
    function Gm() {
      return typeof globalThis.crypto?.randomUUID == "function" ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }
    __name(Gm, "Gm");
    var zm = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ml(e) {
      class t {
        static {
          __name(this, "t");
        }
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = Hi2();
        constructor(n) {
          if (!n) throw new D.PrismaClientInitializationError("`PrismaClient` needs to be constructed with a non-empty, valid `PrismaClientOptions`:\n\n```\nnew PrismaClient({\n  ...\n})\n```\n\nor\n\n```\nconstructor() {\n  super({ ... });\n}\n```\n          ", Zi2);
          e = n.__internal?.configOverride?.(e) ?? e, Cl(n, e);
          let i = new Jr().on("error", () => {
          });
          this._extensions = Et.empty(), this._previewFeatures = e.previewFeatures, this._clientVersion = e.clientVersion ?? Zi2, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = gl();
          let o;
          if (n.adapter) {
            o = n.adapter;
            let s = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
            if (o.provider !== s) throw new D.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`, this._clientVersion);
          }
          try {
            let s = n ?? {}, m2 = (s.__internal ?? {}).debug === true;
            if (m2 && ne.enable("prisma:client"), s.errorFormat ? this._errorFormat = s.errorFormat : y.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { enableDebugLogs: m2, logLevel: s.log && hl(s.log), logQueries: s.log && !!(typeof s.log == "string" ? s.log === "query" : s.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: s.transactionOptions?.maxWait ?? 2e3, timeout: s.transactionOptions?.timeout ?? 5e3, isolationLevel: s.transactionOptions?.isolationLevel }, logEmitter: i, adapter: o, accelerateUrl: s.accelerateUrl, sqlCommenters: s.comments, parameterizationSchema: e.parameterizationSchema, runtimeDataModel: e.runtimeDataModel, queryPlanCacheMaxSize: n.queryPlanCacheMaxSize }, this._accelerateEngineConfig = Object.create(this._engineConfig), this._accelerateEngineConfig.accelerateUtils = { resolveDatasourceUrl: /* @__PURE__ */ __name(() => {
              if (s.accelerateUrl) return s.accelerateUrl;
              throw new D.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`, e.clientVersion);
            }, "resolveDatasourceUrl") }, Dt("clientVersion", e.clientVersion), this._engine = Xu(this._engineConfig), this._requestHandler = new An(this, i), s.log) for (let f of s.log) {
              let T2 = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              T2 && this.$on(T2, (S2) => {
                qt.log(`${qt.tags[T2] ?? ""}`, S2.message || S2.query);
              });
            }
          } catch (s) {
            throw s.clientVersion = this._clientVersion, s;
          }
          return this._appliedParent = Yt2(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Io2();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a2 = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Ji({ clientMethod: i, activeProvider: a2 }), callsite: Ve(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a2] = Ol(n, i);
              return Qi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a2);
            }
            throw new D.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Qi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new D.PrismaClientValidationError(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: el, callsite: Ve(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a2 = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Ji({ clientMethod: i, activeProvider: a2 }), callsite: Ve(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Ol(n, i));
            throw new D.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new D.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = zm.nextId(), s = yl(n.length), a2 = n.map((m2, f) => {
            if (m2?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let T2 = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, S2 = { kind: "batch", id: o, index: f, isolationLevel: T2, maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, lock: s };
            return m2.requestTransaction?.(S2) ?? m2;
          });
          return Il(a2);
        }
        async _transactionWithCallback({ callback: n, options: i = {} }) {
          let o = kl(this), s = o.kind === "nested", a2 = s ? o.scopeState : { stack: [] }, m2 = a2.stack, f = Gm();
          if (s) {
            if (m2.at(-1) !== o.scopeId) throw new Error("Concurrent nested transactions are not supported");
            i.newTxId = o.txId;
          }
          m2.push(f);
          let T2 = { traceparent: this._tracingHelper.getTraceParent() }, S2 = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, newTxId: i.newTxId }, v2;
          try {
            v2 = await this._engine.transaction("start", T2, S2);
          } catch (N) {
            throw m2.at(-1) === f && m2.pop(), N;
          }
          let A;
          try {
            let N = { kind: "itx", ...v2 };
            if (A = await n(this._createItxClient(N, f, a2)), s) {
              if (m2.at(-1) !== f) throw new Error("Nested transactions must be closed in reverse order of creation.");
            } else if (m2.length !== 1) throw new Error("Cannot close transaction while a nested transaction is still active.");
            await this._engine.transaction("commit", T2, v2);
          } catch (N) {
            let I = m2.at(-1) !== f ? Math.max(1, m2.length) : 1;
            for (let J = 0; J < I; J++) await this._engine.transaction("rollback", T2, v2).catch((j) => {
              Dt("rollback attempt %d/%d failed: %O", J + 1, I, j);
            });
            throw N;
          } finally {
            m2.at(-1) === f ? m2.pop() : m2.length = 0;
          }
          return A;
        }
        _createItxClient(n, i, o) {
          let s = { kind: "nested", txId: n.id, scopeId: i, scopeState: o };
          return ye(Yt2(ye(Ds(this), [ie2("_appliedParent", () => this._appliedParent._createItxClient(n, i, o)), ie2("_createPrismaPromise", () => Hi2(n)), ie2(Dl, () => s)])), [Tt($s)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : e.activeProvider === "mongodb" && kl(this).kind === "nested" ? o = /* @__PURE__ */ __name(() => {
            throw new D.PrismaClientValidationError(`The ${e.activeProvider} provider does not support nested transactions`, { clientVersion: this._clientVersion });
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Qm, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a2 = /* @__PURE__ */ __name(async (m2) => {
            let { runInTransaction: f, args: T2, ...S2 } = m2, v2 = { ...n, ...S2 };
            T2 && (v2.args = i.middlewareArgsToRequestArgs(T2)), n.transaction !== void 0 && f === false && delete v2.transaction;
            let A = await Bs(this, v2);
            if (!v2.model) return A;
            let N = Gs2({ dataPath: v2.dataPath, modelName: v2.model, args: v2.args, runtimeDataModel: this._runtimeDataModel });
            return Fs({ result: A, modelName: N.modelName, args: N.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit });
          }, "a");
          return this._tracingHelper.runInChildSpan(s.operation, () => a2(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a2, model: m2, argsMapper: f, transaction: T2, unpacker: S2, otelParentCtx: v2, customDataProxyFetch: A }) {
          try {
            n = f ? f(n) : n;
            let N = { name: "serialize" }, R = this._tracingHelper.runInChildSpan(N, () => Br({ modelName: m2, runtimeDataModel: this._runtimeDataModel, action: a2, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return ne.enabled("prisma:client") && (Dt("Prisma Client call:"), Dt(`prisma.${i}(${Ps2(n)})`), Dt("Generated request:"), Dt(JSON.stringify(R, null, 2) + `
`)), T2?.kind === "batch" && await T2.lock, this._requestHandler.request({ protocolQuery: R, modelName: m2, action: a2, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: T2, unpacker: S2, otelParentCtx: v2, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: A });
          } catch (N) {
            throw N.clientVersion = this._clientVersion, N;
          }
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $extends = Ms2;
      }
      return t;
    }
    __name(Ml, "Ml");
    function Ol(e, t) {
      return Wm(e) ? [new Nl.Sql(e, t), ll] : [e, cl];
    }
    __name(Ol, "Ol");
    function Wm(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(Wm, "Wm");
    u();
    l();
    c();
    p2();
    d2();
    var Km = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Ll(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!Km.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(Ll, "Ll");
    u();
    l();
    c();
    p2();
    d2();
    var Zm = /* @__PURE__ */ __name(() => globalThis.process?.release?.name === "node", "Zm");
    var Ym = /* @__PURE__ */ __name(() => !!globalThis.Bun || !!globalThis.process?.versions?.bun, "Ym");
    var Xm = /* @__PURE__ */ __name(() => !!globalThis.Deno, "Xm");
    var ef = /* @__PURE__ */ __name(() => typeof globalThis.Netlify == "object", "ef");
    var tf = /* @__PURE__ */ __name(() => typeof globalThis.EdgeRuntime == "object", "tf");
    var rf = /* @__PURE__ */ __name(() => globalThis.navigator?.userAgent === "Cloudflare-Workers", "rf");
    function nf() {
      return [[ef, "netlify"], [tf, "edge-light"], [rf, "workerd"], [Xm, "deno"], [Ym, "bun"], [Zm, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
    }
    __name(nf, "nf");
    var of = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function _l() {
      let e = nf();
      return { id: e, prettyName: of[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(_l, "_l");
    var D = require_dist();
    var ke = require_dist();
    var Y = require_dist();
    var Fl = require_dist();
  }
});

// node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/query_compiler_fast_bg.js
var require_query_compiler_fast_bg = __commonJS({
  "node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/query_compiler_fast_bg.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var h = Object.defineProperty;
    var T2 = Object.getOwnPropertyDescriptor;
    var M = Object.getOwnPropertyNames;
    var j = Object.prototype.hasOwnProperty;
    var D = /* @__PURE__ */ __name((e, t) => {
      for (var n in t) h(e, n, { get: t[n], enumerable: true });
    }, "D");
    var O2 = /* @__PURE__ */ __name((e, t, n, _) => {
      if (t && typeof t == "object" || typeof t == "function") for (let r of M(t)) !j.call(e, r) && r !== n && h(e, r, { get: /* @__PURE__ */ __name(() => t[r], "get"), enumerable: !(_ = T2(t, r)) || _.enumerable });
      return e;
    }, "O");
    var B = /* @__PURE__ */ __name((e) => O2(h({}, "__esModule", { value: true }), e), "B");
    var xe = {};
    D(xe, { QueryCompiler: /* @__PURE__ */ __name(() => F, "QueryCompiler"), __wbg_Error_e83987f665cf5504: /* @__PURE__ */ __name(() => q, "__wbg_Error_e83987f665cf5504"), __wbg_Number_bb48ca12f395cd08: /* @__PURE__ */ __name(() => C, "__wbg_Number_bb48ca12f395cd08"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => k, "__wbg_String_8f0eb39a4a4c2f66"), __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68: /* @__PURE__ */ __name(() => W, "__wbg___wbindgen_boolean_get_6d5a1ee65bab5f68"), __wbg___wbindgen_debug_string_df47ffb5e35e6763: /* @__PURE__ */ __name(() => V, "__wbg___wbindgen_debug_string_df47ffb5e35e6763"), __wbg___wbindgen_in_bb933bd9e1b3bc0f: /* @__PURE__ */ __name(() => z, "__wbg___wbindgen_in_bb933bd9e1b3bc0f"), __wbg___wbindgen_is_object_c818261d21f283a4: /* @__PURE__ */ __name(() => L, "__wbg___wbindgen_is_object_c818261d21f283a4"), __wbg___wbindgen_is_string_fbb76cb2940daafd: /* @__PURE__ */ __name(() => P, "__wbg___wbindgen_is_string_fbb76cb2940daafd"), __wbg___wbindgen_is_undefined_2d472862bd29a478: /* @__PURE__ */ __name(() => Q, "__wbg___wbindgen_is_undefined_2d472862bd29a478"), __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147: /* @__PURE__ */ __name(() => Y, "__wbg___wbindgen_jsval_loose_eq_b664b38a2f582147"), __wbg___wbindgen_number_get_a20bf9b85341449d: /* @__PURE__ */ __name(() => G2, "__wbg___wbindgen_number_get_a20bf9b85341449d"), __wbg___wbindgen_string_get_e4f06c90489ad01b: /* @__PURE__ */ __name(() => J, "__wbg___wbindgen_string_get_e4f06c90489ad01b"), __wbg___wbindgen_throw_b855445ff6a94295: /* @__PURE__ */ __name(() => X, "__wbg___wbindgen_throw_b855445ff6a94295"), __wbg_entries_e171b586f8f6bdbf: /* @__PURE__ */ __name(() => H, "__wbg_entries_e171b586f8f6bdbf"), __wbg_getTime_14776bfb48a1bff9: /* @__PURE__ */ __name(() => K, "__wbg_getTime_14776bfb48a1bff9"), __wbg_get_7bed016f185add81: /* @__PURE__ */ __name(() => Z, "__wbg_get_7bed016f185add81"), __wbg_get_with_ref_key_1dc361bd10053bfe: /* @__PURE__ */ __name(() => v2, "__wbg_get_with_ref_key_1dc361bd10053bfe"), __wbg_instanceof_ArrayBuffer_70beb1189ca63b38: /* @__PURE__ */ __name(() => ee, "__wbg_instanceof_ArrayBuffer_70beb1189ca63b38"), __wbg_instanceof_Uint8Array_20c8e73002f7af98: /* @__PURE__ */ __name(() => te, "__wbg_instanceof_Uint8Array_20c8e73002f7af98"), __wbg_isSafeInteger_d216eda7911dde36: /* @__PURE__ */ __name(() => ne, "__wbg_isSafeInteger_d216eda7911dde36"), __wbg_length_69bca3cb64fc8748: /* @__PURE__ */ __name(() => re, "__wbg_length_69bca3cb64fc8748"), __wbg_length_cdd215e10d9dd507: /* @__PURE__ */ __name(() => _e, "__wbg_length_cdd215e10d9dd507"), __wbg_new_0_f9740686d739025c: /* @__PURE__ */ __name(() => oe, "__wbg_new_0_f9740686d739025c"), __wbg_new_1acc0b6eea89d040: /* @__PURE__ */ __name(() => ce2, "__wbg_new_1acc0b6eea89d040"), __wbg_new_5a79be3ab53b8aa5: /* @__PURE__ */ __name(() => ie2, "__wbg_new_5a79be3ab53b8aa5"), __wbg_new_68651c719dcda04e: /* @__PURE__ */ __name(() => se, "__wbg_new_68651c719dcda04e"), __wbg_new_e17d9f43105b08be: /* @__PURE__ */ __name(() => ue, "__wbg_new_e17d9f43105b08be"), __wbg_prototypesetcall_2a6620b6922694b2: /* @__PURE__ */ __name(() => fe, "__wbg_prototypesetcall_2a6620b6922694b2"), __wbg_set_3f1d0b984ed272ed: /* @__PURE__ */ __name(() => be2, "__wbg_set_3f1d0b984ed272ed"), __wbg_set_907fb406c34a251d: /* @__PURE__ */ __name(() => de, "__wbg_set_907fb406c34a251d"), __wbg_set_c213c871859d6500: /* @__PURE__ */ __name(() => ae, "__wbg_set_c213c871859d6500"), __wbg_set_message_82ae475bb413aa5c: /* @__PURE__ */ __name(() => ge2, "__wbg_set_message_82ae475bb413aa5c"), __wbg_set_wasm: /* @__PURE__ */ __name(() => N, "__wbg_set_wasm"), __wbindgen_cast_2241b6af4c4b2941: /* @__PURE__ */ __name(() => le, "__wbindgen_cast_2241b6af4c4b2941"), __wbindgen_cast_4625c577ab2ec9ee: /* @__PURE__ */ __name(() => we, "__wbindgen_cast_4625c577ab2ec9ee"), __wbindgen_cast_9ae0607507abb057: /* @__PURE__ */ __name(() => pe, "__wbindgen_cast_9ae0607507abb057"), __wbindgen_cast_d6cd19b81560fd6e: /* @__PURE__ */ __name(() => ye, "__wbindgen_cast_d6cd19b81560fd6e"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => me, "__wbindgen_init_externref_table") });
    module.exports = B(xe);
    var A = /* @__PURE__ */ __name(() => {
    }, "A");
    A.prototype = A;
    var o;
    function N(e) {
      o = e;
    }
    __name(N, "N");
    var p2 = null;
    function a2() {
      return (p2 === null || p2.byteLength === 0) && (p2 = new Uint8Array(o.memory.buffer)), p2;
    }
    __name(a2, "a");
    var y = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    y.decode();
    var U2 = 2146435072;
    var S2 = 0;
    function R(e, t) {
      return S2 += t, S2 >= U2 && (y = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), y.decode(), S2 = t), y.decode(a2().subarray(e, e + t));
    }
    __name(R, "R");
    function m2(e, t) {
      return e = e >>> 0, R(e, t);
    }
    __name(m2, "m");
    var f = 0;
    var g = new TextEncoder();
    "encodeInto" in g || (g.encodeInto = function(e, t) {
      const n = g.encode(e);
      return t.set(n), { read: e.length, written: n.length };
    });
    function l(e, t, n) {
      if (n === void 0) {
        const i = g.encode(e), d2 = t(i.length, 1) >>> 0;
        return a2().subarray(d2, d2 + i.length).set(i), f = i.length, d2;
      }
      let _ = e.length, r = t(_, 1) >>> 0;
      const s = a2();
      let c = 0;
      for (; c < _; c++) {
        const i = e.charCodeAt(c);
        if (i > 127) break;
        s[r + c] = i;
      }
      if (c !== _) {
        c !== 0 && (e = e.slice(c)), r = n(r, _, _ = c + e.length * 3, 1) >>> 0;
        const i = a2().subarray(r + c, r + _), d2 = g.encodeInto(e, i);
        c += d2.written, r = n(r, _, c, 1) >>> 0;
      }
      return f = c, r;
    }
    __name(l, "l");
    var b2 = null;
    function u() {
      return (b2 === null || b2.buffer.detached === true || b2.buffer.detached === void 0 && b2.buffer !== o.memory.buffer) && (b2 = new DataView(o.memory.buffer)), b2;
    }
    __name(u, "u");
    function x2(e) {
      return e == null;
    }
    __name(x2, "x");
    function I(e) {
      const t = typeof e;
      if (t == "number" || t == "boolean" || e == null) return `${e}`;
      if (t == "string") return `"${e}"`;
      if (t == "symbol") {
        const r = e.description;
        return r == null ? "Symbol" : `Symbol(${r})`;
      }
      if (t == "function") {
        const r = e.name;
        return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
      }
      if (Array.isArray(e)) {
        const r = e.length;
        let s = "[";
        r > 0 && (s += I(e[0]));
        for (let c = 1; c < r; c++) s += ", " + I(e[c]);
        return s += "]", s;
      }
      const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
      let _;
      if (n && n.length > 1) _ = n[1];
      else return toString.call(e);
      if (_ == "Object") try {
        return "Object(" + JSON.stringify(e) + ")";
      } catch {
        return "Object";
      }
      return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
    }
    __name(I, "I");
    function $2(e, t) {
      return e = e >>> 0, a2().subarray(e / 1, e / 1 + t);
    }
    __name($2, "$");
    function w(e) {
      const t = o.__wbindgen_externrefs.get(e);
      return o.__externref_table_dealloc(e), t;
    }
    __name(w, "w");
    var E2 = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
    }, "register"), unregister: /* @__PURE__ */ __name(() => {
    }, "unregister") } : new FinalizationRegistry((e) => o.__wbg_querycompiler_free(e >>> 0, 1));
    var F = class {
      static {
        __name(this, "F");
      }
      __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, E2.unregister(this), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        o.__wbg_querycompiler_free(t, 0);
      }
      compileBatch(t) {
        const n = l(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f, r = o.querycompiler_compileBatch(this.__wbg_ptr, n, _);
        if (r[2]) throw w(r[1]);
        return w(r[0]);
      }
      constructor(t) {
        const n = o.querycompiler_new(t);
        if (n[2]) throw w(n[1]);
        return this.__wbg_ptr = n[0] >>> 0, E2.register(this, this.__wbg_ptr, this), this;
      }
      compile(t) {
        const n = l(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f, r = o.querycompiler_compile(this.__wbg_ptr, n, _);
        if (r[2]) throw w(r[1]);
        return w(r[0]);
      }
    };
    Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
    function q(e, t) {
      return Error(m2(e, t));
    }
    __name(q, "q");
    function C(e) {
      return Number(e);
    }
    __name(C, "C");
    function k(e, t) {
      const n = String(t), _ = l(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f;
      u().setInt32(e + 4 * 1, r, true), u().setInt32(e + 4 * 0, _, true);
    }
    __name(k, "k");
    function W(e) {
      const t = e, n = typeof t == "boolean" ? t : void 0;
      return x2(n) ? 16777215 : n ? 1 : 0;
    }
    __name(W, "W");
    function V(e, t) {
      const n = I(t), _ = l(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f;
      u().setInt32(e + 4 * 1, r, true), u().setInt32(e + 4 * 0, _, true);
    }
    __name(V, "V");
    function z(e, t) {
      return e in t;
    }
    __name(z, "z");
    function L(e) {
      const t = e;
      return typeof t == "object" && t !== null;
    }
    __name(L, "L");
    function P(e) {
      return typeof e == "string";
    }
    __name(P, "P");
    function Q(e) {
      return e === void 0;
    }
    __name(Q, "Q");
    function Y(e, t) {
      return e == t;
    }
    __name(Y, "Y");
    function G2(e, t) {
      const n = t, _ = typeof n == "number" ? n : void 0;
      u().setFloat64(e + 8 * 1, x2(_) ? 0 : _, true), u().setInt32(e + 4 * 0, !x2(_), true);
    }
    __name(G2, "G");
    function J(e, t) {
      const n = t, _ = typeof n == "string" ? n : void 0;
      var r = x2(_) ? 0 : l(_, o.__wbindgen_malloc, o.__wbindgen_realloc), s = f;
      u().setInt32(e + 4 * 1, s, true), u().setInt32(e + 4 * 0, r, true);
    }
    __name(J, "J");
    function X(e, t) {
      throw new Error(m2(e, t));
    }
    __name(X, "X");
    function H(e) {
      return Object.entries(e);
    }
    __name(H, "H");
    function K(e) {
      return e.getTime();
    }
    __name(K, "K");
    function Z(e, t) {
      return e[t >>> 0];
    }
    __name(Z, "Z");
    function v2(e, t) {
      return e[t];
    }
    __name(v2, "v");
    function ee(e) {
      let t;
      try {
        t = e instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    __name(ee, "ee");
    function te(e) {
      let t;
      try {
        t = e instanceof Uint8Array;
      } catch {
        t = false;
      }
      return t;
    }
    __name(te, "te");
    function ne(e) {
      return Number.isSafeInteger(e);
    }
    __name(ne, "ne");
    function re(e) {
      return e.length;
    }
    __name(re, "re");
    function _e(e) {
      return e.length;
    }
    __name(_e, "_e");
    function oe() {
      return /* @__PURE__ */ new Date();
    }
    __name(oe, "oe");
    function ce2() {
      return new Object();
    }
    __name(ce2, "ce");
    function ie2(e) {
      return new Uint8Array(e);
    }
    __name(ie2, "ie");
    function se() {
      return /* @__PURE__ */ new Map();
    }
    __name(se, "se");
    function ue() {
      return new Array();
    }
    __name(ue, "ue");
    function fe(e, t, n) {
      Uint8Array.prototype.set.call($2(e, t), n);
    }
    __name(fe, "fe");
    function be2(e, t, n) {
      e[t] = n;
    }
    __name(be2, "be");
    function de(e, t, n) {
      return e.set(t, n);
    }
    __name(de, "de");
    function ae(e, t, n) {
      e[t >>> 0] = n;
    }
    __name(ae, "ae");
    function ge2(e, t) {
      global.PRISMA_WASM_PANIC_REGISTRY.set_message(m2(e, t));
    }
    __name(ge2, "ge");
    function le(e, t) {
      return m2(e, t);
    }
    __name(le, "le");
    function we(e) {
      return BigInt.asUintN(64, e);
    }
    __name(we, "we");
    function pe(e) {
      return e;
    }
    __name(pe, "pe");
    function ye(e) {
      return e;
    }
    __name(ye, "ye");
    function me() {
      const e = o.__wbindgen_externrefs, t = e.grow(4);
      e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
    }
    __name(me, "me");
  }
});

// node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/wasm-worker-loader.mjs
var wasm_worker_loader_exports = {};
__export(wasm_worker_loader_exports, {
  default: () => wasm_worker_loader_default
});
var wasm_worker_loader_default;
var init_wasm_worker_loader = __esm({
  "node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/wasm-worker-loader.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    wasm_worker_loader_default = import("./23f884361ad3033cf55010f971781b415e95947f-query_compiler_fast_bg.wasm");
  }
});

// node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/edge.js
var require_edge = __commonJS({
  "node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/edge.js"(exports) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug3,
      DbNull: DbNull2,
      JsonNull: JsonNull2,
      AnyNull: AnyNull2,
      NullTypes: NullTypes2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_wasm_compiler_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "7.8.0",
      engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = DbNull2;
    Prisma.JsonNull = JsonNull2;
    Prisma.AnyNull = AnyNull2;
    Prisma.NullTypes = NullTypes2;
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.SpaInfoScalarFieldEnum = {
      id: "id",
      name: "name",
      tagline: "tagline",
      phone: "phone",
      email: "email",
      address: "address",
      hoursWeekday: "hoursWeekday",
      hoursWeekend: "hoursWeekend",
      version: "version"
    };
    exports.Prisma.ClientScalarFieldEnum = {
      id: "id",
      name: "name",
      avatar: "avatar",
      tier: "tier",
      phone: "phone",
      email: "email",
      totalVisits: "totalVisits",
      totalSpent: "totalSpent",
      memberPoints: "memberPoints",
      lastVisit: "lastVisit",
      joinDate: "joinDate",
      notes: "notes"
    };
    exports.Prisma.TherapistScalarFieldEnum = {
      id: "id",
      name: "name",
      avatar: "avatar",
      specialty: "specialty",
      experience: "experience",
      rating: "rating",
      totalReviews: "totalReviews",
      availability: "availability",
      bio: "bio",
      services: "services"
    };
    exports.Prisma.ServiceScalarFieldEnum = {
      id: "id",
      name: "name",
      category: "category",
      duration: "duration",
      price: "price",
      priceUSD: "priceUSD",
      description: "description",
      features: "features",
      image: "image",
      popular: "popular",
      featured: "featured"
    };
    exports.Prisma.AppointmentScalarFieldEnum = {
      id: "id",
      clientId: "clientId",
      clientName: "clientName",
      clientTier: "clientTier",
      clientAvatar: "clientAvatar",
      notes: "notes",
      service: "service",
      serviceIcon: "serviceIcon",
      therapist: "therapist",
      therapistId: "therapistId",
      startTime: "startTime",
      endTime: "endTime",
      date: "date",
      status: "status",
      statusLabel: "statusLabel",
      price: "price"
    };
    exports.Prisma.TreatmentProgressScalarFieldEnum = {
      id: "id",
      clientId: "clientId",
      clientName: "clientName",
      packageName: "packageName",
      totalSessions: "totalSessions",
      completedSessions: "completedSessions",
      nextDate: "nextDate",
      nextTime: "nextTime",
      color: "color"
    };
    exports.Prisma.WorkflowScalarFieldEnum = {
      id: "id",
      name: "name",
      trigger: "trigger",
      filter: "filter",
      actions: "actions",
      active: "active",
      totalSent: "totalSent"
    };
    exports.Prisma.NotificationScalarFieldEnum = {
      id: "id",
      type: "type",
      title: "title",
      message: "message",
      time: "time",
      read: "read",
      priority: "priority"
    };
    exports.Prisma.RevenueChartItemScalarFieldEnum = {
      id: "id",
      day: "day",
      amount: "amount"
    };
    exports.Prisma.CurrentUserScalarFieldEnum = {
      id: "id",
      name: "name",
      role: "role",
      avatar: "avatar",
      greeting: "greeting"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.JsonNullValueInput = {
      JsonNull: Prisma.JsonNull
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.JsonNullValueFilter = {
      DbNull: Prisma.DbNull,
      JsonNull: Prisma.JsonNull,
      AnyNull: Prisma.AnyNull
    };
    exports.Prisma.ModelName = {
      SpaInfo: "SpaInfo",
      Client: "Client",
      Therapist: "Therapist",
      Service: "Service",
      Appointment: "Appointment",
      TreatmentProgress: "TreatmentProgress",
      Workflow: "Workflow",
      Notification: "Notification",
      RevenueChartItem: "RevenueChartItem",
      CurrentUser: "CurrentUser"
    };
    var config2 = {
      "previewFeatures": [
        "driverAdapters"
      ],
      "clientVersion": "7.8.0",
      "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
      "activeProvider": "postgresql",
      "inlineSchema": 'datasource db {\n  provider = "postgresql"\n}\n\ngenerator client {\n  provider        = "prisma-client-js"\n  previewFeatures = ["driverAdapters"]\n}\n\n// B\u1EA3ng SpaInfo (Th\xF4ng tin chung Spa)\nmodel SpaInfo {\n  id           String @id @default("spa-001")\n  name         String\n  tagline      String\n  phone        String\n  email        String\n  address      String\n  hoursWeekday String\n  hoursWeekend String\n  version      String\n}\n\n// B\u1EA3ng Client (Kh\xE1ch h\xE0ng)\nmodel Client {\n  id           String        @id @default(uuid())\n  name         String\n  avatar       String\n  tier         String\n  phone        String\n  email        String\n  totalVisits  Int           @default(0)\n  totalSpent   BigInt        @default(0)\n  memberPoints Int           @default(0)\n  lastVisit    String\n  joinDate     String\n  notes        String?\n  appointments Appointment[]\n}\n\n// B\u1EA3ng Therapist (Nh\xE2n vi\xEAn)\nmodel Therapist {\n  id           String        @id @default(uuid())\n  name         String\n  avatar       String\n  specialty    String\n  experience   String\n  rating       Float         @default(5.0)\n  totalReviews Int           @default(0)\n  availability String        @default("available")\n  bio          String\n  services     String[]\n  appointments Appointment[]\n}\n\n// B\u1EA3ng Service (D\u1ECBch v\u1EE5)\nmodel Service {\n  id          String   @id @default(uuid())\n  name        String\n  category    String\n  duration    Int\n  price       BigInt\n  priceUSD    Int\n  description String\n  features    String[]\n  image       String\n  popular     Boolean  @default(false)\n  featured    Boolean  @default(false)\n}\n\n// B\u1EA3ng Appointment (L\u1ECBch h\u1EB9n)\nmodel Appointment {\n  id           String    @id @default(uuid())\n  clientId     String\n  client       Client    @relation(fields: [clientId], references: [id], onDelete: Cascade)\n  clientName   String\n  clientTier   String\n  clientAvatar String\n  notes        String?\n  service      String?\n  serviceIcon  String?\n  therapist    String\n  therapistId  String\n  therapistRel Therapist @relation(fields: [therapistId], references: [id], onDelete: Cascade)\n  startTime    String\n  endTime      String\n  date         String\n  status       String\n  statusLabel  String\n  price        BigInt    @default(0)\n}\n\n// B\u1EA3ng TreatmentProgress (Ti\u1EBFn \u0111\u1ED9 li\u1EC7u tr\xECnh)\nmodel TreatmentProgress {\n  id                String @id @default(uuid())\n  clientId          String\n  clientName        String\n  packageName       String\n  totalSessions     Int\n  completedSessions Int\n  nextDate          String\n  nextTime          String\n  color             String\n}\n\n// B\u1EA3ng Workflow (Quy tr\xECnh t\u1EF1 \u0111\u1ED9ng)\nmodel Workflow {\n  id        String  @id @default(uuid())\n  name      String\n  trigger   String\n  filter    String\n  actions   Json // L\u01B0u danh s\xE1ch h\xE0nh \u0111\u1ED9ng (m\u1EA3ng JSON)\n  active    Boolean @default(true)\n  totalSent Int     @default(0)\n}\n\n// B\u1EA3ng Notification (Th\xF4ng b\xE1o)\nmodel Notification {\n  id       String  @id @default(uuid())\n  type     String\n  title    String\n  message  String\n  time     String\n  read     Boolean @default(false)\n  priority String  @default("normal")\n}\n\n// B\u1EA3ng RevenueChartItem (Bi\u1EC3u \u0111\u1ED3 doanh thu tu\u1EA7n)\nmodel RevenueChartItem {\n  id     String @id @default(uuid())\n  day    String\n  amount BigInt\n}\n\n// B\u1EA3ng CurrentUser (Ng\u01B0\u1EDDi d\xF9ng \u0111ang \u0111\u0103ng nh\u1EADp)\nmodel CurrentUser {\n  id       String @id @default("admin-001")\n  name     String\n  role     String\n  avatar   String\n  greeting String\n}\n'
    };
    config2.runtimeDataModel = JSON.parse('{"models":{"SpaInfo":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"tagline","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"hoursWeekday","kind":"scalar","type":"String"},{"name":"hoursWeekend","kind":"scalar","type":"String"},{"name":"version","kind":"scalar","type":"String"}],"dbName":null},"Client":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"avatar","kind":"scalar","type":"String"},{"name":"tier","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"totalVisits","kind":"scalar","type":"Int"},{"name":"totalSpent","kind":"scalar","type":"BigInt"},{"name":"memberPoints","kind":"scalar","type":"Int"},{"name":"lastVisit","kind":"scalar","type":"String"},{"name":"joinDate","kind":"scalar","type":"String"},{"name":"notes","kind":"scalar","type":"String"},{"name":"appointments","kind":"object","type":"Appointment","relationName":"AppointmentToClient"}],"dbName":null},"Therapist":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"avatar","kind":"scalar","type":"String"},{"name":"specialty","kind":"scalar","type":"String"},{"name":"experience","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Float"},{"name":"totalReviews","kind":"scalar","type":"Int"},{"name":"availability","kind":"scalar","type":"String"},{"name":"bio","kind":"scalar","type":"String"},{"name":"services","kind":"scalar","type":"String"},{"name":"appointments","kind":"object","type":"Appointment","relationName":"AppointmentToTherapist"}],"dbName":null},"Service":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"category","kind":"scalar","type":"String"},{"name":"duration","kind":"scalar","type":"Int"},{"name":"price","kind":"scalar","type":"BigInt"},{"name":"priceUSD","kind":"scalar","type":"Int"},{"name":"description","kind":"scalar","type":"String"},{"name":"features","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"popular","kind":"scalar","type":"Boolean"},{"name":"featured","kind":"scalar","type":"Boolean"}],"dbName":null},"Appointment":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"clientId","kind":"scalar","type":"String"},{"name":"client","kind":"object","type":"Client","relationName":"AppointmentToClient"},{"name":"clientName","kind":"scalar","type":"String"},{"name":"clientTier","kind":"scalar","type":"String"},{"name":"clientAvatar","kind":"scalar","type":"String"},{"name":"notes","kind":"scalar","type":"String"},{"name":"service","kind":"scalar","type":"String"},{"name":"serviceIcon","kind":"scalar","type":"String"},{"name":"therapist","kind":"scalar","type":"String"},{"name":"therapistId","kind":"scalar","type":"String"},{"name":"therapistRel","kind":"object","type":"Therapist","relationName":"AppointmentToTherapist"},{"name":"startTime","kind":"scalar","type":"String"},{"name":"endTime","kind":"scalar","type":"String"},{"name":"date","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"statusLabel","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"BigInt"}],"dbName":null},"TreatmentProgress":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"clientId","kind":"scalar","type":"String"},{"name":"clientName","kind":"scalar","type":"String"},{"name":"packageName","kind":"scalar","type":"String"},{"name":"totalSessions","kind":"scalar","type":"Int"},{"name":"completedSessions","kind":"scalar","type":"Int"},{"name":"nextDate","kind":"scalar","type":"String"},{"name":"nextTime","kind":"scalar","type":"String"},{"name":"color","kind":"scalar","type":"String"}],"dbName":null},"Workflow":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"trigger","kind":"scalar","type":"String"},{"name":"filter","kind":"scalar","type":"String"},{"name":"actions","kind":"scalar","type":"Json"},{"name":"active","kind":"scalar","type":"Boolean"},{"name":"totalSent","kind":"scalar","type":"Int"}],"dbName":null},"Notification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"type","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"message","kind":"scalar","type":"String"},{"name":"time","kind":"scalar","type":"String"},{"name":"read","kind":"scalar","type":"Boolean"},{"name":"priority","kind":"scalar","type":"String"}],"dbName":null},"RevenueChartItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"day","kind":"scalar","type":"String"},{"name":"amount","kind":"scalar","type":"BigInt"}],"dbName":null},"CurrentUser":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"role","kind":"scalar","type":"String"},{"name":"avatar","kind":"scalar","type":"String"},{"name":"greeting","kind":"scalar","type":"String"}],"dbName":null}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
    config2.parameterizationSchema = {
      strings: JSON.parse('["where","SpaInfo.findUnique","SpaInfo.findUniqueOrThrow","orderBy","cursor","SpaInfo.findFirst","SpaInfo.findFirstOrThrow","SpaInfo.findMany","data","SpaInfo.createOne","SpaInfo.createMany","SpaInfo.createManyAndReturn","SpaInfo.updateOne","SpaInfo.updateMany","SpaInfo.updateManyAndReturn","create","update","SpaInfo.upsertOne","SpaInfo.deleteOne","SpaInfo.deleteMany","having","_count","_min","_max","SpaInfo.groupBy","SpaInfo.aggregate","client","appointments","therapistRel","Client.findUnique","Client.findUniqueOrThrow","Client.findFirst","Client.findFirstOrThrow","Client.findMany","Client.createOne","Client.createMany","Client.createManyAndReturn","Client.updateOne","Client.updateMany","Client.updateManyAndReturn","Client.upsertOne","Client.deleteOne","Client.deleteMany","_avg","_sum","Client.groupBy","Client.aggregate","Therapist.findUnique","Therapist.findUniqueOrThrow","Therapist.findFirst","Therapist.findFirstOrThrow","Therapist.findMany","Therapist.createOne","Therapist.createMany","Therapist.createManyAndReturn","Therapist.updateOne","Therapist.updateMany","Therapist.updateManyAndReturn","Therapist.upsertOne","Therapist.deleteOne","Therapist.deleteMany","Therapist.groupBy","Therapist.aggregate","Service.findUnique","Service.findUniqueOrThrow","Service.findFirst","Service.findFirstOrThrow","Service.findMany","Service.createOne","Service.createMany","Service.createManyAndReturn","Service.updateOne","Service.updateMany","Service.updateManyAndReturn","Service.upsertOne","Service.deleteOne","Service.deleteMany","Service.groupBy","Service.aggregate","Appointment.findUnique","Appointment.findUniqueOrThrow","Appointment.findFirst","Appointment.findFirstOrThrow","Appointment.findMany","Appointment.createOne","Appointment.createMany","Appointment.createManyAndReturn","Appointment.updateOne","Appointment.updateMany","Appointment.updateManyAndReturn","Appointment.upsertOne","Appointment.deleteOne","Appointment.deleteMany","Appointment.groupBy","Appointment.aggregate","TreatmentProgress.findUnique","TreatmentProgress.findUniqueOrThrow","TreatmentProgress.findFirst","TreatmentProgress.findFirstOrThrow","TreatmentProgress.findMany","TreatmentProgress.createOne","TreatmentProgress.createMany","TreatmentProgress.createManyAndReturn","TreatmentProgress.updateOne","TreatmentProgress.updateMany","TreatmentProgress.updateManyAndReturn","TreatmentProgress.upsertOne","TreatmentProgress.deleteOne","TreatmentProgress.deleteMany","TreatmentProgress.groupBy","TreatmentProgress.aggregate","Workflow.findUnique","Workflow.findUniqueOrThrow","Workflow.findFirst","Workflow.findFirstOrThrow","Workflow.findMany","Workflow.createOne","Workflow.createMany","Workflow.createManyAndReturn","Workflow.updateOne","Workflow.updateMany","Workflow.updateManyAndReturn","Workflow.upsertOne","Workflow.deleteOne","Workflow.deleteMany","Workflow.groupBy","Workflow.aggregate","Notification.findUnique","Notification.findUniqueOrThrow","Notification.findFirst","Notification.findFirstOrThrow","Notification.findMany","Notification.createOne","Notification.createMany","Notification.createManyAndReturn","Notification.updateOne","Notification.updateMany","Notification.updateManyAndReturn","Notification.upsertOne","Notification.deleteOne","Notification.deleteMany","Notification.groupBy","Notification.aggregate","RevenueChartItem.findUnique","RevenueChartItem.findUniqueOrThrow","RevenueChartItem.findFirst","RevenueChartItem.findFirstOrThrow","RevenueChartItem.findMany","RevenueChartItem.createOne","RevenueChartItem.createMany","RevenueChartItem.createManyAndReturn","RevenueChartItem.updateOne","RevenueChartItem.updateMany","RevenueChartItem.updateManyAndReturn","RevenueChartItem.upsertOne","RevenueChartItem.deleteOne","RevenueChartItem.deleteMany","RevenueChartItem.groupBy","RevenueChartItem.aggregate","CurrentUser.findUnique","CurrentUser.findUniqueOrThrow","CurrentUser.findFirst","CurrentUser.findFirstOrThrow","CurrentUser.findMany","CurrentUser.createOne","CurrentUser.createMany","CurrentUser.createManyAndReturn","CurrentUser.updateOne","CurrentUser.updateMany","CurrentUser.updateManyAndReturn","CurrentUser.upsertOne","CurrentUser.deleteOne","CurrentUser.deleteMany","CurrentUser.groupBy","CurrentUser.aggregate","AND","OR","NOT","id","name","role","avatar","greeting","equals","in","notIn","lt","lte","gt","gte","contains","startsWith","endsWith","not","day","amount","type","title","message","time","read","priority","trigger","filter","actions","active","totalSent","string_contains","string_starts_with","string_ends_with","array_starts_with","array_ends_with","array_contains","clientId","clientName","packageName","totalSessions","completedSessions","nextDate","nextTime","color","clientTier","clientAvatar","notes","service","serviceIcon","therapist","therapistId","startTime","endTime","date","status","statusLabel","price","category","duration","priceUSD","description","features","image","popular","featured","has","hasEvery","hasSome","specialty","experience","rating","totalReviews","availability","bio","services","every","some","none","tier","phone","email","totalVisits","totalSpent","memberPoints","lastVisit","joinDate","tagline","address","hoursWeekday","hoursWeekend","version","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","push","increment","decrement","multiply","divide"]'),
      graph: "lQNhoAEMrwEAALICADCwAQAABAAQsQEAALICADCyAQEAAAABswEBAIUCACGAAgEAhQIAIYECAQCFAgAhhwIBAIUCACGIAgEAhQIAIYkCAQCFAgAhigIBAIUCACGLAgEAhQIAIQEAAAABACABAAAAAQAgDK8BAACyAgAwsAEAAAQAELEBAACyAgAwsgEBAIUCACGzAQEAhQIAIYACAQCFAgAhgQIBAIUCACGHAgEAhQIAIYgCAQCFAgAhiQIBAIUCACGKAgEAhQIAIYsCAQCFAgAhAAMAAAAEACADAAAFADAEAAABACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAmyAQEAAAABswEBAAAAAYACAQAAAAGBAgEAAAABhwIBAAAAAYgCAQAAAAGJAgEAAAABigIBAAAAAYsCAQAAAAEBCAAACQAgCbIBAQAAAAGzAQEAAAABgAIBAAAAAYECAQAAAAGHAgEAAAABiAIBAAAAAYkCAQAAAAGKAgEAAAABiwIBAAAAAQEIAAALADABCAAACwAwCbIBAQC2AgAhswEBALYCACGAAgEAtgIAIYECAQC2AgAhhwIBALYCACGIAgEAtgIAIYkCAQC2AgAhigIBALYCACGLAgEAtgIAIQIAAAABACAIAAAOACAJsgEBALYCACGzAQEAtgIAIYACAQC2AgAhgQIBALYCACGHAgEAtgIAIYgCAQC2AgAhiQIBALYCACGKAgEAtgIAIYsCAQC2AgAhAgAAAAQAIAgAABAAIAIAAAAEACAIAAAQACADAAAAAQAgDwAACQAgEAAADgAgAQAAAAEAIAEAAAAEACADFQAAhwMAIBYAAIkDACAXAACIAwAgDK8BAACxAgAwsAEAABcAELEBAACxAgAwsgEBAIACACGzAQEAgAIAIYACAQCAAgAhgQIBAIACACGHAgEAgAIAIYgCAQCAAgAhiQIBAIACACGKAgEAgAIAIYsCAQCAAgAhAwAAAAQAIAMAABYAMBQAABcAIAMAAAAEACADAAAFADAEAAABACAQGwAAqgIAIK8BAACsAgAwsAEAACQAELEBAACsAgAwsgEBAAAAAbMBAQCFAgAhtQEBAIUCACHfAQEArQIAIf8BAQCFAgAhgAIBAIUCACGBAgEAhQIAIYICAgCaAgAhgwIEAIwCACGEAgIAmgIAIYUCAQCFAgAhhgIBAIUCACEBAAAAGgAgFRoAAK8CACAcAACwAgAgrwEAAK4CADCwAQAAHAAQsQEAAK4CADCyAQEAhQIAIdUBAQCFAgAh1gEBAIUCACHdAQEAhQIAId4BAQCFAgAh3wEBAK0CACHgAQEArQIAIeEBAQCtAgAh4gEBAIUCACHjAQEAhQIAIeQBAQCFAgAh5QEBAIUCACHmAQEAhQIAIecBAQCFAgAh6AEBAIUCACHpAQQAjAIAIQUaAACFAwAgHAAAhgMAIN8BAADMAgAg4AEAAMwCACDhAQAAzAIAIBUaAACvAgAgHAAAsAIAIK8BAACuAgAwsAEAABwAELEBAACuAgAwsgEBAAAAAdUBAQCFAgAh1gEBAIUCACHdAQEAhQIAId4BAQCFAgAh3wEBAK0CACHgAQEArQIAIeEBAQCtAgAh4gEBAIUCACHjAQEAhQIAIeQBAQCFAgAh5QEBAIUCACHmAQEAhQIAIecBAQCFAgAh6AEBAIUCACHpAQQAjAIAIQMAAAAcACADAAAdADAEAAAeACADAAAAHAAgAwAAHQAwBAAAHgAgAQAAABwAIAEAAAAcACABAAAAGgAgEBsAAKoCACCvAQAArAIAMLABAAAkABCxAQAArAIAMLIBAQCFAgAhswEBAIUCACG1AQEAhQIAId8BAQCtAgAh_wEBAIUCACGAAgEAhQIAIYECAQCFAgAhggICAJoCACGDAgQAjAIAIYQCAgCaAgAhhQIBAIUCACGGAgEAhQIAIQIbAAD0AgAg3wEAAMwCACADAAAAJAAgAwAAJQAwBAAAGgAgAwAAACQAIAMAACUAMAQAABoAIAMAAAAkACADAAAlADAEAAAaACANGwAAhAMAILIBAQAAAAGzAQEAAAABtQEBAAAAAd8BAQAAAAH_AQEAAAABgAIBAAAAAYECAQAAAAGCAgIAAAABgwIEAAAAAYQCAgAAAAGFAgEAAAABhgIBAAAAAQEIAAApACAMsgEBAAAAAbMBAQAAAAG1AQEAAAAB3wEBAAAAAf8BAQAAAAGAAgEAAAABgQIBAAAAAYICAgAAAAGDAgQAAAABhAICAAAAAYUCAQAAAAGGAgEAAAABAQgAACsAMAEIAAArADANGwAA-gIAILIBAQC2AgAhswEBALYCACG1AQEAtgIAId8BAQDSAgAh_wEBALYCACGAAgEAtgIAIYECAQC2AgAhggICAMYCACGDAgQAvAIAIYQCAgDGAgAhhQIBALYCACGGAgEAtgIAIQIAAAAaACAIAAAuACAMsgEBALYCACGzAQEAtgIAIbUBAQC2AgAh3wEBANICACH_AQEAtgIAIYACAQC2AgAhgQIBALYCACGCAgIAxgIAIYMCBAC8AgAhhAICAMYCACGFAgEAtgIAIYYCAQC2AgAhAgAAACQAIAgAADAAIAIAAAAkACAIAAAwACADAAAAGgAgDwAAKQAgEAAALgAgAQAAABoAIAEAAAAkACAGFQAA9QIAIBYAAPgCACAXAAD3AgAgKwAA9gIAICwAAPkCACDfAQAAzAIAIA-vAQAAqwIAMLABAAA3ABCxAQAAqwIAMLIBAQCAAgAhswEBAIACACG1AQEAgAIAId8BAQCeAgAh_wEBAIACACGAAgEAgAIAIYECAQCAAgAhggICAJUCACGDAgQAhwIAIYQCAgCVAgAhhQIBAIACACGGAgEAgAIAIQMAAAAkACADAAA2ADAUAAA3ACADAAAAJAAgAwAAJQAwBAAAGgAgDhsAAKoCACCvAQAAqAIAMLABAAA9ABCxAQAAqAIAMLIBAQAAAAGzAQEAhQIAIbUBAQCFAgAh9QEBAIUCACH2AQEAhQIAIfcBCACpAgAh-AECAJoCACH5AQEAhQIAIfoBAQCFAgAh-wEAAKMCACABAAAAOgAgAQAAADoAIA4bAACqAgAgrwEAAKgCADCwAQAAPQAQsQEAAKgCADCyAQEAhQIAIbMBAQCFAgAhtQEBAIUCACH1AQEAhQIAIfYBAQCFAgAh9wEIAKkCACH4AQIAmgIAIfkBAQCFAgAh-gEBAIUCACH7AQAAowIAIAEbAAD0AgAgAwAAAD0AIAMAAD4AMAQAADoAIAMAAAA9ACADAAA-ADAEAAA6ACADAAAAPQAgAwAAPgAwBAAAOgAgCxsAAPMCACCyAQEAAAABswEBAAAAAbUBAQAAAAH1AQEAAAAB9gEBAAAAAfcBCAAAAAH4AQIAAAAB-QEBAAAAAfoBAQAAAAH7AQAA8gIAIAEIAABCACAKsgEBAAAAAbMBAQAAAAG1AQEAAAAB9QEBAAAAAfYBAQAAAAH3AQgAAAAB-AECAAAAAfkBAQAAAAH6AQEAAAAB-wEAAPICACABCAAARAAwAQgAAEQAMAsbAADlAgAgsgEBALYCACGzAQEAtgIAIbUBAQC2AgAh9QEBALYCACH2AQEAtgIAIfcBCADjAgAh-AECAMYCACH5AQEAtgIAIfoBAQC2AgAh-wEAAOQCACACAAAAOgAgCAAARwAgCrIBAQC2AgAhswEBALYCACG1AQEAtgIAIfUBAQC2AgAh9gEBALYCACH3AQgA4wIAIfgBAgDGAgAh-QEBALYCACH6AQEAtgIAIfsBAADkAgAgAgAAAD0AIAgAAEkAIAIAAAA9ACAIAABJACADAAAAOgAgDwAAQgAgEAAARwAgAQAAADoAIAEAAAA9ACAFFQAA3gIAIBYAAOECACAXAADgAgAgKwAA3wIAICwAAOICACANrwEAAKUCADCwAQAAUAAQsQEAAKUCADCyAQEAgAIAIbMBAQCAAgAhtQEBAIACACH1AQEAgAIAIfYBAQCAAgAh9wEIAKYCACH4AQIAlQIAIfkBAQCAAgAh-gEBAIACACH7AQAAowIAIAMAAAA9ACADAABPADAUAABQACADAAAAPQAgAwAAPgAwBAAAOgAgDq8BAACkAgAwsAEAAFYAELEBAACkAgAwsgEBAAAAAbMBAQCFAgAh6QEEAIwCACHqAQEAhQIAIesBAgCaAgAh7AECAJoCACHtAQEAhQIAIe4BAACjAgAg7wEBAIUCACHwASAAkgIAIfEBIACSAgAhAQAAAFMAIAEAAABTACAOrwEAAKQCADCwAQAAVgAQsQEAAKQCADCyAQEAhQIAIbMBAQCFAgAh6QEEAIwCACHqAQEAhQIAIesBAgCaAgAh7AECAJoCACHtAQEAhQIAIe4BAACjAgAg7wEBAIUCACHwASAAkgIAIfEBIACSAgAhAAMAAABWACADAABXADAEAABTACADAAAAVgAgAwAAVwAwBAAAUwAgAwAAAFYAIAMAAFcAMAQAAFMAIAuyAQEAAAABswEBAAAAAekBBAAAAAHqAQEAAAAB6wECAAAAAewBAgAAAAHtAQEAAAAB7gEAAN0CACDvAQEAAAAB8AEgAAAAAfEBIAAAAAEBCAAAWwAgC7IBAQAAAAGzAQEAAAAB6QEEAAAAAeoBAQAAAAHrAQIAAAAB7AECAAAAAe0BAQAAAAHuAQAA3QIAIO8BAQAAAAHwASAAAAAB8QEgAAAAAQEIAABdADABCAAAXQAwC7IBAQC2AgAhswEBALYCACHpAQQAvAIAIeoBAQC2AgAh6wECAMYCACHsAQIAxgIAIe0BAQC2AgAh7gEAANwCACDvAQEAtgIAIfABIADAAgAh8QEgAMACACECAAAAUwAgCAAAYAAgC7IBAQC2AgAhswEBALYCACHpAQQAvAIAIeoBAQC2AgAh6wECAMYCACHsAQIAxgIAIe0BAQC2AgAh7gEAANwCACDvAQEAtgIAIfABIADAAgAh8QEgAMACACECAAAAVgAgCAAAYgAgAgAAAFYAIAgAAGIAIAMAAABTACAPAABbACAQAABgACABAAAAUwAgAQAAAFYAIAUVAADXAgAgFgAA2gIAIBcAANkCACArAADYAgAgLAAA2wIAIA6vAQAAogIAMLABAABpABCxAQAAogIAMLIBAQCAAgAhswEBAIACACHpAQQAhwIAIeoBAQCAAgAh6wECAJUCACHsAQIAlQIAIe0BAQCAAgAh7gEAAKMCACDvAQEAgAIAIfABIACOAgAh8QEgAI4CACEDAAAAVgAgAwAAaAAwFAAAaQAgAwAAAFYAIAMAAFcAMAQAAFMAIAEAAAAeACABAAAAHgAgAwAAABwAIAMAAB0AMAQAAB4AIAMAAAAcACADAAAdADAEAAAeACADAAAAHAAgAwAAHQAwBAAAHgAgEhoAANUCACAcAADWAgAgsgEBAAAAAdUBAQAAAAHWAQEAAAAB3QEBAAAAAd4BAQAAAAHfAQEAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEBAAAAAeQBAQAAAAHlAQEAAAAB5gEBAAAAAecBAQAAAAHoAQEAAAAB6QEEAAAAAQEIAABxACAQsgEBAAAAAdUBAQAAAAHWAQEAAAAB3QEBAAAAAd4BAQAAAAHfAQEAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEBAAAAAeQBAQAAAAHlAQEAAAAB5gEBAAAAAecBAQAAAAHoAQEAAAAB6QEEAAAAAQEIAABzADABCAAAcwAwEhoAANMCACAcAADUAgAgsgEBALYCACHVAQEAtgIAIdYBAQC2AgAh3QEBALYCACHeAQEAtgIAId8BAQDSAgAh4AEBANICACHhAQEA0gIAIeIBAQC2AgAh4wEBALYCACHkAQEAtgIAIeUBAQC2AgAh5gEBALYCACHnAQEAtgIAIegBAQC2AgAh6QEEALwCACECAAAAHgAgCAAAdgAgELIBAQC2AgAh1QEBALYCACHWAQEAtgIAId0BAQC2AgAh3gEBALYCACHfAQEA0gIAIeABAQDSAgAh4QEBANICACHiAQEAtgIAIeMBAQC2AgAh5AEBALYCACHlAQEAtgIAIeYBAQC2AgAh5wEBALYCACHoAQEAtgIAIekBBAC8AgAhAgAAABwAIAgAAHgAIAIAAAAcACAIAAB4ACADAAAAHgAgDwAAcQAgEAAAdgAgAQAAAB4AIAEAAAAcACAIFQAAzQIAIBYAANACACAXAADPAgAgKwAAzgIAICwAANECACDfAQAAzAIAIOABAADMAgAg4QEAAMwCACATrwEAAJ0CADCwAQAAfwAQsQEAAJ0CADCyAQEAgAIAIdUBAQCAAgAh1gEBAIACACHdAQEAgAIAId4BAQCAAgAh3wEBAJ4CACHgAQEAngIAIeEBAQCeAgAh4gEBAIACACHjAQEAgAIAIeQBAQCAAgAh5QEBAIACACHmAQEAgAIAIecBAQCAAgAh6AEBAIACACHpAQQAhwIAIQMAAAAcACADAAB-ADAUAAB_ACADAAAAHAAgAwAAHQAwBAAAHgAgDK8BAACcAgAwsAEAAIUBABCxAQAAnAIAMLIBAQAAAAHVAQEAhQIAIdYBAQCFAgAh1wEBAIUCACHYAQIAmgIAIdkBAgCaAgAh2gEBAIUCACHbAQEAhQIAIdwBAQCFAgAhAQAAAIIBACABAAAAggEAIAyvAQAAnAIAMLABAACFAQAQsQEAAJwCADCyAQEAhQIAIdUBAQCFAgAh1gEBAIUCACHXAQEAhQIAIdgBAgCaAgAh2QECAJoCACHaAQEAhQIAIdsBAQCFAgAh3AEBAIUCACEAAwAAAIUBACADAACGAQAwBAAAggEAIAMAAACFAQAgAwAAhgEAMAQAAIIBACADAAAAhQEAIAMAAIYBADAEAACCAQAgCbIBAQAAAAHVAQEAAAAB1gEBAAAAAdcBAQAAAAHYAQIAAAAB2QECAAAAAdoBAQAAAAHbAQEAAAAB3AEBAAAAAQEIAACKAQAgCbIBAQAAAAHVAQEAAAAB1gEBAAAAAdcBAQAAAAHYAQIAAAAB2QECAAAAAdoBAQAAAAHbAQEAAAAB3AEBAAAAAQEIAACMAQAwAQgAAIwBADAJsgEBALYCACHVAQEAtgIAIdYBAQC2AgAh1wEBALYCACHYAQIAxgIAIdkBAgDGAgAh2gEBALYCACHbAQEAtgIAIdwBAQC2AgAhAgAAAIIBACAIAACPAQAgCbIBAQC2AgAh1QEBALYCACHWAQEAtgIAIdcBAQC2AgAh2AECAMYCACHZAQIAxgIAIdoBAQC2AgAh2wEBALYCACHcAQEAtgIAIQIAAACFAQAgCAAAkQEAIAIAAACFAQAgCAAAkQEAIAMAAACCAQAgDwAAigEAIBAAAI8BACABAAAAggEAIAEAAACFAQAgBRUAAMcCACAWAADKAgAgFwAAyQIAICsAAMgCACAsAADLAgAgDK8BAACbAgAwsAEAAJgBABCxAQAAmwIAMLIBAQCAAgAh1QEBAIACACHWAQEAgAIAIdcBAQCAAgAh2AECAJUCACHZAQIAlQIAIdoBAQCAAgAh2wEBAIACACHcAQEAgAIAIQMAAACFAQAgAwAAlwEAMBQAAJgBACADAAAAhQEAIAMAAIYBADAEAACCAQAgCq8BAACYAgAwsAEAAJ4BABCxAQAAmAIAMLIBAQAAAAGzAQEAhQIAIcoBAQCFAgAhywEBAIUCACHMAQAAmQIAIM0BIACSAgAhzgECAJoCACEBAAAAmwEAIAEAAACbAQAgCq8BAACYAgAwsAEAAJ4BABCxAQAAmAIAMLIBAQCFAgAhswEBAIUCACHKAQEAhQIAIcsBAQCFAgAhzAEAAJkCACDNASAAkgIAIc4BAgCaAgAhAAMAAACeAQAgAwAAnwEAMAQAAJsBACADAAAAngEAIAMAAJ8BADAEAACbAQAgAwAAAJ4BACADAACfAQAwBAAAmwEAIAeyAQEAAAABswEBAAAAAcoBAQAAAAHLAQEAAAABzAGAAAAAAc0BIAAAAAHOAQIAAAABAQgAAKMBACAHsgEBAAAAAbMBAQAAAAHKAQEAAAABywEBAAAAAcwBgAAAAAHNASAAAAABzgECAAAAAQEIAAClAQAwAQgAAKUBADAHsgEBALYCACGzAQEAtgIAIcoBAQC2AgAhywEBALYCACHMAYAAAAABzQEgAMACACHOAQIAxgIAIQIAAACbAQAgCAAAqAEAIAeyAQEAtgIAIbMBAQC2AgAhygEBALYCACHLAQEAtgIAIcwBgAAAAAHNASAAwAIAIc4BAgDGAgAhAgAAAJ4BACAIAACqAQAgAgAAAJ4BACAIAACqAQAgAwAAAJsBACAPAACjAQAgEAAAqAEAIAEAAACbAQAgAQAAAJ4BACAFFQAAwQIAIBYAAMQCACAXAADDAgAgKwAAwgIAICwAAMUCACAKrwEAAJMCADCwAQAAsQEAELEBAACTAgAwsgEBAIACACGzAQEAgAIAIcoBAQCAAgAhywEBAIACACHMAQAAlAIAIM0BIACOAgAhzgECAJUCACEDAAAAngEAIAMAALABADAUAACxAQAgAwAAAJ4BACADAACfAQAwBAAAmwEAIAqvAQAAkQIAMLABAAC3AQAQsQEAAJECADCyAQEAAAABxAEBAIUCACHFAQEAhQIAIcYBAQCFAgAhxwEBAIUCACHIASAAkgIAIckBAQCFAgAhAQAAALQBACABAAAAtAEAIAqvAQAAkQIAMLABAAC3AQAQsQEAAJECADCyAQEAhQIAIcQBAQCFAgAhxQEBAIUCACHGAQEAhQIAIccBAQCFAgAhyAEgAJICACHJAQEAhQIAIQADAAAAtwEAIAMAALgBADAEAAC0AQAgAwAAALcBACADAAC4AQAwBAAAtAEAIAMAAAC3AQAgAwAAuAEAMAQAALQBACAHsgEBAAAAAcQBAQAAAAHFAQEAAAABxgEBAAAAAccBAQAAAAHIASAAAAAByQEBAAAAAQEIAAC8AQAgB7IBAQAAAAHEAQEAAAABxQEBAAAAAcYBAQAAAAHHAQEAAAAByAEgAAAAAckBAQAAAAEBCAAAvgEAMAEIAAC-AQAwB7IBAQC2AgAhxAEBALYCACHFAQEAtgIAIcYBAQC2AgAhxwEBALYCACHIASAAwAIAIckBAQC2AgAhAgAAALQBACAIAADBAQAgB7IBAQC2AgAhxAEBALYCACHFAQEAtgIAIcYBAQC2AgAhxwEBALYCACHIASAAwAIAIckBAQC2AgAhAgAAALcBACAIAADDAQAgAgAAALcBACAIAADDAQAgAwAAALQBACAPAAC8AQAgEAAAwQEAIAEAAAC0AQAgAQAAALcBACADFQAAvQIAIBYAAL8CACAXAAC-AgAgCq8BAACNAgAwsAEAAMoBABCxAQAAjQIAMLIBAQCAAgAhxAEBAIACACHFAQEAgAIAIcYBAQCAAgAhxwEBAIACACHIASAAjgIAIckBAQCAAgAhAwAAALcBACADAADJAQAwFAAAygEAIAMAAAC3AQAgAwAAuAEAMAQAALQBACAGrwEAAIsCADCwAQAA0AEAELEBAACLAgAwsgEBAAAAAcIBAQCFAgAhwwEEAIwCACEBAAAAzQEAIAEAAADNAQAgBq8BAACLAgAwsAEAANABABCxAQAAiwIAMLIBAQCFAgAhwgEBAIUCACHDAQQAjAIAIQADAAAA0AEAIAMAANEBADAEAADNAQAgAwAAANABACADAADRAQAwBAAAzQEAIAMAAADQAQAgAwAA0QEAMAQAAM0BACADsgEBAAAAAcIBAQAAAAHDAQQAAAABAQgAANUBACADsgEBAAAAAcIBAQAAAAHDAQQAAAABAQgAANcBADABCAAA1wEAMAOyAQEAtgIAIcIBAQC2AgAhwwEEALwCACECAAAAzQEAIAgAANoBACADsgEBALYCACHCAQEAtgIAIcMBBAC8AgAhAgAAANABACAIAADcAQAgAgAAANABACAIAADcAQAgAwAAAM0BACAPAADVAQAgEAAA2gEAIAEAAADNAQAgAQAAANABACAFFQAAtwIAIBYAALoCACAXAAC5AgAgKwAAuAIAICwAALsCACAGrwEAAIYCADCwAQAA4wEAELEBAACGAgAwsgEBAIACACHCAQEAgAIAIcMBBACHAgAhAwAAANABACADAADiAQAwFAAA4wEAIAMAAADQAQAgAwAA0QEAMAQAAM0BACAIrwEAAIQCADCwAQAA6QEAELEBAACEAgAwsgEBAAAAAbMBAQCFAgAhtAEBAIUCACG1AQEAhQIAIbYBAQCFAgAhAQAAAOYBACABAAAA5gEAIAivAQAAhAIAMLABAADpAQAQsQEAAIQCADCyAQEAhQIAIbMBAQCFAgAhtAEBAIUCACG1AQEAhQIAIbYBAQCFAgAhAAMAAADpAQAgAwAA6gEAMAQAAOYBACADAAAA6QEAIAMAAOoBADAEAADmAQAgAwAAAOkBACADAADqAQAwBAAA5gEAIAWyAQEAAAABswEBAAAAAbQBAQAAAAG1AQEAAAABtgEBAAAAAQEIAADuAQAgBbIBAQAAAAGzAQEAAAABtAEBAAAAAbUBAQAAAAG2AQEAAAABAQgAAPABADABCAAA8AEAMAWyAQEAtgIAIbMBAQC2AgAhtAEBALYCACG1AQEAtgIAIbYBAQC2AgAhAgAAAOYBACAIAADzAQAgBbIBAQC2AgAhswEBALYCACG0AQEAtgIAIbUBAQC2AgAhtgEBALYCACECAAAA6QEAIAgAAPUBACACAAAA6QEAIAgAAPUBACADAAAA5gEAIA8AAO4BACAQAADzAQAgAQAAAOYBACABAAAA6QEAIAMVAACzAgAgFgAAtQIAIBcAALQCACAIrwEAAP8BADCwAQAA_AEAELEBAAD_AQAwsgEBAIACACGzAQEAgAIAIbQBAQCAAgAhtQEBAIACACG2AQEAgAIAIQMAAADpAQAgAwAA-wEAMBQAAPwBACADAAAA6QEAIAMAAOoBADAEAADmAQAgCK8BAAD_AQAwsAEAAPwBABCxAQAA_wEAMLIBAQCAAgAhswEBAIACACG0AQEAgAIAIbUBAQCAAgAhtgEBAIACACEOFQAAggIAIBYAAIMCACAXAACDAgAgtwEBAAAAAbgBAQAAAAS5AQEAAAAEugEBAAAAAbsBAQAAAAG8AQEAAAABvQEBAAAAAb4BAQAAAAG_AQEAAAABwAEBAAAAAcEBAQCBAgAhDhUAAIICACAWAACDAgAgFwAAgwIAILcBAQAAAAG4AQEAAAAEuQEBAAAABLoBAQAAAAG7AQEAAAABvAEBAAAAAb0BAQAAAAG-AQEAAAABvwEBAAAAAcABAQAAAAHBAQEAgQIAIQi3AQIAAAABuAECAAAABLkBAgAAAAS6AQIAAAABuwECAAAAAbwBAgAAAAG9AQIAAAABwQECAIICACELtwEBAAAAAbgBAQAAAAS5AQEAAAAEugEBAAAAAbsBAQAAAAG8AQEAAAABvQEBAAAAAb4BAQAAAAG_AQEAAAABwAEBAAAAAcEBAQCDAgAhCK8BAACEAgAwsAEAAOkBABCxAQAAhAIAMLIBAQCFAgAhswEBAIUCACG0AQEAhQIAIbUBAQCFAgAhtgEBAIUCACELtwEBAAAAAbgBAQAAAAS5AQEAAAAEugEBAAAAAbsBAQAAAAG8AQEAAAABvQEBAAAAAb4BAQAAAAG_AQEAAAABwAEBAAAAAcEBAQCDAgAhBq8BAACGAgAwsAEAAOMBABCxAQAAhgIAMLIBAQCAAgAhwgEBAIACACHDAQQAhwIAIQ0VAACCAgAgFgAAigIAIBcAAIoCACArAACJAgAgLAAAigIAILcBBAAAAAG4AQQAAAAEuQEEAAAABLoBBAAAAAG7AQQAAAABvAEEAAAAAb0BBAAAAAHBAQQAiAIAIQ0VAACCAgAgFgAAigIAIBcAAIoCACArAACJAgAgLAAAigIAILcBBAAAAAG4AQQAAAAEuQEEAAAABLoBBAAAAAG7AQQAAAABvAEEAAAAAb0BBAAAAAHBAQQAiAIAIQi3AQgAAAABuAEIAAAABLkBCAAAAAS6AQgAAAABuwEIAAAAAbwBCAAAAAG9AQgAAAABwQEIAIkCACEItwEEAAAAAbgBBAAAAAS5AQQAAAAEugEEAAAAAbsBBAAAAAG8AQQAAAABvQEEAAAAAcEBBACKAgAhBq8BAACLAgAwsAEAANABABCxAQAAiwIAMLIBAQCFAgAhwgEBAIUCACHDAQQAjAIAIQi3AQQAAAABuAEEAAAABLkBBAAAAAS6AQQAAAABuwEEAAAAAbwBBAAAAAG9AQQAAAABwQEEAIoCACEKrwEAAI0CADCwAQAAygEAELEBAACNAgAwsgEBAIACACHEAQEAgAIAIcUBAQCAAgAhxgEBAIACACHHAQEAgAIAIcgBIACOAgAhyQEBAIACACEFFQAAggIAIBYAAJACACAXAACQAgAgtwEgAAAAAcEBIACPAgAhBRUAAIICACAWAACQAgAgFwAAkAIAILcBIAAAAAHBASAAjwIAIQK3ASAAAAABwQEgAJACACEKrwEAAJECADCwAQAAtwEAELEBAACRAgAwsgEBAIUCACHEAQEAhQIAIcUBAQCFAgAhxgEBAIUCACHHAQEAhQIAIcgBIACSAgAhyQEBAIUCACECtwEgAAAAAcEBIACQAgAhCq8BAACTAgAwsAEAALEBABCxAQAAkwIAMLIBAQCAAgAhswEBAIACACHKAQEAgAIAIcsBAQCAAgAhzAEAAJQCACDNASAAjgIAIc4BAgCVAgAhDxUAAIICACAWAACXAgAgFwAAlwIAILcBgAAAAAG6AYAAAAABuwGAAAAAAbwBgAAAAAG9AYAAAAABwQGAAAAAAc8BAQAAAAHQAQEAAAAB0QEBAAAAAdIBgAAAAAHTAYAAAAAB1AGAAAAAAQ0VAACCAgAgFgAAggIAIBcAAIICACArAACJAgAgLAAAggIAILcBAgAAAAG4AQIAAAAEuQECAAAABLoBAgAAAAG7AQIAAAABvAECAAAAAb0BAgAAAAHBAQIAlgIAIQ0VAACCAgAgFgAAggIAIBcAAIICACArAACJAgAgLAAAggIAILcBAgAAAAG4AQIAAAAEuQECAAAABLoBAgAAAAG7AQIAAAABvAECAAAAAb0BAgAAAAHBAQIAlgIAIQy3AYAAAAABugGAAAAAAbsBgAAAAAG8AYAAAAABvQGAAAAAAcEBgAAAAAHPAQEAAAAB0AEBAAAAAdEBAQAAAAHSAYAAAAAB0wGAAAAAAdQBgAAAAAEKrwEAAJgCADCwAQAAngEAELEBAACYAgAwsgEBAIUCACGzAQEAhQIAIcoBAQCFAgAhywEBAIUCACHMAQAAmQIAIM0BIACSAgAhzgECAJoCACEMtwGAAAAAAboBgAAAAAG7AYAAAAABvAGAAAAAAb0BgAAAAAHBAYAAAAABzwEBAAAAAdABAQAAAAHRAQEAAAAB0gGAAAAAAdMBgAAAAAHUAYAAAAABCLcBAgAAAAG4AQIAAAAEuQECAAAABLoBAgAAAAG7AQIAAAABvAECAAAAAb0BAgAAAAHBAQIAggIAIQyvAQAAmwIAMLABAACYAQAQsQEAAJsCADCyAQEAgAIAIdUBAQCAAgAh1gEBAIACACHXAQEAgAIAIdgBAgCVAgAh2QECAJUCACHaAQEAgAIAIdsBAQCAAgAh3AEBAIACACEMrwEAAJwCADCwAQAAhQEAELEBAACcAgAwsgEBAIUCACHVAQEAhQIAIdYBAQCFAgAh1wEBAIUCACHYAQIAmgIAIdkBAgCaAgAh2gEBAIUCACHbAQEAhQIAIdwBAQCFAgAhE68BAACdAgAwsAEAAH8AELEBAACdAgAwsgEBAIACACHVAQEAgAIAIdYBAQCAAgAh3QEBAIACACHeAQEAgAIAId8BAQCeAgAh4AEBAJ4CACHhAQEAngIAIeIBAQCAAgAh4wEBAIACACHkAQEAgAIAIeUBAQCAAgAh5gEBAIACACHnAQEAgAIAIegBAQCAAgAh6QEEAIcCACEOFQAAoAIAIBYAAKECACAXAAChAgAgtwEBAAAAAbgBAQAAAAW5AQEAAAAFugEBAAAAAbsBAQAAAAG8AQEAAAABvQEBAAAAAb4BAQAAAAG_AQEAAAABwAEBAAAAAcEBAQCfAgAhDhUAAKACACAWAAChAgAgFwAAoQIAILcBAQAAAAG4AQEAAAAFuQEBAAAABboBAQAAAAG7AQEAAAABvAEBAAAAAb0BAQAAAAG-AQEAAAABvwEBAAAAAcABAQAAAAHBAQEAnwIAIQi3AQIAAAABuAECAAAABbkBAgAAAAW6AQIAAAABuwECAAAAAbwBAgAAAAG9AQIAAAABwQECAKACACELtwEBAAAAAbgBAQAAAAW5AQEAAAAFugEBAAAAAbsBAQAAAAG8AQEAAAABvQEBAAAAAb4BAQAAAAG_AQEAAAABwAEBAAAAAcEBAQChAgAhDq8BAACiAgAwsAEAAGkAELEBAACiAgAwsgEBAIACACGzAQEAgAIAIekBBACHAgAh6gEBAIACACHrAQIAlQIAIewBAgCVAgAh7QEBAIACACHuAQAAowIAIO8BAQCAAgAh8AEgAI4CACHxASAAjgIAIQS3AQEAAAAF8gEBAAAAAfMBAQAAAAT0AQEAAAAEDq8BAACkAgAwsAEAAFYAELEBAACkAgAwsgEBAIUCACGzAQEAhQIAIekBBACMAgAh6gEBAIUCACHrAQIAmgIAIewBAgCaAgAh7QEBAIUCACHuAQAAowIAIO8BAQCFAgAh8AEgAJICACHxASAAkgIAIQ2vAQAApQIAMLABAABQABCxAQAApQIAMLIBAQCAAgAhswEBAIACACG1AQEAgAIAIfUBAQCAAgAh9gEBAIACACH3AQgApgIAIfgBAgCVAgAh-QEBAIACACH6AQEAgAIAIfsBAACjAgAgDRUAAIICACAWAACJAgAgFwAAiQIAICsAAIkCACAsAACJAgAgtwEIAAAAAbgBCAAAAAS5AQgAAAAEugEIAAAAAbsBCAAAAAG8AQgAAAABvQEIAAAAAcEBCACnAgAhDRUAAIICACAWAACJAgAgFwAAiQIAICsAAIkCACAsAACJAgAgtwEIAAAAAbgBCAAAAAS5AQgAAAAEugEIAAAAAbsBCAAAAAG8AQgAAAABvQEIAAAAAcEBCACnAgAhDhsAAKoCACCvAQAAqAIAMLABAAA9ABCxAQAAqAIAMLIBAQCFAgAhswEBAIUCACG1AQEAhQIAIfUBAQCFAgAh9gEBAIUCACH3AQgAqQIAIfgBAgCaAgAh-QEBAIUCACH6AQEAhQIAIfsBAACjAgAgCLcBCAAAAAG4AQgAAAAEuQEIAAAABLoBCAAAAAG7AQgAAAABvAEIAAAAAb0BCAAAAAHBAQgAiQIAIQP8AQAAHAAg_QEAABwAIP4BAAAcACAPrwEAAKsCADCwAQAANwAQsQEAAKsCADCyAQEAgAIAIbMBAQCAAgAhtQEBAIACACHfAQEAngIAIf8BAQCAAgAhgAIBAIACACGBAgEAgAIAIYICAgCVAgAhgwIEAIcCACGEAgIAlQIAIYUCAQCAAgAhhgIBAIACACEQGwAAqgIAIK8BAACsAgAwsAEAACQAELEBAACsAgAwsgEBAIUCACGzAQEAhQIAIbUBAQCFAgAh3wEBAK0CACH_AQEAhQIAIYACAQCFAgAhgQIBAIUCACGCAgIAmgIAIYMCBACMAgAhhAICAJoCACGFAgEAhQIAIYYCAQCFAgAhC7cBAQAAAAG4AQEAAAAFuQEBAAAABboBAQAAAAG7AQEAAAABvAEBAAAAAb0BAQAAAAG-AQEAAAABvwEBAAAAAcABAQAAAAHBAQEAoQIAIRUaAACvAgAgHAAAsAIAIK8BAACuAgAwsAEAABwAELEBAACuAgAwsgEBAIUCACHVAQEAhQIAIdYBAQCFAgAh3QEBAIUCACHeAQEAhQIAId8BAQCtAgAh4AEBAK0CACHhAQEArQIAIeIBAQCFAgAh4wEBAIUCACHkAQEAhQIAIeUBAQCFAgAh5gEBAIUCACHnAQEAhQIAIegBAQCFAgAh6QEEAIwCACESGwAAqgIAIK8BAACsAgAwsAEAACQAELEBAACsAgAwsgEBAIUCACGzAQEAhQIAIbUBAQCFAgAh3wEBAK0CACH_AQEAhQIAIYACAQCFAgAhgQIBAIUCACGCAgIAmgIAIYMCBACMAgAhhAICAJoCACGFAgEAhQIAIYYCAQCFAgAhjAIAACQAII0CAAAkACAQGwAAqgIAIK8BAACoAgAwsAEAAD0AELEBAACoAgAwsgEBAIUCACGzAQEAhQIAIbUBAQCFAgAh9QEBAIUCACH2AQEAhQIAIfcBCACpAgAh-AECAJoCACH5AQEAhQIAIfoBAQCFAgAh-wEAAKMCACCMAgAAPQAgjQIAAD0AIAyvAQAAsQIAMLABAAAXABCxAQAAsQIAMLIBAQCAAgAhswEBAIACACGAAgEAgAIAIYECAQCAAgAhhwIBAIACACGIAgEAgAIAIYkCAQCAAgAhigIBAIACACGLAgEAgAIAIQyvAQAAsgIAMLABAAAEABCxAQAAsgIAMLIBAQCFAgAhswEBAIUCACGAAgEAhQIAIYECAQCFAgAhhwIBAIUCACGIAgEAhQIAIYkCAQCFAgAhigIBAIUCACGLAgEAhQIAIQAAAAGRAgEAAAABAAAAAAAFkQIEAAAAAZgCBAAAAAGZAgQAAAABmgIEAAAAAZsCBAAAAAEAAAABkQIgAAAAAQAAAAAABZECAgAAAAGYAgIAAAABmQICAAAAAZoCAgAAAAGbAgIAAAABAAAAAAAAAAAAAAABkQIBAAAAAQUPAACOAwAgEAAAlAMAII4CAACPAwAgjwIAAJMDACCUAgAAGgAgBQ8AAIwDACAQAACRAwAgjgIAAI0DACCPAgAAkAMAIJQCAAA6ACADDwAAjgMAII4CAACPAwAglAIAABoAIAMPAACMAwAgjgIAAI0DACCUAgAAOgAgAAAAAAACkQIBAAAABJcCAQAAAAUBkQIBAAAABAAAAAAABZECCAAAAAGYAggAAAABmQIIAAAAAZoCCAAAAAGbAggAAAABApECAQAAAASXAgEAAAAFCw8AAOYCADAQAADrAgAwjgIAAOcCADCPAgAA6AIAMJACAADpAgAgkQIAAOoCADCSAgAA6gIAMJMCAADqAgAwlAIAAOoCADCVAgAA7AIAMJYCAADtAgAwEBoAANUCACCyAQEAAAAB1QEBAAAAAdYBAQAAAAHdAQEAAAAB3gEBAAAAAd8BAQAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHkAQEAAAAB5QEBAAAAAeYBAQAAAAHnAQEAAAAB6AEBAAAAAekBBAAAAAECAAAAHgAgDwAA8QIAIAMAAAAeACAPAADxAgAgEAAA8AIAIAEIAACLAwAwFRoAAK8CACAcAACwAgAgrwEAAK4CADCwAQAAHAAQsQEAAK4CADCyAQEAAAAB1QEBAIUCACHWAQEAhQIAId0BAQCFAgAh3gEBAIUCACHfAQEArQIAIeABAQCtAgAh4QEBAK0CACHiAQEAhQIAIeMBAQCFAgAh5AEBAIUCACHlAQEAhQIAIeYBAQCFAgAh5wEBAIUCACHoAQEAhQIAIekBBACMAgAhAgAAAB4AIAgAAPACACACAAAA7gIAIAgAAO8CACATrwEAAO0CADCwAQAA7gIAELEBAADtAgAwsgEBAIUCACHVAQEAhQIAIdYBAQCFAgAh3QEBAIUCACHeAQEAhQIAId8BAQCtAgAh4AEBAK0CACHhAQEArQIAIeIBAQCFAgAh4wEBAIUCACHkAQEAhQIAIeUBAQCFAgAh5gEBAIUCACHnAQEAhQIAIegBAQCFAgAh6QEEAIwCACETrwEAAO0CADCwAQAA7gIAELEBAADtAgAwsgEBAIUCACHVAQEAhQIAIdYBAQCFAgAh3QEBAIUCACHeAQEAhQIAId8BAQCtAgAh4AEBAK0CACHhAQEArQIAIeIBAQCFAgAh4wEBAIUCACHkAQEAhQIAIeUBAQCFAgAh5gEBAIUCACHnAQEAhQIAIegBAQCFAgAh6QEEAIwCACEPsgEBALYCACHVAQEAtgIAIdYBAQC2AgAh3QEBALYCACHeAQEAtgIAId8BAQDSAgAh4AEBANICACHhAQEA0gIAIeIBAQC2AgAh5AEBALYCACHlAQEAtgIAIeYBAQC2AgAh5wEBALYCACHoAQEAtgIAIekBBAC8AgAhEBoAANMCACCyAQEAtgIAIdUBAQC2AgAh1gEBALYCACHdAQEAtgIAId4BAQC2AgAh3wEBANICACHgAQEA0gIAIeEBAQDSAgAh4gEBALYCACHkAQEAtgIAIeUBAQC2AgAh5gEBALYCACHnAQEAtgIAIegBAQC2AgAh6QEEALwCACEQGgAA1QIAILIBAQAAAAHVAQEAAAAB1gEBAAAAAd0BAQAAAAHeAQEAAAAB3wEBAAAAAeABAQAAAAHhAQEAAAAB4gEBAAAAAeQBAQAAAAHlAQEAAAAB5gEBAAAAAecBAQAAAAHoAQEAAAAB6QEEAAAAAQGRAgEAAAAEBA8AAOYCADCOAgAA5wIAMJACAADpAgAglAIAAOoCADAAAAAAAAALDwAA-wIAMBAAAP8CADCOAgAA_AIAMI8CAAD9AgAwkAIAAP4CACCRAgAA6gIAMJICAADqAgAwkwIAAOoCADCUAgAA6gIAMJUCAACAAwAwlgIAAO0CADAQHAAA1gIAILIBAQAAAAHWAQEAAAAB3QEBAAAAAd4BAQAAAAHfAQEAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEBAAAAAeQBAQAAAAHlAQEAAAAB5gEBAAAAAecBAQAAAAHoAQEAAAAB6QEEAAAAAQIAAAAeACAPAACDAwAgAwAAAB4AIA8AAIMDACAQAACCAwAgAQgAAIoDADACAAAAHgAgCAAAggMAIAIAAADuAgAgCAAAgQMAIA-yAQEAtgIAIdYBAQC2AgAh3QEBALYCACHeAQEAtgIAId8BAQDSAgAh4AEBANICACHhAQEA0gIAIeIBAQC2AgAh4wEBALYCACHkAQEAtgIAIeUBAQC2AgAh5gEBALYCACHnAQEAtgIAIegBAQC2AgAh6QEEALwCACEQHAAA1AIAILIBAQC2AgAh1gEBALYCACHdAQEAtgIAId4BAQC2AgAh3wEBANICACHgAQEA0gIAIeEBAQDSAgAh4gEBALYCACHjAQEAtgIAIeQBAQC2AgAh5QEBALYCACHmAQEAtgIAIecBAQC2AgAh6AEBALYCACHpAQQAvAIAIRAcAADWAgAgsgEBAAAAAdYBAQAAAAHdAQEAAAAB3gEBAAAAAd8BAQAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHjAQEAAAAB5AEBAAAAAeUBAQAAAAHmAQEAAAAB5wEBAAAAAegBAQAAAAHpAQQAAAABBA8AAPsCADCOAgAA_AIAMJACAAD-AgAglAIAAOoCADACGwAA9AIAIN8BAADMAgAgARsAAPQCACAAAAAPsgEBAAAAAdYBAQAAAAHdAQEAAAAB3gEBAAAAAd8BAQAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHjAQEAAAAB5AEBAAAAAeUBAQAAAAHmAQEAAAAB5wEBAAAAAegBAQAAAAHpAQQAAAABD7IBAQAAAAHVAQEAAAAB1gEBAAAAAd0BAQAAAAHeAQEAAAAB3wEBAAAAAeABAQAAAAHhAQEAAAAB4gEBAAAAAeQBAQAAAAHlAQEAAAAB5gEBAAAAAecBAQAAAAHoAQEAAAAB6QEEAAAAAQqyAQEAAAABswEBAAAAAbUBAQAAAAH1AQEAAAAB9gEBAAAAAfcBCAAAAAH4AQIAAAAB-QEBAAAAAfoBAQAAAAH7AQAA8gIAIAIAAAA6ACAPAACMAwAgDLIBAQAAAAGzAQEAAAABtQEBAAAAAd8BAQAAAAH_AQEAAAABgAIBAAAAAYECAQAAAAGCAgIAAAABgwIEAAAAAYQCAgAAAAGFAgEAAAABhgIBAAAAAQIAAAAaACAPAACOAwAgAwAAAD0AIA8AAIwDACAQAACSAwAgDAAAAD0AIAgAAJIDACCyAQEAtgIAIbMBAQC2AgAhtQEBALYCACH1AQEAtgIAIfYBAQC2AgAh9wEIAOMCACH4AQIAxgIAIfkBAQC2AgAh-gEBALYCACH7AQAA5AIAIAqyAQEAtgIAIbMBAQC2AgAhtQEBALYCACH1AQEAtgIAIfYBAQC2AgAh9wEIAOMCACH4AQIAxgIAIfkBAQC2AgAh-gEBALYCACH7AQAA5AIAIAMAAAAkACAPAACOAwAgEAAAlQMAIA4AAAAkACAIAACVAwAgsgEBALYCACGzAQEAtgIAIbUBAQC2AgAh3wEBANICACH_AQEAtgIAIYACAQC2AgAhgQIBALYCACGCAgIAxgIAIYMCBAC8AgAhhAICAMYCACGFAgEAtgIAIYYCAQC2AgAhDLIBAQC2AgAhswEBALYCACG1AQEAtgIAId8BAQDSAgAh_wEBALYCACGAAgEAtgIAIYECAQC2AgAhggICAMYCACGDAgQAvAIAIYQCAgDGAgAhhQIBALYCACGGAgEAtgIAIQAAAAADFQAGFgAHFwAIAAAAAxUABhYABxcACAIVAA4bHwsCGgAKHAAMAhUADRsgCwEbIQABGyIAAAAFFQASFgAVFwAWKwATLAAUAAAAAAAFFQASFgAVFwAWKwATLAAUAAAFFQAbFgAeFwAfKwAcLAAdAAAAAAAFFQAbFgAeFwAfKwAcLAAdAAAABRUAJRYAKBcAKSsAJiwAJwAAAAAABRUAJRYAKBcAKSsAJiwAJwIaAAocAAwCGgAKHAAMBRUALhYAMRcAMisALywAMAAAAAAABRUALhYAMRcAMisALywAMAAAAAUVADgWADsXADwrADksADoAAAAAAAUVADgWADsXADwrADksADoAAAAFFQBCFgBFFwBGKwBDLABEAAAAAAAFFQBCFgBFFwBGKwBDLABEAAAAAxUATBYATRcATgAAAAMVAEwWAE0XAE4AAAAFFQBUFgBXFwBYKwBVLABWAAAAAAAFFQBUFgBXFwBYKwBVLABWAAAAAxUAXhYAXxcAYAAAAAMVAF4WAF8XAGABAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIYGAUZGQkdGwoeIwofJgogJwohKAoiKgojLAIkLQ8lLwomMQInMhAoMwopNAoqNQItOBEuORcvOwwwPAwxPwwyQAwzQQw0Qww1RQI2Rhg3SAw4SgI5Sxk6TAw7TQw8TgI9URo-UiA_VCFAVSFBWCFCWSFDWiFEXCFFXgJGXyJHYSFIYwJJZCNKZSFLZiFMZwJNaiROaypPbAtQbQtRbgtSbwtTcAtUcgtVdAJWdStXdwtYeQJZeixaewtbfAtcfQJdgAEtXoEBM1-DATRghAE0YYcBNGKIATRjiQE0ZIsBNGWNAQJmjgE1Z5ABNGiSAQJpkwE2apQBNGuVATRslgECbZkBN26aAT1vnAE-cJ0BPnGgAT5yoQE-c6IBPnSkAT51pgECdqcBP3epAT54qwECeawBQHqtAT57rgE-fK8BAn2yAUF-swFHf7UBSIABtgFIgQG5AUiCAboBSIMBuwFIhAG9AUiFAb8BAoYBwAFJhwHCAUiIAcQBAokBxQFKigHGAUiLAccBSIwByAECjQHLAUuOAcwBT48BzgFQkAHPAVCRAdIBUJIB0wFQkwHUAVCUAdYBUJUB2AEClgHZAVGXAdsBUJgB3QECmQHeAVKaAd8BUJsB4AFQnAHhAQKdAeQBU54B5QFZnwHnAVqgAegBWqEB6wFaogHsAVqjAe0BWqQB7wFapQHxAQKmAfIBW6cB9AFaqAH2AQKpAfcBXKoB-AFaqwH5AVqsAfoBAq0B_QFdrgH-AWE"
    };
    config2.compilerWasm = {
      getRuntime: /* @__PURE__ */ __name(async () => require_query_compiler_fast_bg(), "getRuntime"),
      getQueryCompilerWasmModule: /* @__PURE__ */ __name(async () => {
        const loader = (await Promise.resolve().then(() => (init_wasm_worker_loader(), wasm_worker_loader_exports))).default;
        const compiler = (await loader).default;
        return compiler;
      }, "getQueryCompilerWasmModule"),
      importName: "./query_compiler_fast_bg.js"
    };
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug3.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient2 = getPrismaClient2(config2);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
  }
});

// node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/.prisma/client/default.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = { ...require_edge() };
  }
});

// node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "node_modules/.pnpm/@prisma+client@7.8.0_prisma_c0688981f32c309d1de8339543b52172/node_modules/@prisma/client/default.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = {
      ...require_default()
    };
  }
});

// .wrangler/tmp/bundle-LVO85O/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-LVO85O/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/hono.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/hono-base.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/compose.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context2.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context2, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/context.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/request.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/http-exception.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/request/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/utils/body.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  if (/(?:^|\.)__proto__\./.test(key)) {
    return;
  }
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/utils/url.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v2, i, a2) => a2.indexOf(v2) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name2 = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name2 = _decodeURI(name2);
    }
    keyIndex = nextKeyIndex;
    if (name2 === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name2] && Array.isArray(results[name2]))) {
        results[name2] = [];
      }
      ;
      results[name2].push(value);
    } else {
      results[name2] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name2) {
    if (name2) {
      return this.raw.headers.get(name2) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  }, "#cachedBody");
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * `.bytes()` parses the request body as a `Uint8Array`.
   *
   * @see {@link https://hono.dev/docs/api/request#bytes}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.bytes()
   * })
   * ```
   */
  bytes() {
    return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/utils/html.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context2 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var createResponseInstance = /* @__PURE__ */ __name((body, init2) => new Response(body, init2), "createResponseInstance");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v2] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v2);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = /* @__PURE__ */ __name((name2, value, options) => {
    if (this.finalized) {
      this.#res = createResponseInstance(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name2);
    } else if (options?.append) {
      headers.append(name2, value);
    } else {
      headers.set(name2, value);
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#status = status;
  }, "status");
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v2] of Object.entries(headers)) {
        if (typeof v2 === "string") {
          responseHeaders.set(k, v2);
        } else {
          responseHeaders.delete(k);
          for (const v22 of v2) {
            responseHeaders.append(k, v22);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = /* @__PURE__ */ __name((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  }, "text");
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = /* @__PURE__ */ __name((location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/utils/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class _Hono {
  static {
    __name(this, "_Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p2 of [path].flat()) {
        this.#path = p2;
        for (const m2 of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m2.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler, r.basePath);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = this.getPath(request).slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler, baseRoutePath) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = {
      basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
      path,
      method,
      handler
    };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context2.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/reg-exp-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/reg-exp-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/reg-exp-router/matcher.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = /* @__PURE__ */ __name(((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }), "match2");
  this.match = match2;
  return match2(method, path);
}
__name(match, "match");

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/reg-exp-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a2, b2) {
  if (a2.length === 1) {
    return b2.length === 1 ? a2 < b2 ? -1 : 1 : -1;
  }
  if (b2.length === 1) {
    return 1;
  }
  if (a2 === ONLY_WILDCARD_REG_EXP_STR || a2 === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b2 === ONLY_WILDCARD_REG_EXP_STR || b2 === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a2 === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b2 === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a2.length === b2.length ? a2 < b2 ? -1 : 1 : b2.length - a2.length;
}
__name(compareKey, "compareKey");
var Node = class _Node {
  static {
    __name(this, "_Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context2, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name2 = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name2 && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name2 !== "") {
          node.#varIndex = context2.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name2 !== "") {
        paramMap.push([name2, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context2, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/reg-exp-router/trie.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m2) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m2];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a2, b2) => b2.length - a2.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m2) => {
          middleware[m2][path] ||= findMiddleware(middleware[m2], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(middleware[m2]).forEach((p2) => {
            re.test(p2) && middleware[m2][p2].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(routes[m2]).forEach(
            (p2) => re.test(p2) && routes[m2][p2].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          routes[m2][path2] ||= [
            ...findMiddleware(middleware[m2], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m2][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/reg-exp-router/prepared-router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/smart-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/smart-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init2) {
    this.#routers = init2.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router2 = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router2.add(...routes[i2]);
        }
        res = router2.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router2.match.bind(router2);
      this.#routers = [router2];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/trie-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/trie-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/trie-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParams = /* @__PURE__ */ Object.create(null);
var hasChildren = /* @__PURE__ */ __name((children) => {
  for (const _ in children) {
    return true;
  }
  return false;
}, "hasChildren");
var Node2 = class _Node2 {
  static {
    __name(this, "_Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m2 = /* @__PURE__ */ Object.create(null);
      m2[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m2];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p2 = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p2, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p2;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v2, i, a2) => a2.indexOf(v2) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m2 = node.#methods[i];
      const handlerSet = m2[method] || m2[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            }
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              this.#pushHandlerSets(handlerSets, astNode, method, node.#params);
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name2, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          if (matcher instanceof RegExp) {
            if (partOffsets === null) {
              partOffsets = new Array(len);
              let offset = path[0] === "/" ? 1 : 0;
              for (let p2 = 0; p2 < len; p2++) {
                partOffsets[p2] = offset;
                offset += parts[p2].length + 1;
              }
            }
            const restPathString = path.substring(partOffsets[i]);
            const m2 = matcher.exec(restPathString);
            if (m2) {
              params[name2] = m2[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (hasChildren(child.#children)) {
                child.#params = params;
                const componentCount = m2[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name2] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  params,
                  node.#params
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a2, b2) => {
        return a2.score - b2.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// node_modules/.pnpm/hono@4.12.22/node_modules/hono/dist/middleware/cors/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var cors = /* @__PURE__ */ __name((options) => {
  const opts = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: [],
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        if (opts.credentials) {
          return (origin) => origin || null;
        }
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*" || opts.credentials) {
        set("Vary", "Origin");
      }
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*" || opts.credentials) {
      c.header("Vary", "Origin", { append: true });
    }
  }, "cors2");
}, "cors");

// src/routes/api.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/controllers/spa.controller.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/config/database.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@prisma+adapter-neon@7.8.0/node_modules/@prisma/adapter-neon/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@neondatabase+serverless@1.1.0/node_modules/@neondatabase/serverless/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var So = Object.create;
var Ie = Object.defineProperty;
var Eo = Object.getOwnPropertyDescriptor;
var Ao = Object.getOwnPropertyNames;
var Co = Object.getPrototypeOf;
var _o = Object.prototype.hasOwnProperty;
var Io = /* @__PURE__ */ __name((r, e, t) => e in r ? Ie(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, "Io");
var a = /* @__PURE__ */ __name((r, e) => Ie(r, "name", { value: e, configurable: true }), "a");
var G = /* @__PURE__ */ __name((r, e) => () => (r && (e = r(r = 0)), e), "G");
var T = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "T");
var ie = /* @__PURE__ */ __name((r, e) => {
  for (var t in e) Ie(r, t, {
    get: e[t],
    enumerable: true
  });
}, "ie");
var Dn = /* @__PURE__ */ __name((r, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of Ao(e)) !_o.call(r, i) && i !== t && Ie(r, i, { get: /* @__PURE__ */ __name(() => e[i], "get"), enumerable: !(n = Eo(e, i)) || n.enumerable });
  return r;
}, "Dn");
var Se = /* @__PURE__ */ __name((r, e, t) => (t = r != null ? So(Co(r)) : {}, Dn(e || !r || !r.__esModule ? Ie(t, "default", { value: r, enumerable: true }) : t, r)), "Se");
var O = /* @__PURE__ */ __name((r) => Dn(Ie({}, "__esModule", { value: true }), r), "O");
var E = /* @__PURE__ */ __name((r, e, t) => Io(r, typeof e != "symbol" ? e + "" : e, t), "E");
var Qn = T((lt) => {
  "use strict";
  p();
  lt.byteLength = Po;
  lt.toByteArray = Bo;
  lt.fromByteArray = ko;
  var ae = [], te = [], To = typeof Uint8Array < "u" ? Uint8Array : Array, qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (Ee = 0, On = qt.length; Ee < On; ++Ee) ae[Ee] = qt[Ee], te[qt.charCodeAt(Ee)] = Ee;
  var Ee, On;
  te[45] = 62;
  te[95] = 63;
  function qn(r) {
    var e = r.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var t = r.indexOf("=");
    t === -1 && (t = e);
    var n = t === e ? 0 : 4 - t % 4;
    return [t, n];
  }
  __name(qn, "qn");
  a(qn, "getLens");
  function Po(r) {
    var e = qn(r), t = e[0], n = e[1];
    return (t + n) * 3 / 4 - n;
  }
  __name(Po, "Po");
  a(Po, "byteLength");
  function Ro(r, e, t) {
    return (e + t) * 3 / 4 - t;
  }
  __name(Ro, "Ro");
  a(Ro, "_byteLength");
  function Bo(r) {
    var e, t = qn(r), n = t[0], i = t[1], s = new To(Ro(r, n, i)), o = 0, u = i > 0 ? n - 4 : n, c;
    for (c = 0; c < u; c += 4) e = te[r.charCodeAt(c)] << 18 | te[r.charCodeAt(c + 1)] << 12 | te[r.charCodeAt(c + 2)] << 6 | te[r.charCodeAt(c + 3)], s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255;
    return i === 2 && (e = te[r.charCodeAt(
      c
    )] << 2 | te[r.charCodeAt(c + 1)] >> 4, s[o++] = e & 255), i === 1 && (e = te[r.charCodeAt(c)] << 10 | te[r.charCodeAt(c + 1)] << 4 | te[r.charCodeAt(c + 2)] >> 2, s[o++] = e >> 8 & 255, s[o++] = e & 255), s;
  }
  __name(Bo, "Bo");
  a(Bo, "toByteArray");
  function Lo(r) {
    return ae[r >> 18 & 63] + ae[r >> 12 & 63] + ae[r >> 6 & 63] + ae[r & 63];
  }
  __name(Lo, "Lo");
  a(Lo, "tripletToBase64");
  function Fo(r, e, t) {
    for (var n, i = [], s = e; s < t; s += 3) n = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), i.push(Lo(n));
    return i.join("");
  }
  __name(Fo, "Fo");
  a(Fo, "encodeChunk");
  function ko(r) {
    for (var e, t = r.length, n = t % 3, i = [], s = 16383, o = 0, u = t - n; o < u; o += s) i.push(Fo(
      r,
      o,
      o + s > u ? u : o + s
    ));
    return n === 1 ? (e = r[t - 1], i.push(ae[e >> 2] + ae[e << 4 & 63] + "==")) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i.push(ae[e >> 10] + ae[e >> 4 & 63] + ae[e << 2 & 63] + "=")), i.join("");
  }
  __name(ko, "ko");
  a(ko, "fromByteArray");
});
var Nn = T((Qt) => {
  p();
  Qt.read = function(r, e, t, n, i) {
    var s, o, u = i * 8 - n - 1, c = (1 << u) - 1, l = c >> 1, f = -7, y = t ? i - 1 : 0, g = t ? -1 : 1, A = r[e + y];
    for (y += g, s = A & (1 << -f) - 1, A >>= -f, f += u; f > 0; s = s * 256 + r[e + y], y += g, f -= 8) ;
    for (o = s & (1 << -f) - 1, s >>= -f, f += n; f > 0; o = o * 256 + r[e + y], y += g, f -= 8) ;
    if (s === 0) s = 1 - l;
    else {
      if (s === c) return o ? NaN : (A ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, n), s = s - l;
    }
    return (A ? -1 : 1) * o * Math.pow(2, s - n);
  };
  Qt.write = function(r, e, t, n, i, s) {
    var o, u, c, l = s * 8 - i - 1, f = (1 << l) - 1, y = f >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = n ? 0 : s - 1, C = n ? 1 : -1, D = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, o = f) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + y >= 1 ? e += g / c : e += g * Math.pow(2, 1 - y), e * c >= 2 && (o++, c /= 2), o + y >= f ? (u = 0, o = f) : o + y >= 1 ? (u = (e * c - 1) * Math.pow(2, i), o = o + y) : (u = e * Math.pow(2, y - 1) * Math.pow(2, i), o = 0)); i >= 8; r[t + A] = u & 255, A += C, u /= 256, i -= 8) ;
    for (o = o << i | u, l += i; l > 0; r[t + A] = o & 255, A += C, o /= 256, l -= 8) ;
    r[t + A - C] |= D * 128;
  };
});
var ii = T((Be) => {
  "use strict";
  p();
  var Nt = Qn(), Pe = Nn(), Wn = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
  Be.Buffer = h;
  Be.SlowBuffer = Qo;
  Be.INSPECT_MAX_BYTES = 50;
  var ft = 2147483647;
  Be.kMaxLength = ft;
  h.TYPED_ARRAY_SUPPORT = Mo();
  !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function Mo() {
    try {
      let r = new Uint8Array(1), e = { foo: a(function() {
        return 42;
      }, "foo") };
      return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42;
    } catch {
      return false;
    }
  }
  __name(Mo, "Mo");
  a(Mo, "typedArraySupport");
  Object.defineProperty(h.prototype, "parent", { enumerable: true, get: a(function() {
    if (h.isBuffer(this)) return this.buffer;
  }, "get") });
  Object.defineProperty(h.prototype, "offset", { enumerable: true, get: a(function() {
    if (h.isBuffer(
      this
    )) return this.byteOffset;
  }, "get") });
  function he(r) {
    if (r > ft) throw new RangeError('The value "' + r + '" is invalid for option "size"');
    let e = new Uint8Array(r);
    return Object.setPrototypeOf(e, h.prototype), e;
  }
  __name(he, "he");
  a(he, "createBuffer");
  function h(r, e, t) {
    if (typeof r == "number") {
      if (typeof e == "string") throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      );
      return $t(r);
    }
    return Gn(r, e, t);
  }
  __name(h, "h");
  a(h, "Buffer");
  h.poolSize = 8192;
  function Gn(r, e, t) {
    if (typeof r == "string") return Do(r, e);
    if (ArrayBuffer.isView(r)) return Oo(r);
    if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
    if (ue(r, ArrayBuffer) || r && ue(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ue(r, SharedArrayBuffer) || r && ue(
      r.buffer,
      SharedArrayBuffer
    ))) return jt(r, e, t);
    if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    let n = r.valueOf && r.valueOf();
    if (n != null && n !== r) return h.from(n, e, t);
    let i = qo(r);
    if (i) return i;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return h.from(r[Symbol.toPrimitive]("string"), e, t);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
  }
  __name(Gn, "Gn");
  a(Gn, "from");
  h.from = function(r, e, t) {
    return Gn(r, e, t);
  };
  Object.setPrototypeOf(
    h.prototype,
    Uint8Array.prototype
  );
  Object.setPrototypeOf(h, Uint8Array);
  function Vn(r) {
    if (typeof r != "number") throw new TypeError(
      '"size" argument must be of type number'
    );
    if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  __name(Vn, "Vn");
  a(Vn, "assertSize");
  function Uo(r, e, t) {
    return Vn(r), r <= 0 ? he(r) : e !== void 0 ? typeof t == "string" ? he(r).fill(e, t) : he(r).fill(e) : he(r);
  }
  __name(Uo, "Uo");
  a(Uo, "alloc");
  h.alloc = function(r, e, t) {
    return Uo(r, e, t);
  };
  function $t(r) {
    return Vn(r), he(r < 0 ? 0 : Gt(r) | 0);
  }
  __name($t, "$t");
  a($t, "allocUnsafe");
  h.allocUnsafe = function(r) {
    return $t(
      r
    );
  };
  h.allocUnsafeSlow = function(r) {
    return $t(r);
  };
  function Do(r, e) {
    if ((typeof e != "string" || e === "") && (e = "utf8"), !h.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
    let t = zn(r, e) | 0, n = he(t), i = n.write(
      r,
      e
    );
    return i !== t && (n = n.slice(0, i)), n;
  }
  __name(Do, "Do");
  a(Do, "fromString");
  function Wt(r) {
    let e = r.length < 0 ? 0 : Gt(r.length) | 0, t = he(e);
    for (let n = 0; n < e; n += 1) t[n] = r[n] & 255;
    return t;
  }
  __name(Wt, "Wt");
  a(Wt, "fromArrayLike");
  function Oo(r) {
    if (ue(r, Uint8Array)) {
      let e = new Uint8Array(r);
      return jt(e.buffer, e.byteOffset, e.byteLength);
    }
    return Wt(r);
  }
  __name(Oo, "Oo");
  a(Oo, "fromArrayView");
  function jt(r, e, t) {
    if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return e === void 0 && t === void 0 ? n = new Uint8Array(r) : t === void 0 ? n = new Uint8Array(r, e) : n = new Uint8Array(
      r,
      e,
      t
    ), Object.setPrototypeOf(n, h.prototype), n;
  }
  __name(jt, "jt");
  a(jt, "fromArrayBuffer");
  function qo(r) {
    if (h.isBuffer(r)) {
      let e = Gt(r.length) | 0, t = he(e);
      return t.length === 0 || r.copy(t, 0, 0, e), t;
    }
    if (r.length !== void 0) return typeof r.length != "number" || zt(r.length) ? he(0) : Wt(r);
    if (r.type === "Buffer" && Array.isArray(r.data)) return Wt(r.data);
  }
  __name(qo, "qo");
  a(qo, "fromObject");
  function Gt(r) {
    if (r >= ft) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ft.toString(16) + " bytes");
    return r | 0;
  }
  __name(Gt, "Gt");
  a(Gt, "checked");
  function Qo(r) {
    return +r != r && (r = 0), h.alloc(+r);
  }
  __name(Qo, "Qo");
  a(Qo, "SlowBuffer");
  h.isBuffer = a(function(e) {
    return e != null && e._isBuffer === true && e !== h.prototype;
  }, "isBuffer");
  h.compare = a(function(e, t) {
    if (ue(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), ue(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(e) || !h.isBuffer(t)) throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    );
    if (e === t) return 0;
    let n = e.length, i = t.length;
    for (let s = 0, o = Math.min(n, i); s < o; ++s) if (e[s] !== t[s]) {
      n = e[s], i = t[s];
      break;
    }
    return n < i ? -1 : i < n ? 1 : 0;
  }, "compare");
  h.isEncoding = a(function(e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, "isEncoding");
  h.concat = a(function(e, t) {
    if (!Array.isArray(e)) throw new TypeError(
      '"list" argument must be an Array of Buffers'
    );
    if (e.length === 0) return h.alloc(0);
    let n;
    if (t === void 0)
      for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
    let i = h.allocUnsafe(t), s = 0;
    for (n = 0; n < e.length; ++n) {
      let o = e[n];
      if (ue(o, Uint8Array)) s + o.length > i.length ? (h.isBuffer(o) || (o = h.from(o)), o.copy(i, s)) : Uint8Array.prototype.set.call(i, o, s);
      else if (h.isBuffer(o)) o.copy(i, s);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      s += o.length;
    }
    return i;
  }, "concat");
  function zn(r, e) {
    if (h.isBuffer(r)) return r.length;
    if (ArrayBuffer.isView(r) || ue(r, ArrayBuffer)) return r.byteLength;
    if (typeof r != "string") throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r
    );
    let t = r.length, n = arguments.length > 2 && arguments[2] === true;
    if (!n && t === 0) return 0;
    let i = false;
    for (; ; ) switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
        return Ht(r).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return ni(r).length;
      default:
        if (i) return n ? -1 : Ht(r).length;
        e = ("" + e).toLowerCase(), i = true;
    }
  }
  __name(zn, "zn");
  a(zn, "byteLength");
  h.byteLength = zn;
  function No(r, e, t) {
    let n = false;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e)) return "";
    for (r || (r = "utf8"); ; ) switch (r) {
      case "hex":
        return Zo(this, e, t);
      case "utf8":
      case "utf-8":
        return Yn(this, e, t);
      case "ascii":
        return Ko(this, e, t);
      case "latin1":
      case "binary":
        return Yo(
          this,
          e,
          t
        );
      case "base64":
        return Vo(this, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Jo(
          this,
          e,
          t
        );
      default:
        if (n) throw new TypeError("Unknown encoding: " + r);
        r = (r + "").toLowerCase(), n = true;
    }
  }
  __name(No, "No");
  a(
    No,
    "slowToString"
  );
  h.prototype._isBuffer = true;
  function Ae(r, e, t) {
    let n = r[e];
    r[e] = r[t], r[t] = n;
  }
  __name(Ae, "Ae");
  a(Ae, "swap");
  h.prototype.swap16 = a(function() {
    let e = this.length;
    if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) Ae(this, t, t + 1);
    return this;
  }, "swap16");
  h.prototype.swap32 = a(function() {
    let e = this.length;
    if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) Ae(this, t, t + 3), Ae(this, t + 1, t + 2);
    return this;
  }, "swap32");
  h.prototype.swap64 = a(
    function() {
      let e = this.length;
      if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t = 0; t < e; t += 8) Ae(this, t, t + 7), Ae(this, t + 1, t + 6), Ae(this, t + 2, t + 5), Ae(this, t + 3, t + 4);
      return this;
    },
    "swap64"
  );
  h.prototype.toString = a(function() {
    let e = this.length;
    return e === 0 ? "" : arguments.length === 0 ? Yn(
      this,
      0,
      e
    ) : No.apply(this, arguments);
  }, "toString");
  h.prototype.toLocaleString = h.prototype.toString;
  h.prototype.equals = a(function(e) {
    if (!h.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? true : h.compare(this, e) === 0;
  }, "equals");
  h.prototype.inspect = a(function() {
    let e = "", t = Be.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
  }, "inspect");
  Wn && (h.prototype[Wn] = h.prototype.inspect);
  h.prototype.compare = a(function(e, t, n, i, s) {
    if (ue(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
    if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), s === void 0 && (s = this.length), t < 0 || n > e.length || i < 0 || s > this.length) throw new RangeError("out of range index");
    if (i >= s && t >= n) return 0;
    if (i >= s) return -1;
    if (t >= n) return 1;
    if (t >>>= 0, n >>>= 0, i >>>= 0, s >>>= 0, this === e) return 0;
    let o = s - i, u = n - t, c = Math.min(o, u), l = this.slice(
      i,
      s
    ), f = e.slice(t, n);
    for (let y = 0; y < c; ++y) if (l[y] !== f[y]) {
      o = l[y], u = f[y];
      break;
    }
    return o < u ? -1 : u < o ? 1 : 0;
  }, "compare");
  function Kn(r, e, t, n, i) {
    if (r.length === 0) return -1;
    if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, zt(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
      if (i) return -1;
      t = r.length - 1;
    } else if (t < 0) if (i) t = 0;
    else return -1;
    if (typeof e == "string" && (e = h.from(
      e,
      n
    )), h.isBuffer(e)) return e.length === 0 ? -1 : jn(r, e, t, n, i);
    if (typeof e == "number") return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : jn(r, [e], t, n, i);
    throw new TypeError("val must be string, number or Buffer");
  }
  __name(Kn, "Kn");
  a(Kn, "bidirectionalIndexOf");
  function jn(r, e, t, n, i) {
    let s = 1, o = r.length, u = e.length;
    if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
      if (r.length < 2 || e.length < 2) return -1;
      s = 2, o /= 2, u /= 2, t /= 2;
    }
    function c(f, y) {
      return s === 1 ? f[y] : f.readUInt16BE(y * s);
    }
    __name(c, "c");
    a(c, "read");
    let l;
    if (i) {
      let f = -1;
      for (l = t; l < o; l++) if (c(r, l) === c(e, f === -1 ? 0 : l - f)) {
        if (f === -1 && (f = l), l - f + 1 === u) return f * s;
      } else f !== -1 && (l -= l - f), f = -1;
    } else for (t + u > o && (t = o - u), l = t; l >= 0; l--) {
      let f = true;
      for (let y = 0; y < u; y++) if (c(r, l + y) !== c(e, y)) {
        f = false;
        break;
      }
      if (f) return l;
    }
    return -1;
  }
  __name(jn, "jn");
  a(jn, "arrayIndexOf");
  h.prototype.includes = a(function(e, t, n) {
    return this.indexOf(
      e,
      t,
      n
    ) !== -1;
  }, "includes");
  h.prototype.indexOf = a(function(e, t, n) {
    return Kn(this, e, t, n, true);
  }, "indexOf");
  h.prototype.lastIndexOf = a(function(e, t, n) {
    return Kn(this, e, t, n, false);
  }, "lastIndexOf");
  function Wo(r, e, t, n) {
    t = Number(t) || 0;
    let i = r.length - t;
    n ? (n = Number(n), n > i && (n = i)) : n = i;
    let s = e.length;
    n > s / 2 && (n = s / 2);
    let o;
    for (o = 0; o < n; ++o) {
      let u = parseInt(e.substr(o * 2, 2), 16);
      if (zt(u)) return o;
      r[t + o] = u;
    }
    return o;
  }
  __name(Wo, "Wo");
  a(Wo, "hexWrite");
  function jo(r, e, t, n) {
    return ht(Ht(e, r.length - t), r, t, n);
  }
  __name(jo, "jo");
  a(jo, "utf8Write");
  function Ho(r, e, t, n) {
    return ht(ra(e), r, t, n);
  }
  __name(Ho, "Ho");
  a(
    Ho,
    "asciiWrite"
  );
  function $o(r, e, t, n) {
    return ht(ni(e), r, t, n);
  }
  __name($o, "$o");
  a($o, "base64Write");
  function Go(r, e, t, n) {
    return ht(
      na(e, r.length - t),
      r,
      t,
      n
    );
  }
  __name(Go, "Go");
  a(Go, "ucs2Write");
  h.prototype.write = a(function(e, t, n, i) {
    if (t === void 0) i = "utf8", n = this.length, t = 0;
    else if (n === void 0 && typeof t == "string") i = t, n = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let s = this.length - t;
    if ((n === void 0 || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let o = false;
    for (; ; ) switch (i) {
      case "hex":
        return Wo(this, e, t, n);
      case "utf8":
      case "utf-8":
        return jo(this, e, t, n);
      case "ascii":
      case "latin1":
      case "binary":
        return Ho(this, e, t, n);
      case "base64":
        return $o(this, e, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Go(this, e, t, n);
      default:
        if (o) throw new TypeError("Unknown encoding: " + i);
        i = ("" + i).toLowerCase(), o = true;
    }
  }, "write");
  h.prototype.toJSON = a(function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  }, "toJSON");
  function Vo(r, e, t) {
    return e === 0 && t === r.length ? Nt.fromByteArray(r) : Nt.fromByteArray(r.slice(e, t));
  }
  __name(Vo, "Vo");
  a(Vo, "base64Slice");
  function Yn(r, e, t) {
    t = Math.min(r.length, t);
    let n = [], i = e;
    for (; i < t; ) {
      let s = r[i], o = null, u = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
      if (i + u <= t) {
        let c, l, f, y;
        switch (u) {
          case 1:
            s < 128 && (o = s);
            break;
          case 2:
            c = r[i + 1], (c & 192) === 128 && (y = (s & 31) << 6 | c & 63, y > 127 && (o = y));
            break;
          case 3:
            c = r[i + 1], l = r[i + 2], (c & 192) === 128 && (l & 192) === 128 && (y = (s & 15) << 12 | (c & 63) << 6 | l & 63, y > 2047 && (y < 55296 || y > 57343) && (o = y));
            break;
          case 4:
            c = r[i + 1], l = r[i + 2], f = r[i + 3], (c & 192) === 128 && (l & 192) === 128 && (f & 192) === 128 && (y = (s & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | f & 63, y > 65535 && y < 1114112 && (o = y));
        }
      }
      o === null ? (o = 65533, u = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += u;
    }
    return zo(n);
  }
  __name(Yn, "Yn");
  a(Yn, "utf8Slice");
  var Hn = 4096;
  function zo(r) {
    let e = r.length;
    if (e <= Hn) return String.fromCharCode.apply(String, r);
    let t = "", n = 0;
    for (; n < e; ) t += String.fromCharCode.apply(String, r.slice(n, n += Hn));
    return t;
  }
  __name(zo, "zo");
  a(zo, "decodeCodePointsArray");
  function Ko(r, e, t) {
    let n = "";
    t = Math.min(r.length, t);
    for (let i = e; i < t; ++i) n += String.fromCharCode(r[i] & 127);
    return n;
  }
  __name(Ko, "Ko");
  a(Ko, "asciiSlice");
  function Yo(r, e, t) {
    let n = "";
    t = Math.min(r.length, t);
    for (let i = e; i < t; ++i) n += String.fromCharCode(r[i]);
    return n;
  }
  __name(Yo, "Yo");
  a(Yo, "latin1Slice");
  function Zo(r, e, t) {
    let n = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
    let i = "";
    for (let s = e; s < t; ++s) i += ia[r[s]];
    return i;
  }
  __name(Zo, "Zo");
  a(Zo, "hexSlice");
  function Jo(r, e, t) {
    let n = r.slice(e, t), i = "";
    for (let s = 0; s < n.length - 1; s += 2) i += String.fromCharCode(n[s] + n[s + 1] * 256);
    return i;
  }
  __name(Jo, "Jo");
  a(Jo, "utf16leSlice");
  h.prototype.slice = a(function(e, t) {
    let n = this.length;
    e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
    let i = this.subarray(e, t);
    return Object.setPrototypeOf(i, h.prototype), i;
  }, "slice");
  function q(r, e, t) {
    if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
    if (r + e > t) throw new RangeError("Trying to access beyond buffer length");
  }
  __name(q, "q");
  a(q, "checkOffset");
  h.prototype.readUintLE = h.prototype.readUIntLE = a(
    function(e, t, n) {
      e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
      let i = this[e], s = 1, o = 0;
      for (; ++o < t && (s *= 256); ) i += this[e + o] * s;
      return i;
    },
    "readUIntLE"
  );
  h.prototype.readUintBE = h.prototype.readUIntBE = a(function(e, t, n) {
    e = e >>> 0, t = t >>> 0, n || q(
      e,
      t,
      this.length
    );
    let i = this[e + --t], s = 1;
    for (; t > 0 && (s *= 256); ) i += this[e + --t] * s;
    return i;
  }, "readUIntBE");
  h.prototype.readUint8 = h.prototype.readUInt8 = a(
    function(e, t) {
      return e = e >>> 0, t || q(e, 1, this.length), this[e];
    },
    "readUInt8"
  );
  h.prototype.readUint16LE = h.prototype.readUInt16LE = a(function(e, t) {
    return e = e >>> 0, t || q(
      e,
      2,
      this.length
    ), this[e] | this[e + 1] << 8;
  }, "readUInt16LE");
  h.prototype.readUint16BE = h.prototype.readUInt16BE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, "readUInt16BE");
  h.prototype.readUint32LE = h.prototype.readUInt32LE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  }, "readUInt32LE");
  h.prototype.readUint32BE = h.prototype.readUInt32BE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, "readUInt32BE");
  h.prototype.readBigUInt64LE = we(a(function(e) {
    e = e >>> 0, Re(e, "offset");
    let t = this[e], n = this[e + 7];
    (t === void 0 || n === void 0) && je(e, this.length - 8);
    let i = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
    return BigInt(i) + (BigInt(s) << BigInt(32));
  }, "readBigUInt64LE"));
  h.prototype.readBigUInt64BE = we(a(function(e) {
    e = e >>> 0, Re(e, "offset");
    let t = this[e], n = this[e + 7];
    (t === void 0 || n === void 0) && je(e, this.length - 8);
    let i = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
    return (BigInt(i) << BigInt(
      32
    )) + BigInt(s);
  }, "readBigUInt64BE"));
  h.prototype.readIntLE = a(function(e, t, n) {
    e = e >>> 0, t = t >>> 0, n || q(
      e,
      t,
      this.length
    );
    let i = this[e], s = 1, o = 0;
    for (; ++o < t && (s *= 256); ) i += this[e + o] * s;
    return s *= 128, i >= s && (i -= Math.pow(2, 8 * t)), i;
  }, "readIntLE");
  h.prototype.readIntBE = a(function(e, t, n) {
    e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
    let i = t, s = 1, o = this[e + --i];
    for (; i > 0 && (s *= 256); ) o += this[e + --i] * s;
    return s *= 128, o >= s && (o -= Math.pow(2, 8 * t)), o;
  }, "readIntBE");
  h.prototype.readInt8 = a(function(e, t) {
    return e = e >>> 0, t || q(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  }, "readInt8");
  h.prototype.readInt16LE = a(function(e, t) {
    e = e >>> 0, t || q(
      e,
      2,
      this.length
    );
    let n = this[e] | this[e + 1] << 8;
    return n & 32768 ? n | 4294901760 : n;
  }, "readInt16LE");
  h.prototype.readInt16BE = a(function(e, t) {
    e = e >>> 0, t || q(e, 2, this.length);
    let n = this[e + 1] | this[e] << 8;
    return n & 32768 ? n | 4294901760 : n;
  }, "readInt16BE");
  h.prototype.readInt32LE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, "readInt32LE");
  h.prototype.readInt32BE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, "readInt32BE");
  h.prototype.readBigInt64LE = we(a(function(e) {
    e = e >>> 0, Re(e, "offset");
    let t = this[e], n = this[e + 7];
    (t === void 0 || n === void 0) && je(e, this.length - 8);
    let i = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
    return (BigInt(i) << BigInt(
      32
    )) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
  }, "readBigInt64LE"));
  h.prototype.readBigInt64BE = we(a(function(e) {
    e = e >>> 0, Re(e, "offset");
    let t = this[e], n = this[e + 7];
    (t === void 0 || n === void 0) && je(e, this.length - 8);
    let i = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(i) << BigInt(32)) + BigInt(
      this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n
    );
  }, "readBigInt64BE"));
  h.prototype.readFloatLE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 4, this.length), Pe.read(this, e, true, 23, 4);
  }, "readFloatLE");
  h.prototype.readFloatBE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 4, this.length), Pe.read(this, e, false, 23, 4);
  }, "readFloatBE");
  h.prototype.readDoubleLE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 8, this.length), Pe.read(this, e, true, 52, 8);
  }, "readDoubleLE");
  h.prototype.readDoubleBE = a(function(e, t) {
    return e = e >>> 0, t || q(e, 8, this.length), Pe.read(
      this,
      e,
      false,
      52,
      8
    );
  }, "readDoubleBE");
  function V(r, e, t, n, i, s) {
    if (!h.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
    if (t + n > r.length) throw new RangeError("Index out of range");
  }
  __name(V, "V");
  a(V, "checkInt");
  h.prototype.writeUintLE = h.prototype.writeUIntLE = a(function(e, t, n, i) {
    if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
      let u = Math.pow(2, 8 * n) - 1;
      V(
        this,
        e,
        t,
        n,
        u,
        0
      );
    }
    let s = 1, o = 0;
    for (this[t] = e & 255; ++o < n && (s *= 256); ) this[t + o] = e / s & 255;
    return t + n;
  }, "writeUIntLE");
  h.prototype.writeUintBE = h.prototype.writeUIntBE = a(function(e, t, n, i) {
    if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
      let u = Math.pow(2, 8 * n) - 1;
      V(this, e, t, n, u, 0);
    }
    let s = n - 1, o = 1;
    for (this[t + s] = e & 255; --s >= 0 && (o *= 256); ) this[t + s] = e / o & 255;
    return t + n;
  }, "writeUIntBE");
  h.prototype.writeUint8 = h.prototype.writeUInt8 = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
  }, "writeUInt8");
  h.prototype.writeUint16LE = h.prototype.writeUInt16LE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
  }, "writeUInt16LE");
  h.prototype.writeUint16BE = h.prototype.writeUInt16BE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
  }, "writeUInt16BE");
  h.prototype.writeUint32LE = h.prototype.writeUInt32LE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(
      this,
      e,
      t,
      4,
      4294967295,
      0
    ), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
  }, "writeUInt32LE");
  h.prototype.writeUint32BE = h.prototype.writeUInt32BE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(
      this,
      e,
      t,
      4,
      4294967295,
      0
    ), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
  }, "writeUInt32BE");
  function Zn(r, e, t, n, i) {
    ri(e, n, i, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s;
    let o = Number(e >> BigInt(32) & BigInt(4294967295));
    return r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, t;
  }
  __name(Zn, "Zn");
  a(Zn, "wrtBigUInt64LE");
  function Jn(r, e, t, n, i) {
    ri(e, n, i, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    r[t + 7] = s, s = s >> 8, r[t + 6] = s, s = s >> 8, r[t + 5] = s, s = s >> 8, r[t + 4] = s;
    let o = Number(e >> BigInt(32) & BigInt(4294967295));
    return r[t + 3] = o, o = o >> 8, r[t + 2] = o, o = o >> 8, r[t + 1] = o, o = o >> 8, r[t] = o, t + 8;
  }
  __name(Jn, "Jn");
  a(Jn, "wrtBigUInt64BE");
  h.prototype.writeBigUInt64LE = we(a(function(e, t = 0) {
    return Zn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }, "writeBigUInt64LE"));
  h.prototype.writeBigUInt64BE = we(a(function(e, t = 0) {
    return Jn(this, e, t, BigInt(0), BigInt(
      "0xffffffffffffffff"
    ));
  }, "writeBigUInt64BE"));
  h.prototype.writeIntLE = a(function(e, t, n, i) {
    if (e = +e, t = t >>> 0, !i) {
      let c = Math.pow(2, 8 * n - 1);
      V(this, e, t, n, c - 1, -c);
    }
    let s = 0, o = 1, u = 0;
    for (this[t] = e & 255; ++s < n && (o *= 256); )
      e < 0 && u === 0 && this[t + s - 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
    return t + n;
  }, "writeIntLE");
  h.prototype.writeIntBE = a(function(e, t, n, i) {
    if (e = +e, t = t >>> 0, !i) {
      let c = Math.pow(2, 8 * n - 1);
      V(this, e, t, n, c - 1, -c);
    }
    let s = n - 1, o = 1, u = 0;
    for (this[t + s] = e & 255; --s >= 0 && (o *= 256); ) e < 0 && u === 0 && this[t + s + 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
    return t + n;
  }, "writeIntBE");
  h.prototype.writeInt8 = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
  }, "writeInt8");
  h.prototype.writeInt16LE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
  }, "writeInt16LE");
  h.prototype.writeInt16BE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
  }, "writeInt16BE");
  h.prototype.writeInt32LE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(
      this,
      e,
      t,
      4,
      2147483647,
      -2147483648
    ), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
  }, "writeInt32LE");
  h.prototype.writeInt32BE = a(function(e, t, n) {
    return e = +e, t = t >>> 0, n || V(
      this,
      e,
      t,
      4,
      2147483647,
      -2147483648
    ), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
  }, "writeInt32BE");
  h.prototype.writeBigInt64LE = we(a(function(e, t = 0) {
    return Zn(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }, "writeBigInt64LE"));
  h.prototype.writeBigInt64BE = we(
    a(function(e, t = 0) {
      return Jn(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64BE")
  );
  function Xn(r, e, t, n, i, s) {
    if (t + n > r.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  __name(Xn, "Xn");
  a(Xn, "checkIEEE754");
  function ei(r, e, t, n, i) {
    return e = +e, t = t >>> 0, i || Xn(r, e, t, 4, 34028234663852886e22, -34028234663852886e22), Pe.write(r, e, t, n, 23, 4), t + 4;
  }
  __name(ei, "ei");
  a(
    ei,
    "writeFloat"
  );
  h.prototype.writeFloatLE = a(function(e, t, n) {
    return ei(this, e, t, true, n);
  }, "writeFloatLE");
  h.prototype.writeFloatBE = a(function(e, t, n) {
    return ei(this, e, t, false, n);
  }, "writeFloatBE");
  function ti(r, e, t, n, i) {
    return e = +e, t = t >>> 0, i || Xn(r, e, t, 8, 17976931348623157e292, -17976931348623157e292), Pe.write(
      r,
      e,
      t,
      n,
      52,
      8
    ), t + 8;
  }
  __name(ti, "ti");
  a(ti, "writeDouble");
  h.prototype.writeDoubleLE = a(function(e, t, n) {
    return ti(this, e, t, true, n);
  }, "writeDoubleLE");
  h.prototype.writeDoubleBE = a(function(e, t, n) {
    return ti(this, e, t, false, n);
  }, "writeDoubleBE");
  h.prototype.copy = a(function(e, t, n, i) {
    if (!h.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
    let s = i - n;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), s;
  }, "copy");
  h.prototype.fill = a(function(e, t, n, i) {
    if (typeof e == "string") {
      if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !h.isEncoding(i)) throw new TypeError(
        "Unknown encoding: " + i
      );
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        (i === "utf8" && o < 128 || i === "latin1") && (e = o);
      }
    } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
    let s;
    if (typeof e == "number") for (s = t; s < n; ++s) this[s] = e;
    else {
      let o = h.isBuffer(e) ? e : h.from(
        e,
        i
      ), u = o.length;
      if (u === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (s = 0; s < n - t; ++s) this[s + t] = o[s % u];
    }
    return this;
  }, "fill");
  var Te = {};
  function Vt(r, e, t) {
    var n;
    Te[r] = (n = class extends t {
      static {
        __name(this, "n");
      }
      constructor() {
        super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
      }
      get code() {
        return r;
      }
      set code(s) {
        Object.defineProperty(
          this,
          "code",
          { configurable: true, enumerable: true, value: s, writable: true }
        );
      }
      toString() {
        return `${this.name} [${r}]: ${this.message}`;
      }
    }, a(n, "NodeError"), n);
  }
  __name(Vt, "Vt");
  a(Vt, "E");
  Vt("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
    return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  Vt(
    "ERR_INVALID_ARG_TYPE",
    function(r, e) {
      return `The "${r}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  );
  Vt("ERR_OUT_OF_RANGE", function(r, e, t) {
    let n = `The value of "${r}" is out of range.`, i = t;
    return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = $n(String(t)) : typeof t == "bigint" && (i = String(
      t
    ), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = $n(i)), i += "n"), n += ` It must be ${e}. Received ${i}`, n;
  }, RangeError);
  function $n(r) {
    let e = "", t = r.length, n = r[0] === "-" ? 1 : 0;
    for (; t >= n + 4; t -= 3) e = `_${r.slice(t - 3, t)}${e}`;
    return `${r.slice(0, t)}${e}`;
  }
  __name($n, "$n");
  a($n, "addNumericalSeparator");
  function Xo(r, e, t) {
    Re(e, "offset"), (r[e] === void 0 || r[e + t] === void 0) && je(e, r.length - (t + 1));
  }
  __name(Xo, "Xo");
  a(Xo, "checkBounds");
  function ri(r, e, t, n, i, s) {
    if (r > t || r < e) {
      let o = typeof e == "bigint" ? "n" : "", u;
      throw s > 3 ? e === 0 || e === BigInt(0) ? u = `>= 0${o} and < 2${o} ** ${(s + 1) * 8}${o}` : u = `>= -(2${o} ** ${(s + 1) * 8 - 1}${o}) and < 2 ** ${(s + 1) * 8 - 1}${o}` : u = `>= ${e}${o} and <= ${t}${o}`, new Te.ERR_OUT_OF_RANGE("value", u, r);
    }
    Xo(n, i, s);
  }
  __name(ri, "ri");
  a(ri, "checkIntBI");
  function Re(r, e) {
    if (typeof r != "number") throw new Te.ERR_INVALID_ARG_TYPE(e, "number", r);
  }
  __name(Re, "Re");
  a(Re, "validateNumber");
  function je(r, e, t) {
    throw Math.floor(r) !== r ? (Re(r, t), new Te.ERR_OUT_OF_RANGE(t || "offset", "an integer", r)) : e < 0 ? new Te.ERR_BUFFER_OUT_OF_BOUNDS() : new Te.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${e}`, r);
  }
  __name(je, "je");
  a(je, "boundsError");
  var ea = /[^+/0-9A-Za-z-_]/g;
  function ta(r) {
    if (r = r.split("=")[0], r = r.trim().replace(ea, ""), r.length < 2) return "";
    for (; r.length % 4 !== 0; ) r = r + "=";
    return r;
  }
  __name(ta, "ta");
  a(ta, "base64clean");
  function Ht(r, e) {
    e = e || 1 / 0;
    let t, n = r.length, i = null, s = [];
    for (let o = 0; o < n; ++o) {
      if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
        if (!i) {
          if (t > 56319) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          } else if (o + 1 === n) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          }
          i = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && s.push(239, 191, 189), i = t;
          continue;
        }
        t = (i - 55296 << 10 | t - 56320) + 65536;
      } else i && (e -= 3) > -1 && s.push(239, 191, 189);
      if (i = null, t < 128) {
        if ((e -= 1) < 0) break;
        s.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        s.push(t >> 6 | 192, t & 63 | 128);
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        s.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        s.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return s;
  }
  __name(Ht, "Ht");
  a(Ht, "utf8ToBytes");
  function ra(r) {
    let e = [];
    for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
    return e;
  }
  __name(ra, "ra");
  a(
    ra,
    "asciiToBytes"
  );
  function na(r, e) {
    let t, n, i, s = [];
    for (let o = 0; o < r.length && !((e -= 2) < 0); ++o) t = r.charCodeAt(
      o
    ), n = t >> 8, i = t % 256, s.push(i), s.push(n);
    return s;
  }
  __name(na, "na");
  a(na, "utf16leToBytes");
  function ni(r) {
    return Nt.toByteArray(
      ta(r)
    );
  }
  __name(ni, "ni");
  a(ni, "base64ToBytes");
  function ht(r, e, t, n) {
    let i;
    for (i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i)
      e[i + t] = r[i];
    return i;
  }
  __name(ht, "ht");
  a(ht, "blitBuffer");
  function ue(r, e) {
    return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name;
  }
  __name(ue, "ue");
  a(ue, "isInstance");
  function zt(r) {
    return r !== r;
  }
  __name(zt, "zt");
  a(zt, "numberIsNaN");
  var ia = (function() {
    let r = "0123456789abcdef", e = new Array(256);
    for (let t = 0; t < 16; ++t) {
      let n = t * 16;
      for (let i = 0; i < 16; ++i) e[n + i] = r[t] + r[i];
    }
    return e;
  })();
  function we(r) {
    return typeof BigInt > "u" ? sa : r;
  }
  __name(we, "we");
  a(we, "defineBigIntMethod");
  function sa() {
    throw new Error("BigInt not supported");
  }
  __name(sa, "sa");
  a(sa, "BufferBigIntNotDefined");
});
var b;
var v;
var x;
var d;
var m;
var p = G(() => {
  "use strict";
  b = globalThis, v = globalThis.setImmediate ?? ((r) => setTimeout(r, 0)), x = globalThis.clearImmediate ?? ((r) => clearTimeout(r)), d = typeof globalThis.Buffer == "function" && typeof globalThis.Buffer.allocUnsafe == "function" ? globalThis.Buffer : ii().Buffer, m = globalThis.process ?? {};
  m.env ?? (m.env = {});
  try {
    m.nextTick(() => {
    });
  } catch {
    let e = Promise.resolve();
    m.nextTick = e.then.bind(e);
  }
});
var ge = T((Bl, Kt) => {
  "use strict";
  p();
  var Le = typeof Reflect == "object" ? Reflect : null, si = Le && typeof Le.apply == "function" ? Le.apply : a(function(e, t, n) {
    return Function.prototype.apply.call(e, t, n);
  }, "ReflectApply"), pt;
  Le && typeof Le.ownKeys == "function" ? pt = Le.ownKeys : Object.getOwnPropertySymbols ? pt = a(function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  }, "ReflectOwnKeys") : pt = a(function(e) {
    return Object.getOwnPropertyNames(e);
  }, "ReflectOwnKeys");
  function oa(r) {
    console && console.warn && console.warn(r);
  }
  __name(oa, "oa");
  a(
    oa,
    "ProcessEmitWarning"
  );
  var ai = Number.isNaN || a(function(e) {
    return e !== e;
  }, "NumberIsNaN");
  function R() {
    R.init.call(this);
  }
  __name(R, "R");
  a(R, "EventEmitter");
  Kt.exports = R;
  Kt.exports.once = la;
  R.EventEmitter = R;
  R.prototype._events = void 0;
  R.prototype._eventsCount = 0;
  R.prototype._maxListeners = void 0;
  var oi = 10;
  function dt(r) {
    if (typeof r != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
  }
  __name(dt, "dt");
  a(dt, "checkListener");
  Object.defineProperty(R, "defaultMaxListeners", { enumerable: true, get: a(function() {
    return oi;
  }, "get"), set: a(
    function(r) {
      if (typeof r != "number" || r < 0 || ai(r)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
      oi = r;
    },
    "set"
  ) });
  R.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  };
  R.prototype.setMaxListeners = a(function(e) {
    if (typeof e != "number" || e < 0 || ai(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  }, "setMaxListeners");
  function ui(r) {
    return r._maxListeners === void 0 ? R.defaultMaxListeners : r._maxListeners;
  }
  __name(ui, "ui");
  a(ui, "_getMaxListeners");
  R.prototype.getMaxListeners = a(function() {
    return ui(this);
  }, "getMaxListeners");
  R.prototype.emit = a(function(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
    var i = e === "error", s = this._events;
    if (s !== void 0) i = i && s.error === void 0;
    else if (!i) return false;
    if (i) {
      var o;
      if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
      var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
      throw u.context = o, u;
    }
    var c = s[e];
    if (c === void 0) return false;
    if (typeof c == "function") si(c, this, t);
    else for (var l = c.length, f = pi(c, l), n = 0; n < l; ++n) si(f[n], this, t);
    return true;
  }, "emit");
  function ci(r, e, t, n) {
    var i, s, o;
    if (dt(
      t
    ), s = r._events, s === void 0 ? (s = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (s.newListener !== void 0 && (r.emit("newListener", e, t.listener ? t.listener : t), s = r._events), o = s[e]), o === void 0) o = s[e] = t, ++r._eventsCount;
    else if (typeof o == "function" ? o = s[e] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), i = ui(r), i > 0 && o.length > i && !o.warned) {
      o.warned = true;
      var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      u.name = "MaxListenersExceededWarning", u.emitter = r, u.type = e, u.count = o.length, oa(u);
    }
    return r;
  }
  __name(ci, "ci");
  a(ci, "_addListener");
  R.prototype.addListener = a(function(e, t) {
    return ci(this, e, t, false);
  }, "addListener");
  R.prototype.on = R.prototype.addListener;
  R.prototype.prependListener = a(function(e, t) {
    return ci(this, e, t, true);
  }, "prependListener");
  function aa() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  __name(aa, "aa");
  a(aa, "onceWrapper");
  function li(r, e, t) {
    var n = {
      fired: false,
      wrapFn: void 0,
      target: r,
      type: e,
      listener: t
    }, i = aa.bind(n);
    return i.listener = t, n.wrapFn = i, i;
  }
  __name(li, "li");
  a(li, "_onceWrap");
  R.prototype.once = a(function(e, t) {
    return dt(t), this.on(e, li(this, e, t)), this;
  }, "once");
  R.prototype.prependOnceListener = a(function(e, t) {
    return dt(t), this.prependListener(e, li(this, e, t)), this;
  }, "prependOnceListener");
  R.prototype.removeListener = a(function(e, t) {
    var n, i, s, o, u;
    if (dt(t), i = this._events, i === void 0) return this;
    if (n = i[e], n === void 0) return this;
    if (n === t || n.listener === t) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
    else if (typeof n != "function") {
      for (s = -1, o = n.length - 1; o >= 0; o--) if (n[o] === t || n[o].listener === t) {
        u = n[o].listener, s = o;
        break;
      }
      if (s < 0) return this;
      s === 0 ? n.shift() : ua(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, u || t);
    }
    return this;
  }, "removeListener");
  R.prototype.off = R.prototype.removeListener;
  R.prototype.removeAllListeners = a(function(e) {
    var t, n, i;
    if (n = this._events, n === void 0) return this;
    if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
    if (arguments.length === 0) {
      var s = Object.keys(n), o;
      for (i = 0; i < s.length; ++i) o = s[i], o !== "removeListener" && this.removeAllListeners(
        o
      );
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (t = n[e], typeof t == "function") this.removeListener(e, t);
    else if (t !== void 0) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
    return this;
  }, "removeAllListeners");
  function fi(r, e, t) {
    var n = r._events;
    if (n === void 0) return [];
    var i = n[e];
    return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? ca(i) : pi(i, i.length);
  }
  __name(fi, "fi");
  a(fi, "_listeners");
  R.prototype.listeners = a(function(e) {
    return fi(this, e, true);
  }, "listeners");
  R.prototype.rawListeners = a(function(e) {
    return fi(this, e, false);
  }, "rawListeners");
  R.listenerCount = function(r, e) {
    return typeof r.listenerCount == "function" ? r.listenerCount(e) : hi.call(r, e);
  };
  R.prototype.listenerCount = hi;
  function hi(r) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[r];
      if (typeof t == "function")
        return 1;
      if (t !== void 0) return t.length;
    }
    return 0;
  }
  __name(hi, "hi");
  a(hi, "listenerCount");
  R.prototype.eventNames = a(function() {
    return this._eventsCount > 0 ? pt(this._events) : [];
  }, "eventNames");
  function pi(r, e) {
    for (var t = new Array(e), n = 0; n < e; ++n) t[n] = r[n];
    return t;
  }
  __name(pi, "pi");
  a(pi, "arrayClone");
  function ua(r, e) {
    for (; e + 1 < r.length; e++) r[e] = r[e + 1];
    r.pop();
  }
  __name(ua, "ua");
  a(ua, "spliceOne");
  function ca(r) {
    for (var e = new Array(r.length), t = 0; t < e.length; ++t) e[t] = r[t].listener || r[t];
    return e;
  }
  __name(ca, "ca");
  a(ca, "unwrapListeners");
  function la(r, e) {
    return new Promise(function(t, n) {
      function i(o) {
        r.removeListener(e, s), n(o);
      }
      __name(i, "i");
      a(i, "errorListener");
      function s() {
        typeof r.removeListener == "function" && r.removeListener("error", i), t([].slice.call(arguments));
      }
      __name(s, "s");
      a(s, "resolver"), di(r, e, s, { once: true }), e !== "error" && fa(r, i, { once: true });
    });
  }
  __name(la, "la");
  a(la, "once");
  function fa(r, e, t) {
    typeof r.on == "function" && di(r, "error", e, t);
  }
  __name(fa, "fa");
  a(
    fa,
    "addErrorHandlerIfEventEmitter"
  );
  function di(r, e, t, n) {
    if (typeof r.on == "function") n.once ? r.once(e, t) : r.on(e, t);
    else if (typeof r.addEventListener == "function") r.addEventListener(e, a(/* @__PURE__ */ __name(function i(s) {
      n.once && r.removeEventListener(e, i), t(s);
    }, "i"), "wrapListener"));
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
  }
  __name(di, "di");
  a(di, "eventTargetAgnosticAddListener");
});
var wi = {};
ie(wi, { Socket: /* @__PURE__ */ __name(() => ce, "Socket"), isIP: /* @__PURE__ */ __name(() => ha, "isIP") });
function ha(r) {
  return 0;
}
__name(ha, "ha");
var mi;
var yi;
var S;
var ce;
var Fe = G(() => {
  "use strict";
  p();
  mi = Se(ge(), 1);
  a(ha, "isIP");
  yi = /^[^.]+\./, S = class S2 extends mi.EventEmitter {
    static {
      __name(this, "S");
    }
    constructor() {
      super(...arguments);
      E(this, "opts", {});
      E(this, "connecting", false);
      E(this, "pending", true);
      E(
        this,
        "writable",
        true
      );
      E(this, "encrypted", false);
      E(this, "authorized", false);
      E(this, "destroyed", false);
      E(this, "ws", null);
      E(this, "writeBuffer");
      E(this, "tlsState", 0);
      E(this, "tlsRead");
      E(this, "tlsWrite");
    }
    static get poolQueryViaFetch() {
      return S2.opts.poolQueryViaFetch ?? S2.defaults.poolQueryViaFetch;
    }
    static set poolQueryViaFetch(t) {
      S2.opts.poolQueryViaFetch = t;
    }
    static get fetchEndpoint() {
      return S2.opts.fetchEndpoint ?? S2.defaults.fetchEndpoint;
    }
    static set fetchEndpoint(t) {
      S2.opts.fetchEndpoint = t;
    }
    static get fetchConnectionCache() {
      return true;
    }
    static set fetchConnectionCache(t) {
      console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)");
    }
    static get fetchFunction() {
      return S2.opts.fetchFunction ?? S2.defaults.fetchFunction;
    }
    static set fetchFunction(t) {
      S2.opts.fetchFunction = t;
    }
    static get webSocketConstructor() {
      return S2.opts.webSocketConstructor ?? S2.defaults.webSocketConstructor;
    }
    static set webSocketConstructor(t) {
      S2.opts.webSocketConstructor = t;
    }
    get webSocketConstructor() {
      return this.opts.webSocketConstructor ?? S2.webSocketConstructor;
    }
    set webSocketConstructor(t) {
      this.opts.webSocketConstructor = t;
    }
    static get wsProxy() {
      return S2.opts.wsProxy ?? S2.defaults.wsProxy;
    }
    static set wsProxy(t) {
      S2.opts.wsProxy = t;
    }
    get wsProxy() {
      return this.opts.wsProxy ?? S2.wsProxy;
    }
    set wsProxy(t) {
      this.opts.wsProxy = t;
    }
    static get coalesceWrites() {
      return S2.opts.coalesceWrites ?? S2.defaults.coalesceWrites;
    }
    static set coalesceWrites(t) {
      S2.opts.coalesceWrites = t;
    }
    get coalesceWrites() {
      return this.opts.coalesceWrites ?? S2.coalesceWrites;
    }
    set coalesceWrites(t) {
      this.opts.coalesceWrites = t;
    }
    static get useSecureWebSocket() {
      return S2.opts.useSecureWebSocket ?? S2.defaults.useSecureWebSocket;
    }
    static set useSecureWebSocket(t) {
      S2.opts.useSecureWebSocket = t;
    }
    get useSecureWebSocket() {
      return this.opts.useSecureWebSocket ?? S2.useSecureWebSocket;
    }
    set useSecureWebSocket(t) {
      this.opts.useSecureWebSocket = t;
    }
    static get forceDisablePgSSL() {
      return S2.opts.forceDisablePgSSL ?? S2.defaults.forceDisablePgSSL;
    }
    static set forceDisablePgSSL(t) {
      S2.opts.forceDisablePgSSL = t;
    }
    get forceDisablePgSSL() {
      return this.opts.forceDisablePgSSL ?? S2.forceDisablePgSSL;
    }
    set forceDisablePgSSL(t) {
      this.opts.forceDisablePgSSL = t;
    }
    static get disableSNI() {
      return S2.opts.disableSNI ?? S2.defaults.disableSNI;
    }
    static set disableSNI(t) {
      S2.opts.disableSNI = t;
    }
    get disableSNI() {
      return this.opts.disableSNI ?? S2.disableSNI;
    }
    set disableSNI(t) {
      this.opts.disableSNI = t;
    }
    static get disableWarningInBrowsers() {
      return S2.opts.disableWarningInBrowsers ?? S2.defaults.disableWarningInBrowsers;
    }
    static set disableWarningInBrowsers(t) {
      S2.opts.disableWarningInBrowsers = t;
    }
    get disableWarningInBrowsers() {
      return this.opts.disableWarningInBrowsers ?? S2.disableWarningInBrowsers;
    }
    set disableWarningInBrowsers(t) {
      this.opts.disableWarningInBrowsers = t;
    }
    static get pipelineConnect() {
      return S2.opts.pipelineConnect ?? S2.defaults.pipelineConnect;
    }
    static set pipelineConnect(t) {
      S2.opts.pipelineConnect = t;
    }
    get pipelineConnect() {
      return this.opts.pipelineConnect ?? S2.pipelineConnect;
    }
    set pipelineConnect(t) {
      this.opts.pipelineConnect = t;
    }
    static get subtls() {
      return S2.opts.subtls ?? S2.defaults.subtls;
    }
    static set subtls(t) {
      S2.opts.subtls = t;
    }
    get subtls() {
      return this.opts.subtls ?? S2.subtls;
    }
    set subtls(t) {
      this.opts.subtls = t;
    }
    static get pipelineTLS() {
      return S2.opts.pipelineTLS ?? S2.defaults.pipelineTLS;
    }
    static set pipelineTLS(t) {
      S2.opts.pipelineTLS = t;
    }
    get pipelineTLS() {
      return this.opts.pipelineTLS ?? S2.pipelineTLS;
    }
    set pipelineTLS(t) {
      this.opts.pipelineTLS = t;
    }
    static get rootCerts() {
      return S2.opts.rootCerts ?? S2.defaults.rootCerts;
    }
    static set rootCerts(t) {
      S2.opts.rootCerts = t;
    }
    get rootCerts() {
      return this.opts.rootCerts ?? S2.rootCerts;
    }
    set rootCerts(t) {
      this.opts.rootCerts = t;
    }
    wsProxyAddrForHost(t, n) {
      let i = this.wsProxy;
      if (i === void 0) throw new Error("No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string");
      return typeof i == "function" ? i(t, n) : `${i}?address=${t}:${n}`;
    }
    setNoDelay() {
      return this;
    }
    setKeepAlive() {
      return this;
    }
    ref() {
      return this;
    }
    unref() {
      return this;
    }
    connect(t, n, i) {
      this.connecting = true, i && this.once("connect", i);
      let s = a(() => {
        this.connecting = false, this.pending = false, this.emit("connect"), this.emit("ready");
      }, "handleWebSocketOpen"), o = a((c, l = false) => {
        c.binaryType = "arraybuffer", c.addEventListener("error", (f) => {
          this.emit("error", f), this.emit("close");
        }), c.addEventListener("message", (f) => {
          if (this.tlsState === 0) {
            let y = d.from(f.data);
            this.emit("data", y);
          }
        }), c.addEventListener("close", () => {
          this.emit("close");
        }), l ? s() : c.addEventListener(
          "open",
          s
        );
      }, "configureWebSocket"), u;
      try {
        u = this.wsProxyAddrForHost(n, typeof t == "string" ? parseInt(t, 10) : t);
      } catch (c) {
        this.emit("error", c), this.emit("close");
        return;
      }
      try {
        let l = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + u;
        if (this.webSocketConstructor !== void 0) this.ws = new this.webSocketConstructor(l), o(this.ws);
        else try {
          this.ws = new WebSocket(l), o(this.ws);
        } catch {
          this.ws = new __unstable_WebSocket(l), o(this.ws);
        }
      } catch (c) {
        let f = (this.useSecureWebSocket ? "https:" : "http:") + "//" + u;
        fetch(f, { headers: { Upgrade: "websocket" } }).then(
          (y) => {
            if (this.ws = y.webSocket, this.ws == null) throw c;
            this.ws.accept(), o(this.ws, true);
          }
        ).catch((y) => {
          this.emit(
            "error",
            new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${y}`)
          ), this.emit("close");
        });
      }
    }
    async startTls(t) {
      if (this.subtls === void 0) throw new Error(
        "For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information."
      );
      this.tlsState = 1;
      let n = await this.subtls.TrustedCert.databaseFromPEM(this.rootCerts), i = new this.subtls.WebSocketReadQueue(this.ws), s = i.read.bind(i), o = this.rawWrite.bind(this), { read: u, write: c } = await this.subtls.startTls(t, n, s, o, { useSNI: !this.disableSNI, expectPreData: this.pipelineTLS ? new Uint8Array([83]) : void 0 });
      this.tlsRead = u, this.tlsWrite = c, this.tlsState = 2, this.encrypted = true, this.authorized = true, this.emit("secureConnection", this), this.tlsReadLoop();
    }
    async tlsReadLoop() {
      for (; ; ) {
        let t = await this.tlsRead();
        if (t === void 0) break;
        {
          let n = d.from(t);
          this.emit("data", n);
        }
      }
    }
    rawWrite(t) {
      if (!this.coalesceWrites) {
        this.ws && this.ws.send(t);
        return;
      }
      if (this.writeBuffer === void 0) this.writeBuffer = t, setTimeout(() => {
        this.ws && this.ws.send(this.writeBuffer), this.writeBuffer = void 0;
      }, 0);
      else {
        let n = new Uint8Array(
          this.writeBuffer.length + t.length
        );
        n.set(this.writeBuffer), n.set(t, this.writeBuffer.length), this.writeBuffer = n;
      }
    }
    write(t, n = "utf8", i = (s) => {
    }) {
      return t.length === 0 ? (i(), true) : (typeof t == "string" && (t = d.from(t, n)), this.tlsState === 0 ? (this.rawWrite(t), i()) : this.tlsState === 1 ? this.once("secureConnection", () => {
        this.write(
          t,
          n,
          i
        );
      }) : (this.tlsWrite(t), i()), true);
    }
    end(t = d.alloc(0), n = "utf8", i = () => {
    }) {
      return this.write(t, n, () => {
        this.ws.close(), i();
      }), this;
    }
    destroy() {
      return this.destroyed = true, this.end();
    }
  };
  a(S, "Socket"), E(S, "defaults", {
    poolQueryViaFetch: false,
    fetchEndpoint: a((t, n, i) => {
      let s;
      return i?.jwtAuth ? s = t.replace(yi, "apiauth.") : s = t.replace(yi, "api."), "https://" + s + "/sql";
    }, "fetchEndpoint"),
    fetchConnectionCache: true,
    fetchFunction: void 0,
    webSocketConstructor: void 0,
    wsProxy: a((t) => t + "/v2", "wsProxy"),
    useSecureWebSocket: true,
    forceDisablePgSSL: true,
    coalesceWrites: true,
    pipelineConnect: "password",
    subtls: void 0,
    rootCerts: "",
    pipelineTLS: false,
    disableSNI: false,
    disableWarningInBrowsers: false
  }), E(S, "opts", {});
  ce = S;
});
var gi = {};
ie(gi, { parse: /* @__PURE__ */ __name(() => Yt, "parse") });
function Yt(r, e = false) {
  let { protocol: t } = new URL(r), n = "http:" + r.substring(
    t.length
  ), { username: i, password: s, host: o, hostname: u, port: c, pathname: l, search: f, searchParams: y, hash: g } = new URL(
    n
  );
  s = decodeURIComponent(s), i = decodeURIComponent(i), l = decodeURIComponent(l);
  let A = i + ":" + s, C = e ? Object.fromEntries(y.entries()) : f;
  return {
    href: r,
    protocol: t,
    auth: A,
    username: i,
    password: s,
    host: o,
    hostname: u,
    port: c,
    pathname: l,
    search: f,
    query: C,
    hash: g
  };
}
__name(Yt, "Yt");
var Zt = G(() => {
  "use strict";
  p();
  a(Yt, "parse");
});
var tr = T((Ai) => {
  "use strict";
  p();
  Ai.parse = function(r, e) {
    return new er(r, e).parse();
  };
  var vt = class vt2 {
    static {
      __name(this, "vt");
    }
    constructor(e, t) {
      this.source = e, this.transform = t || Ca, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
    }
    isEof() {
      return this.position >= this.source.length;
    }
    nextCharacter() {
      var e = this.source[this.position++];
      return e === "\\" ? { value: this.source[this.position++], escaped: true } : { value: e, escaped: false };
    }
    record(e) {
      this.recorded.push(
        e
      );
    }
    newEntry(e) {
      var t;
      (this.recorded.length > 0 || e) && (t = this.recorded.join(""), t === "NULL" && !e && (t = null), t !== null && (t = this.transform(t)), this.entries.push(t), this.recorded = []);
    }
    consumeDimensions() {
      if (this.source[0] === "[") for (; !this.isEof(); ) {
        var e = this.nextCharacter();
        if (e.value === "=") break;
      }
    }
    parse(e) {
      var t, n, i;
      for (this.consumeDimensions(); !this.isEof(); ) if (t = this.nextCharacter(), t.value === "{" && !i) this.dimension++, this.dimension > 1 && (n = new vt2(this.source.substr(this.position - 1), this.transform), this.entries.push(n.parse(
        true
      )), this.position += n.position - 2);
      else if (t.value === "}" && !i) {
        if (this.dimension--, !this.dimension && (this.newEntry(), e)) return this.entries;
      } else t.value === '"' && !t.escaped ? (i && this.newEntry(true), i = !i) : t.value === "," && !i ? this.newEntry() : this.record(t.value);
      if (this.dimension !== 0) throw new Error("array dimension not balanced");
      return this.entries;
    }
  };
  a(vt, "ArrayParser");
  var er = vt;
  function Ca(r) {
    return r;
  }
  __name(Ca, "Ca");
  a(Ca, "identity");
});
var rr = T((Zl, Ci) => {
  p();
  var _a = tr();
  Ci.exports = { create: a(function(r, e) {
    return { parse: a(function() {
      return _a.parse(r, e);
    }, "parse") };
  }, "create") };
});
var Ti = T((ef, Ii) => {
  "use strict";
  p();
  var Ia = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, Ta = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, Pa = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, Ra = /^-?infinity$/;
  Ii.exports = a(function(e) {
    if (Ra.test(e)) return Number(e.replace("i", "I"));
    var t = Ia.exec(e);
    if (!t) return Ba(
      e
    ) || null;
    var n = !!t[8], i = parseInt(t[1], 10);
    n && (i = _i(i));
    var s = parseInt(t[2], 10) - 1, o = t[3], u = parseInt(
      t[4],
      10
    ), c = parseInt(t[5], 10), l = parseInt(t[6], 10), f = t[7];
    f = f ? 1e3 * parseFloat(f) : 0;
    var y, g = La(e);
    return g != null ? (y = new Date(Date.UTC(i, s, o, u, c, l, f)), nr(i) && y.setUTCFullYear(i), g !== 0 && y.setTime(y.getTime() - g)) : (y = new Date(i, s, o, u, c, l, f), nr(i) && y.setFullYear(i)), y;
  }, "parseDate");
  function Ba(r) {
    var e = Ta.exec(r);
    if (e) {
      var t = parseInt(e[1], 10), n = !!e[4];
      n && (t = _i(t));
      var i = parseInt(e[2], 10) - 1, s = e[3], o = new Date(t, i, s);
      return nr(
        t
      ) && o.setFullYear(t), o;
    }
  }
  __name(Ba, "Ba");
  a(Ba, "getDate");
  function La(r) {
    if (r.endsWith("+00")) return 0;
    var e = Pa.exec(r.split(" ")[1]);
    if (e) {
      var t = e[1];
      if (t === "Z") return 0;
      var n = t === "-" ? -1 : 1, i = parseInt(e[2], 10) * 3600 + parseInt(
        e[3] || 0,
        10
      ) * 60 + parseInt(e[4] || 0, 10);
      return i * n * 1e3;
    }
  }
  __name(La, "La");
  a(La, "timeZoneOffset");
  function _i(r) {
    return -(r - 1);
  }
  __name(_i, "_i");
  a(_i, "bcYearToNegativeYear");
  function nr(r) {
    return r >= 0 && r < 100;
  }
  __name(nr, "nr");
  a(nr, "is0To99");
});
var Ri = T((nf, Pi) => {
  p();
  Pi.exports = ka;
  var Fa = Object.prototype.hasOwnProperty;
  function ka(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) Fa.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }
  __name(ka, "ka");
  a(ka, "extend");
});
var Fi = T((af, Li) => {
  "use strict";
  p();
  var Ma = Ri();
  Li.exports = ke;
  function ke(r) {
    if (!(this instanceof ke))
      return new ke(r);
    Ma(this, Va(r));
  }
  __name(ke, "ke");
  a(ke, "PostgresInterval");
  var Ua = [
    "seconds",
    "minutes",
    "hours",
    "days",
    "months",
    "years"
  ];
  ke.prototype.toPostgres = function() {
    var r = Ua.filter(this.hasOwnProperty, this);
    return this.milliseconds && r.indexOf("seconds") < 0 && r.push("seconds"), r.length === 0 ? "0" : r.map(function(e) {
      var t = this[e] || 0;
      return e === "seconds" && this.milliseconds && (t = (t + this.milliseconds / 1e3).toFixed(6).replace(
        /\.?0+$/,
        ""
      )), t + " " + e;
    }, this).join(" ");
  };
  var Da = { years: "Y", months: "M", days: "D", hours: "H", minutes: "M", seconds: "S" }, Oa = ["years", "months", "days"], qa = ["hours", "minutes", "seconds"];
  ke.prototype.toISOString = ke.prototype.toISO = function() {
    var r = Oa.map(t, this).join(""), e = qa.map(t, this).join("");
    return "P" + r + "T" + e;
    function t(n) {
      var i = this[n] || 0;
      return n === "seconds" && this.milliseconds && (i = (i + this.milliseconds / 1e3).toFixed(6).replace(
        /0+$/,
        ""
      )), i + Da[n];
    }
    __name(t, "t");
  };
  var ir = "([+-]?\\d+)", Qa = ir + "\\s+years?", Na = ir + "\\s+mons?", Wa = ir + "\\s+days?", ja = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?", Ha = new RegExp([Qa, Na, Wa, ja].map(function(r) {
    return "(" + r + ")?";
  }).join("\\s*")), Bi = { years: 2, months: 4, days: 6, hours: 9, minutes: 10, seconds: 11, milliseconds: 12 }, $a = ["hours", "minutes", "seconds", "milliseconds"];
  function Ga(r) {
    var e = r + "000000".slice(r.length);
    return parseInt(
      e,
      10
    ) / 1e3;
  }
  __name(Ga, "Ga");
  a(Ga, "parseMilliseconds");
  function Va(r) {
    if (!r) return {};
    var e = Ha.exec(r), t = e[8] === "-";
    return Object.keys(Bi).reduce(function(n, i) {
      var s = Bi[i], o = e[s];
      return !o || (o = i === "milliseconds" ? Ga(o) : parseInt(o, 10), !o) || (t && ~$a.indexOf(i) && (o *= -1), n[i] = o), n;
    }, {});
  }
  __name(Va, "Va");
  a(Va, "parse");
});
var Mi = T((lf, ki) => {
  "use strict";
  p();
  ki.exports = a(function(e) {
    if (/^\\x/.test(e)) return new d(e.substr(
      2
    ), "hex");
    for (var t = "", n = 0; n < e.length; ) if (e[n] !== "\\") t += e[n], ++n;
    else if (/[0-7]{3}/.test(e.substr(n + 1, 3))) t += String.fromCharCode(parseInt(e.substr(n + 1, 3), 8)), n += 4;
    else {
      for (var i = 1; n + i < e.length && e[n + i] === "\\"; ) i++;
      for (var s = 0; s < Math.floor(i / 2); ++s) t += "\\";
      n += Math.floor(i / 2) * 2;
    }
    return new d(t, "binary");
  }, "parseBytea");
});
var Wi = T((pf, Ni) => {
  p();
  var Ve = tr(), ze = rr(), xt = Ti(), Di = Fi(), Oi = Mi();
  function St(r) {
    return a(function(t) {
      return t === null ? t : r(t);
    }, "nullAllowed");
  }
  __name(St, "St");
  a(St, "allowNull");
  function qi(r) {
    return r === null ? r : r === "TRUE" || r === "t" || r === "true" || r === "y" || r === "yes" || r === "on" || r === "1";
  }
  __name(qi, "qi");
  a(qi, "parseBool");
  function za(r) {
    return r ? Ve.parse(r, qi) : null;
  }
  __name(za, "za");
  a(za, "parseBoolArray");
  function Ka(r) {
    return parseInt(r, 10);
  }
  __name(Ka, "Ka");
  a(Ka, "parseBaseTenInt");
  function sr(r) {
    return r ? Ve.parse(r, St(Ka)) : null;
  }
  __name(sr, "sr");
  a(sr, "parseIntegerArray");
  function Ya(r) {
    return r ? Ve.parse(r, St(function(e) {
      return Qi(e).trim();
    })) : null;
  }
  __name(Ya, "Ya");
  a(Ya, "parseBigIntegerArray");
  var Za = a(function(r) {
    if (!r) return null;
    var e = ze.create(r, function(t) {
      return t !== null && (t = cr(t)), t;
    });
    return e.parse();
  }, "parsePointArray"), or = a(function(r) {
    if (!r) return null;
    var e = ze.create(r, function(t) {
      return t !== null && (t = parseFloat(t)), t;
    });
    return e.parse();
  }, "parseFloatArray"), re = a(function(r) {
    if (!r) return null;
    var e = ze.create(r);
    return e.parse();
  }, "parseStringArray"), ar = a(function(r) {
    if (!r) return null;
    var e = ze.create(
      r,
      function(t) {
        return t !== null && (t = xt(t)), t;
      }
    );
    return e.parse();
  }, "parseDateArray"), Ja = a(function(r) {
    if (!r)
      return null;
    var e = ze.create(r, function(t) {
      return t !== null && (t = Di(t)), t;
    });
    return e.parse();
  }, "parseIntervalArray"), Xa = a(function(r) {
    return r ? Ve.parse(r, St(Oi)) : null;
  }, "parseByteAArray"), ur = a(function(r) {
    return parseInt(r, 10);
  }, "parseInteger"), Qi = a(function(r) {
    var e = String(r);
    return /^\d+$/.test(e) ? e : r;
  }, "parseBigInteger"), Ui = a(function(r) {
    return r ? Ve.parse(r, St(JSON.parse)) : null;
  }, "parseJsonArray"), cr = a(
    function(r) {
      return r[0] !== "(" ? null : (r = r.substring(1, r.length - 1).split(","), { x: parseFloat(r[0]), y: parseFloat(
        r[1]
      ) });
    },
    "parsePoint"
  ), eu = a(function(r) {
    if (r[0] !== "<" && r[1] !== "(") return null;
    for (var e = "(", t = "", n = false, i = 2; i < r.length - 1; i++) {
      if (n || (e += r[i]), r[i] === ")") {
        n = true;
        continue;
      } else if (!n) continue;
      r[i] !== "," && (t += r[i]);
    }
    var s = cr(e);
    return s.radius = parseFloat(t), s;
  }, "parseCircle"), tu = a(function(r) {
    r(20, Qi), r(21, ur), r(23, ur), r(26, ur), r(700, parseFloat), r(701, parseFloat), r(16, qi), r(1082, xt), r(1114, xt), r(1184, xt), r(
      600,
      cr
    ), r(651, re), r(718, eu), r(1e3, za), r(1001, Xa), r(1005, sr), r(1007, sr), r(1028, sr), r(1016, Ya), r(1017, Za), r(1021, or), r(1022, or), r(1231, or), r(1014, re), r(1015, re), r(1008, re), r(1009, re), r(1040, re), r(1041, re), r(
      1115,
      ar
    ), r(1182, ar), r(1185, ar), r(1186, Di), r(1187, Ja), r(17, Oi), r(114, JSON.parse.bind(JSON)), r(3802, JSON.parse.bind(JSON)), r(199, Ui), r(3807, Ui), r(3907, re), r(2951, re), r(791, re), r(1183, re), r(1270, re);
  }, "init");
  Ni.exports = { init: tu };
});
var Hi = T((mf, ji) => {
  "use strict";
  p();
  var z = 1e6;
  function ru(r) {
    var e = r.readInt32BE(0), t = r.readUInt32BE(
      4
    ), n = "";
    e < 0 && (e = ~e + (t === 0), t = ~t + 1 >>> 0, n = "-");
    var i = "", s, o, u, c, l, f;
    {
      if (s = e % z, e = e / z >>> 0, o = 4294967296 * s + t, t = o / z >>> 0, u = "" + (o - z * t), t === 0 && e === 0) return n + u + i;
      for (c = "", l = 6 - u.length, f = 0; f < l; f++) c += "0";
      i = c + u + i;
    }
    {
      if (s = e % z, e = e / z >>> 0, o = 4294967296 * s + t, t = o / z >>> 0, u = "" + (o - z * t), t === 0 && e === 0) return n + u + i;
      for (c = "", l = 6 - u.length, f = 0; f < l; f++) c += "0";
      i = c + u + i;
    }
    {
      if (s = e % z, e = e / z >>> 0, o = 4294967296 * s + t, t = o / z >>> 0, u = "" + (o - z * t), t === 0 && e === 0) return n + u + i;
      for (c = "", l = 6 - u.length, f = 0; f < l; f++) c += "0";
      i = c + u + i;
    }
    return s = e % z, o = 4294967296 * s + t, u = "" + o % z, n + u + i;
  }
  __name(ru, "ru");
  a(ru, "readInt8");
  ji.exports = ru;
});
var Ki = T((bf, zi) => {
  p();
  var nu = Hi(), L = a(function(r, e, t, n, i) {
    t = t || 0, n = n || false, i = i || function(A, C, D) {
      return A * Math.pow(2, D) + C;
    };
    var s = t >> 3, o = a(function(A) {
      return n ? ~A & 255 : A;
    }, "inv"), u = 255, c = 8 - t % 8;
    e < c && (u = 255 << 8 - e & 255, c = e), t && (u = u >> t % 8);
    var l = 0;
    t % 8 + e >= 8 && (l = i(0, o(r[s]) & u, c));
    for (var f = e + t >> 3, y = s + 1; y < f; y++) l = i(l, o(
      r[y]
    ), 8);
    var g = (e + t) % 8;
    return g > 0 && (l = i(l, o(r[f]) >> 8 - g, g)), l;
  }, "parseBits"), Vi = a(function(r, e, t) {
    var n = Math.pow(2, t - 1) - 1, i = L(r, 1), s = L(r, t, 1);
    if (s === 0) return 0;
    var o = 1, u = a(function(l, f, y) {
      l === 0 && (l = 1);
      for (var g = 1; g <= y; g++) o /= 2, (f & 1 << y - g) > 0 && (l += o);
      return l;
    }, "parsePrecisionBits"), c = L(r, e, t + 1, false, u);
    return s == Math.pow(
      2,
      t + 1
    ) - 1 ? c === 0 ? i === 0 ? 1 / 0 : -1 / 0 : NaN : (i === 0 ? 1 : -1) * Math.pow(2, s - n) * c;
  }, "parseFloatFromBits"), iu = a(function(r) {
    return L(r, 1) == 1 ? -1 * (L(r, 15, 1, true) + 1) : L(r, 15, 1);
  }, "parseInt16"), $i = a(function(r) {
    return L(r, 1) == 1 ? -1 * (L(
      r,
      31,
      1,
      true
    ) + 1) : L(r, 31, 1);
  }, "parseInt32"), su = a(function(r) {
    return Vi(r, 23, 8);
  }, "parseFloat32"), ou = a(function(r) {
    return Vi(r, 52, 11);
  }, "parseFloat64"), au = a(function(r) {
    var e = L(r, 16, 32);
    if (e == 49152) return NaN;
    for (var t = Math.pow(1e4, L(r, 16, 16)), n = 0, i = [], s = L(r, 16), o = 0; o < s; o++) n += L(r, 16, 64 + 16 * o) * t, t /= 1e4;
    var u = Math.pow(10, L(
      r,
      16,
      48
    ));
    return (e === 0 ? 1 : -1) * Math.round(n * u) / u;
  }, "parseNumeric"), Gi = a(function(r, e) {
    var t = L(e, 1), n = L(
      e,
      63,
      1
    ), i = new Date((t === 0 ? 1 : -1) * n / 1e3 + 9466848e5);
    return r || i.setTime(i.getTime() + i.getTimezoneOffset() * 6e4), i.usec = n % 1e3, i.getMicroSeconds = function() {
      return this.usec;
    }, i.setMicroSeconds = function(s) {
      this.usec = s;
    }, i.getUTCMicroSeconds = function() {
      return this.usec;
    }, i;
  }, "parseDate"), Ke = a(
    function(r) {
      for (var e = L(
        r,
        32
      ), t = L(r, 32, 32), n = L(r, 32, 64), i = 96, s = [], o = 0; o < e; o++) s[o] = L(r, 32, i), i += 32, i += 32;
      var u = a(function(l) {
        var f = L(r, 32, i);
        if (i += 32, f == 4294967295) return null;
        var y;
        if (l == 23 || l == 20) return y = L(r, f * 8, i), i += f * 8, y;
        if (l == 25) return y = r.toString(this.encoding, i >> 3, (i += f << 3) >> 3), y;
        console.log("ERROR: ElementType not implemented: " + l);
      }, "parseElement"), c = a(function(l, f) {
        var y = [], g;
        if (l.length > 1) {
          var A = l.shift();
          for (g = 0; g < A; g++) y[g] = c(l, f);
          l.unshift(A);
        } else for (g = 0; g < l[0]; g++) y[g] = u(f);
        return y;
      }, "parse");
      return c(s, n);
    },
    "parseArray"
  ), uu = a(function(r) {
    return r.toString("utf8");
  }, "parseText"), cu = a(function(r) {
    return r === null ? null : L(r, 8) > 0;
  }, "parseBool"), lu = a(function(r) {
    r(20, nu), r(21, iu), r(23, $i), r(26, $i), r(1700, au), r(700, su), r(701, ou), r(16, cu), r(1114, Gi.bind(null, false)), r(1184, Gi.bind(null, true)), r(1e3, Ke), r(1007, Ke), r(1016, Ke), r(1008, Ke), r(1009, Ke), r(25, uu);
  }, "init");
  zi.exports = { init: lu };
});
var Zi = T((Sf, Yi) => {
  p();
  Yi.exports = {
    BOOL: 16,
    BYTEA: 17,
    CHAR: 18,
    INT8: 20,
    INT2: 21,
    INT4: 23,
    REGPROC: 24,
    TEXT: 25,
    OID: 26,
    TID: 27,
    XID: 28,
    CID: 29,
    JSON: 114,
    XML: 142,
    PG_NODE_TREE: 194,
    SMGR: 210,
    PATH: 602,
    POLYGON: 604,
    CIDR: 650,
    FLOAT4: 700,
    FLOAT8: 701,
    ABSTIME: 702,
    RELTIME: 703,
    TINTERVAL: 704,
    CIRCLE: 718,
    MACADDR8: 774,
    MONEY: 790,
    MACADDR: 829,
    INET: 869,
    ACLITEM: 1033,
    BPCHAR: 1042,
    VARCHAR: 1043,
    DATE: 1082,
    TIME: 1083,
    TIMESTAMP: 1114,
    TIMESTAMPTZ: 1184,
    INTERVAL: 1186,
    TIMETZ: 1266,
    BIT: 1560,
    VARBIT: 1562,
    NUMERIC: 1700,
    REFCURSOR: 1790,
    REGPROCEDURE: 2202,
    REGOPER: 2203,
    REGOPERATOR: 2204,
    REGCLASS: 2205,
    REGTYPE: 2206,
    UUID: 2950,
    TXID_SNAPSHOT: 2970,
    PG_LSN: 3220,
    PG_NDISTINCT: 3361,
    PG_DEPENDENCIES: 3402,
    TSVECTOR: 3614,
    TSQUERY: 3615,
    GTSVECTOR: 3642,
    REGCONFIG: 3734,
    REGDICTIONARY: 3769,
    JSONB: 3802,
    REGNAMESPACE: 4089,
    REGROLE: 4096
  };
});
var Je = T((Ze) => {
  p();
  var fu = Wi(), hu = Ki(), pu = rr(), du = Zi();
  Ze.getTypeParser = yu;
  Ze.setTypeParser = mu;
  Ze.arrayParser = pu;
  Ze.builtins = du;
  var Ye = { text: {}, binary: {} };
  function Ji(r) {
    return String(r);
  }
  __name(Ji, "Ji");
  a(Ji, "noParse");
  function yu(r, e) {
    return e = e || "text", Ye[e] && Ye[e][r] || Ji;
  }
  __name(yu, "yu");
  a(yu, "getTypeParser");
  function mu(r, e, t) {
    typeof e == "function" && (t = e, e = "text"), Ye[e][r] = t;
  }
  __name(mu, "mu");
  a(mu, "setTypeParser");
  fu.init(function(r, e) {
    Ye.text[r] = e;
  });
  hu.init(function(r, e) {
    Ye.binary[r] = e;
  });
});
var At = T((If, Xi) => {
  "use strict";
  p();
  var wu = Je();
  function Et(r) {
    this._types = r || wu, this.text = {}, this.binary = {};
  }
  __name(Et, "Et");
  a(Et, "TypeOverrides");
  Et.prototype.getOverrides = function(r) {
    switch (r) {
      case "text":
        return this.text;
      case "binary":
        return this.binary;
      default:
        return {};
    }
  };
  Et.prototype.setTypeParser = function(r, e, t) {
    typeof e == "function" && (t = e, e = "text"), this.getOverrides(e)[r] = t;
  };
  Et.prototype.getTypeParser = function(r, e) {
    return e = e || "text", this.getOverrides(e)[r] || this._types.getTypeParser(r, e);
  };
  Xi.exports = Et;
});
function Xe(r) {
  let e = 1779033703, t = 3144134277, n = 1013904242, i = 2773480762, s = 1359893119, o = 2600822924, u = 528734635, c = 1541459225, l = 0, f = 0, y = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ], g = a((I, w) => I >>> w | I << 32 - w, "rrot"), A = new Uint32Array(64), C = new Uint8Array(64), D = a(() => {
    for (let B = 0, j = 0; B < 16; B++, j += 4) A[B] = C[j] << 24 | C[j + 1] << 16 | C[j + 2] << 8 | C[j + 3];
    for (let B = 16; B < 64; B++) {
      let j = g(A[B - 15], 7) ^ g(A[B - 15], 18) ^ A[B - 15] >>> 3, le = g(
        A[B - 2],
        17
      ) ^ g(A[B - 2], 19) ^ A[B - 2] >>> 10;
      A[B] = A[B - 16] + j + A[B - 7] + le | 0;
    }
    let I = e, w = t, Z = n, W = i, J = s, X = o, se = u, oe = c;
    for (let B = 0; B < 64; B++) {
      let j = g(J, 6) ^ g(J, 11) ^ g(J, 25), le = J & X ^ ~J & se, de = oe + j + le + y[B] + A[B] | 0, We = g(I, 2) ^ g(
        I,
        13
      ) ^ g(I, 22), fe = I & w ^ I & Z ^ w & Z, _e = We + fe | 0;
      oe = se, se = X, X = J, J = W + de | 0, W = Z, Z = w, w = I, I = de + _e | 0;
    }
    e = e + I | 0, t = t + w | 0, n = n + Z | 0, i = i + W | 0, s = s + J | 0, o = o + X | 0, u = u + se | 0, c = c + oe | 0, f = 0;
  }, "process"), Y = a((I) => {
    typeof I == "string" && (I = new TextEncoder().encode(I));
    for (let w = 0; w < I.length; w++) C[f++] = I[w], f === 64 && D();
    l += I.length;
  }, "add"), P = a(() => {
    if (C[f++] = 128, f == 64 && D(), f + 8 > 64) {
      for (; f < 64; ) C[f++] = 0;
      D();
    }
    for (; f < 58; ) C[f++] = 0;
    let I = l * 8;
    C[f++] = I / 1099511627776 & 255, C[f++] = I / 4294967296 & 255, C[f++] = I >>> 24, C[f++] = I >>> 16 & 255, C[f++] = I >>> 8 & 255, C[f++] = I & 255, D();
    let w = new Uint8Array(
      32
    );
    return w[0] = e >>> 24, w[1] = e >>> 16 & 255, w[2] = e >>> 8 & 255, w[3] = e & 255, w[4] = t >>> 24, w[5] = t >>> 16 & 255, w[6] = t >>> 8 & 255, w[7] = t & 255, w[8] = n >>> 24, w[9] = n >>> 16 & 255, w[10] = n >>> 8 & 255, w[11] = n & 255, w[12] = i >>> 24, w[13] = i >>> 16 & 255, w[14] = i >>> 8 & 255, w[15] = i & 255, w[16] = s >>> 24, w[17] = s >>> 16 & 255, w[18] = s >>> 8 & 255, w[19] = s & 255, w[20] = o >>> 24, w[21] = o >>> 16 & 255, w[22] = o >>> 8 & 255, w[23] = o & 255, w[24] = u >>> 24, w[25] = u >>> 16 & 255, w[26] = u >>> 8 & 255, w[27] = u & 255, w[28] = c >>> 24, w[29] = c >>> 16 & 255, w[30] = c >>> 8 & 255, w[31] = c & 255, w;
  }, "digest");
  return r === void 0 ? { add: Y, digest: P } : (Y(r), P());
}
__name(Xe, "Xe");
var es = G(() => {
  "use strict";
  p();
  a(Xe, "sha256");
});
var U;
var et;
var ts = G(() => {
  "use strict";
  p();
  U = class U2 {
    static {
      __name(this, "U");
    }
    constructor() {
      E(this, "_dataLength", 0);
      E(this, "_bufferLength", 0);
      E(this, "_state", new Int32Array(4));
      E(this, "_buffer", new ArrayBuffer(68));
      E(this, "_buffer8");
      E(this, "_buffer32");
      this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
    }
    static hashByteArray(e, t = false) {
      return this.onePassHasher.start().appendByteArray(
        e
      ).end(t);
    }
    static hashStr(e, t = false) {
      return this.onePassHasher.start().appendStr(e).end(t);
    }
    static hashAsciiStr(e, t = false) {
      return this.onePassHasher.start().appendAsciiStr(e).end(t);
    }
    static _hex(e) {
      let t = U2.hexChars, n = U2.hexOut, i, s, o, u;
      for (u = 0; u < 4; u += 1) for (s = u * 8, i = e[u], o = 0; o < 8; o += 2) n[s + 1 + o] = t.charAt(i & 15), i >>>= 4, n[s + 0 + o] = t.charAt(
        i & 15
      ), i >>>= 4;
      return n.join("");
    }
    static _md5cycle(e, t) {
      let n = e[0], i = e[1], s = e[2], o = e[3];
      n += (i & s | ~i & o) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[10] - 42063 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & o | s & ~o) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i ^ s ^ o) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (s ^ (i | ~o)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + s | 0, e[0] = n + e[0] | 0, e[1] = i + e[1] | 0, e[2] = s + e[2] | 0, e[3] = o + e[3] | 0;
    }
    start() {
      return this._dataLength = 0, this._bufferLength = 0, this._state.set(U2.stateIdentity), this;
    }
    appendStr(e) {
      let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o;
      for (o = 0; o < e.length; o += 1) {
        if (s = e.charCodeAt(o), s < 128) t[i++] = s;
        else if (s < 2048) t[i++] = (s >>> 6) + 192, t[i++] = s & 63 | 128;
        else if (s < 55296 || s > 56319) t[i++] = (s >>> 12) + 224, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
        else {
          if (s = (s - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, s > 1114111) throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
          t[i++] = (s >>> 18) + 240, t[i++] = s >>> 12 & 63 | 128, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
        }
        i >= 64 && (this._dataLength += 64, U2._md5cycle(this._state, n), i -= 64, n[0] = n[16]);
      }
      return this._bufferLength = i, this;
    }
    appendAsciiStr(e) {
      let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
      for (; ; ) {
        for (s = Math.min(e.length - o, 64 - i); s--; ) t[i++] = e.charCodeAt(o++);
        if (i < 64) break;
        this._dataLength += 64, U2._md5cycle(this._state, n), i = 0;
      }
      return this._bufferLength = i, this;
    }
    appendByteArray(e) {
      let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
      for (; ; ) {
        for (s = Math.min(e.length - o, 64 - i); s--; ) t[i++] = e[o++];
        if (i < 64) break;
        this._dataLength += 64, U2._md5cycle(this._state, n), i = 0;
      }
      return this._bufferLength = i, this;
    }
    getState() {
      let e = this._state;
      return { buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)), buflen: this._bufferLength, length: this._dataLength, state: [e[0], e[1], e[2], e[3]] };
    }
    setState(e) {
      let t = e.buffer, n = e.state, i = this._state, s;
      for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], s = 0; s < t.length; s += 1) this._buffer8[s] = t.charCodeAt(s);
    }
    end(e = false) {
      let t = this._bufferLength, n = this._buffer8, i = this._buffer32, s = (t >> 2) + 1;
      this._dataLength += t;
      let o = this._dataLength * 8;
      if (n[t] = 128, n[t + 1] = n[t + 2] = n[t + 3] = 0, i.set(U2.buffer32Identity.subarray(s), s), t > 55 && (U2._md5cycle(this._state, i), i.set(U2.buffer32Identity)), o <= 4294967295) i[14] = o;
      else {
        let u = o.toString(16).match(/(.*?)(.{0,8})$/);
        if (u === null) return;
        let c = parseInt(
          u[2],
          16
        ), l = parseInt(u[1], 16) || 0;
        i[14] = c, i[15] = l;
      }
      return U2._md5cycle(this._state, i), e ? this._state : U2._hex(
        this._state
      );
    }
  };
  a(U, "Md5"), E(U, "stateIdentity", new Int32Array([1732584193, -271733879, -1732584194, 271733878])), E(U, "buffer32Identity", new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), E(U, "hexChars", "0123456789abcdef"), E(U, "hexOut", []), E(U, "onePassHasher", new U());
  et = U;
});
var lr = {};
ie(lr, { createHash: /* @__PURE__ */ __name(() => bu, "createHash"), createHmac: /* @__PURE__ */ __name(() => vu, "createHmac"), randomBytes: /* @__PURE__ */ __name(() => gu, "randomBytes") });
function gu(r) {
  return crypto.getRandomValues(d.alloc(r));
}
__name(gu, "gu");
function bu(r) {
  if (r === "sha256") return { update: a(function(e) {
    return { digest: a(
      function() {
        return d.from(Xe(e));
      },
      "digest"
    ) };
  }, "update") };
  if (r === "md5") return { update: a(function(e) {
    return {
      digest: a(function() {
        return typeof e == "string" ? et.hashStr(e) : et.hashByteArray(e);
      }, "digest")
    };
  }, "update") };
  throw new Error(`Hash type '${r}' not supported`);
}
__name(bu, "bu");
function vu(r, e) {
  if (r !== "sha256") throw new Error(`Only sha256 is supported (requested: '${r}')`);
  return { update: a(function(t) {
    return { digest: a(
      function() {
        typeof e == "string" && (e = new TextEncoder().encode(e)), typeof t == "string" && (t = new TextEncoder().encode(
          t
        ));
        let n = e.length;
        if (n > 64) e = Xe(e);
        else if (n < 64) {
          let c = new Uint8Array(64);
          c.set(e), e = c;
        }
        let i = new Uint8Array(
          64
        ), s = new Uint8Array(64);
        for (let c = 0; c < 64; c++) i[c] = 54 ^ e[c], s[c] = 92 ^ e[c];
        let o = new Uint8Array(t.length + 64);
        o.set(i, 0), o.set(t, 64);
        let u = new Uint8Array(96);
        return u.set(s, 0), u.set(Xe(o), 64), d.from(Xe(u));
      },
      "digest"
    ) };
  }, "update") };
}
__name(vu, "vu");
var fr = G(() => {
  "use strict";
  p();
  es();
  ts();
  a(gu, "randomBytes");
  a(bu, "createHash");
  a(vu, "createHmac");
});
var tt = T((Qf, hr) => {
  "use strict";
  p();
  hr.exports = {
    host: "localhost",
    user: m.platform === "win32" ? m.env.USERNAME : m.env.USER,
    database: void 0,
    password: null,
    connectionString: void 0,
    port: 5432,
    rows: 0,
    binary: false,
    max: 10,
    idleTimeoutMillis: 3e4,
    client_encoding: "",
    ssl: false,
    application_name: void 0,
    fallback_application_name: void 0,
    options: void 0,
    parseInputDatesAsUTC: false,
    statement_timeout: false,
    lock_timeout: false,
    idle_in_transaction_session_timeout: false,
    query_timeout: false,
    connect_timeout: 0,
    keepalives: 1,
    keepalives_idle: 0
  };
  var Me = Je(), xu = Me.getTypeParser(20, "text"), Su = Me.getTypeParser(
    1016,
    "text"
  );
  hr.exports.__defineSetter__("parseInt8", function(r) {
    Me.setTypeParser(20, "text", r ? Me.getTypeParser(
      23,
      "text"
    ) : xu), Me.setTypeParser(1016, "text", r ? Me.getTypeParser(1007, "text") : Su);
  });
});
var rt = T((Wf, ns) => {
  "use strict";
  p();
  var Eu = (fr(), O(lr)), Au = tt();
  function Cu(r) {
    var e = r.replace(
      /\\/g,
      "\\\\"
    ).replace(/"/g, '\\"');
    return '"' + e + '"';
  }
  __name(Cu, "Cu");
  a(Cu, "escapeElement");
  function rs(r) {
    for (var e = "{", t = 0; t < r.length; t++) t > 0 && (e = e + ","), r[t] === null || typeof r[t] > "u" ? e = e + "NULL" : Array.isArray(r[t]) ? e = e + rs(r[t]) : r[t] instanceof d ? e += "\\\\x" + r[t].toString("hex") : e += Cu(Ct(r[t]));
    return e = e + "}", e;
  }
  __name(rs, "rs");
  a(rs, "arrayString");
  var Ct = a(function(r, e) {
    if (r == null) return null;
    if (r instanceof d) return r;
    if (ArrayBuffer.isView(r)) {
      var t = d.from(r.buffer, r.byteOffset, r.byteLength);
      return t.length === r.byteLength ? t : t.slice(r.byteOffset, r.byteOffset + r.byteLength);
    }
    return r instanceof Date ? Au.parseInputDatesAsUTC ? Tu(r) : Iu(r) : Array.isArray(r) ? rs(r) : typeof r == "object" ? _u(r, e) : r.toString();
  }, "prepareValue");
  function _u(r, e) {
    if (r && typeof r.toPostgres == "function") {
      if (e = e || [], e.indexOf(r) !== -1) throw new Error('circular reference detected while preparing "' + r + '" for query');
      return e.push(r), Ct(r.toPostgres(Ct), e);
    }
    return JSON.stringify(r);
  }
  __name(_u, "_u");
  a(_u, "prepareObject");
  function N(r, e) {
    for (r = "" + r; r.length < e; ) r = "0" + r;
    return r;
  }
  __name(N, "N");
  a(N, "pad");
  function Iu(r) {
    var e = -r.getTimezoneOffset(), t = r.getFullYear(), n = t < 1;
    n && (t = Math.abs(t) + 1);
    var i = N(t, 4) + "-" + N(r.getMonth() + 1, 2) + "-" + N(r.getDate(), 2) + "T" + N(
      r.getHours(),
      2
    ) + ":" + N(r.getMinutes(), 2) + ":" + N(r.getSeconds(), 2) + "." + N(r.getMilliseconds(), 3);
    return e < 0 ? (i += "-", e *= -1) : i += "+", i += N(Math.floor(e / 60), 2) + ":" + N(e % 60, 2), n && (i += " BC"), i;
  }
  __name(Iu, "Iu");
  a(Iu, "dateToString");
  function Tu(r) {
    var e = r.getUTCFullYear(), t = e < 1;
    t && (e = Math.abs(e) + 1);
    var n = N(e, 4) + "-" + N(r.getUTCMonth() + 1, 2) + "-" + N(r.getUTCDate(), 2) + "T" + N(r.getUTCHours(), 2) + ":" + N(r.getUTCMinutes(), 2) + ":" + N(r.getUTCSeconds(), 2) + "." + N(
      r.getUTCMilliseconds(),
      3
    );
    return n += "+00:00", t && (n += " BC"), n;
  }
  __name(Tu, "Tu");
  a(Tu, "dateToStringUTC");
  function Pu(r, e, t) {
    return r = typeof r == "string" ? { text: r } : r, e && (typeof e == "function" ? r.callback = e : r.values = e), t && (r.callback = t), r;
  }
  __name(Pu, "Pu");
  a(Pu, "normalizeQueryConfig");
  var pr = a(function(r) {
    return Eu.createHash("md5").update(r, "utf-8").digest("hex");
  }, "md5"), Ru = a(
    function(r, e, t) {
      var n = pr(e + r), i = pr(d.concat([d.from(n), t]));
      return "md5" + i;
    },
    "postgresMd5PasswordHash"
  );
  ns.exports = {
    prepareValue: a(function(e) {
      return Ct(e);
    }, "prepareValueWrapper"),
    normalizeQueryConfig: Pu,
    postgresMd5PasswordHash: Ru,
    md5: pr
  };
});
var nt = {};
ie(nt, { default: /* @__PURE__ */ __name(() => ku, "default") });
var ku;
var it = G(() => {
  "use strict";
  p();
  ku = {};
});
var ds = T((th, ps) => {
  "use strict";
  p();
  var yr = (fr(), O(lr));
  function Mu(r) {
    if (r.indexOf("SCRAM-SHA-256") === -1) throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");
    let e = yr.randomBytes(
      18
    ).toString("base64");
    return { mechanism: "SCRAM-SHA-256", clientNonce: e, response: "n,,n=*,r=" + e, message: "SASLInitialResponse" };
  }
  __name(Mu, "Mu");
  a(Mu, "startSession");
  function Uu(r, e, t) {
    if (r.message !== "SASLInitialResponse") throw new Error(
      "SASL: Last message was not SASLInitialResponse"
    );
    if (typeof e != "string") throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
    if (typeof t != "string") throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
    let n = qu(t);
    if (n.nonce.startsWith(r.clientNonce)) {
      if (n.nonce.length === r.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
    var i = d.from(n.salt, "base64"), s = Wu(e, i, n.iteration), o = Ue(s, "Client Key"), u = Nu(
      o
    ), c = "n=*,r=" + r.clientNonce, l = "r=" + n.nonce + ",s=" + n.salt + ",i=" + n.iteration, f = "c=biws,r=" + n.nonce, y = c + "," + l + "," + f, g = Ue(u, y), A = hs(o, g), C = A.toString("base64"), D = Ue(s, "Server Key"), Y = Ue(D, y);
    r.message = "SASLResponse", r.serverSignature = Y.toString("base64"), r.response = f + ",p=" + C;
  }
  __name(Uu, "Uu");
  a(Uu, "continueSession");
  function Du(r, e) {
    if (r.message !== "SASLResponse") throw new Error("SASL: Last message was not SASLResponse");
    if (typeof e != "string") throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
    let { serverSignature: t } = Qu(
      e
    );
    if (t !== r.serverSignature) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
  }
  __name(Du, "Du");
  a(Du, "finalizeSession");
  function Ou(r) {
    if (typeof r != "string") throw new TypeError("SASL: text must be a string");
    return r.split("").map((e, t) => r.charCodeAt(t)).every((e) => e >= 33 && e <= 43 || e >= 45 && e <= 126);
  }
  __name(Ou, "Ou");
  a(Ou, "isPrintableChars");
  function ls(r) {
    return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(r);
  }
  __name(ls, "ls");
  a(ls, "isBase64");
  function fs(r) {
    if (typeof r != "string") throw new TypeError("SASL: attribute pairs text must be a string");
    return new Map(r.split(",").map((e) => {
      if (!/^.=/.test(e)) throw new Error("SASL: Invalid attribute pair entry");
      let t = e[0], n = e.substring(2);
      return [t, n];
    }));
  }
  __name(fs, "fs");
  a(fs, "parseAttributePairs");
  function qu(r) {
    let e = fs(r), t = e.get("r");
    if (t) {
      if (!Ou(t)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
    let n = e.get("s");
    if (n) {
      if (!ls(n)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
    let i = e.get("i");
    if (i) {
      if (!/^[1-9][0-9]*$/.test(i)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
    let s = parseInt(i, 10);
    return { nonce: t, salt: n, iteration: s };
  }
  __name(qu, "qu");
  a(qu, "parseServerFirstMessage");
  function Qu(r) {
    let t = fs(r).get("v");
    if (t) {
      if (!ls(t)) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
    } else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
    return { serverSignature: t };
  }
  __name(Qu, "Qu");
  a(Qu, "parseServerFinalMessage");
  function hs(r, e) {
    if (!d.isBuffer(r)) throw new TypeError("first argument must be a Buffer");
    if (!d.isBuffer(e)) throw new TypeError(
      "second argument must be a Buffer"
    );
    if (r.length !== e.length) throw new Error("Buffer lengths must match");
    if (r.length === 0) throw new Error("Buffers cannot be empty");
    return d.from(r.map((t, n) => r[n] ^ e[n]));
  }
  __name(hs, "hs");
  a(hs, "xorBuffers");
  function Nu(r) {
    return yr.createHash("sha256").update(r).digest();
  }
  __name(Nu, "Nu");
  a(Nu, "sha256");
  function Ue(r, e) {
    return yr.createHmac("sha256", r).update(e).digest();
  }
  __name(Ue, "Ue");
  a(Ue, "hmacSha256");
  function Wu(r, e, t) {
    for (var n = Ue(
      r,
      d.concat([e, d.from([0, 0, 0, 1])])
    ), i = n, s = 0; s < t - 1; s++) n = Ue(r, n), i = hs(i, n);
    return i;
  }
  __name(Wu, "Wu");
  a(Wu, "Hi");
  ps.exports = { startSession: Mu, continueSession: Uu, finalizeSession: Du };
});
var mr = {};
ie(mr, { join: /* @__PURE__ */ __name(() => ju, "join") });
function ju(...r) {
  return r.join("/");
}
__name(ju, "ju");
var wr = G(() => {
  "use strict";
  p();
  a(
    ju,
    "join"
  );
});
var gr = {};
ie(gr, { stat: /* @__PURE__ */ __name(() => Hu, "stat") });
function Hu(r, e) {
  e(new Error("No filesystem"));
}
__name(Hu, "Hu");
var br = G(() => {
  "use strict";
  p();
  a(Hu, "stat");
});
var vr = {};
ie(vr, { default: /* @__PURE__ */ __name(() => $u, "default") });
var $u;
var xr = G(() => {
  "use strict";
  p();
  $u = {};
});
var ys = {};
ie(ys, { StringDecoder: /* @__PURE__ */ __name(() => Sr, "StringDecoder") });
var Er;
var Sr;
var ms = G(() => {
  "use strict";
  p();
  Er = class Er {
    static {
      __name(this, "Er");
    }
    constructor(e) {
      E(this, "td");
      this.td = new TextDecoder(e);
    }
    write(e) {
      return this.td.decode(e, { stream: true });
    }
    end(e) {
      return this.td.decode(e);
    }
  };
  a(Er, "StringDecoder");
  Sr = Er;
});
var vs = T((fh, bs) => {
  "use strict";
  p();
  var { Transform: Gu } = (xr(), O(vr)), { StringDecoder: Vu } = (ms(), O(ys)), ve = /* @__PURE__ */ Symbol(
    "last"
  ), It = /* @__PURE__ */ Symbol("decoder");
  function zu(r, e, t) {
    let n;
    if (this.overflow) {
      if (n = this[It].write(r).split(
        this.matcher
      ), n.length === 1) return t();
      n.shift(), this.overflow = false;
    } else this[ve] += this[It].write(r), n = this[ve].split(this.matcher);
    this[ve] = n.pop();
    for (let i = 0; i < n.length; i++) try {
      gs(this, this.mapper(n[i]));
    } catch (s) {
      return t(s);
    }
    if (this.overflow = this[ve].length > this.maxLength, this.overflow && !this.skipOverflow) {
      t(new Error(
        "maximum buffer reached"
      ));
      return;
    }
    t();
  }
  __name(zu, "zu");
  a(zu, "transform");
  function Ku(r) {
    if (this[ve] += this[It].end(), this[ve])
      try {
        gs(this, this.mapper(this[ve]));
      } catch (e) {
        return r(e);
      }
    r();
  }
  __name(Ku, "Ku");
  a(Ku, "flush");
  function gs(r, e) {
    e !== void 0 && r.push(e);
  }
  __name(gs, "gs");
  a(gs, "push");
  function ws(r) {
    return r;
  }
  __name(ws, "ws");
  a(ws, "noop");
  function Yu(r, e, t) {
    switch (r = r || /\r?\n/, e = e || ws, t = t || {}, arguments.length) {
      case 1:
        typeof r == "function" ? (e = r, r = /\r?\n/) : typeof r == "object" && !(r instanceof RegExp) && !r[Symbol.split] && (t = r, r = /\r?\n/);
        break;
      case 2:
        typeof r == "function" ? (t = e, e = r, r = /\r?\n/) : typeof e == "object" && (t = e, e = ws);
    }
    t = Object.assign({}, t), t.autoDestroy = true, t.transform = zu, t.flush = Ku, t.readableObjectMode = true;
    let n = new Gu(t);
    return n[ve] = "", n[It] = new Vu("utf8"), n.matcher = r, n.mapper = e, n.maxLength = t.maxLength, n.skipOverflow = t.skipOverflow || false, n.overflow = false, n._destroy = function(i, s) {
      this._writableState.errorEmitted = false, s(i);
    }, n;
  }
  __name(Yu, "Yu");
  a(Yu, "split");
  bs.exports = Yu;
});
var Es = T((dh, pe) => {
  "use strict";
  p();
  var xs = (wr(), O(mr)), Zu = (xr(), O(vr)).Stream, Ju = vs(), Ss = (it(), O(nt)), Xu = 5432, Tt = m.platform === "win32", st = m.stderr, ec = 56, tc = 7, rc = 61440, nc = 32768;
  function ic(r) {
    return (r & rc) == nc;
  }
  __name(ic, "ic");
  a(ic, "isRegFile");
  var De = ["host", "port", "database", "user", "password"], Ar = De.length, sc = De[Ar - 1];
  function Cr() {
    var r = st instanceof Zu && st.writable === true;
    if (r) {
      var e = Array.prototype.slice.call(arguments).concat(`
`);
      st.write(Ss.format.apply(Ss, e));
    }
  }
  __name(Cr, "Cr");
  a(Cr, "warn");
  Object.defineProperty(pe.exports, "isWin", { get: a(function() {
    return Tt;
  }, "get"), set: a(function(r) {
    Tt = r;
  }, "set") });
  pe.exports.warnTo = function(r) {
    var e = st;
    return st = r, e;
  };
  pe.exports.getFileName = function(r) {
    var e = r || m.env, t = e.PGPASSFILE || (Tt ? xs.join(e.APPDATA || "./", "postgresql", "pgpass.conf") : xs.join(e.HOME || "./", ".pgpass"));
    return t;
  };
  pe.exports.usePgPass = function(r, e) {
    return Object.prototype.hasOwnProperty.call(m.env, "PGPASSWORD") ? false : Tt ? true : (e = e || "<unkn>", ic(r.mode) ? r.mode & (ec | tc) ? (Cr('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', e), false) : true : (Cr('WARNING: password file "%s" is not a plain file', e), false));
  };
  var oc = pe.exports.match = function(r, e) {
    return De.slice(0, -1).reduce(function(t, n, i) {
      return i == 1 && Number(r[n] || Xu) === Number(
        e[n]
      ) ? t && true : t && (e[n] === "*" || e[n] === r[n]);
    }, true);
  };
  pe.exports.getPassword = function(r, e, t) {
    var n, i = e.pipe(
      Ju()
    );
    function s(c) {
      var l = ac(c);
      l && uc(l) && oc(r, l) && (n = l[sc], i.end());
    }
    __name(s, "s");
    a(s, "onLine");
    var o = a(function() {
      e.destroy(), t(n);
    }, "onEnd"), u = a(function(c) {
      e.destroy(), Cr("WARNING: error on reading file: %s", c), t(
        void 0
      );
    }, "onErr");
    e.on("error", u), i.on("data", s).on("end", o).on("error", u);
  };
  var ac = pe.exports.parseLine = function(r) {
    if (r.length < 11 || r.match(/^\s+#/)) return null;
    for (var e = "", t = "", n = 0, i = 0, s = 0, o = {}, u = false, c = a(
      function(f, y, g) {
        var A = r.substring(y, g);
        Object.hasOwnProperty.call(m.env, "PGPASS_NO_DEESCAPE") || (A = A.replace(/\\([:\\])/g, "$1")), o[De[f]] = A;
      },
      "addToObj"
    ), l = 0; l < r.length - 1; l += 1) {
      if (e = r.charAt(l + 1), t = r.charAt(
        l
      ), u = n == Ar - 1, u) {
        c(n, i);
        break;
      }
      l >= 0 && e == ":" && t !== "\\" && (c(n, i, l + 1), i = l + 2, n += 1);
    }
    return o = Object.keys(o).length === Ar ? o : null, o;
  }, uc = pe.exports.isValidEntry = function(r) {
    for (var e = { 0: function(o) {
      return o.length > 0;
    }, 1: function(o) {
      return o === "*" ? true : (o = Number(o), isFinite(o) && o > 0 && o < 9007199254740992 && Math.floor(o) === o);
    }, 2: function(o) {
      return o.length > 0;
    }, 3: function(o) {
      return o.length > 0;
    }, 4: function(o) {
      return o.length > 0;
    } }, t = 0; t < De.length; t += 1) {
      var n = e[t], i = r[De[t]] || "", s = n(i);
      if (!s) return false;
    }
    return true;
  };
});
var Cs = T((gh, _r) => {
  "use strict";
  p();
  var wh = (wr(), O(mr)), As = (br(), O(gr)), Pt = Es();
  _r.exports = function(r, e) {
    var t = Pt.getFileName();
    As.stat(t, function(n, i) {
      if (n || !Pt.usePgPass(i, t)) return e(void 0);
      var s = As.createReadStream(
        t
      );
      Pt.getPassword(r, s, e);
    });
  };
  _r.exports.warnTo = Pt.warnTo;
});
var _s = {};
ie(_s, { default: /* @__PURE__ */ __name(() => cc, "default") });
var cc;
var Is = G(() => {
  "use strict";
  p();
  cc = {};
});
var Ps = T((xh, Ts) => {
  "use strict";
  p();
  var lc = (Zt(), O(gi)), Ir = (br(), O(gr));
  function Tr(r) {
    if (r.charAt(0) === "/") {
      var t = r.split(" ");
      return { host: t[0], database: t[1] };
    }
    var e = lc.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r) ? encodeURI(r).replace(/\%25(\d\d)/g, "%$1") : r, true), t = e.query;
    for (var n in t) Array.isArray(t[n]) && (t[n] = t[n][t[n].length - 1]);
    var i = (e.auth || ":").split(":");
    if (t.user = i[0], t.password = i.splice(1).join(
      ":"
    ), t.port = e.port, e.protocol == "socket:") return t.host = decodeURI(e.pathname), t.database = e.query.db, t.client_encoding = e.query.encoding, t;
    t.host || (t.host = e.hostname);
    var s = e.pathname;
    if (!t.host && s && /^%2f/i.test(s)) {
      var o = s.split("/");
      t.host = decodeURIComponent(o[0]), s = o.splice(1).join("/");
    }
    switch (s && s.charAt(
      0
    ) === "/" && (s = s.slice(1) || null), t.database = s && decodeURI(s), (t.ssl === "true" || t.ssl === "1") && (t.ssl = true), t.ssl === "0" && (t.ssl = false), (t.sslcert || t.sslkey || t.sslrootcert || t.sslmode) && (t.ssl = {}), t.sslcert && (t.ssl.cert = Ir.readFileSync(t.sslcert).toString()), t.sslkey && (t.ssl.key = Ir.readFileSync(t.sslkey).toString()), t.sslrootcert && (t.ssl.ca = Ir.readFileSync(t.sslrootcert).toString()), t.sslmode) {
      case "disable": {
        t.ssl = false;
        break;
      }
      case "prefer":
      case "require":
      case "verify-ca":
      case "verify-full":
        break;
      case "no-verify": {
        t.ssl.rejectUnauthorized = false;
        break;
      }
    }
    return t;
  }
  __name(Tr, "Tr");
  a(Tr, "parse");
  Ts.exports = Tr;
  Tr.parse = Tr;
});
var Rt = T((Ah, Ls) => {
  "use strict";
  p();
  var fc = (Is(), O(_s)), Bs = tt(), Rs = Ps().parse, H = a(function(r, e, t) {
    return t === void 0 ? t = m.env["PG" + r.toUpperCase()] : t === false || (t = m.env[t]), e[r] || t || Bs[r];
  }, "val"), hc = a(function() {
    switch (m.env.PGSSLMODE) {
      case "disable":
        return false;
      case "prefer":
      case "require":
      case "verify-ca":
      case "verify-full":
        return true;
      case "no-verify":
        return { rejectUnauthorized: false };
    }
    return Bs.ssl;
  }, "readSSLConfigFromEnvironment"), Oe = a(function(r) {
    return "'" + ("" + r).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
  }, "quoteParamValue"), ne = a(function(r, e, t) {
    var n = e[t];
    n != null && r.push(t + "=" + Oe(n));
  }, "add"), Rr = class Rr {
    static {
      __name(this, "Rr");
    }
    constructor(e) {
      e = typeof e == "string" ? Rs(e) : e || {}, e.connectionString && (e = Object.assign({}, e, Rs(e.connectionString))), this.user = H("user", e), this.database = H("database", e), this.database === void 0 && (this.database = this.user), this.port = parseInt(H("port", e), 10), this.host = H("host", e), Object.defineProperty(this, "password", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: H("password", e)
      }), this.binary = H("binary", e), this.options = H("options", e), this.ssl = typeof e.ssl > "u" ? hc() : e.ssl, typeof this.ssl == "string" && this.ssl === "true" && (this.ssl = true), this.ssl === "no-verify" && (this.ssl = { rejectUnauthorized: false }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this.client_encoding = H("client_encoding", e), this.replication = H("replication", e), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = H("application_name", e, "PGAPPNAME"), this.fallback_application_name = H("fallback_application_name", e, false), this.statement_timeout = H("statement_timeout", e, false), this.lock_timeout = H("lock_timeout", e, false), this.idle_in_transaction_session_timeout = H("idle_in_transaction_session_timeout", e, false), this.query_timeout = H("query_timeout", e, false), e.connectionTimeoutMillis === void 0 ? this.connect_timeout = m.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(e.connectionTimeoutMillis / 1e3), e.keepAlive === false ? this.keepalives = 0 : e.keepAlive === true && (this.keepalives = 1), typeof e.keepAliveInitialDelayMillis == "number" && (this.keepalives_idle = Math.floor(e.keepAliveInitialDelayMillis / 1e3));
    }
    getLibpqConnectionString(e) {
      var t = [];
      ne(t, this, "user"), ne(t, this, "password"), ne(t, this, "port"), ne(t, this, "application_name"), ne(
        t,
        this,
        "fallback_application_name"
      ), ne(t, this, "connect_timeout"), ne(t, this, "options");
      var n = typeof this.ssl == "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
      if (ne(t, n, "sslmode"), ne(t, n, "sslca"), ne(t, n, "sslkey"), ne(t, n, "sslcert"), ne(t, n, "sslrootcert"), this.database && t.push("dbname=" + Oe(this.database)), this.replication && t.push("replication=" + Oe(this.replication)), this.host && t.push("host=" + Oe(this.host)), this.isDomainSocket) return e(null, t.join(" "));
      this.client_encoding && t.push("client_encoding=" + Oe(this.client_encoding)), fc.lookup(this.host, function(i, s) {
        return i ? e(i, null) : (t.push("hostaddr=" + Oe(s)), e(null, t.join(" ")));
      });
    }
  };
  a(Rr, "ConnectionParameters");
  var Pr = Rr;
  Ls.exports = Pr;
});
var Ms = T((Ih, ks) => {
  "use strict";
  p();
  var pc = Je(), Fs = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/, Lr = class Lr {
    static {
      __name(this, "Lr");
    }
    constructor(e, t) {
      this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = void 0, this._types = t, this.RowCtor = null, this.rowAsArray = e === "array", this.rowAsArray && (this.parseRow = this._parseRowAsArray);
    }
    addCommandComplete(e) {
      var t;
      e.text ? t = Fs.exec(e.text) : t = Fs.exec(e.command), t && (this.command = t[1], t[3] ? (this.oid = parseInt(
        t[2],
        10
      ), this.rowCount = parseInt(t[3], 10)) : t[2] && (this.rowCount = parseInt(t[2], 10)));
    }
    _parseRowAsArray(e) {
      for (var t = new Array(
        e.length
      ), n = 0, i = e.length; n < i; n++) {
        var s = e[n];
        s !== null ? t[n] = this._parsers[n](s) : t[n] = null;
      }
      return t;
    }
    parseRow(e) {
      for (var t = {}, n = 0, i = e.length; n < i; n++) {
        var s = e[n], o = this.fields[n].name;
        s !== null ? t[o] = this._parsers[n](
          s
        ) : t[o] = null;
      }
      return t;
    }
    addRow(e) {
      this.rows.push(e);
    }
    addFields(e) {
      this.fields = e, this.fields.length && (this._parsers = new Array(e.length));
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        this._types ? this._parsers[t] = this._types.getTypeParser(n.dataTypeID, n.format || "text") : this._parsers[t] = pc.getTypeParser(n.dataTypeID, n.format || "text");
      }
    }
  };
  a(Lr, "Result");
  var Br = Lr;
  ks.exports = Br;
});
var qs = T((Rh, Os) => {
  "use strict";
  p();
  var { EventEmitter: dc } = ge(), Us = Ms(), Ds = rt(), kr = class kr extends dc {
    static {
      __name(this, "kr");
    }
    constructor(e, t, n) {
      super(), e = Ds.normalizeQueryConfig(e, t, n), this.text = e.text, this.values = e.values, this.rows = e.rows, this.types = e.types, this.name = e.name, this.binary = e.binary, this.portal = e.portal || "", this.callback = e.callback, this._rowMode = e.rowMode, m.domain && e.callback && (this.callback = m.domain.bind(e.callback)), this._result = new Us(this._rowMode, this.types), this._results = this._result, this.isPreparedStatement = false, this._canceledDueToError = false, this._promise = null;
    }
    requiresPreparation() {
      return this.name || this.rows ? true : !this.text || !this.values ? false : this.values.length > 0;
    }
    _checkForMultirow() {
      this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), this._result = new Us(this._rowMode, this.types), this._results.push(this._result));
    }
    handleRowDescription(e) {
      this._checkForMultirow(), this._result.addFields(e.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
    }
    handleDataRow(e) {
      let t;
      if (!this._canceledDueToError) {
        try {
          t = this._result.parseRow(
            e.fields
          );
        } catch (n) {
          this._canceledDueToError = n;
          return;
        }
        this.emit("row", t, this._result), this._accumulateRows && this._result.addRow(t);
      }
    }
    handleCommandComplete(e, t) {
      this._checkForMultirow(), this._result.addCommandComplete(
        e
      ), this.rows && t.sync();
    }
    handleEmptyQuery(e) {
      this.rows && e.sync();
    }
    handleError(e, t) {
      if (this._canceledDueToError && (e = this._canceledDueToError, this._canceledDueToError = false), this.callback) return this.callback(e);
      this.emit("error", e);
    }
    handleReadyForQuery(e) {
      if (this._canceledDueToError) return this.handleError(
        this._canceledDueToError,
        e
      );
      if (this.callback) try {
        this.callback(null, this._results);
      } catch (t) {
        m.nextTick(() => {
          throw t;
        });
      }
      this.emit(
        "end",
        this._results
      );
    }
    submit(e) {
      if (typeof this.text != "string" && typeof this.name != "string") return new Error(
        "A query must have either text or a name. Supplying neither is unsupported."
      );
      let t = e.parsedStatements[this.name];
      return this.text && t && this.text !== t ? new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`) : this.values && !Array.isArray(this.values) ? new Error("Query values must be an array") : (this.requiresPreparation() ? this.prepare(e) : e.query(this.text), null);
    }
    hasBeenParsed(e) {
      return this.name && e.parsedStatements[this.name];
    }
    handlePortalSuspended(e) {
      this._getRows(e, this.rows);
    }
    _getRows(e, t) {
      e.execute({ portal: this.portal, rows: t }), t ? e.flush() : e.sync();
    }
    prepare(e) {
      this.isPreparedStatement = true, this.hasBeenParsed(e) || e.parse({ text: this.text, name: this.name, types: this.types });
      try {
        e.bind({ portal: this.portal, statement: this.name, values: this.values, binary: this.binary, valueMapper: Ds.prepareValue });
      } catch (t) {
        this.handleError(t, e);
        return;
      }
      e.describe({ type: "P", name: this.portal || "" }), this._getRows(e, this.rows);
    }
    handleCopyInResponse(e) {
      e.sendCopyFail("No source stream defined");
    }
    handleCopyData(e, t) {
    }
  };
  a(kr, "Query");
  var Fr = kr;
  Os.exports = Fr;
});
var ln = T((_) => {
  "use strict";
  p();
  Object.defineProperty(_, "__esModule", { value: true });
  _.NoticeMessage = _.DataRowMessage = _.CommandCompleteMessage = _.ReadyForQueryMessage = _.NotificationResponseMessage = _.BackendKeyDataMessage = _.AuthenticationMD5Password = _.ParameterStatusMessage = _.ParameterDescriptionMessage = _.RowDescriptionMessage = _.Field = _.CopyResponse = _.CopyDataMessage = _.DatabaseError = _.copyDone = _.emptyQuery = _.replicationStart = _.portalSuspended = _.noData = _.closeComplete = _.bindComplete = _.parseComplete = void 0;
  _.parseComplete = { name: "parseComplete", length: 5 };
  _.bindComplete = { name: "bindComplete", length: 5 };
  _.closeComplete = { name: "closeComplete", length: 5 };
  _.noData = { name: "noData", length: 5 };
  _.portalSuspended = { name: "portalSuspended", length: 5 };
  _.replicationStart = { name: "replicationStart", length: 4 };
  _.emptyQuery = { name: "emptyQuery", length: 4 };
  _.copyDone = { name: "copyDone", length: 4 };
  var Kr = class Kr extends Error {
    static {
      __name(this, "Kr");
    }
    constructor(e, t, n) {
      super(e), this.length = t, this.name = n;
    }
  };
  a(Kr, "DatabaseError");
  var Mr = Kr;
  _.DatabaseError = Mr;
  var Yr = class Yr {
    static {
      __name(this, "Yr");
    }
    constructor(e, t) {
      this.length = e, this.chunk = t, this.name = "copyData";
    }
  };
  a(Yr, "CopyDataMessage");
  var Ur = Yr;
  _.CopyDataMessage = Ur;
  var Zr = class Zr {
    static {
      __name(this, "Zr");
    }
    constructor(e, t, n, i) {
      this.length = e, this.name = t, this.binary = n, this.columnTypes = new Array(i);
    }
  };
  a(Zr, "CopyResponse");
  var Dr = Zr;
  _.CopyResponse = Dr;
  var Jr = class Jr {
    static {
      __name(this, "Jr");
    }
    constructor(e, t, n, i, s, o, u) {
      this.name = e, this.tableID = t, this.columnID = n, this.dataTypeID = i, this.dataTypeSize = s, this.dataTypeModifier = o, this.format = u;
    }
  };
  a(Jr, "Field");
  var Or = Jr;
  _.Field = Or;
  var Xr = class Xr {
    static {
      __name(this, "Xr");
    }
    constructor(e, t) {
      this.length = e, this.fieldCount = t, this.name = "rowDescription", this.fields = new Array(this.fieldCount);
    }
  };
  a(Xr, "RowDescriptionMessage");
  var qr = Xr;
  _.RowDescriptionMessage = qr;
  var en = class en {
    static {
      __name(this, "en");
    }
    constructor(e, t) {
      this.length = e, this.parameterCount = t, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
    }
  };
  a(en, "ParameterDescriptionMessage");
  var Qr = en;
  _.ParameterDescriptionMessage = Qr;
  var tn = class tn {
    static {
      __name(this, "tn");
    }
    constructor(e, t, n) {
      this.length = e, this.parameterName = t, this.parameterValue = n, this.name = "parameterStatus";
    }
  };
  a(tn, "ParameterStatusMessage");
  var Nr = tn;
  _.ParameterStatusMessage = Nr;
  var rn = class rn {
    static {
      __name(this, "rn");
    }
    constructor(e, t) {
      this.length = e, this.salt = t, this.name = "authenticationMD5Password";
    }
  };
  a(rn, "AuthenticationMD5Password");
  var Wr = rn;
  _.AuthenticationMD5Password = Wr;
  var nn = class nn {
    static {
      __name(this, "nn");
    }
    constructor(e, t, n) {
      this.length = e, this.processID = t, this.secretKey = n, this.name = "backendKeyData";
    }
  };
  a(nn, "BackendKeyDataMessage");
  var jr = nn;
  _.BackendKeyDataMessage = jr;
  var sn = class sn {
    static {
      __name(this, "sn");
    }
    constructor(e, t, n, i) {
      this.length = e, this.processId = t, this.channel = n, this.payload = i, this.name = "notification";
    }
  };
  a(sn, "NotificationResponseMessage");
  var Hr = sn;
  _.NotificationResponseMessage = Hr;
  var on2 = class on {
    static {
      __name(this, "on");
    }
    constructor(e, t) {
      this.length = e, this.status = t, this.name = "readyForQuery";
    }
  };
  a(on2, "ReadyForQueryMessage");
  var $r = on2;
  _.ReadyForQueryMessage = $r;
  var an = class an {
    static {
      __name(this, "an");
    }
    constructor(e, t) {
      this.length = e, this.text = t, this.name = "commandComplete";
    }
  };
  a(an, "CommandCompleteMessage");
  var Gr = an;
  _.CommandCompleteMessage = Gr;
  var un = class un {
    static {
      __name(this, "un");
    }
    constructor(e, t) {
      this.length = e, this.fields = t, this.name = "dataRow", this.fieldCount = t.length;
    }
  };
  a(un, "DataRowMessage");
  var Vr = un;
  _.DataRowMessage = Vr;
  var cn = class cn {
    static {
      __name(this, "cn");
    }
    constructor(e, t) {
      this.length = e, this.message = t, this.name = "notice";
    }
  };
  a(cn, "NoticeMessage");
  var zr = cn;
  _.NoticeMessage = zr;
});
var Qs = T((Bt) => {
  "use strict";
  p();
  Object.defineProperty(Bt, "__esModule", { value: true });
  Bt.Writer = void 0;
  var hn = class hn {
    static {
      __name(this, "hn");
    }
    constructor(e = 256) {
      this.size = e, this.offset = 5, this.headerPosition = 0, this.buffer = d.allocUnsafe(e);
    }
    ensure(e) {
      if (this.buffer.length - this.offset < e) {
        let n = this.buffer, i = n.length + (n.length >> 1) + e;
        this.buffer = d.allocUnsafe(i), n.copy(
          this.buffer
        );
      }
    }
    addInt32(e) {
      return this.ensure(4), this.buffer[this.offset++] = e >>> 24 & 255, this.buffer[this.offset++] = e >>> 16 & 255, this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
    }
    addInt16(e) {
      return this.ensure(2), this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
    }
    addCString(e) {
      if (!e) this.ensure(1);
      else {
        let t = d.byteLength(e);
        this.ensure(t + 1), this.buffer.write(e, this.offset, "utf-8"), this.offset += t;
      }
      return this.buffer[this.offset++] = 0, this;
    }
    addString(e = "") {
      let t = d.byteLength(e);
      return this.ensure(t), this.buffer.write(e, this.offset), this.offset += t, this;
    }
    add(e) {
      return this.ensure(
        e.length
      ), e.copy(this.buffer, this.offset), this.offset += e.length, this;
    }
    join(e) {
      if (e) {
        this.buffer[this.headerPosition] = e;
        let t = this.offset - (this.headerPosition + 1);
        this.buffer.writeInt32BE(t, this.headerPosition + 1);
      }
      return this.buffer.slice(e ? 0 : 5, this.offset);
    }
    flush(e) {
      let t = this.join(e);
      return this.offset = 5, this.headerPosition = 0, this.buffer = d.allocUnsafe(this.size), t;
    }
  };
  a(hn, "Writer");
  var fn = hn;
  Bt.Writer = fn;
});
var Ws = T((Ft) => {
  "use strict";
  p();
  Object.defineProperty(Ft, "__esModule", { value: true });
  Ft.serialize = void 0;
  var pn = Qs(), F = new pn.Writer(), yc = a((r) => {
    F.addInt16(3).addInt16(0);
    for (let n of Object.keys(r)) F.addCString(
      n
    ).addCString(r[n]);
    F.addCString("client_encoding").addCString("UTF8");
    let e = F.addCString("").flush(), t = e.length + 4;
    return new pn.Writer().addInt32(t).add(e).flush();
  }, "startup"), mc = a(() => {
    let r = d.allocUnsafe(
      8
    );
    return r.writeInt32BE(8, 0), r.writeInt32BE(80877103, 4), r;
  }, "requestSsl"), wc = a((r) => F.addCString(r).flush(
    112
  ), "password"), gc = a(function(r, e) {
    return F.addCString(r).addInt32(d.byteLength(e)).addString(e), F.flush(112);
  }, "sendSASLInitialResponseMessage"), bc = a(function(r) {
    return F.addString(r).flush(112);
  }, "sendSCRAMClientFinalMessage"), vc = a((r) => F.addCString(r).flush(81), "query"), Ns = [], xc = a((r) => {
    let e = r.name || "";
    e.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e, e.length), console.error("This can cause conflicts and silent errors executing queries"));
    let t = r.types || Ns, n = t.length, i = F.addCString(e).addCString(r.text).addInt16(n);
    for (let s = 0; s < n; s++) i.addInt32(t[s]);
    return F.flush(80);
  }, "parse"), qe = new pn.Writer(), Sc = a(function(r, e) {
    for (let t = 0; t < r.length; t++) {
      let n = e ? e(r[t], t) : r[t];
      n == null ? (F.addInt16(0), qe.addInt32(-1)) : n instanceof d ? (F.addInt16(
        1
      ), qe.addInt32(n.length), qe.add(n)) : (F.addInt16(0), qe.addInt32(d.byteLength(n)), qe.addString(n));
    }
  }, "writeValues"), Ec = a((r = {}) => {
    let e = r.portal || "", t = r.statement || "", n = r.binary || false, i = r.values || Ns, s = i.length;
    return F.addCString(e).addCString(t), F.addInt16(s), Sc(i, r.valueMapper), F.addInt16(s), F.add(qe.flush()), F.addInt16(n ? 1 : 0), F.flush(66);
  }, "bind"), Ac = d.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]), Cc = a((r) => {
    if (!r || !r.portal && !r.rows) return Ac;
    let e = r.portal || "", t = r.rows || 0, n = d.byteLength(e), i = 4 + n + 1 + 4, s = d.allocUnsafe(1 + i);
    return s[0] = 69, s.writeInt32BE(i, 1), s.write(e, 5, "utf-8"), s[n + 5] = 0, s.writeUInt32BE(t, s.length - 4), s;
  }, "execute"), _c = a(
    (r, e) => {
      let t = d.allocUnsafe(16);
      return t.writeInt32BE(16, 0), t.writeInt16BE(1234, 4), t.writeInt16BE(
        5678,
        6
      ), t.writeInt32BE(r, 8), t.writeInt32BE(e, 12), t;
    },
    "cancel"
  ), dn = a((r, e) => {
    let n = 4 + d.byteLength(e) + 1, i = d.allocUnsafe(1 + n);
    return i[0] = r, i.writeInt32BE(n, 1), i.write(e, 5, "utf-8"), i[n] = 0, i;
  }, "cstringMessage"), Ic = F.addCString("P").flush(68), Tc = F.addCString("S").flush(68), Pc = a((r) => r.name ? dn(68, `${r.type}${r.name || ""}`) : r.type === "P" ? Ic : Tc, "describe"), Rc = a((r) => {
    let e = `${r.type}${r.name || ""}`;
    return dn(67, e);
  }, "close"), Bc = a((r) => F.add(r).flush(100), "copyData"), Lc = a((r) => dn(102, r), "copyFail"), Lt = a((r) => d.from([r, 0, 0, 0, 4]), "codeOnlyBuffer"), Fc = Lt(72), kc = Lt(83), Mc = Lt(88), Uc = Lt(99), Dc = {
    startup: yc,
    password: wc,
    requestSsl: mc,
    sendSASLInitialResponseMessage: gc,
    sendSCRAMClientFinalMessage: bc,
    query: vc,
    parse: xc,
    bind: Ec,
    execute: Cc,
    describe: Pc,
    close: Rc,
    flush: a(
      () => Fc,
      "flush"
    ),
    sync: a(() => kc, "sync"),
    end: a(() => Mc, "end"),
    copyData: Bc,
    copyDone: a(() => Uc, "copyDone"),
    copyFail: Lc,
    cancel: _c
  };
  Ft.serialize = Dc;
});
var js = T((kt) => {
  "use strict";
  p();
  Object.defineProperty(kt, "__esModule", { value: true });
  kt.BufferReader = void 0;
  var Oc = d.allocUnsafe(0), mn = class mn {
    static {
      __name(this, "mn");
    }
    constructor(e = 0) {
      this.offset = e, this.buffer = Oc, this.encoding = "utf-8";
    }
    setBuffer(e, t) {
      this.offset = e, this.buffer = t;
    }
    int16() {
      let e = this.buffer.readInt16BE(this.offset);
      return this.offset += 2, e;
    }
    byte() {
      let e = this.buffer[this.offset];
      return this.offset++, e;
    }
    int32() {
      let e = this.buffer.readInt32BE(
        this.offset
      );
      return this.offset += 4, e;
    }
    uint32() {
      let e = this.buffer.readUInt32BE(this.offset);
      return this.offset += 4, e;
    }
    string(e) {
      let t = this.buffer.toString(this.encoding, this.offset, this.offset + e);
      return this.offset += e, t;
    }
    cstring() {
      let e = this.offset, t = e;
      for (; this.buffer[t++] !== 0; ) ;
      return this.offset = t, this.buffer.toString(this.encoding, e, t - 1);
    }
    bytes(e) {
      let t = this.buffer.slice(this.offset, this.offset + e);
      return this.offset += e, t;
    }
  };
  a(mn, "BufferReader");
  var yn = mn;
  kt.BufferReader = yn;
});
var Gs = T((Mt) => {
  "use strict";
  p();
  Object.defineProperty(Mt, "__esModule", { value: true });
  Mt.Parser = void 0;
  var k = ln(), qc = js(), wn = 1, Qc = 4, Hs = wn + Qc, $s = d.allocUnsafe(0), bn = class bn {
    static {
      __name(this, "bn");
    }
    constructor(e) {
      if (this.buffer = $s, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new qc.BufferReader(), e?.mode === "binary") throw new Error("Binary mode not supported yet");
      this.mode = e?.mode || "text";
    }
    parse(e, t) {
      this.mergeBuffer(e);
      let n = this.bufferOffset + this.bufferLength, i = this.bufferOffset;
      for (; i + Hs <= n; ) {
        let s = this.buffer[i], o = this.buffer.readUInt32BE(
          i + wn
        ), u = wn + o;
        if (u + i <= n) {
          let c = this.handlePacket(i + Hs, s, o, this.buffer);
          t(c), i += u;
        } else break;
      }
      i === n ? (this.buffer = $s, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = n - i, this.bufferOffset = i);
    }
    mergeBuffer(e) {
      if (this.bufferLength > 0) {
        let t = this.bufferLength + e.byteLength;
        if (t + this.bufferOffset > this.buffer.byteLength) {
          let i;
          if (t <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) i = this.buffer;
          else {
            let s = this.buffer.byteLength * 2;
            for (; t >= s; ) s *= 2;
            i = d.allocUnsafe(s);
          }
          this.buffer.copy(i, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), this.buffer = i, this.bufferOffset = 0;
        }
        e.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = t;
      } else this.buffer = e, this.bufferOffset = 0, this.bufferLength = e.byteLength;
    }
    handlePacket(e, t, n, i) {
      switch (t) {
        case 50:
          return k.bindComplete;
        case 49:
          return k.parseComplete;
        case 51:
          return k.closeComplete;
        case 110:
          return k.noData;
        case 115:
          return k.portalSuspended;
        case 99:
          return k.copyDone;
        case 87:
          return k.replicationStart;
        case 73:
          return k.emptyQuery;
        case 68:
          return this.parseDataRowMessage(e, n, i);
        case 67:
          return this.parseCommandCompleteMessage(
            e,
            n,
            i
          );
        case 90:
          return this.parseReadyForQueryMessage(e, n, i);
        case 65:
          return this.parseNotificationMessage(
            e,
            n,
            i
          );
        case 82:
          return this.parseAuthenticationResponse(e, n, i);
        case 83:
          return this.parseParameterStatusMessage(
            e,
            n,
            i
          );
        case 75:
          return this.parseBackendKeyData(e, n, i);
        case 69:
          return this.parseErrorMessage(e, n, i, "error");
        case 78:
          return this.parseErrorMessage(e, n, i, "notice");
        case 84:
          return this.parseRowDescriptionMessage(
            e,
            n,
            i
          );
        case 116:
          return this.parseParameterDescriptionMessage(e, n, i);
        case 71:
          return this.parseCopyInMessage(
            e,
            n,
            i
          );
        case 72:
          return this.parseCopyOutMessage(e, n, i);
        case 100:
          return this.parseCopyData(e, n, i);
        default:
          return new k.DatabaseError("received invalid response: " + t.toString(16), n, "error");
      }
    }
    parseReadyForQueryMessage(e, t, n) {
      this.reader.setBuffer(e, n);
      let i = this.reader.string(1);
      return new k.ReadyForQueryMessage(t, i);
    }
    parseCommandCompleteMessage(e, t, n) {
      this.reader.setBuffer(e, n);
      let i = this.reader.cstring();
      return new k.CommandCompleteMessage(t, i);
    }
    parseCopyData(e, t, n) {
      let i = n.slice(e, e + (t - 4));
      return new k.CopyDataMessage(t, i);
    }
    parseCopyInMessage(e, t, n) {
      return this.parseCopyMessage(
        e,
        t,
        n,
        "copyInResponse"
      );
    }
    parseCopyOutMessage(e, t, n) {
      return this.parseCopyMessage(e, t, n, "copyOutResponse");
    }
    parseCopyMessage(e, t, n, i) {
      this.reader.setBuffer(e, n);
      let s = this.reader.byte() !== 0, o = this.reader.int16(), u = new k.CopyResponse(t, i, s, o);
      for (let c = 0; c < o; c++) u.columnTypes[c] = this.reader.int16();
      return u;
    }
    parseNotificationMessage(e, t, n) {
      this.reader.setBuffer(e, n);
      let i = this.reader.int32(), s = this.reader.cstring(), o = this.reader.cstring();
      return new k.NotificationResponseMessage(t, i, s, o);
    }
    parseRowDescriptionMessage(e, t, n) {
      this.reader.setBuffer(
        e,
        n
      );
      let i = this.reader.int16(), s = new k.RowDescriptionMessage(t, i);
      for (let o = 0; o < i; o++) s.fields[o] = this.parseField();
      return s;
    }
    parseField() {
      let e = this.reader.cstring(), t = this.reader.uint32(), n = this.reader.int16(), i = this.reader.uint32(), s = this.reader.int16(), o = this.reader.int32(), u = this.reader.int16() === 0 ? "text" : "binary";
      return new k.Field(e, t, n, i, s, o, u);
    }
    parseParameterDescriptionMessage(e, t, n) {
      this.reader.setBuffer(e, n);
      let i = this.reader.int16(), s = new k.ParameterDescriptionMessage(t, i);
      for (let o = 0; o < i; o++)
        s.dataTypeIDs[o] = this.reader.int32();
      return s;
    }
    parseDataRowMessage(e, t, n) {
      this.reader.setBuffer(e, n);
      let i = this.reader.int16(), s = new Array(i);
      for (let o = 0; o < i; o++) {
        let u = this.reader.int32();
        s[o] = u === -1 ? null : this.reader.string(u);
      }
      return new k.DataRowMessage(t, s);
    }
    parseParameterStatusMessage(e, t, n) {
      this.reader.setBuffer(e, n);
      let i = this.reader.cstring(), s = this.reader.cstring();
      return new k.ParameterStatusMessage(
        t,
        i,
        s
      );
    }
    parseBackendKeyData(e, t, n) {
      this.reader.setBuffer(e, n);
      let i = this.reader.int32(), s = this.reader.int32();
      return new k.BackendKeyDataMessage(t, i, s);
    }
    parseAuthenticationResponse(e, t, n) {
      this.reader.setBuffer(
        e,
        n
      );
      let i = this.reader.int32(), s = { name: "authenticationOk", length: t };
      switch (i) {
        case 0:
          break;
        case 3:
          s.length === 8 && (s.name = "authenticationCleartextPassword");
          break;
        case 5:
          if (s.length === 12) {
            s.name = "authenticationMD5Password";
            let o = this.reader.bytes(4);
            return new k.AuthenticationMD5Password(t, o);
          }
          break;
        case 10:
          {
            s.name = "authenticationSASL", s.mechanisms = [];
            let o;
            do
              o = this.reader.cstring(), o && s.mechanisms.push(o);
            while (o);
          }
          break;
        case 11:
          s.name = "authenticationSASLContinue", s.data = this.reader.string(t - 8);
          break;
        case 12:
          s.name = "authenticationSASLFinal", s.data = this.reader.string(t - 8);
          break;
        default:
          throw new Error("Unknown authenticationOk message type " + i);
      }
      return s;
    }
    parseErrorMessage(e, t, n, i) {
      this.reader.setBuffer(e, n);
      let s = {}, o = this.reader.string(1);
      for (; o !== "\0"; ) s[o] = this.reader.cstring(), o = this.reader.string(1);
      let u = s.M, c = i === "notice" ? new k.NoticeMessage(t, u) : new k.DatabaseError(u, t, i);
      return c.severity = s.S, c.code = s.C, c.detail = s.D, c.hint = s.H, c.position = s.P, c.internalPosition = s.p, c.internalQuery = s.q, c.where = s.W, c.schema = s.s, c.table = s.t, c.column = s.c, c.dataType = s.d, c.constraint = s.n, c.file = s.F, c.line = s.L, c.routine = s.R, c;
    }
  };
  a(bn, "Parser");
  var gn = bn;
  Mt.Parser = gn;
});
var vn = T((xe) => {
  "use strict";
  p();
  Object.defineProperty(xe, "__esModule", { value: true });
  xe.DatabaseError = xe.serialize = xe.parse = void 0;
  var Nc = ln();
  Object.defineProperty(xe, "DatabaseError", { enumerable: true, get: a(
    function() {
      return Nc.DatabaseError;
    },
    "get"
  ) });
  var Wc = Ws();
  Object.defineProperty(xe, "serialize", {
    enumerable: true,
    get: a(function() {
      return Wc.serialize;
    }, "get")
  });
  var jc = Gs();
  function Hc(r, e) {
    let t = new jc.Parser();
    return r.on("data", (n) => t.parse(n, e)), new Promise((n) => r.on("end", () => n()));
  }
  __name(Hc, "Hc");
  a(Hc, "parse");
  xe.parse = Hc;
});
var Vs = {};
ie(Vs, { connect: /* @__PURE__ */ __name(() => $c, "connect") });
function $c({ socket: r, servername: e }) {
  return r.startTls(e), r;
}
__name($c, "$c");
var zs = G(
  () => {
    "use strict";
    p();
    a($c, "connect");
  }
);
var En = T((Xh, Zs) => {
  "use strict";
  p();
  var Ks = (Fe(), O(wi)), Gc = ge().EventEmitter, { parse: Vc, serialize: Q } = vn(), Ys = Q.flush(), zc = Q.sync(), Kc = Q.end(), Sn = class Sn extends Gc {
    static {
      __name(this, "Sn");
    }
    constructor(e) {
      super(), e = e || {}, this.stream = e.stream || new Ks.Socket(), this._keepAlive = e.keepAlive, this._keepAliveInitialDelayMillis = e.keepAliveInitialDelayMillis, this.lastBuffer = false, this.parsedStatements = {}, this.ssl = e.ssl || false, this._ending = false, this._emitMessage = false;
      var t = this;
      this.on("newListener", function(n) {
        n === "message" && (t._emitMessage = true);
      });
    }
    connect(e, t) {
      var n = this;
      this._connecting = true, this.stream.setNoDelay(true), this.stream.connect(e, t), this.stream.once("connect", function() {
        n._keepAlive && n.stream.setKeepAlive(true, n._keepAliveInitialDelayMillis), n.emit("connect");
      });
      let i = a(function(s) {
        n._ending && (s.code === "ECONNRESET" || s.code === "EPIPE") || n.emit("error", s);
      }, "reportStreamError");
      if (this.stream.on("error", i), this.stream.on("close", function() {
        n.emit("end");
      }), !this.ssl) return this.attachListeners(
        this.stream
      );
      this.stream.once("data", function(s) {
        var o = s.toString("utf8");
        switch (o) {
          case "S":
            break;
          case "N":
            return n.stream.end(), n.emit("error", new Error("The server does not support SSL connections"));
          default:
            return n.stream.end(), n.emit("error", new Error("There was an error establishing an SSL connection"));
        }
        var u = (zs(), O(Vs));
        let c = { socket: n.stream };
        n.ssl !== true && (Object.assign(c, n.ssl), "key" in n.ssl && (c.key = n.ssl.key)), Ks.isIP(t) === 0 && (c.servername = t);
        try {
          n.stream = u.connect(c);
        } catch (l) {
          return n.emit(
            "error",
            l
          );
        }
        n.attachListeners(n.stream), n.stream.on("error", i), n.emit("sslconnect");
      });
    }
    attachListeners(e) {
      e.on(
        "end",
        () => {
          this.emit("end");
        }
      ), Vc(e, (t) => {
        var n = t.name === "error" ? "errorMessage" : t.name;
        this._emitMessage && this.emit("message", t), this.emit(n, t);
      });
    }
    requestSsl() {
      this.stream.write(Q.requestSsl());
    }
    startup(e) {
      this.stream.write(Q.startup(e));
    }
    cancel(e, t) {
      this._send(Q.cancel(e, t));
    }
    password(e) {
      this._send(Q.password(e));
    }
    sendSASLInitialResponseMessage(e, t) {
      this._send(Q.sendSASLInitialResponseMessage(e, t));
    }
    sendSCRAMClientFinalMessage(e) {
      this._send(Q.sendSCRAMClientFinalMessage(
        e
      ));
    }
    _send(e) {
      return this.stream.writable ? this.stream.write(e) : false;
    }
    query(e) {
      this._send(Q.query(e));
    }
    parse(e) {
      this._send(Q.parse(e));
    }
    bind(e) {
      this._send(Q.bind(e));
    }
    execute(e) {
      this._send(Q.execute(e));
    }
    flush() {
      this.stream.writable && this.stream.write(Ys);
    }
    sync() {
      this._ending = true, this._send(Ys), this._send(zc);
    }
    ref() {
      this.stream.ref();
    }
    unref() {
      this.stream.unref();
    }
    end() {
      if (this._ending = true, !this._connecting || !this.stream.writable) {
        this.stream.end();
        return;
      }
      return this.stream.write(Kc, () => {
        this.stream.end();
      });
    }
    close(e) {
      this._send(Q.close(e));
    }
    describe(e) {
      this._send(Q.describe(e));
    }
    sendCopyFromChunk(e) {
      this._send(Q.copyData(e));
    }
    endCopyFrom() {
      this._send(Q.copyDone());
    }
    sendCopyFail(e) {
      this._send(Q.copyFail(e));
    }
  };
  a(Sn, "Connection");
  var xn = Sn;
  Zs.exports = xn;
});
var eo = T((np, Xs) => {
  "use strict";
  p();
  var Yc = ge().EventEmitter, rp = (it(), O(nt)), Zc = rt(), An = ds(), Jc = Cs(), Xc = At(), el = Rt(), Js = qs(), tl = tt(), rl = En(), Cn = class Cn extends Yc {
    static {
      __name(this, "Cn");
    }
    constructor(e) {
      super(), this.connectionParameters = new el(e), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(
        this,
        "password",
        { configurable: true, enumerable: false, writable: true, value: this.connectionParameters.password }
      ), this.replication = this.connectionParameters.replication;
      var t = e || {};
      this._Promise = t.Promise || b.Promise, this._types = new Xc(t.types), this._ending = false, this._connecting = false, this._connected = false, this._connectionError = false, this._queryable = true, this.connection = t.connection || new rl({ stream: t.stream, ssl: this.connectionParameters.ssl, keepAlive: t.keepAlive || false, keepAliveInitialDelayMillis: t.keepAliveInitialDelayMillis || 0, encoding: this.connectionParameters.client_encoding || "utf8" }), this.queryQueue = [], this.binary = t.binary || tl.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || false, this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this._connectionTimeoutMillis = t.connectionTimeoutMillis || 0;
    }
    _errorAllQueries(e) {
      let t = a((n) => {
        m.nextTick(() => {
          n.handleError(e, this.connection);
        });
      }, "enqueueError");
      this.activeQuery && (t(this.activeQuery), this.activeQuery = null), this.queryQueue.forEach(t), this.queryQueue.length = 0;
    }
    _connect(e) {
      var t = this, n = this.connection;
      if (this._connectionCallback = e, this._connecting || this._connected) {
        let i = new Error("Client has already been connected. You cannot reuse a client.");
        m.nextTick(
          () => {
            e(i);
          }
        );
        return;
      }
      this._connecting = true, this.connectionTimeoutHandle, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(() => {
        n._ending = true, n.stream.destroy(new Error("timeout expired"));
      }, this._connectionTimeoutMillis)), this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
        t.ssl ? n.requestSsl() : n.startup(t.getStartupConf());
      }), n.on("sslconnect", function() {
        n.startup(t.getStartupConf());
      }), this._attachListeners(
        n
      ), n.once("end", () => {
        let i = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
        clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(i), this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(i) : this._handleErrorEvent(i) : this._connectionError || this._handleErrorEvent(i)), m.nextTick(() => {
          this.emit("end");
        });
      });
    }
    connect(e) {
      if (e) {
        this._connect(e);
        return;
      }
      return new this._Promise((t, n) => {
        this._connect((i) => {
          i ? n(i) : t();
        });
      });
    }
    _attachListeners(e) {
      e.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), e.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), e.on("authenticationSASL", this._handleAuthSASL.bind(this)), e.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this)), e.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), e.on("backendKeyData", this._handleBackendKeyData.bind(this)), e.on("error", this._handleErrorEvent.bind(this)), e.on("errorMessage", this._handleErrorMessage.bind(this)), e.on("readyForQuery", this._handleReadyForQuery.bind(this)), e.on("notice", this._handleNotice.bind(this)), e.on("rowDescription", this._handleRowDescription.bind(this)), e.on("dataRow", this._handleDataRow.bind(this)), e.on("portalSuspended", this._handlePortalSuspended.bind(
        this
      )), e.on("emptyQuery", this._handleEmptyQuery.bind(this)), e.on("commandComplete", this._handleCommandComplete.bind(this)), e.on("parseComplete", this._handleParseComplete.bind(this)), e.on("copyInResponse", this._handleCopyInResponse.bind(this)), e.on("copyData", this._handleCopyData.bind(this)), e.on("notification", this._handleNotification.bind(this));
    }
    _checkPgPass(e) {
      let t = this.connection;
      typeof this.password == "function" ? this._Promise.resolve().then(() => this.password()).then((n) => {
        if (n !== void 0) {
          if (typeof n != "string") {
            t.emit("error", new TypeError(
              "Password must be a string"
            ));
            return;
          }
          this.connectionParameters.password = this.password = n;
        } else this.connectionParameters.password = this.password = null;
        e();
      }).catch((n) => {
        t.emit("error", n);
      }) : this.password !== null ? e() : Jc(
        this.connectionParameters,
        (n) => {
          n !== void 0 && (this.connectionParameters.password = this.password = n), e();
        }
      );
    }
    _handleAuthCleartextPassword(e) {
      this._checkPgPass(() => {
        this.connection.password(this.password);
      });
    }
    _handleAuthMD5Password(e) {
      this._checkPgPass(
        () => {
          let t = Zc.postgresMd5PasswordHash(this.user, this.password, e.salt);
          this.connection.password(t);
        }
      );
    }
    _handleAuthSASL(e) {
      this._checkPgPass(() => {
        this.saslSession = An.startSession(e.mechanisms), this.connection.sendSASLInitialResponseMessage(
          this.saslSession.mechanism,
          this.saslSession.response
        );
      });
    }
    _handleAuthSASLContinue(e) {
      An.continueSession(
        this.saslSession,
        this.password,
        e.data
      ), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
    }
    _handleAuthSASLFinal(e) {
      An.finalizeSession(this.saslSession, e.data), this.saslSession = null;
    }
    _handleBackendKeyData(e) {
      this.processID = e.processID, this.secretKey = e.secretKey;
    }
    _handleReadyForQuery(e) {
      this._connecting && (this._connecting = false, this._connected = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("connect"));
      let { activeQuery: t } = this;
      this.activeQuery = null, this.readyForQuery = true, t && t.handleReadyForQuery(this.connection), this._pulseQueryQueue();
    }
    _handleErrorWhileConnecting(e) {
      if (!this._connectionError) {
        if (this._connectionError = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback) return this._connectionCallback(e);
        this.emit("error", e);
      }
    }
    _handleErrorEvent(e) {
      if (this._connecting) return this._handleErrorWhileConnecting(e);
      this._queryable = false, this._errorAllQueries(e), this.emit("error", e);
    }
    _handleErrorMessage(e) {
      if (this._connecting) return this._handleErrorWhileConnecting(e);
      let t = this.activeQuery;
      if (!t) {
        this._handleErrorEvent(e);
        return;
      }
      this.activeQuery = null, t.handleError(
        e,
        this.connection
      );
    }
    _handleRowDescription(e) {
      this.activeQuery.handleRowDescription(e);
    }
    _handleDataRow(e) {
      this.activeQuery.handleDataRow(e);
    }
    _handlePortalSuspended(e) {
      this.activeQuery.handlePortalSuspended(this.connection);
    }
    _handleEmptyQuery(e) {
      this.activeQuery.handleEmptyQuery(this.connection);
    }
    _handleCommandComplete(e) {
      this.activeQuery.handleCommandComplete(e, this.connection);
    }
    _handleParseComplete(e) {
      this.activeQuery.name && (this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text);
    }
    _handleCopyInResponse(e) {
      this.activeQuery.handleCopyInResponse(this.connection);
    }
    _handleCopyData(e) {
      this.activeQuery.handleCopyData(
        e,
        this.connection
      );
    }
    _handleNotification(e) {
      this.emit("notification", e);
    }
    _handleNotice(e) {
      this.emit("notice", e);
    }
    getStartupConf() {
      var e = this.connectionParameters, t = { user: e.user, database: e.database }, n = e.application_name || e.fallback_application_name;
      return n && (t.application_name = n), e.replication && (t.replication = "" + e.replication), e.statement_timeout && (t.statement_timeout = String(parseInt(e.statement_timeout, 10))), e.lock_timeout && (t.lock_timeout = String(parseInt(e.lock_timeout, 10))), e.idle_in_transaction_session_timeout && (t.idle_in_transaction_session_timeout = String(parseInt(e.idle_in_transaction_session_timeout, 10))), e.options && (t.options = e.options), t;
    }
    cancel(e, t) {
      if (e.activeQuery === t) {
        var n = this.connection;
        this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
          n.cancel(
            e.processID,
            e.secretKey
          );
        });
      } else e.queryQueue.indexOf(t) !== -1 && e.queryQueue.splice(e.queryQueue.indexOf(t), 1);
    }
    setTypeParser(e, t, n) {
      return this._types.setTypeParser(e, t, n);
    }
    getTypeParser(e, t) {
      return this._types.getTypeParser(e, t);
    }
    escapeIdentifier(e) {
      return '"' + e.replace(/"/g, '""') + '"';
    }
    escapeLiteral(e) {
      for (var t = false, n = "'", i = 0; i < e.length; i++) {
        var s = e[i];
        s === "'" ? n += s + s : s === "\\" ? (n += s + s, t = true) : n += s;
      }
      return n += "'", t === true && (n = " E" + n), n;
    }
    _pulseQueryQueue() {
      if (this.readyForQuery === true) if (this.activeQuery = this.queryQueue.shift(), this.activeQuery) {
        this.readyForQuery = false, this.hasExecuted = true;
        let e = this.activeQuery.submit(this.connection);
        e && m.nextTick(() => {
          this.activeQuery.handleError(e, this.connection), this.readyForQuery = true, this._pulseQueryQueue();
        });
      } else this.hasExecuted && (this.activeQuery = null, this.emit("drain"));
    }
    query(e, t, n) {
      var i, s, o, u, c;
      if (e == null) throw new TypeError(
        "Client was passed a null or undefined query"
      );
      return typeof e.submit == "function" ? (o = e.query_timeout || this.connectionParameters.query_timeout, s = i = e, typeof t == "function" && (i.callback = i.callback || t)) : (o = this.connectionParameters.query_timeout, i = new Js(e, t, n), i.callback || (s = new this._Promise((l, f) => {
        i.callback = (y, g) => y ? f(y) : l(g);
      }))), o && (c = i.callback, u = setTimeout(() => {
        var l = new Error("Query read timeout");
        m.nextTick(
          () => {
            i.handleError(l, this.connection);
          }
        ), c(l), i.callback = () => {
        };
        var f = this.queryQueue.indexOf(i);
        f > -1 && this.queryQueue.splice(f, 1), this._pulseQueryQueue();
      }, o), i.callback = (l, f) => {
        clearTimeout(u), c(l, f);
      }), this.binary && !i.binary && (i.binary = true), i._result && !i._result._types && (i._result._types = this._types), this._queryable ? this._ending ? (m.nextTick(() => {
        i.handleError(new Error("Client was closed and is not queryable"), this.connection);
      }), s) : (this.queryQueue.push(i), this._pulseQueryQueue(), s) : (m.nextTick(() => {
        i.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
      }), s);
    }
    ref() {
      this.connection.ref();
    }
    unref() {
      this.connection.unref();
    }
    end(e) {
      if (this._ending = true, !this.connection._connecting) if (e) e();
      else return this._Promise.resolve();
      if (this.activeQuery || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), e) this.connection.once("end", e);
      else return new this._Promise((t) => {
        this.connection.once("end", t);
      });
    }
  };
  a(Cn, "Client");
  var Ut = Cn;
  Ut.Query = Js;
  Xs.exports = Ut;
});
var io = T((op, no) => {
  "use strict";
  p();
  var nl = ge().EventEmitter, to = a(function() {
  }, "NOOP"), ro = a((r, e) => {
    let t = r.findIndex(e);
    return t === -1 ? void 0 : r.splice(t, 1)[0];
  }, "removeWhere"), Tn = class Tn {
    static {
      __name(this, "Tn");
    }
    constructor(e, t, n) {
      this.client = e, this.idleListener = t, this.timeoutId = n;
    }
  };
  a(Tn, "IdleItem");
  var _n = Tn, Pn = class Pn {
    static {
      __name(this, "Pn");
    }
    constructor(e) {
      this.callback = e;
    }
  };
  a(Pn, "PendingItem");
  var Qe = Pn;
  function il() {
    throw new Error("Release called on client which has already been released to the pool.");
  }
  __name(il, "il");
  a(il, "throwOnDoubleRelease");
  function Dt(r, e) {
    if (e)
      return { callback: e, result: void 0 };
    let t, n, i = a(function(o, u) {
      o ? t(o) : n(u);
    }, "cb"), s = new r(function(o, u) {
      n = o, t = u;
    }).catch((o) => {
      throw Error.captureStackTrace(o), o;
    });
    return { callback: i, result: s };
  }
  __name(Dt, "Dt");
  a(Dt, "promisify");
  function sl(r, e) {
    return a(/* @__PURE__ */ __name(function t(n) {
      n.client = e, e.removeListener("error", t), e.on("error", () => {
        r.log(
          "additional client error after disconnection due to error",
          n
        );
      }), r._remove(e), r.emit("error", n, e);
    }, "t"), "idleListener");
  }
  __name(sl, "sl");
  a(sl, "makeIdleListener");
  var Rn = class Rn extends nl {
    static {
      __name(this, "Rn");
    }
    constructor(e, t) {
      super(), this.options = Object.assign({}, e), e != null && "password" in e && Object.defineProperty(this.options, "password", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: e.password
      }), e != null && e.ssl && e.ssl.key && Object.defineProperty(this.options.ssl, "key", { enumerable: false }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.min = this.options.min || 0, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || false, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {
      }, this.Client = this.options.Client || t || ot().Client, this.Promise = this.options.Promise || b.Promise, typeof this.options.idleTimeoutMillis > "u" && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = /* @__PURE__ */ new WeakSet(), this._pendingQueue = [], this._endCallback = void 0, this.ending = false, this.ended = false;
    }
    _isFull() {
      return this._clients.length >= this.options.max;
    }
    _isAboveMin() {
      return this._clients.length > this.options.min;
    }
    _pulseQueue() {
      if (this.log("pulse queue"), this.ended) {
        this.log("pulse queue ended");
        return;
      }
      if (this.ending) {
        this.log("pulse queue on ending"), this._idle.length && this._idle.slice().map((t) => {
          this._remove(t.client);
        }), this._clients.length || (this.ended = true, this._endCallback());
        return;
      }
      if (!this._pendingQueue.length) {
        this.log("no queued requests");
        return;
      }
      if (!this._idle.length && this._isFull()) return;
      let e = this._pendingQueue.shift();
      if (this._idle.length) {
        let t = this._idle.pop();
        clearTimeout(
          t.timeoutId
        );
        let n = t.client;
        n.ref && n.ref();
        let i = t.idleListener;
        return this._acquireClient(n, e, i, false);
      }
      if (!this._isFull()) return this.newClient(e);
      throw new Error("unexpected condition");
    }
    _remove(e) {
      let t = ro(
        this._idle,
        (n) => n.client === e
      );
      t !== void 0 && clearTimeout(t.timeoutId), this._clients = this._clients.filter(
        (n) => n !== e
      ), e.end(), this.emit("remove", e);
    }
    connect(e) {
      if (this.ending) {
        let i = new Error("Cannot use a pool after calling end on the pool");
        return e ? e(i) : this.Promise.reject(i);
      }
      let t = Dt(this.Promise, e), n = t.result;
      if (this._isFull() || this._idle.length) {
        if (this._idle.length && m.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis) return this._pendingQueue.push(new Qe(t.callback)), n;
        let i = a((u, c, l) => {
          clearTimeout(o), t.callback(u, c, l);
        }, "queueCallback"), s = new Qe(i), o = setTimeout(() => {
          ro(
            this._pendingQueue,
            (u) => u.callback === i
          ), s.timedOut = true, t.callback(new Error("timeout exceeded when trying to connect"));
        }, this.options.connectionTimeoutMillis);
        return o.unref && o.unref(), this._pendingQueue.push(s), n;
      }
      return this.newClient(new Qe(t.callback)), n;
    }
    newClient(e) {
      let t = new this.Client(this.options);
      this._clients.push(
        t
      );
      let n = sl(this, t);
      this.log("checking client timeout");
      let i, s = false;
      this.options.connectionTimeoutMillis && (i = setTimeout(() => {
        this.log("ending client due to timeout"), s = true, t.connection ? t.connection.stream.destroy() : t.end();
      }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), t.connect((o) => {
        if (i && clearTimeout(i), t.on("error", n), o) this.log("client failed to connect", o), this._clients = this._clients.filter((u) => u !== t), s && (o = new Error("Connection terminated due to connection timeout", { cause: o })), this._pulseQueue(), e.timedOut || e.callback(o, void 0, to);
        else {
          if (this.log("new client connected"), this.options.maxLifetimeSeconds !== 0) {
            let u = setTimeout(() => {
              this.log("ending client due to expired lifetime"), this._expired.add(t), this._idle.findIndex((l) => l.client === t) !== -1 && this._acquireClient(
                t,
                new Qe((l, f, y) => y()),
                n,
                false
              );
            }, this.options.maxLifetimeSeconds * 1e3);
            u.unref(), t.once("end", () => clearTimeout(u));
          }
          return this._acquireClient(t, e, n, true);
        }
      });
    }
    _acquireClient(e, t, n, i) {
      i && this.emit("connect", e), this.emit("acquire", e), e.release = this._releaseOnce(e, n), e.removeListener("error", n), t.timedOut ? i && this.options.verify ? this.options.verify(e, e.release) : e.release() : i && this.options.verify ? this.options.verify(e, (s) => {
        if (s) return e.release(s), t.callback(s, void 0, to);
        t.callback(void 0, e, e.release);
      }) : t.callback(void 0, e, e.release);
    }
    _releaseOnce(e, t) {
      let n = false;
      return (i) => {
        n && il(), n = true, this._release(e, t, i);
      };
    }
    _release(e, t, n) {
      if (e.on("error", t), e._poolUseCount = (e._poolUseCount || 0) + 1, this.emit("release", n, e), n || this.ending || !e._queryable || e._ending || e._poolUseCount >= this.options.maxUses) {
        e._poolUseCount >= this.options.maxUses && this.log("remove expended client"), this._remove(e), this._pulseQueue();
        return;
      }
      if (this._expired.has(e)) {
        this.log("remove expired client"), this._expired.delete(e), this._remove(e), this._pulseQueue();
        return;
      }
      let s;
      this.options.idleTimeoutMillis && this._isAboveMin() && (s = setTimeout(() => {
        this.log("remove idle client"), this._remove(e);
      }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && s.unref()), this.options.allowExitOnIdle && e.unref(), this._idle.push(new _n(
        e,
        t,
        s
      )), this._pulseQueue();
    }
    query(e, t, n) {
      if (typeof e == "function") {
        let s = Dt(this.Promise, e);
        return v(function() {
          return s.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
        }), s.result;
      }
      typeof t == "function" && (n = t, t = void 0);
      let i = Dt(this.Promise, n);
      return n = i.callback, this.connect((s, o) => {
        if (s) return n(s);
        let u = false, c = a((l) => {
          u || (u = true, o.release(l), n(l));
        }, "onError");
        o.once("error", c), this.log("dispatching query");
        try {
          o.query(e, t, (l, f) => {
            if (this.log("query dispatched"), o.removeListener(
              "error",
              c
            ), !u) return u = true, o.release(l), l ? n(l) : n(void 0, f);
          });
        } catch (l) {
          return o.release(l), n(l);
        }
      }), i.result;
    }
    end(e) {
      if (this.log("ending"), this.ending) {
        let n = new Error("Called end on pool more than once");
        return e ? e(n) : this.Promise.reject(n);
      }
      this.ending = true;
      let t = Dt(this.Promise, e);
      return this._endCallback = t.callback, this._pulseQueue(), t.result;
    }
    get waitingCount() {
      return this._pendingQueue.length;
    }
    get idleCount() {
      return this._idle.length;
    }
    get expiredCount() {
      return this._clients.reduce((e, t) => e + (this._expired.has(t) ? 1 : 0), 0);
    }
    get totalCount() {
      return this._clients.length;
    }
  };
  a(Rn, "Pool");
  var In = Rn;
  no.exports = In;
});
var so = {};
ie(so, { default: /* @__PURE__ */ __name(() => ol, "default") });
var ol;
var oo = G(() => {
  "use strict";
  p();
  ol = {};
});
var ao = T((lp, al) => {
  al.exports = { name: "pg", version: "8.8.0", description: "PostgreSQL client - pure javascript & libpq with the same API", keywords: [
    "database",
    "libpq",
    "pg",
    "postgre",
    "postgres",
    "postgresql",
    "rdbms"
  ], homepage: "https://github.com/brianc/node-postgres", repository: { type: "git", url: "git://github.com/brianc/node-postgres.git", directory: "packages/pg" }, author: "Brian Carlson <brian.m.carlson@gmail.com>", main: "./lib", dependencies: { "buffer-writer": "2.0.0", "packet-reader": "1.0.0", "pg-connection-string": "^2.5.0", "pg-pool": "^3.5.2", "pg-protocol": "^1.5.0", "pg-types": "^2.1.0", pgpass: "1.x" }, devDependencies: {
    async: "2.6.4",
    bluebird: "3.5.2",
    co: "4.6.0",
    "pg-copy-streams": "0.3.0"
  }, peerDependencies: { "pg-native": ">=3.0.1" }, peerDependenciesMeta: { "pg-native": { optional: true } }, scripts: { test: "make test-all" }, files: ["lib", "SPONSORS.md"], license: "MIT", engines: { node: ">= 8.0.0" }, gitHead: "c99fb2c127ddf8d712500db2c7b9a5491a178655" };
});
var lo = T((fp, co) => {
  "use strict";
  p();
  var uo = ge().EventEmitter, ul = (it(), O(nt)), Bn = rt(), Ne = co.exports = function(r, e, t) {
    uo.call(this), r = Bn.normalizeQueryConfig(r, e, t), this.text = r.text, this.values = r.values, this.name = r.name, this.callback = r.callback, this.state = "new", this._arrayMode = r.rowMode === "array", this._emitRowEvents = false, this.on("newListener", function(n) {
      n === "row" && (this._emitRowEvents = true);
    }.bind(this));
  };
  ul.inherits(Ne, uo);
  var cl = { sqlState: "code", statementPosition: "position", messagePrimary: "message", context: "where", schemaName: "schema", tableName: "table", columnName: "column", dataTypeName: "dataType", constraintName: "constraint", sourceFile: "file", sourceLine: "line", sourceFunction: "routine" };
  Ne.prototype.handleError = function(r) {
    var e = this.native.pq.resultErrorFields();
    if (e) for (var t in e) {
      var n = cl[t] || t;
      r[n] = e[t];
    }
    this.callback ? this.callback(r) : this.emit("error", r), this.state = "error";
  };
  Ne.prototype.then = function(r, e) {
    return this._getPromise().then(
      r,
      e
    );
  };
  Ne.prototype.catch = function(r) {
    return this._getPromise().catch(r);
  };
  Ne.prototype._getPromise = function() {
    return this._promise ? this._promise : (this._promise = new Promise(function(r, e) {
      this._once("end", r), this._once("error", e);
    }.bind(this)), this._promise);
  };
  Ne.prototype.submit = function(r) {
    this.state = "running";
    var e = this;
    this.native = r.native, r.native.arrayMode = this._arrayMode;
    var t = a(function(s, o, u) {
      if (r.native.arrayMode = false, v(function() {
        e.emit("_done");
      }), s) return e.handleError(s);
      e._emitRowEvents && (u.length > 1 ? o.forEach(
        (c, l) => {
          c.forEach((f) => {
            e.emit("row", f, u[l]);
          });
        }
      ) : o.forEach(function(c) {
        e.emit("row", c, u);
      })), e.state = "end", e.emit("end", u), e.callback && e.callback(null, u);
    }, "after");
    if (m.domain && (t = m.domain.bind(t)), this.name) {
      this.name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", this.name, this.name.length), console.error("This can cause conflicts and silent errors executing queries"));
      var n = (this.values || []).map(Bn.prepareValue);
      if (r.namedQueries[this.name]) {
        if (this.text && r.namedQueries[this.name] !== this.text) {
          let s = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
          return t(s);
        }
        return r.native.execute(this.name, n, t);
      }
      return r.native.prepare(this.name, this.text, n.length, function(s) {
        return s ? t(s) : (r.namedQueries[e.name] = e.text, e.native.execute(e.name, n, t));
      });
    } else if (this.values) {
      if (!Array.isArray(
        this.values
      )) {
        let s = new Error("Query values must be an array");
        return t(s);
      }
      var i = this.values.map(Bn.prepareValue);
      r.native.query(this.text, i, t);
    } else r.native.query(this.text, t);
  };
});
var yo = T((yp, po) => {
  "use strict";
  p();
  var ll = (oo(), O(so)), fl = At(), dp = ao(), fo = ge().EventEmitter, hl = (it(), O(nt)), pl = Rt(), ho = lo(), K = po.exports = function(r) {
    fo.call(this), r = r || {}, this._Promise = r.Promise || b.Promise, this._types = new fl(r.types), this.native = new ll({ types: this._types }), this._queryQueue = [], this._ending = false, this._connecting = false, this._connected = false, this._queryable = true;
    var e = this.connectionParameters = new pl(r);
    this.user = e.user, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: e.password }), this.database = e.database, this.host = e.host, this.port = e.port, this.namedQueries = {};
  };
  K.Query = ho;
  hl.inherits(K, fo);
  K.prototype._errorAllQueries = function(r) {
    let e = a((t) => {
      m.nextTick(() => {
        t.native = this.native, t.handleError(r);
      });
    }, "enqueueError");
    this._hasActiveQuery() && (e(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(e), this._queryQueue.length = 0;
  };
  K.prototype._connect = function(r) {
    var e = this;
    if (this._connecting) {
      m.nextTick(() => r(new Error("Client has already been connected. You cannot reuse a client.")));
      return;
    }
    this._connecting = true, this.connectionParameters.getLibpqConnectionString(function(t, n) {
      if (t) return r(t);
      e.native.connect(n, function(i) {
        if (i) return e.native.end(), r(i);
        e._connected = true, e.native.on("error", function(s) {
          e._queryable = false, e._errorAllQueries(s), e.emit("error", s);
        }), e.native.on("notification", function(s) {
          e.emit("notification", { channel: s.relname, payload: s.extra });
        }), e.emit("connect"), e._pulseQueryQueue(true), r();
      });
    });
  };
  K.prototype.connect = function(r) {
    if (r) {
      this._connect(r);
      return;
    }
    return new this._Promise((e, t) => {
      this._connect((n) => {
        n ? t(n) : e();
      });
    });
  };
  K.prototype.query = function(r, e, t) {
    var n, i, s, o, u;
    if (r == null) throw new TypeError("Client was passed a null or undefined query");
    if (typeof r.submit == "function") s = r.query_timeout || this.connectionParameters.query_timeout, i = n = r, typeof e == "function" && (r.callback = e);
    else if (s = this.connectionParameters.query_timeout, n = new ho(r, e, t), !n.callback) {
      let c, l;
      i = new this._Promise((f, y) => {
        c = f, l = y;
      }), n.callback = (f, y) => f ? l(f) : c(y);
    }
    return s && (u = n.callback, o = setTimeout(() => {
      var c = new Error(
        "Query read timeout"
      );
      m.nextTick(() => {
        n.handleError(c, this.connection);
      }), u(c), n.callback = () => {
      };
      var l = this._queryQueue.indexOf(n);
      l > -1 && this._queryQueue.splice(l, 1), this._pulseQueryQueue();
    }, s), n.callback = (c, l) => {
      clearTimeout(o), u(c, l);
    }), this._queryable ? this._ending ? (n.native = this.native, m.nextTick(() => {
      n.handleError(
        new Error("Client was closed and is not queryable")
      );
    }), i) : (this._queryQueue.push(n), this._pulseQueryQueue(), i) : (n.native = this.native, m.nextTick(() => {
      n.handleError(new Error("Client has encountered a connection error and is not queryable"));
    }), i);
  };
  K.prototype.end = function(r) {
    var e = this;
    this._ending = true, this._connected || this.once("connect", this.end.bind(this, r));
    var t;
    return r || (t = new this._Promise(function(n, i) {
      r = a((s) => s ? i(s) : n(), "cb");
    })), this.native.end(function() {
      e._errorAllQueries(new Error("Connection terminated")), m.nextTick(() => {
        e.emit("end"), r && r();
      });
    }), t;
  };
  K.prototype._hasActiveQuery = function() {
    return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
  };
  K.prototype._pulseQueryQueue = function(r) {
    if (this._connected && !this._hasActiveQuery()) {
      var e = this._queryQueue.shift();
      if (!e) {
        r || this.emit("drain");
        return;
      }
      this._activeQuery = e, e.submit(this);
      var t = this;
      e.once("_done", function() {
        t._pulseQueryQueue();
      });
    }
  };
  K.prototype.cancel = function(r) {
    this._activeQuery === r ? this.native.cancel(function() {
    }) : this._queryQueue.indexOf(r) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(r), 1);
  };
  K.prototype.ref = function() {
  };
  K.prototype.unref = function() {
  };
  K.prototype.setTypeParser = function(r, e, t) {
    return this._types.setTypeParser(
      r,
      e,
      t
    );
  };
  K.prototype.getTypeParser = function(r, e) {
    return this._types.getTypeParser(r, e);
  };
});
var Ln = T((gp, mo) => {
  "use strict";
  p();
  mo.exports = yo();
});
var ot = T((vp, at) => {
  "use strict";
  p();
  var dl = eo(), yl = tt(), ml = En(), wl = io(), { DatabaseError: gl } = vn(), bl = a(
    (r) => {
      var e;
      return e = class extends wl {
        static {
          __name(this, "e");
        }
        constructor(n) {
          super(n, r);
        }
      }, a(e, "BoundPool"), e;
    },
    "poolFactory"
  ), Fn = a(
    function(r) {
      this.defaults = yl, this.Client = r, this.Query = this.Client.Query, this.Pool = bl(this.Client), this._pools = [], this.Connection = ml, this.types = Je(), this.DatabaseError = gl;
    },
    "PG"
  );
  typeof m.env.NODE_PG_FORCE_NATIVE < "u" ? at.exports = new Fn(Ln()) : (at.exports = new Fn(dl), Object.defineProperty(at.exports, "native", {
    configurable: true,
    enumerable: false,
    get() {
      var r = null;
      try {
        r = new Fn(Ln());
      } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND") throw e;
      }
      return Object.defineProperty(at.exports, "native", { value: r }), r;
    }
  }));
});
p();
p();
Fe();
Zt();
p();
var pa = Object.defineProperty;
var da = Object.defineProperties;
var ya = Object.getOwnPropertyDescriptors;
var bi = Object.getOwnPropertySymbols;
var ma = Object.prototype.hasOwnProperty;
var wa = Object.prototype.propertyIsEnumerable;
var vi = a(
  (r, e, t) => e in r ? pa(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t,
  "__defNormalProp"
);
var ga = a((r, e) => {
  for (var t in e || (e = {})) ma.call(e, t) && vi(r, t, e[t]);
  if (bi) for (var t of bi(e)) wa.call(e, t) && vi(r, t, e[t]);
  return r;
}, "__spreadValues");
var ba = a((r, e) => da(r, ya(e)), "__spreadProps");
var va = 1008e3;
var xi = new Uint8Array(
  new Uint16Array([258]).buffer
)[0] === 2;
var xa = new TextDecoder();
var Jt = new TextEncoder();
var yt = Jt.encode("0123456789abcdef");
var mt = Jt.encode("0123456789ABCDEF");
var Sa = Jt.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
var Si = Sa.slice();
Si[62] = 45;
Si[63] = 95;
var He;
var wt;
function Ea(r, { alphabet: e, scratchArr: t } = {}) {
  if (!He) if (He = new Uint16Array(256), wt = new Uint16Array(256), xi) for (let C = 0; C < 256; C++) He[C] = yt[C & 15] << 8 | yt[C >>> 4], wt[C] = mt[C & 15] << 8 | mt[C >>> 4];
  else for (let C = 0; C < 256; C++) He[C] = yt[C & 15] | yt[C >>> 4] << 8, wt[C] = mt[C & 15] | mt[C >>> 4] << 8;
  r.byteOffset % 4 !== 0 && (r = new Uint8Array(r));
  let n = r.length, i = n >>> 1, s = n >>> 2, o = t || new Uint16Array(n), u = new Uint32Array(
    r.buffer,
    r.byteOffset,
    s
  ), c = new Uint32Array(o.buffer, o.byteOffset, i), l = e === "upper" ? wt : He, f = 0, y = 0, g;
  if (xi)
    for (; f < s; ) g = u[f++], c[y++] = l[g >>> 8 & 255] << 16 | l[g & 255], c[y++] = l[g >>> 24] << 16 | l[g >>> 16 & 255];
  else for (; f < s; )
    g = u[f++], c[y++] = l[g >>> 24] << 16 | l[g >>> 16 & 255], c[y++] = l[g >>> 8 & 255] << 16 | l[g & 255];
  for (f <<= 2; f < n; ) o[f] = l[r[f++]];
  return xa.decode(o.subarray(0, n));
}
__name(Ea, "Ea");
a(Ea, "_toHex");
function Aa(r, e = {}) {
  let t = "", n = r.length, i = va >>> 1, s = Math.ceil(n / i), o = new Uint16Array(s > 1 ? i : n);
  for (let u = 0; u < s; u++) {
    let c = u * i, l = c + i;
    t += Ea(r.subarray(c, l), ba(ga(
      {},
      e
    ), { scratchArr: o }));
  }
  return t;
}
__name(Aa, "Aa");
a(Aa, "_toHexChunked");
function Ei(r, e = {}) {
  return e.alphabet !== "upper" && typeof r.toHex == "function" ? r.toHex() : Aa(r, e);
}
__name(Ei, "Ei");
a(Ei, "toHex");
p();
var gt = class gt2 {
  static {
    __name(this, "gt");
  }
  constructor(e, t) {
    this.strings = e;
    this.values = t;
  }
  toParameterizedQuery(e = { query: "", params: [] }) {
    let { strings: t, values: n } = this;
    for (let i = 0, s = t.length; i < s; i++) if (e.query += t[i], i < n.length) {
      let o = n[i];
      if (o instanceof Ge) e.query += o.sql;
      else if (o instanceof Ce) if (o.queryData instanceof gt2) o.queryData.toParameterizedQuery(
        e
      );
      else {
        if (o.queryData.params?.length) throw new Error("This query is not composable");
        e.query += o.queryData.query;
      }
      else {
        let { params: u } = e;
        u.push(o), e.query += "$" + u.length, (o instanceof d || ArrayBuffer.isView(o)) && (e.query += "::bytea");
      }
    }
    return e;
  }
};
a(gt, "SqlTemplate");
var $e = gt;
var Xt = class Xt2 {
  static {
    __name(this, "Xt");
  }
  constructor(e) {
    this.sql = e;
  }
};
a(Xt, "UnsafeRawSql");
var Ge = Xt;
p();
function bt() {
  typeof window < "u" && typeof document < "u" && typeof console < "u" && typeof console.warn == "function" && console.warn(`          
        ************************************************************
        *                                                          *
        *  WARNING: Running SQL directly from the browser can have *
        *  security implications. Even if your database is         *
        *  protected by Row-Level Security (RLS), use it at your   *
        *  own risk. This approach is great for fast prototyping,  *
        *  but ensure proper safeguards are in place to prevent    *
        *  misuse or execution of expensive SQL queries by your    *
        *  end users.                                              *
        *                                                          *
        *  If you've assessed the risks, suppress this message     *
        *  using the disableWarningInBrowsers configuration        *
        *  parameter.                                              *
        *                                                          *
        ************************************************************`);
}
__name(bt, "bt");
a(bt, "warnIfBrowser");
Fe();
var as = Se(At());
var us = Se(rt());
var _t = class _t2 extends Error {
  static {
    __name(this, "_t");
  }
  constructor(t) {
    super(t);
    E(this, "name", "NeonDbError");
    E(this, "severity");
    E(this, "code");
    E(this, "detail");
    E(this, "hint");
    E(this, "position");
    E(this, "internalPosition");
    E(
      this,
      "internalQuery"
    );
    E(this, "where");
    E(this, "schema");
    E(this, "table");
    E(this, "column");
    E(this, "dataType");
    E(this, "constraint");
    E(this, "file");
    E(this, "line");
    E(this, "routine");
    E(this, "sourceError");
    "captureStackTrace" in Error && typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, _t2);
  }
};
a(
  _t,
  "NeonDbError"
);
var be = _t;
var is = "transaction() expects an array of queries, or a function returning an array of queries";
var Bu = ["severity", "code", "detail", "hint", "position", "internalPosition", "internalQuery", "where", "schema", "table", "column", "dataType", "constraint", "file", "line", "routine"];
function Lu(r) {
  return r instanceof d ? "\\x" + Ei(r) : r;
}
__name(Lu, "Lu");
a(Lu, "encodeBuffersAsBytea");
function ss(r) {
  let { query: e, params: t } = r instanceof $e ? r.toParameterizedQuery() : r;
  return { query: e, params: t.map((n) => Lu((0, us.prepareValue)(n))) };
}
__name(ss, "ss");
a(ss, "prepareQuery");
function cs(r, {
  arrayMode: e,
  fullResults: t,
  fetchOptions: n,
  isolationLevel: i,
  readOnly: s,
  deferrable: o,
  authToken: u,
  disableWarningInBrowsers: c
} = {}) {
  if (!r) throw new Error("No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?");
  let l;
  try {
    l = Yt(r);
  } catch {
    throw new Error(
      "Database connection string provided to `neon()` is not a valid URL. Connection string: " + String(r)
    );
  }
  let { protocol: f, username: y, hostname: g, port: A, pathname: C } = l;
  if (f !== "postgres:" && f !== "postgresql:" || !y || !g || !C) throw new Error("Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");
  function D(P, ...I) {
    if (!(Array.isArray(P) && Array.isArray(P.raw) && Array.isArray(I))) throw new Error('This function can now be called only as a tagged-template function: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a conventional function call with value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], options).');
    return new Ce(
      Y,
      new $e(P, I)
    );
  }
  __name(D, "D");
  a(D, "templateFn"), D.query = (P, I, w) => new Ce(Y, { query: P, params: I ?? [] }, w), D.unsafe = (P) => new Ge(
    P
  ), D.transaction = async (P, I) => {
    if (typeof P == "function" && (P = P(D)), !Array.isArray(P)) throw new Error(is);
    P.forEach((W) => {
      if (!(W instanceof Ce)) throw new Error(is);
    });
    let w = P.map((W) => W.queryData), Z = P.map((W) => W.opts ?? {});
    return Y(w, Z, I);
  };
  async function Y(P, I, w) {
    let { fetchEndpoint: Z, fetchFunction: W } = ce, J = Array.isArray(
      P
    ) ? { queries: P.map((ee) => ss(ee)) } : ss(P), X = n ?? {}, se = e ?? false, oe = t ?? false, B = i, j = s, le = o;
    w !== void 0 && (w.fetchOptions !== void 0 && (X = { ...X, ...w.fetchOptions }), w.arrayMode !== void 0 && (se = w.arrayMode), w.fullResults !== void 0 && (oe = w.fullResults), w.isolationLevel !== void 0 && (B = w.isolationLevel), w.readOnly !== void 0 && (j = w.readOnly), w.deferrable !== void 0 && (le = w.deferrable)), I !== void 0 && !Array.isArray(I) && I.fetchOptions !== void 0 && (X = { ...X, ...I.fetchOptions });
    let de = u;
    !Array.isArray(I) && I?.authToken !== void 0 && (de = I.authToken);
    let We = typeof Z == "function" ? Z(g, A, { jwtAuth: de !== void 0 }) : Z, fe = { "Neon-Connection-String": r, "Neon-Raw-Text-Output": "true", "Neon-Array-Mode": "true" }, _e = await Fu(de);
    _e && (fe.Authorization = `Bearer ${_e}`), Array.isArray(P) && (B !== void 0 && (fe["Neon-Batch-Isolation-Level"] = B), j !== void 0 && (fe["Neon-Batch-Read-Only"] = String(j)), le !== void 0 && (fe["Neon-Batch-Deferrable"] = String(le))), c || ce.disableWarningInBrowsers || bt();
    let ye;
    try {
      ye = await (W ?? fetch)(We, { method: "POST", body: JSON.stringify(J), headers: fe, ...X });
    } catch (ee) {
      let M = new be(
        `Error connecting to database: ${ee}`
      );
      throw M.sourceError = ee, M;
    }
    if (ye.ok) {
      let ee = await ye.json();
      if (Array.isArray(P)) {
        let M = ee.results;
        if (!Array.isArray(M)) throw new be("Neon internal error: unexpected result format");
        return M.map(($2, me) => {
          let Ot = I[me] ?? {}, vo = Ot.arrayMode ?? se, xo = Ot.fullResults ?? oe;
          return os(
            $2,
            { arrayMode: vo, fullResults: xo, types: Ot.types }
          );
        });
      } else {
        let M = I ?? {}, $2 = M.arrayMode ?? se, me = M.fullResults ?? oe;
        return os(ee, { arrayMode: $2, fullResults: me, types: M.types });
      }
    } else {
      let { status: ee } = ye;
      if (ee === 400) {
        let M = await ye.json(), $2 = new be(M.message);
        for (let me of Bu) $2[me] = M[me] ?? void 0;
        throw $2;
      } else {
        let M = await ye.text();
        throw new be(
          `Server error (HTTP status ${ee}): ${M}`
        );
      }
    }
  }
  __name(Y, "Y");
  return a(Y, "execute"), D;
}
__name(cs, "cs");
a(cs, "neon");
var dr = class dr2 {
  static {
    __name(this, "dr");
  }
  constructor(e, t, n) {
    this.execute = e;
    this.queryData = t;
    this.opts = n;
  }
  then(e, t) {
    return this.execute(this.queryData, this.opts).then(e, t);
  }
  catch(e) {
    return this.execute(this.queryData, this.opts).catch(e);
  }
  finally(e) {
    return this.execute(
      this.queryData,
      this.opts
    ).finally(e);
  }
};
a(dr, "NeonQueryPromise");
var Ce = dr;
function os(r, {
  arrayMode: e,
  fullResults: t,
  types: n
}) {
  let i = new as.default(n), s = r.fields.map((c) => c.name), o = r.fields.map((c) => i.getTypeParser(
    c.dataTypeID
  )), u = e === true ? r.rows.map((c) => c.map((l, f) => l === null ? null : o[f](l))) : r.rows.map((c) => Object.fromEntries(
    c.map((l, f) => [s[f], l === null ? null : o[f](l)])
  ));
  return t ? (r.viaNeonFetch = true, r.rowAsArray = e, r.rows = u, r._parsers = o, r._types = i, r) : u;
}
__name(os, "os");
a(os, "processQueryResult");
async function Fu(r) {
  if (typeof r == "string") return r;
  if (typeof r == "function") try {
    return await Promise.resolve(r());
  } catch (e) {
    let t = new be("Error getting auth token.");
    throw e instanceof Error && (t = new be(`Error getting auth token: ${e.message}`)), t;
  }
}
__name(Fu, "Fu");
a(Fu, "getAuthToken");
p();
var go = Se(ot());
p();
var wo = Se(ot());
var kn = class kn2 extends wo.Client {
  static {
    __name(this, "kn");
  }
  constructor(t) {
    super(t);
    this.config = t;
  }
  get neonConfig() {
    return this.connection.stream;
  }
  connect(t) {
    let { neonConfig: n } = this;
    n.forceDisablePgSSL && (this.ssl = this.connection.ssl = false), this.ssl && n.useSecureWebSocket && console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");
    let i = typeof this.config != "string" && this.config?.host !== void 0 || typeof this.config != "string" && this.config?.connectionString !== void 0 || m.env.PGHOST !== void 0, s = m.env.USER ?? m.env.USERNAME;
    if (!i && this.host === "localhost" && this.user === s && this.database === s && this.password === null) throw new Error(`No database host or connection string was set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`);
    let o = super.connect(t), u = n.pipelineTLS && this.ssl, c = n.pipelineConnect === "password";
    if (!u && !n.pipelineConnect) return o;
    let l = this.connection;
    if (u && l.on(
      "connect",
      () => l.stream.emit("data", "S")
    ), c) {
      l.removeAllListeners("authenticationCleartextPassword"), l.removeAllListeners("readyForQuery"), l.once("readyForQuery", () => l.on("readyForQuery", this._handleReadyForQuery.bind(this)));
      let f = this.ssl ? "sslconnect" : "connect";
      l.on(f, () => {
        this.neonConfig.disableWarningInBrowsers || bt(), this._handleAuthCleartextPassword(), this._handleReadyForQuery();
      });
    }
    return o;
  }
  async _handleAuthSASLContinue(t) {
    if (typeof crypto > "u" || crypto.subtle === void 0 || crypto.subtle.importKey === void 0) throw new Error("Cannot use SASL auth when `crypto.subtle` is not defined");
    let n = crypto.subtle, i = this.saslSession, s = this.password, o = t.data;
    if (i.message !== "SASLInitialResponse" || typeof s != "string" || typeof o != "string") throw new Error(
      "SASL: protocol error"
    );
    let u = Object.fromEntries(o.split(",").map((M) => {
      if (!/^.=/.test(M)) throw new Error(
        "SASL: Invalid attribute pair entry"
      );
      let $2 = M[0], me = M.substring(2);
      return [$2, me];
    })), c = u.r, l = u.s, f = u.i;
    if (!c || !/^[!-+--~]+$/.test(c)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable");
    if (!l || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(l)) throw new Error(
      "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64"
    );
    if (!f || !/^[1-9][0-9]*$/.test(f)) throw new Error(
      "SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count"
    );
    if (!c.startsWith(i.clientNonce))
      throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
    if (c.length === i.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
    let y = parseInt(f, 10), g = d.from(l, "base64"), A = new TextEncoder(), C = A.encode(s), D = await n.importKey(
      "raw",
      C,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    ), Y = new Uint8Array(await n.sign("HMAC", D, d.concat(
      [g, d.from([0, 0, 0, 1])]
    ))), P = Y;
    for (var I = 0; I < y - 1; I++) Y = new Uint8Array(await n.sign("HMAC", D, Y)), P = d.from(
      P.map((M, $2) => P[$2] ^ Y[$2])
    );
    let w = P, Z = await n.importKey(
      "raw",
      w,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    ), W = new Uint8Array(await n.sign("HMAC", Z, A.encode("Client Key"))), J = await n.digest(
      "SHA-256",
      W
    ), X = "n=*,r=" + i.clientNonce, se = "r=" + c + ",s=" + l + ",i=" + y, oe = "c=biws,r=" + c, B = X + "," + se + "," + oe, j = await n.importKey(
      "raw",
      J,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    );
    var le = new Uint8Array(await n.sign(
      "HMAC",
      j,
      A.encode(B)
    )), de = d.from(W.map((M, $2) => W[$2] ^ le[$2])), We = de.toString("base64");
    let fe = await n.importKey(
      "raw",
      w,
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign"]
    ), _e = await n.sign("HMAC", fe, A.encode("Server Key")), ye = await n.importKey("raw", _e, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
    var ee = d.from(
      await n.sign("HMAC", ye, A.encode(B))
    );
    i.message = "SASLResponse", i.serverSignature = ee.toString("base64"), i.response = oe + ",p=" + We, this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  }
};
a(
  kn,
  "NeonClient"
);
var ut = kn;
Fe();
var bo = Se(Rt());
function vl(r, e) {
  if (e) return { callback: e, result: void 0 };
  let t, n, i = a(function(o, u) {
    o ? t(o) : n(u);
  }, "cb"), s = new r(function(o, u) {
    n = o, t = u;
  });
  return { callback: i, result: s };
}
__name(vl, "vl");
a(vl, "promisify");
var Un = class Un2 extends go.Pool {
  static {
    __name(this, "Un");
  }
  constructor() {
    super(...arguments);
    E(this, "Client", ut);
    E(this, "hasFetchUnsupportedListeners", false);
    E(this, "addListener", this.on);
  }
  on(t, n) {
    return t !== "error" && (this.hasFetchUnsupportedListeners = true), super.on(t, n);
  }
  query(t, n, i) {
    if (!ce.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof t == "function") return super.query(
      t,
      n,
      i
    );
    typeof n == "function" && (i = n, n = void 0);
    let s = vl(this.Promise, i);
    i = s.callback;
    try {
      let o = new bo.default(
        this.options
      ), u = encodeURIComponent, c = encodeURI, l = `postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`, f = typeof t == "string" ? t : t.text, y = n ?? t.values ?? [];
      cs(l, { fullResults: true, arrayMode: t.rowMode === "array" }).query(f, y, { types: t.types ?? this.options?.types }).then((A) => i(void 0, A)).catch((A) => i(
        A
      ));
    } catch (o) {
      i(o);
    }
    return s.result;
  }
};
a(Un, "NeonPool");
Fe();
var ct = Se(ot());
var export_DatabaseError = ct.DatabaseError;
var export_defaults = ct.defaults;
var export_escapeIdentifier = ct.escapeIdentifier;
var export_escapeLiteral = ct.escapeLiteral;
var export_types = ct.types;

// node_modules/.pnpm/@prisma+driver-adapter-utils@7.8.0/node_modules/@prisma/driver-adapter-utils/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/.pnpm/@prisma+debug@7.8.0/node_modules/@prisma/debug/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __defProp2 = Object.defineProperty;
var __export2 = /* @__PURE__ */ __name((target, all) => {
  for (var name2 in all)
    __defProp2(target, name2, { get: all[name2], enumerable: true });
}, "__export");
var colors_exports = {};
__export2(colors_exports, {
  $: /* @__PURE__ */ __name(() => $, "$"),
  bgBlack: /* @__PURE__ */ __name(() => bgBlack, "bgBlack"),
  bgBlue: /* @__PURE__ */ __name(() => bgBlue, "bgBlue"),
  bgCyan: /* @__PURE__ */ __name(() => bgCyan, "bgCyan"),
  bgGreen: /* @__PURE__ */ __name(() => bgGreen, "bgGreen"),
  bgMagenta: /* @__PURE__ */ __name(() => bgMagenta, "bgMagenta"),
  bgRed: /* @__PURE__ */ __name(() => bgRed, "bgRed"),
  bgWhite: /* @__PURE__ */ __name(() => bgWhite, "bgWhite"),
  bgYellow: /* @__PURE__ */ __name(() => bgYellow, "bgYellow"),
  black: /* @__PURE__ */ __name(() => black, "black"),
  blue: /* @__PURE__ */ __name(() => blue, "blue"),
  bold: /* @__PURE__ */ __name(() => bold, "bold"),
  cyan: /* @__PURE__ */ __name(() => cyan, "cyan"),
  dim: /* @__PURE__ */ __name(() => dim, "dim"),
  gray: /* @__PURE__ */ __name(() => gray, "gray"),
  green: /* @__PURE__ */ __name(() => green, "green"),
  grey: /* @__PURE__ */ __name(() => grey, "grey"),
  hidden: /* @__PURE__ */ __name(() => hidden, "hidden"),
  inverse: /* @__PURE__ */ __name(() => inverse, "inverse"),
  italic: /* @__PURE__ */ __name(() => italic, "italic"),
  magenta: /* @__PURE__ */ __name(() => magenta, "magenta"),
  red: /* @__PURE__ */ __name(() => red, "red"),
  reset: /* @__PURE__ */ __name(() => reset, "reset"),
  strikethrough: /* @__PURE__ */ __name(() => strikethrough, "strikethrough"),
  underline: /* @__PURE__ */ __name(() => underline, "underline"),
  white: /* @__PURE__ */ __name(() => white, "white"),
  yellow: /* @__PURE__ */ __name(() => yellow, "yellow")
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x2, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x2}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
__name(init, "init");
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
var MAX_ARGS_HISTORY = 100;
var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
  enable(namespace) {
    if (typeof namespace === "string") {
      globalThis.DEBUG = namespace;
    }
  },
  disable() {
    const prev = globalThis.DEBUG;
    globalThis.DEBUG = "";
    return prev;
  },
  // this is the core logic to check if logging should happen or not
  enabled(namespace) {
    const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
      return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    });
    const isListened = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
      return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
    });
    const isExcluded = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
      return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
    });
    return isListened && !isExcluded;
  },
  log: /* @__PURE__ */ __name((...args) => {
    const [namespace, format, ...rest] = args;
    const logWithFormatting = console.warn ?? console.log;
    logWithFormatting(`${namespace} ${format}`, ...rest);
  }, "log"),
  formatters: {}
  // not implemented
};
function debugCreate(namespace) {
  const instanceProps = {
    color: COLORS[lastColor++ % COLORS.length],
    enabled: topProps.enabled(namespace),
    namespace,
    log: topProps.log,
    extend: /* @__PURE__ */ __name(() => {
    }, "extend")
    // not implemented
  };
  const debugCall = /* @__PURE__ */ __name((...args) => {
    const { enabled, namespace: namespace2, color, log: log3 } = instanceProps;
    if (args.length !== 0) {
      argsHistory.push([namespace2, ...args]);
    }
    if (argsHistory.length > MAX_ARGS_HISTORY) {
      argsHistory.shift();
    }
    if (topProps.enabled(namespace2) || enabled) {
      const stringArgs = args.map((arg) => {
        if (typeof arg === "string") {
          return arg;
        }
        return safeStringify(arg);
      });
      const ms2 = `+${Date.now() - lastTimestamp}ms`;
      lastTimestamp = Date.now();
      if (globalThis.DEBUG_COLORS) {
        log3(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms2));
      } else {
        log3(namespace2, ...stringArgs, ms2);
      }
    }
  }, "debugCall");
  return new Proxy(debugCall, {
    get: /* @__PURE__ */ __name((_, prop) => instanceProps[prop], "get"),
    set: /* @__PURE__ */ __name((_, prop, value) => instanceProps[prop] = value, "set")
  });
}
__name(debugCreate, "debugCreate");
var Debug2 = new Proxy(debugCreate, {
  get: /* @__PURE__ */ __name((_, prop) => topProps[prop], "get"),
  set: /* @__PURE__ */ __name((_, prop, value) => topProps[prop] = value, "set")
});
function safeStringify(value, indent = 2) {
  const cache = /* @__PURE__ */ new Set();
  return JSON.stringify(
    value,
    (key, value2) => {
      if (typeof value2 === "object" && value2 !== null) {
        if (cache.has(value2)) {
          return `[Circular *]`;
        }
        cache.add(value2);
      } else if (typeof value2 === "bigint") {
        return value2.toString();
      }
      return value2;
    },
    indent
  );
}
__name(safeStringify, "safeStringify");

// node_modules/.pnpm/@prisma+driver-adapter-utils@7.8.0/node_modules/@prisma/driver-adapter-utils/dist/index.mjs
var DriverAdapterError = class extends Error {
  static {
    __name(this, "DriverAdapterError");
  }
  name = "DriverAdapterError";
  cause;
  constructor(payload) {
    super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
    this.cause = payload;
  }
};
var debug3 = Debug2("driver-adapter-utils");
var ColumnTypeEnum = {
  // Scalars
  Int32: 0,
  Int64: 1,
  Float: 2,
  Double: 3,
  Numeric: 4,
  Boolean: 5,
  Character: 6,
  Text: 7,
  Date: 8,
  Time: 9,
  DateTime: 10,
  Json: 11,
  Enum: 12,
  Bytes: 13,
  Set: 14,
  Uuid: 15,
  // Arrays
  Int32Array: 64,
  Int64Array: 65,
  FloatArray: 66,
  DoubleArray: 67,
  NumericArray: 68,
  BooleanArray: 69,
  CharacterArray: 70,
  TextArray: 71,
  DateArray: 72,
  TimeArray: 73,
  DateTimeArray: 74,
  JsonArray: 75,
  EnumArray: 76,
  BytesArray: 77,
  UuidArray: 78,
  // Custom
  UnknownNumber: 128
};
var mockAdapterErrors = {
  queryRaw: new Error("Not implemented: queryRaw"),
  executeRaw: new Error("Not implemented: executeRaw"),
  startTransaction: new Error("Not implemented: startTransaction"),
  executeScript: new Error("Not implemented: executeScript"),
  dispose: new Error("Not implemented: dispose")
};

// node_modules/.pnpm/@prisma+adapter-neon@7.8.0/node_modules/@prisma/adapter-neon/dist/index.mjs
var import_postgres_array = __toESM(require_postgres_array(), 1);
var name = "@prisma/adapter-neon";
var { builtins: ScalarColumnType, getTypeParser } = export_types;
var ArrayColumnType = {
  BIT_ARRAY: 1561,
  BOOL_ARRAY: 1e3,
  BYTEA_ARRAY: 1001,
  BPCHAR_ARRAY: 1014,
  CHAR_ARRAY: 1002,
  CIDR_ARRAY: 651,
  DATE_ARRAY: 1182,
  FLOAT4_ARRAY: 1021,
  FLOAT8_ARRAY: 1022,
  INET_ARRAY: 1041,
  INT2_ARRAY: 1005,
  INT4_ARRAY: 1007,
  INT8_ARRAY: 1016,
  JSONB_ARRAY: 3807,
  JSON_ARRAY: 199,
  MONEY_ARRAY: 791,
  NUMERIC_ARRAY: 1231,
  OID_ARRAY: 1028,
  TEXT_ARRAY: 1009,
  TIMESTAMP_ARRAY: 1115,
  TIMESTAMPTZ_ARRAY: 1185,
  TIME_ARRAY: 1183,
  UUID_ARRAY: 2951,
  VARBIT_ARRAY: 1563,
  VARCHAR_ARRAY: 1015,
  XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
  static {
    __name(this, "_UnsupportedNativeDataType");
  }
  // map of type codes to type names
  static typeNames = {
    16: "bool",
    17: "bytea",
    18: "char",
    19: "name",
    20: "int8",
    21: "int2",
    22: "int2vector",
    23: "int4",
    24: "regproc",
    25: "text",
    26: "oid",
    27: "tid",
    28: "xid",
    29: "cid",
    30: "oidvector",
    32: "pg_ddl_command",
    71: "pg_type",
    75: "pg_attribute",
    81: "pg_proc",
    83: "pg_class",
    114: "json",
    142: "xml",
    194: "pg_node_tree",
    269: "table_am_handler",
    325: "index_am_handler",
    600: "point",
    601: "lseg",
    602: "path",
    603: "box",
    604: "polygon",
    628: "line",
    650: "cidr",
    700: "float4",
    701: "float8",
    705: "unknown",
    718: "circle",
    774: "macaddr8",
    790: "money",
    829: "macaddr",
    869: "inet",
    1033: "aclitem",
    1042: "bpchar",
    1043: "varchar",
    1082: "date",
    1083: "time",
    1114: "timestamp",
    1184: "timestamptz",
    1186: "interval",
    1266: "timetz",
    1560: "bit",
    1562: "varbit",
    1700: "numeric",
    1790: "refcursor",
    2202: "regprocedure",
    2203: "regoper",
    2204: "regoperator",
    2205: "regclass",
    2206: "regtype",
    2249: "record",
    2275: "cstring",
    2276: "any",
    2277: "anyarray",
    2278: "void",
    2279: "trigger",
    2280: "language_handler",
    2281: "internal",
    2283: "anyelement",
    2287: "_record",
    2776: "anynonarray",
    2950: "uuid",
    2970: "txid_snapshot",
    3115: "fdw_handler",
    3220: "pg_lsn",
    3310: "tsm_handler",
    3361: "pg_ndistinct",
    3402: "pg_dependencies",
    3500: "anyenum",
    3614: "tsvector",
    3615: "tsquery",
    3642: "gtsvector",
    3734: "regconfig",
    3769: "regdictionary",
    3802: "jsonb",
    3831: "anyrange",
    3838: "event_trigger",
    3904: "int4range",
    3906: "numrange",
    3908: "tsrange",
    3910: "tstzrange",
    3912: "daterange",
    3926: "int8range",
    4072: "jsonpath",
    4089: "regnamespace",
    4096: "regrole",
    4191: "regcollation",
    4451: "int4multirange",
    4532: "nummultirange",
    4533: "tsmultirange",
    4534: "tstzmultirange",
    4535: "datemultirange",
    4536: "int8multirange",
    4537: "anymultirange",
    4538: "anycompatiblemultirange",
    4600: "pg_brin_bloom_summary",
    4601: "pg_brin_minmax_multi_summary",
    5017: "pg_mcv_list",
    5038: "pg_snapshot",
    5069: "xid8",
    5077: "anycompatible",
    5078: "anycompatiblearray",
    5079: "anycompatiblenonarray",
    5080: "anycompatiblerange"
  };
  type;
  constructor(code) {
    super();
    this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
    this.message = `Unsupported column type ${this.type}`;
  }
};
function fieldToColumnType(fieldTypeId) {
  switch (fieldTypeId) {
    case ScalarColumnType.INT2:
    case ScalarColumnType.INT4:
      return ColumnTypeEnum.Int32;
    case ScalarColumnType.INT8:
      return ColumnTypeEnum.Int64;
    case ScalarColumnType.FLOAT4:
      return ColumnTypeEnum.Float;
    case ScalarColumnType.FLOAT8:
      return ColumnTypeEnum.Double;
    case ScalarColumnType.BOOL:
      return ColumnTypeEnum.Boolean;
    case ScalarColumnType.DATE:
      return ColumnTypeEnum.Date;
    case ScalarColumnType.TIME:
    case ScalarColumnType.TIMETZ:
      return ColumnTypeEnum.Time;
    case ScalarColumnType.TIMESTAMP:
    case ScalarColumnType.TIMESTAMPTZ:
      return ColumnTypeEnum.DateTime;
    case ScalarColumnType.NUMERIC:
    case ScalarColumnType.MONEY:
      return ColumnTypeEnum.Numeric;
    case ScalarColumnType.JSON:
    case ScalarColumnType.JSONB:
      return ColumnTypeEnum.Json;
    case ScalarColumnType.UUID:
      return ColumnTypeEnum.Uuid;
    case ScalarColumnType.OID:
      return ColumnTypeEnum.Int64;
    case ScalarColumnType.BPCHAR:
    case ScalarColumnType.TEXT:
    case ScalarColumnType.VARCHAR:
    case ScalarColumnType.BIT:
    case ScalarColumnType.VARBIT:
    case ScalarColumnType.INET:
    case ScalarColumnType.CIDR:
    case ScalarColumnType.XML:
      return ColumnTypeEnum.Text;
    case ScalarColumnType.BYTEA:
      return ColumnTypeEnum.Bytes;
    case ArrayColumnType.INT2_ARRAY:
    case ArrayColumnType.INT4_ARRAY:
      return ColumnTypeEnum.Int32Array;
    case ArrayColumnType.FLOAT4_ARRAY:
      return ColumnTypeEnum.FloatArray;
    case ArrayColumnType.FLOAT8_ARRAY:
      return ColumnTypeEnum.DoubleArray;
    case ArrayColumnType.NUMERIC_ARRAY:
    case ArrayColumnType.MONEY_ARRAY:
      return ColumnTypeEnum.NumericArray;
    case ArrayColumnType.BOOL_ARRAY:
      return ColumnTypeEnum.BooleanArray;
    case ArrayColumnType.CHAR_ARRAY:
      return ColumnTypeEnum.CharacterArray;
    case ArrayColumnType.BPCHAR_ARRAY:
    case ArrayColumnType.TEXT_ARRAY:
    case ArrayColumnType.VARCHAR_ARRAY:
    case ArrayColumnType.VARBIT_ARRAY:
    case ArrayColumnType.BIT_ARRAY:
    case ArrayColumnType.INET_ARRAY:
    case ArrayColumnType.CIDR_ARRAY:
    case ArrayColumnType.XML_ARRAY:
      return ColumnTypeEnum.TextArray;
    case ArrayColumnType.DATE_ARRAY:
      return ColumnTypeEnum.DateArray;
    case ArrayColumnType.TIME_ARRAY:
      return ColumnTypeEnum.TimeArray;
    case ArrayColumnType.TIMESTAMP_ARRAY:
      return ColumnTypeEnum.DateTimeArray;
    case ArrayColumnType.JSON_ARRAY:
    case ArrayColumnType.JSONB_ARRAY:
      return ColumnTypeEnum.JsonArray;
    case ArrayColumnType.BYTEA_ARRAY:
      return ColumnTypeEnum.BytesArray;
    case ArrayColumnType.UUID_ARRAY:
      return ColumnTypeEnum.UuidArray;
    case ArrayColumnType.INT8_ARRAY:
    case ArrayColumnType.OID_ARRAY:
      return ColumnTypeEnum.Int64Array;
    default:
      if (fieldTypeId >= 1e4) {
        return ColumnTypeEnum.Text;
      }
      throw new UnsupportedNativeDataType(fieldTypeId);
  }
}
__name(fieldToColumnType, "fieldToColumnType");
function normalize_array(element_normalizer) {
  return (str) => (0, import_postgres_array.parse)(str, element_normalizer);
}
__name(normalize_array, "normalize_array");
function normalize_numeric(numeric) {
  return numeric;
}
__name(normalize_numeric, "normalize_numeric");
function normalize_date(date) {
  return date;
}
__name(normalize_date, "normalize_date");
function normalize_timestamp(time3) {
  return `${time3.replace(" ", "T")}+00:00`;
}
__name(normalize_timestamp, "normalize_timestamp");
function normalize_timestamptz(time3) {
  return time3.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
__name(normalize_timestamptz, "normalize_timestamptz");
function normalize_time(time3) {
  return time3;
}
__name(normalize_time, "normalize_time");
function normalize_timez(time3) {
  return time3.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
__name(normalize_timez, "normalize_timez");
function normalize_money(money) {
  return money.slice(1);
}
__name(normalize_money, "normalize_money");
function normalize_xml(xml) {
  return xml;
}
__name(normalize_xml, "normalize_xml");
function toJson(json) {
  return json;
}
__name(toJson, "toJson");
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
  return parsePgBytes(serializedBytes);
}
__name(convertBytes, "convertBytes");
function normalizeBit(bit) {
  return bit;
}
__name(normalizeBit, "normalizeBit");
var customParsers = {
  [ScalarColumnType.NUMERIC]: normalize_numeric,
  [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
  [ScalarColumnType.TIME]: normalize_time,
  [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
  [ScalarColumnType.TIMETZ]: normalize_timez,
  [ScalarColumnType.DATE]: normalize_date,
  [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
  [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
  [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
  [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
  [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
  [ScalarColumnType.MONEY]: normalize_money,
  [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
  [ScalarColumnType.JSON]: toJson,
  [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
  [ScalarColumnType.JSONB]: toJson,
  [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
  [ScalarColumnType.BYTEA]: convertBytes,
  [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
  [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
  [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
  [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
var debug4 = Debug2("prisma:driver-adapter:neon");
var NeonQueryable = class {
  static {
    __name(this, "NeonQueryable");
  }
  provider = "postgres";
  adapterName = name;
  /**
   * Execute a query given as SQL, interpolating the given parameters.
   */
  async queryRaw(query) {
    const tag = "[js::query_raw]";
    debug4(`${tag} %O`, query);
    const { fields, rows } = await this.performIO(query);
    const columnNames = fields.map((field) => field.name);
    let columnTypes = [];
    try {
      columnTypes = fields.map((field) => fieldToColumnType(field.dataTypeID));
    } catch (e) {
      if (e instanceof UnsupportedNativeDataType) {
        throw new DriverAdapterError({
          kind: "UnsupportedNativeDataType",
          type: e.type
        });
      }
      throw e;
    }
    return {
      columnNames,
      columnTypes,
      rows
    };
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */
  async executeRaw(query) {
    const tag = "[js::execute_raw]";
    debug4(`${tag} %O`, query);
    return (await this.performIO(query)).rowCount ?? 0;
  }
};
var PrismaNeonHttpAdapter = class extends NeonQueryable {
  static {
    __name(this, "PrismaNeonHttpAdapter");
  }
  client;
  constructor(client) {
    super();
    this.client = client.query ?? client;
  }
  executeScript(_script) {
    throw new Error("Not implemented yet");
  }
  async startTransaction() {
    return Promise.reject(new Error("Transactions are not supported in HTTP mode"));
  }
  async performIO(query) {
    const { sql, args: values } = query;
    return await this.client(sql, values, {
      arrayMode: true,
      fullResults: true,
      // pass type parsers to neon() HTTP client, same as in WS client above
      //
      // requires @neondatabase/serverless >= 0.9.5
      // - types option added in https://github.com/neondatabase/serverless/pull/92
      types: {
        getTypeParser: /* @__PURE__ */ __name((oid, format) => {
          if (format === "text" && customParsers[oid]) {
            return customParsers[oid];
          }
          return export_types.getTypeParser(oid, format);
        }, "getTypeParser")
      }
      // type `as` cast required until neon types are corrected:
      // https://github.com/neondatabase/serverless/pull/110#issuecomment-2458992991
    });
  }
  async dispose() {
  }
};
var PrismaNeonHttpAdapterFactory = class {
  static {
    __name(this, "PrismaNeonHttpAdapterFactory");
  }
  constructor(connectionString, options) {
    this.connectionString = connectionString;
    this.options = options;
  }
  provider = "postgres";
  adapterName = name;
  async connect() {
    return new PrismaNeonHttpAdapter(cs(this.connectionString, this.options));
  }
};

// src/config/database.ts
var import_client = __toESM(require_default2());
var prismaInstance = null;
function getPrisma(env2) {
  if (!prismaInstance) {
    const adapter = new PrismaNeonHttpAdapterFactory(env2.DATABASE_URL);
    prismaInstance = new import_client.PrismaClient({ adapter });
  }
  return prismaInstance;
}
__name(getPrisma, "getPrisma");

// src/lib/serializer.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function serialize(value) {
  if (typeof value === "bigint") {
    const n = Number(value);
    return Number.isSafeInteger(n) ? n : value.toString();
  }
  if (Array.isArray(value)) {
    return value.map(serialize);
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v2]) => [
        k,
        serialize(v2)
      ])
    );
  }
  return value;
}
__name(serialize, "serialize");

// src/controllers/spa.controller.ts
var getSpaInfo = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const spa = await prisma.spaInfo.findFirst();
    return c.json(serialize(spa));
  } catch (error3) {
    return c.json({ error: error3.message, stack: error3.stack }, 500);
  }
}, "getSpaInfo");
var getStats = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const allAppointments = await prisma.appointment.findMany();
    const todayAppointments = allAppointments.filter(
      (a2) => a2.status !== "cancelled"
    );
    const totalBookingsToday = todayAppointments.length;
    const pendingReminders = allAppointments.filter(
      (a2) => a2.status === "confirmed" && a2.startTime > "12:00"
    ).length;
    const totalRevenueVND = allAppointments.filter(
      (a2) => a2.status === "completed" || a2.status === "in_progress" || a2.status === "confirmed"
    ).reduce((sum, a2) => sum + Number(a2.price), 0);
    const formattedRevenue = (totalRevenueVND / 1e6).toFixed(1) + "M";
    const vipToday = allAppointments.filter(
      (a2) => (a2.clientTier === "Kim C\u01B0\u01A1ng" || a2.clientTier === "B\u1EA1ch Kim") && a2.status !== "cancelled"
    ).length;
    return c.json({
      totalBookingsToday,
      vipClients: vipToday || 8,
      revenueToday: formattedRevenue,
      revenueTarget: 85,
      pendingReminders: pendingReminders + 2,
      availableSlots: Math.max(0, 16 - totalBookingsToday),
      revenueTrend: "+12%"
    });
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getStats");
var getDashboardSummary = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const spa = await prisma.spaInfo.findFirst();
    const currentUser = await prisma.currentUser.findFirst();
    const revenueChart = await prisma.revenueChartItem.findMany();
    const treatmentProgress = await prisma.treatmentProgress.findMany();
    const calendarDays = [
      { day: 19, isCurrentMonth: false },
      { day: 20, isCurrentMonth: false },
      { day: 21, isCurrentMonth: true, isToday: true, hasAppointment: true },
      { day: 22, isCurrentMonth: true, hasAppointment: true },
      { day: 23, isCurrentMonth: true },
      { day: 24, isCurrentMonth: true, hasAppointment: true },
      { day: 25, isCurrentMonth: true },
      { day: 26, isCurrentMonth: true, hasAppointment: true },
      { day: 27, isCurrentMonth: true },
      { day: 28, isCurrentMonth: true, hasAppointment: true },
      { day: 29, isCurrentMonth: true },
      { day: 30, isCurrentMonth: true },
      { day: 31, isCurrentMonth: true },
      { day: 1, isCurrentMonth: false },
      { day: 2, isCurrentMonth: false }
    ];
    return c.json(
      serialize({ spa, currentUser, revenueChart, treatmentProgress, calendarDays })
    );
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getDashboardSummary");

// src/controllers/client.controller.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getClients = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const clients = await prisma.client.findMany({
      orderBy: { name: "asc" }
    });
    return c.json(serialize(clients));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getClients");
var createClient = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const { name: name2, avatar, tier, phone, email, notes } = await c.req.json();
    if (!name2 || !phone) {
      return c.json({ error: "T\xEAn v\xE0 S\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\xE0 b\u1EAFt bu\u1ED9c" }, 400);
    }
    const client = await prisma.client.create({
      data: {
        name: name2,
        avatar: avatar || `https://i.pravatar.cc/150?u=${phone}`,
        tier: tier || "M\u1EDBi",
        phone,
        email: email || "",
        totalVisits: 0,
        totalSpent: 0n,
        memberPoints: 0,
        lastVisit: "Ch\u01B0a c\xF3",
        joinDate: (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN"),
        notes: notes || ""
      }
    });
    await prisma.notification.create({
      data: {
        type: "info",
        title: "Kh\xE1ch h\xE0ng m\u1EDBi \u0111\u0103ng k\xFD",
        message: `${name2} \u0111\xE3 \u0111\u01B0\u1EE3c th\xEAm v\xE0o h\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD.`,
        time: "V\u1EEBa xong",
        read: false,
        priority: "normal"
      }
    });
    return c.json(serialize(client), 201);
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "createClient");

// src/controllers/service.controller.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getServices = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const services = await prisma.service.findMany();
    return c.json(serialize(services));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getServices");

// src/controllers/therapist.controller.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getTherapists = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const therapists = await prisma.therapist.findMany({
      orderBy: { name: "asc" }
    });
    return c.json(serialize(therapists));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getTherapists");
var createTherapist = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const { name: name2, avatar, specialty, experience, bio, services } = await c.req.json();
    if (!name2 || !specialty) {
      return c.json({ error: "T\xEAn v\xE0 Chuy\xEAn m\xF4n KTV l\xE0 b\u1EAFt bu\u1ED9c" }, 400);
    }
    const therapist = await prisma.therapist.create({
      data: {
        name: name2,
        avatar: avatar || `https://i.pravatar.cc/150?u=${encodeURIComponent(name2)}`,
        specialty,
        experience: experience || "1 n\u0103m",
        rating: 5,
        totalReviews: 0,
        availability: "available",
        bio: bio || "",
        services: services || []
      }
    });
    return c.json(serialize(therapist), 201);
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "createTherapist");
var updateTherapist = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const id = c.req.param("id");
    const { name: name2, avatar, specialty, experience, availability, bio, services } = await c.req.json();
    const dbTherapist = await prisma.therapist.findUnique({ where: { id } });
    if (!dbTherapist) {
      return c.json({ error: "Nh\xE2n vi\xEAn kh\xF4ng t\u1ED3n t\u1EA1i" }, 404);
    }
    const therapist = await prisma.therapist.update({
      where: { id },
      data: {
        name: name2 !== void 0 ? name2 : void 0,
        avatar: avatar !== void 0 ? avatar : void 0,
        specialty: specialty !== void 0 ? specialty : void 0,
        experience: experience !== void 0 ? experience : void 0,
        availability: availability !== void 0 ? availability : void 0,
        bio: bio !== void 0 ? bio : void 0,
        services: services !== void 0 ? services : void 0
      }
    });
    return c.json(serialize(therapist));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "updateTherapist");
var deleteTherapist = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const id = c.req.param("id");
    const dbTherapist = await prisma.therapist.findUnique({ where: { id } });
    if (!dbTherapist) {
      return c.json({ error: "Nh\xE2n vi\xEAn kh\xF4ng t\u1ED3n t\u1EA1i" }, 404);
    }
    await prisma.therapist.delete({ where: { id } });
    return c.json({ success: true, message: "\u0110\xE3 x\xF3a Nh\xE2n vi\xEAn th\xE0nh c\xF4ng" });
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "deleteTherapist");

// src/controllers/appointment.controller.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAppointments = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const appointments = await prisma.appointment.findMany({
      orderBy: [{ date: "desc" }, { startTime: "asc" }]
    });
    return c.json(serialize(appointments));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getAppointments");
var createAppointment = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const {
      clientId,
      therapistId,
      service,
      serviceIcon,
      startTime,
      endTime,
      date,
      price,
      notes
    } = await c.req.json();
    if (!clientId || !therapistId || !startTime || !date) {
      return c.json(
        {
          error: "Thi\u1EBFu th\xF4ng tin \u0111\u1EB7t l\u1ECBch b\u1EAFt bu\u1ED9c (M\xE3 KH, M\xE3 KTV, Ng\xE0y h\u1EB9n, Gi\u1EDD b\u1EAFt \u0111\u1EA7u)"
        },
        400
      );
    }
    const dbClient = await prisma.client.findUnique({ where: { id: clientId } });
    if (!dbClient) {
      return c.json({ error: "Kh\xE1ch h\xE0ng kh\xF4ng t\u1ED3n t\u1EA1i" }, 404);
    }
    const dbTherapist = await prisma.therapist.findUnique({
      where: { id: therapistId }
    });
    if (!dbTherapist) {
      return c.json({ error: "Nh\xE2n vi\xEAn kh\xF4ng t\u1ED3n t\u1EA1i" }, 404);
    }
    const apptPrice = BigInt(price || 0);
    const [appointment] = await prisma.$transaction([
      prisma.appointment.create({
        data: {
          clientId,
          clientName: dbClient.name,
          clientTier: dbClient.tier,
          clientAvatar: dbClient.avatar,
          service: service || null,
          serviceIcon: serviceIcon || null,
          therapist: dbTherapist.name,
          therapistId,
          startTime,
          endTime: endTime || startTime,
          date,
          status: "confirmed",
          statusLabel: "\u0110\xE3 x\xE1c nh\u1EADn",
          price: apptPrice,
          notes: notes || null
        }
      }),
      prisma.client.update({
        where: { id: clientId },
        data: {
          totalVisits: { increment: 1 },
          totalSpent: { increment: apptPrice },
          memberPoints: { increment: Math.floor(Number(apptPrice) / 1e4) },
          lastVisit: date
        }
      }),
      prisma.notification.create({
        data: {
          type: "success",
          title: "\u0110\xE3 t\u1EA1o l\u1ECBch h\u1EB9n m\u1EDBi",
          message: `${dbClient.name} \u0111\xE3 \u0111\u1EB7t l\u1ECBch l\xFAc ${startTime}`,
          time: "V\u1EEBa xong",
          read: false,
          priority: "normal"
        }
      })
    ]);
    return c.json(serialize(appointment), 201);
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "createAppointment");
var updateAppointment = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const id = c.req.param("id");
    const {
      service,
      serviceIcon,
      price,
      date,
      startTime,
      endTime,
      therapistId,
      notes,
      status
    } = await c.req.json();
    const dbAppt = await prisma.appointment.findUnique({ where: { id } });
    if (!dbAppt) {
      return c.json({ error: "L\u1ECBch h\u1EB9n kh\xF4ng t\u1ED3n t\u1EA1i" }, 404);
    }
    const updateData = {};
    if (service !== void 0) updateData.service = service;
    if (serviceIcon !== void 0) updateData.serviceIcon = serviceIcon;
    if (price !== void 0) updateData.price = BigInt(price || 0);
    if (date !== void 0) updateData.date = date;
    if (startTime !== void 0) updateData.startTime = startTime;
    if (endTime !== void 0) updateData.endTime = endTime;
    if (notes !== void 0) updateData.notes = notes;
    if (status !== void 0) {
      updateData.status = status;
      const labels = {
        in_progress: "\u0110ang x\u1EED l\xFD",
        completed: "Ho\xE0n t\u1EA5t",
        cancelled: "\u0110\xE3 h\u1EE7y",
        confirmed: "\u0110\xE3 x\xE1c nh\u1EADn"
      };
      updateData.statusLabel = labels[status] || "\u0110\xE3 x\xE1c nh\u1EADn";
    }
    if (therapistId) {
      const dbTherapist = await prisma.therapist.findUnique({
        where: { id: therapistId }
      });
      if (!dbTherapist) {
        return c.json({ error: "Nh\xE2n vi\xEAn kh\xF4ng t\u1ED3n t\u1EA1i" }, 404);
      }
      updateData.therapistId = therapistId;
      updateData.therapist = dbTherapist.name;
    }
    const updated = await prisma.appointment.update({
      where: { id },
      data: updateData
    });
    return c.json(serialize(updated));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "updateAppointment");
var updateAppointmentStatus = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const id = c.req.param("id");
    const { status } = await c.req.json();
    if (!status) {
      return c.json({ error: "Tr\u1EA1ng th\xE1i l\xE0 b\u1EAFt bu\u1ED9c" }, 400);
    }
    const labels = {
      in_progress: "\u0110ang x\u1EED l\xFD",
      completed: "Ho\xE0n t\u1EA5t",
      cancelled: "\u0110\xE3 h\u1EE7y",
      confirmed: "\u0110\xE3 x\xE1c nh\u1EADn"
    };
    const appointment = await prisma.appointment.update({
      where: { id },
      data: { status, statusLabel: labels[status] || "\u0110\xE3 x\xE1c nh\u1EADn" }
    });
    return c.json(serialize(appointment));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "updateAppointmentStatus");
var deleteAppointment = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const id = c.req.param("id");
    await prisma.appointment.delete({ where: { id } });
    return c.json({ success: true, message: "\u0110\xE3 x\xF3a l\u1ECBch h\u1EB9n" });
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "deleteAppointment");

// src/controllers/workflow.controller.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getWorkflows = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const workflows = await prisma.workflow.findMany();
    return c.json(serialize(workflows));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getWorkflows");
var toggleWorkflow = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const id = c.req.param("id");
    const workflow = await prisma.workflow.findUnique({ where: { id } });
    if (!workflow) {
      return c.json({ error: "Workflow kh\xF4ng t\u1ED3n t\u1EA1i" }, 404);
    }
    const updated = await prisma.workflow.update({
      where: { id },
      data: { active: !workflow.active }
    });
    return c.json(serialize(updated));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "toggleWorkflow");
var getNotifications = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const notifications = await prisma.notification.findMany({
      orderBy: { id: "desc" }
      // newest first
    });
    return c.json(serialize(notifications));
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "getNotifications");
var markAllNotificationsAsRead = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    await prisma.notification.updateMany({ data: { read: true } });
    return c.json({ success: true, message: "\u0110\xE3 \u0111\xE1nh d\u1EA5u \u0111\u1ECDc t\u1EA5t c\u1EA3 th\xF4ng b\xE1o" });
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "markAllNotificationsAsRead");
var deleteNotification = /* @__PURE__ */ __name(async (c) => {
  try {
    const prisma = getPrisma(c.env);
    const id = c.req.param("id");
    await prisma.notification.delete({ where: { id } });
    return c.json({ success: true, message: "\u0110\xE3 x\xF3a th\xF4ng b\xE1o" });
  } catch (error3) {
    return c.json({ error: error3.message }, 500);
  }
}, "deleteNotification");

// src/routes/api.ts
var router = new Hono2();
router.get("/spa-info", getSpaInfo);
router.get("/stats", getStats);
router.get("/dashboard-summary", getDashboardSummary);
router.get("/clients", getClients);
router.post("/clients", createClient);
router.get("/services", getServices);
router.get("/therapists", getTherapists);
router.post("/therapists", createTherapist);
router.put("/therapists/:id", updateTherapist);
router.delete("/therapists/:id", deleteTherapist);
router.get("/appointments", getAppointments);
router.post("/appointments", createAppointment);
router.put("/appointments/:id", updateAppointment);
router.put("/appointments/:id/status", updateAppointmentStatus);
router.delete("/appointments/:id", deleteAppointment);
router.get("/workflows", getWorkflows);
router.put("/workflows/:id/toggle", toggleWorkflow);
router.get("/notifications", getNotifications);
router.post("/notifications/read-all", markAllNotificationsAsRead);
router.delete("/notifications/:id", deleteNotification);
var api_default = router;

// src/index.ts
var app = new Hono2();
app.use("*", async (c, next) => {
  c.set("requestId", crypto.randomUUID());
  await next();
});
app.use(
  "*",
  cors({
    origin: "*",
    // allow all origins — lock to your frontend domain in production
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"]
  })
);
app.use("*", async (c, next) => {
  const start = Date.now();
  await next();
  const ms2 = Date.now() - start;
  console.log(
    JSON.stringify({
      requestId: c.get("requestId"),
      method: c.req.method,
      path: c.req.path,
      status: c.res.status,
      durationMs: ms2
    })
  );
});
app.get(
  "/health",
  (c) => c.json({ status: "OK", timestamp: (/* @__PURE__ */ new Date()).toISOString() })
);
app.route("/api", api_default);
app.notFound(
  (c) => c.json({ error: "Not Found", path: c.req.path }, 404)
);
app.onError((err, c) => {
  console.error(
    JSON.stringify({
      requestId: c.get("requestId"),
      error: err.message,
      stack: err.stack
    })
  );
  return c.json({ error: "Internal Server Error" }, 500);
});
var src_default = app;

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-LVO85O/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-LVO85O/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@prisma/client-runtime-utils/dist/index.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.5.0
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)

@neondatabase/serverless/index.mjs:
  (*! Bundled license information:
  
  ieee754/index.js:
    (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  buffer/index.js:
    (*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     *)
  *)
*/
//# sourceMappingURL=index.js.map
