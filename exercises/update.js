var mongo = require('mongodb').MongoClient;

var mod = { $set: { age: 40 } };
          
var query = {username: "tinatime"};

mongo.connect('mongodb://localhost:27017/' + process.argv[2], function(err, db) {
    var collection = db.collection('users');
    
    if(err){throw err};
    
    collection.update(query, mod);
    db.close()
});