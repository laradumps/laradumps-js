import { validate } from "webpack";
import { _LaraDumps } from "./LaraDumps";

export type _Validate = {
    isJson(): _LaraDumps;
}

export default {
    isJson(): _LaraDumps {
        return this.send("json_validate", {
            "json_validate": {}
        });
    },

    validate(
        type: string, 
        content: string, 
        caseSensitive: boolean = false, 
        wholeWord: boolean = false
    ): _LaraDumps {
        return this.send('validate', {
            'validate': {
                type,
                content,
                is_case_sensitive: caseSensitive,
                is_whole_word: wholeWord
            }
        })
    },

    contains(content: string, caseSensitive: boolean = false, wholeWord: boolean = false): _LaraDumps {
        return this.validate('contains', content, caseSensitive, wholeWord);
    }
}