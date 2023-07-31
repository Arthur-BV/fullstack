import mongoose from 'mongoose';

const GroupsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    starttime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model('Groups', GroupsSchema);