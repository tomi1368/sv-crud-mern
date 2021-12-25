const mongoose = require('mongoose');
const {MONGO_DB_URI} = process.env


mongoose
  .connect(MONGO_DB_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
  }) 
  .then((res) => console.log("conectado a mongo"))
  .catch((err) => console.log(err));