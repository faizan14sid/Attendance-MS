import express from 'express';
const router = express.Router();

import { newAttendance, viewAttendance, present, absent } from '../controllers/attendance.js';


// new attendaance record
router.post('/create', newAttendance);

// view attendance
router.get('/viewAttendance/:standard', viewAttendance);

// mark present 
router.put('/present/:_id', present);

// mark absent 
router.put('/absent/:_id', absent);


export default router;