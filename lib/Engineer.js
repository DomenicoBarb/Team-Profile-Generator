// Require the Employee class from the Employee module
const Employee = require('./Employee');
// Define the Engineer class, which inherits from the Employee class
class Engineer extends Employee {
	// Constructor function to create a new Engineer object with an id, name, email, and github username
	constructor(id, name, email, github) {
		// Call the constructor of the parent class (Employee) with the id, name, and email parameters
		super(id, name, email);
		// Assign the github username to the github property of the new object
		this.github = github;
	}
	// Method to get the github username of the Engineer object
	getGithub() {
		return this.github;
	}
	// Method to get the role of the Engineer object, which is always "Engineer"
	getRole() {
		return 'Engineer';
	}
}
// Export the Engineer class so that it can be used in other files
module.exports = Engineer;