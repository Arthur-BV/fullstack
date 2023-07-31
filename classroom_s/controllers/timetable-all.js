import TimeTableModel from '../models/model-timetable.js';

const ListTimeTableController = async (req, res) => {
  try {
    const timetable = await TimeTableModel.find({});

    res.json(timetable);
  } catch (error) {
    console.log("Error listing TimeTables: ", error);
    res.status(500).json({
      message: 'Enable to list TimeTables'
    });
  };
};

export default ListTimeTableController;
