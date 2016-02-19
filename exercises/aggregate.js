var mongo = require('mongodb').MongoClient;

var match = { $match : { size : process.argv[2] } };

var group = { 
  $group: { 
    _id: 'total', 
    total: {  $avg: '$price'}  
  }
};

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err
  var collection = db.collection('prices')
  
  collection.aggregate([match, group]).toArray(function(err, results) {
      if(err) throw err;
      console.log(results[0].total.toFixed(2))
      db.close();
    })

  
    
})