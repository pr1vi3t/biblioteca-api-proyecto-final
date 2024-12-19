import {Request, Response} from 'express';
import * as autorService from '../services/autor.service';
import { Autor } from '../entities/autor';
import { BaseResponse } from '../shared/base.response';
import { Message } from '../enums/messages';

export const insertarAutor = async (req: Request, res: Response) => {
    try {
        console.log('insertarAutor')
        console.log('req.body',req.body)
        const autor : Partial<Autor> = req.body;
        const newAutor : Autor =  await autorService.insertarAutor(autor);
        res.json(BaseResponse.success(newAutor));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarAutor = async (req: Request, res: Response) => {
    try {
        const autores : Autor[] = await autorService.listarAutor();
        res.json(BaseResponse.success(autores));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerAutor = async (req: Request, res: Response) => {
    try {
        const { idAutor } = req.params;
        const autor : Autor = await autorService.obtenerAutor(Number(idAutor));
        if (!autor) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404))
            return;
        }
        res.json(BaseResponse.success(Autor));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarAutor = async (req: Request, res: Response) => {
    try {
        const { idAutor } = req.params;
        const autor : Partial<Autor> = req.body;
        if (!(await autorService.obtenerAutor(Number(idAutor)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updateAutor :Autor = await autorService.actualizarAutor(Number(idAutor),autor);
        res.json(BaseResponse.success(updateAutor, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaAutor = async (req: Request, res: Response) => {
    try {
        const { idAutor } = req.params;
        if (!(await autorService.obtenerAutor(Number(idAutor)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404))
            return;
        }
        await autorService.darBajaAutor(Number(idAutor));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
