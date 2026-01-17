# Projeto Main Brain#

## I will try to document all the changes, and mainly the step by step of the project, focusing in to show how it is done ## 

__All these code is dependency of Gregori kempf, GitHub: GregKmpf__

First of all this is a study even for me, so just for the start:

# Connect GitHub #

1 - git --version  -> Ve se o git está isntalado
2 - git config --global user.email "seuemail@gmail.com"
3 - git init
4 - git add .
5 - git commit -m "Primeiro teste de commit do Main_Brain"
6 - git push

# Comandos para criação do Projeto # 
### Criando o pacote JSON Package (Guarda dependencias) --> npm init -y
### Cria a Pasta NodeModules (Lida com HTTPS)  --> npm install express
### Executa o Index  --> node index.js 

*Now we create the archive index.js*
*with this code*

const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Servidor está rodando.."); 
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});