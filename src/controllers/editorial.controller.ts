import {Request, Response} from 'express';
import * as editorialService from '../services/editorial.service';

export const insertarEditorial = async (req: Request, res: Response) => {
    const editorial = req.body;
    const response = editorialService.insertarEditorial(editorial);
    res.json(response);
};

export const listarEditorial = async (req: Request, res: Response) => {
    const response = editorialService.listarEditorial();
    res.json(response);
};

export const obtenerEditorial = async (req: Request, res: Response) => {
    const { idEditorial } = req.params;
    const response = editorialService.obtenerEditorial(Number(idEditorial));
    res.json(response);
};

export const actualizarEditorial = async (req: Request, res: Response) => {
    const { idEditorial } = req.params;
    const editorial = req.body;
    const response = editorialService.actualizarEditorial(Number(idEditorial), editorial);
    res.json(response);
};

export const darBajaEditorial = async (req: Request, res: Response) => {
    const { idEditorial } = req.params;
    const response = editorialService.darBajaEditorial(Number(idEditorial));
    res.json(response);
};