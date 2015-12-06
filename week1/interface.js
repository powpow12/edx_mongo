/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection('movies').insert(doc, function(error, results){
  	if (error) {
  		console.log(error);
  		process.exit(1);
  	}
  });
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  var criteria = director;
  var query = {director : criteria};
  db.collection('movies').find(query).toArray(function(error, docs){
  	if (error) {
  		console.log(error);
  		process.exit(1);
  	}
  	console.log("this is error " + error);
  	console.log(Array.isArray(docs));
  	console.log(docs.length);
  	console.log(docs[0].title);
  	// console.log('Found docs:');
   //    docs.forEach(function(doc) {
   //      console.log(JSON.stringify(doc));
   //  });
  callback(null, docs);
  });
};