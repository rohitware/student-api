// controllers/studentController.js

const Student = require("../models/studentModel");

// GET all students
const getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        next(err);
    }
};

// GET student by ID
const getStudentById = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        next(err);
    }
};

// POST: create new student
const createStudent = async (req, res, next) => {
    try {
        const { name, age } = req.body;
        const newStudent = new Student({ name, age });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        next(err);
    }
};

// PUT: update student
const updateStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        next(err);
    }
};

// DELETE: remove student
const deleteStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        next(err);
    }
};

// Export all handlers
module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
