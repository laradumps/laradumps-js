var LaraDumps = require("./LaraDumps").default;
describe('LaraDumps', function () {
    it('should be able to send clear', function () {
        LaraDumps.send = jest.fn();
        LaraDumps.clear();
        expect(LaraDumps.send).toHaveBeenCalledWith("clear", {
            "clear": {}
        });
    });
    it('should be able to send die', function () {
        LaraDumps.send = jest.fn();
        expect(LaraDumps.die).toThrow("Exception to stop the execution!");
    });
    it('should be able to send label', function () {
        LaraDumps.send = jest.fn();
        LaraDumps.label("test");
        expect(LaraDumps.send).toHaveBeenCalledWith("label", {
            "label": {
                "label": "test"
            }
        });
    });
    it('should be able to send dump', function () {
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
    it('should be able to send generateIds', function () {
        LaraDumps.send = jest.fn();
        LaraDumps.makeUUID = jest.fn().mockReturnValue("test");
        expect(LaraDumps.instanceId).toBeNull();
        expect(LaraDumps.requestId).toBeNull();
        LaraDumps.generateIds();
        expect(LaraDumps.instanceId).toBe("test");
        expect(LaraDumps.requestId).toBe("test");
    });
});
//# sourceMappingURL=LaraDumps.test.js.map