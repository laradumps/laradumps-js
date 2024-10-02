import { _Label, _LaraDumps } from "../types";

export default {
    label(label: string): _LaraDumps {
        return this.send("label", {
            "label": {
                "label": label
            }
        });
    }
} as _Label