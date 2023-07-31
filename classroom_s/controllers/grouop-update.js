import { validationResult } from 'express-validator';

import GroupModel from '../models/model-groups.js';

const UpdateGroupController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    
    // const group = await GroupModel.findById(
    //   {
    //     _id: req.params.id,
    //   }, 
    // );

    const group = await GroupModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        starttime: req.body.starttime,
      }
    );
    
    if (group) {
      res.json(
        {
          group,
          message: "Group Updated!",
        }
      );  
    } else {
      res.json(
        {
          group,
          message: "Invalid Group ID!",
        }
      );
    }
  } catch (error) {
    console.log("Error updating Group: ", error);
    res.status(500).json({
      message: 'Enable to update Group'
    });
  };
};

export default UpdateGroupController;
