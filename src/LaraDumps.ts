import Benchmark from './Benchmark';
import Colors, { _Colors } from './Colors';
import Json from './Json';
import Label, { _Label } from './Label';
import Screen, { _Screen } from './Screen';
import Table from './Table';
import TimeTrack, { _TimeTrack } from './TimeTrack';
import Validate from './Validate';

export type _LaraDumps = {
    instanceId: string | null;
    requestId: string | null;

    server: string;
    params: any[];

    die(): void;
    clear(): _LaraDumps;
    generateIds(): _LaraDumps;
    json(json: any): _LaraDumps;
    dump(param: any): _LaraDumps;
    label(label: string): _LaraDumps;
    send(type: string, data: object): _LaraDumps;
};

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
    ...Label,
    ...TimeTrack,
    ...Table,
    ...Json,
    ...Validate,
    ...Benchmark,

    clear(): _LaraDumps {
        return this.send("clear", {
            "clear": {}
        })
    },

    die(): void {
        throw new Error("Exception to stop the execution!");
    },

    label(label: string): _LaraDumps {
        return this.send("label", {
            "label": {
                label
            }
        });
    },

    dump(param: any): _LaraDumps {
        let type = typeof(param);

        const isValidJson = type === 'string' && this.isValidJson(param);

        if((type === "object" && param.prototype === undefined) || isValidJson) {
            this.json(param);
            return;
        } else if (type === "object") {
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