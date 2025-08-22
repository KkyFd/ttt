import {Request, Response} from "express";

interface Aluno {
    ra: String;
    nome: String;
}

export class alunoController {
    private alunos: Aluno[] = [];
    get(req: Request, res: Response): Response {
        return res.json(this.alunos);
    }
    post(req: Request, res: Response): Response {
        const {ra, nome} = req.body;
        const novoAluno: Aluno = {ra: ra, nome: nome};
        this.alunos.push(novoAluno);
        return res.status(201).json(novoAluno);
    }
}