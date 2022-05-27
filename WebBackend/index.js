/* :MONGODB: */

/*
First time setup:
> After Installing Mongodb edit the 'path' environment variable to add  the mongodb path,
> create a folder structure 'C:\data\db' in C:
> At the cmd prompt and type 'mongod'
> Open another cmd prompt and type 'mongo'. This will activate the mongo prompt if the setup is successful.
> To check the existing dbs use the following command,
    > show dbs  // By default there maybe 3 dbs namely 'admin', 'config', 'local'.
*/

/* 
Commands to use to create a db insert data etc.
> At the cmd prompt type 'mongo' and enter
> show dbs  // to see the existing dbs. Lists out the dbs available. You can choose your db from if you want to use the existing one
> use employees     // Will switch to employees db. 'use' will create a new employees db if not existing.
> show collections  // Will show the collections, if any for an existing db.
> db.createCollection('employees')  // Will create collections of employees in employee db. You can use the 'show colloections' if you want to confirm.\
> db.employees.insert({empId:101, empName:'Rajanikanth'})   // We can insert as many records as we want in the employees collections
> db.employees.find()   // to see the db employees collection of the employee db with records. It will show something as follows,
    { "_id" : ObjectId("6290b8a4ad7696d08bd703d4"), "empId" : 101, "empName" : "Rajanikanth" }
    { "_id" : ObjectId("6290b8b7ad7696d08bd703d5"), "empId" : 102, "empName" : "Rajesh" }
    { "_id" : ObjectId("6290b8d4ad7696d08bd703d6"), "empId" : 103, "empName" : "Ramesh" }
> db.employees.find().pretty()  // to pretty print in readable format. It will pring the output as follows,
    {
        "_id" : ObjectId("6290b8a4ad7696d08bd703d4"),
        "empId" : 101,
        "empName" : "Rajanikanth"
    }
    {
            "_id" : ObjectId("6290b8b7ad7696d08bd703d5"),
            "empId" : 102,
            "empName" : "Rajesh"
    }
    {
            "_id" : ObjectId("6290b8d4ad7696d08bd703d6"),
            "empId" : 103,
            "empName" : "Ramesh"
    }
*/

var express = require('express');

var app = express();

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/usersdb", (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("connected to db");
    }
})

app.listen(9011, function() {
    console.log("server started.");

});