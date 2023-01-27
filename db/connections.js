const mysql = require('mysql2')

const db = mysql.makeConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees'
    }
)

export default mysql()