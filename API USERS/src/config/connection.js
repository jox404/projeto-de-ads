const mongoose = require("mongoose");

async function connection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/empresa");
  } catch (error) {
    throw console.log(error);
  }
}

console.log("conectando-se ao DB empresa");

connection();
