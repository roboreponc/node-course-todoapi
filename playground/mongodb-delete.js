// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('ToDoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany challenge
  // db.collection('Users').deleteMany({name: 'Bolser'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete challenge
  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b070151c71b6147b2815a81')}).then((result) => {
    console.log(result);
  });

//  client.close()
});
