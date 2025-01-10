import { Request, Response } from 'express';
import { BaseResponse } from "../shared/base.response";
import * as prestamoService from '../services/prestamo.service';
import { Prestamo } from "../entities/prestamo";
import { Message } from '../enums/messages';
import { actualizarPrestamoSchema, insertarPrestamoSchema } from '../validators/prestamo.schema';

export const insertarPrestamo = async (req: Request, res: Response) => {
    try {
        console.log('insertarPrestamo');
        const { error } = insertarPrestamoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const prestamo: Partial<Prestamo> = req.body;
        const newPrestamo: Prestamo = await prestamoService.insertarPrestamo(prestamo);
        if (!newPrestamo) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(newPrestamo, Message.INSERTADO_OK))
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarPrestamo = async (req: Request, res: Response) => {
    try {
        const prestamos: Prestamo[] = await prestamoService.listarPrestamo();
        res.json(BaseResponse.success(prestamos));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerPrestamo = async (req: Request, res: Response) => {
    try {
        const { idPrestamo } = req.params
        const prestamo: Prestamo = await prestamoService.obtenerPrestamo(Number(idPrestamo));
        if (!prestamo) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(prestamo));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarPrestamo = async (req: Request, res: Response) => {
    try {
        const { idPrestamo } = req.params;
        const { error } = actualizarPrestamoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const prestamo: Partial<Prestamo> = req.body;
        if (!(await prestamoService.obtenerPrestamo(Number(idPrestamo)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updatePrestamo: Prestamo = await prestamoService.actualizarPrestamo(Number(idPrestamo), prestamo)
        res.json(BaseResponse.success(updatePrestamo, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darbajaPrestamo = async (req: Request, res: Response) => {
    try {
        const { idPrestamo } = req.params;
        if (!(await prestamoService.obtenerPrestamo(Number(idPrestamo)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await prestamoService.darbajaPrestamo(Number(idPrestamo));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}