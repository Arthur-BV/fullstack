import TimeTableModel from '../models/model-timetable.js';

const DeleteTimeTableController = async (req, res) => {
  try {
    const timetable = await TimeTableModel.findOneAndDelete(
      {
        _id: req.params.id,
      }, 
    );

    if (timetable) {
      res.json({
        timetable,
        message: "TimeTable Deleted!",
      });        
    } else {
      res.json({
        timetable,
        message: "Invalid TimeTable ID!",
      });    
    }
  } catch (error) {
    console.log("Error deleting TimeTable: ", error);
    res.status(500).json({
      message: 'Enable to delete TimeTable'
    })
  }  
};

export default DeleteTimeTableController;
