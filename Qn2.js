// Q2: User Class for College Website
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
  
  // Example usage
  const user1 = new User("Taylor", "taylor@example.com");
  console.log(user1.viewData()); // Expected: Taylor is viewing website data.
  