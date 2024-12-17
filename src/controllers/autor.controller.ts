import {Request, Response} from 'express';
import * as autorService from '../services/autor.service';

export const insertarAutor = async (req: Request, res: Response) => {
    const autor = req.body;
    const response = autorService.insertarAutor(autor);
    res.json(response);
};

export const listarAutor = async (req: Request, res: Response) => {
    const response = autorService.listarAutor();
    res.json(response);
};

export const obtenerAutor = async (req: Request, res: Response) => {
    const { idAutor } = req.params;
    const response = autorService.obtenerAutor(Number(idAutor));
    res.json(response);
};

export const actualizarAutor = async (req: Request, res: Response) => {
    const { idAutor } = req.params;
    const autor = req.body;
    const response = autorService.actualizarAutor(Number(idAutor), autor);
    res.json(response);
};

export const darBajaAutor = async (req: Request, res: Response) => {
    const { idAutor } = req.params;
    const response = autorService.darBajaAutor(Number(idAutor));
    res.json(response);
};
