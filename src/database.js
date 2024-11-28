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

  // Find documents matching a query
  static async find(collection, query) {
    const documents = await Storage.readCollection(collection);
    return documents.filter(doc =>
      Object.keys(query).every(key => doc[key] === query[key])
    );
  }

  // Update a document by ID
  static async update(collection, id, updates) {
    const documents = await Storage.readCollection(collection);
    const index = documents.findIndex(doc => doc._id === id);
    if (index === -1) return null;

    documents[index] = { ...documents[index], ...updates };
    await Storage.writeCollection(collection, documents);
    return documents[index];
  }

  // Delete a document by ID
  static async delete(collection, id) {
    const documents = await Storage.readCollection(collection);
    const updatedDocs = documents.filter(doc => doc._id !== id);
    if (updatedDocs.length === documents.length) return false;

    await Storage.writeCollection(collection, updatedDocs);
    return true;
  }
}

module.exports = Database;
