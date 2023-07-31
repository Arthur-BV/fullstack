import ClassRoomModel from '../models/model-classrooms.js';
import { validationResult } from 'express-validator';

const AddClassRoomController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const classroomDoc = new ClassRoomModel({
      classroomname: req.body.classroomname,
      classroomtype: req.body.classroomtype,
      seatcount: req.body.seatcount,
    });

    const classroom = await classroomDoc.save();

    res.json({
      classroom,
    });
  } catch (error) {
    console.log("Error creating ClassRoom: ", error);
    res.status(500).json({
      message: 'Enable to create ClassRoom'
    });
  };
};

export default AddClassRoomController;
