// Import the Employee class from the Employee module
const Employee = require("../lib/Employee");
// Create a new Employee object with the given arguments
const emp = new Employee(1, 'Nico', 'NicoBarb@gmail.com');

// Test whether emp is an object with properties
test("Employee is actually an object with props", () => {
expect(typeof emp).toBe('object');
});
// Test whether emp is an instance of the Employee class
test("Will it launch Employee instance", () => {
expect(emp instanceof Employee).toEqual(true);
});
// Test whether the Employee object's name property is set correctly
test("Will it set a name via constructor", () => {
expect(emp.name).toEqual('Nico');
});
// Test whether the Employee object's id property is set correctly
test("Will it set id via constructor", () => {
expect(emp.id).toEqual(1);
});
// Test whether the Employee object's email property is set correctly
test("Will it set email via constructor", () => {
expect(emp.email).toEqual('NicoBarb@gmail.com');
});
// Test whether the getName() method returns the correct name property
test("Will it get name via getName()", () => {
expect(emp.getName()).toEqual('Nico');
});
// Test whether the getId() method returns the correct id property
test("Will it get id via getId()", () => {
expect(emp.getId()).toEqual(1);
});
// Test whether the getEmail() method returns the correct email property
test("Will it get email via getEmail()", () => {
expect(emp.getEmail()).toEqual('NicoBarb@gmail.com');
});
// Test whether the getRole() method returns the correct string
test("Will it get role via getRole()", () => {
expect(emp.getRole()).toEqual('Employee');
});