import {Request, Response} from 'express';
import * as proveedorService from '../services/lector.service';

export const insertarLector = async (req: Request, res: Response) => {
    const proveedor = req.body;
    const response = proveedorService.insertarLector(proveedor);
    res.json(response);
};

export const listarLectores = async (req: Request, res: Response) => {
    const response = proveedorService.listarLectores();
    res.json(response);
};

export const obtenerLector = async (req: Request, res: Response) => {
    const { idLector } = req.params;
    const response = proveedorService.obtenerLector(Number(idLector));
    res.json(response);
};

export const actualizarLector = async (req: Request, res: Response) => {
    const { idLector } = req.params;
    const proveedor = req.body;
    const response = proveedorService.actualizarLector(Number(idLector), proveedor);
    res.json(response);
};

export const darBajaLector = async (req: Request, res: Response) => {
    const { idLector } = req.params;
    const response = proveedorService.darBajaLector(Number(idLector));
    res.json(response);
};