var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    var age = parseInt(process.argv[2]);
    var query = {age: {$gt: age}};
    var options = {_id:0, name: 1, age: 1};
    
    if(err){throw err};
    
    db.collection('parrots').find(query, options).toArray(function(err, documents) {
        if(err){throw err}
        console.log(documents);
        db.close();
    });
    
});