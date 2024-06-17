// Importing packages
const express = require("express");
const router = require("./src/routes/routes");

// Creating express app
const app = express();
const port = 3000;

app.use(router);

// Makeshift code for copy later :DD

// // Route to perform CRUD on a specific student
// app
//   .route("/api/student/:id")
//   .get(async (req, res) => {
//     for (let i = 0; i < students.length; i++) {
//       if (students[i].id == req.params.id) {
//         return res.status(200).json(students[i]);
//       }
//     }
//     res.status(404).send("Student not found");
//   })
//   .post(async (req, res) => {
//     // Validating body request
//     if (req.body.length > 1) {
//       return res.status(400).send("Invalid body request (body must contain only one student)");
//     }
//     if(req.body[0].id){
//       if (req.body[0].id != req.params.id) {
//         return res.status(400).send("Invalid body request (id in body must match id in URL)");
//       }
//     }

//     for (let i = 0; i < students.length; i++) {
//       if (students[i].id == req.params.id) {
//         return res.status(400).send("Student already exists");
//       }
//     }

//     let temp = {
//       id: Number(req.params.id),
//     };

//     for (let key of Object.keys(req.body[0])) {
//       temp[key] = req.body[0][key];
//     }

//     students.push(temp);
//     fs.writeFile(student_path, JSON.stringify(students));
//     res.status(201).json(temp);
//   })
//   .put(async (req, res) => {
//     // Validating body request
//     if (req.body.length > 1) {
//       return res.status(400).send("Invalid body request (body must contain only one student)");
//     }
//     if(req.body[0].id){
//       if (req.body[0].id != req.params.id) {
//         return res.status(400).send("Invalid body request (id in body must match id in URL)");
//       }
//     }

//     for (let student of students) {
//       if (student.id == req.params.id) {
//         for (let key of Object.keys(req.body[0])) {
//           student[key] = req.body[0][key];
//         }
//         fs.writeFile(student_path, JSON.stringify(students));
//         return res.status(201).json(student);
//       }
//     }
//     res.status(404).send("Student not found");
//   })
//   .delete(async (req, res) => {
//     let newStudents = students.filter((student) => student.id != req.params.id);
//     if (newStudents.length === students.length) {
//       return res.status(404).send("Student not found");
//     }
//     students = [...newStudents];
//     fs.writeFile(student_path, JSON.stringify(students));
//     return res.status(200).json(students);
//   });

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});