const express = require("express");
const app = express();
const path = require("path");

const publichPath = path.resolve(__dirname,"./public")
app.use(express.static(publichPath))



app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
});

app.get("/ingresa", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
});

app.get("/creatucuenta", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Todo piola en el area 300")
});