import express from "express";
import {
  create_course,
  update_course,
  get_all_courses,
  get_course,
  delete_course,
  contact_us,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/", create_course);
router.get("/", get_course);
router.get("/:id", get_all_courses);
router.patch("/:id", update_course);
router.delete("/:id", delete_course);
router.post("/contact", contact_us);

export default router;
