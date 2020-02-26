const config = {
    "mongoOpts": {
        "useNewUrlParser": true,
        "useCreateIndex": true,
        "useUnifiedTopology": true
    },
    "port" : 3000,
    "production" : {
        "DB_HOST": "localhost",
        "DB_PORT": "27017",
        "DB_USER": "",
        "DB_PASS": "",
        "DB_NAME": ""
    },
    "production_container" : {
        "DB_HOST": "mongodb",
        "DB_PORT": "27017",
        "DB_USER": "",
        "DB_PASS": "",
        "DB_NAME": ""
    },
    "development" : {
        "DB_HOST": "localhost",
        "DB_PORT": "27017",
        "DB_USER": "",
        "DB_PASS": "",
        "DB_NAME": ""
    },
    "development_container" : {
        "DB_HOST": "mongodb",
        "DB_PORT": "27017",
        "DB_USER": "",
        "DB_PASS": "",
        "DB_NAME": ""
    }
}

export default config
