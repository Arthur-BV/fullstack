import { validationResult } from 'express-validator';
import ClassRoomModel from '../models/model-classrooms.js';

const UpdateClassRoomController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    
    // const classroom = await ClassRoomModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );

    const classroom = await ClassRoomModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        classroomname: req.body.classroomname,
        classroomtype: req.body.classroomtype,
        seatcount: req.body.seatcount
      },
      {
        new: true
      }
    );

    if (classroom) {
      res.json(
        {
          classroom,
          message: "ClassRoom Updated!",
        }
      );
    } else {
      res.json(
        {
          classroom,
          message: "Invalid ClassRoom ID!",
        }
      );
    }
  } catch (error) {
    console.log("Error updating ClassRoom: ", error);
    res.status(500).json({
      message: 'Enable to update ClassRoom'
    })
  }  
};

export default UpdateClassRoomController;

/*
db.classrooms.updateOne( { classroomname: "Dart Lovelace" },
{
  $set: {
    classroomname: "Dart Luvelace"
  },
  $currentDate: { lastUpdated: true }
})
 */