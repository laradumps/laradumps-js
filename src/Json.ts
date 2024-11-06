import { inspect } from "util";
import { _Json, _LaraDumps } from "../types";

export default {
    json(json: any): _LaraDumps {
        try {
            if(typeof(json) !== "string") {
                json = JSON.stringify(json);
            }

            if(!this.isValidJson(json)) {
                this.dump(json);
            } else {
                this.sendJson(json);
            }
        } catch (error) {
            this.dump(this.inspect(json));
            return this;
        }
    },

    inspect(json: any): _LaraDumps {
        return this.convertJSONStringToJSON(inspect(json));
    },

    convertJSONStringToJSON(object: string): object | string {
        let formatted = object
            .replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":')
            .replace(/:\s*'([^']*)'/g, ': "$1"')
            .replace(/undefined/g, 'null')
            .replace(/\[Object\]/g, '{}')
            .replace(/(\r\n|\n|\r)/gm, "");
    
        try {
            return JSON.parse(formatted);
        } catch (error) {
            return object;
        }
    },

    isValidJson(json: any): boolean {
        try {
            JSON.parse(json);
        } catch (e) {
            return false;
        }

        return true;
    },

    sendJson(json: any): _LaraDumps {
        json = typeof(json) !== 'string'
            ? JSON.stringify(json)
            : json;

        return this.send("json", {
            "json": {
                "string": json,
                "original_content": json
            }
        });
    },
} as _Json;