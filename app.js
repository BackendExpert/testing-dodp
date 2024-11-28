const Database = require('./src/database');

(async () => {
  const collection = 'users';

  // Insert a document
  const newUser = { name: 'jehan', age: 24, email: 'jehan@123.com', gender: 'male' };
  const insertedUser = await Database.insert(collection, newUser);
  console.log('Inserted:', insertedUser);

  // Retrieve all documents
  const users = await Database.find(collection, {});
  console.log('All Users:', users);

  // Update a user
  const updatedUser = await Database.update(collection, insertedUser._id, { age: 25 });
  console.log('Updated:', updatedUser);

  // Delete a user
  const isDeleted = await Database.delete(collection, insertedUser._id);
  console.log('Deleted:', isDeleted);
})();
