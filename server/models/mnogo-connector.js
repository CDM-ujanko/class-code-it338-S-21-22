import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

let host = process.env.MONGODB_HOST,
    port = process.env.MONGODB_PORT;

const db = await (async () => {
  let client = await MongoClient.connect(`mongodb://${host}:${port}`);
  return client.db(process.env.MONGODB_DATABASE);
})();

async function create (cName, data) {
  let collection = db.collection(cName);
  return await collection.insertOne(data);
}

async function read (cName, key) {
  let collection = db.collection(cName);
  return await collection.findOne({key: key});
}

async function update (cName, key, data) {
  let collection = db.collection(cName);
  return await collection.updateOne({key: key}, data);
}

async function destroy (cName, key) {
  let collection = db.collection(cName);
  let doc = await collection.findOne({key: key});
  if (!doc) {
    throw Error('No such class');
  }

  return await collection.findOneAndDelete({key: key});
}

export {
  create,
  read,
  update,
  destroy
}
