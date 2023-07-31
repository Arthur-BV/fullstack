import GroupsModel from '../models/model-groups.js';

const ListGroupController = async (req, res) => {
  try {
    const groups = await GroupsModel.find({});

    res.json(groups);
  } catch (error) {
    console.log("Error listing Groups: ", error);
    res.status(500).json({
      message: 'Enable to list Groups'
    });
  };
};

export default ListGroupController;
