 
function Student(name, rollNumber, marks) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.marks = marks;
}

Student.prototype.showDetails = function () {
    console.log(`Student Name is ${this.name}, Roll Number is ${this.rollNumber}, and Marks are ${this.marks}.`);
};

Student.prototype.updateMarks = function (newMarks) {
    this.marks = newMarks;
    console.log(`${this.name} ke naye marks update ho gaye hain: ${this.marks}`);
};

let student1 = new Student("Ali", 101, 85);
let student2 = new Student("Sara", 102, 90);
let student3 = new Student("Ahmed", 103, 78);

console.log("--- Student Details ---");
student1.showDetails();
student2.showDetails();
student3.showDetails();

// Marks update karke check karna
student3.updateMarks(95);
student3.showDetails();

console.log("\n--- Shared Method Check ---");
console.log("Kya student1 aur student2 ka method same hai?", student1.showDetails === student2.showDetails); 


console.log("\n--- Property & Method Checks ---");

console.log('1. "name" in student1:', "name" in student1); 

console.log('2. "showDetails" in student1:', "showDetails" in student1); 

console.log('3. student1.hasOwnProperty("name"):', student1.hasOwnProperty("name")); 

console.log('4. student1.hasOwnProperty("showDetails"):', student1.hasOwnProperty("showDetails")); 

console.log('5. typeof student1.showDetails:', typeof student1.showDetails); 
console.log("\n--- Prototype Practice ---");


Student.prototype.institute = "Saylani Mass IT Training (SMIT)";

console.log("Student 1 Institute:", student1.institute);
console.log("Student 2 Institute:", student2.institute);
console.log("Student 3 Institute:", student3.institute);

console.log("Prototype of student1:", Object.getPrototypeOf(student1));
console.log("Kya yeh Student.prototype ke barabar hai?", Object.getPrototypeOf(student1) === Student.prototype); 