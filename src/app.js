const express = require('express')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')

var app = express()
const indexPath = path.join(__dirname, '../public/index.html')
const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath))


app.get('/', function (req, res) {
    res.sendFile(indexPath)
});

app.post('/', (req, res) => {
    var form = new formidable.IncomingForm({ hashAlgorithm: 'sha256' })
    form.parse(req)
    form.on('file', (name, file) => {
        const ext = path.extname(file.originalFilename)
        const new_path = path.join(__dirname, '../public/uploads/' + file.hash)
        fs.rename(file.filepath, new_path + ext, (err) => { if (err) console.error(`ERROR: ${err}`) });
        file.filepath = new_path
        console.log('Uploaded ' + file.hash)
        if (ext === '.cpp') {
            exec(`g++ -O2 -std=c++17 "${file.filepath}.cpp" -o "${file.filepath}"`, (err, stdout, stderr) => {
                if (err) console.error(`ERROR: ${err}`)
                else if (stderr) console.log(`stderr: ${stderr}`)
                else if (stdout) console.log(`stdout: ${stdout}`)
                exec(`"${file.filepath}"`, (stdout) => { if (stdout) console.log(stdout) });
            })
        }
    });
    res.sendFile(indexPath);
});
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} ...`)
});