"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor(dbConfig) {
    }
}
exports.Database = Database;
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "sbailleul",
    password: "phdvotu5632"
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
