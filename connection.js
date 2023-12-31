const mongoose = require("mongoose");
const DatabaseUrl = process.env.DATABASE_URL;

mongoose.connect(DatabaseUrl);
const database = mongoose.connection;

database.on("error", () => {
  console.log(error);
});
database.on("connected", () => {
  console.log("Database Connected");
});
