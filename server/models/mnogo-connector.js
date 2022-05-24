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

async function keys (cName, key) {
  let collection = db.collection(cName);
  return await collection.find({})
      .project({[key]: true, '_id': false})
      .toArray()
}

async function read (cName, key, value) {
  let collection = db.collection(cName);
  return await collection.findOne({[key]: value});
}

async function update (cName, key, value, data) {
  let collection = db.collection(cName);
  return await collection.updateOne({[key]: value}, data);
}

async function destroy (cName, key, value) {
  let collection = db.collection(cName);
  let doc = await collection.findOne({[key]: value});
  if (!doc) {
    throw Error('No such class');
  }

  return await collection.findOneAndDelete({key: key});
}

export {
  create,
  keys,
  read,
  update,
  destroy
}
