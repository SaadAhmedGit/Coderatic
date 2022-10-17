const express = require('express')
const crypto = require('crypto')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

var app = express();
const indexPath = path.join(__dirname, '../public/index.html');
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));


app.get('/', function (req, res) {
    res.sendFile(indexPath);
});


app.post('/', function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file) {
        const u_id = crypto.createHmac('sha256', file.originalFilename).digest('base64');
        const ext = path.extname(file.originalFilename);
        let newPath = path.join(__dirname, '../uploads/' + u_id + ext);
        file.filepath = newPath;
    });

    form.on('file', function (name, file) {
        console.log('Uploaded ' + file.originalFilename);
    });
    res.sendFile(indexPath);
});
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} ...`)
});