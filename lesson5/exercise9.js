function Student(name, countryCodeForBirthplace) {
  this.name = name;
  this.birthplaceCountryCode = countryCodeForBirthplace;
  // random student Id generatio with some logic
  // for example random number between 0 - 10000000
  this.studentId = Math.floor(Math.random() * 10000000);

  this.tutor = undefined;
  this.setTutor = function(teacherTutor) {
    this.tutor = teacherTutor;
  };
}

function Teacher(name, countryCodeForBirthplace) {
  this.name = name;
  this.birthplaceCountryCode = countryCodeForBirthplace;
  this.teachingTopics = [];

  this.addTeachingTopic = function(teachingTopic) {
    this.teachingTopics.push(teachingTopic); 
   };
}

/* Your task here is to add a tutor property to the Student constructor function
   so that all students have a tutor property.

   You should add a setTutor method to the Student constructor function so that
   the tutor property can be set.

   Add teacher1 as a tutor to the student1 object.
   */


let student1 = new Student("Tommi", "FI");
let student2 = new Student("John", "US");
let student3 = new Student("Mary", "UK");

let teacher1 = new Teacher("Lasse", "FI");
console.log(teacher1);
teacher1.addTeachingTopic("JavaScript");
console.log(teacher1);

console.log(student1);
student1.setTutor(teacher1);
console.log(student1);
console.log('Changing teacher1 name');
teacher1.name = "Some other name";
console.log(student1);

