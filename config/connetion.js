const mysql = require('mysql')
const mysql_data = require('./mysql_data.json')


const objetctConnection  = {

    host : mysql_data.host,
    port : mysql_data.port,
    user : mysql_data.user,
    password : mysql_data.pass,
    database : mysql_data.database

}

const myConn = mysql.createConnection(objetctConnection)
module.exports = myConn