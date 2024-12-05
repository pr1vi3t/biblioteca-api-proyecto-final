import {Router} from 'express';
import { actualizarLector, darBajaLector, insertarLector, listarLectores, obtenerLector } from '../controllers/lector.controller';

const router: Router = Router();

router.post('/', insertarLector);
router.get('/', listarLectores);
router.get('/:idLector', obtenerLector);
router.put('/:idLector', actualizarLector);
router.delete('/:idLector', darBajaLector);

export default router;