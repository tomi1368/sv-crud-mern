require('dotenv').config()
require("./db/config/dbConnection")
const express = require("express")
const cors = require("cors")
const methodOverride = require("method-override")
const app = express()
const PORT = process.env.PORT || 4001
const userController = require("./controllers/usersController")
//MiddleWares
app.use(express.json())
app.use(cors())
app.use(methodOverride());

//Controllers

app.use("/api/users",userController)


//handle error

//Listen
app.listen(PORT,()=>{
    console.log(`levanto puerto ${PORT}`)
})


module.exports = app