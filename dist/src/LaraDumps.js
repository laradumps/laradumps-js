"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Benchmark_1 = __importDefault(require("./Benchmark"));
var Colors_1 = __importDefault(require("./Colors"));
var Json_1 = __importDefault(require("./Json"));
var Label_1 = __importDefault(require("./Label"));
var Screen_1 = __importDefault(require("./Screen"));
var Table_1 = __importDefault(require("./Table"));
var TimeTrack_1 = __importDefault(require("./TimeTrack"));
var Validate_1 = __importDefault(require("./Validate"));
var defaultHost = 'http://127.0.0.1:9191';
var LaraDumps = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ instanceId: null, requestId: null, server: null, params: [], generateIds: function () {
        var _a, _b;
        this.server = "".concat((_b = (_a = globalThis.CONFIG_LARADUMPS) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : defaultHost, "/api/dumps");
        this.instanceId = this.makeUUID();
        this.requestId = this.makeUUID();
        return this;
    }, makeUUID: function () {
        var d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    } }, Colors_1.default), Screen_1.default), Label_1.default), TimeTrack_1.default), Table_1.default), Json_1.default), Validate_1.default), Benchmark_1.default), { clear: function () {
        return this.send("clear", {
            "clear": {}
        });
    }, die: function () {
        throw new Error("Exception to stop the execution!");
    }, label: function (label) {
        return this.send("label", {
            "label": {
                label: label
            }
        });
    }, dump: function (param) {
        var type = typeof (param);
        var isValidJson = type === 'string' && this.isValidJson(param);
        if (type === "object" || isValidJson) {
            this.json(param);
            return;
        }
        return this.send("dump", {
            "dump": {
                "dump": param,
                "original_content": param,
                "variable_type": type,
            }
        });
    }, send: function (type, data) {
        var _a, _b, _c, _d;
        var trace = this.getStackTrace();
        var url = trace.file ? new URL(trace.file) : null;
        axios_1.default.post(this.server, __assign({ id: this.instanceId, request_id: this.requestId, meta: {
                laradumps_version: "2.0.2.0",
                auto_invoke_app: (_a = globalThis.CONFIG_LARADUMPS) === null || _a === void 0 ? void 0 : _a.autoInvokeApp
            }, ide_handle: {
                separator: "/",
                line: trace === null || trace === void 0 ? void 0 : trace.line,
                real_path: (_b = url === null || url === void 0 ? void 0 : url.pathname) !== null && _b !== void 0 ? _b : "terminal",
                class_name: (_c = url === null || url === void 0 ? void 0 : url.pathname.split('/').pop()) !== null && _c !== void 0 ? _c : "terminal",
                project_path: (_d = url === null || url === void 0 ? void 0 : url.pathname.split('/').slice(0, -1).join('/')) !== null && _d !== void 0 ? _d : "terminal",
            }, type: type, with_label: {
                label: ""
            }, to_screen: {
                screen_name: "home",
                raise_in: 0,
                new_window: false,
            } }, data)).catch(function (error) {
            console.error("Error:", error);
        });
        return this;
    }, getStackTrace: function () {
        var _a, _b;
        var stack = new Error().stack;
        var track = { stack: stack };
        var stackLines = stack.split("\n");
        var callerLine = stackLines[4];
        var hasAtDs = stackLines.findIndex(function (line) { return line.includes('at ds'); });
        if (stack.includes('[Alpine]')) {
            stackLines = stackLines.filter(function (line) { return line.includes('[Alpine]'); });
            callerLine = (_a = stackLines[0]) === null || _a === void 0 ? void 0 : _a.split('),')[0];
        }
        else if (hasAtDs) {
            stackLines = stackLines.slice(hasAtDs);
            callerLine = (_b = stackLines[1]) === null || _b === void 0 ? void 0 : _b.split('),')[0];
        }
        var match = callerLine === null || callerLine === void 0 ? void 0 : callerLine.match(/(https?:\/\/.*):(\d+):(\d+)/);
        if (match) {
            var _c = __read(match, 4), _ = _c[0], file = _c[1], line = _c[2], column = _c[3];
            track.file = file;
            track.line = line;
            track.column = column;
        }
        return track;
    } });
exports.default = LaraDumps;
//# sourceMappingURL=LaraDumps.js.map