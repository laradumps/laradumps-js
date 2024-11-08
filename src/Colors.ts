import { _Colors, _LaraDumps } from "../types";

export default {
    color(color: string): _LaraDumps {
        return this.send("color", {
            "color": {
                "color": color
            }
        });
    },
    
    info(): _LaraDumps {
        return this.blue();
    },

    success(): _LaraDumps {
        return this.green();
    },

    warning(): _LaraDumps {
        return this.orange();
    },

    danger(): _LaraDumps {
        return this.red();
    },

    red(): _LaraDumps {
        return this.color("red");
    },

    blue(): _LaraDumps {
        return this.color("blue");
    },

    green(): _LaraDumps {
        return this.color("green");
    },

    orange(): _LaraDumps {
        return this.color("orange");
    },

    dark(): _LaraDumps {
        return this.color("black");
    }
} as _Colors;