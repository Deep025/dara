var exp=require('express');
var bp=require('body-parser');
var app=exp();

app.use(bp.urlencoded({extended:false}))
app.listen(9000,function(){
    console.log("Server started at 9000");
})
app.get('/getform', function(req,res){
    res.sendFile(__dirname+'/prn53.html');
});
app.post('/getDataTable', function(req,res){
    var str="<table border='1'>";
    str+="<tr>";
    str+="<td>name</td>";
    str+="<td>"+req.body.nm+"</td>";
    str+="</tr>";
    str+="<tr>";
    str+="<td>birthdate</td>";
    str+="<td>"+req.body.bdate+"</td>";
    str+="</tr>";
    str+="<tr>";
    str+="<td>Mail id</td>";
    str+="<td>"+req.body.emid+"</td>";
    str+="</tr>";
    str+="<tr>";
    str+="<td>Qualification</td>";
    str+="<td>"+req.body.qual+"</td>";
    str+="</tr>";
    res.send(str);
})
app.all('*', function(req,res){
    res.send("<p>Invalid URL</p>");
})