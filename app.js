const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});
const insertDocuments = function(db,callback){
    const collection = db.collection("fruits");
    collection.insertMany([
        {
            name : "Apple",
            score : 8,
            review: "Great fruit"
        },
        {
            name : "Orange",
            score: 6,
            review: "kinda sour"
        },
        {
            name : "Mango",
            score : 10,
            review : "Mindblowing"
        }    

    ], function(err,result){
        assert.equal(err,null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("inserted 3 documents");
        callback(result);
    });
};

const findDocuments = function(db, callback){
    const collection = db.collection("fruits");
    collection.find({}).toArray(function(err, fruits){
        assert.equal(err,null);
        console.log("found");
        console.log(fruits)
        callback(fruits);
    });
};
