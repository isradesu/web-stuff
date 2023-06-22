const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Olá mundo cruelaaaaaaadevil!")
})
app.listen(3000, () =>{
    console.log("Servidor web rodando e funcionando")
})
