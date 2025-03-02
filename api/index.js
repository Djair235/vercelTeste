const path = require("path")

export default function rotaPrincipal(req, res) {
    // res.status(200).json({message: "ROTA PRINCIPAL FUNCIONANDO!"})
    res.sendFile(path.join(__dirname, "./html/index.html"))
}