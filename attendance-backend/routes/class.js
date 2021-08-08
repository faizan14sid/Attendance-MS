import express from 'express';
const router = express.Router();

import { createClass } from '../controllers/class.js';


router.post('/class', createClass);



export default router;