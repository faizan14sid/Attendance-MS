import express from 'express';
const router = express.Router();

import { registerTeacher, addTeacher, viewClassTeachers, viewAllTeachers } from '../controllers/teacher.js';



// register a teacher route
router.post('/registerTeacher', registerTeacher);

// view all teacher
router.get('/viewAllTeachers', viewAllTeachers);

// add a teacher to a specific class
router.put('/addteacher', addTeacher);

// view all teachers of a class
router.get('/view/:standard', viewClassTeachers);


export default router;