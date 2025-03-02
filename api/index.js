const path = require("path");

export default function rotaPrincipal(req, res) {
    res.sendFile(path.join(__dirname, "../html", "index.html"));
}
