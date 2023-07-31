import express from 'express';
import { gValidator } from '../validators/validators.js';

import AddGroupController from '../controllers/group-add.js';
import ListGroupController from '../controllers/group-all.js';
import UpdateGroupController from '../controllers/grouop-update.js';
import DeleteGroupController from '../controllers/group-delete.js';
import ItemGroupController from '../controllers/group-item.js';

const gRouter = express.Router();

gRouter.get('/group', ListGroupController);
gRouter.get('/group/:id', ItemGroupController);
gRouter.post('/group', gValidator, AddGroupController);
gRouter.patch('/group/:id', gValidator, UpdateGroupController);
gRouter.delete('/group/:id', DeleteGroupController);

export default gRouter;
