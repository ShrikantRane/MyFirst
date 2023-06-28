var exp=require('express');
var bp=require('body-parser');

var app=exp();
app.use(express.static(path.join(__dirname,'public')));
app.use(bp.urlencoded({extended: false}));
app.use(exp.static('public'))
app.listen(9000,function(){
    console.log("Port-9000");
})

app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/Form.html");
})

app.post('/getDataTable',function(req,res){
    var nd=req.body.nid;
    var dd=req.body.did;
    var ed=req.body.eid;
    var qd=req.body.qid;
    str=""
    str+="<table border='2' style='border-collapse:collapse'>"
    str+="<tr>"   
    str+="<td>"+nd+"</td>"
    str+="<td>"+dd+"</td>"
    str+="<td>"+ed+"</td>"
    str+="<td>"+qd+"</td>"
    str+="</tr>"  
    str+="</table>" 
    res.send(str);
})
