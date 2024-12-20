import { Request, Response } from 'express';
import { BaseResponse } from "../shared/base.response";
import * as libroService from '../services/libro.service';
import { Libro } from "../entities/libro";
import { Message } from '../enums/messages';

export const insertarLibro = async (req: Request, res: Response) => {
    try {
        console.log('insertarLibro');
        console.log('req.body', req.body);
        const libro : Partial<Libro> = req.body;
        const newLibro : Libro = await libroService.insertarLibro(libro);
        if (!newLibro) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(newLibro,Message.INSERTADO_OK))
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarLibro = async (req: Request, res: Response)=>{
    try {
        const libros: Libro[] = await libroService.listarLibro();
        res.json(BaseResponse.success(libros));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
}

export const obtenerLibro = async (req: Request, res: Response)=>{
    try {
        const { idLibro } = req.params
        const libro: Libro = await libroService.obtenerLibro(Number(idLibro));
        if(!libro){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(libro));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
}

export const actualizarLibro = async (req: Request, res: Response)=>{
    try {
        const { idLibro } = req.params;
        const libro: Partial<Libro> = req.body;
        if(!(await libroService.obtenerLibro(Number(idLibro)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updateLibro: Libro = await  libroService.actualizarLibro(Number(idLibro),libro)
        res.json(BaseResponse.success(updateLibro, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
}

export const darbajaLibro = async (req: Request, res: Response)=>{
    try {
        const { idLibro } = req.params;
        if(!(await libroService.obtenerLibro(Number(idLibro)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await libroService.darbajaLibro(Number(idLibro));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));    
    }
}