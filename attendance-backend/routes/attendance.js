import express from 'express';
const router = express.Router();

import { newAttendance, viewAttendance, Present, Absent } from '../controllers/attendance.js';


// new attendaance record
router.post('/create', newAttendance);

// view attendance
router.get('/viewAttendance/:standard', viewAttendance);

// mark present 
router.put('/present/:_id', Present);

// mark absent 
router.put('/absent/:_id', Absent);


export default router;