import {Request, Response} from 'express';
import * as lectorService from '../services/lector.service';
import { Lector } from '../entities/lector';
import { BaseResponse } from '../shared/base.response';
import { Message } from '../enums/messages';

export const insertarLector = async (req: Request, res: Response) => {
    try {
        console.log('insertarLector')
        console.log('req.body',req.body)
        const lector: Partial<Lector> = req.body;
        const newLector: Lector = await lectorService.insertarLector(lector)
        res.json(BaseResponse.success(newLector, Message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));        
    }
};

export const listarLector = async (req: Request, res: Response) => {
    try {
        const lectores: Lector[] = await lectorService.listarLector();
        res.json(BaseResponse.success(lectores));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
};

export const obtenerLector = async (req: Request, res: Response) => {
    try {
        const {idLector} = req.params
        const lector: Lector = await lectorService.obtenerLector(Number(idLector));
        if(!lector){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(lector));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
};

export const actualizarLector = async (req: Request, res: Response) => {
    try {
        const { idLector } = req.params;
        const lector: Partial<Lector> = req.body;
        if(!(await lectorService.obtenerLector(Number(idLector)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updateLector: Lector = await  lectorService.actualizarLector(Number(idLector),lector)
        res.json(BaseResponse.success(updateLector, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
};

export const darBajaLector = async (req: Request, res: Response) => {
    try {
        const { idLector } = req.params;
        if(!(await lectorService.obtenerLector(Number(idLector)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await lectorService.darBajaLector(Number(idLector));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
};