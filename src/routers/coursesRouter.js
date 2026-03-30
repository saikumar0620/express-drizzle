

import { Router } from "express";
import { getCourseById, createCourse, getAllCourses } from "../controllers/coursesController.js";
import checkAuth from "../middlewares/checkAuth.js";

const courseRouter = Router();
//http://localhost:8000/api/v1/courses/
courseRouter.post("/", checkAuth, createCourse);
courseRouter.get("/", getAllCourses);
courseRouter.get("/:courseId", getCourseById);

export default courseRouter;