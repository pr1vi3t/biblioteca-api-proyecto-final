import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import lectorRouter from './routes/lector.route'
import editorialRouter from './routes/editorial.route'
import autorRouter from './routes/autor.route'

const app: Application = express();

app.use(morgan('dev'));

app.use('/api/v1/lectores',lectorRouter);
app.use('/api/v1/editoriales',editorialRouter);
app.use('/api/v1/autores',autorRouter);

export default app;