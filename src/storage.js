const fs = require('fs-extra');
const path = require('path');

// Define storage directory
const STORAGE_DIR = path.join(__dirname, 'data');

// Ensure storage directory exists
fs.ensureDirSync(STORAGE_DIR);

class Storage {
  static getCollectionPath(collection) {
    return path.join(STORAGE_DIR, `${collection}.json`);
  }

  static async readCollection(collection) {
    const filePath = this.getCollectionPath(collection);
    if (await fs.pathExists(filePath)) {
      const data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  }

  static async writeCollection(collection, data) {
    const filePath = this.getCollectionPath(collection);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  }
}

module.exports = Storage;
