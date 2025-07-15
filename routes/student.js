import express from 'express';
import { allStudents ,getSingleStudent} from '../controllers/StudentController.js';

// Create a new Express router
const router = express.Router();
// Define a router for /student
router.get("/student",allStudents)
router.get("/student/:id",getSingleStudent)



// export this router
export default router;