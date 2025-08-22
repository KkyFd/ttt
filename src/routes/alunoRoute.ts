import {Router} from "express";
import {alunoController} from "../controllers/alunoController";

const alunoRouter = Router();
const alunoController = new Aluno();

alunoRouter.get("/", (req, res) => alunoController.get(req, res));
alunoRouter.post("/", (req,res) => alunoController.post(req, res));

export default alunoRouter;