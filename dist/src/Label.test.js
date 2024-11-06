var Label = require("./Label").default;
describe('Label', function () {
    it('should be able to send label', function () {
        Label.send = jest.fn();
        Label.label("test");
        expect(Label.send).toHaveBeenCalledWith("label", {
            "label": {
                "label": "test"
            }
        });
    });
});
//# sourceMappingURL=Label.test.js.map