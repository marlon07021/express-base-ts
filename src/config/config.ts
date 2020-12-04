const config = {
    "jwtSecret": "DxKQ5bBTqeNMJ3IyONE5aPfnV7ppyL",
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
        "DB_NAME": "base_prod"
    },
    "staging" : {
        "DB_HOST": "mongodb",
        "DB_PORT": "27017",
        "DB_USER": "",
        "DB_PASS": "",
        "DB_NAME": "base_staging"
    },
    "development" : {
        "DB_HOST": "localhost",
        "DB_PORT": "27017",
        "DB_USER": "",
        "DB_PASS": "",
        "DB_NAME": "base_dev"
    }

};

export default config;
