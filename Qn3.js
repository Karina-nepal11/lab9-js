 // Q3: Admin Class Inheriting from User
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    // Method to view data
    viewData() {
      return `${this.name} is viewing website data.`;
    }
  }
  
  class Admin extends User {
    // Method to edit data, specific to Admin class
    editData() {
      return `${this.name} is editing website data.`;
    }
  }
  
  // Example usage
  const admin1 = new Admin("Jordan", "jordan@example.com");
  console.log(admin1.viewData()); // Expected: Jordan is viewing website data.
  console.log(admin1.editData()); // Expected: Jordan is editing website data.
  