import { validationResult } from 'express-validator';

import LessonModel from '../models/model-lessons.js';

const AddLessonController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    
    const lessonDoc = new LessonModel({
      name: req.body.name,
      duration: req.body.duration,
    });

    const lesson = await lessonDoc.save();

    res.json({
      lesson,
    });
  } catch (error) {
    console.log("Error creating Lesson: ", error);
    res.status(500).json({
      message: 'Enable to create Lesson'
    });
  };
};

export default AddLessonController;
