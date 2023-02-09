const express = require('express');
const { default: mongoose } = require('mongoose');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
require('dotenv').config()

const StartServer = async() => {

    const app = express();
    
    await databaseConnection(process.env.MONGODB_URI);
    
    await expressApp(app);

    app.listen(process.env.PORT, () => {
        console.log(`Sopping srv listening to port ${process.env.PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();