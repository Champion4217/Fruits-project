const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
   await mongoose.connect('mongodb://127.0.0.1/fruitsDB');
  console.log("Connected");
 
  const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true,"please check entry, no name specified"]
    },
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
    review: String
  });
 
  const Fruit = mongoose.model('Fruit', fruitSchema);
  
  const fruit = new Fruit({
    name: "banana",
    rating: 9,
    review: 'Pretty solid as a fruit.'
  });

  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
    
  });

  const pineapple = new Fruit({
    name: "pineapple",
    rating:9,
    review: "great fruit"
  });
  pineapple.save();

  const mango = new Fruit({
    name: "mango",
    rating: 8,
    review: " great fruit"
  });

  const Person = mongoose.model("Person", personSchema);

  const person = new Person({
    name: "john",
    age: 17,
    favouriteFruit: mango
  });
  
  //fruit.save();

  mango.save();

  person.save();

 /* const kiwi = new Fruit({
    name: "kiwi",
    rating:10,
    review: "pretty good"
  });

  const banana = new Fruit({
    name: "banana",
    rating: 9,
    review: "good"
  });

  Fruit.insertMany([kiwi, banana])
   .then(function (){
    console.log("successfully saved");
   })
   .catch(function(err){
    console.log(err);
   });*/

   Fruit.find()
   .then(function (fruits) {
    
    
     fruits.forEach(function(fruit){
      console.log(fruit.name);
     });
})
   .catch(function (err) {
     console.log(err);
});

Fruit.updateOne({_id:"641ebeb681da5571dec42c52"},{name: "kela"})
 .then(function(){
  console.log("successfully added");
 })
 .catch(function(err){
  console.log(err);
 });

 Fruit.deleteOne({_id:"641ec067303b5481a582faea"})
  .then(function(){
    console.log("successfully deleted");
  })
  .catch(function(err){
    console.log(err);
  });

  //Person.deleteMany({name:"john"})
   //.then(function(){
    //console.log("succefully same name person");
   //})
   //.catch(function(err){
    //console.log(err);
  // });
//Remember that all the code has to be within the main function in order for it to work (except for the 'require' thing of course)
}


/*const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1/fruitsDB');
  console.log("Connected");
 
  // What this will do is to create the database 'fruitsDB'
  // ALL THE CODE SHOULD BE WITHIN THE MAIN FUNCTION
  // Read the Mongoose Documentation
}*/
 



/*const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {   useNewUrlParser: true,
useUnifiedTopology: true
});
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
};*/