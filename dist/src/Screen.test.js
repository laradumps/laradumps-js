var _Screen = require("./Screen").default;
describe('Screen', function () {
    it.each([
        { method: 's' },
        { method: 'w', screenRaisenIn: 3 },
        { method: 'toScreenWindow', newWindow: true },
    ])('should be able to send screen when calling with %s', function (_a) {
        var method = _a.method, _b = _a.screenRaisenIn, screenRaisenIn = _b === void 0 ? 0 : _b, _c = _a.newWindow, newWindow = _c === void 0 ? false : _c;
        _Screen.send = jest.fn();
        _Screen[method]('new screen', screenRaisenIn);
        expect(_Screen.send).toHaveBeenCalledWith("screen", {
            "screen": {
                "screen_name": "new screen",
                "raisen_in": screenRaisenIn,
                "new_window": newWindow
            }
        });
    });
});
//# sourceMappingURL=Screen.test.js.map