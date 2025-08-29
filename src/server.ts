import express from "express";
import alunoRouter from "./routes/alunoRoute";

import swaggerUi  from 'swagger-ui-express'
import {opt} from "./config/swagger";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(opt));
app.use("/aluno", alunoRouter);
app.listen(3000, () => {
    console.log("Server up");
})

