import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import lectorRouter from './routes/lector.route'
import editorialRouter from './routes/editorial.route'

const app: Application = express();

app.use(morgan('dev'));

app.use('/api/v1/lectores',lectorRouter);
app.use('/api/v1/editoriales',editorialRouter);

export default app;