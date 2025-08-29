import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de aluno",
            version: "1.0.0",
            description: "API feita em aula"
        },
        servers: [
            {url: "localhost:3000", description: "Servidor feito em aula, host local"},
        ]
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"]
};

export const opt = swaggerJSDoc(options);