import express from 'express'
import cors from 'cors';
import ExceptionHandler from './middlewares/exception-middleware.js';
import ApplicationLogger from './middlewares/logger-middleware.js';

const app = express();
app.use(cors());

//api routes rigesteration
app.get('/', (req, res) => {
    res.status(200).send('Patient portal backend is Up!');
})

app.use(ApplicationLogger);
app.use(ExceptionHandler);

export default app