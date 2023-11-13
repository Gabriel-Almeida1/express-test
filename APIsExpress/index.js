const express = require('express'); 
const app = express(); 
app.use(express.json()) 

app.get('/alunos', (req, res) => {
    console.log(req.query) //
    console.log('students entered')
    res.status(200).send("it worked");
})

app.get('/alunos/:id/:other', (req, res) => { 
    console.log(req.params.id)
    console.log(req.params.other)
    console.log('students entered')
    res.status(200).send("it worked");
})

app.post('/alunos', (req, res) => {
    console.log(req.body)
    console.log('students entered')
    res.status(200).send(req.body);
})

app.listen(3000, () => { 
    console.log('server initialized')
}); 

