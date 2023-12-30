import { createError } from "../errors/error.js";
import users from "../model/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signin = async (req, res, next) => {
  try {
    if (req.body.username === process.env.MADM && req.body.password === process.env.MPAS) {
      const token = jwt.sign({ user: 'Super User' }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
      res.cookie("req_access_token", token, { httpOnly: true }).status(200).json({ msg: 'Login Successful', details: 'Super User Access' })

    } else {
      const user = await users.findOne({ username: req.body.username });
      if (!user) return next(createError(401, "Invalid Creadential"));

      const result = await bcrypt.compareSync(req.body.password, user.password);
      if (result === false) return next(createError(401, "Invalid Creadential"));

      const token = jwt.sign({ user: user.name }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
      res.cookie("req_access_token", token, { httpOnly: true }).status(200).json({ msg: 'Login Successful', details: user })
    }
  } catch (error) {
    next(error)
  }

}

export const login = async (req, res, next) => {
  try {
    const User = await users.findOne({ name: req.body.name });
    if (!User) {
      return res.status(200).json({ msg: 'Invalid Credential' })
    }
    const result = bcrypt.compareSync(req.body.password.trim(), User.password.trim());
    if (result === false) return res.status(200).json({ msg: 'Invalid Credential' })
    const token = jwt.sign(
      { id: User._id },
      process.env.ACCESS_TOKEN
    );
    const { password, ...restOfDetails } = User._doc;
    res
      .cookie("access_token", token,)
      .status(200)
      .json({ msg: "Login Successfully", details: restOfDetails });
  } catch (error) {
    next(error);
  }
}
// export const login = async (req, res, next) => {
//     try {
//       if (process.env.NAME === req.body.name && process.env.PASSWORD === req.body.password) {
//         const User = await users.findOne({ name: req.body.name });
//         const token = jwt.sign(
//           { id: User._id },
//           process.env.ACCESS_TOKEN
//         );
//         const { password, ...restOfDetails } = User._doc;
//         res
//           .cookie("access_token", token,)
//           .status(200)
//           .json({ msg: "Login Successfully", details: restOfDetails });
//       } else {
//         const User = await users.findOne({ name: req.body.name });
//       if (!User) {
//         return res.status(200).json({ msg: 'Invalid Credential' })
//       }
//       const result = bcrypt.compareSync(req.body.password.trim(), User.password.trim());
//       if (result === false) return res.status(200).json({ msg: 'Invalid Credential' })
//       const token = jwt.sign(
//         { id: User._id },
//         process.env.ACCESS_TOKEN
//       );
//       const { password, ...restOfDetails } = User._doc;
//       res
//         .cookie("access_token", token,)
//         .status(200)
//         .json({ msg: "Login Successfully", details: restOfDetails });
//       }

//     } catch (error) {
//       next(error);
//     }
//   }

export const register = async (req, res, next) => {
  try {
    const data = await users.findOne({ name: req.body.name });
    if (data) {
      res.status(200).json({ msg: 'User Name Already Exist...' })
    } else {
      // const password = bcrypt.hashSync(req.body.password, 2);
      const password = bcrypt.hashSync('Admin@123', 2);

      const User = new users({
        ...req.body,
        password: password,
      });
      const result = await User.save();
      if (!result) {
        res.status(200).json({ msg: "User Not Created" });
      }
      const token = jwt.sign(
        { id: User._id, email: User.email },
        process.env.ACCESS_TOKEN
      );

      // res.status(200).json({ msg: "Register Successfully", token: token });
      res.status(200).json({ msg: "User Created Successfully", token: token });
    }

  } catch (error) {
    next(error)
  }
}
export const getUsers = async(req,res,next) =>{
  try {
      const result = await users.find()
      res.status(200).json(result)
  } catch (error) {
      
  }
}