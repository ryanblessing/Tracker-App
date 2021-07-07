const Manager = require("../lib/Manager");


test('Create a manager object', () => {
    const role = "Manager"
    const manager = new Manager('1', 'Ryan', 'blessing', role);
    
    expect(manager.getRole()).toBe(role)

});