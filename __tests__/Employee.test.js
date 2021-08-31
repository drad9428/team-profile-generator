const Employee = require("../lib/Employee");
const employee = new Employee ("bob", 1,"bob@email.com");

test ("Create a new employee named bob", () => {
    expect(employee.name).toBe("bob");
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe("bob@email.com");
});

test ("gets employee name on call", () => {
    expect(employee.getName()).toEqual(employee.name);
});

test ("get employee id", () => {
    expect(employee.getId()).toEqual(employee.id);
});

test ("get employee email", () => {
    expect(employee.getEmail()).toEqual(employee.email);
});

test ("get employee role", () => {
    expect(employee.getRole()).toEqual("Employee");
});