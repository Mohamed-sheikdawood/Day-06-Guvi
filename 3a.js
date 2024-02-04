class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setEmail(email) {
      this.email = email;
    }
  }
  
  // Example usage:
  const person1 = new Person("John", "Doe", 25, "john.doe@example.com");
  
  console.log(`Full Name: ${person1.getFullName()}`);
  console.log(`Age: ${person1.getAge()}`);
  console.log(`Email: ${person1.getEmail()}`);
  
  // Updating details
  person1.setAge(26);
  person1.setEmail("john.doe.updated@example.com");
  
  console.log(`Updated Age: ${person1.getAge()}`);
  console.log(`Updated Email: ${person1.getEmail()}`);
  