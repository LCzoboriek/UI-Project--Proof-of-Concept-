const {Client} = require('pg');

const peopleClient = new Client({
    user: 'Luke',
    host: '192.168.50.50',
    database: 'iics',
    password: 'Defiance567/',
    port: 5445
})

peopleClient.connect(function(err){
    if(err) throw err
})

module.exports = peopleClient;