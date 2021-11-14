const express = require('express');
const app = express();
const path = 3030;
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));


app.listen(process.env.PORT || port, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});