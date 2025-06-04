"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
            this.dump(this.inspect(json));
            return this;
        }
    },
    inspect: function (json) {
        return this.convertJSONStringToJSON(JSON.stringify(json, null, 2));
    },
    convertJSONStringToJSON: function (object) {
        var formatted = object
            .replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":')
            .replace(/:\s*'([^']*)'/g, ': "$1"')
            .replace(/undefined/g, 'null')
            .replace(/\[Object\]/g, '{}')
            .replace(/(\r\n|\n|\r)/gm, "");
        try {
            return JSON.parse(formatted);
        }
        catch (error) {
            return object;
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
//# sourceMappingURL=Json.js.map