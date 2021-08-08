import Class from '../models/class.js';

// const Student = require('../models/student');

export const defaultRoute = (req, res) => {
    Class.find()
    return res.json({
        status: true,
        message: 'Route is working....'
    });
}


export const createClass = (req, res) => {
    try {
        Class.findOne({ Class: req.body.Class })
            // checking if standard is already exist

            .exec((newClass, existClass) => {
                if (existClass) { // if exist
                    return res.json({
                        message: 'Class already exist...'
                    });
                }
                else { // if not
                    Class.create({
                        // then creating the class in database
                        Class: req.body.Class,
                        ClassTeacher: req.body.ClassTeacher,
                    }, (error, result) => {
                        if (!error) { // if all ok
                            return res.json({
                                status: true,
                                message: 'Class Added Successfully',
                                result
                            });
                        }
                        else { // if error
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


export const allClasses = async (req, res) => {
    try {
        await Class.find({}, (error, result) => {
            return res.json({
                result
            });
        })
    }
    catch (err) {
        return res.send('error' + err);
    }
}



export const viewOneClass = async (req, res) => {
    try {
        await Class.find({ _id: req.params._id }, (error, result) => {
            return res.json({
                result: result
            });
        })
    }
    catch (err) {
        return res.send('error' + err);
    }
}