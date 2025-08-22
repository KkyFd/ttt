import {Router} from "express";
import {alunoController} from "../controllers/alunoController";

const alunoRouter = Router();
const aluno = new alunoController();

alunoRouter.get("/", (req, res) => aluno.get(req, res));
alunoRouter.post("/", (req,res) => aluno.post(req, res));
alunoRouter.put("/:ra", (req,res) => aluno.put(req, res));

export default alunoRouter;