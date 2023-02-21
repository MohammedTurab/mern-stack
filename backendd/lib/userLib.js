const userModel = require("../modell/userModel");

module.exports.getAllUsers = async function(callback) {
    try {
        var users = await userModel.find({});
        callback(null, users);
    } 
    catch (err) {
        callback(err, null);
    }
}

module.exports.createFirstUser = async function(callback) {
    try {
        var user = {
            username : "turab",
            yearOfGraduation : 2024
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null,result);
    } 
    catch (err) {
        callback(err, null);
    }
}


module.exports.createUser = async function(user,callback) {
    try {
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}

module.exports.updateUser = async function(username,data,callback) {
    try {
        var query = {
            userName : username
        };
        var result = await userModel.updateOne(query,data);
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}


module.exports.deleteUser = async function(username,callback)
{
    try{
        var query = {
            userName : username,
        };
        var result = await userModel.deleteOne(query);
        callback(null,result);
    }
    catch(err)
    {
        callback(err,null);
    }
}

module.exports.getUsersbyFilter = async function(filter,callback) {
    try {
        var user = await userModel.find(filter);
        callback(null,user);
    } 
    catch (err) {
        callback(err, null);
    }
}