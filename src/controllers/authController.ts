import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "";

interface LoginUser {
    id: number,
    email: string,
    password: string,
    name: string
}

export class AuthController {
    private users: LoginUser[] = [];

    async register(req: Request, res: Response): Promise<Response> {
        const {name, password, email} = req.body;

        if (!name || !password || !email) {
            return res.status(400).json({mensagem: "lol"});
        }

        const usuarioExistente = this.users.find(u => u.email === email)
        if (usuarioExistente) {
            return res.status(400).json({mensagem: "Email já cadastrado"});
        }

        const passHash = await bcrypt.hash(password, 10);

        const novoUsuario: LoginUser = {id: this.users.length + 1, name, password: passHash, email};

        this.users.push(novoUsuario);

        return res.status(201).json({mensagem: "Usuário cadastrado"});
    }
    async login(req: Request, res: Response): Promise<Response> {
        const {password, email} = req.body;

        const usuario = this.users.find(u => u.email === email);
        if(!usuario) {
            return res.status(401).json({mensagem: "lol2"});
        }

        const senhaValida = await bcrypt.compare(password, usuario.password);
        if (!senhaValida) {
            return res.status(401).json({mensagem: "Senha incorreta"});
        }
        const token = jwt.sign({nomeD: usuario.name}, JWT_SECRET, {expiresIn: "1h"});

        return res.status(200);
    }
}