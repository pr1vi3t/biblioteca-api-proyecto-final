import { Request, Response } from 'express';
import * as editorialService from '../services/editorial.service';
import { Editorial } from '../entities/editorial';
import { BaseResponse } from '../shared/base.response';
import { Message } from '../enums/messages';

export const insertarEditorial = async (req: Request, res: Response) => {
    try {
        console.log('insertarEditorial')
        console.log('req.body', req.body)
        const editorial: Partial<Editorial> = req.body;
        const newEditorial: Editorial = await editorialService.insertarEditorial(editorial)
        res.json(BaseResponse.success(newEditorial, Message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarEditorial = async (req: Request, res: Response) => {
    try {
        const editoriales: Editorial[] = await editorialService.listarEditorial();
        res.json(BaseResponse.success(editoriales));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerEditorial = async (req: Request, res: Response) => {
    try {
        const { idEditorial } = req.params
        const editorial: Editorial = await editorialService.obtenerEditorial(Number(idEditorial));
        if (!editorial) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(editorial));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarEditorial = async (req: Request, res: Response) => {
    try {
        const { idEditorial } = req.params;
        const editorial: Partial<Editorial> = req.body;
        if (!(await editorialService.obtenerEditorial(Number(idEditorial)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updateEditorial: Editorial = await editorialService.actualizarEditorial(Number(idEditorial), editorial)
        res.json(BaseResponse.success(updateEditorial, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaEditorial = async (req: Request, res: Response) => {
    try {
        const { idEditorial } = req.params;

        if (!(await editorialService.obtenerEditorial(Number(idEditorial)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }

        const hayLibrosAsociados = await editorialService.verificarRelaciones(Number(idEditorial));
        if (hayLibrosAsociados) {
            res.status(409).json(BaseResponse.error(Message.ELIMINADO_ERROR, 409));
            return;
        }

        await editorialService.darBajaEditorial(Number(idEditorial));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};