import {Router} from 'express';
import { actualizarAutor, darBajaAutor, insertarAutor, listarAutor, obtenerAutor } from '../controllers/autor.controller';

const router: Router = Router();

router.post('/', insertarAutor);
router.get('/', listarAutor);
router.get('/:idAutor', obtenerAutor);
router.put('/:idAutor', actualizarAutor);
router.delete('/:idAutor', darBajaAutor);

export default router;