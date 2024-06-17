const Student = require('../models/students.model');

const getStudents = async (req, res) => {
    try{
        const students = await Student.getStudents();
        res.status(200).json(students);
    }
    catch (error){
        console.log("error has occured")
        res.status(500).send('Internal server error');
    }
};

const postStudents = async (req, res) => {
    try{
        const students = await Student.postStudents();
        res.status(201).json(students);
    }
    catch (error){
        res.status(500).send('Internal server error');
    }
};

const updateStudents = (req, res) => {
    res.status(200).send('Student updated successfully')
}

const deleteStudents = (req, res) => {
    res.status(200).send('Student deleted successfully');
}

module.exports = {
    getStudents,
    postStudents,
    updateStudents,
    deleteStudents
};