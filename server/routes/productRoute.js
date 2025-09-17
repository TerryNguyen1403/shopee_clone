import express from 'express';
import 'dotenv/config';

import upload from '../middleware/upload.js';

import {
    addProduct,
    getAllProducts,
    getFeaturedProducts,
    uploadImages
} from '../controllers/productController.js';

const PORT = process.env.PORT;

const router = express.Router();

router.post('/add-product', addProduct);
router.get('/all-products', getAllProducts);
router.get('/featured-products', getFeaturedProducts);

// Upload ảnh
router.post('/upload', upload.single('product'), uploadImages);

export default router;