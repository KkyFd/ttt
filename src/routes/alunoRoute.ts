import {Router} from "express";
import {alunoController} from "../controllers/alunoController";

const alunoRouter = Router();
const aluno = new alunoController();
/**
 * @swagger
 * components:
 *  schemas:   
 *      Aluno:
 *          type: object
 *          required:
 *              - nome
 *              - ra
 *          properties:
 *              nome:
 *                  type: string
 *                  description: Nome do aluno
 *              ra:
 *                  type: string
 *                  description: RA do aluno
 */

/**
 * @swagger
 * /aluno:
 *  get:
 *      summary: Lista todos os alunos
 *      tags: [Aluno]
 *      responses:
 *          200:
 *              description: Lista de alunos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Aluno'
 */

alunoRouter.get("/", (req, res) => aluno.get(req, res));
alunoRouter.post("/", (req,res) => aluno.post(req, res));

/**
 * @swagger
 * /aluno:
 *  post:
 *      summary: Cadastrar um aluno
 *      tags: [Aluno]
 *      responses:
 *          201:
 *              description: Aluno criado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Aluno'
 */
alunoRouter.put("/:ra", (req,res) => aluno.put(req, res));

export default alunoRouter;