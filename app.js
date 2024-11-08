const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static('public'));
const path = require('path');

app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/projects',(req,res)=>{
    res.render('projects');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/programming',(req,res)=>{
    res.render('programming');
});
app.get('/design',(req,res)=>{
    res.render('design');
});
app.get('/pproject1',(req,res)=>{
    res.render('pproject1');
});
app.get('/pproject2',(req,res)=>{
    res.render('pproject2');
});
app.get('/dproject1',(req,res)=>{
    res.render('dproject1');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));