import ClassRoomModel from '../models/model-classrooms.js';
import { validationResult } from 'express-validator';

const ListClassRoomController = async (req, res) => {
  try {
    const classroom = await ClassRoomModel.find({});

    res.json(classroom);
  } catch (error) {
    console.log("Error listing ClassRooms: ", error);
    res.status(500).json({
      message: 'Enable to list ClassRooms'
    });
  };
};

export default ListClassRoomController;
