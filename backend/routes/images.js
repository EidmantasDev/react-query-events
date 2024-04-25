import express from 'express';
import { getImages } from '../controllers/imagesController.js';

const router = express.Router();

router.get('/', getImages);

export default router;
