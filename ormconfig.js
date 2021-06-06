module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "charset": process.env.DB_CHARSET,
    "entities": [
        "dist/**/*.entity{.ts,.js}"
    ],
    "synchronize": process.env.DB_SYNCHRONIZE
}