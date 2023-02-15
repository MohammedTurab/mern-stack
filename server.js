require('dotenv').config();
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
		app.listen(port,function(){
			console.log("server started at port no 3000");
		});
	}
});
app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
