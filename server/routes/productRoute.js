import express from 'express';
import 'dotenv/config';

import {
    addProduct
} from '../controllers/productController.js';

const PORT = process.env.PORT;

const router = express.Router();

router.post('/add-product', addProduct);

export default router;