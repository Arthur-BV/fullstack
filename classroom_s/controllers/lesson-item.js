import LessonsModel from '../models/model-lessons.js';

const ItemLessonController = async (req, res) => {
  try {
    const lessons = await LessonsModel.find({
      _id: req.params.id
    });

    res.json(lessons);
  } catch (error) {
    console.log("Error listing Lessons: ", error);
    res.status(500).json({
      message: 'Enable to list Lessons'
    });
  };
};

export default ItemLessonController;
