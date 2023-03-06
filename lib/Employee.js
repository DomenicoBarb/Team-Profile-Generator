// Define the Employee class
class Employee {
  // Constructor function to create a new Employee object with an id, name, and email
  constructor(id, name, email) {
    this.id = id; // Assign id to the id property of the new object
    this.name = name; // Assign name to the name property of the new object
    this.email = email; // Assign email to the email property of the new object
  }

  // Method to get the name of the Employee object
  getName() {
    return this.name;
  }

  // Method to get the id of the Employee object
  getId() {
    return this.id;
  }

  // Method to get the email of the Employee object
  getEmail() {
    return this.email;
  }

  // Method to get the role of the Employee object, which is always "Employee"
  getRole() {
    return 'Employee';
  }
}

// Export the Employee class so that it can be used in other files
module.exports = Employee;