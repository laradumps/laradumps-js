"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    s: function (screenName) {
        return this.toScreen(screenName);
    },
    toScreen: function (screenName, screenRaisenIn) {
        if (screenRaisenIn === void 0) { screenRaisenIn = 0; }
        return this.send("screen", {
            "screen": {
                "screen_name": screenName,
                "raisen_in": screenRaisenIn
            }
        });
    },
};
//# sourceMappingURL=Screen.js.map