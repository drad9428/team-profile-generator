const Manager = require("../lib/Manager");
const manager = new Manager ("jack", 4,"jack@email.com", 4);

test ("Create a new manager named jack", () => {
    expect(manager.name).toBe("jack");
    expect(manager.id).toEqual(4);
    expect(manager.email).toBe("jack@email.com");
    expect(manager.officNumber).toEqual(4);
});

test ("gets manager name on call", () => {
    expect(manager.getName()).toEqual(manager.name);
});

test ("get manager id", () => {
    expect(manager.getId()).toEqual(manager.id);
});

test ("get manager email", () => {
    expect(manager.getEmail()).toEqual(manager.email);
});

test ("get manager role", () => {
    expect(manager.getRole()).toEqual("Manager");
});

test ("get manager role", () => {
    expect(manager.getOfficeNumber()).toEqual(4);
});