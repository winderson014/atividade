const express = require('express');
const req = require('express/lib/request');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/angular'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/angular/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
})