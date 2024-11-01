const {default: Colors} = require("./Colors");

describe('Color Tag', () => {
    it.each([
        // Shortcuts
        ["info", "blue"],
        ["success", "green"],
        ["warning", "orange"],
        ["danger", "red"],
        ["dark", "black"],
        // Primary colors
        ["red", "red"],
        ["blue", "blue"],
        ["green", "green"],
        ["orange", "orange"],
    ])('should be able to send color when calling method %s', (method: string, color: string) => {
        Colors.send = jest.fn();
        Colors[method](color);

        expect(Colors.send).toHaveBeenCalledWith("color", {
            "color": {
                "color": color
            }
        });
    });
});