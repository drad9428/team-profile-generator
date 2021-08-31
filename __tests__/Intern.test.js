const Intern = require("../lib/Intern");
const intern = new Intern ("joe", 3,"joe@email.com", "school");

test ("Create a new intern named joe", () => {
    expect(intern.name).toBe("joe");
    expect(intern.id).toEqual(3);
    expect(intern.email).toBe("joe@email.com");
    expect(intern.school).toEqual("school");
});

test ("gets intern name on call", () => {
    expect(intern.getName()).toEqual(intern.name);
});

test ("get intern id", () => {
    expect(intern.getId()).toEqual(intern.id);
});

test ("get intern email", () => {
    expect(intern.getEmail()).toEqual(intern.email);
});

test ("get intern role", () => {
    expect(intern.getRole()).toEqual("Intern");
});

test ("get intern github", () => {
    expect(intern.getSchool()).toEqual("school");
});