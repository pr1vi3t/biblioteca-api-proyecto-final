import {Request, Response} from 'express';
import * as lectorService from '../services/lector.service';
import { Lector } from '../entities/lector';
import { BaseResponse } from '../shared/base.response';

export const insertarLector = async (req: Request, res: Response) => {
    try {
        console.log('insertarLector')
        console.log('req.body',req.body)
        const lector: Partial<Lector> = req.body;
        const newProveedor: Lector = await lectorService.insertarLector(lector)
        res.json(BaseResponse.success(newProveedor));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));    
    }
};

export const listarLector = async (req: Request, res: Response) => {
    const response = lectorService.listarLector();
    res.json(response);
};

export const obtenerLector = async (req: Request, res: Response) => {
    const { idLector } = req.params;
    const response = lectorService.obtenerLector(Number(idLector));
    res.json(response);
};

export const actualizarLector = async (req: Request, res: Response) => {
    const { idLector } = req.params;
    const lector = req.body;
    const response = lectorService.actualizarLector(Number(idLector), lector);
    res.json(response);
};

export const darBajaLector = async (req: Request, res: Response) => {
    const { idLector } = req.params;
    const response = lectorService.darBajaLector(Number(idLector));
    res.json(response);
};