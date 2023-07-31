import TimeTableModel from '../models/model-timetable.js';

const AddTimeTableController = async (req, res) => {
  try {
    const timetableDoc = new TimeTableModel(
      {
        classroom_id: req.body.classroom_id,
        lesson_id: req.body.lesson_id,
        teacher_id: req.body.teacher_id,
        group_id: req.body.group_id,
        date: req.body.date,
      }
    );

    const timetable = await timetableDoc.save();

    res.json({
      timetable,
    });
  } catch (error) {
    console.log("Error creating TimeTable: ", error);
    res.status(500).json({
      message: 'Enable to create TimeTable'
    });
  };
};

export default AddTimeTableController;
