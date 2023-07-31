import mongoose from 'mongoose';

const TimeTableSchema = new mongoose.Schema(
  {
    classroom_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ClassRooms",
    },
    lesson_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Lessons",
    },
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    group_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Groups",
    },
    date: {
      type: Date,
      required: true,
    } 
  }, 
  {
    timestamps: true,
  }
);

export default mongoose.model('TimeTable', TimeTableSchema, 'timetable');