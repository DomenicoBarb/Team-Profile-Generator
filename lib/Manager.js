// Require the Employee class from the Employee module
const Employee = require('./Employee');
// Define the Manager class, which inherits from the Employee class
class Manager extends Employee {
    // Constructor function to create a new Manager object with an id, name, email, and office number
    constructor(id, name, email, officeNumber) {
        // Call the constructor of the parent class (Employee) with the id, name, and email parameters
        super(id, name, email);
        // Assign the office number to the officeNumber property of the new object
        this.officeNumber = officeNumber;
    }
    // Method to get the office number of the Manager object
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Method to get the role of the Manager object, which is always "Manager"	
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;