"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    color: function (color) {
        return this.send("color", {
            "color": {
                "color": color
            }
        });
    },
    info: function () {
        return this.color("blue");
    },
    success: function () {
        return this.color("green");
    },
    warning: function () {
        return this.color("orange");
    },
    danger: function () {
        return this.color("red");
    }
};
//# sourceMappingURL=Colors.js.map