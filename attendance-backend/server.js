import express from 'express';
import classRoute from './routes/class.js';
import studentRoute from './routes/student.js';
import teacherRoute from './routes/teacher.js';
import attendanceRoute from './routes/attendance.js';
import cors from 'cors';

const app = express();
app.use(cors())

// connecting the database
import { db } from './db.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/student', studentRoute);

app.use('/teacher', teacherRoute);

app.use('/class', classRoute);

app.use('/attendance', attendanceRoute);

// attendance route
// const attendanceRoute = require('./routes/attendance');

app.get('/', (req, res) => {
    res.send('Attendance Management System');
})

// // student route
// app.use('/student', studentRoute);

// // teacher route
// app.use('/teacher', teacherRoute);

// // class route
// app.use('/class', classRoute);

// // attendance route
// app.use('/attendance', attendanceRoute);

const PORT = 8000;
// assinging the port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
