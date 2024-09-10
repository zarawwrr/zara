const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const myExam = {
    subject: "ITE314",
    exam: "P2",
    node: "NODEJS",
};

app.get('/', (req, res) =>{
    res.send("Welcome to my server! To learn more, try putting any of the following to the URL: ('/subject', '/exam', '/node')")
})
app.get('/subject', (req, res) => {
    res.send(myExam.subject);
});


app.get('/exam', (req, res) => {
    res.send(myExam.exam);
});


app.get('/node', (req, res) => {
    res.send(myExam.node);
});


app.get('/mydata', (req, res) => {
    res.send(myExam)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
