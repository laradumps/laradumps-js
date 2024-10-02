import { _LaraDumps, _Table } from "../types";

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
    },

    tableV2(data: any[], label: string): _LaraDumps {
        return this.send("table_v2", {
            "table_v2": {
                label,
                values: data
            }
        }).label(label);
    }
} as _Table;