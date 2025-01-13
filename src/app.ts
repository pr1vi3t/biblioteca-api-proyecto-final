import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import lectorRouter from './routes/lector.route'
import editorialRouter from './routes/editorial.route'
import autorRouter from './routes/autor.route'
import rolRouter from './routes/rol.route'
import categoriaRouter from './routes/categoria.route'
import usuarioRouter from './routes/usuario.route'
import libroRouter from './routes/libro.route'
import ejemplarRouter from './routes/ejemplar.route'
import estadoPrestamoRouter from './routes/estado_prestamo.route'
import prestamoRouter from './routes/prestamo.route'
import { AppDataSource } from './config/db.config';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/lectores',lectorRouter);
app.use('/api/v1/editoriales',editorialRouter);
app.use('/api/v1/autores',autorRouter);
app.use('/api/v1/roles',rolRouter);
app.use('/api/v1/usuarios',usuarioRouter);
app.use('/api/v1/categorias',categoriaRouter);
app.use('/api/v1/libros',libroRouter);
app.use('/api/v1/ejemplares',ejemplarRouter);
app.use('/api/v1/estados-prestamo',estadoPrestamoRouter);
app.use('/api/v1/prestamos',prestamoRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;