import { _LaraDumps } from "./LaraDumps";

export type _Colors = {
    color(color: string): _LaraDumps;
    info(): _LaraDumps;
    success(): _LaraDumps;
    warning(): _LaraDumps;
    danger(): _LaraDumps;
}

export default {
    color(color: string): _LaraDumps {
        return this.send("color", {
            "color": {
                "color": color
            }
        });
    },
    
    info(): _LaraDumps {
        return this.color("blue");
    },

    success(): _LaraDumps {
        return this.color("green");
    },

    warning(): _LaraDumps {
        return this.color("orange");
    },

    danger(): _LaraDumps {
        return this.color("red");
    },

    dark(): _LaraDumps {
        return this.color("black");
    }
} as _Colors;