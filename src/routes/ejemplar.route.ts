import {Router} from 'express';
import { actualizarEjemplar, darbajaEjemplar, insertarEjemplar, listarEjemplar, obtenerEjemplar } from '../controllers/ejemplar.controller';

const router: Router = Router();

router.post('/', insertarEjemplar);
router.get('/', listarEjemplar);
router.get('/:idEjemplar', obtenerEjemplar);
router.put('/:idEjemplar', actualizarEjemplar);
router.delete('/:idEjemplar', darbajaEjemplar);

export default router;