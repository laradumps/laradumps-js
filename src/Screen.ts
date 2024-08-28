import { _LaraDumps } from "./LaraDumps";

export type _Screen = {
    s(screenName: string): _LaraDumps;
    toScreen(screenName: string, screenRaisenIn: number): _LaraDumps;
}

export default {
    s(screenName: string): _LaraDumps {
        return this.toScreen(screenName);
    },

    toScreen(screenName: string, screenRaisenIn: number=0): _LaraDumps {
        return this.send("screen", {
            "screen": {
                "screen_name": screenName,
                "raisen_in": screenRaisenIn
            }
        });
    },
} as _Screen;