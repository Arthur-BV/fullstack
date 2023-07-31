import GroupsModel from '../models/model-groups.js';

const ItemGroupController = async (req, res) => {
  try {
    const groups = await GroupsModel.find({
      _id: req.params.id,
    });

    res.json(groups);
  } catch (error) {
    console.log("Error listing Groups: ", error);
    res.status(500).json({
      message: 'Enable to list Groups'
    });
  };
};

export default ItemGroupController;
