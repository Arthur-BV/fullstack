import GroupModel from '../models/model-groups.js';

const DeleteGroupController = async (req, res) => {
  try {
    // const group = await GroupModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );
    
    const group = await GroupModel.findOneAndDelete(
      {
        _id: req.params.id,
      }, 
    );
    // { "acknowledged" : true, "deletedCount" : 1 }  

    if (group) {
      res.json({
        group,
        message: "Group Deleted!",
      });        
    } else {
      res.json({
        group,
        message: "Invalid Group ID!",
      });    
    }
  } catch (error) {
    console.log("Error deleting Group: ", error);
    res.status(500).json({
      message: 'Enable to delete Group'
    })
  }  
};

export default DeleteGroupController;
