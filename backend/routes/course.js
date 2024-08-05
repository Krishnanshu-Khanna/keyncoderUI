import express from "express";
import { getCourse, registerCourse, getCourseAccess } from "../controllers/Courses.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyAccessCourse } from "../middleware/verifyAccessCourse.js";
const router = express.Router();

router.get("/courses", getCourse);
router.post("/courses", registerCourse);
router.post("/checkCourses", verifyToken, verifyAccessCourse, getCourseAccess);

// router.post('/course/:courseId/content', verifyToken, verifyAccessCourse );

export default router;