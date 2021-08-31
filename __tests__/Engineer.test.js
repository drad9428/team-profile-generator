const Engineer = require("../lib/Engineer");
const engineer = new Engineer ("bill", 2,"bill@email.com", "username");

test ("Create a new engineer named bill", () => {
    expect(engineer.name).toBe("bill");
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe("bill@email.com");
    expect(engineer.github).toEqual("username");
});

test ("gets engineer name on call", () => {
    expect(engineer.getName()).toEqual(engineer.name);
});

test ("get engineer id", () => {
    expect(engineer.getId()).toEqual(engineer.id);
});

test ("get engineer email", () => {
    expect(engineer.getEmail()).toEqual(engineer.email);
});

test ("get engineer role", () => {
    expect(engineer.getRole()).toEqual("Engineer");
});

test ("get engineer github", () => {
    expect(engineer.getGithub()).toEqual(engineer.github);
});