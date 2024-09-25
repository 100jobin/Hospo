const MongoClient = require('mongodb').MongoClient;

const state = {
    db: null
};

module.exports.connect = async function (done) {
    // MongoDB Atlas connection string with your credentials
    const url = 'mongodb+srv://Jobin:jobin%40123@cluster0.efxy5.mongodb.net/shopping?retryWrites=true&w=majority';
    
    // Database name
    const dbName = 'shopping';

    try {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        state.db = client.db(dbName);
        done();
    } catch (err) {
        done(err);
    }
};

module.exports.get = function () {
    return state.db;
};
