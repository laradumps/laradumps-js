var _Validate = require("../Validate").default;
describe('Validate', function () {
    it('should be able to send json validate', function () {
        _Validate.send = jest.fn();
        _Validate.isJson();
        expect(_Validate.send).toHaveBeenCalledWith("json_validate", {
            "json_validate": {}
        });
    });
    it('should be able to send validate', function () {
        _Validate.send = jest.fn();
        _Validate.validate('contains', 'test');
        expect(_Validate.send).toHaveBeenCalledWith("validate", {
            "validate": {
                type: "contains",
                content: "test",
                is_case_sensitive: false,
                is_whole_word: false
            }
        });
    });
    it('should be able to send contains', function () {
        _Validate.send = jest.fn();
        _Validate.contains('test');
        expect(_Validate.send).toHaveBeenCalledWith("validate", {
            "validate": {
                type: "contains",
                content: "test",
                is_case_sensitive: false,
                is_whole_word: false
            }
        });
    });
});
//# sourceMappingURL=Validate.test.js.map