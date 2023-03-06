// Import the Intern class from the Employee module
const Intern = require("../lib/Intern");
// Create a new Intern instance with the given arguments
const inte = new Intern(2, 'Nico', 'NicoBarb@gmail.com', 'UofT');

// Test whether the getId() method returns the correct id property
test("Will it get id via getId()", () => {
    expect(inte.getId()).toEqual(2);
});
// Test whether the Employee object's name property is set correctly
test("Will it set a name via constructor", () => {
    expect(inte.name).toEqual('Nico');
});
// Test if email was successfully set via constructor
test("Will it set email via constructor", () => {
    expect(inte.email).toEqual('NicoBarb@gmail.com');
});
// Test if school was sucessfully set via constructor
test("Will it set school name via constructor", () => {
    expect(inte.school).toEqual('UofT');
});