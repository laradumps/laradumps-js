"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    s: function (screenName) {
        return this.toScreen(screenName);
    },
    toScreen: function (screenName, screenRaisenIn, newWindow) {
        if (screenRaisenIn === void 0) { screenRaisenIn = 0; }
        if (newWindow === void 0) { newWindow = false; }
        return this.send("screen", {
            "screen": {
                "screen_name": screenName,
                "raisen_in": screenRaisenIn,
                "new_window": newWindow
            }
        });
    },
    toScreenWindow: function (screenName, screenRaisenIn) {
        if (screenRaisenIn === void 0) { screenRaisenIn = 0; }
        return this.toScreen(screenName, screenRaisenIn, true);
    }
};
//# sourceMappingURL=Screen.js.map