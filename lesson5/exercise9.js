function Student(name, countryCodeForBirthplace) {
  this.name = name;
  this.birthplaceCountryCode = countryCodeForBirthplace;
  // random student Id generatio with some logic
  // for example random number between 0 - 10000000
  this.studentId = Math.floor(Math.random() * 10000000);

  


}

let student1 = new Student("Lasse", "FI");
let student2 = new Student("John", "US");
let student3 = new Student("Mary", "UK");

console.log(student1);
console.log(student2);
console.log(student3);