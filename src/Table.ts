import { _LaraDumps } from "./LaraDumps";

export type _Table = {
    table(values: any[], label: string): _LaraDumps;
}

export default {
    table(values: any[], label: string): _LaraDumps {
        const columns = Object.keys(values[0]);
        return this.send("table", {
            "table": {
                fields: columns,
                header: columns,
                values,
                label
            }
        }).label(label);
    }
} as _Table