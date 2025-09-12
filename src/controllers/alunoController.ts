import {Request, Response} from "express";
import { AlunoService } from "../services/AlunoService";

export class alunoController {
    private alunoService:  AlunoService;

    constructor () {
        this.alunoService = new AlunoService();
    }
    async get(req: Request, res: Response): Promise<Response> {
        const alunos = await this.alunoService.getAll();
        return res.json(alunos);
    }
    async post(req: Request, res: Response): Promise<Response> {
        const {ra, nome, email} = req.body;

        const novoAluno = await this.alunoService.create({
            ra, nome, email
        });
        return res.status(201).json(novoAluno);
    }
    async put(req: Request, res: Response): Promise<Response> {
        const ra = req.params.ra;
        let {e} = req.body;

        const aluno = this.alunos.findIndex(v => v.ra === ra);
        if (aluno === -1){return res.status(404).json({error: "xd"})}

        this.alunos[aluno] = { ra: ra, nome: e};
        return res.status(204).json({ ra: ra, nome: e});
    }
}