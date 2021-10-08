const express=require("express");
const bodyParser=require("body-parser");
var app=express();
var msg;
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.get("/",function(req,res)
{
  res.sendfile(__dirname+"/index.html");
});
app.listen(3000,function()
{
  console.log("server started a@ port 3000");
});
app.post("/result",function(req,res){
var name=req.body.username;
var tenth=req.body.ten;
var twelth=req.body.twelve;
var pa=req.body.gpa;


res.render('gpa',{user:name,ten:tenth,twelve:twelth,gpa:pa});
});
