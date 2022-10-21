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

app.use(express.static(staticPath));
app.engine('html', require('ejs').renderFile);
function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}


app.get('/', function (req, res) {
    res.render(indexPath , {codeBody: ""})
});

app.post('/ace', function (request, response, next){
    var fileHash = hash(request.body.mycode)
    let ext = request.body.ext
    console.log(fileHash)
        const new_path = path.join(__dirname, '../public/uploads/' + fileHash)
        fs.writeFile(new_path +ext, request.body.mycode , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      if (ext === '.cpp') {
            exec(`g++ -O2 -std=c++17 "${new_path}.cpp" -o "${new_path}"`, (err, stdout, stderr) => {
                if (err) console.error(`ERROR: ${err}`)
                else if (stderr) console.log(`stderr: ${stderr}`)
                else if (stdout) console.log(`stdout: ${stdout}`)
                exec(`"${new_path}"`, (stdout) => { if (stdout) console.log(stdout) });
            })   
        }else{
            console.log(ext + "File recieved")
        }
    response.render(indexPath);

        
});

app.post('/file', function(request, response){
    var form = new formidable.IncomingForm({ hashAlgorithm: 'sha256' });
    form.parse(request)
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
    response.render(indexPath);
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} ...`)
});