import { body } from 'express-validator';

export const usrValidator = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password should contain minimum 5 symbols').isLength({ min: 5}),
  body('userType', 'Usertype should contain minimum 3 symbols').isLength({ min: 3 }),
  body('fullName', 'Name should contain minimum 3 symbols').isLength({ min: 3}),
  body('avartarUrl', 'Avatar invalid URL').optional().isURL(),
];

export const usrUpdateValidator = [
  body('email', 'Invalid email format').isEmail(),
  body('userType', 'Usertype should contain minimum 3 symbols').isLength({ min: 3 }),
  body('fullName', 'Name should contain minimum 3 symbols').isLength({ min: 3}),
  body('avartarUrl', 'Avatar invalid URL').optional().isURL(),
];

export const crValidator = [
  body('classroomname', 'Name should contain minimum 3 symbols').isLength({ min: 3}),
  body('classroomtype', 'Type should contain minimum 3 symbols').isLength({ min: 3}),
  body('seatcount', 'Seat Count should contain numbers').isNumeric(),
];

export const lValidator = [
  body('name', 'Name should contain minimum 3 symbols').isLength({ min: 3}),
  body('duration', 'Duration should contain numbers').isNumeric(),
];

export const gValidator = [
  body('name', 'Name should contain minimum 3 symbols').isLength({ min: 3}),
  body('starttime').trim().isString().withMessage('Use correct DateTime format'),
];
