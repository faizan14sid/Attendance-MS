import TeacherModel from '../models/teacher.js';
import bcrypt from 'bcryptjs';

// Registeration of teacher will be done by the admin

export const registerTeacher = (req, res) => {
    let registration_no = req.body.registration_no

    TeacherModel.findOne({ registration_no }, (err, register) => {
        if (err) return res.send({ message: err.message });
        if (!register) {
            const newTeacher = new TeacherModel({
                teacherName: req.body.teacherName,
                registration_no: req.body.registration_no,
                password: bcrypt.hashSync(req.body.password, 8) //Protect password
            });

            newTeacher
                .save()
                .then(async (doc) => {
                    return res.status(200).send({
                        message: "teacher register successfully"
                    })
                })
                .catch((err) => {
                    res.status(500).json({ message: err.message })
                })
        }
        else {
            res.status(422).send({
                message: "teacher already register"
            })
        }
    })
}

// view all teacher

export const viewAllTeachers = async (req, res) => {
    TeacherModel.find()
        .sort("teacherName")
        .select(
            "teacherName registration_no"
        )
        .exec()
        .then((data) => {

            res.send(data)
        })
        .catch((er) => {
            res.status(500).json({
                message: er.message,
            });
        });
}



// add a teacher to a specific class

export const addTeacher = async (req, res) => {
    try {
        await TeacherModel.findOneAndUpdate({ registration_no: req.body.registration_no }, {
            standard: req.body.standard
        }, (error, result) => {
            if (!error) {
                return res.json({
                    message: 'Teacher added successfully',
                    result
                })
            }
        }).select("-password")
    }
    catch (err) {
        return res.send('error' + err);
    }
}

// show all teachers of a specific class 

export const viewClassTeachers = async (req, res) => {
    try {
        await TeacherModel.find({ standard: req.params.standard }, (error, result) => {
            if (!error) {
                return res.json({
                    result
                })
            }
        }).sort("teacherName").select("-password")
    }
    catch (err) {
        return res.send('error' + err);
    }
}