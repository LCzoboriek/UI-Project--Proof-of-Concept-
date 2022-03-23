const express = require('express');
const app = express();
const peopleClient = require('./db');


let tableName = 'people';
let myQuery = `SELECT * FROM ${tableName}`
console.log(myQuery);
peopleClient.query(myQuery, (err, result) => {
    if(err) {
        console.log(err);
    } else {
        console.log(result.rows[0]);
    }
})