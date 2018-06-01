const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// This wil remove ALL todos
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: ''}).then((todo) => {

});

Todo.findByIdAndRemove('5b118873ef6f6a77b4b1fb8b').then((todo) => {
  console.log(todo);
});
