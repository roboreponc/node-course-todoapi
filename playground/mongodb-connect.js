// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
     if (err) {
       return console.log('Unable to connect to MongoDB server');
     }
     console.log('Connected to MongoDB server');
     const db = client.db('ToDoApp')

     db.collection('Todos').insertOne({
       text: 'Another ToDo',
       completed: false
     }, (err, result) => {
       if (err) {
         return console.log('Unable to insert todo', err)
       }
       console.log(JSON.stringify(result.ops, undefined, 2));
     });

     // Create a new 'Users' collection
     // db.collection('Users').insertOne({
     //   name: 'RoBo',
     //   age: 34,
     //   location: 'Raleigh'
     // }, (err, result) => {
     //   if (err) {
     //     return console.log('Unable to insert User', err)
     //   }
     //   console.log(result.ops[0]._id.getTimestamp());
     // });

     client.close()
});
