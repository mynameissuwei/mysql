
const env= process.env.NODE_ENV // 环境参数

let MYSQL_CONF 

if(env === 'dev') {

    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port:'3306',
        database: 'suwei'
    }
    
}

if(env === 'pro') {

    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port:'3306',
        database: 'suwei'
    }

}

module.exports = {
    MYSQL_CONF
}