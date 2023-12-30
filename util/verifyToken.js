import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createError } from "../errors/error.js";

dotenv.config();
export const verifyAccessToken = (req, res, next) => {
  try {
    
    if (!req.cookies.req_access_token) {
     
      next(createError(400,"Please Login again.."))
      
    } else {
      
      const flag = Jwt.verify(
        req.cookies.req_access_token,
        process.env.ACCESS_TOKEN,(err,payload)=>{
            if(err) next(createError(400,'Unauthorize'))
            req.info = payload
        }
      );
      next();
    }
  } catch (error) {
    next(error);
  }
};
export const verifyRefreshToken = (req, res, next) => {};