// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deletemany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  //deleteone
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.close();

  // db.collection('Users').deleteMany({name: 'Pavol'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: 123}).then((result)=>{
    console.log(result);
  })
});
