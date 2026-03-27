

import { Router } from "express";
import { getCourseById, createCourse, getAllCourses } from "../controllers/coursesController.js";

const courseRouter= Router();
courseRouter.post("/",createCourse)
courseRouter.get("/",getAllCourses)
courseRouter.get("/:courseId",getCourseById)

export default courseRouter