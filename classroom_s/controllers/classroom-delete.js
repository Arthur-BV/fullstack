import ClassRoomModel from '../models/model-classrooms.js';

const DeleteClassRoomController = async (req, res) => {
  try {
    // const classroom = await ClassRoomModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );

    const classroom = await ClassRoomModel.findOneAndDelete(
      {
        _id: req.params.id,
      }, 
    );
    // { "acknowledged" : true, "deletedCount" : 1 }  

    if (classroom) {
      res.json({
        classroom,
        message: "ClassRoom Deleted!",
      });        
    } else {
      res.json({
        classroom,
        message: "Invalid ClassRoom ID!",
      });        
    }
  } catch (error) {
    console.log("Error deleting ClassRoom: ", error);
    res.status(500).json({
      message: 'Enable to delete ClassRoom'
    })
  }  
};

export default DeleteClassRoomController;
