const connection = require('../config/connection');

class employee {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.promise().query
    }
}