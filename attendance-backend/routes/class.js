import express from 'express';
const router = express.Router();

import { viewClass, addClass, viewOneClass } from '../controllers/class.js';

router.post('/addClass', addClass);

router.get('/viewClass', viewClass);

router.get('/view/:_id', viewOneClass);



export default router;