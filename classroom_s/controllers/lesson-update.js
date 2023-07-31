import { validationResult } from 'express-validator';

import LessonModel from '../models/model-lessons.js';

const UpdateLessonController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    
    // const lesson = await LessonModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );

    const lesson = await LessonModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        duration: req.body.duration
      },
      {
        new: true
      }
    );

    res.json({
      lesson,
    });
  } catch (error) {
    console.log("Error updating Lesson: ", error);
    res.status(500).json({
      message: 'Enable to update Lesson'
    });
  };
};

export default UpdateLessonController;
