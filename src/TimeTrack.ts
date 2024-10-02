import { _LaraDumps, _TimeTrack } from "../types";

export default {
    time(label: string): _LaraDumps {
        return this.send("time_track", {
            "time_track": {
                tracker_id: this.makeUUID(),
                time: Date.now() / 1000,
                label
            }
        }).label(label);
    },

    stopTime(label: string): _LaraDumps {
        const time = Date.now() / 1000;
        return this.send("time_track", {
            "time_track": {
                time,
                label,
                end_time: time,
                tracker_id: this.makeUUID()
            }
        });
    }
} as _TimeTrack;