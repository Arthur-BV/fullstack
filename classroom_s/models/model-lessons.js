import mongoose from 'mongoose';

const LessonsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    duration: { // in hours
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model('Lessons', LessonsSchema);