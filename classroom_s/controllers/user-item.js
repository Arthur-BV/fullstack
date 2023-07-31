import jwt from 'jsonwebtoken';
import UserModel from '../models/model-users.js';

const ItemUserController = async (req, res) => {
  try {
    const user = await UserModel.find(
      {
        _id: req.params.id
      }, 
      { 
        "passwordHash" : false,
        "createdAt" : false,
        "updatedAt" : false,
        "__v" : false,  
      }
    );

    res.json(user);    
  } catch (error) {
    console.log("Error list Users: ", error)
    res.status(500).json({
      message: 'Enable to list user'
    });
  }
};

export default ItemUserController;
