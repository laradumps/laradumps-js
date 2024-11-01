const {default: _Screen} = require("../Screen");

describe('Screen', () => {
    it.each([
        {method: 's'},
        {method: 'w', screenRaisenIn: 3},
        {method: 'toScreenWindow', newWindow: true},
    ])('should be able to send screen when calling with %s', ({method, screenRaisenIn=0, newWindow=false}) => {
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