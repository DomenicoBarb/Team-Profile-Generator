// Import the Manager class from the Employee module
const Manager = require("../lib/Manager");
// Create a new Intern instance with the given arguments
const man = new Manager(4, 'Nico', 'NicoBarb@gmail.com', 226);

// Test whether the getId() method returns the correct id property
test("Will it get id via getId()", () => {
    expect(man.getId()).toEqual(4);
});
// Test whether the Employee object's name property is set correctly
test("Will it set a name via constructor", () => {
    expect(man.name).toEqual('Nico');
});
// Test if email was successfully set via constructor
test("Will it set email via constructor", () => {
    expect(man.email).toEqual('NicoBarb@gmail.com');
});
// Test if office number was successfully set via constructor
test("Get office number with getOfficeNumber()", () => {
    expect(man.getOfficeNumber()).toEqual(226);
});