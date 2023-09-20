console.log("First Line!");

getStudent(69, displayStudent);

function displayStudent(student) {
    console.log(student);
    getStudentSubjects(student.reference, displaySubjects);
}

function displaySubjects(subjects) {
    console.log(subjects);
    getStudentMarks(subjects[Math.floor(Math.random() * 3)], displayMarks);
}

function displayMarks(mark) {
    console.log(`Mark is ${mark}!`);
}

function getStudent(id, callback) {
    setTimeout(() => {
        console.log("Getting data from Database!");
        callback({ name: "Dipesh Paudel", reference: id });
    }, 2000);
}

function getStudentSubjects(id, callback) {
    setTimeout(() => {
        console.log(`Data of reference no. ${id}!`);
        callback(["Maths", "Science", "Computer"]);
    }, 2000);
}

function getStudentMarks(subject, callback) {
    setTimeout(() => {
        console.log(`Marks of ${subject}!`);
        callback(92);
    }, 2000);
}

console.log("Last Line!");
