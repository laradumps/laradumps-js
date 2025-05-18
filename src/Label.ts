import { _Label, _LaraDumps } from "../types";

export default {
    label(label: string): _LaraDumps {
        return this.send("label", {
            "with_label": {
                "label": label
            }
        });
    }
} as _Label
