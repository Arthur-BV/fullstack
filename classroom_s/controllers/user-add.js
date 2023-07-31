import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/model-users.js';
import { validationResult } from 'express-validator';

const AddUserController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
  
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const userDoc = new UserModel({
      fullName: req.body.fullName,
      email: req.body.email,
      passwordHash: hashedPassword,
      userType: req.body.userType,
      avatarUrl: req.body.avatarUrl,
    });
  
    const user = await userDoc.save();

    const jtoken = jwt.sign(
      {
        _id: user._id,
      },
      'secret123456',
      {
        expiresIn: '30d'
      }
    );
  
    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      jtoken,
    });    
  } catch (error) {
    console.log("Error registering User: ", error)
    res.status(500).json({
      message: 'Enable to register user'
    });
  }
};

export default AddUserController;
