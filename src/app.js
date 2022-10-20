const express = require('express')
const formidable = require('formidable')
const path = require('path')
const {createHash} = require('crypto')
const bodyParser = require('body-parser')
const fs = require('fs')
const { exec } = require('child_process')

var app = express()
const indexPath = path.join(__dirname, '../public/index.html')
const staticPath = path.join(__dirname, '../public')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(staticPath))

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}


app.get('/', function (req, res) {
    res.sendFile(indexPath)
});

app.post('/ace', function (request, response, next){
    var fileHash = hash(request.body.mycode)
    console.log(fileHash)
        const new_path = path.join(__dirname, '../public/uploads/' + fileHash)
        fs.writeFile(new_path +'.cpp', request.body.mycode , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      if (ext === '.cpp') {
            exec(`g++ -O2 -std=c++17 "${new_path}.cpp" -o "${new_path}"`, (err, stdout, stderr) => {
                if (err) console.error(`ERROR: ${err}`)
                else if (stderr) console.log(`stderr: ${stderr}`)
                else if (stdout) console.log(`stdout: ${stdout}`)
                exec(`"${file.filepath}"`, (stdout) => { if (stdout) console.log(stdout) });
            })   
        }
    response.sendFile(indexPath);
});

app.post('')

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} ...`)
});