/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var LaraDumps_1 = __webpack_require__(/*! ./src/LaraDumps */ "./src/LaraDumps.js");
globalThis.ds = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var instance = LaraDumps_1.default.generateIds();
    params.forEach(function (param) { return instance.dump(param); });
    return instance;
};
globalThis.dsd = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return ds.apply(void 0, __spreadArray([], __read(params), false)).die();
};


/***/ }),

/***/ "./src/Benchmark.js":
/*!**************************!*\
  !*** ./src/Benchmark.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    benchmark: function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var marks = [];
        var data = typeof (params[0]) === 'object'
            ? params[0]
            : params;
        Promise.all(Object.values(data).map(function (param, index) {
            var label = Object.keys(data)[index];
            marks[label] = {
                start_time: Date.now(),
                end_time: null,
                total_time: null
            };
            return new Promise(function (resolve) {
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, param(resolve)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }).finally(function () {
                marks[label].end_time = Date.now();
                marks[label].total_time = marks[label].end_time - marks[label].start_time;
            });
        })).finally(function () {
            _this.sendMarks(marks);
        });
        return this;
    },
    sendMarks: function (marks) {
        var dataMarks = {
            Fastest: []
        };
        Object.values(marks).forEach(function (mark, index) {
            var _a;
            var label = Object.keys(marks)[index];
            if (!isNaN(parseInt(label))) {
                label = "Closure ".concat(label);
            }
            if (((_a = dataMarks.Fastest[1]) !== null && _a !== void 0 ? _a : mark.end_time + 1) > mark.end_time) {
                dataMarks.Fastest = [
                    label,
                    mark.end_time
                ];
            }
            dataMarks[label] = [
                "Start time: ".concat(new Date(mark.start_time).toLocaleString(), "\n                    End time: ").concat(new Date(mark.end_time).toLocaleString(), "\n                    Total time: ").concat(mark.total_time, " ms"),
                mark.end_time
            ];
        });
        return this.tableV2(dataMarks, "Benchmark");
    }
};


/***/ }),

/***/ "./src/Colors.js":
/*!***********************!*\
  !*** ./src/Colors.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    color: function (color) {
        return this.send("color", {
            "color": {
                "color": color
            }
        });
    },
    info: function () {
        return this.blue();
    },
    success: function () {
        return this.green();
    },
    warning: function () {
        return this.orange();
    },
    danger: function () {
        return this.red();
    },
    red: function () {
        return this.color("red");
    },
    blue: function () {
        return this.color("blue");
    },
    green: function () {
        return this.color("green");
    },
    orange: function () {
        return this.color("orange");
    },
    dark: function () {
        return this.color("black");
    }
};


/***/ }),

/***/ "./src/Json.js":
/*!*********************!*\
  !*** ./src/Json.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    json: function (json) {
        try {
            if (typeof (json) !== "string") {
                json = JSON.stringify(json);
            }
            if (!this.isValidJson(json)) {
                this.dump(json);
            }
            else {
                this.sendJson(json);
            }
        }
        catch (error) {
            console.warn('Laradumps: Json is not valid', json);
            return this;
        }
    },
    isValidJson: function (json) {
        try {
            JSON.parse(json);
        }
        catch (e) {
            return false;
        }
        return true;
    },
    sendJson: function (json) {
        json = typeof (json) !== 'string'
            ? JSON.stringify(json)
            : json;
        return this.send("json", {
            "json": {
                "string": json,
                "original_content": json
            }
        });
    },
};


/***/ }),

/***/ "./src/Label.js":
/*!**********************!*\
  !*** ./src/Label.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    label: function (label) {
        return this.send("label", {
            "label": {
                "label": label
            }
        });
    }
};


/***/ }),

/***/ "./src/LaraDumps.js":
/*!**************************!*\
  !*** ./src/LaraDumps.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Benchmark_1 = __webpack_require__(/*! ./Benchmark */ "./src/Benchmark.js");
