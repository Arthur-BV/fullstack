import LessonModel from '../models/model-lessons.js';

const DeleteLessonController = async (req, res) => {
  try {
    // const lesson = await LessonModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );
    
    const lesson = await LessonModel.findOneAndDelete(
      {
        _id: req.params.id,
      }, 
    );
    // { "acknowledged" : true, "deletedCount" : 1 }  

    if (lesson) {
      res.json({
        lesson,
        message: "Lesson Deleted!",
      });        
    } else {
      res.json({
        lesson,
        message: "Invalid Lesson ID!",
      });    
    }
  } catch (error) {
    console.log("Error deleting Lesson: ", error);
    res.status(500).json({
      message: 'Enable to delete Lesson'
    })
  }  
};

export default DeleteLessonController;
