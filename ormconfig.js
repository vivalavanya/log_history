module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": proccess.env.DB_USER,
    "password": proccess.env.DB_PASSWORD,
    "database": proccess.env.DB_NAME,
    "entities": [
        "dist/**/*.entity{.ts,.js}"
    ],
    "synchronize": false
}