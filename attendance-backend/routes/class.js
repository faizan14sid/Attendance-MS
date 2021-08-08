import express from 'express';
const router = express.Router();

import { defaultRoute, createClass, allClasses, viewOneClass } from '../controllers/class.js';


// defaulte route
router.all('/', defaultRoute);


router.post('/create', createClass);


router.get('/viewAllClasses', allClasses);


router.get('/view/:_id', viewOneClass);



module.exports = router;