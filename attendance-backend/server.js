const express = require('express');

const app = express();

// connecting the database
const db = require('./db');

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));


// student routes
// const studentRoute = require('./routes/student');

// teacher routes
// const teacherRoute = require('./routes/teacher');

// class route
// const classRoute = require('./routes/class');

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
