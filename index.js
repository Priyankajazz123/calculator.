const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmiCalculator",function(req,res)
{
  res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var op=req.body.op;
  if(op==="+")
  var result=num1+num2;
  else if(op==="-")
  var result=num1-num2;
  else if(op==="*")
  var result=num1*num2;
  else if(op==="/")
  var result=num1/num2;
  else {
    res.send("invalid operator");
  }
  res.send("the result is "+result);
});

app.post("/bmiCalculator",function(req,res)
{
  var weight=Number(req.body.wt);
  var height=Number(req.body.ht);
  var result1=weight/(height*height);
  res.send("your BMI is "+result1);
})

app.listen(3000,function()
{
  console.log("server started at port 3000");
});
