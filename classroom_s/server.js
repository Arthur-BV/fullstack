import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import mRouter from './routers/router-main.js'
import uRouter from './routers/router-user.js';
import crRouter from './routers/router-classroom.js';
import lRouter from './routers/router-lesson.js';
import gRouter from './routers/router-group.js'
import ttRouter from './routers/router-timetable.js'

mongoose.connect('mongodb://localhost:27017/classrooms').then(() => {
  console.log("DB connected, OK!");
}).catch((err) => {
  console.log("DB connect error: ", err);
});

const PORT = process.env.PORT||3000;
const SERVER_IP = process.env.SERVER_IP||"127.0.0.1";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded(
  {
    extended: true 
  }
));

app.use('/', mRouter);
app.use('/', uRouter);
app.use('/', crRouter);
app.use('/', lRouter);
app.use('/', gRouter);
app.use('/', ttRouter);

app.listen(PORT, SERVER_IP, (err) => {
  if (err) {
    return console.log("Error: ", err);
  }

  console.log('Server started on', SERVER_IP, '- OK!');
});
