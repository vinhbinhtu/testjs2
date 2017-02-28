var express= require('express');
var app= express();
var bodyParse=require('body-parser');

var	list=[{
	name:'AUDI',description:'Moto',createdAt:'28-02-2017'
},
{
	name:'BMW',description:'Car',createdAt:'27-02-2017'
},
{
	name:'LEXUS',description:'Bike',createdAt:'26-02-2017'
}];
app.use(express.static(__dirname+"/public"));
app.use(bodyParse.json());
app.get('/list',function(req,res){
	console.log("I received a GET request");



res.json(list);
});
app.post('/list',function(req,res){
	console.log("I received a POST request "+ JSON.stringify(req.body));
list.push(req.body);
console.log("list"+ JSON.stringify(list));
res.json(list);
});
 //var app.listen(process.env.PORT || 3000);
//console.log("server running on port 3000");
var server = app.listen(process.env.PORT || 3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})



