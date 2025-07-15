import express from 'express';
import { getAllDevs ,createDev } from '../controllers/DevController.js';

// create a new express router
const router = express.Router();

// define a route for /dev
router.get("/dev",getAllDevs);

router.post("/dev",createDev);
// export the router
export default router;
