import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import lectorRouter from './routes/lector.route'

const app: Application = express();

app.use(morgan('dev'));

app.use('/api/v1/lectores',lectorRouter);

export default app;