
// import dotenv from "dotenv";
// import express from "express";
// console.log(process.env.PORT)
// dotenv.config();

// const PORT = process.env.PORT;

// const App = express();
// App.use(express.json());

// App.get("/route/:id", (request, response) => {
//   const params = request.params;
//   response.status(200).json({
//     msg: "this is okk for get",
//     params: params,
//   });
// });

// App.post("/route/:id", (request, response) => {
//   const params = request.params;
//   response.status(200).json({
//     msg: "this is okk msg for post",
//     params: params,
//   });
// });

// App.get("/shop/:id", (request, response) => {
//   console.log("this api: /shop/:id has been hit!");
//   console.log("Request Body: ", request.body);
//   console.log("Request Params: ", request.params);

//   response.status(200).json({
//     msg: "this msg for put",
//     request: [{
//       body: request.body,
//       params: request.params,
//       query: request.query,
//     }],
//     message: "Entire request object has been sent as response",
//   });
// });

// App.listen(PORT, () => console.log("valueof port is :", PORT));




import express from 'express'
import dotenv from 'dotenv'
 dotenv.config()
const port=process.env.PORT;
const app=express()
app.use(express.json());


app.get("/getting/:id",(req,res)=>{

  console.log("body prints here",req.body);
  console.log("body prints here",req.params);

  res.status(200).json({
    msg:"for get new",
    request:[{
    body:req.body,
    params:req.params,
    query:req.query}]
  })
});
app.listen(port,()=>console.log(port,"port print"))