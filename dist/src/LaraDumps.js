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
Object.defineProperty(exports, "__esModule", { value: true });
var Benchmark_1 = require("./Benchmark");
var Colors_1 = require("./Colors");
var Json_1 = require("./Json");
var Label_1 = require("./Label");
var Screen_1 = require("./Screen");
var Table_1 = require("./Table");
var TimeTrack_1 = require("./TimeTrack");
var Validate_1 = require("./Validate");
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
exports.default = LaraDumps;
//# sourceMappingURL=LaraDumps.js.map