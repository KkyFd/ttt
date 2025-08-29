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
    put(req: Request, res: Response): Response {
        const ra = req.params.ra;
        let {t, e} = req.body;

        const aluno = this.alunos.findIndex(v => v.ra === ra);
        console.log(t);
        console.log(e);
        if (aluno === -1){return res.status(404).json({error: "xd"})}

        this.alunos[aluno] = { ra: ra, nome: e};
        return res.json({ ra: ra, nome: e});
    }
}