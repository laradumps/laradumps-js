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
            console.warn('LaraDumps: Invalid JSON format', json);
            return this;
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
