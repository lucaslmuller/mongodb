var mongo = require('mongodb').MongoClient;
          
var query = {_id: process.argv[4]};

mongo.connect('mongodb://localhost:27017/' + process.argv[2], function(err, db) {
    var collection = db.collection(process.argv[3]);
    
    if(err){throw err};
    
    collection.remove(query, function(err){
        if(err) throw err;
        db.close();
    })
});