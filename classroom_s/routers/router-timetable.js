import express from 'express';
// import { ttValidator } from '../validators/validators.js';
import AddTimeTableController from '../controllers/timetable-add.js';
import DeleteTimeTableController from '../controllers/timetable-delete.js';
import ListTimeTableController from '../controllers/timetable-all.js';

const ttRouter = express.Router();

ttRouter.get('/tt', ListTimeTableController);
ttRouter.post('/tt', AddTimeTableController);
// ttRouter.patch('/tt/:id', ttValidator, UpdateTimeTableController);
ttRouter.delete('/tt/:id', DeleteTimeTableController);

export default ttRouter;
