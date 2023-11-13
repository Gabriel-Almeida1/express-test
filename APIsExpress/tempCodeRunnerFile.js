app.get('/alunos', (req, res) => {
    console.log('students entered')
    res.status(200).send("it worked");
})