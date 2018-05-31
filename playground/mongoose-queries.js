const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

// the following 3 (4) statements are all identical and do the same thing
// const {Todo} = require('./../server/models/todo');
// const Todo = require('./../server/models/todo').Todo;
// const todoModel = require('./../server/models/todo');
// const Todo = todoModel.Tod

// const {Todo} = require('./../server/models/todo');
//
// let id = '5b101abc513d6a2ffc4fd51d';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));
//

// challenge User.findById
const {User} = require('./../server/models/user');
let uid = '5b0d6e71566eac2954db4ad3'

User.findById(uid).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User By ID', user);
}).catch((e) => console.log(e));
