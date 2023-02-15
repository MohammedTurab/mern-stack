require('dotenv').config();
const userLib = require("./backendd/lib/userLib");
const express = require('express');
const mongoose=require("mongoose");


const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html")
	
});
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err){
		console.error(err);
	}
	else{
		console.log("DB connected");
		// TODO : do not create a user 1 user exist in the table
		userLib.createFirstUser(function(err,res){
			if(err){
				console.error(err);
			}
			else{
				console.log(res);
			}
		});
		app.listen(port,function(){
			console.log("server started at port no 3000");
		});
	}
});
app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
