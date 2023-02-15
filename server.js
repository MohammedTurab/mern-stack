require('dotenv').config();
const userLib = require("./backendd/lib/userLib");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/resume', function(req, res) {
    res.sendFile(__dirname + '/resume.html');
});

app.get('/card', function(req, res) {
    res.sendFile(__dirname + '/card.html');
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