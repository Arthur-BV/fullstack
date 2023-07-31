import express from 'express';
import { lValidator } from '../validators/validators.js';

import AddLessonController from '../controllers/lesson-add.js';
import ListLessonController from '../controllers/lesson-all.js';
import UpdateLessonController from '../controllers/lesson-update.js';
import DeleteLessonController from '../controllers/lesson-delete.js';
import ItemLessonController from '../controllers/lesson-item.js';

const lRouter = express.Router();

lRouter.get('/lesson', ListLessonController);
lRouter.get('/lesson/:id', ItemLessonController);
lRouter.post('/lesson', lValidator, AddLessonController);
lRouter.patch('/lesson/:id', lValidator, UpdateLessonController);
lRouter.delete('/lesson/:id', DeleteLessonController);

export default lRouter;
