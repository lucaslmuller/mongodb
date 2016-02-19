var mongo = require('mongodb').MongoClient;
          
var query = {
    age: {
      $gt: +process.argv[2]
    }
};

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    var collection = db.collection('parrots');
    
    if(err){throw err};
    
    collection.count(query, function(err, count){
        if(err) throw err;
        console.log(count);
        db.close();
    })
});