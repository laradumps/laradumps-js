var Json = require("./Json").default;
describe('Json', function () {
    it('should be able to send json', function () {
        Json.send = jest.fn();
        var user = { "first_name": "hecktor", "last_name": "viegas" };
        Json.json(user);
        expect(Json.send).toHaveBeenCalledWith("json", {
            "json": {
                "string": JSON.stringify(user),
                "original_content": JSON.stringify(user)
            }
        });
    });
    it('should be able to send json if data is a string', function () {
        Json.send = jest.fn();
        var user = JSON.stringify({ "first_name": "hecktor", "last_name": "viegas" });
        Json.json(user);
        expect(Json.send).toHaveBeenCalledWith("json", {
            "json": {
                "string": user,
                "original_content": user
            }
        });
    });
    it('should be able to send a invalid json', function () {
        Json.send = jest.fn();
        Json.dump = jest.fn();
        var user = '"user": "hecktor", "last_name": "viegas"}';
        Json.json(user);
        expect(Json.send).not.toHaveBeenCalled();
        expect(Json.dump).toHaveBeenCalledWith(user);
    });
});
//# sourceMappingURL=Json.test.js.map