import { Request, Response } from 'express';
import * as estadoPrestamoService from '../services/estado_prestamo.service';
import { BaseResponse } from '../shared/base.response';
import { Message } from '../enums/messages';
import { EstadoPrestamo } from '../entities/estado_prestamo';
import { actualizarEstadoPrestamoSchema, insertarEstadoPrestamoSchema } from '../validators/estado_prestamo.schema';

export const insertarEstadoPrestamo = async (req: Request, res: Response) => {
    try {
        console.log('insertarEstadoPrestamo')
        const { error } = insertarEstadoPrestamoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const estadoPrestamo: Partial<EstadoPrestamo> = req.body;
        const newEstadoPrestamo: EstadoPrestamo = await estadoPrestamoService.insertarEstadoPrestamo(estadoPrestamo)
        res.json(BaseResponse.success(newEstadoPrestamo, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarEstadoPrestamo = async (req: Request, res: Response) => {
    try {
        const estadosPrestamo: EstadoPrestamo[] = await estadoPrestamoService.listarEstadoPrestamo();
        res.json(BaseResponse.success(estadosPrestamo));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerEstadoPrestamo = async (req: Request, res: Response) => {
    try {
        const { idEstadoPrestamo } = req.params
        const estadoPrestamo: EstadoPrestamo = await estadoPrestamoService.obtenerEstadoPrestamo(Number(idEstadoPrestamo));
        if (!estadoPrestamo) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(estadoPrestamo));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarEstadoPrestamo = async (req: Request, res: Response) => {
    try {
        const { idEstadoPrestamo } = req.params;
        const { error } = actualizarEstadoPrestamoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const estadoPrestamo: Partial<EstadoPrestamo> = req.body;
        if (!(await estadoPrestamoService.obtenerEstadoPrestamo(Number(idEstadoPrestamo)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updateEstadoPrestamo: EstadoPrestamo = await estadoPrestamoService.actualizarEstadoPrestamo(Number(idEstadoPrestamo), estadoPrestamo)
        res.json(BaseResponse.success(updateEstadoPrestamo, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaEstadoPrestamo = async (req: Request, res: Response) => {
    try {
        const { idEstadoPrestamo } = req.params;
        if (!(await estadoPrestamoService.obtenerEstadoPrestamo(Number(idEstadoPrestamo)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await estadoPrestamoService.darBajaEstadoPrestamo(Number(idEstadoPrestamo));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
};