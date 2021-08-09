import express from 'express';
const router = express.Router();

import { registerStudent, viewAllStudents, viewClassStudents, addStudent } from '../controllers/student.js';


// register a student route
router.post('/registerStudent', registerStudent);

// view all student
router.get('/viewAllStudents', viewAllStudents);

// view all student of a specific class 

router.get('/view/:standard', viewClassStudents);

// add a student in a class
router.put('/addStudent', addStudent);

export default router;