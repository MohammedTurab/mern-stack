require('dotenv').config();
const userLib = require("./backendd/lib/userLib");
const todoLib = require("./backendd/lib/todoLib");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const options = { extensions:['html','htm','css','js','ico','jpg','jpeg','png','svg'],index:['card.html']}

app.use(express.static(__dirname));

app.use(express.static("public",options));

app.get("/card", function(req, result){
	result.sendFile(__dirname+"/card.html");
});

app.get("/resume", function(req, result){
	result.sendFile(__dirname+"/resume.html");
});

app.get("/weather1", function(req, result){
	result.sendFile(__dirname+"/weather1.html");
});

app.get("/todo", function(req, result){
	result.sendFile(__dirname+"/todo.html");
});

app.get("/api/todos",function(request,response){
	response.json([
		{name:"todo1" , isCompleted:true},
		{name:"todo2" , isCompleted:false},
		{name:"todo3" , isCompleted:true},
	])
});

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err)
	{
		console.error(err);
	}
	else
	{
		console.log("DB Connected");


		// userLib.createFirstUser(function(err,result)
		// {
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.createUser({userName : "turab1" , yearOfGraduation : 2025},function(err,result){
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.updateUser("turab1", {yearOfGraduation: 2000}, function(err,result)
		// {
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.deleteUser("turab1",function(err,result)
		// {
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getUsersbyFilter({yearOfGraduation : 2000}, function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getAllUsers(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});