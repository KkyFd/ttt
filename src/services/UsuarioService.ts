import {UsuarioRepository} from '../repositories/UsuarioRepository';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Usuario, UsuarioAttributes } from '../models/Usuario';

export class UsuarioService{
    private usuarioRepository: UsuarioRepository;

    constructor () {
        this.usuarioRepository = new UsuarioRepository();
    }
}