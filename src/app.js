const express = require('express')
const formidable = require('formidable')
const path = require('path')
const {createHash} = require('crypto')
const bodyParser = require('body-parser')
const util = require('util')
const fs = require('fs')
var cookieParser = require('cookie-parser');
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
    res.sendfile(indexPath)
});

app.post('/', function (request, response, next){
    // var form = new formidable.IncomingForm({ hashAlgorithm: 'sha256' });
    // form.parse(request)
    // form.on('file', (name, file) => {
    //     const ext = path.extname(file.originalFilename)
    //     const new_path = path.join(__dirname, '../public/uploads/' + file.hash)
    //     fs.rename(file.filepath, new_path + ext, (err) => { if (err) console.error(`ERROR: ${err}`) });
    //     file.filepath = new_path
    //     console.log('Uploaded ' + file.hash)
    //     if (ext === '.cpp') {
    //         exec(`g++ -O2 -std=c++17 "${file.filepath}.cpp" -o "${file.filepath}"`, (err, stdout, stderr) => {
    //             if (err) console.error(`ERROR: ${err}`)
    //             else if (stderr) console.log(`stderr: ${stderr}`)
    //             else if (stdout) console.log(`stdout: ${stdout}`)
    //             exec(`"${file.filepath}"`, (stdout) => { if (stdout) console.log(stdout) });
    //         })   
    //     }
    // });
    //we can handle the above post request seperately i was just testing it
    var fileHash = hash(request.body.mycode)
    console.log(fileHash)
    
        //fs.writeFile(__dirname, '../public/uploads/' + fileHash +'.cpp', request.body.mycode , function (err) {
        //If i specify path like this it gives an encoding error. IDK why maybe reading the documentation will give us a hint
        fs.writeFile(fileHash +'.cpp', request.body.mycode , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    response.sendfile(indexPath);
});
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} ...`)
});