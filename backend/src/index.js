const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Servidor está rodando.."); 
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});

//Lembrando que tem que estar dentro da pasta backend para rodar o código
//Test if the server is running search on web http://localhost:3000

