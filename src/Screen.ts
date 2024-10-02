import { _LaraDumps, _Screen } from "../types";

export default {
    s(screenName: string): _LaraDumps {
        return this.toScreen(screenName);
    },

    toScreen(screenName: string, screenRaisenIn: number=0, newWindow: boolean=false): _LaraDumps {
        return this.send("screen", {
            "screen": {
                "screen_name": screenName,
                "raisen_in": screenRaisenIn,
                "new_window": newWindow
            }
        });
    },

    toScreenWindow(screenName: string, screenRaisenIn: number=0): _LaraDumps {
        return this.toScreen(screenName, screenRaisenIn, true);
    }
} as _Screen;