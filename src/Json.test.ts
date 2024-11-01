const {default: Json} = require("./Json");

describe('Json', () => {
    it('should be able to send json', () => {
        Json.send = jest.fn();
        const user = {"first_name": "hecktor", "last_name": "viegas"};

        Json.json(user);

        expect(Json.send).toHaveBeenCalledWith("json", {
            "json": {
                "string": JSON.stringify(user),
                "original_content": JSON.stringify(user)
            }
        });
    });

    it('should be able to send json if data is a string', () => {
        Json.send = jest.fn();
        const user = JSON.stringify({"first_name": "hecktor", "last_name": "viegas"});

        Json.json(user);

        expect(Json.send).toHaveBeenCalledWith("json", {
            "json": {
                "string": user,
                "original_content": user
            }
        });
    });

    it('should be able to send a invalid json', () => {
        Json.send = jest.fn();
        Json.dump = jest.fn();

        const user = '"user": "hecktor", "last_name": "viegas"}';
        Json.json(user);

        expect(Json.send).not.toHaveBeenCalled();
        expect(Json.dump).toHaveBeenCalledWith(user);
    });
});