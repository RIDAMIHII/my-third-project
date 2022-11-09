var express = require('express');
const { readFileSync } = require('fs');
var path = require('path');
var fs = require('fs');

var data = JSON.parse(fs.readFileSync('./data.json'));
//
var app = express();

//
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','pug');

//
app.get('/',(req,res) =>{
        
    // let articles = [
    //     {
    //         id: 1,
    //         title: 'Articele one',
    //         author: 'Brad Traversy',
    //         body: 'This is article one'
    //     },
    //     {
    //         id: 2,
    //         title: 'Articele two',
    //         author: 'Brad Traversy',
    //         body: 'This is article two'
    //     },
    //     {
    //         id: 3,
    //         title: 'Articele three',
    //         author: 'Brad Traversy',
    //         body: 'This is article three'
    //     },
    // ]

    res.render('index',{
        title: 'world',
        articles : data
    });
})

app.get('/articles/add',(req,res) =>{
    
    //res.send("this is ur id : "+req.params.id)
    res.render('articleAdd',{
        title: 'world',
    });
})


//
app.listen(3000,()=>{
    console.log("i am listenning to ur port");
})