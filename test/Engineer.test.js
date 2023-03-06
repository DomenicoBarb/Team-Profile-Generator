// Import the Employee class from the Employee module
const Engineer = require("../lib/Engineer");
// Create a new Engineer instance with the given arguments
const eng = new Engineer(1, 'Nico', 'NicoBarb@gmail.com', 'DomenicoBarb');

// Test whether the getId() method returns the correct id property
test("Will it get id via getId()", () => {
    expect(eng.getId()).toEqual(1);
});
// Test whether the Employee object's name property is set correctly
test("Will it set a name via constructor", () => {
    expect(eng.name).toEqual('Nico');
});
// Test if email was successfully set via constructor
test("Will it set email via constructor", () => {
    expect(eng.email).toEqual('NicoBarb@gmail.com');
});
// Test if GitHub account was successfully set via constructor
test("Will it set GitHub account via constructor", () => {
    expect(eng.github).toBe('DomenicoBarb');
});
// Test if getRole() method returns "Engineer"
test("Will getRole return \"Engineer\"", () => {
    expect(eng.getRole()).toEqual("Engineer");
});
// Test if getGithub() method returns the correct GitHub username
test("Will it get GitHub username via getGithub()", () => {
    expect(eng.getGithub()).toEqual('DomenicoBarb');
});