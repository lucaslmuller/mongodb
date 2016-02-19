var mongo = require('mongodb').MongoClient;

var mod = { firstName: process.argv[2], 
            lastName: process.argv[3]
          };

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    var collection = db.collection('docs');
    
    if(err){throw err};
    
    collection.insert(mod, function(err, data){
        if(err){throw err};
        console.log(JSON.stringify(mod));
        db.close();
    });
    
});