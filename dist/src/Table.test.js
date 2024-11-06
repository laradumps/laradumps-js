var Table = require("./Table").default;
describe.only('Table', function () {
    var users = [
        { "name": "hecktor" },
        { "name": "luan" },
    ];
    it('should be able to send table', function () {
        Table.label = jest.fn();
        Table.send = jest.fn().mockReturnValue({ label: Table.label });
        Table.table(users, "test");
        expect(Table.send).toHaveBeenCalledWith("table", {
            "table": {
                fields: ["name"],
                header: ["name"],
                values: users,
                label: "test"
            }
        });
        expect(Table.label).toHaveBeenCalledWith("test");
    });
    it('should be able to send table v2', function () {
        Table.label = jest.fn();
        Table.send = jest.fn().mockReturnValue({ label: Table.label });
        Table.tableV2(users, "test");
        expect(Table.send).toHaveBeenCalledWith("table_v2", {
            "table_v2": {
                label: "test",
                values: users
            }
        });
        expect(Table.label).toHaveBeenCalledWith("test");
    });
});
//# sourceMappingURL=Table.test.js.map