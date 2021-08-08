import express from 'express';
const router = express.Router();

import { viewClass, addClass } from '../controllers/class.js';

router.post('/addClass', addClass);
router.get('/viewClass', viewClass);



export default router;