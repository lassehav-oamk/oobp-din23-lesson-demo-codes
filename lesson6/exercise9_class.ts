class Student {
    name: string;
    countryCodeForBirthplace: string;
    studentId: number;
    tutor: any;

    constructor(
      name: string,
      countryCodeForBirthplace: string) {
      this.name = name;
      this.countryCodeForBirthplace = countryCodeForBirthplace;
      this.studentId = Math.floor(Math.random() * 1000000);      
    }

    setTutor(teacherTutor: any) {
      this.tutor = teacherTutor;
    }
}

class Teacher {
  name: string;
  birthplaceCountryCode: string;
  teachingTopics: string[];

  constructor(name : string, countryCodeForBirthplace : string) {
    this.name = name;
    this.birthplaceCountryCode = countryCodeForBirthplace;
    this.teachingTopics = [];
  }

  addTeachingTopic(teachingTopic : string) {
    this.teachingTopics.push(teachingTopic); 
  }

}

let student1 = new Student("Jane", "FI");

let teacher1 = new Teacher('Max', 'SE');

console.log(student1);