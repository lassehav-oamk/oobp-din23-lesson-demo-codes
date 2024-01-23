function Student(name, countryCodeForBirthplace) {
  this.name = name;
  this.birthplaceCountryCode = countryCodeForBirthplace;
  // random student Id generatio with some logic
  // for example random number between 0 - 10000000
  this.studentId = Math.floor(Math.random() * 10000000);

}

function Teacher(name, countryCodeForBirthplace) {
  this.name = name;
  this.birthplaceCountryCode = countryCodeForBirthplace;
  this.teachingTopics = [];

  this.addTeachingTopic = function(teachingTopic) {
    this.teachingTopics.push(teachingTopic); 
   };
}

let student1 = new Student("Tommi", "FI");
let student2 = new Student("John", "US");
let student3 = new Student("Mary", "UK");

let teacher1 = new Teacher("Lasse", "FI");
console.log(teacher1);
teacher1.addTeachingTopic("JavaScript");
// teacher1.addTeachingTopic("Python");

console.log(teacher1);

