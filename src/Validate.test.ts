const {default: _Validate} = require("./Validate");

describe('Validate', () => {
    it('should be able to send json validate', () => {
        _Validate.send = jest.fn();
        _Validate.isJson();

        expect(_Validate.send).toHaveBeenCalledWith("json_validate", {
            "json_validate": {}
        });
    });

    it('should be able to send validate', () => {
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

    it('should be able to send contains', () => {
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