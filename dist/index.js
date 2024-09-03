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
        return this.color("blue");
    },
    success: function () {
        return this.color("green");
    },
    warning: function () {
        return this.color("orange");
    },
    danger: function () {
        return this.color("red");
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
var Colors_1 = __webpack_require__(/*! ./Colors */ "./src/Colors.js");
var Json_1 = __webpack_require__(/*! ./Json */ "./src/Json.js");
var Label_1 = __webpack_require__(/*! ./Label */ "./src/Label.js");
var Screen_1 = __webpack_require__(/*! ./Screen */ "./src/Screen.js");
var Table_1 = __webpack_require__(/*! ./Table */ "./src/Table.js");
var TimeTrack_1 = __webpack_require__(/*! ./TimeTrack */ "./src/TimeTrack.js");
var Validate_1 = __webpack_require__(/*! ./Validate */ "./src/Validate.js");
var LaraDumps = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ instanceId: null, requestId: null, server: "http://127.0.0.1:9191/api/dumps", params: [], generateIds: function () {
        this.instanceId = crypto.randomUUID();
        this.requestId = crypto.randomUUID();
        return this;
    } }, Colors_1.default), Screen_1.default), Label_1.default), TimeTrack_1.default), Table_1.default), Json_1.default), Validate_1.default), { clear: function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUM7UUFBQyxDQUFDO1FBQ3hELElBQUksU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNKLENBQUM7Ozs7Ozs7VUN6QkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Db2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXJhRHVtcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbWVUcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMYXJhRHVtcHNfMSA9IHJlcXVpcmUoXCIuL3NyYy9MYXJhRHVtcHNcIik7XG5nbG9iYWxUaGlzLmRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGluc3RhbmNlID0gTGFyYUR1bXBzXzEuZGVmYXVsdC5nZW5lcmF0ZUlkcygpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkgeyByZXR1cm4gaW5zdGFuY2UuZHVtcChwYXJhbSk7IH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn07XG5nbG9iYWxUaGlzLmRzZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyYW1zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBkcy5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChwYXJhbXMpLCBmYWxzZSkpLmRpZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNvbG9yOiBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcImNvbG9yXCIsIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpbmZvOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yKFwiYmx1ZVwiKTtcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IoXCJncmVlblwiKTtcbiAgICB9LFxuICAgIHdhcm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IoXCJvcmFuZ2VcIik7XG4gICAgfSxcbiAgICBkYW5nZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IoXCJyZWRcIik7XG4gICAgfSxcbiAgICBkYXJrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yKFwiYmxhY2tcIik7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbG9ycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBqc29uOiBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoanNvbikgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEpzb24oanNvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1bXAoanNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRKc29uKGpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdMYXJhZHVtcHM6IEpzb24gaXMgbm90IHZhbGlkJywganNvbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNWYWxpZEpzb246IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzZW5kSnNvbjogZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAganNvbiA9IHR5cGVvZiAoanNvbikgIT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KGpzb24pXG4gICAgICAgICAgICA6IGpzb247XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJqc29uXCIsIHtcbiAgICAgICAgICAgIFwianNvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJzdHJpbmdcIjoganNvbixcbiAgICAgICAgICAgICAgICBcIm9yaWdpbmFsX2NvbnRlbnRcIjoganNvblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpzb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbGFiZWw6IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBsYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGFiZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvbG9yc18xID0gcmVxdWlyZShcIi4vQ29sb3JzXCIpO1xudmFyIEpzb25fMSA9IHJlcXVpcmUoXCIuL0pzb25cIik7XG52YXIgTGFiZWxfMSA9IHJlcXVpcmUoXCIuL0xhYmVsXCIpO1xudmFyIFNjcmVlbl8xID0gcmVxdWlyZShcIi4vU2NyZWVuXCIpO1xudmFyIFRhYmxlXzEgPSByZXF1aXJlKFwiLi9UYWJsZVwiKTtcbnZhciBUaW1lVHJhY2tfMSA9IHJlcXVpcmUoXCIuL1RpbWVUcmFja1wiKTtcbnZhciBWYWxpZGF0ZV8xID0gcmVxdWlyZShcIi4vVmFsaWRhdGVcIik7XG52YXIgTGFyYUR1bXBzID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oeyBpbnN0YW5jZUlkOiBudWxsLCByZXF1ZXN0SWQ6IG51bGwsIHNlcnZlcjogXCJodHRwOi8vMTI3LjAuMC4xOjkxOTEvYXBpL2R1bXBzXCIsIHBhcmFtczogW10sIGdlbmVyYXRlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSB9LCBDb2xvcnNfMS5kZWZhdWx0KSwgU2NyZWVuXzEuZGVmYXVsdCksIExhYmVsXzEuZGVmYXVsdCksIFRpbWVUcmFja18xLmRlZmF1bHQpLCBUYWJsZV8xLmRlZmF1bHQpLCBKc29uXzEuZGVmYXVsdCksIFZhbGlkYXRlXzEuZGVmYXVsdCksIHsgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcImNsZWFyXCIsIHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge31cbiAgICAgICAgfSk7XG4gICAgfSwgZGllOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4Y2VwdGlvbiB0byBzdG9wIHRoZSBleGVjdXRpb24hXCIpO1xuICAgIH0sIGxhYmVsOiBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBkdW1wOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgKHBhcmFtKTtcbiAgICAgICAgdmFyIGlzVmFsaWRKc29uID0gdHlwZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5pc1ZhbGlkSnNvbihwYXJhbSk7XG4gICAgICAgIGlmICgodHlwZSA9PT0gXCJvYmplY3RcIiAmJiBwYXJhbS5wcm90b3R5cGUgPT09IHVuZGVmaW5lZCkgfHwgaXNWYWxpZEpzb24pIHtcbiAgICAgICAgICAgIHRoaXMuanNvbihwYXJhbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiTGFyYWR1bXBzOiBVc2luZyBKU09OIG9iamVjdCBhcyBwYXJhbWV0ZXIuIFBsZWFzZSB1c2UgYGRzLmpzb25gIGlmIHlvdSB3YW50IHRvIHNlbmQgYSBKU09OIG9iamVjdC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcImR1bXBcIiwge1xuICAgICAgICAgICAgXCJkdW1wXCI6IHtcbiAgICAgICAgICAgICAgICBcImR1bXBcIjogcGFyYW0sXG4gICAgICAgICAgICAgICAgXCJvcmlnaW5hbF9jb250ZW50XCI6IHBhcmFtLFxuICAgICAgICAgICAgICAgIFwidmFyaWFibGVfdHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBzZW5kOiBmdW5jdGlvbiAodHlwZSwgZGF0YSkge1xuICAgICAgICBmZXRjaCh0aGlzLnNlcnZlciwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KF9fYXNzaWduKHsgXCJpZFwiOiB0aGlzLmluc3RhbmNlSWQsIFwicmVxdWVzdF9pZFwiOiB0aGlzLnJlcXVlc3RJZCwgXCJtZXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJhZHVtcHNfdmVyc2lvblwiOiBcIjIuMC4yLjBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRvX2ludm9rZV9hcHBcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCBcInR5cGVcIjogdHlwZSB9LCBkYXRhKSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gTGFyYUR1bXBzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGFyYUR1bXBzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHM6IGZ1bmN0aW9uIChzY3JlZW5OYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU2NyZWVuKHNjcmVlbk5hbWUpO1xuICAgIH0sXG4gICAgdG9TY3JlZW46IGZ1bmN0aW9uIChzY3JlZW5OYW1lLCBzY3JlZW5SYWlzZW5Jbikge1xuICAgICAgICBpZiAoc2NyZWVuUmFpc2VuSW4gPT09IHZvaWQgMCkgeyBzY3JlZW5SYWlzZW5JbiA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcInNjcmVlblwiLCB7XG4gICAgICAgICAgICBcInNjcmVlblwiOiB7XG4gICAgICAgICAgICAgICAgXCJzY3JlZW5fbmFtZVwiOiBzY3JlZW5OYW1lLFxuICAgICAgICAgICAgICAgIFwicmFpc2VuX2luXCI6IHNjcmVlblJhaXNlbkluXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NyZWVuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHRhYmxlOiBmdW5jdGlvbiAodmFsdWVzLCBsYWJlbCkge1xuICAgICAgICB2YXIgY29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbHVlc1swXSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJ0YWJsZVwiLCB7XG4gICAgICAgICAgICBcInRhYmxlXCI6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IGNvbHVtbnMsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBjb2x1bW5zLFxuICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5sYWJlbChsYWJlbCk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHRpbWU6IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKFwidGltZV90cmFja1wiLCB7XG4gICAgICAgICAgICBcInRpbWVfdHJhY2tcIjoge1xuICAgICAgICAgICAgICAgIHRyYWNrZXJfaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSAvIDEwMDAsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmxhYmVsKGxhYmVsKTtcbiAgICB9LFxuICAgIHN0b3BUaW1lOiBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChcInRpbWVfdHJhY2tcIiwge1xuICAgICAgICAgICAgXCJ0aW1lX3RyYWNrXCI6IHtcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICBlbmRfdGltZTogdGltZSxcbiAgICAgICAgICAgICAgICB0cmFja2VyX2lkOiBjcnlwdG8ucmFuZG9tVVVJRCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lVHJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgaXNKc29uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJqc29uX3ZhbGlkYXRlXCIsIHtcbiAgICAgICAgICAgIFwianNvbl92YWxpZGF0ZVwiOiB7fVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAodHlwZSwgY29udGVudCwgY2FzZVNlbnNpdGl2ZSwgd2hvbGVXb3JkKSB7XG4gICAgICAgIGlmIChjYXNlU2Vuc2l0aXZlID09PSB2b2lkIDApIHsgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh3aG9sZVdvcmQgPT09IHZvaWQgMCkgeyB3aG9sZVdvcmQgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKCd2YWxpZGF0ZScsIHtcbiAgICAgICAgICAgICd2YWxpZGF0ZSc6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgaXNfY2FzZV9zZW5zaXRpdmU6IGNhc2VTZW5zaXRpdmUsXG4gICAgICAgICAgICAgICAgaXNfd2hvbGVfd29yZDogd2hvbGVXb3JkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY29udGFpbnM6IGZ1bmN0aW9uIChjb250ZW50LCBjYXNlU2Vuc2l0aXZlLCB3aG9sZVdvcmQpIHtcbiAgICAgICAgaWYgKGNhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCkgeyBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHdob2xlV29yZCA9PT0gdm9pZCAwKSB7IHdob2xlV29yZCA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCdjb250YWlucycsIGNvbnRlbnQsIGNhc2VTZW5zaXRpdmUsIHdob2xlV29yZCk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZhbGlkYXRlLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9