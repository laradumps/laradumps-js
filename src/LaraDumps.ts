import axios from 'axios';
import Benchmark from './Benchmark';
import Colors from './Colors';
import Json from './Json';
import Label from './Label';
import Screen from './Screen';
import Table from './Table';
import TimeTrack from './TimeTrack';
import Validate from './Validate';
import { _LaraDumps } from '../types';

const defaultHost = 'http://127.0.0.1:9191';

const LaraDumps: _LaraDumps = {
    instanceId: null,
    requestId: null,
    server: null,
    params: [],

    generateIds(): _LaraDumps {
        this.server = `${globalThis.CONFIG_LARADUMPS?.host ?? defaultHost}/api/dumps`;
        this.instanceId = this.makeUUID();
        this.requestId = this.makeUUID();

        return this;
    },

    makeUUID(): string {
        let d = new Date().getTime();

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
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
            "with_label": {
                label
            }
        });
    },

    dump(param: any): _LaraDumps {
        const type = typeof(param);

        const isValidJson = type === 'string' && this.isValidJson(param);

        if(type === "object" || isValidJson) {
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
    },

    send(type: string, data: object): _LaraDumps {
        const trace = this.getStackTrace();
        const url = trace.file ? new URL(trace.file) : null;

        axios.post(this.server, {
            id: this.instanceId,
            request_id: this.requestId,
            meta:{
                laradumps_version: "2.0.2.0",
                auto_invoke_app: globalThis.CONFIG_LARADUMPS?.autoInvokeApp
            },
            ide_handle: {
                separator: "/",
                line: trace?.line,
                real_path: url?.pathname ?? "terminal",
                class_name: url?.pathname.split('/').pop() ?? "terminal",
                project_path: url?.pathname.split('/').slice(0, -1).join('/') ?? "terminal",
            },
            type: type,
            with_label: {
                label: ""
            },
            to_screen: {
                screen_name: "home",
                raise_in: 0,
                new_window: false,
            },
            ...data
        }).catch((error) => {
            console.error("Error:", error);
        });

        return this;
    },

    getStackTrace(): object {
        const stack: string = new Error().stack;
        const track: any = {stack};

        let stackLines: string[] = stack.split("\n");
        let callerLine: string = stackLines[4];

        const hasAtDs = stackLines.findIndex(line => line.includes('at ds'));

        if(stack.includes('[Alpine]')) {
            stackLines = stackLines.filter(line => line.includes('[Alpine]'));
            callerLine = stackLines[0]?.split('),')[0];
        } else if(hasAtDs) {
            stackLines = stackLines.slice(hasAtDs);
            callerLine = stackLines[1]?.split('),')[0];
        }

        const match = callerLine?.match(/(https?:\/\/.*):(\d+):(\d+)/);

        if (match) {
            const [_, file, line, column] = match;

            track.file = file;
            track.line = line;
            track.column = column;
        }

        return track;
    }
};

export default LaraDumps;
