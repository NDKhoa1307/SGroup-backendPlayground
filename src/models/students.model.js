const db = require("../configs/db.conf");

class Students {
  static async getStudents() {
    try {
      const students = await db.any("SELECT * FROM students");
      return students;
    } catch (error) {
      console.error("Error when getting students from database");
      throw error;
    }
  }
  static async postStudents(body) {
    try {
      let students = [];
      await body.forEach(async (student) => {
        try {
          const student = await db.any(
            `INSERT INTO students (name, age, grade) VALUES ($1, $2, $3) RETURNING *`,
            [student.name, student.age, student.grade]
          );
          students.push(student);
        } catch (error) {
          console.error("Error when handling student with info: ", student);
          throw error;
        }
      });
      return students;
    } catch (error) {
      console.log("Error when posting students to database");
      throw error;
    }
  }
  static async putStudents() {
    // TBU
  }
  static async deleteStudents() {
    // TBU
  }
}

module.exports = Students;
