const express = require("express");
const bp = require("body-parser");
const https = require("https");
const bodyParser = require("body-parser");
var _ = require('lodash');
const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set("view engine", 'ejs');sad
let daily = [];
const start = "lorem epsum is the main language of the main in the string =est part of the youth india";
const abt = "lorem epsum is the main language of the main in the string =est part of the youth india";
const cont = "lorem epsum is the main language of the main in the string =est part of the youth india";
app.get('/', function (req, res)
{
    var sze = daily.length;
    res.render("home", { st: start, size: sze, dly: daily });
    
});
app.get('/about', function (req, res)
{
    res.render("about",{at : abt});
});
app.get('/contact', function (req, res)
{
    res.render("contact",{ct : cont});
});
app.get('/compose', function (req, res)
{
    res.render("compose");
}); 

app.post('/compose', function (req, res)
{
    var post = {
        x: req.body.inpt,
        y: req.body.inpp
    };
    daily.push(post);
    res.redirect("/");
}); 
app.get('/daily/:inpt', function (req, res)
{
    var de = _.lowerCase(req.params.inpt);
    daily.forEach(function (post) {
        var e = _.lowerCase(post.x);

        if (e == de)
        {
            res.render("post", { title: post.x, content: post.y });
        }
    });
}); 
app.listen(3000, function () {
    console.log("Blog");
});