import {Router} from 'express';
import { actualizarRol, darBajaRol, insertarRol, listarRoles, obtenerRol } from '../controllers/rol.controller';

const router: Router = Router();

router.post('/', insertarRol);
router.get('/', listarRoles);
router.get('/:idRol', obtenerRol);
router.put('/:idRol', actualizarRol);
router.delete('/:idRol', darBajaRol);

export default router;