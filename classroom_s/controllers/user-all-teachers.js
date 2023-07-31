import UserModel from '../models/model-users.js';

const ListTeachersController = async (req, res) => {
  try {
    console.log(req.param.usertype);
    const user = await UserModel.find(
      {
        userType: req.params.usertype,
      },
      { 
        "passwordHash" : false,
        "createdAt" : false,
        "updatedAt" : false,
        "__v" : false,  
      }
    );

    res.json({
      user,
    });    
  } catch (error) {
    console.log("Error list Teachers: ", error)
    res.status(500).json({
      message: 'Enable to list teachers'
    });
  }
};

export default ListTeachersController;
