const {default: LaraDumps} = require("../LaraDumps");

describe('LaraDumps', () => {
    it('should be able to send clear', () => {
        LaraDumps.send = jest.fn();
        LaraDumps.clear();

        expect(LaraDumps.send).toHaveBeenCalledWith("clear", {
            "clear": {}
        });
    });

    it('should be able to send die', () => {
        LaraDumps.send = jest.fn();
        expect(LaraDumps.die).toThrow("Exception to stop the execution!");
    });

    it('should be able to send label', () => {
        LaraDumps.send = jest.fn();
        LaraDumps.label("test");

        expect(LaraDumps.send).toHaveBeenCalledWith("label", {
            "label": {
                "label": "test"
            }
        });
    });

    it('should be able to send dump', () => {
        LaraDumps.send = jest.fn();
        LaraDumps.dump("test");

        expect(LaraDumps.send).toHaveBeenCalledWith("dump", {
            "dump": {
                "dump": "test",
                "original_content": "test",
                "variable_type": "string"
            }
        });
    });

    it('should be able to send generateIds', () => {
        LaraDumps.send = jest.fn();
        LaraDumps.makeUUID = jest.fn().mockReturnValue("test");

        expect(LaraDumps.instanceId).toBeNull();
        expect(LaraDumps.requestId).toBeNull();

        LaraDumps.generateIds();

        expect(LaraDumps.instanceId).toBe("test");
        expect(LaraDumps.requestId).toBe("test");
    });
});