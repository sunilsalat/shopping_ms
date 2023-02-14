const dotEnv = require("dotenv");

dotEnv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  QUEUE_NAME: process.env.QUEUE_NAME,
  CUSTOMER_BINDING_KEY: process.env.CUSTOMER_BINDING_KEY,
};
