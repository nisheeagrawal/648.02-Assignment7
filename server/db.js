const { MongoClient } = require('mongodb');

const client = new MongoClient(`mongodb+srv://nishee0798:${process.env.ATLAS_PASSWORD}@cs648-02.6d82c.mongodb.net/Assignment-4`, {
  useUnifiedTopology: true,
});

let inventory; let
  counter;
client.connect((err, cl) => {
  const db = cl.db();
  inventory = db.collection('inventory');
  counter = db.collection('counter');
});

function getInventory() { return inventory; }
function getCounter() { return counter; }

module.exports = { getCounter, getInventory };
