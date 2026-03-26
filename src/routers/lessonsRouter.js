import { Router } from "express";
import { getAllLessons } from "../controllers/lessonsController.js";




const lessonsRouter=Router();
lessonsRouter.get("/",getAllLessons)

export {lessonsRouter}


