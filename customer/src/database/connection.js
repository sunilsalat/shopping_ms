const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async (mongo_uri) => {
  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
    process.exit(1);
  }
};
