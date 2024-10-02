"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    time: function (label) {
        return this.send("time_track", {
            "time_track": {
                tracker_id: this.makeUUID(),
                time: Date.now() / 1000,
                label: label
            }
        }).label(label);
    },
    stopTime: function (label) {
        var time = Date.now() / 1000;
        return this.send("time_track", {
            "time_track": {
                time: time,
                label: label,
                end_time: time,
                tracker_id: this.makeUUID()
            }
        });
    }
};
//# sourceMappingURL=TimeTrack.js.map