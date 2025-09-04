import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "";

interface LoginUser {
    id: number,
    email: string,
    senha: string,
    nome: string
}

export class AuthController {
    private users: LoginUser[] = [];

    async register(req: Request, res: Response): Promise<Response> {
        const {nome, senha, email} = req.body;

        if (!nome || !senha || !email) {
            return res.status(400).json({mensagem: "lol"});
        }

        const usuarioExistente = this.users.find(u => u.email === email)
        if (usuarioExistente) {
            return res.status(400).json({mensagem: "Email já cadastrado"});
        }

        const passHash = await bcrypt.hash(senha, 10);

        const novoUsuario: LoginUser = {id: this.users.length + 1, nome, senha: passHash, email};

        this.users.push(novoUsuario);

        return res.status(201).json({mensagem: "Usuário cadastrado"});
    }
    async login(req: Request, res: Response): Promise<Response> {
        const {senha, email} = req.body;

        const usuario = this.users.find(u => u.email === email);
        if(!usuario) {
            return res.status(401).json({mensagem: "lol2"});
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({mensagem: "Senha incorreta"});
        }
        const token = jwt.sign({nomeD: usuario.nome}, JWT_SECRET, {expiresIn: "1h"});

        return res.status(200);
    }
}