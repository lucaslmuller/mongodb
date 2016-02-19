var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    var age = parseInt(process.argv[2]);
    var query = {age: {$gt: age}};
    
    if(err){throw err};
    
    db.collection('parrots').find(query).toArray(function(err, documents) {
        if(err){throw err}
        console.log(documents);
        db.close();
    });
    
});