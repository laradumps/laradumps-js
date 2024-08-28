import Colors, { _Colors } from './Colors';
import Screen, { _Screen } from './Screen';

export type _LaraDumps = {
    instanceId: string | null;
    requestId: string | null;

    server: string;
    params: any[];

    generateIds(): _LaraDumps;
    json(json: any): _LaraDumps;
    send(type: string, data: object): _LaraDumps;
} & _Screen & _Colors;

const LaraDumps: _LaraDumps = {
    instanceId: null,
    requestId: null,

    server: "http://127.0.0.1:9191/api/dumps",
    params: [],

    generateIds(): _LaraDumps {
        this.instanceId = crypto.randomUUID();
        this.requestId = crypto.randomUUID();

        return this;
    },

    ...Colors,
    ...Screen,

    json(json: any): _LaraDumps {
        return this.send("json", {
            "json": {
                "string": JSON.stringify(json),
                "original_content": JSON.stringify(json)
            }
        });
    },

    send(type: string, data: object): _LaraDumps {
        fetch(this.server, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": this.instanceId,
                "request_id": this.requestId,
                "meta":{
                    "laradumps_version": "2.0.2.0",
                    "auto_invoke_app": false
                },
                "type": type,
                ...data
            }),
        });

        return this;
    }
};

export default LaraDumps;