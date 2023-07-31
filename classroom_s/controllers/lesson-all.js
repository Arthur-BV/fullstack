import LessonsModel from '../models/model-lessons.js';

const ListLessonController = async (req, res) => {
  try {
    const lessons = await LessonsModel.find({});

    res.json(lessons);
  } catch (error) {
    console.log("Error listing Lessons: ", error);
    res.status(500).json({
      message: 'Enable to list Lessons'
    });
  };
};

export default ListLessonController;
