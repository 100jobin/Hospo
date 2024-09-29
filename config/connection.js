const MongoClient = require('mongodb').MongoClient;

const state = {
    db: null
};

module.exports.connect = async function (done) {
    const url = 'mongodb+srv://Jobin:bIOq7XvrlmdTyR3G@cluster0.efxy5.mongodb.net/shopping?retryWrites=true&w=majority';
    const dbName = 'shopping';

    try {
        const client = await MongoClient.connect(url);
        state.db = client.db(dbName);
        console.log("Connected to MongoDB Atlas!");
        done(null); // Pass null to indicate no error
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        done(err); // Pass the error to the callback
    }
};

module.exports.get = function () {
    return state.db;
};



