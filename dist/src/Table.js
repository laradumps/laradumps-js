"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    table: function (values, label) {
        var columns = Object.keys(values[0]);
        return this.send("table", {
            "table": {
                fields: columns,
                header: columns,
                values: values,
                label: label
            }
        }).label(label);
    },
    tableV2: function (data, label) {
        return this.send("table_v2", {
            "table_v2": {
                label: label,
                values: data
            }
        }).label(label);
    }
};
//# sourceMappingURL=Table.js.map