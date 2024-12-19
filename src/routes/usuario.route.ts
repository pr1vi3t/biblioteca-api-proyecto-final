import {Router} from 'express';
import { actualizarUsuario, darbajaUsuario, insertarUsuario, listarUsuarios, obtenerUsuario } from '../controllers/usuario.controller';

const router: Router = Router();

router.post('/', insertarUsuario);
router.get('/', listarUsuarios);
router.get('/:idUsuario', obtenerUsuario);
router.put('/:idUsuario', actualizarUsuario);
router.delete('/:idUsuario', darbajaUsuario);

export default router;