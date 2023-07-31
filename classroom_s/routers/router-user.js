import express from 'express';
import { usrUpdateValidator, usrValidator } from '../validators/validators.js';

import AddUserController from '../controllers/user-add.js';
import ListUserController from '../controllers/user-all.js';
import LoginUserController from '../controllers/user-login.js';
import UpdateUserController from '../controllers/user-update.js';
import DeleteUserController from '../controllers/user-delete.js';
import ListTeachersController from '../controllers/user-all-teachers.js';
import ItemUserController from '../controllers/user-item.js'

const uRouter = express.Router();

uRouter.get('/user', ListUserController);
uRouter.get('/user/:id', ItemUserController);
uRouter.get('/user/:usertype', ListTeachersController);
uRouter.post('/user', usrValidator, AddUserController);
uRouter.post('/user/login', usrValidator, LoginUserController);
// uRouter.patch('/user/:id', usrUpdateValidator, UpdateUserController);
uRouter.patch('/user/:id', UpdateUserController);
uRouter.delete('/user/:id', DeleteUserController);

export default uRouter;
