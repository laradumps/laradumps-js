"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    label: function (label) {
        return this.send("label", {
            "with_label": {
                "label": label
            }
        });
    }
};
//# sourceMappingURL=Label.js.map