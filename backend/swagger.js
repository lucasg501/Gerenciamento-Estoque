const CategoriaModel = require("./model/categoriaModel");
const ItemModel = require("./model/itemModel");
const { title } = require("process");

const swaggerAutogen = require("swagger-autogen")({openapi: "3.0.0"});

const doc = {
    info: {
        title: "Gerenciamento Estoque",
        description: "API para gerenciamento de estoque"
    },
    host: "localhost:4000",
    securityDefinitions:{
        apiKeyAuth:{
            type: "apiKey",
            in: "header",
            name: "keyapi",
            description: "Enter JWT token",
        },
    },
    components: {
        schemas:{
            categoria:new CategoriaModel(1, "Roupas"),
            itens: new ItemModel(10, "Camiseta DBZ", 25, 15, 80, 1)
        }
    }
};

let outputJson = './outputSwagger.json';
let endpoints = ['./index.js']

swaggerAutogen(outputJson,endpoints, doc)
.then(r=>{
    require('./index.js')
});