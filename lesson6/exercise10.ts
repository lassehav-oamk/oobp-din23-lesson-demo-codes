class Student {
    #firstName: string;
    #lastName: string;
    #countryCodeForBirthplace: string;
    #studentId: number;
    #tutor: any;

    constructor(
      firstName: string, 
      lastName: string, 
      countryCodeForBirthplace: string) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#countryCodeForBirthplace = countryCodeForBirthplace;
      this.#studentId = Math.floor(Math.random() * 1000000);      
    }

    setTutor(teacherTutor: any) {
      this.#tutor = teacherTutor;
    }

    // Gets full name of the student
    getName() {
      return this.#firstName + " " + this.#lastName;
    }
}

class Teacher {
  name: string;
  birthplaceCountryCode: string;
  teachingTopics: string[];
  #courses: Course[];

  constructor(name : string, countryCodeForBirthplace : string) {
    this.name = name;
    this.birthplaceCountryCode = countryCodeForBirthplace;
    this.teachingTopics = [];
    this.#courses = [];
  }

  addTeachingTopic(teachingTopic : string) {
    this.teachingTopics.push(teachingTopic); 
  }

  addCourse(course: Course) {
    this.#courses.push(course);
  }

  displayCourses() {
    for(let i = 0; i < this.#courses.length; i++) {
      // read course name
      const name = this.#courses[i].getName();
      // read course id
      const courseId = this.#courses[i].getId();
      // print course name and id together 
      console.log(name + ", " + courseId);
    }
  }
}

class Course {
  name: string;
  description: string;
  courseId: number;
  teachers: Teacher[];
  students: Student[];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.courseId = Math.floor(Math.random() * 1000000); 
    this.teachers = [];
    this.students = [];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.courseId;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
    teacher.addCourse(this);
  }

  // Print out student names to the console
  displayStudents() {
    console.log('Students of ' + this.name + ":");
    for(let i = 0; i < this.students.length; i++) {
      // read the current student name
      const name = this.students[i].getName();

      // print the name to console
      console.log(name);
    }
  }
}


let student1 = new Student("Jane", "Doe", "FI");
let student2 = new Student("Joe", "Some", "US");
let student3 = new Student("Jack", "Daniels", "CA");
let student4 = new Student("Jill", "Bobbins", "GB");
let student5 = new Student("Jenny", "Bond", "AU");

let teacher1 = new Teacher('Max', 'SE');
let teacher2 = new Teacher('Maya', 'DE');

let oobp = new Course('Object Oriented Browser Programmin', 'Fun programming stuff');
oobp.addTeacher(teacher2);


oobp.addStudent(student5);
oobp.addStudent(student4);
oobp.addStudent(student3);

//oobp.displayStudents();

teacher2.displayCourses();

