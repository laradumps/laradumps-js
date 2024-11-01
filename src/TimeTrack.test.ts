const {default: TimeTrack} = require("./TimeTrack");

describe('TimeTrack', () => {
    TimeTrack.makeUUID = jest.fn().mockReturnValue("test");

    it('should be able to send time track', () => {
        TimeTrack.label = jest.fn();
        TimeTrack.send = jest.fn().mockReturnValue({label: TimeTrack.label});
        TimeTrack.time('test');

        expect(TimeTrack.send).toHaveBeenCalledWith("time_track", {
            "time_track": {
                tracker_id: expect.any(String),
                time: expect.any(Number),
                label: "test"
            }
        });

        expect(TimeTrack.label).toHaveBeenCalledWith("test");
    });

    it('should be able to send time stop track', () => {
        TimeTrack.send = jest.fn();
        TimeTrack.stopTime('test');

        expect(TimeTrack.send).toHaveBeenCalledWith("time_track", {
            "time_track": {
                time: expect.any(Number),
                label: "test",
                end_time: expect.any(Number),
                tracker_id: expect.any(String)
            }
        });
    });
})