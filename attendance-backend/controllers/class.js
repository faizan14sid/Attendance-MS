import Class from '../models/class.js';
// app.use(express.json());
// const Student = require('../models/student');

export const createClass = (req, res) => {
    try {
        Class.findOne({ class: req.body.class })
            // checking if class already exist

            .exec((newClass, existClass) => {
                if (existClass) {
                    return res.json({
                        message: 'Class already exist...'
                    });
                }
                else {
                    Class.create({
                        class: req.body.class,
                        classTeacher: req.body.classTeacher,
                    }, (error, result) => {
                        if (!error) {
                            return res.json({
                                status: true,
                                message: 'Class Added Successfully',
                                result
                            });
                        }
                        else {
                            return res.json({
                                status: false,
                                message: 'Db insert failed...',
                                error
                            });
                        }
                    })
                }
            })
    }
    catch (err) {
        return res.json('error' + err);
    }
}
