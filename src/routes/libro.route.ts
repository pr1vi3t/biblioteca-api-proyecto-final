import { Router } from "express";
import { actualizarLibro, darbajaLibro, insertarLibro, listarLibro, obtenerLibro } from "../controllers/libro.controller";

const router: Router = Router();

router.post('/', insertarLibro);
router.get('/', listarLibro);
router.get('/:idLibro', obtenerLibro);
router.put('/:idLibro', actualizarLibro);
router.delete('/:idLibro', darbajaLibro);

export default router;