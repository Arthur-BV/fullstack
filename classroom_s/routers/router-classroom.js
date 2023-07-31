import express from 'express';
import { crValidator } from '../validators/validators.js';

import AddClassRoomController from '../controllers/classroom-add.js';
import ListClassRoomController from '../controllers/classroom-all.js';
import UpdateClassRoomController from '../controllers/classroom-update.js';
import DeleteClassRoomController from '../controllers/classroom-delete.js';
import ItemClassRoomController from '../controllers/classroom-item.js';

const crRouter = express.Router();

crRouter.get('/classroom', ListClassRoomController);
crRouter.get('/classroom/:id', ItemClassRoomController);
crRouter.post('/classroom', crValidator, AddClassRoomController);
crRouter.patch('/classroom/:id', crValidator, UpdateClassRoomController);
crRouter.delete('/classroom/:id', DeleteClassRoomController);

export default crRouter;
