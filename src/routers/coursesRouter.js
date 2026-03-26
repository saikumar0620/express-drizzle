

import { Router } from "express";
import { courseById, createCourse, getAllCourses } from "../controllers/coursesController.js";

const courseRouter= Router();
courseRouter.post("/",createCourse)
courseRouter.get("/",getAllCourses)
courseRouter.get("/:courseid",courseById)

export default courseRouter