var Colors_1 = __webpack_require__(/*! ./Colors */ "./src/Colors.js");
var Json_1 = __webpack_require__(/*! ./Json */ "./src/Json.js");
var Label_1 = __webpack_require__(/*! ./Label */ "./src/Label.js");
var Screen_1 = __webpack_require__(/*! ./Screen */ "./src/Screen.js");
var Table_1 = __webpack_require__(/*! ./Table */ "./src/Table.js");
var TimeTrack_1 = __webpack_require__(/*! ./TimeTrack */ "./src/TimeTrack.js");
var Validate_1 = __webpack_require__(/*! ./Validate */ "./src/Validate.js");
var LaraDumps = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ instanceId: null, requestId: null, server: "http://127.0.0.1:9191/api/dumps", params: [], generateIds: function () {
        this.instanceId = crypto.randomUUID();
        this.requestId = crypto.randomUUID();
        return this;
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
        if ((type === "object" && param.prototype === undefined) || isValidJson) {
            this.json(param);
            return;
        }
        else if (type === "object") {
            console.info("Laradumps: Using JSON object as parameter. Please use `ds.json` if you want to send a JSON object.");
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
        fetch(this.server, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(__assign({ "id": this.instanceId, "request_id": this.requestId, "meta": {
                    "laradumps_version": "2.0.2.0",
                    "auto_invoke_app": false
                }, "type": type }, data)),
        });
        return this;
    } });
exports["default"] = LaraDumps;


/***/ }),

/***/ "./src/Screen.js":
/*!***********************!*\
  !*** ./src/Screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    s: function (screenName) {
        return this.toScreen(screenName);
    },
    toScreen: function (screenName, screenRaisenIn) {
        if (screenRaisenIn === void 0) {
            screenRaisenIn = 0;
        }
        return this.send("screen", {
            "screen": {
                "screen_name": screenName,
                "raisen_in": screenRaisenIn
            }
        });
    },
};


/***/ }),

/***/ "./src/Table.js":
/*!**********************!*\
  !*** ./src/Table.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    table: function (values, label) {
        var columns = Object.keys(values[0]);
        return this.send("table", {
            "table": {
                fields: columns,
                header: columns,
                values: values,
                label: label
            }
        }).label(label);
    },
    tableV2: function (data, label) {
        return this.send("table_v2", {
            "table_v2": {
                label: label,
                values: data
            }
        }).label(label);
    }
};


/***/ }),

/***/ "./src/TimeTrack.js":
/*!**************************!*\
  !*** ./src/TimeTrack.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    time: function (label) {
        return this.send("time_track", {
            "time_track": {
                tracker_id: crypto.randomUUID(),
                time: Date.now() / 1000,
                label: label
            }
        }).label(label);
    },
    stopTime: function (label) {
        var time = Date.now() / 1000;
        return this.send("time_track", {
            "time_track": {
                time: time,
                label: label,
                end_time: time,
                tracker_id: crypto.randomUUID()
            }
        });
    }
};


/***/ }),

