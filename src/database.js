const { v4: uuidv4 } = require('uuid');
const Storage = require('./storage');

class Database {
  // Add a new document
  static async insert(collection, document) {
    const documents = await Storage.readCollection(collection);
    const newDoc = { ...document, _id: uuidv4() }; // Generate unique ID
    documents.push(newDoc);
    await Storage.writeCollection(collection, documents);
    return newDoc;
  }

  // Find all documents
  static async find(collection) {
    return await Storage.readCollection(collection);
  }
}

module.exports = Database;
