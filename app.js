const Database = require('./src/database');

(async () => {
  const collection = 'users'; // Name of the collection (JSON file)

  // Add a new user
  const newUser = {
    name: 'Kamal',
    age: 25,
    email: 'jehansssss@123.com',
    gender: 'female',
  };

  console.log('Adding new user...');
  const insertedUser = await Database.insert(collection, newUser);
  console.log('User added:', insertedUser);

  // Retrieve all users
  console.log('Fetching all users...');
  const users = await Database.find(collection);
  console.log('All Users:', users);

  // File location where the data is stored
  console.log(`JSON file location: ${require('path').join(__dirname, 'data', `${collection}.json`)}`);
})();
