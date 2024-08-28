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
var Colors_1 = require("./Colors");
var Screen_1 = require("./Screen");
var LaraDumps = __assign(__assign(__assign({ instanceId: null, requestId: null, server: "http://127.0.0.1:9191/api/dumps", params: [], generateIds: function () {
        this.instanceId = crypto.randomUUID();
        this.requestId = crypto.randomUUID();
        return this;
    } }, Colors_1.default), Screen_1.default), { json: function (json) {
        return this.send("json", {
            "json": {
                "string": JSON.stringify(json),
                "original_content": JSON.stringify(json)
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