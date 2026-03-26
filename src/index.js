import express, { json } from "express";
import dotenv from "dotenv";
import courseRouter from "./routers/coursesRouter.js";
import { lessonsRouter } from "./routers/lessonsRouter.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middle ware
app.use(express.json());
app.get("/check", (request, response) => {
  response.status(200).json({
    success: true,
    msg: "fetched",
  });
});

app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/lessons", lessonsRouter);


app.listen(PORT, () => {
  console.log("hi", PORT);
});
