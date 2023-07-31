import UserModel from '../models/model-users.js';

const DeleteUserController = async (req, res) => {
  try {
    // const user = await UserModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );
    const user = await UserModel.findOneAndDelete(
      {
        _id: req.params.id,
      }, 
    );

    if (user) {
      res.json({
        user,
        message: "User Deleted!",
      });        
    } else {
      res.json({
        user,
        message: "Invalid User ID!",
      });    
      }
  } catch (error) {
    console.log("Error deleting User: ", error)
    res.status(500).json({
      message: 'Enable to delete user'
    });
  }
};

export default DeleteUserController;