/***/ "./src/Validate.js":
/*!*************************!*\
  !*** ./src/Validate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    isJson: function () {
        return this.send("json_validate", {
            "json_validate": {}
        });
    },
    validate: function (type, content, caseSensitive, wholeWord) {
        if (caseSensitive === void 0) {
            caseSensitive = false;
        }
        if (wholeWord === void 0) {
            wholeWord = false;
        }
        return this.send('validate', {
            'validate': {
                type: type,
                content: content,
                is_case_sensitive: caseSensitive,
                is_whole_word: wholeWord
            }
        });
    },
    contains: function (content, caseSensitive, wholeWord) {
        if (caseSensitive === void 0) {
            caseSensitive = false;
        }
        if (wholeWord === void 0) {
            wholeWord = false;
        }
        return this.validate('contains', content, caseSensitive, wholeWord);
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUNyRCxTQUFTLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsU0FBUyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUYsU0FBUyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFDRixJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksVUFBVSxPQUFPLEVBQUUsSUFBSTtJQUNuRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pILE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGNBQWEsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekosU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sVUFBVSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsU0FBUyxJQUFJLENBQUMsRUFBRTtRQUNaLElBQUksQ0FBQztZQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUFFLElBQUksQ0FBQztnQkFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM3SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDWixLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUM7d0JBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxNQUFNO29CQUM5QixLQUFLLENBQUM7d0JBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztvQkFDeEQsS0FBSyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pELEtBQUssQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUFDLFNBQVM7d0JBQUMsQ0FBQzt3QkFDNUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt3QkFBQyxDQUFDO3dCQUN0RixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLE1BQU07d0JBQUMsQ0FBQzt3QkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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UztRQUN2RCxJQUFJLGFBQWEsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUFDLENBQUM7UUFDeEQsSUFBSSxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDekIsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixpQkFBaUIsRUFBRSxhQUFhO2dCQUNoQyxhQUFhLEVBQUUsU0FBUzthQUMzQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxRQUFRLEVBQUUsVUFBVSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVM7UUFDakQsSUFBSSxhQUFhLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFBQyxDQUFDO1FBQ3hELElBQUksU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNKLENBQUM7Ozs7Ozs7VUN6QkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9CZW5jaG1hcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xhcmFEdW1wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZVRyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9WYWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExhcmFEdW1wc18xID0gcmVxdWlyZShcIi4vc3JjL0xhcmFEdW1wc1wiKTtcbmdsb2JhbFRoaXMuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgaW5zdGFuY2UgPSBMYXJhRHVtcHNfMS5kZWZhdWx0LmdlbmVyYXRlSWRzKCk7XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7IHJldHVybiBpbnN0YW5jZS5kdW1wKHBhcmFtKTsgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufTtcbmdsb2JhbFRoaXMuZHNkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGRzLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHBhcmFtcyksIGZhbHNlKSkuZGllKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYmVuY2htYXJrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXJrcyA9IFtdO1xuICAgICAgICB2YXIgZGF0YSA9IHR5cGVvZiAocGFyYW1zWzBdKSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gcGFyYW1zWzBdXG4gICAgICAgICAgICA6IHBhcmFtcztcbiAgICAgICAgUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhkYXRhKS5tYXAoZnVuY3Rpb24gKHBhcmFtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gT2JqZWN0LmtleXMoZGF0YSlbaW5kZXhdO1xuICAgICAgICAgICAgbWFya3NbbGFiZWxdID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgZW5kX3RpbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxfdGltZTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBwYXJhbShyZXNvbHZlKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1hcmtzW2xhYmVsXS5lbmRfdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgbWFya3NbbGFiZWxdLnRvdGFsX3RpbWUgPSBtYXJrc1tsYWJlbF0uZW5kX3RpbWUgLSBtYXJrc1tsYWJlbF0uc3RhcnRfdGltZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZW5kTWFya3MobWFya3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZW5kTWFya3M6IGZ1bmN0aW9uIChtYXJrcykge1xuICAgICAgICB2YXIgZGF0YU1hcmtzID0ge1xuICAgICAgICAgICAgRmFzdGVzdDogW11cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhtYXJrcykuZm9yRWFjaChmdW5jdGlvbiAobWFyaywgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IE9iamVjdC5rZXlzKG1hcmtzKVtpbmRleF07XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGxhYmVsKSkpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2xvc3VyZSBcIi5jb25jYXQobGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgoX2EgPSBkYXRhTWFya3MuRmFzdGVzdFsxXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbWFyay5lbmRfdGltZSArIDEpID4gbWFyay5lbmRfdGltZSkge1xuICAgICAgICAgICAgICAgIGRhdGFNYXJrcy5GYXN0ZXN0ID0gW1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgbWFyay5lbmRfdGltZVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhTWFya3NbbGFiZWxdID0gW1xuICAgICAgICAgICAgICAgIFwiU3RhcnQgdGltZTogXCIuY29uY2F0KG5ldyBEYXRlKG1hcmsuc3RhcnRfdGltZSkudG9Mb2NhbGVTdHJpbmcoKSwgXCJcXG4gICAgICAgICAgICAgICAgICAgIEVuZCB0aW1lOiBcIikuY29uY2F0KG5ldyBEYXRlKG1hcmsuZW5kX3RpbWUpLnRvTG9jYWxlU3RyaW5nKCksIFwiXFxuICAgICAgICAgICAgICAgICAgICBUb3RhbCB0aW1lOiBcIikuY29uY2F0KG1hcmsudG90YWxfdGltZSwgXCIgbXNcIiksXG4gICAgICAgICAgICAgICAgbWFyay5lbmRfdGltZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlVjIoZGF0YU1hcmtzLCBcIkJlbmNobWFya1wiKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmVuY2htYXJrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNvbG9yOiBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcImNvbG9yXCIsIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpbmZvOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsdWUoKTtcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JlZW4oKTtcbiAgICB9LFxuICAgIHdhcm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JhbmdlKCk7XG4gICAgfSxcbiAgICBkYW5nZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkKCk7XG4gICAgfSxcbiAgICByZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IoXCJyZWRcIik7XG4gICAgfSxcbiAgICBibHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yKFwiYmx1ZVwiKTtcbiAgICB9LFxuICAgIGdyZWVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yKFwiZ3JlZW5cIik7XG4gICAgfSxcbiAgICBvcmFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IoXCJvcmFuZ2VcIik7XG4gICAgfSxcbiAgICBkYXJrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yKFwiYmxhY2tcIik7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbG9ycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBqc29uOiBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoanNvbikgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEpzb24oanNvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1bXAoanNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRKc29uKGpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdMYXJhZHVtcHM6IEpzb24gaXMgbm90IHZhbGlkJywganNvbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNWYWxpZEpzb246IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzZW5kSnNvbjogZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAganNvbiA9IHR5cGVvZiAoanNvbikgIT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KGpzb24pXG4gICAgICAgICAgICA6IGpzb247XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJqc29uXCIsIHtcbiAgICAgICAgICAgIFwianNvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJzdHJpbmdcIjoganNvbixcbiAgICAgICAgICAgICAgICBcIm9yaWdpbmFsX2NvbnRlbnRcIjoganNvblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpzb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbGFiZWw6IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBsYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGFiZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJlbmNobWFya18xID0gcmVxdWlyZShcIi4vQmVuY2htYXJrXCIpO1xudmFyIENvbG9yc18xID0gcmVxdWlyZShcIi4vQ29sb3JzXCIpO1xudmFyIEpzb25fMSA9IHJlcXVpcmUoXCIuL0pzb25cIik7XG52YXIgTGFiZWxfMSA9IHJlcXVpcmUoXCIuL0xhYmVsXCIpO1xudmFyIFNjcmVlbl8xID0gcmVxdWlyZShcIi4vU2NyZWVuXCIpO1xudmFyIFRhYmxlXzEgPSByZXF1aXJlKFwiLi9UYWJsZVwiKTtcbnZhciBUaW1lVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1RpbWVUcmFja1wiKTtcbnZhciBWYWxpZGF0ZV8xID0gcmVxdWlyZShcIi4vVmFsaWRhdGVcIik7XG52YXIgTGFyYUR1bXBzID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oeyBpbnN0YW5jZUlkOiBudWxsLCByZXF1ZXN0SWQ6IG51bGwsIHNlcnZlcjogXCJodHRwOi8vMTI3LjAuMC4xOjkxOTEvYXBpL2R1bXBzXCIsIHBhcmFtczogW10sIGdlbmVyYXRlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSB9LCBDb2xvcnNfMS5kZWZhdWx0KSwgU2NyZWVuXzEuZGVmYXVsdCksIExhYmVsXzEuZGVmYXVsdCksIFRpbWVUcmFja18xLmRlZmF1bHQpLCBUYWJsZV8xLmRlZmF1bHQpLCBKc29uXzEuZGVmYXVsdCksIFZhbGlkYXRlXzEuZGVmYXVsdCksIEJlbmNobWFya18xLmRlZmF1bHQpLCB7IGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJjbGVhclwiLCB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHt9XG4gICAgICAgIH0pO1xuICAgIH0sIGRpZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeGNlcHRpb24gdG8gc3RvcCB0aGUgZXhlY3V0aW9uIVwiKTtcbiAgICB9LCBsYWJlbDogZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgZHVtcDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIChwYXJhbSk7XG4gICAgICAgIHZhciBpc1ZhbGlkSnNvbiA9IHR5cGUgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNWYWxpZEpzb24ocGFyYW0pO1xuICAgICAgICBpZiAoKHR5cGUgPT09IFwib2JqZWN0XCIgJiYgcGFyYW0ucHJvdG90eXBlID09PSB1bmRlZmluZWQpIHx8IGlzVmFsaWRKc29uKSB7XG4gICAgICAgICAgICB0aGlzLmpzb24ocGFyYW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIkxhcmFkdW1wczogVXNpbmcgSlNPTiBvYmplY3QgYXMgcGFyYW1ldGVyLiBQbGVhc2UgdXNlIGBkcy5qc29uYCBpZiB5b3Ugd2FudCB0byBzZW5kIGEgSlNPTiBvYmplY3QuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJkdW1wXCIsIHtcbiAgICAgICAgICAgIFwiZHVtcFwiOiB7XG4gICAgICAgICAgICAgICAgXCJkdW1wXCI6IHBhcmFtLFxuICAgICAgICAgICAgICAgIFwib3JpZ2luYWxfY29udGVudFwiOiBwYXJhbSxcbiAgICAgICAgICAgICAgICBcInZhcmlhYmxlX3R5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgc2VuZDogZnVuY3Rpb24gKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgZmV0Y2godGhpcy5zZXJ2ZXIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShfX2Fzc2lnbih7IFwiaWRcIjogdGhpcy5pbnN0YW5jZUlkLCBcInJlcXVlc3RfaWRcIjogdGhpcy5yZXF1ZXN0SWQsIFwibWV0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGFyYWR1bXBzX3ZlcnNpb25cIjogXCIyLjAuMi4wXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0b19pbnZva2VfYXBwXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgXCJ0eXBlXCI6IHR5cGUgfSwgZGF0YSkpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IExhcmFEdW1wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxhcmFEdW1wcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBzOiBmdW5jdGlvbiAoc2NyZWVuTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1NjcmVlbihzY3JlZW5OYW1lKTtcbiAgICB9LFxuICAgIHRvU2NyZWVuOiBmdW5jdGlvbiAoc2NyZWVuTmFtZSwgc2NyZWVuUmFpc2VuSW4pIHtcbiAgICAgICAgaWYgKHNjcmVlblJhaXNlbkluID09PSB2b2lkIDApIHsgc2NyZWVuUmFpc2VuSW4gPSAwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJzY3JlZW5cIiwge1xuICAgICAgICAgICAgXCJzY3JlZW5cIjoge1xuICAgICAgICAgICAgICAgIFwic2NyZWVuX25hbWVcIjogc2NyZWVuTmFtZSxcbiAgICAgICAgICAgICAgICBcInJhaXNlbl9pblwiOiBzY3JlZW5SYWlzZW5JblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjcmVlbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB0YWJsZTogZnVuY3Rpb24gKHZhbHVlcywgbGFiZWwpIHtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBPYmplY3Qua2V5cyh2YWx1ZXNbMF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKFwidGFibGVcIiwge1xuICAgICAgICAgICAgXCJ0YWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiBjb2x1bW5zLFxuICAgICAgICAgICAgICAgIGhlYWRlcjogY29sdW1ucyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkubGFiZWwobGFiZWwpO1xuICAgIH0sXG4gICAgdGFibGVWMjogZnVuY3Rpb24gKGRhdGEsIGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJ0YWJsZV92MlwiLCB7XG4gICAgICAgICAgICBcInRhYmxlX3YyXCI6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBkYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmxhYmVsKGxhYmVsKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdGltZTogZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJ0aW1lX3RyYWNrXCIsIHtcbiAgICAgICAgICAgIFwidGltZV90cmFja1wiOiB7XG4gICAgICAgICAgICAgICAgdHJhY2tlcl9pZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpIC8gMTAwMCxcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkubGFiZWwobGFiZWwpO1xuICAgIH0sXG4gICAgc3RvcFRpbWU6IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICB2YXIgdGltZSA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKFwidGltZV90cmFja1wiLCB7XG4gICAgICAgICAgICBcInRpbWVfdHJhY2tcIjoge1xuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgIGVuZF90aW1lOiB0aW1lLFxuICAgICAgICAgICAgICAgIHRyYWNrZXJfaWQ6IGNyeXB0by5yYW5kb21VVUlEKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRpbWVUcmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBpc0pzb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcImpzb25fdmFsaWRhdGVcIiwge1xuICAgICAgICAgICAgXCJqc29uX3ZhbGlkYXRlXCI6IHt9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh0eXBlLCBjb250ZW50LCBjYXNlU2Vuc2l0aXZlLCB3aG9sZVdvcmQpIHtcbiAgICAgICAgaWYgKGNhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCkgeyBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHdob2xlV29yZCA9PT0gdm9pZCAwKSB7IHdob2xlV29yZCA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoJ3ZhbGlkYXRlJywge1xuICAgICAgICAgICAgJ3ZhbGlkYXRlJzoge1xuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICBpc19jYXNlX3NlbnNpdGl2ZTogY2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgICAgICAgICBpc193aG9sZV93b3JkOiB3aG9sZVdvcmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjb250YWluczogZnVuY3Rpb24gKGNvbnRlbnQsIGNhc2VTZW5zaXRpdmUsIHdob2xlV29yZCkge1xuICAgICAgICBpZiAoY2FzZVNlbnNpdGl2ZSA9PT0gdm9pZCAwKSB7IGNhc2VTZW5zaXRpdmUgPSBmYWxzZTsgfVxuICAgICAgICBpZiAod2hvbGVXb3JkID09PSB2b2lkIDApIHsgd2hvbGVXb3JkID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoJ2NvbnRhaW5zJywgY29udGVudCwgY2FzZVNlbnNpdGl2ZSwgd2hvbGVXb3JkKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmFsaWRhdGUuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=