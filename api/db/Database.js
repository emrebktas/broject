const mongoose = require("mongoose");

let instance = null;
class Database {
    
    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }
    async connect (options) {

        try {
            console.log("db connecting...");
            let db = await mongoose.connect(options.CONNECTION_STRING);
            this.mongoConnection = db;
            console.log("db connected");
        } catch (error) {
            console.error(err);
            process.exit();
        }
        
    }
};

module.exports = Database;

