function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Accessing the first element

//Alternative solution: Modify the function to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}
console.log(greeterArray(user)); 