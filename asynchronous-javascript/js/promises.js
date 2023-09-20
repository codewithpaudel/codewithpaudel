/*
const promiseExample = new Promise((resolve, reject) => {
    setTimeout(() => {
        const student = { name: "Dipesh Paudel", id: 1 };
        resolve(student);
        // reject(new Error("Student not found!"));
    }, 2000);
});
promiseExample.then((result) => console.log(result)).catch((error) => console.log(error.message));
*/

function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting data from Database!");
            resolve({ name: "Dipesh Paudel", reference: id });
        }, 2000);
    });
}

function getSubjects(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data of reference no. ${id}!`);
            resolve(["Maths", "Science", "Computer"]);
        }, 2000);
    });
}

function getMarks(subject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Marks of ${subject}!`);
            resolve(92);
            // reject(new Error("Marks not found!"));
        }, 2000);
    });
}

const promise = getStudent(34);
promise
    .then((student) => getSubjects(student.reference))
    .then((subjects) => getMarks(subjects[Math.floor(Math.random() * 3)]))
    .then((mark) => console.log(mark))
    .catch((error) => console.log(error.message));
