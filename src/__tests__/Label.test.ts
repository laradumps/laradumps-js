const {default: Label} = require("../Label");

describe('Label', () => {
    it('should be able to send label', () => {
        Label.send = jest.fn();
        Label.label("test");

        expect(Label.send).toHaveBeenCalledWith("label", {
            "with_label": {
                "label": "test"
            }
        });
    })
});
