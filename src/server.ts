import express from "express";
import alunoRouter from "./routes/alunoRoute";

import swaggerUi  from 'swagger-ui-express'
import {opt} from "./config/swagger";
import authRouter from "./routes/authRoute";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(opt));
app.use("/aluno", alunoRouter);
app.use("/auth", authRouter);
app.listen(3000, () => {
    console.log("Server up");
})

