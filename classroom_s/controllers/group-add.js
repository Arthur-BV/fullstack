import { validationResult } from 'express-validator';

import GroupModel from '../models/model-groups.js';

const AddGroupController = async (req, res) => {
  try {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    
    const dt = new Date();
    // console.log("Date is: ", dt)
    const groupDoc = new GroupModel({
      name: req.body.name,
      starttime: dt,
    });

    const group = await groupDoc.save();

    res.json({
      group,
    });
  } catch (error) {
    console.log("Error creating Group: ", error);
    res.status(500).json({
      message: 'Enable to create Group'
    });
  };
};

export default AddGroupController;
