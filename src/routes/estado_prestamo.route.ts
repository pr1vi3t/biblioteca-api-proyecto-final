import {Router} from 'express';
import { actualizarEstadoPrestamo, darBajaEstadoPrestamo, insertarEstadoPrestamo, listarEstadoPrestamo, obtenerEstadoPrestamo } from '../controllers/estado_prestamo.controller';

const router: Router = Router();

router.post('/', insertarEstadoPrestamo);
router.get('/', listarEstadoPrestamo);
router.get('/:idEstadoPrestamo', obtenerEstadoPrestamo);
router.put('/:idEstadoPrestamo', actualizarEstadoPrestamo);
router.delete('/:idEstadoPrestamo', darBajaEstadoPrestamo);

export default router;