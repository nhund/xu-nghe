'use strict'
const express = require('express');
const path = require('path');
const port =  8080;
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname + '/view'));
app.use(express.static(__dirname + '/public'));

app.get("/xu-nghe", function (req, res) {
    res.render("index.ejs",{title:"Trang chủ"})
});
app.get("/tin-tuc", function (req, res) {
    res.render("index.ejs",{title:"Trang chủ"})
});
app.get("/lien-he", function (req, res) {
    res.render("index.ejs",{  title:"lien-he"})
});
app.get("/thong-tin-chi-tiet", function (req, res) {
    res.render("index.ejs",{title:"thong-tin-chi-tiet"})
});

app.get("/chi-tiet-san-pham", function (req, res) {
    res.render("index.ejs",{title:"chi-tiet-san-pham"})
});

app.listen(port,()=>{console.log('listen port:'+port)});