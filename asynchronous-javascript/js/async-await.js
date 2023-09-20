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

getStudentData();
async function getStudentData() {
    try {
        const student = await getStudent(6);
        const subjects = await getSubjects(student.reference);
        const mark = await getMarks(subjects[2]);
        console.log(`Mark ${mark}!`);
    } catch (error) {
        console.log(error.message);
    }
}
