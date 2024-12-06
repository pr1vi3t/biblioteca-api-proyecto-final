import {Router} from 'express';
import { actualizarEditorial, darBajaEditorial, insertarEditorial, listarEditorial, obtenerEditorial } from '../controllers/editorial.controller';

const router: Router = Router();

router.post('/', insertarEditorial);
router.get('/', listarEditorial);
router.get('/:idEditorial', obtenerEditorial);
router.put('/:idEditorial', actualizarEditorial);
router.delete('/:idEditorial', darBajaEditorial);

export default router;