import { _LaraDumps } from "./LaraDumps";

export type _Label = {
    label(label: string): _LaraDumps;
}

export default {
    label(label: string): _LaraDumps {
        return this.send("label", {
            "label": {
                "label": label
            }
        });
    }
}