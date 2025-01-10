import { Router } from "express";
import { actualizarPrestamo, darbajaPrestamo, insertarPrestamo, listarPrestamo, obtenerPrestamo } from "../controllers/prestamo.controller";

const router: Router = Router();

router.post('/', insertarPrestamo);
router.get('/', listarPrestamo);
router.get('/:idPrestamo', obtenerPrestamo);
router.put('/:idPrestamo', actualizarPrestamo);
router.delete('/:idPrestamo', darbajaPrestamo);

export default router;