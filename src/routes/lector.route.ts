import {Router} from 'express';
import { actualizarLector, darBajaLector, insertarLector, listarLector, obtenerLector } from '../controllers/lector.controller';

const router: Router = Router();

router.post('/', insertarLector);
router.get('/', listarLector);
router.get('/:idLector', obtenerLector);
router.put('/:idLector', actualizarLector);
router.delete('/:idLector', darBajaLector);

export default router;