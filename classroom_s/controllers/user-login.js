import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/model-users.js';

const LoginUserController = async (req, res) => {
  try {
    const isUser = await UserModel.findOne({ "email" : req.body.email });

    if (!isUser) {
      return res.status(404).json({
        message: 'Invalid User'
      });
    }

    const isValidPasswd = await bcrypt.compare(req.body.password, isUser._doc.passwordHash);

    if (!isValidPasswd) {
      return res.status(403).json({
        message: 'Invalid Login or Password'
      });
    }

    const jtoken = jwt.sign(
      {
        _id: isUser._id,
      },
      'secret123456',
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = isUser._doc;

    res.json({
      ...userData,
      jtoken,
    });    
  } catch (error) {
    console.log("Error authorizing User: ", error)
    res.status(500).json({
      message: 'Enable to login'
    });
  }
};

export default LoginUserController;
