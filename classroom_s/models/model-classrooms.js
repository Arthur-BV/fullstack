import mongoose from 'mongoose';

const ClassRoomSchema = new mongoose.Schema({
  classroomname: {
    type: String,
    required: true,
    unique: true,
  },
  classroomtype: {
    type: String,
    required: true,
  },
  seatcount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('ClassRooms', ClassRoomSchema);