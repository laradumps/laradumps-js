"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    isJson: function () {
        return this.send("json_validate", {
            "json_validate": {}
        });
    },
    validate: function (type, content, caseSensitive, wholeWord) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        if (wholeWord === void 0) { wholeWord = false; }
        return this.send('validate', {
            'validate': {
                type: type,
                content: content,
                is_case_sensitive: caseSensitive,
                is_whole_word: wholeWord
            }
        });
    },
    contains: function (content, caseSensitive, wholeWord) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        if (wholeWord === void 0) { wholeWord = false; }
        return this.validate('contains', content, caseSensitive, wholeWord);
    }
};
//# sourceMappingURL=Validate.js.map