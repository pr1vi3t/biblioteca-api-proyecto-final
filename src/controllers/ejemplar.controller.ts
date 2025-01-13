import { Request, Response } from 'express';
import { BaseResponse } from "../shared/base.response";
import * as ejemplarService from '../services/ejemplar.service';
import { Ejemplar } from '../entities/ejemplar';
import { Message } from '../enums/messages';
import { actualizarEjemplarSchema, insertarEjemplarSchema } from '../validators/ejemplar.schema';

export const insertarEjemplar = async (req: Request, res: Response) => {
    try {
        console.log('insertarEjemplar');
        console.log('req.body', req.body)
        const { error } = insertarEjemplarSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const ejemplar: Partial<Ejemplar> = req.body;
        const newEjemplar: Ejemplar = await ejemplarService.insertarEjemplar(ejemplar);
        if (!newEjemplar) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(newEjemplar, Message.INSERTADO_OK))
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarEjemplar = async (req: Request, res: Response) => {
    try {
        const ejemplares: Ejemplar[] = await ejemplarService.listarEjemplar();
        res.json(BaseResponse.success(ejemplares));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerEjemplar = async (req: Request, res: Response) => {
    try {
        const { idEjemplar } = req.params
        const ejemplar: Ejemplar = await ejemplarService.obtenerEjemplar(Number(idEjemplar));
        if (!ejemplar) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(ejemplar));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarEjemplar = async (req: Request, res: Response) => {
    try {
        const { idEjemplar } = req.params;
        const { error } = actualizarEjemplarSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const ejemplar: Partial<Ejemplar> = req.body;
        if (!(await ejemplarService.obtenerEjemplar(Number(idEjemplar)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updateEjemplar: Ejemplar = await ejemplarService.actualizarEjemplar(Number(idEjemplar), ejemplar)
        res.json(BaseResponse.success(updateEjemplar, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darbajaEjemplar = async (req: Request, res: Response) => {
    try {
        const { idEjemplar } = req.params;
        if (!(await ejemplarService.obtenerEjemplar(Number(idEjemplar)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await ejemplarService.darbajaEjemplar(Number(idEjemplar));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}