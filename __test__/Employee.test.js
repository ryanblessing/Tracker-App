const Employee = require("../lib/Employee");

test('test create new employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object')
});

test('set employee Id', () => {
    const id = '1';
    const employee = new Employee(id, 'Ryan', 'Blessing', 'employee')

    expect(employee.getId()).toBe(id)
});

test('set first name', () => {
    const firstName = 'Ryan';
    const employee = new Employee('1', firstName, 'Blessing', 'employee')

    expect(employee.getFirstName()).toBe(firstName)
});

test('set last name', () => {
    const lastName = 'Blessing';
    const employee = new Employee('1', 'Ryan', lastName, 'employee')

    expect(employee.getLastName()).toBe(lastName)
});




test('To set the employees role in company', () => {
    const role = "Employee"
    const employee = new Employee('1', 'Ryan', 'Blessing', role)

    expect(employee.getRole()).toBe(role)
});