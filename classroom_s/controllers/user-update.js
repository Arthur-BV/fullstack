import { validationResult } from 'express-validator';
import UserModel from '../models/model-users.js';

const UpdateUserController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    // const user = await UserModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );

    const user = await UserModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        fullName: req.body.fullName,
        email: req.body.email,
        userType: req.body.userType,
        avatarUrl: req.body.avatarUrl,
      },
      {
        new: true
      }
    );

    res.json({
      user,
    });
  } catch (error) {
    console.log("Error updating User: ", error);
    res.status(500).json({
      message: 'Enable to update User'
    });    
  }
};

export default UpdateUserController;
