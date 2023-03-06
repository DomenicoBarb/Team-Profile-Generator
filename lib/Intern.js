// Require the Employee class from the Employee module
const Employee = require('./Employee');
// Define the Intern class, which inherits from the Employee class
class Intern extends Employee {
    // Constructor function to create a new Intern object with an id, name, email, and school name
    constructor(id, name, email, school) {
        // Call the constructor of the parent class (Employee) with the id, name, and email parameters
        super(id, name, email);
        // Assign the school name to the school property of the new object
        this.school = school;
    }
    // Method to get the school name of the Intern object
    getSchool() {
        return this.school;
    }
    // Method to get the role of the Intern object, which is always "Intern"
    getRole() {
        return 'Intern';
    }
}
// Export the Intern class so that it can be used in other files
module.exports = Intern;