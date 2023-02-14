const express = require('express');
const { default: mongoose } = require('mongoose');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const { CreateChannel } = require('./utils');
require('dotenv').config()

const StartServer = async() => {

    const app = express();
    console.log(process.env.MONGODB_URI, 'is mongo uri>>>>')

    
    await databaseConnection(process.env.MONGODB_URI);

    const channel = await CreateChannel()
    
    await expressApp(app, channel);

    app.listen(process.env.PORT, () => {
        console.log(`Sopping srv listening to port ${process.env.PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();