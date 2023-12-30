import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
const app = express();
dotenv.config();
import { verifyAccessToken } from "./util/verifyToken.js";
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js'
import checklistRoute from './routes/checkList.js'
import vendorRoute from './routes/vendor.js'
import taskRoute from './routes/task.js'


const port = process.env.PORT || 8888;

// app.use(cors());
app.use(
    cors({
      credentials: true,
      origin: true,
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
  );

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/test',(req,res,next)=>{
  res.send('<h1>Welcome To Nodejs</h1>')
})
app.use('/api/auth',authRoute)
app.use('/api/vendor',vendorRoute)
app.use('/api/checklist',checklistRoute)
app.use('/api/task',taskRoute)


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    msg: err.msg,
    status: err.status, 
    stack: err.stack,
  });
});

const connectDB = () => {
  try {
    mongoose.connect(process.env.URI);
    console.log("Connecting Database...");
  } catch (error) {
    console.log("Error....");
    console.log(error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Database Connection Successful...");
});
mongoose.connection.on("disconnected", () => {
  console.log("Database Connection Failed...");
});
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
mongoose.set("strictQuery", true);
app.listen(port, () => {
  connectDB();
  console.log(`Listening at ${port}`);
});
// httpsServer.listen(port, () => {
//   connectDB();
//   console.log(`Listening at ${port}`);
// });
