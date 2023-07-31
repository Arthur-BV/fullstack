import express from 'express';

const mRouter = express.Router();

mRouter.get('/', (req, res) => {
  res.send('Hi-End Music !!!');
});

export default mRouter;